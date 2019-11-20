<template>
  <div class="hello" style="margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <el-header style="width:100%;height: 80px;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;opacity: 0.9" class="header">
        <div style="width: 100%;margin: auto">
          <el-row :gutter="10">
            <!--<el-col :span="4">-->
            <!--<div class="grid-content " style="height: 60px;font-size: 16px">-->
            <!--<el-image src="http://pxx4c7852.bkt.clouddn.com/logo2%20%281%29.jpg" style="height: 60px;width:150px;border-radius: 3px"></el-image>-->
            <!--</div>-->
            <!--</el-col>-->
            <el-col :span="10" :offset="2">
              <div class="grid-content " style="height: 80px;font-size: 16px;">
                <div class="grid-content " style="height: 60px;font-size: 16px;float: left;">
                  <router-link :to="{name:'index'}"><el-image src="../static/img/bala2.gif" style="height: 80px;width:150px;border-radius: 3px" title="返回首页"></el-image></router-link>
                </div>
                <div id="sy" class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                     @mousemove="over(1)"
                     @mouseleave="leave(1)"
                     :style="active"

                >
                  <router-link type="info" :to="{name:'index'}" style="color:black;"><a style="cursor: pointer">首页</a></router-link>
                </div>
                <div class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                     @mousemove="over(2)"
                     @mouseleave="leave(2)"
                     :style="a"
                >
                  <router-link type="info" :to="{name:'videoDirect'}" style="color:black;"><a style="cursor: pointer">直播</a></router-link>
                  <!--<a ></a>-->
                </div>
                <!--<el-dropdown>-->
                  <!--<div class="grid-content " style="height:60px;font-size: 16px;float: left;margin-top: 10px"-->
                       <!--@mousemove="over(9)"-->
                       <!--@mouseleave="leave(9)"-->
                       <!--:style="h"-->
                  <!--&gt;-->
                  <!--<span class="el-dropdown-link">-->
                    <!--<a style="cursor: pointer">个人中心</a>-->
                    <!--<i class="el-icon-arrow-down el-icon&#45;&#45;left"></i>-->
                  <!--</span>-->
                    <!--<el-dropdown-menu slot="dropdown">-->
                      <!--<el-dropdown-item><a @click="toUser()">完善资料</a></el-dropdown-item>-->
                      <!--<el-dropdown-item><a @click="toModify()">修改密码</a></el-dropdown-item>-->
                      <!--<el-dropdown-item><a @click="toMessage()">信息中心</a></el-dropdown-item>-->
                    <!--</el-dropdown-menu>-->
                  <!--</div>-->
                <!--</el-dropdown>-->

                <el-dropdown style="float: left;margin-left: 10px">

                <span class="el-dropdown-link">
                  <div class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                       @mousemove="over(3)"
                       @mouseleave="leave(3)"
                       :style="b"
                  >
                    <a style="cursor: pointer">赛事</a>
                    <!--<i class="el-icon-arrow-down el-icon&#45;&#45;left"></i>-->
                  </div>
                </span>
                  <el-dropdown-menu slot="dropdown" style="width:240px;">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                    <el-dropdown-item>4</el-dropdown-item>
                    <el-dropdown-item>5</el-dropdown-item>
                  </el-dropdown-menu>

                </el-dropdown>
                <el-dropdown style="float: left;margin-left: 10px">
                  <div class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                       @mousemove="over(4)"
                       @mouseleave="leave(4)"
                       :style="c"
                  >
                <span class="el-dropdown-link">
                  <a style="cursor: pointer">视频</a>
                  <!--<i class="el-icon-arrow-down el-icon&#45;&#45;left"></i>-->
                </span>
                    <el-dropdown-menu slot="dropdown" style="width:240px;">
                      <el-dropdown-item>1</el-dropdown-item>
                      <el-dropdown-item>2</el-dropdown-item>
                      <el-dropdown-item>3</el-dropdown-item>
                      <el-dropdown-item>4</el-dropdown-item>
                      <el-dropdown-item>5</el-dropdown-item>
                    </el-dropdown-menu>
                  </div>
                </el-dropdown>
              </div>
            </el-col>

            <!--<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
            <el-col :span="8" :offset="3">
              <div class="grid-content " style="height: 80px;margin-top: 10px">

                <!--VIP-->
                <div class="grid-content " style="height: 60px;width:60px;float: left"
                     @mousemove="over(11)"
                     @mouseleave="leave(11)"
                     :style="j"
                >
                 <span type="info" style="color:black;cursor: pointer;margin-right: 10px">
                    <el-popover
                      placement="top-start"
                      width="400"
                      trigger="hover"
                    >
                        <!--title="标题"-->
                      <!--content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"-->
                      <!--<el-button slot="reference">hover 激活</el-button>-->
                        <el-row :gutter="10">
                          <el-col :span="24">
                            <h3>请选择支付方式</h3>
                          </el-col>
                          <el-col :span="12">
                            <el-radio-group v-model="radio2">
                              <el-radio-button label="账户余额支付"></el-radio-button>
                            </el-radio-group>
                          </el-col>
                          <el-col :span="12">
                            <el-radio-group v-model="radio2">
                              <el-radio-button label="支付宝支付"></el-radio-button>
                            </el-radio-group>
                          </el-col>
                          <el-col :span="24">
                            <h3>请选择会员充值期限</h3>
                          </el-col>
                          <el-col :span="8">

                            <div style="float: left;text-align: center">
                              <el-card style="height: 120px;width: 100%;cursor: pointer">
                                <el-image src="../static/img/yue.jpg" style="width: 100%;height:100%" title="15元/月，普通会员"></el-image>
                             </el-card>
                              <el-radio-group v-model="radio1">
                                <el-radio-button label="$15元/月"></el-radio-button>
                              </el-radio-group>
                            </div>

                          </el-col>
                          <el-col :span="8">
                            <div style="float: left;text-align: center">
                              <el-card style="height: 120px;width: 100%;cursor: pointer">
                                <el-image src="../static/img/nian.jpg" style="width: 100%;height: 100%" title="50元/季，普通会员"></el-image>
                              </el-card>
                              <el-radio-group v-model="radio1">
                                <el-radio-button label="$50元/季"></el-radio-button>
                              </el-radio-group>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div style="float: left;text-align: center">
                              <el-card style="height: 120px;width: 100%;cursor: pointer">
                                <el-image src="../static/img/huiyuan.jpg" style="width: 100%;height: 100%" title="200元/年，普通会员"></el-image>
                              </el-card>
                              <el-radio-group v-model="radio1">
                                <el-radio-button label="$200元/年"></el-radio-button>
                              </el-radio-group>
                            </div>
                          </el-col>
                          <el-col :span="18" :offset="3" style="font-size: 12px;margin-top: 20px">
                            <div style="float: left;width: 100%">
                              <el-button type="primary" style="width: 100%" plain  @click="payForVip()">充值</el-button>
                            </div>
                          </el-col>
                        </el-row>
                      <a  type="info" slot="reference" style="font-size: 16px" title="VIP">VIP</a>
                      </el-popover>

                </span>
                </div>

                <!--用户充值-->
                <div class="grid-content " style="height: 60px;float: left"
                     @mousemove="over(12)"
                     @mouseleave="leave(12)"
                     :style="m"
                >
                  <el-dropdown>
                    <div>
                  <span class="el-dropdown-link" style="margin-right: 10px">
                    <a>充值</a>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                      <el-dropdown-menu slot="dropdown" style="width:130px;">
                        <el-dropdown-item><a @click="WeChatPay()">微信充值</a></el-dropdown-item>
                        <el-dropdown-item><a @click="aliPay()" >支付宝充值</a></el-dropdown-item>
                      </el-dropdown-menu>
                    </div>
                  </el-dropdown>
                </div>

                <!--历史-->
                <!--<div class="grid-content " style="height: 60px;float: left"-->
                     <!--@mousemove="over(5)"-->
                     <!--@mouseleave="leave(5)"-->
                     <!--:style="d"-->
                <!--&gt;-->
                  <!--<span type="info" style="color:black;cursor: pointer;margin-right: 10px" ><a @click="logout()" class="el-icon-pie-chart" :size="50">历史</a></span>-->
                <!--</div>-->
                <!--登录-->
                <div class="grid-content " style="height: 60px;width:60px;float: left"

                >
                  <!--@mousemove="over(6)"
                     @mouseleave="leave(6)"
                     :style="e"-->
                  <router-link type="info" :to="{name:'userLogin'}" style="color:black" v-if="this.user.userId==null" ><a class="el-icon-user" >登录</a></router-link>
                  <span style="color:black;" v-if="this.user.userId!=null">
                 <!-- <a>{{user.userName}}</a>-->
                  <el-dropdown>
                <div class="grid-content " style="height:60px;font-size: 16px;float: left;"

                >
                   <!--@mousemove="over(9)"-->
                  <!--@mouseleave="leave(9)"-->
                  <!--:style="h"-->
                  <span class="el-dropdown-link">
                    <!--<a style="cursor: pointer">个人中心</a>-->
                    <el-avatar slot="reference" :src="this.user.userPic" style="margin-top: 10px;margin-left: 10px;margin-right: 10px" :size="35" title="个人中心"></el-avatar>

                    <!--<i class="el-icon-arrow-down el-icon&#45;&#45;left"></i>-->
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><a @click="toUser()">完善资料</a></el-dropdown-item>
                    <el-dropdown-item><a @click="toModify()">修改密码</a></el-dropdown-item>
                    <el-dropdown-item><a @click="toMessage()">信息中心</a></el-dropdown-item>
                  </el-dropdown-menu>
                </div>
              </el-dropdown>
                </span>
                </div>


                <!--<div class="grid-content " style="height: 60px;width:50px;float: left"-->
                     <!--@mousemove="over(6)"-->
                     <!--@mouseleave="leave(6)"-->
                     <!--:style="e"-->
                <!--&gt;-->
                  <!--<router-link type="info" :to="{name:'userLogin'}" style="color:black" v-if="this.user.userId==null" ><a class="el-icon-user" >登录</a></router-link>-->
                  <!--<span style="color:black;" v-if="this.user.userId!=null"><a>{{user.userName}}</a></span>-->
                <!--</div>-->
                <!--注册-->
                <div class="grid-content " style="height: 60px;width:50px;float: left"
                     @mousemove="over(7)"
                     @mouseleave="leave(7)"
                     :style="f"
                >
                  <router-link type="info" :to="{name:'userRegist'}" style="color:black"><a>注册</a></router-link>
                </div>
                <!--退出-->
                <div class="grid-content " style="height: 60px;width:50px;float: left"
                     @mousemove="over(8)"
                     @mouseleave="leave(8)"
                     :style="g"
                >
                  <span type="info" style="color:black;cursor: pointer"><a @click="logout()">退出</a></span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>


      <el-main style="width: 90%;margin: auto;padding-top: 100px"
               v-loading="loading"
               element-loading-text="拼命下载中"
               element-loading-spinner="el-icon-loading"
               element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-row :gutter="10">
          <el-col :span="14" :offset="5">
            <!-- <div class="grid-content " style="height: 60px;margin-top: 20px">
               &lt;!&ndash;搜索&ndash;&gt;
               <el-input ref="searchName" type="text" style="width: 75%;margin: auto;margin-top: 10px" placeholder="想搜索点什么呢~^_^"
                         v-model="input"
               />
               <el-button type="primary" icon="el-icon-search" style="width: 100px" plain @click="search()"></el-button>
             </div>-->
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" :offset="18">
            <div class="grid-content" style="line-height: 40px;float: right;">
              <!-- <el-tooltip content="更多" placement="bottom" effect="light">
                 <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
               </el-tooltip>-->
            </div>
          </el-col>
        </el-row>
        <!--视频-->
        <el-row :gutter="10">
          <!--<el-col :span="4" v-for="" v-bind:key="">-->
          <el-col :span="6"
                  v-for="(video,index) in videos"
                  v-bind:key="video.pk_video_id">
            <el-card style="height: 200px;margin-bottom: 10px;font-size:14px">
              <div style="height: 150px;float: left;width: 100%"><router-link :to="{path:'/videoplay/'+video.pk_video_id}">
                <!--<router-link :to="path:'/videoplay/'+video.videoUrl">-->

                <video  width=100%  style="margin: auto;height:130px"    class="video-js vjs-default-skin vjs-big-play-centered" playRate controls>
                  <source
                    :src="video.idx_video_url"
                    type="video/mp4">
                  <!--type="application/x-mpegURL"-->
                </video>
              </router-link>

              </div>
              <div style="height: 40px;float: left;line-height:100%;width: 100%;text-align: center">
                <div style="width:50%;float:left;">
                  {{video.idx_video_name}}

                </div>
                <div style="width:15%;float:left" @click="like(video.pk_video_id)">
                  <el-tooltip content="点赞" >
                    <a  class="el-icon-star-off"  plain style="font-size: 18px"></a>
                  </el-tooltip>
                </div>
                <div style="width:15%;float:left" @click="favorite(video.pk_video_id)">
                  <el-tooltip content="收藏" >
                    <a  class="el-icon-folder-opened" plain style="font-size: 18px"></a>
                  </el-tooltip>
                </div>
                <div style="width:15%;float:left" @click="download(video.pk_video_id)" >
                 <!--dialogVisible = true,-->
                  <el-tooltip content="下载" >
                    <a class="el-icon-download" plain style="font-size: 18px"></a>
                  </el-tooltip>
                </div>
                <!--<div>-->
                  <!--<el-dialog-->
                    <!--title="请选择文件夹"-->
                    <!--:visible.sync="dialogVisible"-->
                    <!--width="30%"-->
                    <!--:before-close="handleClose">-->
                    <!--&lt;!&ndash;<input type="file" name="filename" directory=""&ndash;&gt;-->
                           <!--&lt;!&ndash;nwdirectory="" id="open" style="display: none">&ndash;&gt;-->
                    <!--<input type="file" :id="id" name="filname" class="getImgUrl_file" @change="preview($event)">-->
                    <!--&lt;!&ndash;webkitdirectory multiple&ndash;&gt;-->
                    <!--<el-input id="input01"-->
                              <!--type="textarea"-->
                              <!--:autosize="{ minRows: 2, maxRows: 10}"-->
                              <!--placeholder="请选择文件夹"-->
                              <!--v-model="textarea">-->
                    <!--</el-input>-->

                    <!--<input-->
                    <!--type="file"-->
                    <!--hidden-->
                    <!--directory=""-->
                    <!--nwdirectory=""-->
                    <!--ref={ref => {this.srcFolder = ref;}}-->
                    <!--onChange={(e) => {this.changeFolder(e);}}-->
                    <!--/>-->
                    <!--changeFolder = (e) => {-->
                    <!--const file = e.target.files[0];-->
                    <!--if(file){-->
                    <!--this.setState({-->
                    <!--folderPath: file.path-->
                    <!--});-->
                    <!--}-->
                    <!--};-->

                    <!--</input>-->

                    <!--<span slot="footer" class="dialog-footer">-->
                       <!--<el-button type="primary" v-on:click="openFile()" round>选择文件</el-button>-->
                        <!--<el-button @click="dialogVisible = false" round>取 消</el-button>-->
                        <!--<el-button type="primary" v-on:click="dialogVisible = true,getObjectURL(this.filename)" round>确 定</el-button>-->
                  <!--</span>-->
                  <!--</el-dialog>-->
                <!--</div>-->

              </div>

            </el-card>
          </el-col>

        </el-row>


      </el-main>

      <el-footer style="width:100%;height: 350px;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;">
        <el-row :gutter="10"  style="margin-left: inherit;margin-right: inherit">
          <el-col :span="8"  >
            <div style="height: 120px;border-right: solid 1px white;margin-top: 5%;">
              <div style="float: left;height: 25%;width: 100%;font-size: 16px;line-height: 100%;margin-top: 10px;text-align: left;margin-left: 35px">
                <span style="text-align: left;font-size: 20px;font-weight: bolder">bala</span>
              </div>
              <div style="float: left;height: 75%;width: 100%;font-size: 16px;line-height: 33%">
                <span style="width: 33%;height: 33%;float: left"><a href="/">关于我们</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">加入我们</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">bala认证</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">联系我们</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">友情链接</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">Investor Relations</a></span>
              </div>
            </div>
          </el-col>
          <el-col :span="8" >
            <div style="height: 120px;text-align: left;margin-top: 5%;border-right: solid 1px white">
              <div style="float: left;height: 25%;width: 100%;font-size: 16px;line-height: 100%;margin-top: 10px;text-align: left">
                <span style="text-align: left;font-size: 16px;font-weight: bolder">传送门</span>
              </div>
              <div style="float: left;height: 75%;width: 100%;font-size: 16px;line-height: 33%">
                <span style="width: 33%;height: 33%;float: left"><a href="/">帮助中心</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">高级弹幕</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">活动专题页</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">侵权申诉</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">活动中心</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">用户反馈论坛</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">壁纸站</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">专车号服务中心</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">名人堂</a></span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div style="height: 120px;text-align: left">
              <div style="float: left;height: 50%;width: 100%;font-size: 16px;line-height: 100%;margin-top: 10%;">
                <el-image src="../static/img/xiazai.gif" style="width: 50px;height: 50px;float: left;margin-right: 20%;cursor: pointer" title="客户端下载"></el-image>
                <el-image src="../static/img/xinlang.gif" style="width: 50px;height: 50px;float: left;margin-right: 20%;cursor: pointer" title="新浪微博"></el-image>
                <el-image src="../static/img/weixin.gif" style="width: 50px;height: 50px;float: left;cursor: pointer" title="官方微信"></el-image>
              </div>
              <div style="float: left;height: 50%;width: 100%;font-size: 16px;line-height: 100%">
                <span style="width: 33%;height: 33%;float: left"><a href="/">客户端下载</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">新浪微博</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">官方微信</a></span>
              </div>
            </div>
          </el-col>
        </el-row>

        <!--bottom版权-->
        <el-row>
          <el-col :span="24"  >
            <div style="height: 170px;line-height: 170px;font-size: 13px;text-align: center;float: left;width: 10%">
              <el-image src="../static/img/hz.jpg" style="cursor: pointer" title="合作机构"></el-image>
            </div>
            <div style="height: 170px;line-height: 25px;font-size: 13px;text-align: center;float: left;width: 90%">
              <ul>
                <li>
                  <a href="">广播电视节目制作经营许可证：（沪）字第1248号|网络文化经营许可证：沪网文【2016】2296-134号|信息网络传播视听节目许可证：0910417</a>
                </li>
                <li>
                  <a href="">互联网ICP备案：沪ICP备13002172号-3沪ICP证：沪B2-20100043 |违法不良信息举报邮箱：help@balabala.com |违法不良信息举报电话：4000233233转3 | 营业执照</a>
                </li><br>
                <li>
                  <a href="">上海互联网举报中心 | 12318全国文化市场举报网站 | 沪公网安备31011002002436号 | 儿童色情信息举报专区</a>
                </li><br>
                <li>
                  <a href="">网上有害信息举报专区：中国互联网违法和不良信息举报中心</a>
                </li><br>
                <li>
                  <a href="">亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</a>
                </li>
                <li>
                  <a href="">公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888</a>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>

      </el-footer>
    </el-container>
  </div>
</template>

<script>


  import axios from 'axios';
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import Cookies from 'js-cookie'
  import swal from 'sweetalert'
  export default {
    components: {
      ElButton,
      ElImage
    },
    name: 'index',
    data () {
      return {
        loading: false,
//        textarea:'',
//        dialogVisible:false,
        path: '',
        active: '',
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
        f: '',
        g: '',
        h: '',
        i: '',
        j: '',
        m: '',
        user: {
          userId: '',
          userName: '',
          userMoney: '',
          userStatue: ''
        },
        radio1: '$15元/月',
        radio2: '账户余额支付',
        pay: {
          userId: '',
          rechargeVip: '',
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
        user:{
          userId:'',
          userName:'',
          userStatue:''
        },
        collection:{
          userId:'',
          videoId:''
        },
        videos:[]
        }
    },



    mounted(){
      this.user.userId=Cookies.get("userId")
      if (this.user.userId!=''){
        axios.get("api/findUserByUserId/"+this.user.userId).then(res=>{
          this.user=res.data;
          //alert(this.user.userId)
          //console(this.user)
        })
      }else {
        alert("请登录")
        this.$router.push("/userLogin")
      }

      var name=this.$route.params.searchName
      //alert(name)
      var url="api/search/"+name
      axios.get(url).then(res=>{
        if(res.data!=''){
          this.videos=res.data
        }else{
          swal({
            text: "不好意思，没有该视频！",
            icon: "info",
            button: "确定",
          });
        }
      })
    },
    methods: {
//      preview:function(event){
//        let files = document.getElementById(this.id).files[0]
//        this.imgDataUrl =this.getObjectURL(files)
//        this.$emit('sendImgUrl',this.imgDataUrl,this.id)
//      },
//      getObjectURL:function(file) {
//        let url = null ;
//        if (window.createObjectURL!=undefined) { // basic
//          url = window.createObjectURL(file) ;
//        }else if (window.webkitURL!=undefined) { // webkit or chrome
//          url = window.webkitURL.createObjectURL(file) ;
//        }else if (window.URL!=undefined) { // mozilla(firefox)
//          url = window.URL.createObjectURL(file) ;
//        }
//        return url ;
//      },
//
//      openFile: function () {
//        document.getElementById('open').click()
//      },
//      showRealPath: function () {
//        document.getElementById('input01').value = document.getElementById('open').files[0].path
//      },
//      handleClose(done) {
//        this.$confirm('确认关闭？')
//          .then(_ => {
//            done();
//          })
//          .catch(_ => {});
//        }
//      },
      over: function (x) {
        if (x == 1) {
          this.active = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 2) {
          this.a = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 3) {
          this.b = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 4) {
          this.c = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 5) {
          this.d = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 6) {
          this.e = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 7) {
          this.f = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 8) {
          this.g = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 9) {
          this.h = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 11) {
          this.j = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
        if (x == 12) {
          this.m = 'background-color: orangered;border-radius: 0px 10px 0px 10px';
        }
      },
      leave: function (x) {
        if (x == 1) {
          this.active = '';
        }
        if (x == 2) {
          this.a = '';
        }
        if (x == 3) {
          this.b = '';
        }
        if (x == 4) {
          this.c = '';
        }
        if (x == 5) {
          this.d = '';
        }
        if (x == 6) {
          this.e = '';
        }
        if (x == 7) {
          this.f = '';
        }
        if (x == 8) {
          this.g = '';
        }
        if (x == 9) {
          this.h = '';
        }
        if (x == 11) {
          this.j = '';
        }
        if (x == 12) {
          this.m = '';
        }
      },
      //下载
//      download:function (index) {
//
//
//      },
      like: function (id) {
        //alert(id)
        if (this.user.userId != null) {
          var url = "api/like/" + id
          axios.get(url).then(res => {
            if (res.data != null) {
              swal({
                text: "点赞成功！",
                icon: "success",
                button: "确定",
              });
            }
          })
        } else {
          swal({
            text: "您还没有登录！",
            icon: "info",
            button: "确定",
          });
          this.$router.push("/userLogin")
        }

      },
      favorite: function (id) {
        //alert(this.user.userId)
        var userId = this.user.userId
        if (this.user.userId != null) {
          var url = "api/favorite/" + userId + "/" + id
          axios.get(url).then(res => {
            if (res.data == "1") {
              swal({
                text: "收藏成功！",
                icon: "success",
                button: "确定",
              });
            } else {
              swal({
                text: "您已经收藏过该视频了！",
                icon: "info",
                button: "确定",
              });
            }
          })
        } else {
          swal({
            text: "您还没有登录！",
            icon: "info",
            button: "确定",
          });
          this.$router.push("/userLogin")
        }

      },
      download:function (id) {
        if (this.user.userId != null) {
            if(this.user.userStatue==1){
//              swal({
//                text: "下载中！请稍等！",
////                loading: true,
////                icon: "success",
//              });
              this.loading=true;
              var url="api/download/"+id
              axios.get(url).then(res=>{
                if(res.data=="1"){
                  this.loading=false;
                  swal({
                    text: "下载成功！请在您的桌面查看！",
                    icon: "success",
                    button: "确定",
                  });
                }else{
                  swal({
                    text: "下载失败！请检查您的网络！",
                    icon: "info",
                    button: "确定",
                  });
                }
              })
            }else{
              swal({
                text: "对不起！您不是会员！无法下载！",
                icon: "warning",
                button: "确定",
              });
            }
         }else{
          swal({
            text: "您还没有登录！",
            icon: "info",
            button: "确定",
          });
          this.$router.push("/userLogin")
        }

      },

      //直播(跳转到直播页面)
      toOrders: function () {

      },
      /*//微信充值
     WeChatPay() {
     if (this.user.userId!=null) {
     this.$prompt('请输入需要充值的金额', '提示', {
     confirmButtonText: '确定',
     cancelButtonText: '取消',
     inputPattern:"" ,
     inputErrorMessage: '充值金额格式不正确'
     }).then(({ value }) => {
     swal({
     text: "充值的金额:"+value,
     icon: "success",
     button: "确定",
     });
     }).catch(() => {
     swal({
     text: "取消充值",
     icon: "info",
     button: "确定",
     });
     });
     }else {
     this.$message.error('还没登录哦，请登录后再试');
     this.$router.push("/userLogin")
     }
     },*/
    //支付宝支付
    aliPay() {
      if (this.user.userId!=null) {
        this.$prompt('请输入需要充值的金额',
          '提示', {
          confirmButtonText: '确定',
            cancelButtonText: '取消',
          inputPattern: "" ,
            inputErrorMessage: '充值金额格式不正确'
          }).then(({ value }) => {
            swal({
              text: "充值的金额:"+value,
              icon: "success",
              button: "确定",
            });
            axios.post("api/aliPay/"+this.user.userId+"/"+value).then(res => {
              alert(111)
              this.$router.replace({path: '/applyText',query: {htmls:res.data}})
            })
          }).catch(() => {
            swal({
              text: "取消充值",
              icon: "info",
              button: "确定",
            });
          });
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      //用户充值会员
      payfor: function (){
        if (this.user.userId !=null) {
          this.pay.userId=this.user.userId;
          if(this.radio1== "$15元/月"){
            this.pay
              .rechargeMoney=15;
          }
          if(this.radio1== "$50元/季"){
            this.pay
              .rechargeMoney=50;
          }
          if(this.radio1== "$200元/年"){
            this.pay
              .rechargeMoney=200;
          }
          //alert(this.pay.userId)
          //alert(this.pay.rechargeMoney)
          axios.post("api/userRecharge",this.pay).then(res => {
            this.$router.replace({path: '/applyText', query:{htmls:res.data}})
          })
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
    //      个人中心-完善信息
      toUser:function () {
        //alert(666)
        if
        (this.user.userId!=null) {
          this.$router.push("/userDetial")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
    //修改密码
      toModify:function () {
        if
        (this.user.userId!=null) {
          this.$router.push("/updatePassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      toMessage(){
        if (this.user.userId !=null) {
          this.$router.push("/userMessage")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      logout:function () {
        Cookies.remove('userId'); // fail!
        Cookies.remove('userId', {path: '/' });
        this.user.userName= '登录'
        this.$router.go(0)
      },
    }
  }
</script>


<style>
  element.style{
    margin-left: inherit;
    margin-right: inherit;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: black;
  }
  .el-icon-arrow-down {
    font-size: 20px;
  }
  .video-js{
    height: 300px;
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
    overflow: hidden;

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
    width: 120px;
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

  /*视频上传*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    /*width: 178px;*/
    /*height: 178px;*/
    /*line-height: 178px;*/
    text-align: center;
  }
  /*.avatar {*/
  /*width: 178px;*/
  /*height: 178px;*/
  /*display: block;*/
  /*}*/

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
  .hello{
    /*position: absolute;*/
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    /*overflow-y: auto;*/
  }
  .header{ position:fixed; margin-top:0; width:99%;margin: auto ;z-index:9999; }
</style>
