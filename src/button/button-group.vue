<template>
    <div class="w-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:"WButtonGroup",
        mounted() {
            //防止用户结果瞎改
            for(let node of this.$el.children){
                if(node.nodeName !== 'BUTTON'){
                    console.warn('w-button-group的子元素应该都是w-button')
                }
            }
        },
    }
</script>
<!--第一个元素不需要往左一个像素-->
<style lang="scss" scoped>
$border-radius: 4px;
.w-button-group{
    display: inline-flex;
    vertical-align: middle;
    > .w-button{
        margin:.3em 0;
        border-radius: 0;
        &:not(:first-child){
            margin-left: -1px; 
        }
        &:first-child{
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
        }
        &:last-child{
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
        &:hover{
            z-index:1;
        }
    }
}
</style>