<template>
    <div>
        <p>如果页面布局格式固定</p>
        <p>分为左部导航，头部，内容，尾部，各个组件互相独立，可以保留需要的组件</p>
        <div class="com">
            <w-layout style="height: 40vh;">
                <w-aside class="aside">aside</w-aside>
                <w-layout>
                    <w-header class="header">header</w-header>
                    <w-content class="wcontent">content</w-content>
                    <w-footer class="footer">footer</w-footer>
                </w-layout>
            </w-layout>
        </div>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import Layout from "../../../src/layout/layout";
    import Header from "../../../src/layout/header";
    import Footer from "../../../src/layout/footer";
    import Aside from "../../../src/layout/aside";
    import Content from "../../../src/layout/content";
    export default {
        components:{
            "w-layout": Layout,
            "w-header": Header,
            "w-footer": Footer,
            "w-aside": Aside,
            "w-content": Content,
        },
        data(){
            return {
                code_groupBtn:`
    <w-layout style="height: 40vh;">
        <w-aside class="aside">aside</w-aside>
        <w-layout>
            <w-header class="header">header</w-header>
            <w-content class="wcontent">content</w-content>
            <w-footer class="footer">footer</w-footer>
        </w-layout>
    </w-layout>           
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
 .aside{background: #555;min-width: 100px;}
.header{background: #666;min-height: 50px;}
.wcontent{background: #999;}
.footer{background: #ddd;min-height: 50px;}
</style>
