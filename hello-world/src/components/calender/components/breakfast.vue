<template>
  <div class="breakfast">
    <div class="t">选择房间</div>
    <div class="breakfastContent"  @click="cli">
      <!-- <div>含早</div>
      <div>不含早</div>
      <div>自助餐</div> -->
      <div v-for="(item,index) in breakfastList" 
           :data-index = "index" 
           :data-item = "JSON.stringify(item)" 
           :class="{'active': index==currentIndex}"
           :key="item.id">
          {{item.name}}
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            breakfastList: [
                {id:1,name: '含早'},
                {id:2,name: '不含早'},
                {id:3,name: '自助餐'},
            ],
            currentIndex: 0,
        }
    },
    methods: {
        cli:function(e){
          console.log(e.target.dataset)   
          if (!e.target.dataset.index) return
          this.currentIndex = e.target.dataset.index
          this.$emit('breakfastChange',e.target.dataset)
        }
    }
};
</script>

<style lang="scss" scoped>
.breakfast {
  .t {
    font-size: 16px;
    font-weight: 600;
    color: #2f2f2f;
  }
  .breakfastContent {
    display: flex;
    flex-wrap:wrap;
    div {
      width: 165px;
      height: 36px;
      background: #f2f2f2;
      border-radius: 18px;
      margin-top: 10px;
      text-align: center;
      line-height: 36px;
      font-size: 14px;
      color: #2F2F2F;
    }
    div:nth-of-type(2n + 2) {
        margin-left: 13px
    }
        .active{
        border: 2px solid #FFBE0B;
        background: #FFF9E9;
        color: #FFBC00;
    }
  }
}
</style>