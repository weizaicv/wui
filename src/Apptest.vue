<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <button key="on" v-if="status=='off'" @click="status='on'">on</button>
      <button key="off" v-if="status=='on'" @click="status='off'">off</button>
    </transition>
    
  </div>
</template>
<script>
export default {
  name: "apptest",
  data(){
    return {
      status:'on'
    }
  }
};
</script>
<style lang="scss">
.fade-enter-active,.fade-leave-active{
  transition: all .5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
</style>
