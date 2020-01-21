import Vue from 'vue'
import Button from './button/button'
import ButtonGroup from './button/button-group'
import Icon from './icon'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Aside from './aside'
import Content from './content'
import plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'
Vue.component('w-button',Button)
Vue.component('w-icon',Icon)
Vue.component('w-button-group',ButtonGroup)
Vue.component('w-input',Input)
Vue.component('w-row',Row)
Vue.component('w-col',Col)
Vue.component('w-layout',Layout)
Vue.component('w-header',Header)
Vue.component('w-footer',Footer)
Vue.component('w-aside',Aside)
Vue.component('w-content',Content)
Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-pane',TabsPane)
Vue.component('w-popover',Popover)
Vue.component('w-collapse',Collapse)
Vue.component('w-collapse-item',CollapseItem)

//使用插件 toast
//可以将Vue作为参数传入
Vue.use(plugin)

new Vue({
    el:'#app',
    data(){
       return{
            loading1:false,
            loading2:true,
            loading3:false,
            message:'mes',
            selectedTab:'woman',
            selectedCollapseTab:['1','2']
       }
    },
    mounted() {
        console.log('selectedTab',this.selectedTab)
    },
    methods:{
        clickToast(){
            //传入两个参数
            //msg options
            this.$toast(`<strong>hello,${parseInt(Math.random()*100)}</strong>`,{
                closeButton:{
                    text:'知道了',
                    callback:(toast)=>{
                        toast.log()
                    }
                },
                enableHtml:true,
                position:'center',
                autoCloseDelay:2
            })
        },
        showToast1(){
            this.$toast('top',{position:'top'})
        },
        showToast2(){
            this.$toast('center',{position:'center'})
        },
        showToast3(){
            this.$toast('bottom',{position:'bottom'})
        },
        inputchange(e){
            console.log(e)
        }
    }
})
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

try{
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'personnone'
            }
        })
        //单元测试 看输入的是否匹配
        vm.$mount("#test")
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#wicon-personnone')//断言
        //用完了单元测试 要清除页面
        vm.$el.remove()
        vm.$destroy()
    }
    {
        //获取css判断必须挂载到dom上面，不然没有渲染
        const div = document.createElement("div")
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'personnone',
                loading:true
            }
        })
        //单元测试 看输入的是否匹配
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
    
    {
        //获取css判断必须挂载到dom上面，不然没有渲染
        const div = document.createElement("div")
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'personnone',
                iconPosition:'right'
            }
        })
        //单元测试 看输入的是否匹配
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    //测试回调函数 click mock
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'personnone'
            }
        })
        vm.$mount()
        let spy = chai.spy(function(){console.log('spy called')})
    
        //函数执行
        vm.$on('click',spy)
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
}catch(error){
    throw new Error(error)
}



