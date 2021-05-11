<template>
  <div class="selection">
    <div class="t">选择商品</div>
    <div class="d">
      <!-- <div class='m'>豪华总统套房</div>
       <div class='m'>休闲主题大床房</div> -->
      <div
        v-for="(item, index) in roomList"
        :key="item.id"
        class="m"
        :class="{ active: index == currentindex }"
        @click="cli(item, index)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roomList: {
      default: function () {
        return [
          {
            id: 1,
            name: "全家福旋转木马椅",
          },
          {
            id: 2,
            name: "2大1小畅玩8小时",
          },
          {
            id: 3,
            name: "一天两晚畅玩游乐场",
          },
        ];
      },
    },
  },
  data: function () {
    return {
      currentindex: 0,
    };
  },
  methods: {
    cli: function (e, index) {
      this.currentindex = index;
      this.$emit("selection", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/color.scss";
.selection {
  .t {
    font-size: 16px;
    font-weight: 600;
    color: #2f2f2f;
  }
  .m {
    width: 100%;
    height: 36px;
    background: #f2f2f2;
    border-radius: 18px;
    font-weight: 400;
    color: #2f2f2f;
    font-size: 14px;
    text-align: center;
    line-height: 36px;
    margin-top: 15px;
  }
  .m:nth-child(1) {
    margin-top: 5px;
  }
  .active {
    border: 2px solid #ffbe0b;
    background: #fff9e9;
    color: #ffbc00;
  }
}
</style>