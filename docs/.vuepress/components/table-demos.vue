<template>
    <div>
        <p>基础用法</p>
        <p>结合分页的话，获取分页数据的值得时候改变dataSource的值即可</p>
            <w-table 
            :columns="columns"
            :data-source="dataSource"
            :selected-items.sync="selected"
            :order-by.sync = "orderBy"
            :loading="loading"
            expand-field="description"
            @update:orderBy ="x"
            height="400"
            bordered 
            compact
            striped 
            checkable
            >
                <template v-slot="data">
                    <button @click="edit(data.item)">编辑</button>
                    <button>查看</button>
                </template>
                <w-table-column text="姓名" field="name" :width="100">
                    <template slot-scope="props">
                        <a href="">{{props.value}}</a>
                    </template>
                </w-table-column>
                <w-table-column text="性别" field="sex" :width="100"></w-table-column>
                <w-table-column text="分数" field="score" :width="100"></w-table-column>
            </w-table>
        <pre><code class="language-html">{{code_groupBtn}}</code></pre>
        <pre><code class="language-javascript">{{code_groupBtn2}}</code></pre>
    </div>
</template>

<script>
    import Prism from "prismjs";
    // 默认显示图片url是 http://127.0.0.1:3333/upload/xxxxx
    import WTable from '../../../src/table/table'
    import WTableColumn from '../../../src/table/table-column'
    export default {
        components:{
            WTable,WTableColumn
        },
        data(){
            return {
                selected:[],
              //asc desc是UI数据 不能加在本身数据上面
              //可以给定固定的宽度 解决问题！！！
              columns:[
                {text:'姓名',field:'name',width:100},
                {text:'性别',field:'sex',width:100},
                {text:'分数',field:'score'}
              ],
              orderBy:{
                  //true开启排序有icon但是不知道是哪种 false关闭排序 asc/desc
                  name:'asc',
                  score:'desc'
              },
              loading:false,
              dataSource:[
                {id: 1, name: '1', sex:'男',score: 100,description:'weizai'},
                {id: 2, name: '2', sex:'男',score: 99},
                {id: 3, name: '3', sex:'男',score: 100},
                {id: 4, name: '4', sex:'男',score: 99},
                {id: 5, name: '5', sex:'男',score: 100},
                {id: 6, name: '6', sex:'男',score: 99},
                {id: 7, name: '7', sex:'男',score: 100},
                {id: 8, name: '7', sex:'男',score: 100},
                {id: 9, name: '7', sex:'男',score: 100},
                {id: 10, name: '7', sex:'男',score: 100}
              ],


                code_groupBtn:`
    <w-table 
        :columns="columns"
        :data-source="dataSource"
        :selected-items.sync="selected"
        :order-by.sync = "orderBy"
        :loading="loading"
        expand-field="description"
        @update:orderBy ="x"
        height="400"
        bordered 
        compact
        striped 
        checkable
        >
        <template v-slot="data">
            <button @click="edit(data.item)">编辑</button>
            <button>查看</button>
        </template>
        <w-table-column text="姓名" field="name" :width="100">
            <template slot-scope="props">
                <a href="">{{props.value}}</a>
            </template>
        </w-table-column>
        <w-table-column text="性别" field="sex" :width="200"></w-table-column>
        <w-table-column text="分数" field="score" :width="300"></w-table-column>
    </w-table>
                `.replace(/\t+/g,'').trim(),
                code_groupBtn2:`
    //分页，排序等数据改变调用方式
    x(){
        //ajax().then() 改变dataSource
        //单向数据loading
        this.loading = true
        setTimeout(()=>{
            //loading
            this.dataSource = this.dataSource.sort((a,b)=>a.score-b.score)
            this.loading = false
        },1000)
    }
                `.replace(/\t+/g,'').trim()    

            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        },
        methods: {
             x(){
                //ajax().then() 改变dataSource
                //单向数据loading
                this.loading = true
                setTimeout(()=>{
                    //loading
                    this.dataSource = this.dataSource.sort((a,b)=>a.score-b.score)
                    this.loading = false
                },1000)
            },
            edit(item){
                alert(`编辑了${item.id}`)
            }
        },

    }
</script>
<style lang="scss" scoped>
    .com{
        border:1px solid #ddd;
        padding:20px;
    }
    /deep/ .w-table-wrapper{overflow:hidden !important;}
    /deep/ .w-table-wrapper>div{overflow:hidden !important;}
    /deep/ .w-table th:nth-child(6){width:90px;}
    // /deep/ .w-table{width:80%;}
</style>
