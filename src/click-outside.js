// 点击外部就关闭的指令
// v-click-outside = "close"
let onClickDocument = (e) => {
    let {target} = e
    callbacks.forEach((item) => {
        if(target == item.el || item.el.contains(target)){
            return
        }else{
            item.callback()
        }
    })
}

document.addEventListener('click', onClickDocument)
let callbacks = []
export default {
    bind: function(el, binding, vnode){
        //bing.value传递的是一个close函数
        callbacks.push({el,callback:binding.value})
    }
}

let removeEventListener = () => {
    document.removeEventListener('click', onClickDocument)
}

export {removeEventListener}