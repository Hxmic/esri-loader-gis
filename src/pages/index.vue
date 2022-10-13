<template>
  <div id="SceneView"></div>
</template>

<script>
import { loadModules } from "esri-loader";
export default {
  name: "SceneView",

  methods: {
    _createSceneView: function () {
      let options = {
        url: "../plugin/esriloader/init.js",
        css: "./plugin/esriloader/main.css",
      };
      loadModules(["esri/Map", "esri/views/SceneView", "esri/widgets/Locate"], options).then(
        ([Map, SceneView, Locate]) => {
          let map = new Map({
            basemap: "streets",
            ground: "world-elevation",
          });
          let view = new SceneView({
            container: "SceneView",
            map: map,
          });
          console.log(view);
        }
      );
    },
  },
  mounted() {
    this._createSceneView();
  },
};
</script>

<style>
#SceneView {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
