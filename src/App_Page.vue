<template>
    <div style="margin: 20px;">
        <w-pager :total-page="20" :current-page.sync="currentPage"></w-pager>
    </div>
</template>

<script>
    import WPager from './pager'
    export default {
        components:{
            WPager
        },
        data(){
            return {
                currentPage:1
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>