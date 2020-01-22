<template>
    <div>
        <p>基础用法</p>
        <w-button>默认按钮</w-button>
        <w-button icon="nextPage" icon-position="right">图标在右边的按钮</w-button>
        <w-button :loading="true">loading按钮</w-button>
        <w-button disabled>禁止按钮</w-button>
        <pre><code class="language-html">{{code_default}}</code></pre>
        <p>按钮组</p>
        <w-button-group>
            <w-button icon="prevPage" icon-position="left">prev</w-button>
            <w-button icon-position="right">更多</w-button>
            <w-button icon="nextPage" icon-position="right">next</w-button>
        </w-button-group>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import Button from '../../../src/button/button'
    import ButtonGroup from '../../../src/button/button-group'
    export default {
        components:{
            'w-button': Button,
            'w-button-group': ButtonGroup
        },
        data(){
            return {
                code_default:`
    <w-button>默认按钮</w-button>
    <w-button icon="nextPage" icon-position="right">图标在右边的按钮</w-button>
    <w-button :loading="true">loading按钮</w-button>
    <w-button disabled>禁止按钮</w-button>
                `.replace(/\t+/g,'').trim(),
                code_groupBtn:`
    <w-button-group>
        <w-button icon="prevPage" icon-position="left">prev</w-button>
        <w-button icon-position="right">更多</w-button>
        <w-button icon="nextPage" icon-position="right">next</w-button>
    </w-button-group>                
                `.replace(/\t+/g,'').trim()
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
