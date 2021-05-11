<template>
  <div class="multipleChoice" @click="clicalender">
    <div>
      <div class="t">时间选择</div>
    </div>
    <div class="k1">
      <span class="a1">使用时间</span>
      <div class="a2">
        <span v-if="!changeTime">请选择</span>
         <span v-if="changeTime" class='g1'>{{changeTime}}</span>
        <img
          class="h1"
          src="https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/images/skiing_select.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      changeTime: {
          default: '',
      }
  },  
  methods: {
    clicalender: function () {
      this.$EventBus.$emit("clicalender");
    },
  },
};
</script>

<style lang="scss" scoped>
.multipleChoice {
  .t {
    font-size: 16px;
    font-weight: 600;
    color: #2f2f2f;
  }
  .k1 {
    margin-top: 15px;
    height: 36px;
    background: #f2f2f2;
    border-radius: 4px;
    display: flex;
    line-height: 36px;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    .a1 {
      color: #4E4D4C;
      font-size: 12px;
      font-weight: 400;
    }
    .a2 {
      color: #4e4d4c;
      font-size: 12px;
      font-weight: 400;
      display: flex;
      align-items: center;
      img {
        width: 8px;
        height: 8px;
        margin-left: 5px;
      }
      .g1{
        font-size: 14px;
        font-weight: bold;
        color: #2F2F2F;
      }
    }
  }
}
</style>