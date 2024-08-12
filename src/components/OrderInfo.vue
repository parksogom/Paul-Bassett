<template>
  <v-container>
    <div class="header">
      <div @click="goBack" class="goBack">
        <v-icon size="28">chevron_left</v-icon>
      </div>
      <p class="menu_title">주문하기</p>
    </div>
    <!-- 선택된 매장 정보 -->
    <div v-if="selectedStore" class="select_area">
      <div class="select_area_left">
        <span class="card_title">
          <v-icon>location_on</v-icon> {{ selectedStore.name }}
        </span>
        <span class="card_subtitle">{{ selectedStore.address }}</span>
      </div>
    </div>

    <v-row class="white mt-6 pl-10 pr-10">
      <v-col cols="12" class="d-flex justify-space-between" v-for="item in cartItems" :key="item.id">
        <v-col cols="4">
          <v-img :src="item.img" :alt="item.name" style="width: 110px;" class="rounded-xl ml-2"></v-img>
        </v-col>
        <v-col cols="8" class="pa-5">
          <div class="d-flex justify-space-between">
            <p>{{ item.name }}</p>
            <p>{{ item.totalPrice.toLocaleString() }}원</p>
          </div>
          <p class="text_gray300">{{ item.options.IceHot }}</p>
          <p class="text-end mt-8">{{ item.totalPrice.toLocaleString() }}원</p>
        </v-col>
      </v-col>
      <v-col cols="12" style="padding: 0;">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" class="d-flex justify-space-between pa-4 font-weight-bold">
        <p class="text_brown">결제 금액</p>
        <p class="text_pink">{{ cartTotalPrice.toLocaleString() }}원</p>
      </v-col>
    </v-row>
    <div class="text-center mt-5">
      <v-btn @click="showPaymentCompleteModal" style="width: 210px;" large>결제하기</v-btn>
      <v-btn color="grey lighten-1" class="pa-3 ma-2" style="width: 210px;" large>영수증 보기</v-btn>
    </div>

    <!-- 모달 창 -->
    <Modal
      :isOpen="isPaymentCompleteModalOpen"
      @update:isOpen="val => isPaymentCompleteModalOpen = val"
      closeText="확인"
      buttonType="default"
    >
      결제완료
    </Modal>
  </v-container>
</template>

<script>
import Modal from '@/components/Modal.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Modal
  },
  data() {
    return {
      isPaymentCompleteModalOpen: false,
      cartItems: [],
      cartTotalPrice: 0
    };
  },
  computed: {
  ...mapGetters(['cartItems', 'cartTotalPrice', 'selectedStore']),
  },
  created() {
    this.loadCartItems();
  },
  methods: {
    ...mapActions(['addToCart', 'clearCart', 'addOrderHistory']),
    goBack() {
      this.$router.go(-1);
    },
    loadCartItems() {
      // Vuex 상태에서 직접 가져오기
      this.cartItems = this.$store.getters.cartItems;
      this.cartTotalPrice = this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
    },
    showPaymentCompleteModal() {
      if (this.isPaymentCompleteModalOpen) return; // 중복 호출 방지
      this.isPaymentCompleteModalOpen = true;

      const newOrder = {
        id: Date.now(),
        items: this.cartItems.map(item => ({
          ...item,
          totalPrice: item.price * item.quantity
        })),
        orderDate: new Date().toLocaleString(),
        totalPrice: this.cartTotalPrice,
        expiryDate: (() => {
          const orderDate = new Date();
          orderDate.setFullYear(orderDate.getFullYear() + 1); // 1년 더하기
          return orderDate.toLocaleString();
        })()
      };

      this.addOrderHistory(newOrder);
      this.clearCart();

      setTimeout(() => {
        this.$router.push('/OrderHistory');
      }, 1000);
    }
  }
};
</script>

