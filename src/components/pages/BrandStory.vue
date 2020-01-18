<template>
  <div class="body">
    <header-bar></header-bar>
      <body>
      <div id="aboutUs">
          <div class="about">
            <h4 class="title">品牌文化</h4>
            <!-- <P class="abp">用心倾听，及时回应</P> -->
            <!-- <p>我们将重新定义服务用户的所有过程，为用户提供超越期待的全程愉悦体验。</p> -->
            <!-- <p class="abp">参考：<a href ="https://www.landrover.com.cn/index.html" target=_blank>品牌官网</a></P> -->
          </div>
          <br>
          <div data-paddingbottom="medium" data-paddingtop="medium" class="textimage-2cols component background-grey in-view"><div class="row"><div class="cell"><div data-disclaimerposition="" data-disclaimer="" class="imageContainer">
            <img alt="car" :src="img"  sizes="(min-width: 1024px) 50vw, 100vw" class="lazy-load lazy-loaded"></div><div class="textContainer"><div class="sublinks"></div><div class="cta-container inline"></div></div></div><div class="cell"><div class="textContainer"><div class="text">
                      <p>身为车主，您享受到的不仅仅是一辆豪华汽车。我们欢迎客户提出疑问、获得解答，并分享您的热情。<br>
          <br>
          您可通过三种方式与我们联系：<br>
          <br>
          每周一至周五9:00-18:00拨打免费热线电话400-888-8888<br>
          <br>
          添加微信公众平台帐号“路虎中国”进行咨询<br>
          <br>
          通过微博主页 @路虎中国 了解更多<br>
          <br>
          <br>
          我们随时为您提供帮助。</p>
          <p>&nbsp;</p>
          <p>广告主：xx（中国）汽车贸易有限公司</p>
          <p>联系方式：021-666666666</p>
          <p>公司地址：上海市静安区北京西路666号</p>
          </div><div class="sublinks"></div><div class="cta-container inline"></div></div></div></div></div>
          <div><div data-paddingbottom="medium" data-paddingtop="medium" class="orphanLinks"><div class="back-to right"><a data-linktracking="cta:back-to-2" class="link" href="/"><div class="contents"><span class="text">返回主页</span></div></a></div></div></div>
        </div>
        <br>
      </body>  
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from "axios";
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
export default {
  name: "BrandStory",
  data() {
    return {
      img:require("../../../src/assets/contactus.jpg"),
    };
  },
  components: {
    footerInfo,
    headerBar
  },
}
</script>
>
<style>
    #aboutUs{
        width: calc(100vw - 87px);
        margin-left: 30px;
        color: #000;
    }
    #aboutUs h1 {
        font-size: 50px;
        text-align: left;
        text-indent: 0;
    }
    #aboutUs h2 {
        font-size: 40px;
    }
    #aboutUs h3 {
        font-size: 30px;
    }
    #aboutUs p {
        font-size: 20px;
        margin: 1em 0;
    }
    #aboutUs hr {
        margin:1em 0;
    }
    #aboutUs a {
        /* color: #6699cc; */
        color: #333;
        font-size: 30px;
        /* text-decoration: underline; */
    }
    #aboutUs a:hover {
        color: blue;
        text-decoration: none;
    }
    .indent {
        text-indent: 2em;
    }
    .textimage-2cols.background-grey {
    background-color: #f2f1f0;
    }
    .textimage-2cols[data-paddingbottom="medium"] {
        padding-bottom: 30px;
    }
    .textimage-2cols[data-paddingtop="medium"] {
        padding-top: 30px;
    }
    .textimage-2cols {
        margin: 0;
        padding: 0;
        background-color: #f2f1f0;
        color: #333;
        padding: 0 60px;
    }
    .component {
        margin: 0;
        padding: 60px 0;
    }
    .about{
      width: 100%;
    }
    img.lazy-load.lazy-loaded {
      background: none;
    }
    img.lazy-load {
        height: 100%;
        display: inline-block;
        position: relative;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    img {
        border: 0;
    }
    .text .title:lang(zh) {
        font-family: "Univers47","Microsoft YaHei New","Microsoft Yahei","微软雅黑""华文细黑",sans-serif;
        text-decoration: none;
    }
    .orphanLinks[data-paddingbottom='medium'] {
    padding-bottom: 30px;
    }
    .orphanLinks[data-paddingtop='medium'] {
        padding-top: 30px;
    }
    .orphanLinks {
        margin: 0 60px;
    }
    user agent stylesheet
    div {
        display: block;
    }
    body:lang(zh) {
        font-family: "Univers45","Microsoft YaHei New","Microsoft Yahei","微软雅黑""华文细黑",sans-serif;
    }
    .orphanLinks .back-to.right {
      text-align: right;
      text-transform: uppercase;
      color: #333;
    }
    .orphanLinks .back-to {
        margin: 0 -3px;
        margin-top: 15px;
    }
    div {
        display: block;
    }
    .orphanLinks .back-to .link .content .text {
        padding-left: 15px;
    }
    .orphanLinks .back-to .link {
        display: inline-block;
        font-size: 16px;
        letter-spacing: 0;
        line-height: 1.5;
        color: #333;
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 30px;
        margin-bottom: 5px;
    }
    a {
        color: #0c2340;
        text-decoration: underline;
    }
    a:-webkit-any-link {
        cursor: pointer;
    }
    .orphanLinks .back-to.right {
        text-align: right;
    }
    .title {
        font-size: 34px;
        text-decoration: none;
    }
    .about h4{
      width: 200px;
      margin: 20px auto;
    }
    .about .abp{
      width: 300px;
      margin: 0 auto;
    }
</style>