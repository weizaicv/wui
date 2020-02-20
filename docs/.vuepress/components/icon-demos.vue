<template>
    <div>
        <p>系统内置图标，图标建议自己<a href="https://www.iconfont.cn">iconfont</a>引入</p>
        <w-icon name="loading"></w-icon>
        <w-icon name="nextPage"></w-icon>
        <w-icon name="prePage"></w-icon>
        <w-icon name="rightright"></w-icon>
        <w-icon name="leftleft"></w-icon>
        <w-icon name="upload"></w-icon>
        <w-icon name="asc"></w-icon>
        <w-icon name="desc"></w-icon>
        <w-icon name="dots"></w-icon>
        <w-icon name="warning"></w-icon>
        <w-icon name="settings"></w-icon>
        <w-icon name="personal"></w-icon>
        <pre><code class="language-html">{{code_default}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import WIcon from '../../../src/icon'
    export default {
        components:{
            WIcon
        },
        data(){
            return {
                code_default:`
    <w-icon name="loading"></w-icon>
    <w-icon name="nextPage"></w-icon>
    <w-icon name="prePage"></w-icon>
    <w-icon name="rightright"></w-icon>
    <w-icon name="leftleft"></w-icon>
    <w-icon name="upload"></w-icon>
    <w-icon name="asc"></w-icon>
    <w-icon name="desc"></w-icon>
    <w-icon name="dots"></w-icon>
    <w-icon name="warning"></w-icon>
    <w-icon name="settings"></w-icon>
    <w-icon name="personal"></w-icon>          
                `.replace(/\t+/g,'').trim()
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
