<template>
  <div id="app">
    <!-- 测试tabs -->
    <!-- <w-tabs :selected.sync="selectedTab">
      <w-tabs-head class="">
        <template slot="actions"><w-button>设置</w-button></template>
        <w-tabs-item name="woman">美美</w-tabs-item>
        <w-tabs-item name="settings" disabled>美美2</w-tabs-item>
        <w-tabs-item name="finance">美美33333333333</w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="woman">美美's data</w-tabs-pane>
        <w-tabs-pane name="settings">美美2's data</w-tabs-pane>
        <w-tabs-pane name="finance">美美3's data</w-tabs-pane>
      </w-tabs-body>
    </w-tabs> -->

    <!-- 测试popover -->
    <!-- <div style="margin: 50px;">
      <div>
        <w-popover position="top" trigger="hover">
          <template slot="content">
            <div>内容内容内容内容内容内容内容内容内容内容内容内容</div>
          </template>
          <w-button icon="settings">点我</w-button>
        </w-popover>
      </div>
      <div>
        <w-popover position="bottom" trigger="click">
          <template slot="content">
            <div>内容内asd内容内asd内容内容 asdadasdadas</div>
          </template>
          <w-button>点我2</w-button>
        </w-popover>
      </div>
      <div>
        <w-popover position="left" trigger="hover">
          <template slot="content">
            <div>容内容 as</div>
          </template>
          <w-button>点我2</w-button>
        </w-popover>
      </div>
      <div>
        <w-popover position="right" trigger="click">
          <template slot="content">
            <div>内容内asd内容内asd内容内容 asdadasdadas</div>
          </template>
          <w-button>点我2</w-button>
        </w-popover>
      </div>
      <div>
        <w-popover position="right" trigger="click">
          <template slot="content" slot-scope="{ close }">
            <div>内部close函数作用域插槽传递</div>
            <w-button @click="close">关闭</w-button>
          </template>
          <w-button>内部close函数传递</w-button>
        </w-popover>
      </div>
    </div> -->
    <!-- slot-scope结构出close方法 -->


    <!-- 测试collpase手风琴 -->
    <!-- <div style="margin: 50px;">
      <w-collapse single :selected.sync="selectedCollapseTab">
        <w-collapse-item title="标题1" name="1"
          >#标题1content标题1标题1content标题1contentcontent</w-collapse-item
        >
        <w-collapse-item title="标题2" name="2"
          >#标题2c标题1content标题1content标题1contentontent</w-collapse-item
        >
        <w-collapse-item title="标题3" name="3"
          >#标题3cont标题1content标题1content标题1contentent</w-collapse-item
        >
      </w-collapse>
      {{ selectedCollapseTab }}
    </div> -->


    <!-- 测试省市区选择 -->
    <div style="padding: 20px;">
        <!-- <w-cascader :source="source" popover-height="200px" @update:selected="selected = $event" :selected="selected"></w-cascader> -->
        <w-cascader 
        :source.sync="source" 
        popover-height="200px" 
        :selected.sync="selected"
        :loadData="loadData"
        >
        </w-cascader>
    </div>
  </div>
</template>

<script>
import db from './db'
import Vue from "vue";
import Button from "./button/button";
import ButtonGroup from "./button/button-group";
import Icon from "./icon";
import Input from "./input";
import Row from "./grid/row";
import Col from "./grid/col";
import Layout from "./layout";
import Header from "./header";
import Footer from "./footer";
import Aside from "./aside";
import Content from "./content";
import plugin from "./plugin";
import Tabs from "./tabs";
import TabsHead from "./tabs-head";
import TabsBody from "./tabs-body";
import TabsItem from "./tabs-item";
import TabsPane from "./tabs-pane";
import Popover from "./popover";
import Collapse from "./collapse/collapse";
import CollapseItem from "./collapse/collapse-item";
import Cascader from "./cascader/cascader";
import CascaderItems from "./cascader/cascader-items";

Vue.use(plugin);

//promise化
function ajax(parentId = 0){
  // return db.filter(item=>item.parent_id == parentId)
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
  name: "app",
  components: {
    "w-button": Button,
    "w-icon": Icon,
    "w-button-group": ButtonGroup,
    "w-input": Input,
    "w-row": Row,
    "w-col": Col,
    "w-layout": Layout,
    "w-header": Header,
    "w-footer": Footer,
    "w-aside": Aside,
    "w-content": Content,
    "w-tabs": Tabs,
    "w-tabs-head": TabsHead,
    "w-tabs-item": TabsItem,
    "w-tabs-body": TabsBody,
    "w-tabs-pane": TabsPane,
    "w-popover": Popover,
    "w-collapse": Collapse,
    "w-collapse-item": CollapseItem,
    "w-cascader": Cascader,
    "w-cascader-item": CascaderItems
  },
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      message: "mes",
      selectedTab: "woman",
      selectedCollapseTab: ["1", "2"],
      selected:[],
      source:[]
      // source: [
      //   {
      //     name: "浙江",
      //     children: [
      //       {
      //         name: "杭州",
      //         children: [{ name: "上城" }, { name: "下城" }, { name: "江干" }]
      //       },
      //       {
      //         name: "嘉兴",
      //         children: [{ name: "南湖" }, { name: "秀洲" }, { name: "嘉善" }]
      //       }
      //     ]
      //   },
      //   {
      //     name: "福建",
      //     children: [
      //       {
      //         name: "福州",
      //         children: [{ name: "鼓楼" }, { name: "台江" }, { name: "仓山" }]
      //       }
      //     ]
      //   },{
      //       name: '安徽',
      //       children: [
      //           {
      //               name: '合肥',
      //               children: [{ name: '瑶海'}, {name: '庐阳'}]
      //       }
      //       ]
      //   }

      // ]
    };
  },
  created(){
    ajax(0).then(result => {
      this.source = result
      // this.source = result.map(res=>{
      //   res.children = res.children || []
      //   return res
      // })
    })
  },
  mounted() {
    console.log("selectedTab", this.selectedTab);
  },
  methods: {
    loadData({id},updateSource){
      //传递回调 执行回调传入数据
      ajax(id).then(result=>{
        updateSource(result)
      })
    },
    //用户点击北京，找到北京的id对应的区，放入北京的source的children里面，实现二级的渲染
    //@update:selected="xxx"
    xxx(newSelected){
      ajax(newSelected[0].id).then(result=>{
        let last = this.source.filter(item => item.id === newSelected[0].id)[0]
        //一开始没children现在有children，对数组修改用set
        this.$set(last,'children',result)
        // last.children = result
      })
    },
    clickToast() {
      //传入两个参数
      //msg options
      this.$toast(`<strong>hello,${parseInt(Math.random() * 100)}</strong>`, {
        closeButton: {
          text: "知道了",
          callback: toast => {
            toast.log();
          }
        },
        enableHtml: true,
        position: "center",
        autoCloseDelay: 2
      });
    },
    showToast1() {
      this.$toast("top", { position: "top" });
    },
    showToast2() {
      this.$toast("center", { position: "center" });
    },
    showToast3() {
      this.$toast("bottom", { position: "bottom" });
    },
    inputchange(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss"></style>
