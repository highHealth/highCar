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
      id:'',
      nimg: "",
      list: [],
      prolists: [],
      body: {},
      news: {
      }
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    this.id = this.$route.params.newsid
    this.data();
    
  },
  methods: {
    data() {
      //根据ID查
      // console.log(this.id)
      this.$axios.get("/api/news/nid",{
        params:{
          id:this.id
        }
      })
      .then(response => {
        this.news = response.data
        this.nimg = require("../../../src/assets/news/" + this.news.img + ".jpg");
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
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


