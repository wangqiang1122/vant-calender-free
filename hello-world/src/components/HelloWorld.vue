<template>
  <div class="calender">
    <van-popup
      closeable
      round
      position="bottom"
      :style="{ height: '60%' }"
      :close-on-click-overlay="overlay"
      v-model="show"
    >
      <div class="h1">
        <div class="g1">
          <div class="title">时间选择</div>
          <div class="week">
            <div v-for="(item, index) in week" :key="index">
              {{ item }}
            </div>
          </div>
        </div>
        <div class="calender-list">
          <van-list
            v-model="loading"
            :offset="10"
            :finished="finished"
            @load="onLoad"
            :immediate-check="immediateCheck"
            :finished-text="finishText"
          >
            <div class="months" v-for="(item, index) in months" :key="index">
              <!-- <div>{{item}}</div> -->
              <div class="months-title">{{ item[0].year }}年{{ item[0].month }}月</div>
              <div
                class="v1"
                v-for="(days, i) in item"
                :key="i"
                @click="cli1(days, index)"
              >
                <div
                  v-if="days.timestamp"
                  class="v2"
                  :class="{
                    active: days.active,
                    disable: days.disable,
                    startactive: days.start,
                    endactive: days.end,
                    middle: days.middle,
                  }"
                >
                  {{ days.dateNum }}
                  <span class="q">¥1000</span>
                </div>
                <div
                  class="f1"
                  :class="{ hidden: days.disable }"
                  v-if="days.timestamp"
                >
                  仅剩4件
                </div>
              </div>
            </div>
          </van-list>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
let gatmiddle = 0;
let isone = false;
import { Toast } from "vant";

export default {
  name: "calender",
  data: function () {
    return {
      overlay: false,
      show: true,
      week: ["日", "一", "二", "三", "四", "五", "六"],
      dateArr: [],
      months: [],
      activeDay: null,
      startActiveDay: "", // 开始时间选中的
      startActiveMonthIndex: "", // 开始选中位置
      endActiveDay: "", // 结束时间选中的
      endActiveMonthIndex: "", // 结束选择位置
      middleActiveDays: [], // 中间选中的天数
      loading: false,
      finished: false,
      immediateCheck: false,
      currentFullYear: "", // 当前年份
      currentMonth: "", // 当前月份
      FullYear: "", // 年份
      Month: "", // 月份
      day: "", // 当天日期
      type: "2", // 1是单选 2是多选
      currenttimestamp: "", // 当前时间的时间戳
      startDay: "", // 开始时间
      endDay: "", // 结束时间
      specialEndTime: false, // 初始化end时间是否需要特殊处理
      middleNum: 5,
      isreset: false,
      finishText: "最多可预定3个月内的产品",
      Maxactive: 15, // 不允许超过的天数
    };
  },
  mounted() {
    let currentDate = new Date();
    var my_year = currentDate.getFullYear();
    this.FullYear = my_year;
    this.currentFullYear = my_year;
    // console.log(currentDate.getMonth())
    var my_month = currentDate.getMonth() + 1;
    this.currentMonth = currentDate.getMonth() + 1;
    this.Month = my_month;
    // var my_month = 12;
    // this.currentMonth = 12
    // this.Month =12
    // var my_day = 29;
    var my_day = currentDate.getDate()
    gatmiddle = this.middleNum;
    this.initCalender(my_year, my_month, my_day);
    // 拿到被选中的日期
    if (this.type == 1) {
      this.activeDay = this.dateArr.find((item) => {
        return item.active;
      });
    } else if (this.type == 2) {
      // 判断下个月的是否需要特殊处理
      console.log(my_month == this.currentMonth);
      console.log(my_day + this.middleNum);
      console.log(this.getmonthDay(my_year, my_month));
      // 结束时间是否需要特殊处理
      this.specialEndTime =
        my_month == this.currentMonth &&
        my_day + this.middleNum >= this.getmonthDay(my_year, my_month);
      // 被选中的开始和结束和中间
    }
  },
  methods: {
    initCalender(my_year, my_month, my_day) {
      let startweek = this.getfirstDate(my_year, my_month, 1);
      let monthDays = this.getmonthDay(my_year, my_month);
      let dateArr = this.getmontharr(
        startweek,
        monthDays,
        my_month,
        my_year,
        my_day
      );
      // 对数据需要二次处理
      dateArr.forEach((item) => {
        if (item.active || item.start) {
          this.currenttimestamp = item.timestamp;
        }
      });
      if (this.type == 1) {
        if (!this.activeDay) {
          this.activeDay = dateArr.find((item) => {
            return item.active;
          });
        }
      } else {
        dateArr.forEach((item) => {
          if (item.start) {
            this.startActiveDay = item;
          }
          if (item.end) {
            this.endActiveDay = item;
          }
          if (item.middle) {
            this.middleActiveDays.push(item);
          }
        });
      }
      // dateArr = dateArr.map(item=>{
      //     item.disable=this.currenttimestamp>item.timestamp
      //     return item
      // })
      this.dateArr = dateArr;
      this.months.push(dateArr);
      console.log(this.months);
    },
    // 获取对应的月份的第一天是星期几
    getfirstDate(my_year, my_month, my_day) {
      let startWeek = new Date(my_year, my_month - 1, my_day).getDay();
      return startWeek;
    },
    // 获取对应月份的天数
    getmonthDay(my_year, my_month) {
      return new Date(my_year, my_month, 0).getDate();
    },
    // 获得相对应的月份对象数组
    getmontharr(startWeek, monthDays, month, year, myDay, isend) {
      let dateArr = [];
      let arrLen = startWeek + monthDays;
      let obj = {};
      let num = "";
      isone = false; // 只执行一次
      for (let i = 0; i < arrLen; i++) {
        if (i >= startWeek) {
          num = i - startWeek + 1;
          let r = num > 9 ? num : "0" + num;
          let m = month > 9 ? month : "0" + month;
          let timestamp = new Date(year, month, num, 22, 19, 35).getTime();
          // 如果上一个月是最后一天需要这个月的显示需要特殊处理
          let end = false;
          let middle = false;
          if (this.specialEndTime) {
            if (
              this.currentFullYear != year ||
              this.currentMonth + 1 == month
            ) {
              console.log(gatmiddle);
              // 需要判断 当前天数 及当前月份总天数
              middle = this.type == 2 && !this.isreset && 1 + gatmiddle > num; // 跨月选中状态
              end = this.type == 2 && !this.isreset && 1 + gatmiddle == num;
            }
            // if (this.currentFullYear!=year) {
            //   // console.log(this.currentFullYear)
            //   // console.log(year)
            //   middle = this.type == 2 && !this.isreset && 1 + gatmiddle > num; // 跨月选中状态
            //   end = this.type == 2 && !this.isreset && 1 + gatmiddle == num;
            // }
          } else {
            if (this.middleNum != 0) {
              end = false;
              if (this.currentMonth == month) {
                // 是当前月
                if (!isone) {
                  isone = true;
                  let g = monthDays - myDay;
                  gatmiddle = gatmiddle - g;
                }
                if (monthDays >= myDay + this.middleNum) {
                  //  console.log(myDay)
                  //  console.log(myDay+this.middleNum  )
                  middle =
                    this.type == 2 &&
                    myDay + this.middleNum + 1 > num &&
                    myDay < num;
                  end = this.type == 2 && myDay + this.middleNum + 1 == num;
                } else {
                  middle =
                    this.type == 2 &&
                    myDay + (this.middleNum - gatmiddle) + 1 > num &&
                    myDay < num;
                }
              }
            } else {
              end = this.type == 2 && myDay + 1 == num;
            }
          }
          obj = {
            isToday: "" + year + "-" + m + "-" + r,
            dateNum: num,
            month: month,
            year: year,
            weight: 5,
            timestamp: timestamp,
            ishei: false,
            start: this.type == 2 && myDay == num,
            end: end,
            active: this.type == 1 && !this.activeDay && myDay == num,
            index: i,
            disable: 11 == num || 20 == num ? true : false,
            middle: middle,
          };
        } else {
          obj = {
            timestamp: 0,
            month: month,
            year: year,
            index: i,
          };
        }
        dateArr[i] = obj;
      }
      return dateArr;
    },
    // 点击事件
    cli1(e, index) {
      // 单选
      console.log(e);
      console.log(index);
      let isStart = false;
      if (e.disable) return;
      if (this.type == 1) {
        console.log(this.activeDay);
        this.activeDay.active = false;
        this.months[index][e.index].active = true;
        this.activeDay = this.months[index][e.index];
      } else if (this.type == 2) {
        // console.log(this.startActiveDay)
        // console.log(this.endActiveDay)
        // console.log(this.middleActiveDays)
        this.isreset = true;
        // 开始及结束
        if (
          (this.startActiveDay && this.endActiveDay) ||
          this.startActiveDay.timestamp >
            this.months[index][e.index].timestamp ||
          (!this.startActiveDay && !this.endActiveDay)
        ) {
          console.log("start");
          this.setStartDay(e, index);
          isStart = true;
        }
        if (this.startActiveDay && !this.endActiveDay && !isStart) {
          console.log("设置结束日期");
          // 设置结束日期
          this.setEndDay(e, index);
        }
      }
      //
    },
    // 重置
    resetDate() {
      if (this.startActiveDay) {
        this.startActiveDay.start = false;
      }
      if (this.endActiveDay) {
        this.endActiveDay.end = false;
      }
      this.middleActiveDays.map((item) => {
        return (item.middle = false);
      });
    },
    // 设置start
    setStartDay(e, index) {
      this.resetDate();
      this.startActiveMonthIndex = index;
      console.log(this.months[index][e.index]);
      this.months[index][e.index].start = true;
      this.startActiveDay = this.months[index][e.index];
      this.endActiveDay = null;
      this.middleActiveDays = [];
    },
    // 设置end
    setEndDay(e, index) {
      if (this.startActiveDay.timestamp == e.timestamp) {
        this.startActiveMonthIndex = "";
        this.months[index][e.index].start = false;
        this.startActiveDay = "";
        return;
      } else {
        this.endActiveMonthIndex = index;
        this.months[index][e.index].end = true;
        this.endActiveDay = this.months[index][e.index];
      }
      this.setMiddleDays();
      // 判断是否有不能选的日期
      let g = this.middleActiveDays.find((item) => item.disable);
      console.log(g);
      if (g) {
        this.resetEnd();
        this.months[index][e.index].end = false;
      }
      console.log(this.middleActiveDays);
      console.log(this.effectiveDays());
      console.log(this.Maxactive - 2);
      if (this.effectiveDays() > this.Maxactive - 2) {
        this.resetEnd(1);
        this.months[index][e.index].end = false;
        console.log("不得超过15天");
      }
    },
    // 设置了middle
    setMiddleDays() {
      if (this.endActiveMonthIndex == this.startActiveMonthIndex) {
        // 没有跨月
        let currentArr = this.months[this.startActiveMonthIndex];
        for (
          let i = this.startActiveDay.index + 1;
          i < this.endActiveDay.index;
          i++
        ) {
          currentArr[i].middle = true;
          this.middleActiveDays.push(currentArr[i]);
        }
      } else {
        // 跨月了
        //  console.log(this.months[])
        let startmonth = this.months[this.startActiveMonthIndex];
        let endmonth = this.months[this.endActiveMonthIndex];
        if (this.endActiveMonthIndex - this.startActiveMonthIndex == 1) {
          // 跨一个月
          for (
            let i = this.startActiveDay.index + 1;
            i < startmonth.length;
            i++
          ) {
            // 开始
            startmonth[i].middle = true;
            this.middleActiveDays.push(startmonth[i]);
          }
          for (let i = 0; i < this.endActiveDay.index; i++) {
            // 结束
            endmonth[i].middle = true;
            this.middleActiveDays.push(endmonth[i]);
          }
          console.log(startmonth);
          console.log(endmonth);
        } else {
          // 跨多个月份
          for (
            let h = this.startActiveMonthIndex;
            h < this.endActiveMonthIndex;
            h++
          ) {
            if ((h = this.startActiveMonthIndex)) {
              for (
                let i = this.startActiveDay.index;
                i < startmonth.length;
                i++
              ) {
                // 开始
                startmonth[i].middle = true;
                this.middleActiveDays.push(startmonth[i]);
              }
            } else if (h == this.endActiveMonthIndex) {
              for (let i = 0; i < this.endActiveDay.index; i++) {
                // 结束
                endmonth[i].middle = true;
                this.middleActiveDays.push(endmonth[i]);
              }
            } else {
              // 中间月份
              for (let i = 0; i < this.months[h].length; i++) {
                // 结束
                this.months[h][i].middle = true;
                this.middleActiveDays.push(this.months[h][i]);
              }
            }
          }
        }
      }
      return true;
    },
    // 超过限制需要重置选择的结束状态
    resetEnd(num) {
      if (num == 1) {
        Toast(`预约不能超过${this.Maxactive}天`);
      } else {
        Toast("不能选择");
      }
      this.middleActiveDays.forEach((item) => {
        item.middle = false;
      });
      this.middleActiveDays = [];
      this.endActiveDay = "";
    },
    // 有效天数
    effectiveDays() {
      return this.middleActiveDays.filter((item) => {
        return item.timestamp != 0;
      }).length;
    },
    // onLoad
    onLoad() {
      console.log("加载了");
      console.log(this.Month);
      console.log(this.FullYear);
      this.loading = false;
      let FullYear = this.FullYear;
      let Month = this.Month;
      if (this.months.length >= 3) {
        Toast("最多可预定3个月内的产品");
        this.loading = false;
        this.finished = true;
        return;
      }
      if (Month >= 12) {
        this.FullYear = FullYear + 1;
        this.Month = 1;
      } else {
        this.Month = Month + 1;
      }
      this.initCalender(this.FullYear, this.Month);
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "@/theme/color.scss";

.title {
  color: #2f2f2f;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-top: 16px;
}
.week {
  display: flex;
  width: 350px;
  margin: 0 auto;
  background-color: rgba(255, 188, 0, 0.25);
  line-height: 33px;
  border-radius: 4px;
  margin-top: 15px;
  div {
    // width: 50px;
    flex: 1;
    text-align: center;
    color: #2f2f2f;
    font-size: 16px;
    font-weight: 600;
  }
}
.calender-list {
  width: 350px;
  margin: 0 auto;
  height: 100%;
  overflow: auto;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/h5_image/bj_img%402x.png);
}
.v1 {
  display: inline-block;
  width: 50px;
  //   text-align: center;
  //   height: 50px;
  //   line-height: 50px;
  //   position: relative;
}
.v2 {
  display: inline-block;
  width: 50px;
  text-align: center;
  height: 50px;
  //   line-height: 50px;
  padding-top: 5px;
  position: relative;
}
.q {
  font-size: 10px;
  color: #ffa600;
  position: absolute;
  bottom: 5px;
  height: 20px;
  line-height: 20px;
  width: 100%;
  text-align: center;
  right: 0;
}
.f1 {
  font-size: 10px;
  color: #ff3323;
  text-align: center;
}
.active {
  background-color: #ffbc00;
  color: #fff;
  border-radius: 50%;
  .q {
    color: #fff;
  }
}
.disable {
  color: #cac8c5;
  .q {
    color: #cac8c5;
  }
}
.h1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.months-title {
  text-align: center;
  font-size: 22px;
  color: #2f2f2f;
  margin-top: 20px;
}
.startactive {
  background-color: #ffbc00;
  color: #fff;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  .q {
    color: #fff;
  }
}
.endactive {
  background-color: #ffbc00;
  color: #fff;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  .q {
    color: #fff;
  }
}
.middle {
  background-color: #ffbc00;
  color: #fff;
  .q {
    color: #fff;
  }
}
.hidden {
  visibility: hidden;
}
</style>