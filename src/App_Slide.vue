<template>
  <div id="app">
    <!-- slide -->
    <w-slides class="wrapper" :selected.sync="selected" :isMobile="false">
      <w-slides-item name="1"><div class="box">1</div></w-slides-item>
      <w-slides-item name="2"><div class="box">2</div></w-slides-item>
      <w-slides-item name="3"><div class="box">3</div></w-slides-item>
    </w-slides>
  </div>
</template>

<script>
import Vue from "vue";
import Slides from './slides/slides'
import SlidesItem from './slides/slides-item'

export default {
  name: "app",
  components: {
    'w-slides':Slides,
    'w-slides-item':SlidesItem
  },
  data() {
    return {
      selected: "2"
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
.box {
  width: 100%;
  height: 20vh;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
