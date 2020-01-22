<template>
    <div>
        <p>普通文本输入框：
        <w-input value="测试输入框"></w-input>
        </p>
        <p>禁用输入输入框：
        <w-input value="haha" disabled></w-input></p>
        <p>单纯只读输入框：
        <w-input value="haha2" readonly></w-input></p>
        <p>双向绑定输入框：
        <w-input v-model="message"></w-input></p>
        <p>错误提示输入框：
        <w-input value="ha2" error="cuowu"></w-input></p>
        <p>触发回调输入框：
        <w-input value="" @input='callbackVal=$event'></w-input>
        回调返回值：{{callbackVal}}
        </p>
        <pre><code class="language-html">{{code}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import Input from '../../../src/input'
    export default {
        components:{
            'w-input': Input
        },
        data(){
            return {
                code:`
    <w-input value="测试输入框"></w-input>
    <w-input value="haha" disabled></w-input>
    <w-input value="haha2" readonly></w-input>
    <w-input v-model="message"></w-input>
    <w-input value="ha2" error="cuowu"></w-input>
    <w-input value="ha2" @change='callbackVal=$event'></w-input>
    回调返回值：{{callbackVal}}
                `.replace(/\t+/g,'').trim(),
                message:'test-v-model',
                callbackVal:''
            }
        },
        methods:{
            inputchange(val){
                this.callbackVal = val;
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }
    }
</script>
<style lang="scss">
   
</style>
