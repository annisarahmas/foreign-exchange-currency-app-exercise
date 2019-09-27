<template>
  <div id="app">
    <Header/>
    <Contents :items="getItems"/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/header'
import Contents from './components/content'
import Footer from './components/footer'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    Header,
    Contents,
    Footer
  },
  computed: {
    ...mapGetters([
      'getValue',
      'getRates',
      'getBase',
      'getItems'
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
    color: #2c3e50;
    
    .container{
      padding: 20px;
      max-width: 576px;
    }
    .box{
      border: 1px solid #333;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 10px;
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
