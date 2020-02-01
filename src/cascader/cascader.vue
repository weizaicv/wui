<template>
    <div class="cascader">
       <div class="trigger" @click="popoverVisible = !popoverVisible">
           {{result || '&nbsp;'}}
       </div>
       <div class="popover-wrapper" v-if="popoverVisible">
           <cascader-items 
           :items="source" 
           class="popover" 
           :height="popoverHeight" 
           @update:selected="onUpdateSelected"
           :selected="selected"
           ></cascader-items>
       </div>
    </div>
</template>

<script>
    import CascaderItems from './cascader-items'
    export default {
        name:'WCascaders',
        components:{CascaderItems},
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
            }
        },
        data(){
            return {
                popoverVisible: false
            }
        },
        computed:{
            result(){
                return this.selected.map(item=>item.name).join('/')
            }
        },
        methods:{
            onUpdateSelected(newSelected){
                console.log('cascader')
                this.$emit("update:selected",newSelected)
            }
        }
    }
</script>

<style lang="scss" scoped>
 @import "../var";
  .cascader {
    position: relative;
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
    }
    .popover-wrapper {
      margin-top: 8px;  
      position: absolute; 
      top: 100%; 
      left: 0; 
      background: white; 
      display: flex;
      @extend .box-shadow;
    }
  }
</style>