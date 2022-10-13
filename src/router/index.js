import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import geoServer from '@/pages/geoServer.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/geo-server',
      name: 'geoServer',
      component: geoServer
    },
  ]
})
