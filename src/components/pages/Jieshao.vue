<template>
  <div class="body">
    <header-bar></header-bar>
    <div class="tetil">
        <h1>{{this.tetil}}</h1>
    </div>
    <div class="content">
        
        <div v-for="(v,i) in this.car" :key="i" class="indiv" >
            <h5>{{v.name}}</h5>
            <img :src='v.img' />
            <p>价格：{{v.money}}¥</p>
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
      tetil:'',
      car:[
        {
          name:'',
          img:'',
          money:''
        }
        ],
        mcar:{
          name:'',
          img:'',
          money:''
        }
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
      if(this.$route.params.name=='high'){
          this.tetil='豪华车型'
      }else if(this.$route.params.name=='sport'){
          this.tetil='高性能车型'
      } else if(this.$route.params.name=='suv'){
          this.tetil='SUV车型'
      }else if(this.$route.params.name=='ete'){
          this.tetil='新能源车型'
      } else{
        this.tetil='其他车型'
      }
      this.listye();
      
  },
  methods:{
    listye(){
      //请求后台，返回参数
      if(this.tetil==='豪华车型'){
        this.car = [
        {
          name:'H2',
          img:require('../../../src/assets/js/H2.png'),
          money:'100,000'
        },
        {
          name:'H6',
          img:require('../../../src/assets/js/H6.png'),
          money:'200,000'
        },
        {
          name:'H8',
          img:require('../../../src/assets/js/H8.png'),
          money:'300,000'
        }
      ]
      }else if(this.tetil==='高性能车型'){
        this.car.length = 0;
        this.car = [
        {
          name:'GT1',
          img:require('../../../src/assets/js/GT1.png'),
          money:'150,000'
        },
        {
          name:'GT3',
          img:require('../../../src/assets/js/GT3.png'),
          money:'250,000'
        },
        {
          name:'GT5',
          img:require('../../../src/assets/js/GT5.jpg'),
          money:'350,000'
        }
      ]
      }else if(this.tetil==='SUV车型'){
        this.car.length = 0;
        this.car = [
        {
          name:'S1',
          img:require('../../../src/assets/js/S1.png'),
          money:'200,000'
        },
        {
          name:'S2',
          img:require('../../../src/assets/js/S2.jpg'),
          money:'300,000'
        },
        {
          name:'S3',
          img:require('../../../src/assets/js/S3.png'),
          money:'400,000'
        }
      ]
      }else if(this.tetil==='新能源车型'){
        this.car.length = 0;
        this.car = [
        {
          name:'E1',
          img:require('../../../src/assets/js/E1.jpg'),
          money:'100,000'
        },
        {
          name:'E2',
          img:require('../../../src/assets/js/E2.jpg'),
          money:'200,000'
        },
        {
          name:'E3',
          img:require('../../../src/assets/js/E3.png'),
          money:'300,000'
        }
      ]
      }else{
        this.car.length = 0;
        alert('此车型尚未开发')
      }
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
.tetil{
    
    width: 1440px;
    height: 100px;
      /* border-style: solid;
  border-color: rgb(151, 46, 46); */
      text-align:center;
    display: table-cell;
    vertical-align:middle
}
.indiv{
    /* width: 460px; */
    width: 454px;
    height: 284.28px;  
    /* border-style: solid;
    border-color: red;  */
    margin-left: 15px;
    float: left;
}
</style>