<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">ArcGIS API for JavaScript</el-menu-item>
      <el-menu-item index="/geo-server">ArcGIS for GeoServe</el-menu-item>

    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleSelect(data) {
      console.log(data)
      this.$router.push({
        path: data
      })

    }
  }
};
</script>

<style></style>
