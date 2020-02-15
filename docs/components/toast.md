---
title: toast 提醒
---
# 提醒
#### 函数调用的方式

<ClientOnly>
<toast-demos />
</ClientOnly>

属性

| 参数         | 说明         | 类型    | 可选         | 默认  |
| ------------ | ------------ | ------- | ------------ | ----- |
| autoClose     | 是否自动关闭        | string  | —            | —     |
| autoCloseDelay      | 延迟多久关闭(秒为单位)  | string | —  | 5 |
| closeButton | 传入固定格式closeButton:{text:'',callback:(toast)=>{}}，关闭的回调和设置 | Object  | — | {text:'关闭',callback:undefined}  |
| enableHtml | 内部是否是Html标签 | boolean  | — | false  |
| position | 弹窗的位置 | String  | top / bottom / center | top  |

