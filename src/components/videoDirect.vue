<template>
  <div class="hello" style="width: 95%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <el-main style="margin-top: 80px;">

        <!--视频直播-->
        <el-card style="background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;">
        <el-row :gutter="10" style="width: 94%;margin: auto">
          <el-col :span="20">
            <div style="width: 100%;">
              <!--<router-link :to="{path:'/shopDetial/'+shop.shopId}">-->
              <div style="float: left;width: 100%">
                <!--<canvas  id="canvasBarrage"></canvas>-->

                <video-player class="video-player vjs-custom-skin"
                              ref="videoPlayer"
                              :playsinline="true"
                              :options="playerOptions"
                              @play="onPlayerPlay($event)"
                              @pause="onPlayerPause($event)"
                              @ended="onPlayerEnded($event)"
                              @waiting="onPlayerWaiting($event)"
                              @playing="onPlayerPlaying($event)"
                              @loadeddata="onPlayerLoadeddata($event)"
                              @timeupdate="onPlayerTimeupdate($event)"
                              @canplay="onPlayerCanplay($event)"
                              @canplaythrough="onPlayerCanplaythrough($event)"
                              @statechanged="playerStateChanged($event)"
                              @ready="playerReadied"
                >
                  <source
                    src="http://candy-jing.oss-cn-beijing.aliyuncs.com/111.mp4"
                    type="video/mp4">
                  >
                </video-player>


                <!--<video id="example-video" width=100% height=500 style="margin: auto" class="video-js vjs-default-skin vjs-big-play-centered" playRate controls>-->
                 <!--<source-->
                   <!--src="https://candy-jing.oss-cn-beijing.aliyuncs.com/01.mp4"-->
                   <!--type="video/mp4">-->
                  <!--&lt;!&ndash;<template>&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-select v-model="value" placeholder="倍速">&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                        <!--&lt;!&ndash;id="selRate"&ndash;&gt;-->
                        <!--&lt;!&ndash;v-for="item in options"&ndash;&gt;-->
                        <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                        <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                        <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                  <!--&lt;!&ndash;</template>&ndash;&gt;-->
                  <!--&lt;!&ndash;<source&ndash;&gt;-->
                    <!--&lt;!&ndash;&ndash;&gt;-->
                  <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                  <!--&lt;!&ndash;type="application/x-mpegURL"&ndash;&gt;-->
                <!--</video>-->
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="float: left;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;opacity:0.8;height: 118px;width: 100%;margin-bottom: 15px;border: 1px solid aqua">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)"
                            @ended="onPlayerEnded($event)"
                            @waiting="onPlayerWaiting($event)"
                            @playing="onPlayerPlaying($event)"
                            @loadeddata="onPlayerLoadeddata($event)"
                            @timeupdate="onPlayerTimeupdate($event)"
                            @canplay="onPlayerCanplay($event)"
                            @canplaythrough="onPlayerCanplaythrough($event)"
                            @statechanged="playerStateChanged($event)"
                            @ready="playerReadied"
              >
                <source
                  src="http://candy-jing.oss-cn-beijing.aliyuncs.com/111.mp4"
                  type="video/mp4">
                >
              </video-player>
            </div>
            <div style="float: left;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;opacity:0.8;height: 118px;width: 100%;margin-bottom: 15px;border: 1px solid aqua">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)"
                            @ended="onPlayerEnded($event)"
                            @waiting="onPlayerWaiting($event)"
                            @playing="onPlayerPlaying($event)"
                            @loadeddata="onPlayerLoadeddata($event)"
                            @timeupdate="onPlayerTimeupdate($event)"
                            @canplay="onPlayerCanplay($event)"
                            @canplaythrough="onPlayerCanplaythrough($event)"
                            @statechanged="playerStateChanged($event)"
                            @ready="playerReadied"
              >
                <source
                  src="http://candy-jing.oss-cn-beijing.aliyuncs.com/111.mp4"
                  type="video/mp4">
                >
              </video-player>
            </div>
            <div style="float: left;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;opacity:0.8;height: 118px;width: 100%;margin-bottom: 15px;border: 1px solid aqua">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)"
                            @ended="onPlayerEnded($event)"
                            @waiting="onPlayerWaiting($event)"
                            @playing="onPlayerPlaying($event)"
                            @loadeddata="onPlayerLoadeddata($event)"
                            @timeupdate="onPlayerTimeupdate($event)"
                            @canplay="onPlayerCanplay($event)"
                            @canplaythrough="onPlayerCanplaythrough($event)"
                            @statechanged="playerStateChanged($event)"
                            @ready="playerReadied"
              >
                <source
                  src="http://candy-jing.oss-cn-beijing.aliyuncs.com/111.mp4"
                  type="video/mp4">
                >
              </video-player>
            </div>
            <div style="float: left;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;opacity:0.8;height: 118px;width: 100%;margin-bottom: 15px;border: 1px solid aqua">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            :playsinline="true"
                            :options="playerOptions"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)"
                            @ended="onPlayerEnded($event)"
                            @waiting="onPlayerWaiting($event)"
                            @playing="onPlayerPlaying($event)"
                            @loadeddata="onPlayerLoadeddata($event)"
                            @timeupdate="onPlayerTimeupdate($event)"
                            @canplay="onPlayerCanplay($event)"
                            @canplaythrough="onPlayerCanplaythrough($event)"
                            @statechanged="playerStateChanged($event)"
                            @ready="playerReadied"
              >
                <source
                  src="http://candy-jing.oss-cn-beijing.aliyuncs.com/111.mp4"
                  type="video/mp4">
                >
              </video-player>
            </div>
          </el-col>

        </el-row>
        </el-card>
        <el-row :gutter="10" style="margin-top: 40px">
          <el-col :span="18">

            <el-row :gutter="10">
              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 20px">
                  <div style="height: 40px;float: left;width: 40px;margin-right: 10px">
                    <el-image src="../static/img/zhibo.jpg" style="width: 40px;height: 40px;cursor:pointer" title="直播"></el-image>
                  </div>
                  <div style="height: 40px;float: left;">
                    <span>正在直播</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 40px;float:left;font-size: 16px;color:palevioletred;text-align: center;line-height: 40px">
                  <span>共？播主在线直播</span>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 40px;float:left;font-size: 16px;color:palevioletred;text-align: center;line-height: 40px">
                  <el-button class="el-icon-refresh"></el-button>
                  <span>共？条动态</span>
                </div>
              </el-col>
              <!--更多-->
              <el-col :span="6" >
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <!--遍历直播-->
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
            </el-row>

          </el-col>
          <el-col :span="6" >

            <el-row :gutter="10">

              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;background-color: #d3dce6;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 16px">
                  直播排行
                </div>
              </el-col>
              <!--更多-->
              <el-col :span="6" :offset="12">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>

              <el-col :span="24">
                <!--遍历排行-->
                <div style="height: 260px;background-color: orangered"> </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>
      </el-main>

      <el-footer>
        <!--&lt;!&ndash;dan'mu&ndash;&gt;-->
        <!--<div id="container" class="container">-->
        <!--</div>-->
        <!--<div class="input-box">-->
          <!--&lt;!&ndash;限制用户输入的文字长度，尽量避免用户输入的内容长度超过屏幕的宽度&ndash;&gt;-->
          <!--<input type="text" maxlength="20" placeholder="说点什么吧~">-->
          <!--<button id="btn" class="btn">发送</button>-->
        <!--</div>-->


        <!--bottom-->
        <!--<el-row>-->
          <!--<el-col :span="24"  class="bg-purple">-->
            <!--<div style="height: 170px;line-height: 170px;font-size: 13px;text-align: center;float: left;width: 10%">-->
              <!--<el-image src="../static/img/hz.jpg"></el-image>-->
            <!--</div>-->
            <!--<div style="height: 170px;line-height: 25px;font-size: 13px;text-align: center;float: left;width: 90%">-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<a href="">广播电视节目制作经营许可证：（沪）字第1248号|网络文化经营许可证：沪网文【2016】2296-134号|信息网络传播视听节目许可证：0910417</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="">互联网ICP备案：沪ICP备13002172号-3沪ICP证：沪B2-20100043 |违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3 | 营业执照</a>-->
                <!--</li><br>-->
                <!--<li>-->
                  <!--<a href="">上海互联网举报中心 | 12318全国文化市场举报网站 | 沪公网安备31011002002436号 | 儿童色情信息举报专区</a>-->
                <!--</li><br>-->
                <!--<li>-->
                  <!--<a href="">网上有害信息举报专区：中国互联网违法和不良信息举报中心</a>-->
                <!--</li><br>-->
                <!--<li>-->
                  <!--<a href="">亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="">公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888</a>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-row>-->

      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import Cookies from 'js-cookie'

//    弹幕
  /*function $(str)  {
    return document.getElementById(str);
  };
  setInterval(move,200)*/
  /*function move() {

      var spanArray = $('box').children;
      for (var i = 0; i < spanArray.length; i++) {

        spanArray[i].style.left = parseInt(spanArray[i].style.left) - spanArray[i].speed + 'px';
        if((parseInt(spanArray[i].style.left)- spanArray[i].speed)<0){
//          clearInterval(stopImg)
          spanArray[i].hidden;
          spanArray[i].style.left==0;
          spanArray[i].speed==0;
      }
    }

  };*/
  export default {
    components: {
      ElInput,
      ElButton,
      ElImage},
    name: 'index',
    data () {
      return {
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
          poster: '', // 封面地址
//          poster: '../static/img/bala.jpg', // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true, // 当前时间和持续时间的分隔符
            durationDisplay: true, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: true // 是否显示全屏按钮
          },
        },

        comments:[],
        com:{
          videoId:1,
          episodeId:'',
          userId:'',
          userName:'',
          userPic:'',
          commentContent:'',
          commentRid:0,
          commentCount:0,
          commentTime:''
        },

        user:{
          userId:'',
          userName:'',
          userPic:'',
        },

      visible: false,
        activeIndex: '1',
          input:'',
        input1:'',
        /*user:{
              userId:'',
          userName:''
        },*/
        msg: 'Welcome video index',
        value1:'',
//        评分
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] , // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }，
//      分页
        currentPage: 1,
        player:'',
        index:1,
//        倍速
//        options: [
//          {
//            value: '0.5',
//            label: '0.5'
//          },{
//            value: '1',
//            label: '1.0'
//          },{
//            value: '1.25',
//            label: '1.25'
//          },{
//            value: '1.5',
//            label: '1.5'
//          },{
//            value: '2',
//            label: '2.0'
//          }
//        ]

        userName: "", // 用户名
        websocket: null, // WebSocket对象
        aisle: "", // 对方频道号==>视频id
        messageList: [], // 消息列表
        messageValue: "", // 弹幕消息内容
        barrage:{
          videoId:'',
          videoTime:'', //视频当前播放时间
          userId:'',
          barrageContent:'',
        },
        video:{
          videoId:'',
        }

      }
    },
    mounted(){
        this.barrage.videoId=this.$route.params.id;
      this.barrage.videoId=1;   //待删
      this.video.videoId=1;   //待删
        this.com.userId=Cookies.get('userId');
        axios.get("api/findUserByUserId/"+this.com.userId).then(res=>{
            this.user=res.data;
//            console.log(this.user)
        })
      this.findAll();
//      this.findByCommentId();
//      var player = video('example-video');

    },
    beforeDestroy() {//这个才有用
      clearInterval(this.timer)
    },
    methods:{

        /*发送弹幕方法中调用该方法*/
      /*sendBarrage:function () {
          this.barrage.userId=this.user.userId;
          axios.post("api/saveBarrage",this.barrage).then(res=>{
              if (res.data!=null){
//                  alert("success")
              }else {
                  alert("fail")
              }
          })
        },*/

//      分页
      handleSizeChange(val) {
        console.log('每页 ${val} 条');
      },
      handleCurrentChange(val) {
        console.log('当前页: ${val}');
      },

      //弹幕
      sendMsg:function (msg) {
          for (var i=0;i<=msg.length;i++){

            var word = msg[i];
    //         alert(word)
            var length=word.length;//huoqu wenben de changdu
            var span = document.createElement('span');
            var top = parseInt(Math.random() * 500) - 20;
            var color1 = parseInt(Math.random() * 256);
            var color2 = parseInt(Math.random() * 256);
            var color3 = parseInt(Math.random() * 256);
            var color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
            top = top < 0 ? 0 : top;
            span.style.position = 'absolute';
            span.style.top = top + "px";
            span.style.color = color;
            span.style.left = '800px';
            span.style.whiteSpace = 'nowrap';
            span.style.fontSize='20px'
            var nub = (Math.random() * 10) + 1;
            span.setAttribute('speed', nub);
            span.speed = nub;
            span.innerHTML = word;
    //          alert($('box'))
            $('box').appendChild(span);
          }

      },

      sendMsg2:function (msg) {
          var word = msg;
          //         alert(word)
          var length=word.length;//huoqu wenben de changdu
          var span = document.createElement('span');
          var top = parseInt(Math.random() * 500) - 20;
          var color1 = parseInt(Math.random() * 256);
          var color2 = parseInt(Math.random() * 256);
          var color3 = parseInt(Math.random() * 256);
          var color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
          top = top < 0 ? 0 : top;
          span.style.position = 'absolute';
          span.style.top = top + "px";
          span.style.color = color;
          span.style.left = '800px';
          span.style.whiteSpace = 'nowrap';
          span.style.fontSize='20px'
          var nub = (Math.random() * 10) + 1;
          span.setAttribute('speed', nub);
          span.speed = nub;
          span.innerHTML = word;
          //          alert($('box'))

          $('box').appendChild(span);
         this.input1= "";
          if (span.offsetLeft < -length * random * 16) {
            clearInterval(timer);
            mainContent.removeChild(span);
          }
        },


        sendBarrage:function(){
         this.barrage.barrageContent=this.input1;
         this.barrage.userId=this.user.userId;
         axios.post("api/saveBarrage",this.barrage).then(res=>{
           if (res.data!=null){
               console.log(res.data)
//                  alert("success")
           }else {
             alert("fail")
           }
         })
//         alert(word)
         this.sendMsg2(this.barrage.barrageContent);

       },
//      倍速播放

     /* //私聊  无用，勿解
      send:function(){
        if (this.com.userId!=null) {
          this.$router.push("/userMessage")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },*/
      //回复
      replyMessage() {
        this.$prompt('请输入回复信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          //inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '您回复的信息是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },

//      //注册画中画按钮
//      createMyButton () {
//        let Button = videojs.getComponent('Button')
//        let myButton = videojs.extend(Button, {
//          constructor: function (player, options) {
//            Button.apply(this, arguments)
//            this.addClass('fullscreen-enter')
//          },
//          handleClick: () => {
//            // 绑定点击事件
//          },
//          buildCSSClass: function () {
//            return 'vjs-icon-custombutton vjs-control vjs-button'
//          }
//        })
//
//        //注册
//        videojs.registerComponent('myButton', myButton)
//
//        this.$nextTick(() => {
//          // 添加到controlBar中
//          this.$refs.videoPlayer1.player.getChild('controlBar').addChild('myButton')
//        })
//      },


      // 播放回调
      onPlayerPlay(player) {
        //console.log('player play!', player)
        /*开始播放则定时器启动，websocket连接，向后台请求弹幕数据*/
        this.conectWebSocket();
        if (this.timer){
          clearInterval(this.timer);
        } else {
          this.timer=setInterval(()=>{
            this.sendMessage();
          },1000)
        }
      },

      // 暂停回调
      onPlayerPause(player) {
        //console.log('player pause!', player)
        /*视频暂停，定时器暂停，websocket连接*/
        this.websocket.close();
        clearInterval(this.timer);
//        beforeDestroy();
      },

      // 视频播完回调
      onPlayerEnded($event) {
        //console.log($event)
        this.websocket.close();
        clearInterval(this.timer);
      },

      // DOM元素上的readyState更改导致播放停止
      onPlayerWaiting($event) {
       // console.log($event)
        this.websocket.close();
//        clearInterval(this.timer);
      },

      // 已开始播放回调
      onPlayerPlaying($event) {
        //console.log($event)
        this.conectWebSocket();

          this.timer=setInterval(()=>{
            this.sendMessage();
          },1000)

      },

      // 当播放器在当前播放位置下载数据时触发
      onPlayerLoadeddata($event) {
        //console.log($event)
      },

      // 当前播放位置发生变化时触发。
      onPlayerTimeupdate($event) {
        this.barrage.videoTime=($event.cache_.currentTime).toFixed();
      },

      //媒体的readyState为HAVE_FUTURE_DATA或更高
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },

      //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },

      //播放状态改变回调
      playerStateChanged(playerCurrentState) {
        //console.log('player current update state', playerCurrentState)
      },

      //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
      playerReadied(player) {
        //console.log('example player 1 readied', player);
      },


      conectWebSocket: function() {
        console.log("建立连接");

          //判断当前浏览器是否支持WebSocket
          if ("WebSocket" in window) {
            this.websocket = new WebSocket(
                /*根据视频id建立连接*/
              "ws://localhost:8082/websocket/" + this.video.videoId
            );

          } else {
            alert("不支持建立socket连接");
          }
          //连接发生错误的回调方法
          this.websocket.onerror = function() {

          };
          //连接成功建立的回调方法
          this.websocket.onopen = function(event) {

          };
          //接收到消息的回调方法
          var that = this;
          this.websocket.onmessage = function(event) {
              console.log(event)
            var object = eval("(" + event.data + ")");
            console.log(object);
            console.log("接收到的消息："+object.msg);
            this.messageList=object.msg;
            console.log(this.messageList)
            if (object.type == 0) {
              // 提示连接成功
              console.log("连接成功");
              that.showInfo(object.people, object.aisle);
//              this.aisle=object.aisle;
//              alert(this.aisle)
            }
            if (object.type == 1) {
              //显示消息
              console.log("接受消息");
              that.messageList.push(object);
              that.sendMsg(this.messageList);
//              document.getElementById('box').innerHTML += object.msg + '<br/>';
            }
          };
          //连接关闭的回调方法
          this.websocket.onclose = function() {
            clearInterval(this.timer);
          };
          //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
          window.onbeforeunload = function() {
//            this.websocket.close();

          };
      },


      // 发送消息
      sendMessage: function() {
        var socketMsg = { msg: this.barrage.videoTime, toUser: this.aisle };
        /*if (this.videoId == "") {
          //群聊.
          socketMsg.type = 0;
        } else {*/
          //单聊.
          socketMsg.type = 1;
//        }
        this.websocket.send(JSON.stringify(socketMsg));
      },
      showInfo: function(people, aisle) {
        /*this.$notify({
          title: "当前在线人数：" + people,
          message: "您的频道号：" + aisle,
          duration: 0
        });*/
        this.aisle=aisle;
      },


      /*评论*/
      findAll:function () {
        axios.get("api/findAllComment").then(res=>{
          if (res.data!=null){
            this.comments=res.data;
//            console.log(this.comments)
          }else {
            alert("暂无评论")
          }
        })
      },
      /*点赞*/
      like:function (index) {
          this.com=this.comments[index];

          this.com.commentCount=this.com.commentCount+1;
        axios.post("api/updateComment",this.com).then(res=>{
          if (res.data!=null){
//              alert("success")
          }
        })
      },

     /* findByCommentId:function (commentId) {
        axios.get("api/").then(res=>{

        })
      },*/

      save:function () {
        this.com.commentRid=2;
        console.log(this.com)
        axios.post("api/saveComment",this.com).then(res=>{
          if (res.data!=null){
            alert("success")
            this.findAll();
          }else {
            alert("fail")
          }
        })
      },

      /*delete:function (commentId) {
          axios.get
        this.findAll();
      },*/

      /*toUserMsg:function (index) {
        this.$router.push('/moreMessage/'+this.comments[index].userId)
      }*/
    }

}
</script>


<style>
  <!--视频样式-->
  .vjs-poster{
    /*background-repeat: no-repeat;*/
    background-repeat: inherit;
  }
  .el-image__error, .el-image__inner, .el-image__placeholder{
    height: inherit;
    width: inherit;
  }
  .video-js{
    height: 500px;
    width: 100%;
  }
  .el-header {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    text-align: center;
    line-height: 60px;
    margin-bottom: 10px;
  }
  .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    margin-bottom: 10px;

  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-dropdown-menu{
    width: 120px;
  }
  .el-dropdown-item{
    width: 100px;
  }
  .router-link{
    color: black;
    font-size: 14px;
  }
  .el-dropdown{
    color: black;
    font-size: 16px;
    line-height: 60px;
  }

  .el-main{
    overflow: inherit;
  }
  .el-row {
    /*margin-bottom: 20px;*/
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  /*轮播图*/
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 700px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .note{
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    overflow-y: auto;
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
/*a {*/
  /*color: #42b983;*/
/*}*/
a:link {
  color: #000000;
  text-decoration-line: none;

}
a:hover {
  color: black;
}
  .body{
    font-family: 楷体;
  }
</style>
