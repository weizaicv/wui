<template>
    <div>
        <p style="margin-bottom:50px;">可以实现多级菜单，多级菜单用w-sub-nav>template>w-nav-item固定格式</p>
        <p>基础用法-1.水平导航</p>
        <p>selected1父级选中的数据，对应name接口：{{selected1}}</p>
        <div style="margin-bottom:40px;" class="comp0">
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
        </div>
        <pre><code class="language-html">{{code_default}}</code></pre>
    
    <p style="margin-top:50px;">基础用法-2.垂直导航</p>
    <p>selected2父级选中的数据，对应name接口：{{selected2}}</p>
    <div class="comp">
    <w-nav :selected.sync="selected2" vertical style="width: 200px;">
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
    </div>
        <pre><code class="language-html">{{code_default2}}</code></pre>
    
    </div>
</template>

<script>
    import Prism from "prismjs";
    import WNav from '../../../src/nav/nav'
    import WNavItem from '../../../src/nav/nav-item'
    import WSubNav from '../../../src/nav/sub-nav'
    export default {
        components:{
            WNav,WNavItem,WSubNav
        },
        data(){
            return {
              selected1: ['home'],
              selected2: ['culture'],
                code_default:`
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
                `.replace(/\t+/g,'').trim(),
                code_default2:`
  <w-nav :selected.sync="selected2" vertical style="width: 200px;">
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
                `.replace(/\t+/g,'').trim()
            }
        },
        mounted() {
            //主题css，可自选
           Prism.highlightAll()
        }

    }
</script>
<style lang="scss">
.comp0{
  &:hover{
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2)
  }
}
.comp{
  width:200px;
  &:hover{
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2)
  }
}

</style>
