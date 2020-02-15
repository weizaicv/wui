---
title: uploader 多图上传
---
# 上传（单）多图

<ClientOnly>
<uploader-demos />
</ClientOnly>


| 参数         | 说明         | 类型    | 可选         | 默认  |
| ------------ | ------------ | ------- | ------------ | ----- |
| accept     | 接受的文件格式        | string  | —           | —     |
| action      | 后端图片上传的api接口(单图)  | string | —            | — |
| actionPreviewUrl     | 后端图片预览的api接口        | string  | —           | —     |
| fileList | 文件列表数据 | string  | — | []  |
| sizeLimit | 图片最大上传大小 | string  | — | —  |
| error | 一旦出错的回调函数，外部error变量接受 | string  | — | —  |
| name | input图片上传需要的name,后端根据name找到对应图片资源 | string  | — | —  |
| method | 文件上传的动作，默认是POST动作 | string  | — | POST |
| method | 文件上传的动作，默认是POST动作 | string  | — | POST |



