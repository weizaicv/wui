<template>
    <div class="tabs"> 
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'WTabs',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal','vertical'].indexOf(value) >= 0 
                }
            }
        },
        data(){
            return {
                //借用$emit $on $off方法
                eventBus:new Vue()
            }
        },
        provide(){
            //provide inject种族通信
            return {
                eventBus:this.eventBus
            }
        },
        mounted(){
            if(this.$children.length === 0){
                console.warning('tabs的子组件应该是tabs-head和tabs-nav但是没有写子组件')
            }
            //有selected值 用eventBus触发
            //触发不会影响到外面父级元素 不会冒泡
            //需要知道触发的哪个item，从而动态计算宽度
            //计算Line
            this.$children.forEach((vm)=>{
                if(vm.$options.name === 'WTabsHead') {
                    vm.$children.forEach((childVm) => {
                        if(childVm.$options.name === 'WTabsItem' 
                        && childVm.name === this.selected){
                            this.eventBus.$emit('update:selected', this.selected, childVm)
                        }
                    })
                }
            })
        }
    }
</script>

<style scoped>

</style>