<template>
    <div>
        <p>基础用法</p>
        <div class="com">
           <w-slides class="wrapper" :selected.sync="selected" :isMobile="false">
            <w-slides-item name="1"><div class="box">1</div></w-slides-item>
            <w-slides-item name="2"><div class="box">2</div></w-slides-item>
            <w-slides-item name="3"><div class="box">3</div></w-slides-item>
           </w-slides>
        </div>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    // 默认显示图片url是 http://127.0.0.1:3333/upload/xxxxx
    import WSlides from '../../../src/slides/slides'
    import WSlidesItem from '../../../src/slides/slides-item'
    export default {
        components:{
            WSlides,WSlidesItem
        },
        data(){
            return {
                selected: "2",
                code_groupBtn:`
    <w-slides class="wrapper" :selected.sync="selected" :isMobile="false">
        <w-slides-item name="1"><div class="box">1</div></w-slides-item>
        <w-slides-item name="2"><div class="box">2</div></w-slides-item>
        <w-slides-item name="3"><div class="box">3</div></w-slides-item>
    </w-slides>   
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
    .box {
    width: 100%;
    height: 20vh;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    }
</style>
