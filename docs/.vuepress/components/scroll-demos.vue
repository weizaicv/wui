<template>
    <div>
        <p>
            替换原生滚动，自定义滚动条，并且有异步加载的图片或者数据可以使得滚动条长度
            自动发生变化，内部原理 var observer = new MutationObserver(callback);
        </p>
        <p style="margin-bottom:20px;">滚动内容包裹在内部</p>
          <w-scroll style="border:1px solid #ddd;width:50vw;height:50vh;margin:0 auto;overflow:hidden;"
        >
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p id="test2">4 i am special</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>18</p>
            <p>19</p>
            <p>20</p>
            <p>21</p>
            <p>22</p>
            <p>23</p>
            <p>24</p>
            <p>25</p>
            <p>26</p>
            <p>27</p>
            <p>28</p>
            <p>29</p>
            <p>30</p>
        </w-scroll>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import WScroll from '../../../src/scroll'
    export default {
        components:{
            WScroll
        },
        data(){
            return {
                code_groupBtn:`
    <w-scroll style="border:1px solid #ddd;width:50vw;height:50vh;margin:0 auto;overflow:hidden;">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p id="test2">4 i am special</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
        <p>24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
    </w-scroll>                
                `.replace(/\t+/g,'').trim()
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
           let test2 = document.getElementById("test2")
            setTimeout(() => {
                let img = document.createElement('img')
                img.src = 'https://developer.mozilla.org/static/browsers/samsung-internet.8faa2ee1b8a1.svg'
                img.height = 100
                test2.appendChild(img)
            }, 2000)
        }

    }
</script>
<style lang="scss">
p{margin:0px;}    
</style>
