<template>
    <div>
        <div style="margin: 20px;">
            <w-table 
            :columns="columns"
            :data-source="dataSource"
            :selected-items.sync="selected"
            :order-by.sync = "orderBy"
            :loading="loading"
            @update:orderBy ="x"
            numberVisible
            bordered 
            compact
            striped 
            ></w-table>
        </div>
        {{selected}}
    </div>
</template>

<script>
    import WTable from './table'
    export default {
        components:{
            WTable
        },
        data(){
            return {
              selected:[],
              //asc desc是UI数据 不能加在本身数据上面
              columns:[
                {text:'姓名',field:'name'},
                {text:'分数',field:'score'}
              ],
              orderBy:{
                  //true开启排序有icon但是不知道是哪种 false关闭排序 asc/desc
                  name:'asc',
                  score:'desc'
              },
              loading:false,
              dataSource:[
                {id: 1, name: '方方', score: 100},
                {id: 2, name: '圆圆', score: 99},
                {id: 3, name: '张三', score: 100},
                {id: 4, name: '李四', score: 99},
                {id: 5, name: '超人', score: 100},
                {id: 6, name: '蝙蝠侠', score: 99},
                {id: 7, name: '蜘蛛侠', score: 100},
                {id: 8, name: '钢铁侠', score: 99},
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>