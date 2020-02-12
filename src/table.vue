<template>

  <div class="w-table-wrapper" :style="{height, overflow: 'auto'}" ref="wrapper"> 
    <div :style="{height, overflow: 'auto'}" ref="tableWrapper">
        <table class="w-table" :class="{ bordered, compact, striped: striped }" ref="table">
        <thead>
            <tr>
            <th>
                <input
                type="checkbox"
                ref="allChecked"
                @change="onChangeAllItems"
                :checked="isAllItemsSelected"
                />
            </th>
            <th v-if="numberVisible">#</th>
            <th
                v-for="column in columns"
                :key="column.field"
            >
                <div class="w-table-header">
                    {{column.text}}
                    <span 
                    class="w-table-sorter" 
                    v-if="column.field in orderBy"
                    @click="changeOrderBy(column.field)"
                    >
                    <w-icon name="asc" :class="{active:orderBy[column.field]==='asc'}"></w-icon>
                    <w-icon name="desc" :class="{active:orderBy[column.field]==='desc'}"></w-icon>
                    </span>
                </div>
            </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in dataSource" :key="item.id">
            <td>
                <input
                type="checkbox"
                @change="onChangeItem(item, index, $event)"
                :checked="inSelectedItems(item)"
                />
            </td>
            <td v-if="numberVisible">{{ index + 1 }}</td>
            <template v-for="column in columns">
                <td :key="column.field">
                {{ item[column.field] }}
                </td>
            </template>
            </tr>
        </tbody>
        </table>
    </div>
    <div v-if="loading" class="w-table-loading">
        <w-icon name="loading"/>
    </div>
  </div>
</template>

<script>
import WIcon from "./icon";
export default {
  components: {
    WIcon
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    orderBy: {
        type: Object
    },
    numberVisible: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    //斑马线
    striped: {
      type: Boolean,
      default: true
    },
    //紧凑
    compact: {
      type: Boolean,
      default: false
    },
    selectedItems: {
      type: Array,
      default: () => []
    },
    dataSource: {
      type: Array,
      required: true,
      validator(array) {
        //缺少id的项目不存在
        return !(array.filter(item => item.id === undefined).length > 0);
      }
    },
    loading:{
        type:Boolean,
        default:false
    },
    //表格高度
    height:{
        type:[Number,String]
    }
  },
  computed: {
    isAllItemsSelected() {
      //selectedItems dataSource一样
      //判断两个数组含有的id一样
      //排序之后对比
      const a = this.selectedItems.map(item => item.id).sort();
      const b = this.dataSource.map(item => item.id).sort();
      if (a.length !== b.length) {
        return false;
      }
      let equal = true;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
          equal = false;
          break;
        }
      }
      return equal;
    }
  },
  mounted(){
    //固定表头 原理是复制一份table 删除tbody
    //表头需要计算宽度? 取出表的每一行field宽度
    let table2 = this.$refs.table.cloneNode(true)
    table2.classList.add('w-table-copy')
    this.table2 = table2 //记录复制的table2
    this.$refs.wrapper.appendChild(this.table2)
    this.updateHeaderWidth()
    //resize
    this.onWindowResize = () => this.updateHeaderWidth()
    window.addEventListener('resize',this.onWindowResize)
  },
  beforeDestroy(){
    //删除最后不需要的东西
    window.removeEventListener('resize',this.onWindowResize)
    this.table2.remove()
  },
  watch: {
    //检测selectedItems选中状态 改变半选和全选按钮
    selectedItems() {
      if (this.selectedItems.length === this.dataSource.length) {
        //半选状态
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectedItems.length === 0) {
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
    }
  },
  methods: {
    updateHeaderWidth(){
        let tableHead = Array.from(this.$refs.table.children).filter(node=>node.tagName.toLowerCase()==='thead')[0]
        let tableHead2
        Array.from(this.table2.children).map(node=>{
            if(node.tagName.toLowerCase() !== 'thead'){
                node.remove()
            }else{
                tableHead2 = node
            }
        })
        let th = document.createElement("th")
        Array.from(tableHead.children[0].children).map((th,i)=>{
            let {width} = th.getBoundingClientRect()
            tableHead2.children[0].children[i].style.width = width + 'px' 
        })
        //已知滚动条宽度？？有滚动条 再次加上一个th
        let scrollBarWidth = parseInt(this.$refs.tableWrapper.offsetWidth) - parseInt(this.$refs.tableWrapper.scrollWidth);
        if(scrollBarWidth > 0)
            tableHead2.children[0].appendChild(th)
    },
    changeOrderBy(key){
        //改变父 props不能直接操作 复制一份出来
        //如果一开始是降序 再次点击变成不知道啥排序
        let copy = JSON.parse(JSON.stringify(this.orderBy))
        let oldValue = copy[key]
        if(oldValue == 'asc'){
            copy[key] = "desc"
        }else if(oldValue == 'desc'){
            copy[key] = true
        }else{
            copy[key] = "asc"
        }
        this.$emit("update:orderBy",copy)
    },
    inSelectedItems(item) {
      //当前是否选中在selectedItems中
      return this.selectedItems.filter(i => i.id === item.id).length > 0;
    },
    onChangeItem(item, index, e) {
      let selected = e.target.checked;
      //复制props
      let copy = JSON.parse(JSON.stringify(this.selectedItems));
      if (selected) {
        copy.push(item);
      } else {
        //不能用splice 因为数组是拷贝的 发生了变化
        copy = copy.filter(i => i.id !== item.id);
      }
      console.log(copy);
      this.$emit("update:selectedItems", copy);
    },
    onChangeAllItems(e) {
      //全选 之后要改变ui?
      let checked = e.target.checked;
      this.$emit("update:selectedItems", checked ? this.dataSource : []);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "_var";
$grey: darken($grey, 10%);
.w-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $grey;
  &.bordered {
    border: 1px solid $grey;
    td,
    th {
      border: 1px solid $grey;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  td,
  th {
    border-bottom: 1px solid $grey;
    text-align: left;
    padding: 8px;
  }
  &.striped {
    tbody {
      > tr {
        &:nth-child(odd) {
          background: white;
        }
        &:nth-child(even) {
          background: lighten($grey, 10%);
        }
      }
    }
  }
  &-sorter {
    display: inline-flex;
    flex-direction: column;
    margin: 0 4px;
    cursor: pointer;
    svg {
      width: 10px;
      height: 10px;
      fill: $grey;
      &.active {
        fill: red;
      }
      &:first-child {
        position: relative;
        bottom: -1px;
      }
      &:nth-child(2) {
        position: relative;
        top: -1px;
      }
    }
  }
  &-wrapper{
      position: relative;
  }
  &-header {
    display: flex;
    align-items: center;
  }
  &-loading{
      position: absolute;
      background: rgba(255,255,255,.4);
      left:0;
      top:0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      svg{
          width: 50px;
          height: 50px;
          @include spin;
      }
  }
  &-copy{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: white;
  }
}
</style>
