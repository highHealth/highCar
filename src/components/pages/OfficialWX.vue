<template>
  <div class="body">
    <header-bar></header-bar>
    <body class="bo">
        <div class="title">
            <h3 class="scanCode">扫码关注官方微信</h3>
            <p>即刻了解最新车讯，一起缔造激情，感受纯粹驾驶乐趣。</p>
        </div>
        <div class="img">
            <img :src="img" class="cimg"/><br/>
        </div>
    </body>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
export default {
  name: "OfficialWX",
  data() {
    return {
      list: [],
      prolists: [],
      body: {},
      img:require("../../assets/offwx.jpg"),
    };
  },
  components: {
    footerInfo,
    headerBar
  },
  mounted: function() {
  }
};
</script>
<style scoped>
    .bo{
        width: 700px;
        margin: 0 auto;
    }
    .title{
        margin: 30px 0px;
    }
    .title p{
        font-size: 18px;
    }
    .img{
        margin-bottom:90px; 
    }
    .scanCode{
        margin-bottom: 10px;
    }
</style>



