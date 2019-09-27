<template>
    <div class="container">
        <div v-for="(item,i) in getItems" :key="i" class="box row">
            <div class="col-10" style="padding-top: 10px;padding-bottom: 10px;">
                <div>
                    {{ item.name }} {{ item.result }}
                </div>
                <div><b><i>{{ item.name }}</i></b></div>
                <div>1 USD = {{ item.value }}</div>
            </div>
            <div class="col-2 btn-act">
                <button @click="removeItem(i)">(-)</button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Contents',
    computed: {
        ...mapGetters([
            'getItems'
        ])
    },
    methods: {
        ...mapActions([
            'removeItem'
        ])
    }
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 20px 20px 0 20px !important;
    }
</style>