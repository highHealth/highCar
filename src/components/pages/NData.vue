<template>
  <div class="body">
    <header-bar></header-bar>
    <div class="content">
      <div class="nie">
        <h1 class="hh">{{this.news.title}}</h1>
        <img :src="this.nimg" class="img" />
        <div class="zjsj">
          <p>记者：{{this.news.writer}}</p>
          <p>时间：{{this.news.time}}</p>
        </div>
      </div>
      <p class="loca">{{this.news.location}}</p>
      <el-button icon="el-icon-back" @click="fh" class="but">返回新闻页</el-button>
    </div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from "axios";
import footerInfo from "../common/FooterInfo";
import headerBar from "../common/HeaderBar";
export default {
  data() {
    return {
      nimg: "",
      list: [],
      prolists: [],
      body: {},
      news: {
        id: "",
        title: "",
        writer: "",
        time: "",
        location: ""
      }
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    this.data();
    this.nimg = require("../../../src/assets/news/" + this.news.img + ".jpg");
  },
  methods: {
    data() {
      //根据ID查
      this.news = {
        id: 1,
        title: "洛杉矶车展本品牌惊艳亮相",
        writer: "王小二",
        time: "11-15",
        img: "news1",
        location:
          "洛杉矶车展北美第大车展，仅次于北美底特律车展与纽约车展，最早于1907年举办。经过年的发展和完善，已经同巴黎、法兰克福和纽约车展等一样，成为世界主要的国际车展。2019洛杉矶车展将于当地时间11月20日（洛杉矶时间）正式开幕，在本届洛杉矶车展，我们将迎来奥迪e-tron Sportback，奥迪RS Q8，宝马全新X5M，宝马全新X6M，宝马全新M3，梅赛德斯-迈巴赫GLS，保时捷全新911 Turbo，大众ID. Space Vizzion，全新荣放插电混动版，福特全新纯电动SUV，牧马人插电混动版，特斯拉电动皮卡，英菲尼迪QX55等重磅车型的发布。快点跟我们一起一探究竟吧~"
      };
    },
    fh() {
      this.$router.push("/News");
    }
  }
};
</script>
<style scoped>
.content {
  height: 1000px;
  width: 1000px;
  margin: auto;
  
  background-color: rgb(255, 255, 255);
}
.zjsj {
  margin-top: 20px;
}
.zjsj p {
  display: inline;
  margin-left: 30px;
}
.nie {
  margin: auto;
  text-align: center;
}
.hh {
  margin-top: 30px;
}
.img {
  margin-top: 25px;
}
.loca {
  margin-top: 15px;
  text-indent: 2em;
}
.but {
    margin-top: 30px;
}
</style>


