<template>
    <div class="w-slides" 
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    >
        <div class="w-slides-window" ref="window">
            <div class="w-slides-wrapper">
                <slot></slot>
            </div>
            <div class="w-slides-inner-dots" v-if="isMobile">
                 <span 
                    class = "dots-item"
                    v-for="(n,index) in childrenLength" 
                    :class="{active: selectedIndex === n-1}"
                    :key="index">
                </span>
            </div>
        </div>
        <div class="w-slides-dots" v-if="!isMobile">
             <span @click="onClickPrev">
                <w-icon name="prePage"></w-icon>
            </span>
            <span v-for="(n,index) in childrenLength" 
            :class="{active: selectedIndex === n-1}"
            :key="index"
            @click="select(n-1)">
                {{n}}
            </span>
            <span @click="onClickNext">
                <w-icon name="nextPage"></w-icon>
            </span>
        </div>
    </div>
</template>

<script>
    import icon from '../icon'
    export default {
        components:{
            'w-icon':icon
        },
       props:{
           selected:{
               type:String
           },
           autoplay:{
               type: Boolean,
               default: true
           },
           isMobile:{
               type: Boolean,
               default: false
           }
       },
       data(){
           return {
               childrenLength: 0,
               lastSelectedIndex: undefined,
               timerId: undefined,
               startTouch: undefined,
           }
       },
       computed:{
            selectedIndex () {
                // return this.names.indexOf(this.selected) || 0
                let index = this.names.indexOf(this.selected)
                return index === -1 ? 0 : index
            },
            names () {
                // return this.$children.map(vm => vm.name)
                return this.items.map(vm => vm.name)
            },
            items(){
                return this.$children.filter(vm => vm.$options.name === 'WSlidesItem')
            }
       },
       mounted(){
           this.updateChildren()
           if(this.autoplay)
           this.playAutomatically()
           //几张图片？
           this.childrenLength = this.items.length
       },
       //data数据发生变化，必须要updated手动更新 
       updated () {
            this.updateChildren()
       },
       methods:{
           onClickNext(){
               this.select(this.selectedIndex + 1)
           },
           onClickPrev(){
               this.select(this.selectedIndex - 1)
           },
           //手指开始的位置和结束的位置
           onTouchStart(e){
               this.pause()
               if(e.touches.length > 1) return
               this.startTouch = e.touches[0] //必须单指 
           },
           onTouchMove(){

           },
           onTouchEnd(e){
                //划过的距离/y轴的差 = 斜率  保证小于30deg 就是 > 2
                let endTouch = e.changedTouches[0]
                let {clientX: x1, clientY: y1} = this.startTouch
                let {clientX: x2, clientY: y2} = endTouch

                let distance = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
                let deltaY = Math.abs(y2-y1)

                let rate = distance / deltaY
                if(rate > 2){
                    //左还是右滑
                    if(x2 > x1) {
                        this.select(this.selectedIndex-1)
                    }else{
                        this.select(this.selectedIndex+1)
                    }
                }
                this.$nextTick(() => {
                    if(this.autoplay)
                    this.playAutomatically()
                })
           },

           pause(){
               window.clearTimeout(this.timerId)
               this.timerId = undefined
           },
           onMouseEnter(){
               this.pause()
           },
           onMouseLeave(){
               if(this.autoplay)
               this.playAutomatically()
           },
           getSeleceted(){
            //    let first = this.$children[0]
               let first = this.items[0]
               return this.selected || first.name
           },
           playAutomatically (){
               //setTimeout模拟setInterval
               if (this.timerId) { return }
               let run = () => {
                   let index = this.names.indexOf(this.getSeleceted())
                   let newIndex = index + 1
                   this.select(newIndex)
                   this.timerId = setTimeout(run, 3000)
               }
               this.timerId = setTimeout(run, 3000)
           },
           select(newIndex){
               this.lastSelectedIndex = this.selectedIndex
               if (newIndex === -1) {newIndex = this.names.length - 1}
               if (newIndex === this.names.length) { newIndex = 0 }
               this.$emit("update:selected",this.names[newIndex])
           },
           updateChildren (){
               let selected = this.getSeleceted()
               this.items.forEach((vm) => {
                   //是不是需要反过来 判断当前和上一个
                    let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                    // 0 1 2 判断极限情况
                    // s 2 > l 0  false
                    if (this.timerId) {
                        if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
                            reverse = false
                        }
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
                            reverse = true
                        }
                    }
                    vm.reverse = reverse
                    this.$nextTick(()=>{
                        vm.selected = selected
                    })
               })
           }
       }
    }
</script>

<style lang="scss" scoped>
  .w-slides {
    &-window {
        overflow: hidden;
        position: relative;
    }
    &-wrapper {
      position: relative;
    }
    &-dots {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      > span {
        width: 20px;
        height: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: #ddd;
        border-radius: 50%;
        margin: 0 8px;
        font-size: 12px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: black;
          color: white;
          &:hover {
            cursor: default;
          }
        }
      }
    }
  }
  .w-slides-inner-dots{
        position:absolute;
        bottom:0;width:2.5em;
        display:flex;
        justify-content: space-between;
        left:50%;
        margin-left:-1.25em;
        bottom: 5%;
        .dots-item{
            z-index:1000;
            display:inline-block;
            width:.5em;
            height:.5em;
            border-radius:50%;
            background:#fff;
            &.active{
                background:#666;
            }
        }
  }
</style>