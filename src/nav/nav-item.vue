<template> 
    <div class="w-nav-item" :class="{selected,vertical}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'WNavItem',
        inject:['root','vertical'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data(){
            return {
                selected: false
            }
        },
        created(){
            //只要定义了item，自动写入items
            this.root.addItem(this)
        },
        methods: {
            onClick(){
                //还原
                this.root.namePath = []
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit("add:selected",this.name)
            }
        }
    }
</script>

<style lang="scss" scoped>
// 是否有vertical判断是否 样式中 下划线
@import "./styles/_var";
.w-nav-item{
    padding: 10px 20px;
    position: relative;
  
    &:not(.vertical){
        &.selected{
            &::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $blue;
                width: 100%;
            }
        }
    }
    &.vertical{
        &.selected{
            color: $blue;
        }
    }
}

.w-sub-nav .w-nav-item:not(.vertical){
    &.selected {
        color: $color;
        background: $grey;
        &::after{
            display: none;
        }
    }
}
a {
    color: inherit;
    text-decoration: none;
}
</style>