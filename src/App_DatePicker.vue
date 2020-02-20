<template>
  <div id="app" class="page" style="position:relative;margin:50px">
    {{d}}
      <w-date-picker @input="d = $event" :value="d"></w-date-picker>
  </div>
</template>

<script>
import WDatePicker from './datepicker/date-picker'
export default {
  name: "app",
  components:{
    WDatePicker
  },
  data(){
    return {
      d:new Date()
    }
  }
 
};
</script>

<style lang="scss">

</style>
