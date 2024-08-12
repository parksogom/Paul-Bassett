import Vue from 'vue';
import Vuex from 'vuex';
import modCommon from "./store-mod/common";
import modProvider from "./store-mod/provider";

Vue.use(Vuex);

const getDefaultState = () => ({
  cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
  membership: JSON.parse(localStorage.getItem('membership')) || {},
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  orderHistory: JSON.parse(localStorage.getItem('orderHistory')) || [],
  selectedStore: JSON.parse(localStorage.getItem('selectedStore')) || {} // 위치 정보 추가
});

export default new Vuex.Store({
  state: getDefaultState(),
  mutations: {
  ADD_TO_CART(state, item) {
    const existingItem = state.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
      existingItem.totalPrice += item.totalPrice;
    } else {
      state.cartItems.push(item);
    }
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
    CLEAR_CART(state) {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    },
    SET_MEMBERSHIP(state, membership) {
      state.membership = membership;
      localStorage.setItem('membership', JSON.stringify(state.membership));
    },
    RESET_MEMBERSHIP(state) {
      state.membership = {};
      localStorage.removeItem('membership');
    },
    ADD_FAVORITE(state, item) {
      const existingFavorite = state.favorites.find(fav => fav.id === item.id);
      if (!existingFavorite) {
        state.favorites.push(item);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    REMOVE_FAVORITE(state, itemId) {
      state.favorites = state.favorites.filter(fav => fav.id !== itemId);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    ADD_ORDER_HISTORY(state, order) {
      state.orderHistory.push(order);
      localStorage.setItem('orderHistory', JSON.stringify(state.orderHistory));
    },
    SET_SELECTED_STORE(state, store) {
      state.selectedStore = store;
      localStorage.setItem('selectedStore', JSON.stringify(store));
    },
    RESET_SELECTED_STORE(state) {
      state.selectedStore = {};
      localStorage.removeItem('selectedStore');
    },
    SET_ORDER_DATA(state, orderData) {
      state.orderData = orderData;
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit('ADD_TO_CART', item);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
    setMembership({ commit }, membership) {
      commit('SET_MEMBERSHIP', membership);
    },
    resetMembership({ commit }) {
      commit('RESET_MEMBERSHIP');
    },
    addFavorite({ commit }, item) {
      commit('ADD_FAVORITE', item);
    },
    removeFavorite({ commit }, itemId) {
      commit('REMOVE_FAVORITE', itemId);
    },
    addOrderHistory({ commit }, order) {
      commit('ADD_ORDER_HISTORY', order);
    },
    setSelectedStore({ commit }, store) {
      commit('SET_SELECTED_STORE', store);
    },
    resetSelectedStore({ commit }) {
      commit('RESET_SELECTED_STORE');
    },
    setOrderData({ commit }, orderData) {
      commit('SET_ORDER_DATA', orderData);
    }
  },
  getters: {
    cartItems: state => state.cartItems,
    cartQuantity: state => state.cartItems.reduce((sum, item) => sum + item.quantity, 0),
    cartTotalPrice: state => state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0),
    membership: state => state.membership,
    favorites: state => state.favorites,
    isFavorite: (state) => (itemId) => {
      return state.favorites.some(fav => fav.id === itemId);
    },
    orderHistory: state => state.orderHistory,
    selectedStore: state => state.selectedStore,
    orderData: state => state.orderData
  },
  modules: {
    provider: modProvider,
    common: modCommon
  }
});
