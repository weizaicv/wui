<template>
    <div class="w-pager">
        <span v-for="(page,index) in pages" class="w-pager-item" :key="index"
        :class="{active:page===currentPage,separator: page === '...'}"
        >
            {{page}}
        </span>
    </div>
</template>

<script>
    export default {
       props:{
           totalPage:{
               type:Number,
               required:true
           },
           currentPage: {
                type: Number,
                required: true
            },
       },
       data(){
            // -2 -1 当前页 +1 +2
            // 第一页和最后一页肯定有 可能会重复 要去重
            // 1 ... 3 4 5 6 7 ... 20   1和3极限
            // 1 2 3 4 5 6... 20        6和20之间
            // 1 1 2 3 4 5 ... 20       5和20之间
            // 1 ...15 16 17 18 19 20   1和15之间
            // 1 ...8 9 10 11 12 13     1和15之间
           let u1 = [1,
            this.totalPage,
            this.currentPage,
            this.currentPage+1,
            this.currentPage+2,
            this.currentPage-1,
            this.currentPage-2,
            ]
            let pages = 
            unique(u1)
            .sort((a,b)=>a-b)
            .reduce((prev,cur,index,array)=>{
                prev.push(cur)
                //添加...的情况
                array[index+1]!==undefined &&
                array[index+1] - array[index] > 1 &&
                prev.push('...')
                return prev
            },[])
            
            return {
                pages
            }
       }
    }

    function unique(arr) {
        //[...new Set([...arr])]
        //记得字符串转数组
        let hash = {}
        for(let i=0;i<arr.length;i++){
            if(!hash[arr[i]]){
                hash[arr[i]] = true
            }
        }
        return Object.keys(hash).map(item=>parseInt(item))
    }
</script>

<style lang="scss" scoped>
@import "_var";
.w-pager{
    &-item{
        border: 1px solid #e1e1e1;
        border-radius: $border-radius;
        padding: 0 4px;
        display: inline-flex; 
        justify-content: center;
        align-items: center;
        font-size: 12px; min-width: 20px; height: 20px; margin: 0 4px; cursor: pointer;
        &.separator {
            border: none;
        }
        &.active, &:hover {
            border-color: $blue;
        }
        &.active {
            cursor: default;
        }
   }
   
}
</style>