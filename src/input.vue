<template>
    <div class="wrapper" :class="{'error':error}">
        <input 
        :value="value" 
        type="text" 
        :disabled="disabled" 
        :readonly="readonly"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        /> 
        <template v-if="error">
            <w-icon name="jinggao" class="icon-error"></w-icon>
            <span class="errorMessage">{{error}}</span>    
        </template>  
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'WInput',
        components:{
            'w-icon':Icon
        },
        props:{
            value:{
                type:String
            },
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            },
            error:{
                type:String,
            }
        }
    }
</script>

<style lang="scss" scoped>
$height:32px;
$border-color:#999;
$border-color-hover:#666;
$border-radius:4px;
$box-shadow-color:rgba(0,0,0,0.5);
$font-size:12px;
$red:#f1453d;
.wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items:center;
    > :not(:last-child){margin-right:.5em;}
    > input{
        height: $height;
        border:1px solid $border-color;
        padding:0 8px;
        font-size: inherit;
        border-radius: $border-radius;
        &:hover{
            border-color: $border-color-hover;
        }
        &:focus{
            box-shadow: inset 0 1px 3px $box-shadow-color;
            outline: none;
        }
        &[disabled],&[readonly]{
            border-color: #333;
            color: #333;
            cursor: not-allowed;
        }
    }
     &.error{
            >input{border-color: $red}
     }
     .icon-error{fill:$red !important;}
     .errorMessage{color: $red;}
}
</style>