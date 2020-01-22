<template>
    <div 
    class="col" 
    :class="colClass"
    :style="colStyle"
    >
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value)=>{
        let keys = Object.keys(value)
        let invalid = true
        keys.forEach(key=>{
            if(!['offset','span'].includes(key)){
                invalid = false
            }
        })
        return invalid
    }
    export default {
       name:'WCol',
       props:{
           span:{
               type:[Number,String],
           },
           offset:{
               type:[Number,String]
           },
           phone:{type:Object,validator},
           ipad:{type:Object,validator},
           narrowPc:{type:Object,validator},
           pc:{type:Object,validator},
           widePc:{type:Object,validator}
           //另一个属性gutter间距从父那里得到
           //父 this.$children   vm.gutter
       },
       data(){
           return {
               gutter:0,
           }
       },
       computed: {
          //不能放在data里面，这个colStyle需要计算的
          //parent进行mounted之后才计算这个属性，那个时候
          //child已经挂载过了    
          colStyle(){
              let {gutter} = this
              return {
                   //优化 增加可读性
                   paddingLeft:gutter/2 + 'px',
                   paddingRight:gutter/2 + 'px'
               }  
          },
          colClass(){
              //[span&&`col-${span}`,offset&&`offset-${offset}`]
              //解构出span offset
              let phoneClass = []
              let {span,offset,phone,ipad,narrowPc,pc,widePc} = this
              let createClasses = this.createClasses
              return [
                  ...createClasses({span,offset}),
                  ...createClasses(phone,'phone-'),
                  ...createClasses(ipad,'ipad-'),
                  ...createClasses(narrowPc,'narrow-pc-'),
                  ...createClasses(pc,'pc-'),
                  ...createClasses(widePc,'wide-pc-')
                ]
          }
       },
       methods: {
           //narow-pc="{span:12,offset:1}"   span="12"
           createClasses(obj,str=''){
            //str是 pc-   phone-   narrow-pc- 用数组再去解构 这样可以同时加入两个类
            if(!obj) return []
            let array = []
            if(obj.span){
                array.push(`col-${str}${obj.span}`)
            }
            if(obj.offset){
                array.push(`offset-${str}${obj.offset}`)
            }
            return array
           }
       },
       created(){
        //    console.log('col created')
       },
        mounted() {
            // console.log(this.gutter)
            // console.log('col mounted')
        }
    }
</script>

<style lang="scss" scoped>
.col{
    box-sizing: border-box;
    $class-prefix:col-;
    @for $i from 1 through 24 {
        &.#{$class-prefix}#{$i}{
            width: ($i / 24) * 100%;
        }
    }
    $class-prefix:offset-;
    @for $i from 1 through 24 {
        &.#{$class-prefix}#{$i}{
            margin-left: ($i / 24) * 100%;
        }
    }   
    //ipad默认样式 模式是按照手机的样式走
     @media (min-width: 577px){
        $class-prefix:col-ipad-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                width: ($i / 24) * 100%;
            }
        }
        $class-prefix:offset-ipad-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                margin-left: ($i / 24) * 100%;
            }
        } 
    } 

    //小pc
    @media (min-width: 769px){
        $class-prefix:col-narrow-pc-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                width: ($i / 24) * 100%;
            }
        }
        $class-prefix:offset-narrow-pc-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                margin-left: ($i / 24) * 100%;
            }
        } 
    }   

    //中等pc默认的样式
     @media (min-width: 993px){
        $class-prefix:col-pc-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                width: ($i / 24) * 100%;
            }
        }
        $class-prefix:offset-pc-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                margin-left: ($i / 24) * 100%;
            }
        } 
    } 
    // 大pc默认的样式
     @media (min-width: 1201px) {
        $class-prefix:col-wide-pc-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                width: ($i / 24) * 100%;
            }
        }
        $class-prefix:offset-wide-pc-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i}{
                margin-left: ($i / 24) * 100%;
            }
        } 
    } 
    // @media (max-width: 576px)  {
    // // 这个是手机 css中不知道js中的内容 改变Html中的样式
    // // 手机的样式可以覆盖
    //     $class-prefix:col-phone-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             width: ($i / 24) * 100%;
    //         }
    //     }
    //     $class-prefix:offset-phone-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             margin-left: ($i / 24) * 100%;
    //         }
    //     } 
    // } 
    // //ipad默认样式
    //  @media (min-width: 577px) and (max-width: 768px) {
    //     $class-prefix:col-ipad-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             width: ($i / 24) * 100%;
    //         }
    //     }
    //     $class-prefix:offset-ipad-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             margin-left: ($i / 24) * 100%;
    //         }
    //     } 
    // } 

    // //小pc
    // @media (min-width: 769px) and (max-width: 992px) {
    //     $class-prefix:col-narrow-pc-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             width: ($i / 24) * 100%;
    //         }
    //     }
    //     $class-prefix:offset-narrow-pc-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             margin-left: ($i / 24) * 100%;
    //         }
    //     } 
    // }   

    // //中等pc默认的样式
    //  @media (min-width: 993px) and (max-width: 1200px) {
    //     $class-prefix:col-pc-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             width: ($i / 24) * 100%;
    //         }
    //     }
    //     $class-prefix:offset-pc-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             margin-left: ($i / 24) * 100%;
    //         }
    //     } 
    // } 
    // // 大pc默认的样式
    //  @media (min-width: 1201px) {
    //     $class-prefix:col-wide-pc-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             width: ($i / 24) * 100%;
    //         }
    //     }
    //     $class-prefix:offset-wide-pc-;
    //     @for $i from 1 through 24 {
    //         &.#{$class-prefix}#{$i}{
    //             margin-left: ($i / 24) * 100%;
    //         }
    //     } 
    // } 
}

</style>