<template>
  <div class="body">
    <header-bar>
    </header-bar>
    <div class="content">
        <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
    </div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Map',
  data() {
    return {
      list: [],
      prolists: [],
      body: {}
    };
  },
  components: {

  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
         
         
        myChart.setOption(option);
      }
    }
  }
</script>


