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
          <img :src="this.timg" />
        </div>
        <el-button icon="el-icon-back" @click="fh">返回车型页</el-button>
        <!-- <el-button :plain="true" @click="addfa">收藏</el-button> -->
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
      cardata: {}
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    //通过id查找数据库返回具体的车型数据
    //response.data = this.cardata
    this.$axios
      .get("/api/car/id", {
        params: {
          id: this.$route.params.carid
        }
      })
      .then(response => {
        this.cardata = response.data;
        this.timg = require("../../assets/datu/" +
          this.cardata.img +
          ".jpg");
      });
  },
  methods: {
    fh() {
      this.$router.go(-1);
    },
    favorite(){
      this.$axios.get("/api/favorite/favoriteUid",{
        params:{
          Uid:1
        }
      })
      .then(response => {
        for(var i = 0; i<response.data.size();i++){
          if(response.data[i] == this.$route.params.carid){
            
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    addfa() {
      this.$axios.get("/api/favorite/addfavorite",{
        params:{
          Uid:1,
          Cid:12
        }
      })
      .then(response => {
        if(response.data>0){
          this.$message({
          message: '恭喜你，收藏成功！',
          type: 'success'
        });
        }else{
          this.$message.error('很遗憾，收藏失败！');
        }
      })
      .catch(function (error) {
        this.$message.error('很遗憾，收藏失败！');
        console.log(error);
      });
      },
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