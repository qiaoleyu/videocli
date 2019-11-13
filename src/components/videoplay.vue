<template>
  <div class="hello" style="width: 95%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <el-header style="height: 40px">
        <div style="width: 100%;margin: auto">
          <!--搜索-->
          <el-row :gutter="10">
            <el-col :span="14" :offset="5">
              <div class="grid-content " style="height: 60px">
                <!--搜索-->
                <el-input ref="searchName" type="text" style="width: 75%;margin: auto;margin-top: 10px" placeholder="想搜索点什么呢~^_^"
                          v-model="input"
                />
                <el-button type="primary" icon="el-icon-search" style="width: 100px" plain @click="search()"></el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>

      <el-main>

        <!--视频轮播-->
        <el-row :gutter="10">
          <el-col :span="18">
            <div style="width: 100%;">
              <!--<router-link :to="{path:'/shopDetial/'+shop.shopId}">-->
              <div style="float: left;width: 100%">
                <!--<canvas  id="canvasBarrage"></canvas>-->
                <video id="example-video" width=100% height=500 style="margin: auto" class="video-js vjs-default-skin vjs-big-play-centered" playRate controls>
                 <source
                   src="https://candy-jing.oss-cn-beijing.aliyuncs.com/01.mp4"
                   type="video/mp4">
                  <!--<template>-->
                    <!--<el-select v-model="value" placeholder="倍速">-->
                      <!--<el-option-->
                        <!--id="selRate"-->
                        <!--v-for="item in options"-->
                        <!--:key="item.value"-->
                        <!--:label="item.label"-->
                        <!--:value="item.value">-->
                      <!--</el-option>-->
                    <!--</el-select>-->
                  <!--</template>-->
                  <!--<source-->
                    <!---->
                  <!--&gt;-->
                  <!--type="application/x-mpegURL"-->
                </video>
              </div>

              <div style="float: left;width: 100%;background-color: #000; opacity: 0.8;">
                <el-tooltip content="切换视频" placement="bottom" effect="light">
                  <input type="button"  onClick="switchvideo()" style="height: 40px;width: 80px;font-size: 16px" value="switch"/>
                </el-tooltip>
                <!--<el-input type="text" id="txt" style="height:32px;width:280px;margin-left: 40px"-->
                          <!--placeholder="请输入弹幕内容"-->
                          <!--v-model="input1"-->
                <!--/>-->
                <el-input type="text" id="txt" style="height:32px;width:280px;margin-left: 40px"
                          placeholder="说点什么吧~^_^"
                          v-model="input1"
                />

                <el-button @click="send()" style="height: 40px " plain>发送弹幕</el-button>

                <el-tooltip content="点赞" placement="bottom" effect="light">
                  <el-button icon="el-icon-thumb" type="warning" circle plain style="margin-left: 60px;font-size: 18px"></el-button>
                </el-tooltip>

                <el-tooltip content="收藏" placement="bottom" effect="light" >
                  <el-button type="warning" icon="el-icon-star-off" circle plain style="margin-left: 20px;font-size: 18px"></el-button>
                </el-tooltip>
                <el-tooltip content="打赏" placement="bottom" effect="light">
                  <el-button type="warning" icon="el-icon-coin" circle plain style="margin-left: 20px;font-size: 18px"></el-button>
                </el-tooltip>

                <el-tooltip content="弹幕" placement="bottom" effect="light">
                  <el-switch
                    v-model="value1"
                    style="margin-left: 30px;font-size: 18px"

                    active-text="开关"
                  >
                    <!--inactive-text="关闭"-->
                  </el-switch>
                </el-tooltip>

                <!--弹幕（飘屏设置）-->
                <!--<div id="box" class="box" style="width:100%;float: left;margin: auto"></div>-->

              </div>



              <!--视频数据，详情-->
              <div  style="float:left;text-align: left;margin-left: 10px">
                <div style="height: 40px;padding-top: 20px">
                  <span style="line-height: 40px">视频名称：</span>
                  <span>王者荣耀</span>
                  <!--<span v-text="shop.shopName"></span>-->
                </div>
                <div style="height: 40px;">
                  <span style="line-height: 40px">作者：</span>
                  <!--<span v-text="shop.shopNumber"></span>-->
                  <span>lsdldlk</span>
                </div>
                <div style="height: 40px;">
                  <span style="line-height: 40px">视频类别：</span>
                  <!--<span v-text="shop.shopPrice" style="color: red"></span>-->
                  <span >手游</span>
                </div>
                <div style="height: 40px;">
                  <span style="line-height: 40px">视频描述：</span>
                  <!--<span v-text="shop.factory"></span>-->
                  <span>团战模式游戏，注重团队的配合</span>
                </div>
              </div>

              <!--视频评论-->
              <div style="float: left;width: 100%;height: 200px;text-align: left">
                <el-row :gutter="10">
                  <el-col :span="24">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    </el-menu>
                    <div style="height: 40px;font-size: 20px;font-weight: bolder;margin-left: 10px;line-height: 40px">
                      <span style="margin-right: 20px">评论数量</span>
                      <span>评论</span>
                    </div>
                    <div style="float: left;margin-left: 10px;font-size: 20px;font-weight: bolder;">
                      <span class="demonstration">视频评分：</span>
                    </div>
                    <div style="float: left;margin-left: 20px;font-size: 20px;font-weight: bolder;">
                      <el-rate
                        v-model="value2"
                        show-text
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="10">
                  <el-col :span="24">
                    <div style="height: 40px;font-size: 18px;font-weight: bolder;margin-left: 10px;text-align: center;line-height: 40px">
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">按热度排序</el-menu-item>
                        <el-menu-item index="2">按时间排序</el-menu-item>
                      </el-menu>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="10" style="margin-top: 20px">
                  <el-col :span="4">
                    <div style="height: 80px;font-size: 25px;font-weight: bolder;margin-left: 10px">
                      <el-avatar  src="../static/img/bala2.jpg" :size="80"></el-avatar>
                    </div>
                  </el-col>
                  <el-col :span="14">
                    <div style="height: 80px;font-size: 25px;font-weight: bolder;margin-left: 10px;line-height: 80px">
                      <input v-model="com.commentContent" type="text" style="height: 80px;width: 100%;font-size: 18px" />
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div style="height: 80px;font-size: 25px;font-weight: bolder;margin-left: 10px;line-height: 80px;text-align: center">
                      <el-button style="height: 80px;width: 80%;font-size: 20px;font-weight: bolder;" plain type="primary" @click="save">发表评论</el-button>
                    </div>
                  </el-col>
                </el-row>

                <!--用户信息-->
                <el-row :gutter="10" style="margin-top: 20px">
                  <el-col :span="24">
                    <div style="width:150px;font-size: 25px;font-weight: bolder;margin-left: 10px;background-color: black;float: left;text-align: center">
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                      </el-menu>
                      <el-popover
                        placement="top-start"
                        width="300"
                        trigger="hover"
                        >
                        <!--title="标题"-->
                        <!--content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"-->
                        <!--<el-button slot="reference">hover 激活</el-button>-->
                        <el-row :gutter="10">
                          <el-col :span="24">
                            <div style="float: left;">
                              <el-image src="../static/img/yh1.jpg" style="width: 100%"></el-image>
                            </div>
                          </el-col>
                          <el-col :span="10" :offset="2" style="height:60px;line-height: 60px">
                            <div style="float: left;">
                              <el-avatar src="../static/img/bala2.jpg" :size="60"></el-avatar>
                            </div>
                          </el-col>
                          <el-col :span="12" style="height:60px;line-height: 60px">
                            <div style="float: left;">
                              <span>用户名</span>
                            </div>
                          </el-col>
                          <el-col :span="18" :offset="6" style="font-size: 12px">
                            <div style="float: left;margin-right: 20px;width: 40%">
                              <span style="float: left">关注：</span>
                              <span style="float: left">3</span>
                            </div>
                            <div style="float: left;width: 40%">
                              <span style="float: left">粉丝：</span>
                              <span style="float: left">13</span>
                            </div>
                          </el-col>
                          <el-col :span="12"  style="font-size: 12px;margin-top: 20px">
                            <div style="float: left;width: 100%">
                              <el-button type="primary" style="width: 100%" plain  @click="guanzhu()">+关注</el-button>
                            </div>
                          </el-col>
                          <el-col :span="12"  style="font-size: 12px;margin-top: 20px">
                            <div style="float: left;width: 100%">
                              <el-button type="primary" style="width: 100%" plain @click="send()">发信息</el-button>
                            </div>
                          </el-col>
                        </el-row>
                        <el-avatar slot="reference" src="../static/img/bala2.jpg" :size="60"></el-avatar>
                      </el-popover>
                    </div>
                    <div style="float: left;text-align: left;font-size: 20px;line-height: 60px;margin-right: 40px">

                      <span>用户名</span>

                    </div>
                    <div style="float: left;text-align: left;font-size: 20px;line-height: 60px">

                      <span>评论标题</span>

                    </div>

                    <!--评论信息-->

                    <el-row :gutter="10" style="margin-top: 20px">

                      <el-col :span="20" :offset="4">

                        <div v-for="(item,index) in comments" style="width:99%;font-size: 16px;font-weight: bolder;margin-left: 10px;background-color: beige;float: left;text-align: center">
                          <!--遍历评论信息-->

                          <el-row :gutter="10" style="margin-top: 20px">
                            <el-col :span="2">
                              <div style="float: left;">
                                <el-avatar slot="reference" src="item.userPic" :size="30"></el-avatar>
                              </div>
                            </el-col>
                            <el-col :span="2">
                              <div style="float: left;">
                                <span>{{item.userName}}</span>
                              </div>
                            </el-col>
                            <el-col :span="8">
                              <div style="float: left;">
                                <span>{{item.commentContent}}</span>
                              </div>
                            </el-col>
                          </el-row>

                          <el-row :gutter="10" >
                            <el-col :span="3">
                              <div style="float: left;">
                                <span >{{item.commentTime}}</span>
                              </div>
                            </el-col>
                            <el-col :span="3">
                              <div style="float: left;">
                                <el-badge :value="item.commentCount" class="item" type="primary">
                                  <el-button icon="el-icon-thumb" type="warning" circle plain style="font-size: 8px" @click="like(index)"></el-button>
                                </el-badge>
                                  <!--<sapn>{{item.commentCount}}</sapn>-->
                              </div>
                            </el-col>
                            <el-col :span="3">
                              <div style="float: left;">
                                <a @click="onMessage" style="cursor: pointer">回复</a>
                              </div>
                            </el-col>
                          </el-row>
                        </div>
                      </el-col>

                    </el-row>

                    <!--分页-->
                    <el-row :gutter="10" style="margin-top: 20px">
                      <el-col :span="24">
                        <el-pagination
                          background
                          @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :current-page="currentPage"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="400"
                          style="text-align: center"
                        >
                        </el-pagination>
                      </el-col>
                    </el-row>

                  </el-col>
                </el-row>


              </div>

            </div>
            <!--</router-link>-->
          </el-col>
          <el-col :span="6">
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%">

            </div>
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

//  弹幕
//  function $(str)  {
//    return document.getElementById(str);
//  };
//  setInterval(move,200)
//  function move() {
//
//      var spanArray = $('box').children;
//      for (var i = 0; i < spanArray.length; i++) {
//
//        spanArray[i].style.left = parseInt(spanArray[i].style.left) - spanArray[i].speed + 'px';
////        if((parseInt(spanArray[i].style.left)- spanArray[i].speed)<0){
////          clearInterval(stopImg)
////          spanArray[i].hidden;
//          spanArray[i].style.left==0;
//          spanArray[i].speed==0;
////      }
//    }
//
//  }
  export default {
    components: {
      ElInput,
      ElButton,
      ElImage},
    name: 'index',
    data () {
      return {
        visible: false,
        activeIndex: '1',
          input:'',
        input1:'',
        user:{
              userId:1,
          userName:''
        },
        comments:[],
        com:{
          videoId:1,
          episodeId:'',
          userId:2,
          userName:'gh',
          userPic:'',
          commentContent:'',
          commentRid:0,
          commentTime:'',
          commentCount:''
        },
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
      }
    },
    mounted(){
      this.findAll();
      this.findByCommentId();
//      var player = videojs('example-video');

      //      倍速播放
//      var player = videojs("example-video").setup({
//        title: "倍速播放",
//        file: "https://huyi-gajia.oss-cn-beijing.aliyuncs.com/file/2019-11-09/d30b6657b28b45d18b909c0b9c9271ee-day05.mp4", // 播放地址
//        playRate: true, // 默认h5播放器有倍速功能，如不需要，可以设置为false
//        // 可配置倍速值数组，格式如下所示
//        playRateConfig: [
//          {label: "×1"},
//          {label: "×2"},
//          {label: "×3"},
//          {label: "×4"},
//        ],
//        autostart: true,
//        stretching: "uniform",
//        repeat: false,
//        volume: 100,
//        controls: true,
//        starttime: 0,
//        primary: "html5",
//        ak: "xxxxxxxxxxxxxxxx"// 公有云平台注册即可获得accessKey
//      });

    },
    methods:{

      findAll:function () {
        axios.get("api/findAllComment").then(res=>{
          if (res.data!=null){
            this.comments=res.data;
            console.log(this.comments)
          }else {
            alert("暂无评论")
          }
        })
      },
      findByCommentId:function (commentId) {
        axios.get("api/").then(res=>{

        })
      },

      save:function () {
        this.com.commentRid=1;

        console.log(this.com)
        axios.post("api/saveComment",this.com).then(res=>{
            this.com.commentContent='';
          if (res.data!=null){
            alert("success")
            this.findAll();
          }else {
            alert("fail")
          }
        })
      },

      delete:function (commentId) {
        this.findAll();
      },

//      点赞
      like:function (index) {
        this.comments[index].commentCount= this.comments[index].commentCount+1;
      },

//      分页
      handleSizeChange(val) {
        console.log('每页 ${val} 条');
      },
      handleCurrentChange(val) {
        console.log('当前页: ${val}');
      },

//      弹幕
//       send:function(){
//         var word = this.input1;
////         alert(word)
//         var length=word.length;//huoqu wenben de changdu
//         var span = document.createElement('span');
//         var top = parseInt(Math.random() * 500) - 20;
//         var color1 = parseInt(Math.random() * 256);
//         var color2 = parseInt(Math.random() * 256);
//         var color3 = parseInt(Math.random() * 256);
//         var color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
//         top = top < 0 ? 0 : top;
//         span.style.position = 'absolute';
//         span.style.top = top + "px";
//         span.style.color = color;
//         span.style.left = '800px';
//         span.style.whiteSpace = 'nowrap';
//         var nub = (Math.random() * 10) + 1;
//         span.setAttribute('speed', nub);
//         span.speed = nub;
//         span.innerHTML = word;
////          alert($('box'))
//
//         $('box').appendChild(span);
//         this.input1= "";
////         if (span.offsetLeft < -length * random * 16) {
////           clearInterval(timer);
////           mainContent.removeChild(span);
////         }
//       },
//      倍速播放
      //私聊
      send(){
        if (this.userId!=null) {
          this.$router.push("/userMessage")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      //回复
      onMessage() {
        this.$prompt('请输入回复信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
//          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
//          inputErrorMessage: '邮箱格式不正确'
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
      }

  }
}
</script>


<style>
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
