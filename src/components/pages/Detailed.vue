<template>
  <div>
    <header-bar></header-bar>
    <div class="section">
        <div>
          <h2>{{this.cardata.name}}</h2>
          <h3>售价：{{this.cardata.money}}¥</h3>
          <div>
            <p>{{this.cardata.location}}</p>
          </div>
          <div>
            <img :src= this.timg />
          </div>
          <el-button icon="el-icon-back" @click="fh">返回车型页</el-button>
        </div>
      </div>
          
    <footer-info></footer-info>
  </div>
</template>
<script>
import footerInfo from "@/components/common/FooterInfo";
import tabNav from "@/components/common/TabNav";
import headerBar from "@/components/common/HeaderBar";
export default {
  data() {
    return {
      cardata: {
        id: "",
        name: "",
        type: "",
        money: "",
        location: ""
      }
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    //通过id查找数据库返回具体的车型数据
    //response.data = this.cardata
    this.cardata = {
      id: 8,
      name: "GT5",
      type: "sport",
      money: "350,000",
      location: "此处为介绍，可以说一下配置参数。吹就完事了。"
    };
    this.timg =require("../../../src/assets/datu/"+this.cardata.name+".jpg")
    this.upadd = "/js/" + this.cardata.type;
  },
  methods: {
    fh() {
      this.$router.push(this.upadd);
    }
  }
};
</script>
<style scoped>
.section {
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
</style>