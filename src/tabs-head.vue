<template>
    <div class="tabs-head"> 
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:'WTabsHead',
        inject:['eventBus'],
        created(){
            // this.$nextTick(()=>{
            //     console.log(this.$refs.line.offsetWidth,this.$refs.line.offsetHeight)
            // })
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width,height,left,top} = vm.$el.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left}px`
                console.log(width,left)
            })
        },
    }
</script>

<style scoped lang="scss">
$tab-height:40px;
$blue:blue;
.tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    > .line{
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid $blue;
        transition: all 350ms;
    }
    > .action-wrapper{
        margin-left: auto;
        display: flex;
    }
    
}
</style>