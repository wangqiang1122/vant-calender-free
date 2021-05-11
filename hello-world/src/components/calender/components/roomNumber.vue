<template>
  <div class='roomNumber'>
    <div class='j1'>
      {{title}}
    </div>
    <div class='j2'>
      <div class='roomadd' :class="{ disable: disable }" @click="jian">-</div>
      <div class='roomNumSel'>{{num}}</div>
      <div class='roomReduce' :class="{ disable: disable }" @click="add">+</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
        default: '0',
    }, 
    title: {
        default: '购买数量'
    },
    disable: {
       default: true,
    }
  },  
  data: function() {
    return {}
  },  
  methods: {
    jian: function() {
        // if (this.num<=0) {
        //     this.num =0;
        // } else {
        //    --this.num
        // }
        this.$emit('jian')
    },  
    add: function() {
        // this.num = this.num+1
        // // ++this.num
        this.$emit('add')
    }
  },
}
</script>

<style lang="scss" scoped>
.roomNumber{
   display: flex;
   justify-content: space-between; 
   align-items: center;
   margin-top: 25px;
  .j2{
    display: flex;
    align-items: center;
    width: 105px;
    height: 30px;
    border-radius: 16px;
    border: 1px solid #DDDDDD;
    border-radius: 16px;
  } 
  .roomReduce{
    width: 30px;
    height: 30px;
    line-height: 25px;
    display: flex;
    // align-items: center;
    justify-content: center;
    font-size: 25px;
  } 
  .roomNumSel{
    border-left: 1px solid #DDDDDD;
    border-right: 1px solid #DDDDDD;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8D8B89;
  }
  .roomadd{
    width: 30px;
    height: 30px;
    line-height: 25px;
    display: flex;
    // align-items: center;
    justify-content: center;
    font-size: 25px;
  }
  .disable{
      color: #ccc;
  }
}
</style>