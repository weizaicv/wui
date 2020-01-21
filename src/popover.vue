<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" 
        v-if="visible"
        :class = "{[`position-${position}`]:true}"
        >
            <!-- 传递close函数给到外部 结构出来 slot-scope={close} -->
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name:"WPopover",
        props:{
            position:{
                type:String,
                default:'top',
                validator (value) {
                    return ['top','bottom','left','right'].indexOf(value) >= 0
                }
            },
            trigger:{
                type:String,
                default:'click',
                validator (value) {
                    return ['click','hover'].indexOf(value) >= -1
                }
            }
        },
        data(){
            return {
                visible:false
            }
        },
        computed:{
            openEvent(){
                if(this.trigger === 'click'){
                    return 'click'
                }else{
                    return 'mouseenter'
                }
            },
            closeEvent(){
                if(this.trigger === 'click'){
                    return 'click'
                }else{
                    return 'mouseleave'
                }
            }
        },
        mounted(){
            if(this.trigger === 'click'){
                this.$refs.popover.addEventListener('click',this.onClick)
            }else{
                this.$refs.popover.addEventListener('mouseenter',this.open)
                this.$refs.popover.addEventListener('mouseleave',this.close)
            }
        },
        //1.外部有overflow:hidden会隐藏显示框，将显示框独立
        //2.会冒泡 但是如果都阻止冒泡 最外部绑定事件将无效
        //3.鼠标移开就消失 方法：1.方法1：外部包父容器 2都设置上mouseover mouseleave 配合定时器
        methods:{
            onClick(e){
               //看点击的地方是不是按钮,只触发按钮的点击
               if(this.$refs.triggerWrapper.contains(e.target)){
                   if(this.visible === true){
                       this.close()
                   }else{
                       this.open()
                   }
               }
            },
            onClickDocument(e){
                //点击其他地方消失弹窗 本来需要在popover上面加click.stop阻止冒泡
                //如果点击的是popover或者弹出来的contentWrapper 则没有变化
                //要么就消失
                if(this.$refs.popover &&
                (this.$refs.popover == e.target || this.$refs.popover.contains(e.target))
                ){
                    return;
                }
                if(this.$refs.contentWrapper &&
                (this.$refs.contentWrapper == e.target || this.$refs.contentWrapper.contains(e.target))
                ){
                    return;
                }
                this.close();
            },
            positionContent(){
                //用表数据展现 不要写成if else
                const {contentWrapper,triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                //显示出来了 content 并且是 hover类型需要 将内容也绑定鼠标进入
                if(this.trigger === 'hover'){
                    this.$refs.contentWrapper.addEventListener('mouseenter',this.open)
                    this.$refs.contentWrapper.addEventListener('mouseleave',this.close)
                }
                

                let {width,height,top,left} = triggerWrapper.getBoundingClientRect()
                let {height:height2} = contentWrapper.getBoundingClientRect()
                let positions = {
                    top:{
                        top:top + window.scrollY + 'px',
                        left:left + window.scrollX + 'px'
                    },
                    bottom:{
                        top:top + height + window.scrollY + 'px',
                        left:left + window.scrollX + 'px'
                    },
                    left:{
                        top:top + (height-height2)/2 + window.scrollY + 'px',
                        left:left + window.scrollX + 'px'
                    },
                    right:{
                        top:top + (height-height2)/2 + window.scrollY + 'px',
                        left:left + width + window.scrollX + 'px'
                    }
                }
                contentWrapper.style.left = positions[this.position].left
                contentWrapper.style.top = positions[this.position].top
            },
            open(){
                console.log('open')
                this.visible = true
                this.$nextTick(()=>{
                    this.positionContent()
                    document.addEventListener('click',this.onClickDocument)
                })
            },
            close(){
                this.visible = false
                document.removeEventListener('click',this.onClickDocument)
            }
        }
    }
</script>
<!--
添加一个实心三角形加上一个透明三角形 叠加即可
阴影采用投影，可以影响其他位置元素
防止刚刚进入发生抖动》》》
-->
<style lang="scss" scoped>
$border-color:#333;
$border-radius: 4px;
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
}
.content-wrapper{
    position: absolute;
    border: 1px solid $border-color;
    filter:drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
    // transform: translateY(-100%);
    // margin-top: -10px;
    background: white;
    border-radius: $border-radius;
    padding: .5em .1em;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
        content: '';
        border:10px solid transparent;
        width: 0;
        height: 0;
        position: absolute;
    }
    &.position-top{
        transform: translateY(-100%);
        margin-top: -10px;
        &::before,&::after{
            left: 10px;
        }
        &::before{
            border-top-color: $border-color;
            border-bottom: none;
            top: 100%;
        }
        &::after{
            border-top-color: white;
            border-bottom: none;
            top: calc(100% - 1px);
        }
    }
     &.position-bottom{
        margin-top: 10px;
        &::before,&::after{
            left: 10px;
        }
        &::before{
            border-bottom-color: $border-color;
            bottom: 100%;
            border-top: none;
        }
        &::after{
            border-bottom-color: white;
            bottom: calc(100% - 1px);
            border-top: none;
        }
    }
    &.position-left{
        transform: translateX(-100%);
        margin-left: -10px;
        &::before,&::after{
            transform: translateY(-50%);
            top:50%;
        }
        &::before{
            border-left-color: $border-color;
            left: 100%;
            border-right: none;
        }
        &::after{
            border-left-color: white;
            left:calc(100% - 1px);
            border-right: none;
        }
    }
    &.position-right{
        margin-left: 10px;
        &::before,&::after{
            transform: translateY(-50%);
            top:50%;
        }
        &::before{
            right: 100%;
            border-right-color: $border-color;
            border-left: none;
        }
        &::after{
            border-right-color: white;
            right:calc(100% - 1px);
            border-left: none;
        }
    }
    
}
</style>