<template>
  <div class="eventSelection">
    <div class="t">选择场次</div>
    <div class="eventSelectionContent" @click="cli">
      <!-- <div>含早</div>
      <div>不含早</div>
      <div>自助餐</div> -->
      <div
        v-for="(item, index) in breakfastList"
        :data-index="index"
        :data-item="JSON.stringify(item)"
        :class="{ active: index == currentIndex }"
        :key="item.id"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breakfastList: {
      default: function () {
        return [
          { id: 1, name: "09:00-12:00" },
          { id: 2, name: "13:00-17:00" },
          { id: 3, name: "09:00-12:00" },
        ];
      },
    },
  },
  data: function () {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    cli: function (e) {
      if (!e.target.dataset.index) return;
      this.currentIndex = e.target.dataset.index;
      this.$emit("eventSelectionChange", e.target.dataset);
    },
  },
};
</script>

<style lang="scss" scoped>
.eventSelection {
  .t {
    font-size: 16px;
    font-weight: 600;
    color: #2f2f2f;
  }
  .eventSelectionContent {
    display: flex;
    flex-wrap: wrap;
    div {
      width: 165px;
      height: 36px;
      background: #f2f2f2;
      border-radius: 18px;
      margin-top: 10px;
      text-align: center;
      line-height: 36px;
      font-size: 14px;
      color: #2f2f2f;
    }
    div:nth-of-type(2n + 2) {
      margin-left: 13px;
    }
    .active {
      border: 2px solid #ffbe0b;
      background: #fff9e9;
      color: #ffbc00;
    }
  }
}
</style>