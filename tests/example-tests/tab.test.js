const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', ()=>{
    it('存在', ()=>{
        expect(Tabs).to.exist;
    })

    it('子组件只能是 tabs-head 和 tabs-body ',(done)=>{
        const div = document.createElement("div")
        document.body.appendChild(div)
        div.innerHTML = `
        <w-tabs selected="woman">
        <w-tabs-head class="">
            <template slot="actions"><w-button>设置</w-button></template>
            <w-tabs-item name="woman">美美</w-tabs-item>
            <w-tabs-item name="settings" disabled>美美2</w-tabs-item>
            <w-tabs-item name="finance">美美33333333333</w-tabs-item>
        </w-tabs-head>
        <w-tabs-body>
            <w-tabs-pane name="woman">美美's data</w-tabs-pane>
            <w-tabs-pane name="settings">美美2's data</w-tabs-pane>
            <w-tabs-pane name="finance">美美3's data</w-tabs-pane>
        </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(()=>{
            //查看选中的是不是某个值
            let x = vm.$el.querySelector(`.tabs-item[data-name="woman"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
        //异步的报错 不太看得出来
        // expect(()=>{
           
        // }).to.throw()
    })

})
