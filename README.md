# WUI - 一个vue的ui组件库

## 介绍
一个vue的ui框架 [点击进入官网文档](https://weizaicv.github.io/wui). 

## 开始使用

1.安装WUI

```bash
npm i --save w-ui-design
```

2.引入WUI

```js
import {Button,Icon,ButtonGroup} from 'w-ui-design'
import 'w-ui-design/lib/w-ui.css'
export default {
  name: 'app',
  components: {
    'w-button':Button,
    'w-icon':Icon
  }
}
```

3.组件设计技巧
+ 单一职责
> 一个组件只专注于一件事情，最大可能复用组件，把握粒度，建立在可复用的基础上，不可复用的单一职责组件仅仅作为独立内部组件

+ 通用性考量
> 通用组件和业务解耦，但是服务于业务，将DOM结构决定权交给开发者，本身只是负责底层逻辑和DOM结构

+ 其他
> 有反馈（有交互）
> 一致性（总体风格统一）
> 可预测（符合用户交互习惯）

















