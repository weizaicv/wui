# WUI - 一个vue的ui组件库

## 介绍
一个vue框架 [点击进入官网文档](https://weizaicv.github.io/WUI). 

## 开始使用
1.添加样式
使用本框架前，在css中开启border-box，IE8以上浏览器支持

```css
*,*::before,*::after{box-sizing:border-box;}
```

还需要设置全局变量，后续改为scss

2.安装WUI

```bash
npm i --save w-ui-design-test
```

3.引入WUI

```js
import {Button,Icon,ButtonGroup} from 'w-ui-design-test'
import 'w-ui-design-test/dist/index.css'
export default {
  name: 'app',
  components: {
    'w-button':Button,
    'w-icon':Icon
  }
}
```

4.引入svg symbols

<script src="//at.alicdn.com/t/font_1553596_ubo3p9t0gjp.js"></script>

















