<template>
  <div class="body">
    <header-bar>
    </header-bar>
    <div id="myChart" style="width:100%;height:600px"></div>
    <footer-info></footer-info>
  </div>
</template>
<script>
import axios from 'axios'
import footerInfo from "@/components/common/FooterInfo";
import headerBar from "@/components/common/HeaderBar";
import echarts from "echarts";
import 'echarts/map/js/china'; 
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
    footerInfo,
    headerBar,
  },
  created: function() {
    axios
      .get(
        "/api/xincheng/xincheng/test"
      )
      .then(function(res){
        var cc = res.data;
        alert(cc)
     })
      .catch(error => {
        //alert("网络错误不能访问");
      });
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        var geoCoordMap = {
                "深圳红荔西路莲花二村莲花大厦1楼，深圳，518000":[114.07,22.62],
                "佛山市禅城区建新路1号10号铺，佛山，广东，528000":[113.11,23.05],
                "辽宁省大连市沙河口区星海广场B2区18号, 大连, LIAONING, 116021":[121.62,38.92],
                "沈阳市浑南新区远航中路33号, 沈阳市, 辽宁省, 110179":[123.38,41.8],
                "长春市南关区人民大街4368号，长春，吉林，130000":[125.35,43.88],
                "北京市经济技术开发区中和街16号3幢, 北京, CHINA, 100176":[116.46,39.92],
                "拉萨市林廓北路24号, 拉萨, 西藏，830000":[91.167391,29.593525],
                "临沂市兰山街道琅琊王路与水田路交汇处永兴玩具城A区6号，临沂，276000":[118.35,35.05],
                "湖北省宜昌市西陵区发展大道38号附近，宜昌，湖北，443000":[114.306115,30.605357],
                "湖南省桂花坪街道雀园路369号，长沙，湖南，410000":[112.987444,28.111299],
                "上海市浦东新区锦绣东路2053号，上海，200000":[121.523084,31.233706],
                "大庆市高新区新兴东街8号，大庆，163000":[125.238592,46.624738]
            };
            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value),
                            symbolSize:data[i].symbolSize,
                        });
                    }
                }
                return res;
               
            };
            var option = {
                title: {
                    text: '大陆地区经销商查询',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                backgroundColor: '#404a59',
                tooltip: {
                    trigger: 'item',
                    textStyle:{
                        fontSize:16,
                        fontFamily:'幼圆',
                    },
                    backgroundColor: 'rgba(20,20,20,0.2)',
                    color: 'black',
                    borderWidth: '1',
                    borderColor: '#000',
                    textStyle: {
                        color: 'white',
                    },
                    formatter: function (params) {
                        let name = params.name
                        let leadName = name.substring(0,2);
                        return '<h1 style="color:#000;">'+leadName +'</h1><br/>'+params.name  + '<br/>电话：' + params.value[2]  ;
                    }
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x:'right',
                    data:['大陆地区经销商查询'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            fontSize:16,
                            color: '#000'
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [{
                    name: '大陆地区经销商查询',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData([
                        {name: "深圳红荔西路莲花二村莲花大厦1楼，深圳，518000", value:13333333333,symbolSize: 15},
                        {name: "佛山市禅城区建新路1号10号铺，佛山，广东，528000",value:13333333333, symbolSize: 15},
                        {name: "辽宁省大连市沙河口区星海广场B2区18号, 大连, LIAONING, 116021", value:13333333333,symbolSize: 15},
                        {name: "沈阳市浑南新区远航中路33号, 沈阳市, 辽宁省, 110179", value:13333333333,symbolSize: 15},
                        {name: "长春市南关区人民大街4368号，长春，吉林，130000",value:13333333333,symbolSize: 15},
                        {name: "北京市经济技术开发区中和街16号3幢, 北京, CHINA, 100176", value:13333333333,symbolSize: 15},
                        {name: "拉萨市林廓北路24号, 拉萨, 西藏，830000",value:13333333333, symbolSize: 15},
                        {name: "临沂兰山街道琅琊王路与水田路交汇处永兴玩具城A区6号，临沂，276000",value:13333333333, symbolSize: 15},
                        {name: "湖北省宜昌市西陵区发展大道38号附近，宜昌，湖北，443000",value:13333333333, symbolSize: 15},
                        {name: "湖南桂花坪街道雀园路369号，长沙，湖南，410000",value:13333333333, symbolSize: 15},
                        {name: "上海市浦东新区锦绣东路2053号，上海，200000",value:13333333333, symbolSize: 15},
                        {name: "大庆市高新区新兴东街8号，大庆，163000",value:13333333333, symbolSize: 15},
                    ]),
                    itemStyle: {
                        normal: {
                            color: function(e){
                                return '#B7DBD9'
                            }
                        },
                        emphasis: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    }
                }]
            };
            if (option && typeof option === "object") {
                myChart.setOption(option, true);
            }
      }
    }
  }
</script>



