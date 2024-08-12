<template>
  <v-container>
        <div class="header">
      <div @click="goBack" class="goBack">
        <v-icon size="28">chevron_left</v-icon>
      </div>
      <p class="menu_title">나만의 메뉴</p>
    </div>
    <v-list>
    <v-list-item v-for="item in favoriteList" :key="item.id" @click="goToDetail(item.id)">
        <div class="menulist_box">
            <v-img class="img-rounded" :src="item.img" cover />
            <div class="menulist_title">
            <p>{{ item.title }}</p>
            </div>
            <v-icon 
            :color="'red'" 
            @click.stop="removeFromFavorites(item.id)"
            >
            mdi-heart
        </v-icon>
        </div>
    </v-list-item>
</v-list>

  </v-container>

</template>
<script>
export default {
  name: "LikeMenuList",
  data() {
    return {
      favoriteList: [],
    };
  },
  created() {
    this.loadFavorites();
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    loadFavorites() {
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      this.favoriteList = favorites;
    },
    goToDetail(id) {
      this.$router.push(`/menu/${id}`);
    },
    removeFromFavorites(itemId) {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites = favorites.filter(fav => fav.id !== itemId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.loadFavorites(); // 찜 목록 업데이트
    }
}
};
</script>

<style scoped>
.menulist_box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img-rounded {
  border-radius: 8px;
}
.menulist_title {
  flex-grow: 1;
  margin-left: 16px;
}
</style>
