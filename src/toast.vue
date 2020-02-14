<template>
<!-- 动画 translateX -50%   translateY 100% 会进行合并动画 -->
<!-- 解决方案：外层套一个wrapper,里面那层做动画 -->
    <div class="wrapper" :class="toastClasses"  ref="wrapper">
        <div class="toast">
            <!-- slot里面不可以是用v-html -->
            <slot v-if="!enableHtml"></slot>
            <div v-if="enableHtml" v-html="$slots.default[0]">
            </div>
            <!-- 当父级是min-height动态设置的高度的时候，需要js动态计算高度 -->
            <div class="line" v-if="closeButton.callback" ref="line"></div>
            <span class="close" v-if="closeButton.callback" @click="onClickClose">{{closeButton.text}}</span>
        </div>
    </div>
    
</template>

<script>
    export default {
        name:'WToast',
        props:{
            autoClose:{
                type:Boolean,
                default:true
            },
            autoCloseDelay:{
                type:Number,
                default:5
            },
            // 关闭按钮?
            closeButton:{
                type:Object,
                // 必须传递函数形式 防止对象被修改
                default(){
                    return {
                        text:'关闭',
                        callback:undefined
                    }
                }
            },
            enableHtml:false,
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ["top","bottom","center"].includes(value)
                }
            }
        },
        computed: {
            toastClasses(){
                //计算class
                return {
                    [`position-${this.position}`]:true
                }
            }            
        },
        mounted() {
            this.execAutoClose()
            //dom操作是异步的 确保更新完毕再获取nextTick
            this.updateStyles()
        },
        methods: {
            updateStyles(){
                this.$nextTick(()=>{
                    console.log(this.$refs.line)
                    console.log(this.$refs.wrapper)
                    this.$refs.line.style.height = 
                    `${this.$refs.wrapper.getBoundingClientRect().height}px`
                },1000)
            },
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            },
            close(){
                //删除挂载的元素，删除绑定的事件
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log(){
                console.log('log toast action')
            },
            onClickClose(){
                if(this.closeButton && typeof this.closeButton.callback == 'function'){
                    //传入实例 可以调用方法
                    this.closeButton.callback(this)
                    this.close()
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
$min-height:40px;
$toast-bg:black;
$font-size:14px;
@keyframes slide-down{
    0%{opacity:0;transform:translateY(-100%)}
    100%{opacity:1;translate: translateY(0%)}
}
@keyframes fade-in{
    0%{opacity:0;}
    100%{opacity:1;}
}
@keyframes slide-up{
    0%{opacity:0;transform:translateY(100%)}
    100%{opacity:1;translate: translateY(0%)}
}
.wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    $animation-duration:1s;
    &.position-top{
        top:0;
        .toast{
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation: slide-down $animation-duration;
        }
        // transform: translateX(-50%);
    }
    &.position-center{
        top:50%;
        .toast{
            animation: fade-in $animation-duration;
        }
        // transform: translate(-50%,-50%);
    }
    &.position-bottom{
        bottom: 0;
        .toast{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: slide-up $animation-duration;
        }
        // transform: translateX(-50%);
    }
}
.toast{
    // animation: fade-in 1s;
    color: #fff;
    font-size: $font-size;
    min-height: $min-height;
    line-height: 1.8;
    border: 1px solid  #333;
    display: flex;
    align-items: center;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
    border-radius: 4px;
    padding: 0 16px;
    .close{
        padding-left: 16px;
        flex-shrink: 0;
        cursor: pointer;
    }
    .line{
        border-left: 1px solid #999;
        margin-left: 16px;
    }
}
</style>