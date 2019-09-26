<template>
    <div class="container">
        <div class="box row">
            <div class="col-10">
                <div>
                    {{ currency }} {{ value }}
                </div>
                <div><b><i>USD - Unites States Dollars</i></b></div>
                <div>1 USD = {{ value }}</div>
            </div>
            <div class="col-2 btn-act">
                <button>(-)</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Contents',
    props: {
        currency: String,
        value: Number
    }
}
</script>