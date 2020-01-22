const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
//不能定义name 不然不能单元测试！？？？？
import Col from '../src/grid/col'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在Row.', () => {
        expect(Row).to.exist
    })
    it('接受gutter属性',(done)=>{
        //传统的做法 加入动态组件 父组件上面加上子节点
        //不可取 不能动态的加入节点
        // const div = document.createElement('div')
        // document.body.appendChild(div)
        // const Constructor = Vue.extend(Row)
        // vm = new Constructor({
        //     propsData:{
        //         value:1234
        //     }
        // }).$mount()

        Vue.component('w-row',Row)
        Vue.component('w-col',Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <w-row gutter="20">
                <w-col span="12"></w-col>
                <w-col span="12"></w-col>
            </w-row>
        `
        const vm = new Vue({
            el:div
        })
        // 变成异步的去获取innerHTML 但是要加上done
        setTimeout(()=>{
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },500)
    })
    it("接受align值",()=>{
        //就一个节点进行判断 没有子节点
        const div = document.createElement("div")
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData:{
                align:'left'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-start')
        vm.$el.remove()
        vm.$destroy()
    })

})
