<template>
    <button @click="$emit('click')" class="w-button yarn3" :class="{[`icon-${iconPosition}`]:true}">
        <w-icon class="icon" v-if="icon && !loading" :name="icon"></w-icon>
        <w-icon class="icon loading" v-if="loading" name="loading"></w-icon>
        <div class="content"><slot></slot></div>
    </button>
</template>

<script>
    import Icon from '../icon'
// vue的语法糖 vue.component('',{})
    export default {
        components:{
            'w-icon':Icon
        },
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                  return value ==='left'|| value ==='right'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $button-height: 32px;
    $button-bg: white;
    $button-active-bg: #eee;
    $border-radius: 4px;
    $color: #333;
    $border-color: #999;
    $border-color-hover: #666;
    @keyframes spin{
        0%{transform:rotate(0deg);}
        100%{transform:rotate(360deg);}
    }
    .w-button{
        margin: .3em;
        cursor: pointer;
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align:middle;
        > .icon{order:1;margin-right: .3em;}
        > .content{order:2;}
        &:hover{
            border-color: $border-color-hover
        }
        &:active{
            border-color: $button-active-bg
        }
        &:focus{
            outline: none;
        }
        &.icon-right{
            > .icon{order:2;margin-right: 0;margin-left: .3em;}
            > .content{order:1}
        }
        .loading{
            animation: spin 2s infinite;
        }
    }
</style>