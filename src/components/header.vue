<template>
    <div class="container">
        <div class="row head-title">USD - Unites States Dollars</div>
        <div class="row" style="font-weight: bold;">
            <div class="col-6 text-left">{{ getBase }}</div>
            <div class="col-6 text-right"><input type="text" v-model="value"></div>
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
    .container{
        border-bottom: 1px solid #333;
    }
</style>