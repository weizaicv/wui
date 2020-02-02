<template>
    <div class="cascaderItem" :style="{height: height}">
        <div class="left">
            <div 
            class="label" 
            v-for="(item,index) in items" 
            :key="index" 
            @click="onClickLabel(item)">
            <span class="name">{{item.name}}</span>
            <icon class="icon" v-if="rightArrowVisible(item)" name="nextPage"></icon>
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
            loadData: {
                type: Function
            },
            level: {
                type: Number,
                default: 0
            }
        },
        computed:{
            //依赖没有更新，自己也不会去更新
            //这里selected和level都么有更新
            //因为只是更新source里面的children
            rightItems(){
                if(this.selected[this.level]){
                    let selected = this.items.filter(item=>item.name === this.selected[this.level].name)
                    if(selected && selected[0].children && selected[0].children.length>0){
                        return selected[0].children
                    }
                }
                // let currentSelected = this.selected[this.level]
                // if(currentSelected && currentSelected.children){
                //     return currentSelected.children
                // }else{
                //     return null
                // }

            }
        },
        methods:{
            rightArrowVisible(item){
                return this.loadData ? !item.isLeaf : item.children
            },
            onClickLabel(item){
                //将选中的传递到最顶级 必须深复制 记住级别
                //更改等级 删除后续的
                let copy = JSON.parse(JSON.stringify(this.selected))
                copy[this.level] = item
                copy.splice(this.level+1)
                this.$emit('update:selected', copy)
            },
            onUpdateSelected (newSelected) {
                //改变dom结构
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
        overflow: auto;
     }  
     .right{
        height: 100%;
        border-left: 1px solid $border-color-light;
     }
     .label{
         padding: .5em 1em;
         display: flex;
         align-items: center;
         cursor: pointer;
         white-space: nowrap;
        &:hover {
            background: $grey;
        }
        > .name {
            margin-right: 1em;
            user-select: none;
        }
        .icon {
            margin-left: auto;
            transform: scale(0.5);
        }
     }
 }
</style>