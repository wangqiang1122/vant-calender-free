<template>
  <div class="twister">
    <div :style="configCss" class="twisterc">
      <div class="jiqi">
        <div class="k1" ref="k1">
          <div class="q1 publickcss" 
           :class="{ q1animation: isanimation }"
          ref="q1"></div>
          <div class="q2 publickcss" ref="q2"
           :class="{ q2animation: isanimation }"
          ></div>
          <div class="q3 publickcss" 
           :class="{ q3animation: isanimation }"
          ref="q3"></div>
          <div class="q4 publickcss" 
           :class="{ q4animation: isanimation }"
          ref="q4"></div>
          <div class="q5 publickcss" 
          :class="{ q5animation: isanimation }"
          ref="q5"></div>
          <div class="q6 publickcss" 
          :class="{ q6animation: isanimation }"
          ref="q6"></div>
          <div class="q7 publickcss" 
          :class="{ q7animation: isanimation }"
          ref="q7"></div>
          <div class="q8 publickcss" 
          :class="{ q8animation: isanimation }"
          ref="q8"></div>
          <div class="q9 publickcss" 
           :class="{ q9animation: isanimation }"
          ref="q9"></div>
          <div class="q10 publickcss" 
           :class="{ q10animation: isanimation }"
          ref="q10"></div>
          <div class="q11 publickcss" ref="q11"
           :class="{ q10animation: isanimation }"
          ></div>
          <div
            class="q12 publickcss"
            :class="{ q12animation: isanimation }"
            ref="q12"
          ></div>
          <div class="q13 publickcss" 
          :class="{ q13animation: isanimation }"
          ref="q13"></div>
          <div class="q14 publickcss" 
           :class="{ q14animation: isanimation }"
          ref="q14"></div>
        </div>
      </div>
      <div class='btn1' @click="btncli">
        <img  ref='img1' :class="{ btnactive: btnactive, factive: !btnactive }"
         src="https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/btn_bulu%402x.png" alt="">
      </div>
    </div>
    <popup></popup>
  </div>
</template>

<script>
let num=0;
export default {
  data: function () {
    return {
      configCss: {
        "background-image": `url(https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/beijing1.jpg)`,
      },
      isanimation: false,
      btnactive: false,
    };
  },
  mounted: function () {
    let obj = this.getqiu();
    console.log(obj);
    this.anmeiL(obj);
    // setTimeout(() => {
    //   this.isanimation = true;
    //   setTimeout(() => {
    //     this.isanimation = false;
    //   }, 6000);
    // }, 2000);
  },
  methods: {
    // 获取球的定位
    getqiu: function () {
      let obj = {};
      for (var a = 1; a < 15; a++) {
        var g = `document.defaultView.getComputedStyle(this.$refs.q${a},null).transform`;
        var j = eval(g);
        obj["q" + a] = {
          x: parseFloat(j.substring(7).split(",")[4]),
          y: parseFloat(j.substring(7).split(",")[5]),
        };
      }
      return obj;
    },
    //
    anmeiL: function (obj) {
      var style = document.styleSheets[0];
      let k = {
        w: this.$refs.k1.offsetWidth,
        h: this.$refs.k1.offsetHeight,
      };
      console.log(k)
      let g = {
        w: this.$refs.q1.offsetWidth,
        h: this.$refs.q1.offsetHeight,
      };
      this.setinsertRule({
        name: "q2",
        one: {
          x: `${obj.q2.x}px`,
          y: `${obj.q2.y}px`,
        },
        two: {
          x: `${g.w/2}px`,
          y: `${0}px`,
        },
        three: {
          x: `120px`,
          y: `114px`,
        },
        four: {
          x: `-${g.w}px`,
          y: `${g.w}px`,
        },
      });
      this.setinsertRule({
        name: "q3",
        one: {
          x: `${obj.q3.x}px`,
          y: `${obj.q3.y}px`,
        },
        two: {
          x: `-${this.getvw(107)}vw`,
          y: `${this.getvw(86)}vw`,
        },
        three: {
          x: `${this.getvw(-30)}vw`,
          y: `${this.getvw(0)}vw`,
        },
        four: {
          x: `${this.getvw(60)}vw`,
          y: `${this.getvw(95)}vw`,
        },
      });
      this.setinsertRule({
        name: "q4",
        one: {
          x: `${obj.q4.x}px`,
          y: `${obj.q4.y}px`,
        },
        two: {
          x: `${this.getvw(-80)}vw`,
          y: `${this.getvw(0)}vw`,
        },
        three: {
          x: `${this.getvw(-100)}vw`,
          y: `${this.getvw(220)}vw`,
        },
        four: {
          x: `${this.getvw(-180)}vw`,
          y: `${this.getvw(-10)}vw`,
        },
      });
      this.setinsertRule({
        name: "q5",
        one: {
          x: `${obj.q5.x}px`,
          y: `${obj.q5.y}px`,
        },
        two: {
          x: `${this.getvw(210)}vw`,
          y: `${this.getvw(10)}vw`,
        },
        three: {
          x: `${this.getvw(130)}vw`,
          y: `${this.getvw(155)}vw`,
        },
        four: {
          x: `${this.getvw(100)}vw`,
          y: `${this.getvw(-70)}vw`,
        },
      });
      this.setinsertRule({
        name: "q6",
        one: {
          x: `${obj.q6.x}px`,
          y: `${obj.q6.y}px`,
        },
        two: {
          x: `${this.getvw(-70)}vw`,
          y: `${this.getvw(30)}vw`,
        },
        three: {
          x: `${this.getvw(142)}vw`,
          y: `${this.getvw(55)}vw`,
        },
        four: {
          x: `${this.getvw(65)}vw`,
          y: `${this.getvw(150)}vw`,
        },
      });
      this.setinsertRule({
        name: "q7",
        one: {
          x: `${obj.q7.x}px`,
          y: `${obj.q7.y}px`,
        },
        two: {
          x: `${this.getvw(80)}vw`,
          y: `${this.getvw(0)}vw`,
        },
        three: {
          x: `${this.getvw(-155)}vw`,
          y: `${this.getvw(-55)}vw`,
        },
        four: {
          x: `${this.getvw(-95)}vw`,
          y: `${this.getvw(150)}vw`,
        },
      });
      this.setinsertRule({
        name: "q8",
        one: {
          x: `${obj.q8.x}px`,
          y: `${obj.q8.y}px`,
        },
        two: {
          x: `${this.getvw(6)}vw`,
          y: `${this.getvw(8)}vw`,
        },
        three: {
          x: `${this.getvw(-147)}vw`,
          y: `${this.getvw(-36)}vw`,
        },
        four: {
          x: `${this.getvw(-90)}vw`,
          y: `${this.getvw(115)}vw`,
        },
      });
      this.setinsertRule({
        name: "q9",
        one: {
          x: `${obj.q9.x}px`,
          y: `${obj.q9.y}px`,
        },
        two: {
          x: `${this.getvw(90)}vw`,
          y: `${this.getvw(-100)}vw`,
        },
        three: {
          x: `${this.getvw(86)}vw`,
          y: `${this.getvw(62)}vw`,
        },
        four: {
          x: `${this.getvw(15)}vw`,
          y: `${this.getvw(-90)}vw`,
        },
      });
      this.setinsertRule({
        name: "q10",
        one: {
          x: `${obj.q10.x}px`,
          y: `${obj.q10.y}px`,
        },
        two: {
          x: `${this.getvw(20)}vw`,
          y: `${this.getvw(-110)}vw`,
        },
        three: {
          x: `${this.getvw(110)}vw`,
          y: `${this.getvw(-30)}vw`,
        },
        four: {
          x: `${this.getvw(35)}vw`,
          y: `${this.getvw(63)}vw`,
        },
      });
      this.setinsertRule({
        name: "q11",
        one: {
          x: `${obj.q11.x}px`,
          y: `${obj.q11.y}px`,
        },
        two: {
          x: `${this.getvw(-5)}vw`,
          y: `${this.getvw(-105)}vw`,
        },
        three: {
          x: `${this.getvw(60)}vw`,
          y: `${this.getvw(-45)}vw`,
        },
        four: {
          x: `${this.getvw(-95)}vw`,
          y: `${this.getvw(50)}vw`,
        },
      });
      this.setinsertRule({
        name: "q13",
        one: {
          x: `${obj.q13.x}px`,
          y: `${obj.q13.y}px`,
        },
        two: {
          x: `${this.getvw(0)}vw`,
          y: `${this.getvw(-80)}vw`,
        },
        three: {
          x: `${this.getvw(60)}vw`,
          y: `${this.getvw(-160)}vw`,
        },
        four: {
          x: `${this.getvw(70)}vw`,
          y: `${this.getvw(10)}vw`,
        },
      });
      this.setinsertRule({
        name: "q14",
        one: {
          x: `${obj.q14x}px`,
          y: `${obj.q14.y}px`,
        },
        two: {
          x: `${this.getvw(110)}vw`,
          y: `${this.getvw(-95)}vw`,
        },
        three: {
          x: `${this.getvw(-53)}vw`,
          y: `${this.getvw(-70)}vw`,
        },
        four: {
          x: `${this.getvw(104)}vw`,
          y: `${this.getvw(-4)}vw`,
        },
      });
    },
    setinsertRule: function (obj) {
      var style = document.styleSheets[0];
      style.insertRule(
        `
 @keyframes ${obj.name} {
       0% { transform:translate(${obj.one.x},${obj.one.y})  } 
       30% { transform:translate(${obj.two.x},${obj.two.y}) }
       45% { transform:translate(${obj.three.x},${obj.three.y}) }
       80% { transform:translate(${obj.four.x},${obj.four.y}) }
       100% { transform:translate(${obj.one.x},${obj.one.y}) }
    } 
    `,
        num+1
      );
      style.insertRule(
        `
 @-webkit-keyframes  ${obj.name} {
       0% { -webkit-c:translate(${obj.one.x},${obj.one.y})  } 
       30% { -webkit-transform:translate(${obj.two.x},${obj.two.y}) }
       45% { -webkit-transform:translate(${obj.three.x},${obj.three.y})) }
       80% { -webkit-transform:translate(${obj.four.x},${obj.four.y}) }
       100% { -webkit-transform:translate(${obj.one.x},${obj.one.y}) }
    } 
    `,
       num+2
      );
      num++
    },
    // 计算vw
    getvw: function(num) {
       return num/375*100
    },
    // 点击方法
    btncli: function() {
      this.btnactive = true
      setTimeout(()=>{
        this.isanimation = true;
        this.btnactive = false;
        setTimeout(()=>{
           this.isanimation = false;
        },3000)
      },100)
    }
  },
};
</script>

<style lang="scss" scoped>
.twisterc {
  width: 100%;
  height: 735px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
}
.jiqi {
  width: 100%;
  height: 493px;
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/jiqi3.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-top: 150px;
  position: relative;
  overflow: hidden;
  transform: translateZ(0.001);
}
.k1 {
  height: 260px;
  width: 255px;
  margin: 45px auto 0;
  border: 1px solid red;
  border-radius: 35%;
  overflow: hidden;
  div {
    float: left;
  }
}
.btn1{
  position: absolute;
  width: 178px;
  height: 48px;
  left: 95px;
  top: 485px;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    position: absolute;
    transition: transform 100ms;
  }
  .btnactive {
    transform: translateY(8px);
  }
  .factive{
    transform: translateY(0px);
  }
}

.publickcss {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  position: relative;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.q1 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/blue_2x.png");
  transform: translate(20px, 200px);
  z-index: 1;
}
.q2 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/green-2x.png");
  transform: translate(10px, 200px);
}
.q3 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/purple-2x.png");
  transform: translate(0px, 200px);
  z-index: 2;
}
.q4 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/pink-2x.png");
  transform: translate(-10px, 200px);
}
.q5 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/orange-2x.png");
  transform: translate(0px, 100px);
}
.q6 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/red_2x.png");
  transform: translate(-10px, 100px);
  z-index: 2;
}
.q7 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/taupe-2x.png");
  transform: translate(-20px, 105px);
}
.q8 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/turquoise-2x.png");
  transform: translate(-40px, 85px);
}
.q9 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/blue_2x.png");
  transform: translate(195px, 40px);
}
.q10 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/yellow_2x.png");
  transform: translate(-68px, 0px);
}
.q11 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/white_2x.png");
  transform: translate(-80px, -15px);
  z-index: 1;
}
.q12 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/green-2x.png");
  transform: translate(-90px, 0px);
}
@keyframes q12{
  0% {
     transform: translate(-90px,  0px);
  }
  25% {
     transform: translate(-62px,  -124px);
  }
  50%{
    transform: translate(0px,  0px);
  }
  75%{
    transform: translate(-124px,  72px);
  }
  100% {
     transform: translate(-90px,  0px);
  }
}
.q13 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/orange-2x.png");
  transform: translate(200px, -65px);
  z-index: 2;
}
.q14 {
  background-image: url("https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/pink-2x.png");
  transform: translate(77px, -78px);
}
.q1animation {
  animation: q1 1s linear  infinite;
}
@keyframes q1{
  0% {
     transform: translate(20px,  200px);
  }
  25% {
     transform: translate(84px,  0px);
  }
  50%{
    transform: translate(255px,  143px);
  }
  75%{
    transform: translate(32px,  10px);
  }
  100% {
     transform: translate(20px,  200px);
  }
}
.q2animation {
  animation: q2 1s linear  infinite;
}
.q3animation {
  animation: q3 1s linear  infinite;
}
.q4animation {
  animation: q4 1s linear  infinite;
}
.q5animation {
  animation: q5 1s linear  infinite;
}
.q6animation {
  animation: q6 1s linear  infinite;
}
.q7animation {
  animation: q7 1s linear  infinite;
}
.q8animation {
  animation: q8 1s linear  infinite;
}
.q9animation {
  animation: q9 1s linear  infinite;
}
.q10animation {
  animation: q10 1s linear  infinite;
}
.q11animation {
  animation: q11 1s linear  infinite;
}
.q12animation {
  animation: q12 1s linear  infinite;
}
.q13animation {
  animation: q13 1s linear  infinite;
}
.q14animation {
  animation: q14 1s linear  infinite;
}
</style>