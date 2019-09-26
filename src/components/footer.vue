<template>
    <div class="container">
        <div class="btn-add row" v-if="isEdited == false">
            <button style="border-right: 0;" @click="isEdited = !isEdited">(+) Add More Currencies</button>
        </div>
        <div class="box row" v-else>
            <div class="col-9 input-c">
                <input type="text" v-model="inputData">
            </div>
            <div class="col-3 btn-act">
                <button type="submit" @click="submitFunction()">Submit</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Footer',
    data() {
        return {
            inputData: '',
            isEdited: false
        }
    },
    computed: {
        ...mapGetters([
            'getRates', 
            'getValue'
        ])
    },
    methods: {
        ...mapActions([
            'addItem'
        ]),
        findRates(name) {
            let item = Object.keys(this.getRates).filter(( x ) => x == name)
            return this.getRates[item]
        },
        submitFunction() {
            this.isEdited = !this.isEdited
            this.addItem({ name: this.inputData, value: this.findRates(this.inputData), result: 0 })
            this.inputData = ''
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container{
        padding-top: 0 !important;
    }
    .btn-add{
        border: 1px solid #333;
    }
    button{
        height: 34px !important;
    }
</style>