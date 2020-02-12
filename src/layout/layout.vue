<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                layoutClass:{
                    hasSider:false
                }
            }
        },
        created(){

        },
        mounted() {
            //判断是否有name aside的元素挂载，有的话改变布局
            this.$children.forEach(vm=>{
                if(vm.$options.name == 'WAside'){
                    this.layoutClass.hasSider = true
                }
            })
        },
    }
</script>

<style lang="scss" scoped>
.layout{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    border:1px solid #ddd;
    &.hasSider{
        flex-direction: row;
    }
}
</style>