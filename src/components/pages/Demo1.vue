<template>
  <div class="body">
    <header-bar>
    </header-bar>
    <div id="myChart" style="width:100%;height:600px">
        <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname"

                 @play="onPlayerPlay($event)"
                 @pause="onPlayerPause($event)"
                 @ended="onPlayerEnded($event)"
                 @waiting="onPlayerWaiting($event)"
                 @playing="onPlayerPlaying($event)"
                 @loadeddata="onPlayerLoadeddata($event)"
                 @timeupdate="onPlayerTimeupdate($event)"
                 @canplay="onPlayerCanplay($event)"
                 @canplaythrough="onPlayerCanplaythrough($event)"

                 @statechanged="playerStateChanged($event)"
                 @ready="playerReadied">
        </video-player>
    </div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from 'axios'
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  name: 'Demo1',
  data() {
    return {
      list: [],
      prolists: [],
      body: {},
      playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        }
    };
  },
  components: {
    footerInfo,
    headerBar,
    videoPlayer
  },
  created: function() {
    // axios
    //   .get(
    //     "/api/xincheng/xincheng/test"
    //   )
    //   .then(function(res){
    //     var cc = res.data;
    //     alert(cc)
    //  })
    //   .catch(error => {
    //     //alert("网络错误不能访问");
    //   });
  },
  mounted(){
      console.log('this is current player instance object', this.player)
  },
  computed: {
    player() {
        return this.$refs.videoPlayer.player
        }
    },
  methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>



