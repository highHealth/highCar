<template>
  <div class="down">
    <div class="section-footer">
      <div class="section-shop">
      </div>
      <div class="section-legal">
        <div class="section-legal-copyright">Copyright &copy; 范雨蒙</div>
        <!-- <div class="section-legal-locale">
          <img src="https://images.apple.com/ac/flags/1/images/zh-cn/16.png"> 中国
        </div> -->
      </div>
      <p class="section-bottom"></p>
    </div>
    
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.down {
  width: 100%;
  background: #f2f2f2;
  font-family: "SF Pro SC", "HanHei SC", "SF Pro Text", "Myriad Set Pro",
    "SF Pro Icons", "Apple Legacy Chevron", "PingFang SC", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  font-size: 10px;
  padding: 0;
  margin: 0;
}
.section-footer {
  margin: auto;
  width: 980px;
  padding: 17px 0 21px;
  padding-top: 34px;
  color: #888;
}
.section-shop {
  width: 100%;
  margin-bottom: 7px;
  padding-bottom: 6px;
  border-bottom: 1px solid #d6d6d6;
  color: #999;
}
.nowrap {
  color: #0070c9;
}
.section-legal {
  width: 100%;
  position: relative;
  top: -3px;
}
.section-legal-copyright {
  margin-top: 3px;
  margin-left: 420px;
  color: #999;
  font-size:16px;
}
.section-legal-links {
  margin-right: 30px;
  margin-top: 3px;
  position: relative;
  font-size: 10px;
  float: left;
  
}
.section-legal-link {
  border-right: 1px solid #d6d6d6;
  margin-right: 10px;
  padding-right: 12px;
  display: inline-block;
  white-space: nowrap;
  color: #555;
}
.section-legal-link:last-child {
  border: none;
  margin: 0;
  padding: 0;
}
.section-legal-locale {
  float: right;
  margin-top: 3px;
  line-height: 16px;
}
.section-legal-locale img {
  width: 16px;
  height: 16px;
  padding-right: 5px;
  float: left;
}
.section-bottom{
  margin-top: 30px;
  margin-bottom: 0;
  color: #999;
}
</style>


