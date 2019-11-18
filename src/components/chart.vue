<template>
  <div style="height: 100%;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;border-radius: 20px" >

    <!--历史-->
    <el-row :gutter="10">
      <el-row>
        <el-col :span="6" :offset="17">
          <div class="grid-content" style="line-height: 40px;float: right;">
            <a class="el-icon-circle-close"  style="cursor: pointer;;font-weight: bolder;font-size: 25px" @click="" title="全删"></a>

            <!-- <el-tooltip content="更多" placement="bottom" effect="light">
               <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
             </el-tooltip>-->
          </div>
        </el-col>
      </el-row>
      <!--视频-->
      <el-row :gutter="10">
        <!--<el-col :span="4" v-for="" v-bind:key="">-->
        <el-col :span="6"  v-for="(record,index) in record" v-bind:key="record.videoId">
          <!--<el-card style="height: 200px;margin-bottom: 10px;">-->
            <div style="height: 170px;float: left;width: 100%"><router-link :to="{path:'/videoplay/'+record.videoId}">
              <!--<router-link :to="path:'/videoplay/'+video.videoUrl">-->

              <video  width=90%  style="margin: auto;height:130px"    class="video-js vjs-default-skin vjs-big-play-centered" playRate controls>
                <source
                  :src="record.videoUrl"
                  type="video/mp4">
                <!--type="application/x-mpegURL"-->
              </video>
            </router-link>
              <div style="width:60%;float:left;font-weight:bolder;margin-top: 10px;color:black;height: 20px;line-height: 100%">
                {{record.videoName}}
              </div>
              <div style="width:40%;float:left;margin-top: 10px;height: 20px;line-height: 100%">
                <a class="el-icon-circle-close"  style="cursor: pointer;font-size: 20px;font-weight: bolder" title="删除" @click=""></a>
              </div>
            </div>

          <!--</el-card>-->
        </el-col>

      </el-row>
    </el-row>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total" :current-page="this.params.page">
    </el-pagination>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import axios from 'axios';
  import swal from 'sweetalert'
  export default {
    data() {
      return {
        total:0,
        params:{
          size:1,
          page:1
        },
        path: '',
        user: {
          userId: '',
          userName: '',
          userMoney: '',
          userStatue: ''
        },
        playerOptions: {
          playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
          autoplay: false, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4", // 类型
            src: 'http://candy-jing.oss-cn-beijing.aliyuncs.com/111.mp4' // url地址
          }],
          poster: '../static/img/bala.jpg', // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true, // 当前时间和持续时间的分隔符
            durationDisplay: true, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: true // 是否显示全屏按钮
          },
        },

        imageUrl: '',
        input:'',
        msg: '',
        collection:{
          userId:'',
          videoId:''
        },
        videos:[],
        record:[]
      }
    },
    mounted(){

      var userId=Cookies.get('userId');
      this.user.userId=userId;
      this.query();

    },
    methods: {
      query:function(){
        var url="api/findUserAllRecord/"+this.user.userId+"/"+this.params.page+"/"+this.params.size
        axios.get(url).then(res=>{
          this.record=res.data.list
          this.total=res.data.total
        })
      },
      changePage:function (page) {
        this.params.page=page;
        this.query();
      }
    },
  }
</script>

<style scoped>
  .video-js{
    /*height: 500px;*/
    width: 90%;
  }

  .main {
    position: relative;
    top: 20px;
  }
  .message {
    position: relative;
    overflow:auto;
    top: 20px;
    width: 100%;
    height: 40%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5px;
  }
  .note{
    /*position: absolute;*/
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    /*overflow-y: auto;*/
  }
  a:hover{
    color:red;
  }
</style>

