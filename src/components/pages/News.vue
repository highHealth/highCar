<template>
  <div class="body">
    <header-bar></header-bar>
   <div class="content">
     <div class="left">
  <template>
  <h2 class="hh">品牌新闻</h2>
  <el-table @cell-click="kk"
    ref="singleTable"
    :data="ldata"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      width="80%">
    </el-table-column>
    <el-table-column
      property="title"
      width="330%">
    </el-table-column>
    <el-table-column
      property="writer"
      width="80%">
    </el-table-column>
    <el-table-column
      property="time"
      width="130%">
    </el-table-column>
  </el-table>
</template>
     </div>
     <div class="right">
       <template>
  <h2 class="hh">车型测评</h2>
  <el-table @cell-click="kk"
    ref="singleTable"
    :data="rdata"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      width="80%">
    </el-table-column>
    <el-table-column
      property="title"
      width="330%">
    </el-table-column>
    <el-table-column
      property="writer"
      width="80%">
    </el-table-column>
    <el-table-column
      property="time"
      width="130%">
    </el-table-column>
  </el-table>
</template>
     </div>
    </div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
export default {
  data() {
    return {
      headbar: [],
      body: {},
      ldata:[

      ],
      rdata:[
      ],
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    this.$axios
      .get(
        "api/news/title",{
          params:{
            type:1
          }
        }
      )
      .then(response => {
        for(var i =0;i<response.data.length;i++){
          this.ldata.push(response.data[i])
        }
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
      this.$axios
      .get(
        "api/news/title",{
          params:{
            type:2
          }
        }
      )
      .then(response => {
        for(var i =0;i<response.data.length;i++){
          this.rdata.push(response.data[i])
        }
      })
      .catch(error => {
        alert("网络错误不能访问");
      });
  },
  methods: {
    kk(index){
      console.log(index.id)
      var url = '/nd/'+index.id
      this.$router.push(url)
    }
  }
};
</script>
<style scoped>
.content{
  height: 1000px;
  width: 1300px;
  margin:0 auto;
  background-color: rgb(179, 177, 177);
}
.left{
  height: 920px;
  width: 600px;
  float: left;  
  margin-left: 20px;
  margin-top: 50px;
  /* border-style: solid;
  border-color: rgb(151, 46, 46); */
}
.right{
  height: 920px;
  width: 600px;
  float: left;
  margin-left: 50px;
  margin-top: 50px;
  /* border-style: solid;
  border-color: rgb(151, 46, 46); */
}
.hh{
  margin:0 auto;
  text-align:center;
}
</style>


