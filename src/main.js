// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import $ from 'jquery'

// import AreaSelect from '@/components/AreaSelect'
// Vue.use(AreaSelect) // 引用自定义组件
// Vue.component('area-select', AreaSelect) // 初始化组件

// import Video from 'video.js'
// import 'video.js/dist/video-js.css'

import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

// Vue.prototype.$video = Video
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use($)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    // AreaSelect
  },
  template: '<App/>'
})
