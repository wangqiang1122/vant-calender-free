<template>
  <div class="shupopuo">
    <van-popup
      closeable
      round
      :close-on-click-overlay="overlay1"
      position="bottom"
      :style="{ height: '80%' }"
      v-model="show"
      @click-close-icon="close1"
    >
      <div class="shupopuoContent">
        <div class='e1'>
          <div class="title">广州融创酒店豪华园景房酒店酒酒 店酒店</div>
          <div class="qian"><span>￥</span>3000-323123</div>
          <van-divider />
        </div>
        <div class="content-y">
          <div v-if="productType==1">
            <room @roomChange="roomChange"></room>
            <breakfast class="f1" @breakfastChange="breakfastChange"></breakfast>
            <checkInDate 
            :middleNum="middleNum"
            :startTime="startTime"
            :endTime="endTime"
            class="f1"></checkInDate>
          </div>
          <div v-if="productType==2">
            <selection @selection="selection"></selection>
            <multipleChoice :changeTime="changeTime" class='f1'></multipleChoice>
            <eventSelection class="f1" @eventSelectionChange="eventSelectionChange"></eventSelection>
          </div>
          <roomNumber 
          :title="productType|gettitle"
          :disable="disable"
          :num="num"
          @add="add" @jian="jian"></roomNumber>
        </div>
        <div class='btn1'>
           <div class='que' @click="submit">确定</div>
        </div>
      </div>
    </van-popup>
    <!--价格日历-->
    <calender 
    ref="calender"
    @dropDown="dropDown"
    :type="productType==1?'2':'1'" 
    :productType="productType"
    :skuCode="skuCode"
    @changeDays="changeDays"
    @changeDay="changeDay" 
    @close="close" 
    :calendershow="calendarShow"></calender>
  </div>
</template>

<script>
import room from "./components/room.vue";
import breakfast from "./components/breakfast.vue";
import checkInDate from "./components/checkInDate.vue";
import roomNumber from './components/roomNumber.vue';
import selection from './components/selection.vue';
import eventSelection from './components/eventSelection.vue';
import multipleChoice from './components/multipleChoice.vue'
import calender from './index.vue'
export default {
  name: "skupopup",
  components: {
    room,
    breakfast,
    checkInDate,
    roomNumber,
    selection,
    eventSelection,
    multipleChoice,
    calender,
  },
  props: {
    num:{
      default: '0'
    },
    disable: {
      default: true
    },
    shupopuoshow: {
      default: false,
    },
    productType: { // 1 是酒店不显示价格
      default: '',
    }
  },
  filters: {
    gettitle: function(e) {
      console.log(e)
      return e==1?'房间数': '购买数量'
    }
  },
  data: function () {
    return {
      // show: true,
      // num: '1',
      calendarShow: false, // 价格日历
      changeTime: '', // 单选的日历时间
      typec: '2', // 1 单选 2 是多选
      show: true,
      startTime: "",
      endTime: '',
      middleNum: 1, // 中间间隔天数
      skuCode: '312312',
      overlay1: false,
    };
  },
  watch: {
    shupopuoshow: function(e) {
      console.log(e)
      this.show = e;
    }
  },
  mounted:function() {
    // 日历时间
    this.$EventBus.$on('clicalender',()=>{
      console.log('ff')
      this.typec='1'
      this.calendarShow = true
    })
    // 日历时间
    this.$EventBus.$on('clicalenders',()=>{
       console.log('ffgg')
      this.typec='2'
      this.calendarShow = true
    })
    // 默认多选的时间
    this.defaultdtime();
    // 日历数据更新
    // 日历初始化
    console.log(this.$refs.calender)
    // this.calenderInit()
  },
  methods: {
   // 场次选择
   eventSelectionChange: function(e) {
     console.log(e)
     this.$emit('eventSelectionChange',e)
   }, 
   // selection
   selection: function(e) {
     console.log(e)
     this.$emit('selection',e)
   },
   // 房型选择 
   roomChange: function(e) {
     this.$emit('roomChange',e)
   },
   // breakfast选择
   breakfastChange: function(e) {
     this.$emit('breakfastChange',e)
   },
   // 日历的数据初始化
   calenderInit: function() {
    this.$refs.calender.init() 
   }, 
   defaultdtime: function() {
       // 多选的默认时间
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    var my_day = currentDate.getDate();
    // var my_day  =31
    this.startTime = `${currentMonth+1}月${my_day}`
    let monthDays = this.getmonthDay(currentDate.getFullYear(),currentMonth+1);
    console.log(monthDays)
    // 获取当前月的总天数
    if (currentMonth==11&&my_day==31) {
       this.endTime = `1月1`;
    } else if(my_day==monthDays) {
       this.endTime = `${currentMonth+2}月1`;
    } else {
       this.endTime = `${currentMonth+1}月${my_day+1}`;
    }
    this.middleNum = 1
   }, 
   // 下拉拉取更多
   dropDown: function(obj) {
      this.$emit('dropDown',obj)
   },
   dropDownCalender: function(obj) {
       this.$refs.calender.initCalender(obj.FullYear,obj.Month)
   },
   // 获取对应月份的天数
   getmonthDay(my_year, my_month) {
      return new Date(my_year, my_month, 0).getDate();
   },
   add: function() {
      if(this.disable) return
      this.num = this.num+1
      ++this.num
   },
   jian: function() {
      if(this.disable) return
       if (this.num<=0) {
            this.num =0;
        } else {
           --this.num
        }
   },
   // 关闭日历
   close1: function() {
     this.$emit('close')
   },
       // 关闭日历
   close: function() {
      this.calendarShow = false
   },
    // 日历选择
    changeDay: function(e) {
      console.log(e)
      this.calendarShow = false
      this.changeTime = `${e.month}月${e.dateNum}`
      this.$emit('changeDay',{changeTime: this.changeTime})
    },
    // 日历多选
    changeDays: function(e) {
      console.log(e)
      let { start, end,number} =e;
      if (!start||!end||!number) return
      this.startTime=`${start.month}月${start.dateNum}`  
      this.endTime = `${end.month}月${end.dateNum}`
      this.middleNum = number;
      this.calendarShow = false
      this.$emit('changeDays',e)
    },
    // 获取乐园类的上商品sku
    selection: function(e) {
      console.log(e)
      this.skuCode = '11111'
      this.changeTime = ''
      this.$emit('selectionSkucode', this.skuCode)
    },
    // 点击提交sku商品
    submit: function() {
      console.log("提交")
      this.$emit('submit',{

      })
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/theme/color.scss";
.shupopuoContent {
  padding: 40px 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  // margin-top: 40px;
  .van-divider {
    color: #ddd;
  }
  .title {
    font-size: 22px;
  }
  .qian {
    span {
      color: $myColor;
      font-size: 14px;
    }
    font-size: 22px;
    color: $myColor;
    margin-top: 11px;
  }
  .f1 {
    margin-top: 25px;
  }
  .e1{
    flex: 1;
  }
  .content-y{
    height: 100%;
    overflow-y: auto;
    // padding-bottom: 100px;
  }
  .btn1{
    height: 200px;
    .que{
      width: 100%;
      height: 45px;
      background: #FFBC00;
      color: #FFFFFF;
      line-height: 45px;
      font-weight: 600;
      text-align: center;
      border-radius: 20px;
      margin-top: 30px;
    }
  }
}
</style>