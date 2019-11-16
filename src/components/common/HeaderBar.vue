<template>
  <div v-on:click="showBag">
    <div class="adcontent">
      <div class="ad">&lt; 广告 &gt;</div>
    </div>
    <div class="content">
      <div class="headbar">
        <ul class="header-list">
          <li class="header-item head-apple">
            <router-link to="/">
              <i class="icon iconfont icon-iconfontapple"></i>

            </router-link>
          </li>
          <li class="header-item head-mac">
            <router-link to=""></router-link>
          </li>
          <li class="header-item head-ipad">
            <router-link to="/type" @mouseenter.native="on" >车型</router-link>
          </li>
          <li class="header-item head-iphone">
            <router-link to=""></router-link>
          </li>
          <li class="header-item head-watch">
            <router-link to="/News">新闻</router-link>
          </li>
          <li class="header-item head-music">
            <router-link to=""></router-link>
          </li>
          <li class="header-item head-watch">
            <router-link to="/support">售后</router-link>
          </li>
          <li class="header-item head-search">
            <router-link to="">
              <i class="icon iconfont icon-fangdajing"></i>
            </router-link>
          </li>
          <li class="header-item head-bag" >
            <router-link to="">
              <i class="icon iconfont icon-bag-copy"></i>
            </router-link>
          </li>
		    </ul>
        
      </div>
    </div>
    <div class="content1" v-if="seen"  @mouseenter="on" @mouseleave="over"  >
      <router-link to="/js/high" class="icontp" @click.native="dj">
        <h2 class="xbt">豪华</h2>
        <img :src="imghigh" class="cimg"/><br/>
      </router-link>
      <router-link to="/js/sport" class="icontp" @click.native="dj">
        <h2 class="xbt">高性能</h2>
        <img :src="imgrun" class="cimg"/><br/>
      </router-link>
      <router-link to="/js/suv" class="icontp" @click.native="dj">
        <h2 class="xbt">SUV</h2>
        <img :src="imgsuv" class="cimg"/><br/>
      </router-link>
      <router-link to="/js/ete" class="icontp" @click.native="dj">
        <h2 class="xbt">新能源</h2>
        <img :src="imge" class="cimg"/><br/>
      </router-link>
      </div>
    <div class="bagview" id="bag">
      <div class="bag-content">
        <p class="bag-message-empty">你的购物袋是空的</p>
        <nav class="bagview-nav">
          <ul class="bagview-nav-list">
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">购物袋</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">收藏</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">订单</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">账户</a>
            </li>
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">登录</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      seen:false,

      imghigh:require("../../../src/assets/icon/high_icon.png"),
      imgrun:require("../../../src/assets/icon/run_icon.jpg"),
      imgsuv:require("../../../src/assets/icon/suv_icon.png"),
      imge:require("../../../src/assets/icon/e_icon.png"),
    }
  },
  methods: {
    showBag(v) {
      // console.log(v);
      var bag = document.getElementById("bag");
      if (v.target.className == "icon iconfont icon-bag-copy") {
        bag.style.display = "block";
      } else {
        bag.style.display = "none";
      }
    },
    on(){
      this.seen = true;

    },
    dj(){
      window.location.reload();
    },
    over(){
      this.seen = false;

    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.cimg{
  margin-top: 3px;
}
.icontp{
  text-decoration:none;
  font-size: 10px;
  float: left;
  margin-left: 220px;
  margin-top: 10px;
}
.adcontent {
  width: 100%;
  height: 40px;
  background: #444;
}
.xbt{
  color:rgb(0, 0, 0);
  margin-top: 3px;
  margin-left: 26px;
  font-style: normal;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.btext{
  height: 70px;
  width: 120px;
  color:rgb(0, 0, 0);
  font-size: 2px;
  /* border-style:solid;
	border-color:red; */
}
.ad {
  width: 976px;
  height: 40px;
  margin: auto;
  font-size: 10px;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 150;
  color: #a8a8aa;
  text-align: right;
  line-height: 40px;
  font-style: normal;
}
.content {
  width: 100%;
  height: 108px;
  background: rgba(0, 0, 0, 0.8);
}
.content1 {
  width: 100%;
  height: 100px;
  background: #f7f5f6;
}
.headbar {
  width: 1000px;
  height: 44px;
  margin: auto;
}
.header-list {
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  height: 44px;
  position: absolute;
  cursor: pointer;
  list-style: none;
  width: auto;
  color: white;
  font-size: 13px;
  font-weight: 100;
}
.header-item {
  height: 44px;
  margin-left: 64px;
  display: inline-block;
  vertical-align: top;
  opacity: 1;
}
.header-item a {
  text-decoration: none;
  width: 40px;
  height: 44px;
  color: #fff;
  padding: 0 10px;
  line-height: 44px;
  text-align: center;
  font-size: 13px;
}
.header-item :hover {
  opacity: 0.65;
}
.head-apple {
  margin-left: 0;
  width: 40px;
}
.icon-iconfontapple {
  font-size: 19px;
}
.head-mac {
  width: 48px;
}
.head-ipad {
  width: 46.98px;
}
.head-iphone {
  width: 64px;
}
.head-watch {
  width: 59.98px;
}
.head-music {
  width: 57px;
}
.head-support {
  width: 65.98px;
  font-size: 11px;
}
.head-search {
  width: 36px;
}
.head-bag {
  width: 34px;
}
.icon-bag-copy {
  font-size: 6px;
}
/* 购物袋的样式 */
.bagview {
  width: 288px;
  height: 309px;
  box-sizing: content-box;
  border: 1px solid #d6d6d6;
  border-radius: 2px;
  background: white;
  opacity: 1;
  z-index: 9;
  position: absolute;
  margin-left: 1060px;
  margin-top: 4px;
  display: none;
}
.bagview::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background: white;
  border-top: 1px solid #d6d6d6;
  border-left: 1px solid #d6d6d6;
  opacity: 1;
  z-index: 9;
  transform: rotate(45deg);
  margin-left: 135px;
  margin-top: -7px;
}
.bag-content {
  margin: 0 auto;
  min-height: 90px;
  padding: 0 20px;
  position: relative;
  z-index: 2;
  font-size: 13px;
}
.bag-message-empty {
  color: #888;
  padding: 35px 0;
  margin: 0;
  text-align: center;
  letter-spacing: normal;
  font-weight: 300;
  font-family: inherit;
}
.bagview-nav {
  margin-bottom: 2px;
  width: 248px;
  height: 220px;
  margin: 0 auto;
  box-sizing: content-box;
}
.bagview-nav-list {
  list-style: none;
  border-top: 1px solid #e3e3e3;
}
.bagview-nav-item {
  margin: 0;
  padding: 0;
  border-top: 1px solid #e3e3e3;
}
.bagview-nav-item:first-child {
  border-top-style: none;
}
.bagview-nav-link {
  color: #0688f3;
  display: block;
  line-height: 43px;
  padding: 0 30px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* font-weight: 300; */
}
.bagview-nav-link:hover {
  text-decoration: underline;
}
</style>


