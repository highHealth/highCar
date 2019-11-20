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
<!--   <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div> -->
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
<!--   <div style="margin-top: 20px">
    <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
    <el-button @click="setCurrent()">取消选择</el-button>
  </div> -->
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
        {
          id:'1',
          title:'法兰克福车展本品牌惊艳亮相',
          writer:'王小二',
          time:'11-15'
        },
        {
          id:'2',
          title:'自主知识产权新车下线',
          writer:'王小二',
          time:'11-14'
        },
        {
          id:'3',
          title:'世界最先进生产线落户工场',
          writer:'李木子',
          time:'11-13'
        },
        {
          id:'4',
          title:'严抓质量，品质为先',
          writer:'马右',
          time:'11-12'
        },
      ],
      rdata:[
        {
          id:'1',
          title:'洛杉矶车展本品牌惊艳亮相',
          writer:'王小二',
          time:'11-15'
        },
        {
          id:'2',
          title:'自主知识产权新车下线',
          writer:'王小二',
          time:'11-14'
        },
        {
          id:'3',
          title:'世界最先进生产线落户工场',
          writer:'李木子',
          time:'11-13'
        },
        {
          id:'4',
          title:'严抓质量，品质为先',
          writer:'马右',
          time:'11-12'
        },
      ],
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
    // axios
    //   .get(
    //     "https://www.easy-mock.com/mock/5a67ef8cbdf9f5437bb4979a/Data/musicData"
    //   )
    //   .then(response => {
    //     this.headbar = response.data.headbar;
    //     this.body = response.data.body;
    //   })
    //   .catch(error => {
    //     alert("网络错误不能访问");
    //   });
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


