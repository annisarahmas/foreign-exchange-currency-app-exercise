<template>
  <div id="app">
    <Header :currency="getBase" :value="getValue"/>
    <Contents :currency="getBase" :value="getValue"/>
    <Footer/>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/header'
import Contents from './components/content'
import Footer from './components/footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Header,
    Contents,
    Footer
  },
  computed: {
    ...mapGetters([
      'getValue',
      'getRates',
      'getBase',
      // ...
    ])
  },
  methods: {
    ...mapActions([
      'fetchRates'
    ])
  },
  mounted () {
    this.fetchRates()
  }
}
</script>

<style lang="scss">
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    /* -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center; */
    color: #2c3e50;
    
    .container{
        padding: 20px;
    }
    .box{
        border: 1px solid #333;
    }
    .head-title{
      padding-right: 15px;
      padding-left: 15px;
      font-style: italic;
      font-size: 14px;
    }
    button{
      width: 100%;
      height: 100%;
      border: none;
      background-color: white;
      border-left: 1px solid #333;
    }
    input{
      width: 100%;
      border: none;
      padding: 5px;
    }
    .input-c{
      padding: 0;
    }
    .btn-act{
      padding: 0;
    }
  }
</style>
