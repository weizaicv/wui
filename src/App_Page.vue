<template>
    <div style="margin: 20px;">
        <w-pager :total-page="20" :current-page.sync="currentPage"></w-pager>
    </div>
</template>

<script>
    import Pager from './pager'
    export default {
        components:{
            'w-pager':Pager
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