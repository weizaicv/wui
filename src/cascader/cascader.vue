<template>
    <div class="cascader" ref="cascader"  v-click-outside="close">
       <div class="trigger" @click="toggle">
           {{result || '&nbsp;'}}
       </div>
       <div class="popover-wrapper" v-if="popoverVisible">
           <cascader-items 
           :items="source" 
           class="popover" 
           :height="popoverHeight" 
           @update:selected="onUpdateSelected"
           :selected="selected"
           :loading-item="loadingItem"
           :loadData="loadData"
           ></cascader-items>
       </div>
    </div>
</template>

<script>
    import ClickOutside from '../click-outside'
    import CascaderItems from './cascader-items'
    export default {
        name:'WCascaders',
        components:{CascaderItems},
        directives: {ClickOutside},
        props:{
            source:{
                type:Array
            },
            popoverHeight:{
                type: String
            },
            selected:{
                type: Array,
                default: () => {return []}
            },
            loadData: {
                type: Function
            }
        },
        data(){
            return {
                popoverVisible: false,
                loadingItem: {},
            }
        },
        computed:{
            result(){
                return this.selected.map(item=>item.name).join('/')
            }
        },
        methods:{
            //点击是否在里面
            // onClickDocument(e){
            //     let {cascader} = this.$refs
            //     let {target} = e
            //     if(target == cascader || cascader.contains(target)) {return}
            //     this.close()
            // },
            toggle(){
                if(this.popoverVisible == true){
                    this.close()
                }else{
                    this.open()
                }
            },
            open(){
                this.popoverVisible = true
                //绑定事件 渲染完毕之后再绑定
                // this.$nextTick(() => {
                //     document.addEventListener('click', this.onClickDocument)
                // })
            },
            close(){
                this.popoverVisible = false
                // document.removeEventListener('click', this.onClickDocument)
            },
            onUpdateSelected(newSelected){
                //需要更新更深层级的children? 递归算法 分成有children和没有children
                //更新树形结构的某个特定数据的children
                this.$emit("update:selected",newSelected)
                let lastItem = newSelected[newSelected.length - 1]
                let simplest = (children,id)=>{
                    return children.filter(item => item.id == id)[0]
                }
                let complex = (children,id) =>{
                    let noChildren = []
                    let hasChildren = []
                    children.forEach(item=>{
                        if(item.children){
                            hasChildren.push(item)
                        }else{
                            noChildren.push(item)
                        }
                    })
                    let found = simplest(noChildren,id)
                    if(found){
                        return found
                    }else{
                        found = simplest(hasChildren, id)
                        if(found){
                            return found
                        }else{
                            for(let i=0;i<hasChildren.length;i++){
                                found = complex(hasChildren[i].children,id)
                                if(found){
                                    return found   
                                }
                            }
                            return undefined
                        }
                    }
                }
                let updateSource = (result)=>{
                    //loading之前
                    this.loadingItem = {}
                    let copy = JSON.parse(JSON.stringify(this.source))
                    let toUpdate = complex(copy,lastItem.id)
                    toUpdate.children = result
                    this.$emit('update:source',copy)
                    // let toUpdate = this.source.filter(item=>item.id === lastItem.id)[0]
                    // this.$set(toUpdate,'children',result)
                }
                //判断是否是叶子 是叶子就不需要更新了 因为已经是最后一级了
                if (!lastItem.isLeaf) {
                    this.loadData && this.loadData(lastItem, updateSource) 
                    this.loadingItem = lastItem
                    // 回调:把别人传给我的函数调用一下
                    // 调回调的时候传一个函数,这个函数理论应该被调用
                    // 数据获取完毕 loadingItem有值
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
 @import "../var";
  .cascader {
    position: relative;
    display: inline-block;
    .trigger {
      border: 1px solid black;
      height: 32px;
      width: 100px;
      height: $input-height;
      align-items: center;
      padding: 0 1em;
      min-width: 10em;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      display: flex;
      background: white;
    }
    .popover-wrapper {
      margin-top: 8px;  
      z-index: 1;
      position: absolute; 
      top: 100%; 
      left: 0; 
      background: white; 
      display: flex;
      @extend .box-shadow;
    }
  }
</style>