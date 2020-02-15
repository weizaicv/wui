<template>
    <div>
        <p>基础用法，以插件的形式引入 import plugin,</p>
        <p>设计采用单例模式，不管点击多少次，只会出现一个弹框</p>
        <p>内部实现原理是export default {install(Vue,options)} vue.use(plugin)</p>
        <p>和其组件调用不一样：弹窗直接用this.$toast函数式调用传参即可</p>
        <div class="com">
            <div class="box">
                <w-button @click="clickToast">常规测试</w-button>
                <w-button @click="showToast1">测试top</w-button>
                <w-button @click="showToast2">测试center</w-button>
                <w-button @click="showToast3">测试bottom</w-button>
            </div>
        </div>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
        <p>js调用代码</p>
        <pre><code class="language-javascript">{{code_js}}</code></pre>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Prism from "prismjs";
    import Button from '../../../src/button/button'
    import plugin from "../../../src/plugin";
    Vue.use(plugin);

    export default {
        components:{
            "w-button": Button,
        },
        data(){
            return {
                code_groupBtn:`
    <div class="box">
        <button @click="clickToast">常规测试</button>
        <button @click="showToast1">测试top</button>
        <button @click="showToast2">测试center</button>
        <button @click="showToast3">测试bottom</button>
    </div>        
                `.replace(/\t+/g,'').trim(),
                code_js:`
    clickToast() {
        this.$toast("<strong>hello,${parseInt(Math.random() * 100)}</strong>", {
            closeButton: {
            text: "知道了",
            callback: toast => {
                toast.log();
            }
            },
            enableHtml: true,
            position: "center",
            autoCloseDelay: 2
        });
    },
    showToast1() {
        this.$toast("top", { position: "top" });
    },
    showToast2() {
        this.$toast("center", { position: "center" });
    },
    showToast3() {
        this.$toast("bottom", { position: "bottom" });
    },
                `.replace(/\t+/g,'').trim(),
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        },
        methods:{
            clickToast() {
                //传入两个参数
                //msg options
                this.$toast(`<strong>hello,${parseInt(Math.random() * 100)}</strong>`, {
                    closeButton: {
                    text: "知道了",
                    callback: toast => {
                        toast.log();
                    }
                    },
                    enableHtml: true,
                    position: "center",
                    autoCloseDelay: 2
                });
            },
            showToast1() {
                this.$toast("top", { position: "top" });
            },
            showToast2() {
                this.$toast("center", { position: "center" });
            },
            showToast3() {
                this.$toast("bottom", { position: "bottom" });
            },
        }

    }
</script>
<style lang="scss">
    .com{
        border:1px solid #ddd;
        padding:20px;
    }
</style>
