<template>
    <div>
        <div style="margin: 20px;">
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
            <!-- 必须确保最后一个 td 是自适应的！！！！！！！！！！！！！！！！！！！ -->
            <!-- 1.有按钮组的话  所有的column都要给width -->
            <!-- 2.没有按钮组的话  最后的column不要给width -->
                <!-- 添加按钮 -->
                <template v-slot="data">
                <!-- <template slot-scope="data"> -->
                    <button @click="edit(data.item)">编辑</button>
                    <button>查看</button>
                </template>
                <!-- 添加列的新方式 组件添加 -->
                <w-table-column text="姓名" field="name" :width="100">

                    <template slot-scope="props">
                        <a href="">{{props.value}}</a>
                    </template>
                </w-table-column>
                <w-table-column text="性别" field="sex" :width="200"></w-table-column>
                <w-table-column text="分数" field="score" :width="300"></w-table-column>
            </w-table>
        </div>
        {{selected}}
    </div>
</template>

<script>
    import WTable from './table/table'
    import WTableColumn from './table/table-column'
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
                {id: 1, name: '方方', sex:'男',score: 100,description:'weizai'},
                {id: 2, name: '圆圆', sex:'男',score: 99},
                {id: 3, name: '张三', sex:'男',score: 100},
                {id: 4, name: '李四', sex:'男',score: 99},
                {id: 5, name: '超人', sex:'男',score: 100},
                {id: 6, name: '蝙蝠侠', sex:'男',score: 99},
                {id: 7, name: '蜘蛛侠', sex:'男',score: 100},
                {id: 8, name: '钢铁侠', sex:'男',score: 99},
                {id: 9, name: '李四', sex:'男',score: 99},
                {id: 10, name: '超人', sex:'男',score: 100},
                {id: 11, name: '蝙蝠侠', sex:'男',score: 99},
                {id: 12, name: '蜘蛛侠', sex:'男',score: 100},
                {id: 13, name: '钢铁侠', sex:'男',score: 99},
                {id: 14, name: '李四', sex:'男',score: 99},
                {id: 15, name: '超人', sex:'男',score: 100},
                {id: 16, name: '蝙蝠侠', sex:'男',score: 99},
                {id: 17, name: '蜘蛛侠', sex:'男',score: 100},
                {id: 18, name: '钢铁侠', sex:'男',score: 99}
              ]  
            }
        },
        methods:{
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
        }
    }
</script>

<style lang="scss" scoped>

</style>