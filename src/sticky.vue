<template>
    <div class="w-sticky-wrapper" ref="wrapper" :style="{height}">
        <div class="w-sticky" :class="classes" :style="{left,width,top}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:"WSticky",
        props:{
            distance:{
                type:Number,
                default:0
            }
        },
        data(){
            return{
                sticky:false,
                height:undefined,
                left:undefined,
                width:undefined,
                top:undefined
            }
        },
        mounted(){
            //节流 
           this.windowScrollHandler = this._windowScrollHandler.bind(this)
           this.throttle_event = this.throttle(this.windowScrollHandler,50)
           window.addEventListener('scroll', this.throttle_event)
        },
        beforeDestroy(){
           window.removeEventListener('scroll', this.throttle_event)
        },
        computed:{
            classes(){
                return {
                    sticky: this.sticky
                }
            }
        },
        methods:{
            throttle(fn,wait){
                let prev = new Date()
                return function(){
                    let now = new Date()
                    if(now - prev > wait){
                        fn.apply(this,arguments)
                        prev = new Date()
                    }
                }
            },
            //getBoundingClientRect 视口的距离和自身宽高
            offsetTop (){
                let {top} = this.$refs.wrapper.getBoundingClientRect()
                return {top: top + window.scrollY}
            },
            _windowScrollHandler (){
                console.log('scroll init')
                let {top} = this.offsetTop()
                if(window.scrollY > top - this.distance){
                    // console.log('滚动过了高度',window.scrollY)
                    //这个时候再去拿有效数据
                    let {height,left,width} = this.$refs.wrapper.getBoundingClientRect()
                    this.height = height + 'px'
                    this.left = left + 'px'
                    this.width = width + 'px'
                    this.top = this.distance + 'px'
                    this.sticky = true
                }else{
                    // console.log('没有滚动过了高度',window.scrollY)
                    this.height = undefined
                    this.left = undefined
                    this.width = undefined
                    this.sticky = false
                }
                    
            }
        }
    }
</script>

<style lang="scss" scoped>
.w-sticky{
    &.sticky{
        position: fixed;
    }
}
</style>