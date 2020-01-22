---
title: Input 输入框
---
# 输入框
#### 通过鼠标或键盘输入字符
<ClientOnly>
<input-demos />
</ClientOnly>

Input Attributes

| 参数     | 说明                     | 类型    | 可选 | 默认  |
| -------- | ------------------------ | ------- | ---- | ----- |
| value    | 绑定值 (v-model可以使用) | string  | —    | —     |
| disabled | 禁用                     | boolean | —    | false |
| readonly | 只读                     | boolean | —    | false |
| error    | 错误提示                 | string  | —    |       |



Input Events

| 事件名称 | 说明                                   | 回调                                  |
| -------- | -------------------------------------- | ------------------------------------- |
| blur     | 在 Input 失去焦点时触发                | `$emit('blur',$event.target.value)`   |
| focus    | 在 Input 获得焦点时触发                | `$emit('focus',$event.target.value)`  |
| change   | 仅在输入框失去焦点或用户按下回车时触发 | `$emit('change',$event.target.value)` |
| input    | 输入操作时触发                         | `$emit('input',$event.target.value)`  |

