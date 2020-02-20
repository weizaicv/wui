<template>
    <div>
        <p>基础用法</p>
        <p>直接包裹需要黏住顶部的dom元素</p>
        <!-- <p style="height:300px;background:#eee;">段落</p>
        <w-sticky :distance="100">
            <div style="border:1px solid red;">
            <img src="https://weizaicv.github.io/wui/hero.jpg" alt="">
            </div>
        </w-sticky>
        <p style="height:700px;background:#ddd;">段落</p> -->
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import WSticky from '../../../src/sticky'
    export default {
        components:{
            WSticky
        },
        data(){
            return {
                code_groupBtn:`
    <w-sticky :distance="100">
        <div style="border:1px solid red;">
        <img src="https://weizaicv.github.io/wui/hero.jpg" alt="">
        </div>
    </w-sticky>
    <p style="height:700px;background:#ddd;">段落</p>
                `.replace(/\t+/g,'').trim()
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
