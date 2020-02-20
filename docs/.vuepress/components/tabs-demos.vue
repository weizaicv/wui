<template>
    <div>
        <p>基础用法</p>
        <div class="com">
            <w-tabs :selected.sync="selectedTab">
                <w-tabs-head class="">
                    <template slot="actions"><w-button>设置</w-button></template>
                    <w-tabs-item name="woman">woman</w-tabs-item>
                    <w-tabs-item name="settings" disabled>settings</w-tabs-item>
                    <w-tabs-item name="finance">finance</w-tabs-item>
                </w-tabs-head>
                <w-tabs-body>
                    <w-tabs-pane name="woman">woman's data</w-tabs-pane>
                    <w-tabs-pane name="settings">settings's data</w-tabs-pane>
                    <w-tabs-pane name="finance">finance's data</w-tabs-pane>
                </w-tabs-body>
            </w-tabs>
        </div>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import Button from '../../../src/button/button'
    import Tabs from '../../../src/tabs/tabs'
    import TabsHead from '../../../src/tabs/tabs-head'
    import TabsItem from '../../../src/tabs/tabs-item'
    import TabsBody from '../../../src/tabs/tabs-body'
    import TabsPane from '../../../src/tabs/tabs-pane'
    export default {
        components:{
            "w-button": Button,
            "w-tabs": Tabs,
            "w-tabs-head": TabsHead,
            "w-tabs-item": TabsItem,
            "w-tabs-body": TabsBody,
            "w-tabs-pane": TabsPane,
        },
        data(){
            return {
                selectedTab: "woman",
                code_groupBtn:`
    <w-tabs :selected.sync="selectedTab">
        <w-tabs-head class="">
            <template slot="actions"><w-button>设置</w-button></template>
            <w-tabs-item name="woman">woman</w-tabs-item>
            <w-tabs-item name="settings" disabled>settings</w-tabs-item>
            <w-tabs-item name="finance">finance</w-tabs-item>
        </w-tabs-head>
        <w-tabs-body>
            <w-tabs-pane name="woman">woman's data</w-tabs-pane>
            <w-tabs-pane name="settings">settings's data</w-tabs-pane>
            <w-tabs-pane name="finance">finance's data</w-tabs-pane>
        </w-tabs-body>
    </w-tabs>             
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
