<template>
    <div class="w-pager">
        <span
        class="w-pager-nav prev" 
        :class="{disabled:currentPage ===1}"
         @click="onClickPage(currentPage-1)"
        >
            <w-icon name="prePage"></w-icon>
        </span>
        <template v-for="page in pages">
            <template v-if="page === currentPage">
                <span class="w-pager-item current">
                    {{page}}
                </span>
            </template>
            <template v-else-if="page === '...'">
                <w-icon class="w-pager-separator" name="dots"></w-icon>
            </template>
            <template v-else>
                <span @click="onClickPage(page)" class="w-pager-item other">
                    {{page}}
                </span>
            </template>
        </template>
        <span
        class="w-pager-nav next" 
        :class="{disabled:currentPage === totalPage}"
         @click="onClickPage(currentPage+1)"
        >
            <w-icon name="nextPage"></w-icon>
        </span>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
       components:{
        'w-icon':Icon 
       },
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
       updated(){
           console.log('change')
       },
       computed:{
           pages(){
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
                .filter((n) => n >= 1 && n <= this.totalPage)
                .reduce((prev,cur,index,array)=>{
                    prev.push(cur)
                    //添加...的情况
                    array[index+1]!==undefined &&
                    array[index+1] - array[index] > 1 &&
                    prev.push('...')
                    return prev
                },[])
                return pages
           }
       },
       //必须是计算属性，实时更新pages 而不是data属性
    //    data(){
    //         // -2 -1 当前页 +1 +2
    //         // 第一页和最后一页肯定有 可能会重复 要去重
    //         // 1 ... 3 4 5 6 7 ... 20   1和3极限
    //         // 1 2 3 4 5 6... 20        6和20之间
    //         // 1 1 2 3 4 5 ... 20       5和20之间
    //         // 1 ...15 16 17 18 19 20   1和15之间
    //         // 1 ...8 9 10 11 12 13     1和15之间
    //        let u1 = [1,
    //         this.totalPage,
    //         this.currentPage,
    //         this.currentPage+1,
    //         this.currentPage+2,
    //         this.currentPage-1,
    //         this.currentPage-2,
    //         ]
    //         let pages = 
    //         unique(u1)
    //         .sort((a,b)=>a-b)
    //         .filter((n) => n >= 1 && n <= this.totalPage)
    //         .reduce((prev,cur,index,array)=>{
    //             prev.push(cur)
    //             //添加...的情况
    //             array[index+1]!==undefined &&
    //             array[index+1] - array[index] > 1 &&
    //             prev.push('...')
    //             return prev
    //         },[])
            
    //         return {
    //             pages
    //         }
    //    },
       methods:{
           onClickPage(page){
               console.log(page)
               if(page >= 1 && page <= this.totalPage) {
                   this.$emit('update:currentPage', page)
               }
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
    display: inline-flex; 
    justify-content: center;
    align-items: center;
    user-select: none;
    $width: 20px;
    $height: 20px;
    $font-size: 12px;
    &-item{
        min-width: $width; height: $height;font-size: $font-size;
        border: 1px solid #e1e1e1; 
        border-radius: $border-radius; 
        padding: 0 4px; 
        display: inline-flex; justify-content: center;
        margin: 0 4px;
        &.current, &:hover { border-color: $blue; }
        &.current { cursor: default; }
   }
    &-nav{
        margin: 0 4px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: $grey; height: $height; width: $width; 
        border-radius: $border-radius; font-size: $font-size;
        &.disabled {
            svg { fill: darken($grey, 30%); }
        }
    }
   
   
}
</style>