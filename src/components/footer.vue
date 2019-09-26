<template>
    <div class="container">
        <div class="btn-add row">
            <button style="border-right: 0;">(+) Add More Currencies</button>
        </div>
        <br>
        <div class="box row">
            <div class="col-9 input-c">
                <input type="text">
            </div>
            <div class="col-3 btn-act">
                <button>Submit</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',
    props: {
        
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