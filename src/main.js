import Vue from 'vue'
import App from './App.vue'

import router from './router'
import ElementUI from 'element-ui'; // 2.1引入结构
import 'element-ui/lib/theme-chalk/index.css'; // 2.2引入样式
Vue.use(ElementUI); // 3.安装


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
