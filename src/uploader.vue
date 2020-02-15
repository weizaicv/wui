<template>
    <div class="w-uploader">
        <div @click="onClickUpload">
            <slot></slot>
        </div>
        <div ref="tmp" style="width:0;height:0;overflow:hidden"></div>
        <ol class="w-uploader-fileList">
            <li v-for="file in fileList" :key="file.name">
                <template v-if="file.status === 'uploading'">
                    <w-icon name="loading" class="w-uploader-spin"></w-icon>
                </template>
                <template v-else-if="file.type.indexOf('image') === 0">
                    <img class="w-uploader-image" height="32" width="32" :src="file.url" alt="">
                </template>
                <temaplte v-else>
                    <div class="w-uploader-defaultImage">暂无图片</div>
                </temaplte>
                <span class="w-uploader-name" :class="{[file.status]: file.status}">{{file.name}}</span>
                <w-button class="w-uploader-remove" @click="onRemoveFile(file)">x</w-button>
            </li>
        </ol>
        <div ref="tmp" style="width:0;height:0;overflow:hidden"></div>
    </div>
</template>

<script>
    import WButton from './button/button'
    import WIcon from './icon'
    export default {
        name:'WUploader',
        components:{WIcon,WButton},
        props:{
            name:{
                type:String,
                required:true
            },
            fileList:{
                type:Array,
                default:()=>[]
            },
            action:{
                type:String,
                required:true
            },
            actionPreviewUrl:{
                type:String,
                required:true
            },
            method:{
                type:String,
                default:'POST'
            },
            sizeLimit: {type: Number}
        },
        data(){
            return {
                // url:'about:blank'
            }
        },
        methods:{
            onRemoveFile(file){
                let answer = window.confirm('确定删除?')
                if(answer){
                    let copy = [...this.fileList]
                    let index = copy.indexOf(file)
                    copy.splice(index,1)
                    this.$emit("update:fileList",copy)
                }
            },
            onClickUpload(){
                //创建input file
                let input = this.createInput()
                input.addEventListener('change',()=>{
                     this.uploadFiles(input.files) // 多文件
                    // this.uploadFile(input.files[0])
                    input.remove()
                })
                input.click()
            },
            createInput(){
                this.$refs.tmp.innerHTML = ''
                let input = document.createElement("input")
                input.type = 'file'
                input.multiple = true  //可以多选
                input.accept = "image/*"
                this.$refs.tmp.appendChild(input)
                return input
            },
            //多文件
            uploadFiles(rawFiles){
                //生成数组名
                let newNames = []
                for(let i=0;i<rawFiles.length;i++){
                    newNames[i] = this.generateName(rawFiles[i]['name'])
                }
                console.log(newNames)

                //需要同步emit数据的loading放在最前面 确保一次emit既可
                if(!this.beforeUploadFiles(rawFiles,newNames)) return

                for(let i=0;i<rawFiles.length;i++){
                    let rawFile = rawFiles[i]
                    //这里最好传入file参数，不然有歧义
                    let formData = new FormData
                    formData.append(this.name,rawFile)
                    let {name,size,type} = rawFile

                    //生成新的name，防止重复上传图片
                    let newName = this.generateName(name)

                    //loading调入最上方 防止多次同步emit合并成一个
                    this.doUploadFile(formData,(response)=>{
                        //传入成功回调
                        let url = this.parseReponse(response)
                        this.afterUploadFile(rawFile,newName,url)
                    },()=>{
                        //由于渲染是异步
                        //1.fileList先被emit过去到父级元素
                        //2.代码执行到这里还有触发render导致fileList还是旧数据
                        //3.fail在xhr onload 里面异步调用可以确保已经render UI
                        console.log('errorFileList',this.fileList)
                        this.uploadError(newName)
                    })

                }
            },
            //生成新的名字 (1)(1).jpg 传入重复图片的命名
            generateName(name){
                while(this.fileList.filter(file=>file.name === name).length > 0){
                    let dotIndex = name.lastIndexOf('.')
                    let nameWithoutExt = name.substring(0,dotIndex)
                    let extension = name.substring(dotIndex)
                    //有可能加了(1)之后还会有重名???
                    name = nameWithoutExt + '(1)' + extension
                }
                return name
            },
            uploadError(newName){
                //[...fileList] 浅拷贝
                //JSON.parse(JSON.stringify(fileList)) 深拷贝
                let file = this.fileList.filter(file=>file.name===newName)[0]
                let fileCopy = JSON.parse(JSON.stringify(file))
                let index = this.fileList.indexOf(file)
                fileCopy.status = 'fail'
                // fileCopy.failMessage = 'fail's reason,后端传递'
                //删除并且增加一项
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(index,1,fileCopy)
                this.$emit("update:fileList",fileListCopy)
            },
            beforeUploadFiles(rawFiles,newNames){
                rawFiles = Array.from(rawFiles)
                for(let i=0;i<rawFiles.length;i++){
                    let {name,size,type} = rawFiles[i]
                    if(size > this.sizeLimit) {
                        this.$emit('error',`${name}文件大于2M`)
                        return false
                    }
                }
                let uploadingData = rawFiles.map((rawFile,i)=>{
                    let {type,size} = rawFile
                    return {name:newNames[i],type,size,status:'uploading'}
                })
                this.$emit("update:fileList",[...this.fileList,...uploadingData])
                return true
            },
            afterUploadFile(rawFile,newName,url){
                //修改新的fileList
                //修改之前emit和修改之后的emit会合并成最后一个emit操作
                //splice返回的是被删除的数组
                let {size,type} = rawFile
                let file = this.fileList.filter(file=>file.name === newName)[0]
                let copy = JSON.parse(JSON.stringify(file))
                let index = this.fileList.indexOf(file)
                copy.url = url
                copy.status = "success"
                let fileListCopy = [...this.fileList]
                fileListCopy.splice(index,1,copy)
                console.log('beforeUploadFile fileList',this.fileList)
                this.$emit("update:fileList",fileListCopy)
            },
            doUploadFile(formData,success,fail){
                let xhr = new XMLHttpRequest()
                xhr.open(this.method,this.action)
                xhr.onload = function(){
                    if (xhr.status == 200)
                    {
                        success(xhr.response)
                        console.log(`请求成功并返回数据`);
                    }
                    else{
                        fail()
                        console.log(`请求不成功`);
                    }
                }
                xhr.send(formData)
            },
            parseReponse(response){
                let object = JSON.parse(response)
                let url =`${this.actionPreviewUrl}/${object.key}`
                return url
            },





            //bug 代码
            //bug 同步的$emit事情会产生Bug 合并成最后一个emit
            //解决，变成一个emit
            beforeUploadFile(rawFile,newName){
                //上传之前status为uploading
                let {size,type} = rawFile
                console.log('beforeUploadFile fileList',this.fileList)
                this.$emit("addFile",{name:newName,type,size,status:'uploading'})
                // this.$emit("update:fileList",[...this.fileList,{name:newName,type,size,status:'uploading'}])
            },
            //bug 代码
            //单文件
            uploadFile(rawFile){
                //这里最好传入file参数，不然有歧义
                let formData = new FormData
                formData.append(this.name,rawFile)
                let {name,size,type} = rawFile

                //生成新的name，防止重复上传图片
                let newName = this.generateName(name)

                //loading
                this.beforeUploadFile(rawFile,newName)

                this.doUploadFile(formData,(response)=>{
                    console.log('1111111111')
                    //传入成功回调
                    let url = this.parseReponse(response)
                    this.afterUploadFile(rawFile,newName,url)
                },()=>{
                    //由于渲染是异步
                    //1.fileList先被emit过去到父级元素
                    //2.代码执行到这里还有触发render导致fileList还是旧数据
                    //3.fail在xhr onload 里面异步调用可以确保已经render UI
                    console.log('errorFileList',this.fileList)
                    this.uploadError(newName)
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
// @import '_var';
@import './styles/_var';
.w-uploader{
    &-fileList{
        list-style: none;
        >li{
            display: flex;
            align-items: center;
            margin: 8px 0;
            border: 1px solid darken($grey,10%);
        }
    }
    &-defaultImage{
        width: 32px;
        height: 32px;
        margin-right: 8px;
        color: #ddd;
    }
    &-image {
      margin-right: 8px;
      border: none;
    }
    &-name {
      margin-right: auto;
      &.success {
        color: green;
      }
      &.fail {
        color: red;
      }
    }
    &-remove {
      width: 32px;
      height: 32px;
    }
    &-spin {
      width: 32px;
      height: 32px;
      @include spin;
    }
}
</style>