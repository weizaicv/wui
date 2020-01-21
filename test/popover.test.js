const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false
describe('Popover',()=>{
    it('存在',()=>{
        expect(Popover).to.exist
    })

    it('可以设置position',(done)=>{
        Vue.component('w-popover',Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <w-popover position="right" trigger="click" ref="a">
            <!-- 结构出close方法 -->
            <template slot="content" slot-scope="{close}">
                <div>内部close函数作用域插槽传递</div>
                <w-button @click="close">关闭</w-button>
            </template>
            <button>内部close函数传递</button>
        </w-popover>
        `
        const vm = new Vue({
            el:div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(()=>{
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-right'))
            .to.be.true
            done()
        })
    })

    it('可以设置trigger',(done)=>{
        Vue.component('w-popover',Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <w-popover position="right" trigger="hover" ref="a">
            <!-- 结构出close方法 -->
            <template slot="content" slot-scope="{close}">
                <div>内部close函数作用域插槽传递</div>
                <w-button @click="close">关闭</w-button>
            </template>
            <button>内部close函数传递</button>
        </w-popover>
        `
        const vm = new Vue({
            el:div
        })
        setTimeout(()=>{
            let event = new Event('mouseenter')
            vm.$el.dispatchEvent(event)
            vm.$nextTick(()=>{
                const {contentWrapper} = vm.$refs.a.$refs
                expect(contentWrapper).to.exist
            })
            done()
        },200)
    })

})