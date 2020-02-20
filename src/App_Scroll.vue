<template>
    <div id="app">
        <w-scroll style="width:300px;height:400px;margin:0 auto;overflow:hidden;"
        @wheelChange="wheelChange"
        @borderChange="borderChange"
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
            <p>31</p>
            <p>32</p>
            <p>33</p>
            <p>34</p>
            <p>35</p>
            <p>36</p>
            <p>37</p>
            <p>38</p>
            <p>39</p>
            <p>40</p>
            <p>41</p>
            <p>42</p>
            <p>43</p>
            <p>44</p>
            <p>45</p>
            <p>46</p>
            <p>47</p>
            <p>48</p>
            <p>49</p>
            <p>50</p>
            <p>51</p>
            <p>52</p>
            <p>53</p>
            <p>54</p>
            <p>55</p>
            <p>56</p>
            <p>57</p>
            <p>58</p>
            <p>59</p>
            <p>60</p>
            <p>61</p>
            <p>62</p>
            <p>63</p>
            <p>64</p>
            <p>65</p>
            <p>66</p>
            <p>67</p>
            <p>68</p>
            <p>69</p>
            <p>70</p>
            <!-- <p v-for="(i,index) in bigData" :key="index">{{i}}</p> -->
        </w-scroll>
    </div>
</template>

<script>
    import WScroll from './scroll'
    export default {
        components:{
            WScroll
        },
        data(){
            return {
                bigData:[]
            }
        },
        mounted(){
             setTimeout(() => {
                let img = document.createElement('img')
                img.src = 'https://developer.mozilla.org/static/browsers/samsung-internet.8faa2ee1b8a1.svg'
                img.height = 1000
                window.test2.appendChild(img)
            }, 2000)
        },
        created(){
            this.createBigData()
            //规定只显示20条在界面里面，其他的不显示，滚动的时候显示，
        },
        methods:{
            //每次只是显示19条
            createBigData(){
                for(let i=0;i<100;i++){
                    this.bigData.push(i)
                }
            },
            wheelChange(i){
                //负的是朝下
                //正的是朝上
                //每次渲染20条dom数据
                // console.log('wheelchange',i)
            },
            borderChange(i){
                //滚动到头是0
                //滚动到底是1
                //dom变化动态增加滚动条高度
                // console.log('滚动到',i)
            }
        }
       
    }
</script>

<style lang="scss" scoped>
#test{width: 100px;height: 100px;border: 1px solid red;position: absolute;}
.hide{opacity: 0.2;}
</style>