<template>
    <div>
        <p>基础用法</p>
        <div class="com">
            <w-uploader 
                accept="image/*" 
                action="http://127.0.0.1:3333/upload" 
                actionPreviewUrl="http://127.0.0.1:3333/upload"
                name="file" 
                :fileList.sync="fileList"
                :sizeLimit="2*1024*1024"
                @error="error=$event"
                >
                <template slot="default">
                <w-button icon="upload">上传</w-button>
                </template>
                <template slot="tips">
                <div>只能上传300kb以内jpg/png等图片格式</div>
                </template>
            </w-uploader>
        </div>
        <p>vue client:可以多图上传</p>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
        <p>nodejs server:可以用nodejs配置上传和预览接口，上传接口为单图上传接口</p>
        <pre><code class="language-javascript">{{code_server}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    // 默认显示图片url是 http://127.0.0.1:3333/upload/xxxxx
    import WButton from '../../../src/button/button'
    import WUploader from '../../../src/uploader'
    export default {
        components:{
            WButton,WUploader
        },
        data(){
            return {
                fileList:[],
                code_groupBtn:`
    <w-uploader 
        accept="image/*" 
        action="http://127.0.0.1:3333/upload" 
        actionPreviewUrl="http://127.0.0.1:3333/upload"
        name="file" 
        :fileList.sync="fileList"
        :sizeLimit="2*1024*1024"
        @error="error=$event"
        >
        <template slot="default">
        <w-button icon="upload">上传</w-button>
        </template>
        <template slot="tips">
        <div>只能上传300kb以内jpg/png等图片格式</div>
        </template>
    </w-uploader>   
                `.replace(/\t+/g,'').trim(),
                code_server:`
    const express = require('express')
    const multer = require('multer')
    const cors = require('cors')
    const upload = multer({dest:'uploads/'})
    const app = express()
    app.post('/upload',cors(), upload.single('file'),(req, res, next) => {
        res.json({key:req.file.filename})
    })
    app.get('/upload/:key',cors(),(req, res, next)=>{
        res.sendFile("uploads/"+req.params.key,{
            root: __dirname,
            headers:{
                'Content-Type':'image/jpeg'
            }
        },(error)=>{
            if(error){
                res.status(404).send('Not Found')
            }
        })
    })
    app.listen(3333,function(){
        console.log('listen app 3333 port!')
    })
                `
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
<style lang="scss">
    .com{
        border:1px solid #ddd;
        padding:20px;
    }
</style>
