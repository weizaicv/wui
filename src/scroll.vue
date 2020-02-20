<template>
    <div ref="parent" class="w-scroll-wrapper" 
    @mouseenter="onMouseEnter" 
    @mouseleave="onMouseLeave"
    @wheel="onWheel"
    >
        <div ref="child" class="w-scroll" :style="{transform:`translateY(${this.contentY}px)`}">
            <slot></slot>
        </div>
        <div class="w-scroll-track"  
        v-show="scrollBarVisible" 
        >
            <div class="w-scroll-bar" ref="bar" 
            @mousedown="onMouseDownScrollBar" 
            @selectstart="onSelectStartScrollBar">
                <div class="w-scroll-bar-inner"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import WScroll from './scroll'
    export default {
        components:{
            WScroll
        },
        data(){
            return {
                scrollBarVisible:false,
                isScrolling:false,
                startPosition:undefined,
                endPosition:undefined,
                translateX:0,
                translateY:0,
                scrollBarY:0,
                contentY:0,
                parentHeight:undefined,
                childHeight:undefined
            }
        },
        beforeDestroy(){
            //移除监听的事件
        },
        mounted(){
            this.listenToDocument()
            this.childHeight = this.$refs.child.getBoundingClientRect().height
            this.parentHeight = this.$refs.parent.getBoundingClientRect().height
            this.updateScrollBar()
            this.listenToRemoteResources()
            this.listenToDomChange()
        },
        watch:{
            scrollBarY(newValue){
                this.contentY = -(this.childHeight*newValue/this.parentHeight)
            }
        },
        methods:{
            //dom发生变化的时候 动态计算content的高度
            listenToDomChange(){
                //可以监听DOM结构变化的接口
                const targetNode = this.$refs.child
                // 设置observer的配置选项
                const config = {attributes: true, childList: true, subtree: true};
                // 当节点发生变化时的需要执行的函数
                const callback = () => {
                    this.listenToRemoteResources()
                }
                // 创建一个observer示例与回调函数相关联
                var observer = new MutationObserver(callback);

                //使用配置文件对目标节点进行观测
                observer.observe(targetNode, config);

            },
            listenToRemoteResources(){
                if(!this.$refs.parent) return
                let tags = this.$refs.parent.querySelectorAll('img, video, audio')
                console.log(tags)
                Array.from(tags).map((tag) => {
                    if (tag.hasAttribute('data-w-listened')) { return }
                    tag.setAttribute('data-w-listened', 'yes')
                    tag.addEventListener('load', () => {
                        //需要重新获取!!!!!!!!!!!!!!computed有缓存
                        console.log('load new child Height')
                        this.childHeight = this.$refs.child.getBoundingClientRect().height
                        this.updateScrollBar()
                    })
                })
            },
            listenToDocument(){
                document.addEventListener('mousemove',(e)=>{
                    this.onMouseMoveScrollBar(e)
                })
                document.addEventListener('mouseup',(e)=>{
                    this.onMouseUpScrollBar(e)
                })
            },
            // 滚轮事件
            // 判断滚轮向上或向下在浏览器中也要考虑兼容性，
            // 现在五大浏览器（IE、Opera、Safari、Firefox、Chrome）
            // 其中Firefox 使用detail，其余四类使用wheelDelta；
            // 两者只在取值上不一致，代表含义一致，
            // detail与wheelDelta只各取两个 值，detail只取±3，
            // wheelDelta只取±120，其中正数表示为向上，负数表示向下。
            onWheel(e){
                this.updateContentY(e)
                this.updateScrollBar()
            },
            updateContentY(e){
                let maxHeight = this.CalContentYMax()
                let direction
                //IE、Opera、Safari、Firefox、Chrome
                if(e.wheelDelta)
                    direction = e.wheelDelta/150;
                //Firefox
                if(e.detail)
                    direction = -e.detail/3;
                //window 向下滑动滚轮-> 负  文字向下 （Mac相反）
                if(this.isMac()){
                    this.contentY -= direction * 50
                    if(this.contentY <= 0){
                        this.contentY = 0
                    }else if (this.contentY > maxHeight){
                        this.contentY = maxHeight
                    }else{
                        //防止屏幕抖动
                        e.preventDefault()
                    }
                }
                if(this.isWindows()){
                    if(direction > 0){
                        this.$emit('wheelChange',1)
                    }else{
                        this.$emit('wheelChange',-1)
                    }
                    this.contentY += direction * 50
                    if(this.contentY >= 0){
                        this.contentY = 0
                        this.$emit('borderChange',0)
                    }else if (this.contentY < -maxHeight){
                        this.contentY = -maxHeight
                        this.$emit('borderChange',1)
                    }else{
                        e.preventDefault()
                    }
                }
            },
            //获取最大content高度
            CalContentYMax(){
                let {borderTopWidth,borderBottomWidth,paddingTop,paddingBottom} = window.getComputedStyle(this.$refs.parent)
                borderTopWidth = parseInt(borderTopWidth);
                borderBottomWidth = parseInt(borderBottomWidth);
                paddingTop = parseInt(paddingTop);
                paddingBottom = parseInt(paddingBottom);
                let maxHeight = this.childHeight - this.parentHeight + (borderTopWidth+borderBottomWidth+paddingTop+paddingBottom)
                return maxHeight
            },
            //计算滚条的实际高度 / parentH = parentH / childH
            updateScrollBar(){
                this.barHeight = this.parentHeight * this.parentHeight / this.childHeight
                this.$refs.bar.style.height = this.barHeight + 'px'
                //滚动距离 / childH = y / parentH
                //根据Mac or Window判断滚轮方向
                this.scrollBarY = this.direction() * ( this.contentY * this.parentHeight / this.childHeight )
                this.$refs.bar.style.transform = `translateY(${this.scrollBarY}px)`
            },
            onMouseDownScrollBar(e){
                this.isScrolling = true
                let {screenX,screenY} = e
                this.startPosition = {x:screenX,y:screenY}
            },
            onMouseMoveScrollBar(e){
                let maxScrollHeight = this.parentHeight - this.barHeight
                if(!this.isScrolling) return
                let {screenX,screenY} = e
                this.endPosition = {x:screenX,y:screenY}
                let delta = {x:this.endPosition.x - this.startPosition.x,y:this.endPosition.y-this.startPosition.y}
                this.scrollBarY = parseInt(this.scrollBarY) + delta.y
                if(this.scrollBarY < 0){
                    this.scrollBarY = 0
                }else if(this.scrollBarY > maxScrollHeight){
                    this.scrollBarY = maxScrollHeight
                }
                //计算出内容
                this.contentY = this.direction() * (this.childHeight*this.scrollBarY/this.parentHeight)
                this.startPosition = this.endPosition
                this.$refs.bar.style.transform = `translate(0px,${this.scrollBarY}px)`
            },

            onMouseUpScrollBar(e){
                this.isScrolling = false
            },
            onMouseEnter(){
                this.scrollBarVisible = true
            },
            onMouseLeave(){
                if(!this.isScrolling) this.scrollBarVisible = false;
            },
            onSelectStartScrollBar(e){
                //禁止选中
                e.preventDefault()
            },

            //鼠标滚动 正负方向 Mac和window不一致
            direction(){
                if(this.isMac()){return 1}
                if(this.isWindows()){return -1}
                return -1
            },
            /** * 是否为mac系统（包含iphone手机） * */ 
            isMac() { 
                return /macintosh|mac os x/i.test(navigator.userAgent); 
            },
            /** * 是否为windows系统 * */
            isWindows() { 
                return /windows|win32/i.test(navigator.userAgent);
            }
        }
    }
</script>

<style lang="scss" scoped>
.w-scroll{
    transition: transform .5s ease;
    &-wrapper{
        overflow: hidden;
        position: relative;
    }
    &-track{
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 100%;
        background: #fafafa;
        border-left: 1px solid #e8e7e8;
    }
    &-bar{
        position: absolute;
        top:-1px;
        left: 50%;
        height: 40px;
        width: 8px;
        margin-left: -4px;
        padding: 4px 0;
        background: #c2c2c2;
        border-radius: 4px;
        &-inner{
            height:100%;
            border-radius: 4px;
            background: #ccc;
            &:hover{
                background: #7d7d7d;
            }
        }
    }
}
</style>