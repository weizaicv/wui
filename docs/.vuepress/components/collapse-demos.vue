<template>
    <div>
        <p>基础用法</p>
        <p>selectedCollapseTab为父组件传入的数据，此处为["1", "2"]</p>
        <div class="com">
            <w-collapse single :selected.sync="selectedCollapseTab">
                <w-collapse-item title="标题1" name="1"
                >#i am content1</w-collapse-item
                >
                <w-collapse-item title="标题2" name="2"
                >#i am content2</w-collapse-item
                >
                <w-collapse-item title="标题3" name="3"
                >#i am content3</w-collapse-item
                >
            </w-collapse>
            用户选中了如下Tab: {{ selectedCollapseTab }}
        </div>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import Collapse from '../../../src/collapse/collapse'
    import CollapseItem from '../../../src/collapse/collapse-item'
    export default {
        components:{
           "w-collapse": Collapse,
           "w-collapse-item": CollapseItem,
        },
        data(){
            return {
                selectedCollapseTab: ["1", "2"],
                code_groupBtn:`
    <w-collapse single :selected.sync="selectedCollapseTab">
        <w-collapse-item title="标题1" name="1">
            #i am content1
        </w-collapse-item>
        <w-collapse-item title="标题2" name="2">
            #i am content2
        </w-collapse-item>
        <w-collapse-item title="标题3" name="3">
            #i am content3
        </w-collapse-item>
    </w-collapse>          
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
        // border:1px solid #ddd;
        // padding:20px;
    }
</style>
