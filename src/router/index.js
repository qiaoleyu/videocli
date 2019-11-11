import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import videoplay from '@/components/videoplay'
import video from '@/components/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/videoplay',
      name: 'videoplay',
      component: videoplay
    },{
      path: '/video',
      name: 'video',
      component: video
    }
  ]
})
