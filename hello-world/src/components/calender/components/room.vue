<template>
  <div class="room">
    <div class="t">房型选择</div>
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
            name: "豪华总统套房",
          },
          {
            id: 2,
            name: "休闲主题大床房",
          },
          {
            id: 3,
            name: "休闲主题大床房",
          },
          {
            id: 4,
            name: "休闲主题大床房",
          },
          {
            id: 5,
            name: "休闲主题大床房",
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
      console.log(e);
      this.currentindex = index;
      this.$emit("roomChange", e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/color.scss";
.room {
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