<template>
  <div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <!--sku选择-->
      <skupopup 
      num="1"
      ref="skupopup"
      @eventSelectionChange="eventSelectionChange"
      @selectionSkucode="selectionSkucode"
      @changeDay="changeDay"
      @roomChange="roomChange"
      @changeDays="changeDays"
      @breakfastChange="breakfastChange"
      @close="skuClose"
      @dropDown="dropDown"
      @submit="submit"
      productType="2"
      :shupopuoshow="shupopuoshow"></skupopup>
  </div>    
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import skupopup from './components/calender/skupopup.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    skupopup,
  },
  data: function() {
    return {
      shupopuoshow: true,
    }
  },
  mounted() {
     // 日历初始化
    this.$refs.skupopup.calenderInit()
  },
  methods: {
         // sku弹窗
    skuClose: function() {
       this.shupopuoshow = false
    },
    // 日历下拉
    dropDown: function(obj) {
       this.$refs.skupopup.dropDownCalender(obj)
    },
    // 乐园选择
    // 场次选择
    eventSelectionChange: function(e) {
      console.log(e)
    },
    selectionSkucode: function(e) {
      console.log(e)
      this.$refs.skupopup.calenderInit()
    },
    changeDay: function(e) {
      console.log(e)
    },
    // 酒店选择
    roomChange: function(e) {
      console.log(e)
    },
    breakfastChange: function(e) {
      console.log(e)
    },
    changeDays: function(e) {
      console.log(e)
    },
    submit: function() {
      console.log('跳转到下单页面')
    }, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  box-sizing: border-box;
}
</style>
