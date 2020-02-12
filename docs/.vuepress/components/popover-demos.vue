<template>
    <div>
            <p>基础用法</p>
            <p>弹框在点击其他位置的时候消失(或者自己调用close方法)</p>
            <p class="tip">触发方式：鼠标移入。带icon的弹框，内容自定义</p>
            <div class="com">
                <w-popover position="left" trigger="hover">
                    <template slot="content">
                        <div>left</div>
                    </template>
                    <w-button icon="settings">方向：左</w-button>
                </w-popover>
                 <w-popover position="bottom" trigger="hover">
                    <template slot="content">
                        <div>i am bottom content</div>
                    </template>
                    <w-button>方向：下</w-button>
                </w-popover>
                 <w-popover position="top" trigger="hover">
                    <template slot="content">
                        <div>i am top content</div>
                    </template>
                    <w-button>方向：上</w-button>
                </w-popover>
                 <w-popover position="right" trigger="hover">
                    <template slot="content">
                        <div>i am right content</div>
                    </template>
                    <w-button>方向：右</w-button>
                </w-popover>
            </div>
            <pre><code class="language-html">{{code_pop1}}</code></pre>

            <p class="tip">触发方式：点击触发</p>
            <div class="com">
                <w-popover position="bottom" trigger="click">
                    <template slot="content">
                        <div>i am click event</div>
                    </template>
                    <w-button>click me</w-button>
                </w-popover>
            </div class="com">
            <pre><code class="language-html">{{code_pop2}}</code></pre>

            <p class="tip">调用组件内部close关闭弹框</p>
            <div class="com"> 
                <w-popover position="right" trigger="click">
                    <template slot="content" slot-scope="{ close }">
                        <div>内部close函数作用域插槽传递</div>
                        <w-button @click="close">关闭</w-button>
                    </template>
                    <w-button>内部close函数传递</w-button>
                </w-popover>
            </div>
            <pre><code class="language-html">{{code_pop3}}</code></pre>
        </div>
</template>

<script>
    import Prism from "prismjs";
    import Button from '../../../src/button/button'
    import Popover from "../../../src/popover";
    export default {
        components:{
            "w-button": Button,
            "w-popover": Popover,
        },
        data(){
            return {
                code_pop1:`
    <w-popover position="left" trigger="hover">
        <template slot="content">
            <div>left</div>
        </template>
        <w-button icon="settings">方向：左</w-button>
    </w-popover>
        <w-popover position="bottom" trigger="hover">
        <template slot="content">
            <div>i am bottom content</div>
        </template>
        <w-button>方向：下</w-button>
    </w-popover>
        <w-popover position="top" trigger="hover">
        <template slot="content">
            <div>i am top content</div>
        </template>
        <w-button>方向：上</w-button>
    </w-popover>
        <w-popover position="right" trigger="hover">
        <template slot="content">
            <div>i am right content</div>
        </template>
        <w-button>方向：右</w-button>
    </w-popover>        
                `.replace(/\t+/g,'').trim(),
                 code_pop2:`
    <w-popover position="bottom" trigger="click">
        <template slot="content">
            <div>i am click event</div>
        </template>
        <w-button>click me</w-button>
    </w-popover>    
                `.replace(/\t+/g,'').trim(),
                 code_pop3:`
    <w-popover position="right" trigger="click">
        <template slot="content" slot-scope="{ close }">
            <div>内部close函数作用域插槽传递</div>
            <w-button @click="close">关闭</w-button>
        </template>
        <w-button>内部close函数传递</w-button>
    </w-popover>        
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
    .single{
        border:1px solid #ddd;
        padding:20px;
        margin-top: 50px;
        p{
            margin-bottom: 0px;
        }
    }
    .tip{
        margin-top: 50px;
    }
</style>
