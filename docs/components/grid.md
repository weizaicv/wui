---
title: Grid 网格
---
# 网格

#### 通过基础的 24 分栏，迅速简便地创建布局。
<ClientOnly>
<grid-demos />
</ClientOnly>

Row Attributes

| 参数   | 说明                      | 类型          | 可选                  | 默认 |
| ------ | ------------------------- | ------------- | --------------------- | ---- |
| gutter | 栅格间隔                  | number,string | —                     | —    |
| align  | flex 布局下的垂直排列方式 | string        | left / right / center | —    |

Col Attributes

| 参数     | 说明                    | 类型                              | 可选 | 默认 |
| -------- | ----------------------- | --------------------------------- | ---- | ---- |
| span     | 栅格占据的列数          | number                            | —    | —    |
| offset   | 栅格左侧的间隔格数      | number                            | —    | —    |
| phone    | 默认安装手机模式        | object (例如: {span:4, offset:4}) | —    | —    |
| ipad     | `>=577px`响应式栅格数   | object (例如: {span:4, offset:4}) | —    | —    |
| narrowPc | `>=769px` 响应式栅格数  | object (例如: {span:4, offset:4}) | —    | —    |
| pc       | `>=993px` 响应式栅格数  | object (例如: {span:4, offset:4}) | —    | —    |
| widePc   | `>=1201px` 响应式栅格数 | object (例如: {span:4, offset:4}) | —    | —    |

