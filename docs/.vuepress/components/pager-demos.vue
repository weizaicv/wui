<template>
    <div>
        <p>基础用法</p>
        当前页码：{{currentPage}} 
        <w-pager :total-page="20" :current-page.sync="currentPage"></w-pager>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import Pager from '../../../src/pager'
    export default {
        components:{
            'w-pager': Pager,
        },
        data(){
            return {
                currentPage:2,
                code_groupBtn:`
    <w-pager :total-page="20" :current-page.sync="currentPage"></w-pager>
                `.replace(/\t+/g,'').trim()
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
