<template>
    <div class="cascaderItem" :style="{height: height}">
        <div class="left">
            <div 
            class="label" 
            v-for="(item,index) in items" 
            :key="index" 
            @click="onClickLabel(item)">
            {{item.name}}
            <icon class="icon" v-if="item.children" name="nextPage"></icon>
            </div>    
        </div>   
        <div class="right" v-if="rightItems">
            <w-cascader-items 
            :items="rightItems" 
            :height="height"
            :level="level+1"
            :selected="selected"
            @update:selected="onUpdateSelected"
            ></w-cascader-items>
        </div>             
    </div>
</template>

<script>
    import Icon from '../icon'
    export default {
        name: "WCascaderItems",
        components:{
            Icon
        },
        props:{
            items: {
                type: Array
            },
            height: {
                type: String
            },
            selected: {
                type: Array,
                default: () => []
            },
            level: {
                type: Number,
                default: 0
            }
        },
        computed:{
            rightItems(){
                // 右边的select是父传递下来的
                let currentSelected = this.selected[this.level]
                if(currentSelected && currentSelected.children){
                    return currentSelected.children
                }else{
                    return null
                }
            }
        },
        methods:{
            onClickLabel(item){
                //将选中的传递到最顶级 必须深复制 记住级别
                //更改等级 删除后续的
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level+1)
                this.$emit('update:selected', copy)
            },
            onUpdateSelected (newSelected) {
                this.$emit('update:selected', newSelected)
            }
        }
    }
</script>

<style lang="scss" scoped>
 @import "../var";
 .cascaderItem {
     display: flex;
     align-items: flex-start;
     justify-self: flex-start;
     height: 100px;
     .left{
        height: 100%;
        padding: .3em 0;
     }  
     .right{
        height: 100%;
        border-left: 1px solid $border-color-light;
     }
     .label{
         padding: .3em 1em;
         display: flex;
         align-items: center;
     }
 }
</style>