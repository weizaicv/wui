<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name"> 
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'WTabsItem',
        inject:['eventBus'],
        //不要设置为props data可以被任意修改
        data(){
            return {
                active: false
            }
        },
        props:{
            disabled:{
                type: Boolean,
                default: false
            },
            name:{
                type: String|Number,
                required:true
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
            }
        },
        created(){
            this.eventBus &&
            this.eventBus.$on('update:selected',(name)=>{
                if(name === this.name){
                    this.active = true
                }else{
                    this.active = false
                }
            })
        },
        methods:{
            onClick(){
                if(this.disabled){
                    return
                }
                this.eventBus.$emit('update:selected',this.name, this)
            }
        }
    }
</script>

<style scoped lang="scss">
$blue:blue;
$disabled-text-color:grey;
.tabs-item{
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 1em;
    display: flex;
    align-items: center;
    &.active{
        color:$blue;
        font-weight: bold;
    }
    &.disabled{
        color:$disabled-text-color;
        cursor: not-allowed;
    }
}
</style>