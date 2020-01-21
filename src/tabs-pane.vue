<template>
    <div class="tabs-pane" :class="classes" v-if="active"> 
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'WTabsPane',
        inject:['eventBus'],
        props:{
            name:{
                type: String | Number,
                required: true
            }
        },
        data(){
            return {
                active: false
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active
                }
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                if(name == this.name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        }
    }
</script>

<style scoped>

</style>