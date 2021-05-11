<template>
  <div class="checkInDate">
    <div>
      <div class="t">入住日期</div>
    </div>
    <div class="checkInDate-content" @click="clicalender">
      <div class="s1">
        <span class="g1">入住</span>
        <span class="startTime">{{startTime}}</span>
      </div>
      <div class="ji">共{{middleNum}}晚</div>
      <div class="s1">
        <span class="g1">离店</span>
        <span class="endTime">{{endTime}}</span>
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
    startTime: {
        default: '3月31'
    },
    endTime: {
        default: '4月12'
    },
    middleNum: {
        default: '1'
    }    
  },  
  methods: {
    clicalender: function () {
      this.$EventBus.$emit("clicalenders");
    },
  },
};
</script>

<style  lang="scss" scoped>
.checkInDate {
  .t {
    font-size: 16px;
    font-weight: 600;
    color: #2f2f2f;
  }
  .checkInDate-content {
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
    border-radius: 9px;
    width: 99%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px auto 0;
  }
  .s1 {
    display: flex;
    align-items: center;
    .g1 {
      color: #acaaa9;
      font-size: 12px;
    }
    .startTime,
    .endTime {
      font-size: 20px;
      color: #2f2f2f;
      margin-left: 10px;
    }
  }
  .ji {
    color: #2f2f2f;
    font-size: 12px;
    width: 60px;
    height: 20px;
    background: #f2f2f2;
    border-radius: 14px;
    text-align: center;
    line-height: 20px;
  }
  .h1 {
    height: 18px;
    margin-left: 20px;
  }
}
</style>