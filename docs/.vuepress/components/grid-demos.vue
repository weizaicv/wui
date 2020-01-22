<template>
    <div>
        <p>
            基础用法:
            间隔20px分成三份,
            当为ipad屏幕宽度以上时候>=577，每个栅格分成6,12,6份
            当为中等屏幕宽度以上时候>=769，每个栅格8份
        </p>
        <w-row align="center" :gutter="20">
            <w-col span="24" :narrow-pc="{span:8}" :ipad="{span:6}">
                <div class="rowbox">间隔20px分成三份</div>
            </w-col>
            <w-col span="24" :narrow-pc="{span:8}" :ipad="{span:12}">
                <div class="rowbox">间隔20px分成三份</div>
            </w-col>
            <w-col span="24" :narrow-pc="{span:8}" :ipad="{span:6}">
                <div class="rowbox">间隔20px分成三份</div>
            </w-col>
        </w-row>
        <pre><code class="language-html">{{code}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import Row from '../../../src/grid/row'
    import Col from '../../../src/grid/col'
    export default {
        components:{
            'w-row': Row,
            'w-col': Col
        },
        data(){
            return {
                code:`
    <w-row align="center" :gutter="20">
        <w-col span="24" :narrow-pc="{span:8}" :ipad="{span:6}">
            <div class="rowbox">间隔20px分成三等份</div>
        </w-col>
        <w-col span="24" :narrow-pc="{span:8}" :ipad="{span:12}">
            <div class="rowbox">间隔20px分成三等份</div>
        </w-col>
        <w-col span="24" :narrow-pc="{span:8}" :ipad="{span:6}">
            <div class="rowbox">间隔20px分成三等份</div>
        </w-col>
    </w-row>
    <style lang="scss">
    .rowbox{
        border: 1px solid #ddd;
        min-height: 50px;
        background: #666;
        color: #fff;
    }
    </style>
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
    .rowbox{
        border: 1px solid #ddd;
        min-height: 50px;
        background: #666;
        color: #fff;
    }
</style>
