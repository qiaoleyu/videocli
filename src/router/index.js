import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import videoplay from '@/components/videoplay'
import video from '@/components/video'
import uploadVideo from '@/components/uploadVideo'
import updatePassword from '@/components/updatePassword'
import userDetial from '@/components/userDetial'
import userLogin from '@/components/userLogin'
import userRegist from '@/components/userRegist'
import searchVideo from '@/components/searchVideo'
import userMessage from '@/components/userMessage'
import moreMessage from '@/components/moreMessage'

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
    },{
      path: '/uploadVideo',
      name: 'uploadVideo',
      component: uploadVideo
    },{
      path: '/updatePassword',
      name: 'updatePassword',
      component: updatePassword
    },{
      path: '/userDetial',
      name: 'userDetial',
      component: userDetial
    },{
      path: '/userLogin',
      name: 'userLogin',
      component: userLogin
    },{
      path: '/userRegist',
      name: 'userRegist',
      component: userRegist
    },{
      path: '/searchVideo',
      name: 'searchVideo',
      component: searchVideo
    },{
      path: '/userMessage',
      name: 'userMessage',
      component: userMessage,
      children: [
        {path: '/moreMessage/:userId', name: '私聊', component: moreMessage}
      ]
    }
    // },{
    // path: '/moreMessage',
    //   name: 'moreMessage',
    //   component: moreMessage
    // }
  ]
})
