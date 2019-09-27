<template>
    <div class="container">
        <div class="row head-title">USD - Unites States Dollars</div>
        <div class="row align-items-center" style="font-weight: bold;">
            <div class="col-6">{{ getBase }}</div>
            <div class="col-6">
                <input type="text" v-model="value">
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Header',
    computed: {
       value: {
           get: function () {
               return this.$store.getters.getValue
           },
           set: function (newValue) {
                this.$store.dispatch('setValue', newValue)
           }
       },
       ...mapGetters([
           'getBase'
       ])
    }
}
</script>

<style lang="scss" scoped>
    .head-title{
      padding-right: 15px;
      padding-left: 15px;
      font-style: italic;
      font-size: 14px;
    }
    input{
        font-weight: bold !important;
    }
    .container{
        padding: 10px !important;
        border-bottom: 1px solid #333;
    }
</style>