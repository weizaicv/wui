---
title: 快速上手
---

# 快速上手

本节将介绍如何在项目中使用 WUI。

#### 使用 vue-cli@3

在 main.js 中写入以下内容，引入组件样式：
```js
import Vue from 'vue';
import 'w-ui-design-test/lib/vue-test.css'
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
```

在自己的组件处使用组件：
```vue
<template>
  <div id="app">
        <w-button>button1</w-button>
        <w-collapse single :selected.sync="selectedCollapseTab">
          <w-collapse-item title="标题1" name="1">content1</w-collapse-item>
          <w-collapse-item title="标题2" name="2">content2</w-collapse-item>
          <w-collapse-item title="标题3" name="3">content3</w-collapse-item>
        </w-collapse>
        {{ selectedCollapseTab }}
  </div>
</template>
<script>
import {Button,Collapse,CollapseItem} from 'w-ui-design-test'
export default {
  name: 'app',
  components: {
    'w-button':Button,
    'w-collapse':Collapse,
    'w-collapse-item':CollapseItem,
  },
  data(){
      return{
          selectedCollapseTab: ["1", "2"]
      }
  }

}
</script>
```

