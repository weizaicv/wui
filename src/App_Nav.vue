<template>
  <div id="app">
    <!-- nav -->
    <w-nav :selected="selected" @update:selected="selected=$event">
      <w-nav-item name="home">home</w-nav-item>  
      <w-sub-nav>
        <template slot="title">关于</template>
        <w-nav-item name="culture">企业文化</w-nav-item>
        <w-nav-item name="developers">developers</w-nav-item>
        <w-sub-nav>
          <template slot="title">联系方式</template>
          <g-nav-item name="wechat">微信</g-nav-item>
          <g-nav-item name="qq">QQ</g-nav-item>
          <g-sub-nav>
            <template slot="title">手机</template>
            <g-nav-item name="cm">移动</g-nav-item>
            <g-nav-item name="cu">联通</g-nav-item>
            <g-nav-item name="cn">电信</g-nav-item>
          </g-sub-nav>
        </w-sub-nav>
      </w-sub-nav>
      <w-nav-item name="hire">hire</w-nav-item>  
    </w-nav> 
    
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
      selected: ['culture']
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
