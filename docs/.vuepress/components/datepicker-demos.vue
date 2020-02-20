<template>
    <div>
        <p>基础用法</p>
        <div class="com">
          {{d}}
            <w-date-picker @input="d = $event" :value="d"></w-date-picker>
        </div>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    // 默认显示图片url是 http://127.0.0.1:3333/upload/xxxxx
    import WDatePicker from '../../../src/datepicker/date-picker'
    export default {
        components:{
            WDatePicker
        },
        data(){
            return {
                d:new Date(),
                code_groupBtn:`
    <w-date-picker @input="d = $event" :value="d"></w-date-picker>
                `.replace(/\t+/g,'').trim()

            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
<style lang="scss">
    .com{
        border:1px solid #ddd;
        padding:20px;
    }
</style>
