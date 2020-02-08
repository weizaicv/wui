<template>
  <div class="w-sub-nav" :class={active} v-click-outside="close">
    <span class="w-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="w-sub-nav-icon" :class="{open}">
        <w-icon name="nextPage"></w-icon>
      </span>
    </span>
    <div class="w-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Icon from '../icon'
  import ClickOutside from '../click-outside'
  export default {
    name: "WSubNav",
    inject: ['root'],
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
        this.open = false
      }
    }
  }
</script>

<style scoped lang="scss">
@import '_var';
.w-sub-nav{
  position: relative;
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
  &-label { padding: 10px 20px; display: block; }
  &-icon { display: none; }
  &-popover{
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
  }
}
.w-sub-nav .w-sub-nav {
  &.active{
    &::after {
      display: none;
    }
  }
  .w-sub-nav-popover {
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
      &.open {
        transform: rotate(180deg);
      }
    }
}
</style>