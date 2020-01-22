<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
       name:'WRow',
        props:{
            gutter:{
                type:[Number,String]
            },
            align:{
                validator(value){
                    return ['left','right','center'].includes(value)
                }
            }
        },
        created(){
            // console.log('row created')
        },
        computed: {
            rowStyle(){
                let {gutter} = this
                return {
                    marginLeft:-gutter/2 +'px',
                    marginRight:-gutter/2 +'px'
                }
            },
            rowClass(){
                let {align} = this
                return [align && `align-${align}`]
            }

        },
        mounted() {
            // console.log('row mounted')
            //顺序 parent created|child created|child mounted|parent mounted
            // console.log(this.$children)
            this.$children.forEach(vm=>{
                vm.gutter = this.gutter
            })            
        },
    }
</script>

<style lang="scss" scoped>
.row{
    display: flex;
    flex-wrap: wrap;
    &.align-left{
        justify-content: flex-start;
    }
    &.align-right{
        justify-content: flex-end;
    }
    &.align-center{
        justify-content: center;
    }
}
</style>