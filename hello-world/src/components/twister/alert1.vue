<template>
   <div class='twisterpopup' v-show="popuopshow">
      <div class='v1' :class="{ kai: isk }" ref='v1'>   
        <div class='top1'>
            <img 
            src="https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/egg_1%402x.png" alt="">
        </div>
        <div class='bottom1'>
                        <img 
            src="https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/egg_2%402x.png" alt="">
        </div>
        <div class="g1"  :class="{
            g1active: isk
        }">
            <div class='bling'>
            </div>
            <div class='ban'>
                <div class='title'>
                    恭喜您获得
                </div>
                <div class='content'>
                    永旺27-融创文旅海盗船单向票永旺27-融创文旅海盗船单向票 永旺27-融创文旅海盗船单向票永旺27-融创文旅海盗船单向票
                </div>
            </div>
        </div>
        
      </div>
      <div class="footerbtn" v-show="isshow"></div>
      <div class='close' v-show="isshow"></div>
   </div>
</template>

<script>
export default {
    name: 'popup',
    data: function() {
        return {
            isk: false,
            isshow: false,
            gshow: false
        }
    },
    props: {
      popuopshow: false,  
    },
    mounted: function() {
        setTimeout(()=>{
            this.isk = true
            this.gshow = true
        },2000)
        console.log(this.$refs.v1)
        this.$refs.v1.addEventListener('transitionend',()=>{
            this.isshow = true
            // alert()
        })
    },

};
</script>

<style lang="scss" scoped>
  .twisterpopup{
      position: fixed;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color:rgba(0, 0, 0, 0.5);
      z-index: 9999;
  }
  .v1{
      position: relative;
      height: 150px;
      overflow: hidden;
      transition: height 1000ms;
      display: flex;
      justify-content: center;
      margin-top: 160px;
      .top1{
        position: absolute; 
        top: 0;
        z-index: 3;
      }
      .bottom1{
       position: absolute; 
       bottom: 0;
       z-index: 2;
      }
  }
  .kai {
      height: 300px;
  }
  .top1,.bottom1{
      width: 162px;
      height: 87px;
      img{
          width: 100%;
          height: 100%;
      }
  }
  .g1{
      width: 350px;
      display: flex;
      transform: scale3d(.3,.3,.3);
      align-items: center;
    //   height: 100px;
      background-size: 100% 100%;
      transition: all 1s;
      z-index: 1;
      background-repeat: no-repeat;
      background-image: url(https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/stars.png);
  }
  .g1active{
      transform: scale3d(1,1,1);
  }
  .bling{
      display: flex;
      align-items: center;
      width: 500px;
      height: 230px;
      background-size: 100% 100%;
      transform-origin: 50% 50%;
      z-index: 3;
      animation: a1 5s linear  infinite;
      background-repeat: no-repeat;
      background-image: url(https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/blingbling.png);
  }
  @keyframes a1 {
      to {
         transform: rotate(0deg); 
      }
      from {
         transform: rotate(360deg);  
      }
  }
  .ban{
      box-sizing: border-box;
      position: absolute;
      left: 64px;
      width: 215px;
      z-index: 13;
      height: 80px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-image: url(https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/%E5%88%B8%402x.png);
      .title{
          font-size: 16px;
          font-weight: 600;
          color: #2F2F2F;
          margin-top: 12px;
          text-align: center;
      }
      .content{
          color: #FF6600;
          font-size: 13px;
          text-align: center;
          padding: 0 10px;
        //   width: 100%;
          overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
      }
  }
  .footerbtn{
      width: 210px;
      height: 44px;
      background-size: 100% 100%;
      background-image: url(https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/view_btn%402x.png);
      margin: 20px auto 0;
  }
  .close{
      width: 36px;
      height: 36px;
      margin: 15px auto 0;
      background-size: 100% 100%;
      background-image: url(https://crm-dev-itrigger.oss-cn-beijing.aliyuncs.com/sunac/luckGrid/twister/close%402x.png);
  }
</style>