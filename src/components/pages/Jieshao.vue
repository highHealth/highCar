<template>
  <div class="body">
    <header-bar></header-bar>
    <div class="tetil">
      <h1>{{this.tetil}}</h1>
    </div>
    <div class="content">
      <div v-for="(v,i) in this.car" :key="i" class="indiv">
        <h5>{{v.name}}</h5>
        <img :src="v.img" />
        <p>价格：{{v.money}}¥</p>
        <!-- <button class="butt" @click="xq(v.id)">查看详情</button> -->
        <el-button type="text" @click="xq(v.id)">查看详情</el-button>
      </div>
    </div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
export default {
  data() {
    return {
      headbar: [],
      body: {},
      tetil: "",
      car: [
        {
          // id:'',
          // name:'',
          // img:'',
          // money:''
        }
      ],
      mcar: {
        id: "",
        name: "",
        img: "",
        money: ""
      }
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    this.$axios
      .get("/api/car/type", {
        params: {
          type: this.$route.params.name
        }
      })
      .then(response => {
        this.car = response.data;
        for (var i = 0; i < this.car.length; i++) {
          this.car[i].img = require("../../../src/assets/js/" +
            this.car[i].img +
            ".png");
        }
      });
  },
  methods: {
    xq(index) {
      var url = "/data/" + index;
      this.$router.push(url);
    }
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 889.92px;
  background-color: #fff;
  /* border-style: solid;
  border-color: rgb(151, 46, 46); */
}
.tetil {
  width: 1440px;
  height: 100px;
  /* border-style: solid;
  border-color: rgb(151, 46, 46); */
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.indiv {
  /* width: 460px; */
  width: 454px;
  height: 284.28px;
  /* border-style: solid;
    border-color: red;  */
  margin-left: 25px;
  float: left;
}
</style>