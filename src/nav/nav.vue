<template>
    <div class="w-nav" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "WNav",
        //依赖注入
        provide(){
            return {
                root: this,
                vertical: this.vertical
            }
        },
        props: {
            selected: {
                type: Array,
                default: ()=> []
            },
            multiple: {
                type: Boolean,
                default: false
            },
            vertical:{
                type: Boolean,
                default: false
            }
        },
        
        // computed:{
        //     items(){
        //         return this.$children.filter(vm => vm.$options.name == 'WNavItem')
        //     }
        // },
        data(){
            return {
                items:[],
                namePath: [] //记录sub-nav下面点击了哪个？
            }
        },
        mounted(){
            this.updateChildren()
            this.listenToChildren()
        },
        updated(){
            //data发生变化要 手动更新
            //父级发生变化->子级数据prop发生变化
            //需要手动update
            this.updateChildren()
        },
        methods:{
            //子级可以调用父级的方法，间接传入父级数据
            addItem(vm){
                this.items.push(vm)
            },
            //更新nav-item数据 监听click传递来的事件
            updateChildren(){
                this.items.forEach(vm => {
                    if(this.selected.indexOf(vm.name) >= 0){
                        vm.selected = true
                    }else{
                        vm.selected = false
                    }
                })
            },
            listenToChildren(){
                this.items.forEach(vm => {
                    vm.$on('add:selected',(name)=>{
                        if(this.multiple){
                            let copy = JSON.parse(JSON.stringify(this.selected))
                            copy.push(name)
                            this.$emit("update:selected",copy)
                        }else{
                            this.$emit("update:selected",[name])
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "_var";
.w-nav{
    display: flex;
    border-bottom: 1px solid $grey;
    cursor: default;
    user-select: none;
    &.vertical {
        flex-direction: column;
        border: 1px solid $grey;
    }
}
</style>