import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    "base": "USD",
    "value": 10.00,
    "date": "2018-04-08",
    "rates": {}, 
    "items": []
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
    },
    getItems: (state) => {
      state.items.forEach(x => {
        x.result = x.value* state.value})
      return state.items;
    }
  },
  mutations: {
    SET_RATES: (state, payload) => {
      state.rates = payload
    },
    SET_VALUE: (state, payload) => {
      state.value = payload
    },
    ADD_ITEMS: (state, payload) => {
      state.items = [...state.items, payload]
    },
    REMOVE_ITEMS: (state, index) => {
      state.items.splice(index, 1) 
    }
  },
  actions: {
    fetchRates: (context) => {
      axios.get('https://api.exchangeratesapi.io/latest?base=USD').then(( response) => {
        context.commit('SET_RATES', response.data.rates)
      })
    },
    setValue: (context, payload) => {
      context.commit('SET_VALUE', payload)
    },
    addItem: (context, payload) => {
      context.commit('ADD_ITEMS', payload)
    },
    removeItem: (context, index) => {
      context.commit('REMOVE_ITEMS', index)
    }
  }
})
