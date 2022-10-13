<template>
  <div>
    home
    <div id="map" class="map"></div>
  </div>
</template>

<script>
// //导入基本模块
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
//导入相关模块
import { Tile as TileLayer } from 'ol/layer'
import { TileWMS } from 'ol/source'
export default {
  data() {
    return {
      map: ''
    }
  }, 
  
  mounted() {
    this.initMap()
  },

  methods: {
    initMap() {
      var layer = new TileLayer({
        source: new TileWMS({
          //不能设置为0，否则地图不展示。
          ratio: 1,
          url: "http://localhost:8080/geoserver/shp_china/wms",
          params: {
            LAYERS: "shp_china:shp_china	",
            // STYLES: "",
            // VERSION: "1.1.1",
            TILED: true
          },
          serverType: "geoserver",
        }),
      });

      this.map = new Map({
        //地图容器ID
        target: "map",
        //引入地图
        layers: [layer],
        view: new View({
          //地图中心点
          center: [300,200],
          zoom: 4,
          // minZoom:1, // 地图缩放最小级别
        }),
      });
    },
  }
}
</script>

<style>
html,body { height:100%;border: 0px; margin: 0px; padding: 0px; }
/* #map { width: 90%; height: 80%; border: 1px solid;} */
</style>

<style scoped>
.map {
  width: 768px;
  height: 564px;
  border: 1px solid;
}

.map1 {
  height: 1500px;
  /* width: 600px; */
  border: 1px solid;
}
</style>