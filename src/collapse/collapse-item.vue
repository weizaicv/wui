<template>
    <div class="collapse-item">
        <div class="title" @click="toggle" :data-name="name">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:"WCollapseItem",
        inject:['eventBus'],
        data(){
            return {
                open:false
            }
        },
        props:{
            title:{
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        },
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected',(names)=>{
                if(names.indexOf(this.name) >= 0){
                    this.open = true
                }else{
                    this.open = false
                }
            })
        },
        methods:{
            toggle(){
                //触发remove or add事件  给父处理
                if(this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected',this.name)
                }else{
                    this.eventBus && this.eventBus.$emit('update:addSelected',this.name)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius:4px;
.collapse-item{
    >.title{
        border: 1px solid $grey;
        margin-bottom: -1px;
        margin-top: -1px;
        margin-left: -1px;
        margin-right: -1px;
        display: flex;
        align-items: center;
        padding: 0 8px;
        min-height: 32px;
        background: lighten($grey, 8%)
    }
    &:first-child{
        >.title{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
    }
    &:last-child{
        >.title{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
    }
    .content{
        padding: 8px;
    }
}
</style>