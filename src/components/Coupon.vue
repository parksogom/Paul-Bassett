<template>
    <v-container>
        <div class="header">
            <p class="menu_title">쿠폰</p>
        </div>
        <div>
            <v-tabs color="black" grow v-model="tab" class="P_14">
                <v-tabs-slider color="black"></v-tabs-slider>
                <v-tab href="#coupon">쿠폰</v-tab>
                <v-tab href="#history">적립내역</v-tab>
            </v-tabs>
        </div>

        <v-tabs-items v-model="tab" style="height: 100%;">
            <v-tab-item value="coupon">
                <div class="d-flex align-center">
                    <div class="d-flex pa-4 P_14">
                        <v-icon class="pr-3">mdi-calendar</v-icon>
                        <p class="pr-3">2024.05.09</p>
                        <p>2024.05.09</p>
                    </div>
                    <v-btn class="ml-auto P_14 mr-4" color="grey" outlined rounded>기간 설정</v-btn>
                </div>

                <!--로컬 스토리지 데이터 불러오기-->
                <div class="grey lighten-4 pt-2 pb-1 back_g">
                    <v-row class="white ma-3 pa-2">
                        <v-col class="d-flex align-center" col="6" md="3" @click.stop="dialog = true">
                            <div class="pr-5" >
                                <v-chip outlined color="red" class="text_pink">D - 24</v-chip>
                            </div>
                            <div>
                                <p class="P_20 font-weight-bold">첫 구매 무료 음료 쿠폰</p>
                                <div class="d-flex">
                                    <p class="P_12 text_gray300">2024.07.22 ~ 2025.07.22</p>
                                </div>
                            </div>
                            <div class="ml-auto text-end">
                                <v-icon>arrow_forward_ios</v-icon>
                            </div>
                        </v-col>
                    </v-row>
                    
                    <v-dialog v-model="dialog" max-width="300">
                        <v-card class="grey lighten-4">
                            <v-col class="d-flex justify-center white" style="padding: 15px 0 0;">
                                <v-chip outlined color="red" >DAY - 24</v-chip>
                            </v-col>
                            <div class="text-center white pa-2 mb-4">
                                <p class="text_gray500 P_14">Free 음료</p>
                                <p class="P_20 font-weight-bold">생일 축하 무료 음료 쿠폰</p>
                                    <v-card class="ma-4">
                                        <div class="pt-4 pb-3">
                                            <v-img src="../assets/etc/Code-2of5.png" alt="바코드"></v-img>
                                        </div>
                                        <p class="text_gray300 P_12">2024.07.22 - 2024.07.22</p>
                                    </v-card>
                                <div class=" P_12">
                                    <v-icon color="#EA094B"   >info</v-icon>
                                    캡쳐한 쿠폰은 사용할 수 없습니다.
                                </div>
                            </div>
                            <div class="white pa-4 mb-4">
                                <p class="P_16">사용처</p>
                                <p class="text_gray300 P_12">폴 바셋 전 매장</p>
                                <p class="text_gray300 P_12">사용 불가 매장 : 여의도 현대카드 Cafe & Pub</p>
                            </div>
                            <div class="white pa-4">
                                <p class="P_16">사용안내</p>
                                <p class="text_gray300 P_12">폴 바셋 전 매장</p>
                            </div>
                            <v-btn class="modal_confirm_button modal_btn2 white"
                            @click="dialog = false">
                                닫기
                            </v-btn>
                            <v-btn class="modal_confirm_button"
                            color="black" @click="dialog = false">
                                사용하기
                            </v-btn>
                        </v-card>
                    </v-dialog>

                    <!--아래부터 반복문-->
                    <v-row class="white ma-3 pa-2">
                        <v-col class="d-flex align-center" col="6" md="3">
                            <div class="pr-5" >
                                <v-chip outlined color="red" class="text_pink">D - 24</v-chip>
                            </div>
                            <div>
                                <p class="P_20 font-weight-bold">첫 구매 무료 음료 쿠폰</p>
                                <div class="d-flex">
                                    <p class="P_12 text_gray300">2024.07.22 ~ 2025.07.22</p>
                                </div>
                            </div>
                            <div class="ml-auto text-end">
                                <v-icon>arrow_forward_ios</v-icon>
                            </div>
                        </v-col>
                    </v-row>
                    <div>
                        <p class="P_12 ml-4 mt-3 pa-3">쿠폰의 유효기간은 1년입니다.</p>
                    </div>
                </div>
            </v-tab-item>

            <v-tab-item value="history">
                <div class="d-flex align-center">
                    <div class="d-flex pa-4 P_14">
                        <v-icon class="pr-3">mdi-calendar</v-icon>
                        <p class="pr-3">2024.05.09</p>
                        <p>2024.05.09</p>
                    </div>
                    <v-btn class="ml-auto P_14 mr-4" color="grey" outlined rounded>기간 설정</v-btn>
                </div>

                <!--로컬 스토리지 데이터 불러오기-->
                <div class="grey lighten-4 pt-2 pb-1 back_g">
                    <v-row class="white ma-3 pa-2">
                        <v-col class="d-flex align-center">
                            <v-icon x-large class="pr-5">local_activity</v-icon>
                            <div>
                                <p class="P_20 font-weight-bold">사용_첫 구매 무료 음료 쿠폰</p>
                                <div class="d-flex">
                                    <p class="P_12 text_gray300">2024.07.22</p>
                                    <p class="P_12 text_gray300 ml-10">18:09</p>
                                </div>
                            </div>
                            <div class="ml-auto text-end">
                                <p class="P_12 text_gray500">유효기간</p>
                                <p class="P_12 text_gray500">2025.07.22</p>
                            </div>
                        </v-col>
                    </v-row>
                    
                    <!--아래부터 반복문-->
                    <v-row class="white ma-3 pa-2">
                        <v-col class="d-flex align-center">
                            <v-icon x-large class="pr-5">local_activity</v-icon>
                            <div>
                                <p class="P_20 font-weight-bold">사용_첫 구매 무료 음료 쿠폰</p>
                                <div class="d-flex">
                                    <p class="P_12 text_gray300">2024.07.22</p>
                                    <p class="P_12 text_gray300 ml-10">18:09</p>
                                </div>
                            </div>
                            <div class="ml-auto text-end">
                                <p class="P_12 text_gray500">유효기간</p>
                                <p class="P_12 text_gray500">2025.07.22</p>
                            </div>
                        </v-col>
                    </v-row>
                    <div>
                        <p class="P_12 ml-4 mt-3 pa-3">쿠폰의 유효기간은 1년입니다.</p>
                    </div>
                </div>
            </v-tab-item>

        </v-tabs-items>
    </v-container>
</template>
<script>
    export default{
        name : "Coupon",
        data(){
            return{
                tab: "coupon",
                dialog: false,
            }
        }
    }

</script>
<style scoped>
p{
    margin: 0;
    padding: 0;
}

v-col{
    margin: 0;
    padding: 0;
}

a{
    text-decoration: none;
}

.P_16{
    font-size: 16px;
}

.P_12{
    font-size: 12px;
}

.P_10{
    font-size: 10px;
}

.P_14{
    font-size: 14px;
}

.P_24{
    font-size: 24px;
}

.P_20{
    font-size: 20px;
}
.text_pink{
    color: #EA094B;
}

.text_gray500{
    color: #606060;
}

.text_gray300{
    color: #C1C1C1;
}

.text_white{
    color: #FFFFFF;
}
.text_brown{
    color: #503629;
}
.back_g{
    height:100vh
}

.modal_confirm_button {
    width: 50%;
    height: 30px;
    color: white;
    font-size: 16px;
    /* background-color: black; */
    border-radius: 0;
    padding: 0;
    }

.modal_btn2 {
    color: gray;
    }


.material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 200,
    'GRAD' 0
    'opsz' 24
}

</style>