<template>
  <div class="w-sub-nav" :class={active,vertical} v-click-outside="close">
    <span class="w-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="w-sub-nav-icon" :class="{open,vertical}">
        <w-icon name="nextPage"></w-icon>
      </span>
    </span>
    <template v-if="vertical">
      <!-- 动画钩子 做复杂动画 -->
      <transition
      @enter="enter" 
      @leave="leave" 
      @after-leave="afterLeave"
      @after-enter="afterEnter"
      >
        <div class="w-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="w-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
   
  </div>
</template>

<script>
  import Icon from '../icon'
  import ClickOutside from '../click-outside'
  export default {
    name: "WSubNav",
    inject: ['root','vertical'],
    directives: {ClickOutside},
    components:{
      'w-icon':Icon
    },
    data(){
      return {
        open:false
      }
    },
    props: {
      name: {
        type: String,
        required: true
      }
    },
    computed:{
      active(){
        return this.root.namePath.indexOf(this.name) >= 0 ? true : false
      }
    },
    methods:{
      //动画钩子
      enter(el, done){
        let {height} = el.getBoundingClientRect()
        el.style.height = 0
        //手动引起重绘 否则会合并样式
        el.getBoundingClientRect()
        el.style.height = `${height}px`
        el.addEventListener('transitionend',()=>{
          done()//异步结束
        })
      },
      afterEnter(el){
        //进入之后height一定要auto 不然子组件显示不出 高度
        el.style.height = 'auto'
      },
      leave(el, done){
        let {height} = el.getBoundingClientRect()
        el.style.height = `${height}px`
        //手动引起重绘 否则会合并样式
        el.getBoundingClientRect()
        el.style.height = 0
        el.addEventListener('transitionend',()=>{
          done()//异步结束
        })
      },
      afterLeave(el){
        el.style.height = 'auto'
      },
      onClick(){
        this.open = !this.open
      },
      close(){
        this.open = false
      },
      updateNamePath(){
        this.root.namePath.unshift(this.name)
        //可能subnav上面还是subnav嵌套多层
        if (this.$parent.updateNamePath) {
          this.$parent.updateNamePath()
        }else{}
        //选中具体某一个子项目 就隐藏
        if(!this.vertical)
        this.open = false
      }
    }
  }
</script>

<style scoped lang="scss">
// @import '_var';
@import "./styles/_var";
.x-enter-active, .x-leave-active { }
.x-enter, .x-leave-to { }
.x-enter-to, .x-leave { }
.w-sub-nav{
  position: relative;
  &:not(.vertical){
    &.active {
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $blue;
        width: 100%;
      }
    }
  }
  &-label { padding: 10px 20px; display: block; }
  &-icon { display: none; }
  &-popover{
    background:#fff;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    min-width: 8em;
    transition: height 250ms;
    &.vertical {
      position: static;
      border-radius: 0;
      border: none;
      box-shadow: none;
      overflow: hidden;
    }
  }
}
.w-sub-nav .w-sub-nav {
  &.active{
    &::after {
      display: none;
    }
  }
  .w-sub-nav-popover {
    background:#fff;
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
  .w-sub-nav-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
  } 
  .w-sub-nav-icon {
      transition: transform 250ms;
      display: inline-flex; 
      margin-left: 1em;
      svg {
        fill: $light-color;
      }
      &.vertical {
        transform: rotate(90deg);
        &.open{
          transform: rotate(270deg);
        }
      }
      &.open {
        transform: rotate(180deg);
      }
    }
}
</style>