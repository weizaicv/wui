<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name:'WCollapse',
        props:{
            single:{
                type: Boolean,
                default: false
            },
            selected:{
                type: Array
            }
        },
        data(){
            return {
                eventBus: new Vue()
            }
        },
        provide(){
            return {
                eventBus: this.eventBus
            }
        },
        mounted(){
            this.eventBus.$emit('update:selected',this.selected)
            
            //子传递来的添加或者删除
            this.eventBus.$on('update:addSelected',(name)=>{
                //不能直接改变Props 复制一份
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                //判断是否single,single是每次只是显示一个
                if(this.single){
                    selectedCopy = [name]
                }else{
                    selectedCopy.push(name)
                }
                this.eventBus.$emit('update:selected',selectedCopy)
                this.$emit('update:selected',selectedCopy)
            })

            this.eventBus.$on('update:removeSelected',(name)=>{
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index,1)
                this.eventBus.$emit('update:selected',selectedCopy)
                this.$emit('update:selected',selectedCopy)
            })

        }
    }
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius:4px;
.collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
}
</style>