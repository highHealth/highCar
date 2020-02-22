<template>
  <div class="app">
    <div class="main">
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">车型</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">小型汽车</li>
          <li class="section-item">大型汽车</li>
          <li class="section-item">豪华汽车</li>
          <li class="section-item">SUV</li>
          <li class="section-item">高性能跑车</li>
          <li class="section-item">新能源</li>
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">新闻</h3>
        </div>
        <ul class="section-list">
          <li class="section-item">品牌新闻</li>
          <li class="section-item">车队新闻</li>
          <li class="section-item">新车测评</li>
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">关于品牌</h3>
        </div>
        <ul class="section-list">
          <router-link to="/brandStory" class="section-item">品牌文化</router-link>
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">售后</h3>
        </div>
        <ul class="section-list">
          <router-link to="/support" class="section-item">全国售后维修</router-link>
          <!-- <li class="section-item">保险及赔偿</li> -->
        </ul>
      </div>
      <div class="section">
        <div class="section-label">
          <h3 class="section-title">官方社交媒体</h3>
        </div>
        <ul class="section-list">
          <li>
            <a class="section-item" href="https://weibo.com/landroverchina?profile_ftype=1&is_all=1#_0" target="officalWeibo" >官方微博</a> 
          </li>
        </ul>
        <ul class="section-list">
          <li class="section-item">
            <router-link to="/officialWX" class="section-item">官方微信</router-link>
          </li>
        </ul>
      </div>
    </div>
    <last-footer></last-footer>
  </div>
</template>
<script>
import lastFooter from "@/components/common/LastFooer";
export default {
  components: {
    lastFooter
  },
};
</script>
<style scoped>
.app {
  width: 100%;
  background: #f2f2f2;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #262626;
  padding: 0;
  margin: 0;
}
.main {
  padding-top: 40px;
  width: 980px;
  height: 234px;
  margin: auto;
  position: relative;
  left: 35px;
}
.section {
  width: 20%;
  float: left;
  box-sizing: border-box;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  position: relative;
}
.section-label {
  margin: 0;
  padding: 0;
}
.section-title {
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  font-size: 18px;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.005em;
  margin-bottom: 6px;
}
.section-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-right: 20px;
}
.section-item {
  color: #888;
  margin-bottom: 6px;
  text-align: -webkit-match-parent;
  text-decoration: none;
}
.section-item:hover {
  cursor: pointer;
  text-decoration: underline;
  color: black;
  text-decoration-color: black;
}
.section-second {
  padding-top: 24px;
}
</style>


