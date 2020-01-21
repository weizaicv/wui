<template>
    <transition name="slide">
        <div class="aside" v-if="visible">
            <slot></slot>
            <button @click="hide">close</button>
        </div>    
    </transition>

</template>

<script>
    export default {
        name:'WAside',
        data(){
            return {
                visible:true
            }
        },
        methods: {
            hide(){
                this.visible = false
            }
        },
    }
</script>

<style lang="scss" scoped>
.aside{
    position: relative;
    > button{
        position: absolute;
        top: 0;
        right: 0;
    }
}
.slide-enter-active,.slide-leave-active{
    transition:all .3s;
}
.slide-enter,.slide-leave-to{
    margin-left: -150px;
}
</style>