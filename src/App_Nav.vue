<template>
  <div id="app">
    <!-- nav -->
    <w-nav :selected.sync="selected1" style=" margin: 20px;">
      <w-nav-item name="home">首页</w-nav-item>
      <w-sub-nav name="about">
        <template slot="title">关于</template>
        <w-nav-item name="culture">企业文化</w-nav-item>
        <w-nav-item name="developers">开发团队</w-nav-item>
        <w-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <w-nav-item name="wechat">微信</w-nav-item>
          <w-nav-item name="qq">QQ</w-nav-item>
          <w-sub-nav name="phone">
            <template slot="title">手机</template>
            <w-nav-item name="cm">移动</w-nav-item>
            <w-nav-item name="cu">联通</w-nav-item>
            <w-nav-item name="cn">电信</w-nav-item>
          </w-sub-nav>
        </w-sub-nav>

      </w-sub-nav>
      <w-nav-item name="hire">招聘</w-nav-item>
    </w-nav>
    <!-- nav 纵向 -->
    <w-nav :selected.sync="selected2" vertical style="width: 200px; margin: 20px;margin-top:200px">
      <w-nav-item name="home"><a href="https://www.baidu.com" target="_blank">
          百度link
        </a></w-nav-item>  
      <w-sub-nav name="about">
        <template slot="title">关于</template>
        <w-nav-item name="culture">企业文化</w-nav-item>
        <w-nav-item name="developers">developers</w-nav-item>
        <w-sub-nav name="contacts">
          <template slot="title">联系方式</template>
          <w-nav-item name="wechat">微信</w-nav-item>
          <w-nav-item name="qq">QQ</w-nav-item>
          <w-sub-nav name="phone">
            <template slot="title">手机</template>
            <w-nav-item name="cm">移动</w-nav-item>
            <w-nav-item name="cu">联通</w-nav-item>
            <w-nav-item name="cn">电信</w-nav-item>
          </w-sub-nav>
        </w-sub-nav>
      </w-sub-nav>
      <w-nav-item name="hire">hire</w-nav-item>  
    </w-nav>
    <p>选中了横向： {{selected1}}</p> 
    <p>选中了纵向： {{selected2}}</p> 
    
  </div>
</template>

<script>
import Vue from "vue";
import Nav from './nav/nav'
import NavItem from './nav/nav-item'
import SubNav from './nav/sub-nav'

export default {
  name: "app",
  components: {
    'w-nav':Nav,
    'w-nav-item':NavItem,
    'w-sub-nav':SubNav,
  },
  data() {
    return {
      selected1: ['home'],
      selected2: ['culture'],
    };
  },
  created(){
  
  },
  mounted() {
  },
  methods: {
   
  }
};
</script>

<style lang="scss">
 * {margin: 0; padding: 0; box-sizing: border-box;}

</style>
