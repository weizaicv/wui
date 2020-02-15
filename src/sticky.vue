<template>
    <div class="w-sticky-wrapper" ref="wrapper">
        <div class="w-sticky" :class="classes">
            <slot>123</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:"WSticky",
        data(){
            return{
                sticky:false
            }
        },
        mounted(){
            let top = this.top()
            window.addEventListener('scroll',()=>{
                if(window.scrollY > top){
                    console.log('滚动过了高度',window.scrollY)
                    this.sticky = true
                }else{
                    console.log('没有滚动过了高度',window.scrollY)
                    this.sticky = false
                }
                
            })
        },
        computed:{
            classes(){
                return {
                    sticky: this.sticky
                }
            }
        },
        methods:{
            //getBoundingClientRect 视口的距离和自身宽高
            top(){
                let {top} = this.$refs.wrapper.getBoundingClientRect()
                return top + window.scrollY
            }
        }
    }
</script>

<style lang="scss" scoped>
.w-sticky-wrapper{
    .sticky{
        position: fixed;
        top:0;
        width: 100%;
    }
}
</style>