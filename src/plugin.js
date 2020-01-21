import Toast from './toast'
//当前实例
let currentToast
export default{
    install(Vue,options){
        //如果会创建多个实例共同存在呢?
        //确保一次只存在一个实例
        Vue.prototype.$toast = function(message,toastOptions){
            if(currentToast){
                //存在就关闭 保证只有一个存在
                currentToast.close()
            }
            //解构赋值 使用别名
            //将totalOptions使用别名propsData
            currentToast = createToast({
                Vue,
                message,
                propsData:toastOptions,
                onClose:()=>{
                    currentToast = null
                }
            })
        }
    }
}


//helper function
function createToast({Vue,message,propsData,onClose}){
  //创建组件构造器
  let Constructor = Vue.extend(Toast)
  //传入配置
  let toast = new Constructor({
      propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close',onClose)
  document.body.appendChild(toast.$el)
  return toast
}