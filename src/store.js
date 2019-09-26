import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "base": "USD",
    "value": 10.00,
    "date": "2018-04-08",
    "rates": {}
  },
  getters: {
    getBase: (state) => {
      return state.base;
    },
    getValue: (state) => {
      return state.value;
    },
    getRates: (state) => {
      return state.rates;
    }
  },
  mutations: {
    GET_RATES: (state, payload) => {
      state.rates = payload
    }
  },
  actions: {
    fetchRates: (context) => {
      context.commit('GET_RATES', { 'IDR': 14.000 })
    }
  }
})
