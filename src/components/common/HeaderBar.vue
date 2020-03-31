<template>
  <!-- <div v-on:click="showBag"> -->
  <div>
    <div class="content">
      <div class="headbar">
        <div class="header-logo">
          <img :src="imglogow" class="imglogo" />
        </div>
        <ul class="header-list">
          <li class="header-item head-models">
            <router-link to="/">首页</router-link>
          </li>
          <li class="header-item head-models">
            <router-link to="/type" @mouseenter.native="on">车型</router-link>
          </li>
          <li class="header-item head-watch">
            <router-link to="/News">新闻</router-link>
          </li>
          <li class="header-item head-watch">
            <router-link to="/support">售后</router-link>
          </li>
          <li class="header-item head-mu">
            <router-link to="/mu">关于我们</router-link>
          </li>
          <span v-if="this.username === ''" index="99">
            <li class="header-item head-registered head-xi">
              <router-link to="/login" style="font-size:12px;">登陆</router-link>
            </li>
            <li class="header-item head-registered">
              <router-link to="/Registr" style="font-size:12px;">注册</router-link>
            </li>
          </span>
          <span v-else-if="this.username != ''" index="99">
            <el-dropdown class="header-item dropdown">
              <span >欢迎：{{this.username}}</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <p @click="outt"> 退出</p>
                  </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </ul>
      </div>
    </div>
    <div class="content1" v-if="seen" @mouseenter="on" @mouseleave="over">
      <router-link
        :to="{path:'/js/Car',query:{js:'high'}}"
        class="icontp"
        v-on:click.native="$router.go(0)"
      >
        <h2 class="xbt">豪华</h2>
        <img :src="imghigh" class="cimg" />
        <br />
      </router-link>
      <router-link
        :to="{path:'/js/Car',query:{js:'sport'}}"
        class="icontp"
        v-on:click.native="$router.go(0)"
      >
        <h2 class="xbt">高性能</h2>
        <img :src="imgrun" class="cimg" />
        <br />
      </router-link>
      <router-link
        :to="{path:'/js/Car',query:{js:'suv'}}"
        class="icontp"
        v-on:click.native="$router.go(0)"
      >
        <h2 class="xbt">SUV</h2>
        <img :src="imgsuv" class="cimg" />
        <br />
      </router-link>
      <router-link
        :to="{path:'/js/Car',query:{js:'ete'}}"
        class="icontp"
        v-on:click.native="$router.go(0)"
      >
        <h2 class="xbt">新能源</h2>
        <img :src="imge" class="cimg" />
        <br />
      </router-link>
    </div>
    <!-- <div class="bagview" id="bag">
      <div class="bag-content">
        <nav class="bagview-nav">
          <ul class="bagview-nav-list">
            <li class="bagview-nav-item">
              <a href="" class="bagview-nav-link">收藏</a>
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
    </div>-->
  </div>
</template>
<script>
import { getCookie, delCookie } from "../../tools/cookie.js";
export default {
  data() {
    return {
      seen: false,
      username: getCookie("username"),
      imghigh: require("../../assets/icon/high_icon.png"),
      imgrun: require("../../assets/icon/run_icon.jpg"),
      imgsuv: require("../../assets/icon/suv_icon.png"),
      imge: require("../../assets/icon/e_icon.png"),
      imglogo: require("../../assets/icon/logo.png"),
      imglogow: require("../../assets/icon/logow.png")
    };
  },
  methods: {
    on() {
      this.seen = true;
    },
    over() {
      this.seen = false;
    },
    outt(){
      this.$message("正在退出");
      delCookie("username");
      this.$router.go(0);
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.cimg {
  margin-top: 3px;
}
.imglogo{
  width: 150px;
  height: 100%;
}
.icontp {
  text-decoration: none;
  font-size: 10px;
  float: left;
  margin-left: 220px;
  margin-top: 10px;
}
.adcontent {
  width: 100%;
  height: 40px;
  background: #504;
}
.xbt {
  color: rgb(0, 0, 0);
  margin-top: 3px;
  margin-left: 26px;
  font-style: normal;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.btext {
  height: 70px;
  width: 120px;
  color: rgb(0, 0, 0);
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
.dropdown{ 
margin-top: 10px;
}
.logo {
  vertical-align: bottom;
  width: 60px;
  height: 50px;
}
.content {
  width: 100%;
  height: 88px;
  background: rgba(0, 0, 0, 0.7);
  padding-top: 10px;
}
.content1 {
  width: 100%;
  height: 100px;
  background: #f7f5f6;
}
.headbar {
  width: 1200px;
  height: 60px;
  margin: auto;
}
.header-list {
  padding: 0;
  height: 50px;
  /* position: absolute; */
  cursor: pointer;
  list-style: none;
  width: 1200px;
  color: white;
  font-size: 16px;
  font-weight: 100;
  margin-top: 20px;
}
.header-logo{
  height: 50px;
  width: 120px;
  line-height: 50px;
  /* display: inline-block; */
  vertical-align: top;
  line-height: normal;
  float: left;
  margin-right: 60px;
}
.header-item {
  height: 50px;
  line-height: 50px;
  margin-left: 80px;
  display: inline-block;
  vertical-align: top;
  opacity: 0.9;
  font: normal 16px/3.42857 "Microsoft YaHei", Helvetica, Arial, serif;
  line-height: normal;
}
.head-logo {
  margin-left: 0px;
}
.header-item a {
  text-decoration: none;
  width: 40px;
  height: 50px;
  color: #fff;
  padding: 0 10px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
}
.header-item :hover {
  opacity: 0.85;
  color: rgba(89, 201, 37, 0.967);
}

.head-tea {
  margin-left: 0;
  width: 40px;
}
.icon-iconfontapple {
  font-size: 19px;
}
.head-peipi {
  width: 48px;
}
.head-models {
  width: 56.98px;
}
.head-i {
  width: 64px;
}
.head-news {
  width: 59.98px;
}
.head-mu {
  width: 90px;
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
.head-registered {
  margin: 0;
  height: 20px;
  line-height: 20px;
}
.head-xi {
  margin-left: 120px;
}
</style>


