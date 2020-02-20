<template>
    <div>
        <p>基础用法，内置省市区选择，需要 import {db}</p>
        <p>复杂组件，有一定使用步骤</p>
        <ul>
            <li>1.如下定义组件</li>
            <li>2.source（数据源），selected（选中了）为单向数据流的父级数据</li>
            <li>3.全局定义ajax方法（组件所需的调用数据方法）</li>
            <li>4.created周期初始化数据，如果数据是自定义的 this.db = this.source<br/>
                &nbsp;&nbsp;&nbsp;如果数据是 import {db}省市数据 this.db = db
            </li>
            
            <li>5.定义数据更新方法loadData，子组件会将回调函数作为参数传递<br/>
                &nbsp;&nbsp;&nbsp;这样父级可以传数据给到子组件
            </li>
        </ul>
        <w-cascader 
        :source.sync="source" 
        popover-height="200px" 
        :selected.sync="selected"
        :loadData="loadData"
        >
        </w-cascader>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
        <pre><code class="language-javascript">{{code_js}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    import db from '../../../src/db'
    import Cascader from "../../../src/cascader/cascader";
    import CascaderItems from "../../../src/cascader/cascader-items";


    //promise化
    function ajax(parentId = 0,db){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            let result = db.filter(item=>item.parent_id == parentId)
            result.forEach(node=>{
                if(db.filter(item=>item.parent_id===node.id).length > 0){
                    node.isLeaf = false
                }else{
                    node.isLeaf = true
                }
            })
            resolve(result)
            },300)
        })
    }
    export default {
        components:{
            'w-cascader': Cascader,
            'w-cascader-items': CascaderItems,
        },
        created(){
            //初始化数据文件
            this.db = db
             ajax(0,this.db).then(result => {
                this.source = result
            })
        },
        data(){
            return {
                selected:[],
                source: [
                    { id:1,parent_id:0,name: "浙江"},
                    { id:2,parent_id:0,name: "福建"},
                    { id:3,parent_id:0,name: '安徽'},
                    { id:4,parent_id:1,name: "杭州"},
                    { id:5,parent_id:2,name: "福州"},
                    { id:6,parent_id:4,name: "嘉兴"},
                    { id:7,parent_id:3,name: '合肥'},
                    { id:8,parent_id:4,name: "上城" }, 
                    { id:9,parent_id:4,name: "下城" }, 
                    { id:10,parent_id:4,name: "江干" },
                    { id:11,parent_id:6,name: "南湖" },
                    { id:12,parent_id:6,name: "秀洲" },
                    { id:13,parent_id:6,name: "嘉善" },
                    { id:14,parent_id:5,name: "鼓楼" }, 
                    { id:15,parent_id:5,name: "台江" },
                    { id:16,parent_id:5,name: "仓山" },
                    { id:17,parent_id:7,name: '瑶海'},
                    { id:18,parent_id:7,name: '庐阳'}
                ],
                // source:[],
                code_groupBtn:`
<w-cascader 
    :source.sync="source" 
    popover-height="200px" 
    :selected.sync="selected"
    :loadData="loadData"
>
</w-cascader>
                `.replace(/\t+/g,'').trim(),
                code_js:`
//自定义一个特定的级联选择器ajax获取方法
function ajax(parentId = 0,db){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let result = db.filter(item=>item.parent_id == parentId)
        result.forEach(node=>{
            if(db.filter(item=>item.parent_id===node.id).length > 0){
                node.isLeaf = false
            }else{
                node.isLeaf = true
            }
        })
        resolve(result)
        },300)
    })
}
//调用的父级
export default {
    ...
    data(){
    return {
        selected:[],
        source: [
            { id:1,parent_id:0,name: "浙江"},
            { id:2,parent_id:0,name: "福建"},
            { id:3,parent_id:0,name: '安徽'},
            { id:4,parent_id:1,name: "杭州"},
            { id:5,parent_id:2,name: "福州"},
            { id:6,parent_id:4,name: "嘉兴"},
            { id:7,parent_id:3,name: '合肥'},
            { id:8,parent_id:4,name: "上城" }, 
            { id:9,parent_id:4,name: "下城" }, 
            { id:10,parent_id:4,name: "江干" },
            { id:11,parent_id:6,name: "南湖" },
            { id:12,parent_id:6,name: "秀洲" },
            { id:13,parent_id:6,name: "嘉善" },
            { id:14,parent_id:5,name: "鼓楼" }, 
            { id:15,parent_id:5,name: "台江" },
            { id:16,parent_id:5,name: "仓山" },
            { id:17,parent_id:7,name: '瑶海'},
            { id:18,parent_id:7,name: '庐阳'}
        ],
    },
    created(){
        //初始化数据文件 db可以是外部引入的，也可以是自定义的source
        //or this.db = this.source
        this.db = db
        ajax(0,this.db).then(result => {
            this.source = result
        })
    },
    methods: {
        loadData({id},updateSource){
            //传递回调 执行回调传入数据
            ajax(id,this.db).then(result=>{
                updateSource(result)
            })
        },
    },     
}
                `.replace(/\t+/g,'').trim()
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        },
        methods: {
           loadData({id},updateSource){
                //传递回调 执行回调传入数据
                ajax(id,this.db).then(result=>{
                    updateSource(result)
                })
            },
        },  

    }
</script>
