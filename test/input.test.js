const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在input.', () => {
        expect(Input).to.be.ok
    })

    //测试props
    describe('props',()=>{
        const Constructor = Vue.extend(Input)
        let vm;
        afterEach(()=>{
            vm.$destroy()
        })

        it('接受value',()=>{
            vm = new Constructor({
                propsData:{
                    value:1234
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
    
        })
        it('接受disabled',()=>{
            vm = new Constructor({
                propsData:{
                    disabled:true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })
        it('接受readonly',()=>{
            vm = new Constructor({
                propsData:{
                    readonly:true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接受error',()=>{
            vm = new Constructor({
                propsData:{
                    error:'你错了'
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#wicon-jinggao')
            const errorMessage = vm.$el.querySelector('.errorMessage')
            expect(errorMessage.innerText).to.equal('你错了')
        })
    })


    describe('事件',()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('支持change/blur/focus/input事件',()=>{
            ['change','blur','input','focus'].forEach((eventName)=>{
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                //创建自定义事件去触发
                //浏览器会自动补全target的值
                //这里需要手动去添加target的值
                let event = new Event(eventName)
                Object.defineProperty(event,'target',{
                    value:{value:'haha'},enumerable:true
                })
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
              
                //测试下参数calledWIth  event
                console.log(eventName)
                expect(callback).to.have.been.calledWith('haha')
            })
           
        })
        
    })




})
