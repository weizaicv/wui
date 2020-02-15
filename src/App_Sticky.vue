<template>
  <div id="app">
    <!-- https://weizaicv.github.io/wui/hero.jpg -->
      <p style="height:300px;background:#eee;">段落</p>
      <w-sticky :distance="100">
        <div style="border:1px solid red;">
          <img src="https://weizaicv.github.io/wui/hero.jpg" alt="">
        </div>
      </w-sticky>
      <p style="height:700px;background:#ddd;">段落</p>
  </div>
</template>

<script>
import WSticky from './sticky'

export default {
  name: "app",
  components: {
    WSticky
  },
  data() {
    return {
 
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

</style>
