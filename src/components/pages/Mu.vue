<template>
  <div class="body">
    <header-bar></header-bar>
    <div class="top"></div>
        <iframe src="http://player.bilibili.com/player.html?aid=29120965&cid=50538626&page=1" 
        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="video"> 
        </iframe>
        <div class="top"></div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from 'axios'
import footerInfo from '../common/FooterInfo'
import headerBar from '../common/HeaderBar'
export default {
  data() {
    return {
      list: [],
      prolists: [],
      body: {}
    };
  },
  components: {
    headerBar,
    footerInfo
  },
  mounted: function() {
  }
}
</script>
<style scoped>
.body{
  text-align:center;
  background-color: black;
}
.video{
  width:44%;
   height:355px;
   margin:0 auto
}
.top{
  height: 28px;
}
</style>


