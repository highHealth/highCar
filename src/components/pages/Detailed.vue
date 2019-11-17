<template>
  <div>
    <header-bar></header-bar>
    <div>
         <h5>{{this.cardata.name}}</h5>
            <img :src= this.timg />
            <p>价格：{{this.cardata.money}}¥</p>
            <p>{{this.cardata.location}}</p>
    </div>
    <button class @click="fh">返回</button>
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
      type: "sprot",
      money: "350,000",
      img:'../../../src/assets/js/GT5.jpg',
      location: "此处为介绍，可以说一下配置参数。吹就完事了。"
    };
    // this.timg =require(this.cardata.img)
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
</style>