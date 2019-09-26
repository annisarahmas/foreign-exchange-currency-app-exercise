<template>
    <div class="container">
        <div class="row head-title">USD - Unites States Dollars</div>
        <div class="row" style="font-weight: bold;">
            <div class="col-6 text-left">{{ currency }}</div>
            <div class="col-6 text-right">{{ value }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header',
    props: {
        currency: String,
        value: Number
    }
}
</script>

<style lang="scss" scoped>
    .container{
        border-bottom: 1px solid #333;
    }
</style>