<template>
  <div class="body">
    <header-bar></header-bar>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
              <img class='swiper-img' :src='item.imgUrl' alt="banner" />
              <div class='imgTest'>{{item.text}}</div>
              <div class='imgTest2'>{{item.text2}}</div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    <div class="foot">
      <ul class="ads">
        <div class="ads-0" >
          <div class="ads-0-1" >
            <div class="appointment-0"><img :src="fxp2" class="appointment-0-img"/></div>
            <div class="appointment-1">预约试驾</div>
            <div class="appointment-2">纵享非凡驾趣体验</div>
            <div class="appointment-3">
              <button class="appointment" @click="gotoMap" >即刻预约</button>
            </div>
          </div>
        </div>
        <li class="ads-2">
          <div class="ads-wrapper">
            <h4 class="logo-title ads-2-title">
              <div class="logo-title-font">
                耐用
              </div>
            </h4>
            <h5 class="logo-subheader ads-2-font">持之以恒</h5>
          </div>
          <div class="ads-2-img">
            <img :src="img6" class="fourimg">
          </div>
        </li>
        <li class="ads-3">
          <div class="ads-wrapper">
            <h4 class="logo-title ads-3-title">
              <div class="logo-title-font">
                科技
              </div>
            </h4>
            <h5 class="logo-subheader ads-3-font">照亮回家路</h5>
          </div>
          <div class="ads-3-img" >
            <img :src="img10" class="fourimg">
          </div>
        </li>
        <li class="ads-4">
          <div class="ads-4-wrapper">
            <h4 class="logo-4-title">
              舒适
            </h4>
            <h5 class="logo-subheader logo-4-info">豪华驾乘体验</h5>
          </div>
          <div class="ads-4-img">
            <img :src="img9" class="fourimg">
          </div>
        </li>
        <li class="ads-5">
          <div class="ads-5-wrapper">
            <h4 class="logo-title logo-5-title">运动</h4>
            <h5 class="logo-subheader logo-4-info">“基因”与生俱来</h5>
          </div>
          <div class="ads-5-img">
            <img :src="img7" class="fourimg">
          </div>
        </li>
      </ul>
    </div>
    <footer-info></footer-info>
  </div>
  
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
import Vue from 'vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      img6:require("../../../src/assets/luhu3.jpg"),
      img7:require("../../../src/assets/bsj1.jpg"),
      img8:require("../../../src/assets/rs3.jpg"),
      img9:require("../../../src/assets/lz3.jpg"),
      img10:require("../../../src/assets/aodi2.jpg"),
      fxp2:require("../../../src/assets/fxp2.jpg"),
      major: [],
      ads: [],
      swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          centeredSlides: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          //设置宽度为全屏  
          width: window.innerWidth,
          //窗口缩放时设置width
          on: {
            resize: function(){
              this.params.width = window.innerWidth;
              this.update();
            },
          } ,
          height:200,
          //每张播放时长3秒，自动播放
          autoplay:{
            delay:3000
          },
          //滑动速度
          speed:500,
          // delay:1000
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }, 
        swiperList:[
                {
                    id:'001',
                    imgUrl:require("../../../src/assets/luhu2.jpg"),
                    text:'非凡驾驭',
                    text2:'全新出品DEFENDER',
                },
                {
                    id:'002',
                    imgUrl:require("../../../src/assets/luhu1.jpg"),
                    text:'艺揽胜境',
                    text2:'智能高科技豪华全地形SUV',
                },
                {
                    id:'003',
                    imgUrl:require("../../../src/assets/luhu3.jpg"),
                    text:'势如暴风',
                    text2:'越野家族的前卫车型',
                }
            ]
    };
  },
  computed: {
      swiper() {
        //return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false)
    },
  components: {
    footerInfo,
    headerBar,
    swiper,
    swiperSlide
  },
  methods: {
    hello($event) {
      console.log(`hello index: ${$event}`)
    },
    gotoMap(){
      this.$router.push({path: '/map'})

    }
  },
};
</script>
<style scoped>
.imgTest{
  position:absolute;
  width:260px;
  height:100px;
  border-right: 1px solid ghostwhite;
  /* z-indent:2; */
  left:100px;
  top:600px;
  font-size:55px;
  color:ghostwhite;
  padding-bottom: 50px;
}
.imgTest2{
  position:absolute;
  width:280px;
  height:100px;
  line-height: 100px;
  /* z-indent:2; */
  left:390px;
  top:600px;
  font-size:25px;
  color:ghostwhite;
}
.ads-0-1{
  margin:0 auto;
  width:300px; 
  height:230px;
}
.appointment-0{
  margin: 0 auto 10px;
  text-align:center;
  margin-top:15px
}
.appointment-0-img{
  background-size: contain!important;
  width:43px;
  height:43px
}
.appointment-1{
  text-align:center;
  font-family:华文细黑;
  font-size: 42px;
  color: #333;
  letter-spacing: -.02em
}
.appointment-2{
  text-align:center;
  margin: 0 auto;
  font-size: 18px;
  line-height: 2;
  color: #333;
  letter-spacing: -.02em
}
.appointment-3{
  margin: 0 auto;
  text-align:center
}
.fourimg{
  width: auto;  
  height: auto;  
  max-width: 100%;  
  max-height: 100%; 
}
.headline {
  text-align: center;
  font-size: 56px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.07143;
  letter-spacing: -0.005em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.subheadline {
  text-align: center;
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0.008em;
  line-height: 1.14815;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.major-0 {
  cursor: pointer;
  width: 100%;
  height: 692px;
  margin-top: 0;
  background: #fafafa;
  position: relative;
  border-bottom: 12px solid #fff;
}
.major-0-wrapper {
  padding-top: 117px;
}
.major-0-img {
  margin-top: 315px;
}

.iphoneX {
  position: absolute;
  left: calc(50% - 491px);
  top: 315px;
}

.major-1 {
  cursor: pointer;
  width: 100%;
  background: #f9f0eb;
  height: 692px;
  position: relative;
  border-bottom: 12px solid #fff;
}
.major-1-wrapper {
  padding-top: 55px;
}
.iphone8 {
  bottom: 0;
  position: absolute;
  width: 673px;
  height: 505px;
  left: calc(50% - 337px);
}

.major-2 {
  cursor: pointer;
  height: 740px;
  background: #fafafa;
  position: relative;
  overflow: hidden;
}
.major-2-wrapper {
  padding-top: 55px;
}
.now {
  font-size: 25px;
}
.choosenow {
  position: absolute;
  left: calc(50% - 423px);
  bottom: -273px;
}

.ads {
  width: 100%;
  display: inline-block;
  list-style: none;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-left: 6px solid #fff;
  border-right: 6px solid #fff;
  border-top: 6px solid #fff;
  box-sizing: border-box;
  padding: 0;
}
.ads li {
  cursor: pointer;
  width: 50%;
  height: 592px;
  float: left;
  border: 6px solid #fff;

  box-sizing: border-box;
  overflow: hidden;
}
.ads-0 {
  /* position: relative; */
  height: 250px;
  width: 100%;
  background-color: #f2f1f0;
  margin: 0;
  padding:0;
  padding-top: 10px;
}
.appointment{
  width:120px;
  height:40px;
  border:1px solid black;
  background-color:#0C2340;
  line-height:40px;
  color:white;
  text-rendering: auto;
  letter-spacing: normal;
  margin-top:16px

}
.ads-wrapper {
  position: absolute;
  z-index: 2;
  text-align: center;
  width: 100%;
  height: 140px;
}
.logo-title {
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 90px;
  font-size: 40px;
}
.logo-image {
  text-align: center;
  margin-top: 57px;
  width: 129px;
  height: 33px;
  bottom: 0;
  z-index: 3;
}
.logo-subheader {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 19px;
  color: #fff;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
}
.ads-0-img,
.ads-1-img {
  position: absolute;
  left: calc(50% - 631px);
  z-index: 1;
}
.ads-1 {
  position: relative;
}
.ads-2 {
  position: relative;
  background: #fafafa;
}
.ads-2-font {
  color: #333;
}
.logo-title-font {
  margin-top: 52px;
  height: 44px;
  bottom: 0;
}
.ads-2-title {
  height: 44px;
}
.ads-2-img {
  position: absolute;
  top: calc(50% - 73px);
  left: calc(50% - 255px);
  height: 560px;
}
.ads-3 {
  position: relative;
  background: rgb(0, 0, 0);
}
.ads-3-title {
  height: 44px;
  color: #fff;
  line-height: 44px;
}
.ads-3-font {
  font-weight: 150;
  font-size: 18px;
  margin-top: 4px;
}
.ads-3-img {
  position: absolute;
  bottom: 0;
  height: 300px;
}
.ads-4 {
  position: relative;
  background: #fafafa;
}
.logo-4-title {
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 111px;
  font-size: 40px;
  text-align: center;
}
.logo-4-image {
  width: 142px;
  height: 54px;
  text-align: center;
}
.logo-4-info {
  color: #333;
  text-align: center;
  font-weight: 300;
}
.ads-4-img {
  position: absolute;
  margin-top: 65px;
  left: calc(50% - 293px);
}
.ads-5 {
  position: relative;
}
.ads-5-wrapper {
  margin-top: 0;
  margin-bottom: 0;
  width: 100%;
  height: 140px;
  font-size: 40px;
  text-align: center;
  padding-top: 52px;
}
.logo-5-title {
  margin: auto;
  font-size: 38px;
  width: 430px;
  height: 88px;
  color: #111;
  line-height: 44px;
}
.ads-5-img {
  position: absolute;
  top: calc(50% - -12px);

}
</style>



