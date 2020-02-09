<template>
    <div style="margin: 20px;">
        <w-pager :total-page="20" :current-page="7"></w-pager>
    </div>
</template>

<script>
    import Pager from './pager'
    export default {
        components:{
            'w-pager':Pager
        }
    }
</script>

<style lang="scss" scoped>

</style>