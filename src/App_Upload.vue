<template>
    <div>
       <span style="color:red">{{error}}</span>
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
       <button>保存</button>
       <div>
           {{fileList}}
       </div>
    </div>
</template>

<script>
// 默认显示图片url是 http://127.0.0.1:3333/upload/xxxxx
    import WButton from './button/button'
    import WUploader from './uploader'
    export default {
        components:{
            WUploader,WButton
        },
        data(){
            return {
                fileList:[],
                error:''
            }
        },
        methods:{
            alert(error){
                window.alert(error||'上传失败')
            }
           
        }
    }
</script>

<style lang="scss" scoped>

</style>