<template>
  <div class="app">
    <!-- 顶部的导航 -->
    <header-bar></header-bar>
    <div class="hines">
      <!-- 豪华车型 -->
      <div class="section-high">
        <div class="high-content">
          <h2 class="product-headline high-headline">豪华车型</h2>
          <h3 class="product-subheadline high-subheadline">从容锐意，乐享人生</h3>
          <img :src="imgbz" class="high-img" />
          <div class="product-more">
            <router-link :to="{path:'/js/Car',query:{js:'high'}}" class="more-product-cta high-cta">了解更多</router-link>
            <!-- <div class="more-product-cta high-cta"></div> -->
          </div>
        </div>
      </div>
      <!-- 高性能 -->
      <div class="section-f1">
        <div class="f1-content">
          <h2 class="product-headline">高性能车型</h2>
          <h3 class="product-subheadline">锋芒毕露</h3>
          <div class="product-more">
            <!-- <div class="more-product-cta">了解更多</div> -->
            <router-link :to="{path:'/js/Car',query:{js:'sport'}}" class="more-product-cta">了解更多</router-link>
          </div>
          <div class="f1-img-content">
            <img :src="imgf1" class="f1-img" />
          </div>
        </div>
      </div>
      <!-- suv -->
      <div class="section-suv">
        <div class="suv-content">
          <h2 class="product-headline">SUV车型</h2>
          <h3 class="product-subheadline">无可阻挡</h3>
          <div class="product-more">
            <!-- <div class="more-product-cta">了解更多</div> -->
            <router-link :to="{path:'/js/Car',query:{js:'suv'}}" class="more-product-cta">了解更多</router-link>
          </div>
          <img :src="imgsuv" class="suv-img" />
        </div>
      </div>
      <div class="section-e">
        <div class="e-content">
          <h2 class="product-headline">新能源车型</h2>
          <h3 class="product-subheadline">进取，永无止境</h3>
          <div class="product-more">
            <!-- <div class="more-product-cta">了解更多</div> -->
            <router-link :to="{path:'/js/Car',query:{js:'ete'}}" class="more-product-cta">了解更多</router-link>
          </div>
          <div class="e-img-content">
            <img :src="imgts" class="e-img" />
          </div>
        </div>
      </div>
    </div>
    <tab-nav></tab-nav>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
import tabNav from "@/components/common/TabNav";
import headerBar from "@/components/common/HeaderBar";
export default {
  data() {
    return {
      all: {},
      headbar: [],
      machines: [],
      imgbz: require("../../assets/bcbig.jpg"),
      imgf1: require("../../assets/banzeF1.jpg"),
      imgsuv: require("../../assets/luhu2.jpg"),
      imgts: require("../../assets/tesila.jpg")
    };
  },
  components: {
    headerBar,
    footerInfo,
    tabNav
  },
  mounted: function() {
    // axios
    //   .get(
    //     "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/macData"
    //   )
    //   .then(response => {
    //     this.all = response.data;
    //     this.headbar = response.data.headbar;
    //     this.machines = response.data.machines;
    //   })
    //   .catch(error => {
    //     alert("网络错误不能访问");
    //   });
  },
  methods: {}
};
</script>
<style scoped>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
}
.app {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.product-headline {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 78px;
  line-height: 1.0625;
  font-weight: 500;
  margin-bottom: 5px;
  color: #333;
  letter-spacing: 0em;
}

/* 产品二级标题 */
.product-subheadline {
  padding-left: 0.4em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #333;
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 37px;
  line-height: 1.1;
  font-weight: 400;
  letter-spacing: 0em;
}
.product-more {
  margin-top: 19px;
  display: inline-block;
  color: #0070c9;
}
.more-product-cta {
  margin: 0 10px;
  font-size: 18px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: 0.011em;
  position: relative;
  display: inline-block;
  margin-right: 25px;
  text-decoration: none;
  color: #0070c9;
}
.more-product-cta::after {
  content: "";
  padding-left: 0.4em;
  top: 7px;
  height: 0.4em;
  margin-left: 5px;
  border-top: 0.083em solid #0070c9;
  border-right: 0.083em solid #0070c9;
  transform: rotate(45deg);
  position: absolute;
}
.section-high {
  position: relative;
  margin-top: 0;
  width: 100%;
  padding-top: 74px;
  height: 800px;
  background: #1a1a1a;
  text-align: center;
  z-index: 1;
  margin-bottom: 50px;
}
.high-content {
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  height: 100%;
}
.high-subheadline,
.high-headline {
  color: #fff;
}
.high-cta {
  font-weight: 300;
  color: #6bf;
}
.high-cta::after {
  border-color: #6bf;
}

.high-img {
  bottom: 0;
  position: absolute;
  margin-left: -666px;
  z-index: -10;
}
.section-f1 {
  position: relative;
  margin-top: 50px;
  background: #fafafa;
  width: 1350px;
  padding-top: 68px;
  height: 800px;
  color: #333;
  margin: auto;
  text-align: center;
}
.f1-img {
  position: absolute;
  left: 50%;
  margin-left: -676px;
}
.section-suv {
  position: relative;
  margin: auto;
  margin-top: 50px;
  padding-top: 68px;
  height: 655px;
  width: 1350px;
  z-index: 1;
  text-align: center;
}
.suv-img {
  position: absolute;
  z-index: -10;
  bottom: 0;
  margin-left: -780px;
}
.section-e {
  position: relative;
  margin: auto;
  margin-top: 50px;
  width: 1350px;
  text-align: center;
  height: 820px;
  padding-top: 68px;
  background: #fafafa;
}
.e-img {
  position: absolute;
  left: 50%;
  margin-left: -676px;
  margin-top: 75px;
}
/* system的样式 */
.system {
  position: relative;
  z-index: 1;
  height: 500px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  color: #fff;
}
.system-content {
  padding-top: 139px;
}
.system-img-content {
  margin: auto;
  width: 1350px;
  text-align: center;
}
/* system背景图片 */
.system-img {
  position: absolute;
  z-index: -10;
  display: block;
  bottom: 0;
}
.system-headline {
  margin: auto;
  font-size: 78px;
  margin-bottom: 6px;
  color: #fff;
  width: 980px;
  height: 85px;
}
.system-leftheadline {
  display: inline-block;
  font-weight: 500;
}
.system-rightheadline {
  font-weight: 340;
  display: inline-block;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
.system-subheadline {
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 36px;
  margin-top: 0;
  letter-spacing: 0em;
  font-weight: 400;
  margin-top: 15px;
}
.system-more {
  margin-top: 18px;
  font-weight: 300;
  display: inline-block;
}
/* system了解的样式 */
.more-system-cta,
.more-system-cta2 {
  position: relative;
  display: inline-block;
  margin-right: 24px;
}
/* system后面的伪元素 */
.more-system-cta::after {
  content: "";
  padding-left: 0.4em;
  top: 7px;
  height: 0.4em;
  margin-left: 5px;
  border-top: 0.083em solid #fff;
  border-right: 0.083em solid #fff;
  transform: rotate(45deg);
  position: absolute;
}
/* system后面箭头用伪元素实现 */
.more-system-cta2::before {
  position: absolute;
  content: "";
  width: 1px;
  height: 13px;
  top: 7px;
  background: #fff;
  left: 87px;
  transform: rotate(45deg);
}
.more-system-cta2::after {
  position: absolute;
  content: "";
  width: 8px;
  height: 8px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  right: -21px;
  top: 8px;
}
.compare {
  margin-top: 50px;
  width: 100%;
  position: relative;
}
.compare-content {
  width: 1350px;
  height: 494px;
  padding-top: 72px;
  padding-bottom: 64px;
  background: #fafafa;
  margin: auto;
  text-align: center;
}
.compare-headline {
  font-size: 46px;
}
.compare-product-cta {
  margin-left: -30px;
  font-weight: 400;
  color: #0070c9;
}
.compare-product-cta::after {
  border-color: #0070c9;
}
.compare-img {
  position: absolute;
  left: 50%;
  margin-left: -378.5px;
  margin-top: 56px;
  margin-bottom: 0px;
}
.change {
  margin-top: 50px;
  width: 100%;
  position: relative;
}
.change-content {
  width: 1350px;
  height: 204px;
  background: #fafafa;
  margin: auto;
  padding-top: 130px;
  padding-bottom: 130px;
  text-align: center;
}
.change-headline {
  font-size: 42px;
  line-height: 1.25365;
  font-weight: 450;
  letter-spacing: 0em;
  padding-left: 0.4em;
}
.change-headline sup {
  font-size: 0.4em;
}
.change-info {
  font-size: 19px;
  color: #333;
  letter-spacing: 0.011em;
  margin-top: 1.2em;
}
.shoptrip-item {
  width: 50%;
  float: left;
  text-align: center;
}
.shoptrip-icon-headline {
  font-size: 13px;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 1.38105;
  margin-bottom: 0.18421em;
  margin-top: 0.57368em;
  font-weight: 400;
  color: #111;
}
.shoptrip-copy {
  margin-top: 0.35em;
  font-size: 19px;
  line-height: 1.38105;
  font-weight: 400;
  letter-spacing: 0.011em;
}
.accessory {
  width: 100%;
  z-index: 1;
}
.accessory-content {
  width: 1359px;
  background: #fafafa;
  position: relative;
  height: 564px;
  padding-top: 84px;
  margin: auto;
  text-align: center;
  z-index: 1;
  overflow: hidden;
}
.accessory-headline {
  font-size: 44px;
  line-height: 1.08365;
  font-weight: 600;
}
.accessory-img {
  position: absolute;
  left: 50%;
  margin-left: -718.5px;
  margin-top: -23px;
  z-index: -10;
}
.more:last-child {
  margin-left: 30px;
}
.more:hover {
  border-bottom: 2px solid #0070c9;
}
.more:after {
  content: "";
  padding-left: 0.4em;
  top: 8px;
  height: 0.4em;
  margin-left: 4px;
  border-top: 0.083em solid #0070c9;
  border-right: 0.083em solid #0070c9;
  transform: rotate(45deg);
  position: absolute;
}
</style>
