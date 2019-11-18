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
import chatMessage from '@/components/chatMessage'
import message from '@/components/message'
import document from '@/components/document'
import folder from '@/components/folder'
import chart from '@/components/chart'
import upload from '@/components/upload'
import applyText from '@/components/applyText'
import videoDirect from '@/components/videoDirect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/videoplay/:pk_video_id',
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
      path: '/searchVideo/:searchName',
      name: 'searchVideo',
      component: searchVideo
    },{
      path: '/userMessage',
      name: 'userMessage',
      component: userMessage,
      children: [
        {path: '/chatMessage', name: '私聊', component: chatMessage},
        {path: '/message', name: '评论', component: message},
        {path: '/document', name: '回复', component: document},
        {path: '/folder', name: '收藏', component: folder},
        {path: '/chart', name: '历史', component: chart},
        {path: '/upload', name: '发布', component: upload},
      ]
    },{
      path: '/applyText',
      name: 'applyText',
      component: applyText
    },{
      path: '/videoDirect',
      name: 'videoDirect',
      component: videoDirect
    }
    // },{
    // path: '/moreMessage',
    //   name: 'moreMessage',
    //   component: moreMessage
    // }
  ]
})
