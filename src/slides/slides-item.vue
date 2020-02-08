<template>
    <transition name="slide">
        <div class="w-slides-item" v-if="visible" :class="{reverse}">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name:'WSlidesItem',
        props:{
            name:{
                type: String,
                required: true
            }
        },
        data(){
            return {
                selected: undefined,
                reverse: false
            }
        },
        computed:{
            visible() {
                //哪一个选中? 外部父级vm.selected随时去改变
                return this.selected === this.name
            }
        }
    }
</script>

<style lang="scss" scoped>
// @import '../styles/_var.scss';
// @import '_var';
// enter,enter-active,enter-to,leave,leave-active,leave-to
.slide-leave-active{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.slide-enter-active,.slide-leave-active{
    transition: all .5s;
}
.slide-enter{
    transform: translateX(100%);
}
.slide-enter.reverse {
    transform: translateX(-100%);
}
.slide-leave-to {
    // transform: translateX(-100%) scale(0.5);
    transform: translateX(-100%);
}
.slide-leave-to.reverse {
    transform: translateX(100%);
}
</style>