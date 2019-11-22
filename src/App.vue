<template>
  <div id="app" class="note">
    <!--<img src="./assets/logo.png">-->
    <!--导航栏-->
    <el-header v-show="(path ==='/'||path==='/videoplay'||path==='/chart'||path==='/upload'||path==='/chatMessage'||path==='/checkUser'||path==='/message'||path==='/document'||path==='/folder'||path==='/videoDirect'||path==='/userMessage'||path==='/uploadVideo'||path==='/updatePassword'||path==='/userDetial')" style="height: 80px;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;opacity: 0.9" class="header" >
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
                <router-link :to="{name:'index'}"><img src="../static/img/bala2.gif" style="height: 80px;width:150px;border-radius: 3px" title="返回首页"></img></router-link>
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
                    <!--&lt;!&ndash;<a style="cursor: pointer">个人中心</a>&ndash;&gt;-->
                    <!--<el-avatar slot="reference" :src="this.user.userPic" style="background-color: aqua;margin-top: 10px;margin-right: 10px;margin-left: 10px" :size="35" title="个人中心"></el-avatar>-->

                    <!--&lt;!&ndash;<i class="el-icon-arrow-down el-icon&#45;&#45;left"></i>&ndash;&gt;-->
                  <!--</span>-->
                  <!--<el-dropdown-menu slot="dropdown">-->
                    <!--<el-dropdown-item><a @click="toUser()">完善资料</a></el-dropdown-item>-->
                    <!--<el-dropdown-item><a @click="toModify()">修改密码</a></el-dropdown-item>-->
                    <!--<el-dropdown-item><a @click="toMessage()">信息中心</a></el-dropdown-item>-->
                  <!--</el-dropdown-menu>-->
                <!--</div>-->
              <!--</el-dropdown>-->

              <el-dropdown style="float: left;margin-left:10px">

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
              <el-dropdown style="float: left;margin-left:10px">
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
                    <div class="grid-content " style="height:60px;width:60px;font-size: 16px;float: left;"

                    >
                       <!--@mousemove="over(9)"-->
                      <!--@mouseleave="leave(9)"-->
                      <!--:style="h"-->
                      <span class="el-dropdown-link"  style="height:60px;width:60px;">
                        <!--<a style="cursor: pointer">个人中心</a>-->
                          <el-avatar slot="reference"  :src="this.user.userPic" style="margin-top: 10px;margin-left: 10px;margin-right: 10px;text-align: center;" :size="40" title="个人中心"></el-avatar>
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
              <!--注册-->
              <div class="grid-content " style="height: 60px;width:60px;float: left"
                   @mousemove="over(7)"
                   @mouseleave="leave(7)"
                   :style="f"
              >
                <router-link type="info" :to="{name:'userRegist'}" style="color:black"><a>注册</a></router-link>
              </div>
              <!--退出-->
              <div class="grid-content " style="height: 60px;width:60px;float: left"
                   @mousemove="over(8)"
                   @mouseleave="leave(8)"
                   :style="g"
              >
                <span type="info" style="color:black;cursor: pointer"><a @click="logout()">退出</a></span>
              </div>

              <!--消息-->
              <div class="grid-content " style="height: 60px;width:60px;float: left"
                   @mousemove="over(13)"
                   @mouseleave="leave(13)"
                   :style="n"
              ><el-badge :value="10" class="item" type="danger" >
                <span type="info" style="color:black;cursor: pointer"><a @click="RequstMessage(user.userId)">消息</a></span>
                <el-dialog
                  title="系统消息"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose">
                  <!--循环信息msg-->
                  <span>{{msg.userName}}向您发起了通讯请求，是否同意</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="toMessage(msg.userId)">确 定</el-button>
                  </span>
                </el-dialog>
              </el-badge>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
  import Cookies from 'js-cookie';
  import axios from 'axios';
  import swal from 'sweetalert'
export default {
  name: 'App',
  data(){
      return{
        path:'',
        active:'',
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:'',
        i:'',
        j:'',
        m:'',
        n:'',
        user:{
          userId:'',
          userName:'',
          userMoney:'',
          userStatue:'',
          userPic:''
        },
        radio1: '$15元/月',
        radio2: '账户余额支付',
        pay:{
          userId:'',
          rechargeVip:'',
        },
        msg:[{
            userName:'',
            userId:''
        }],
        dialogVisible:false
      }
  },
  mounted() {

    this.path = this.$route.path;
    // console.log(this.$route.path)


    var userId=Cookies.get('userId');
    this.user.userId=userId;
    //alert(this.user.userId)
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
  },
  watch:{
    $route(to,from){
      this.path = to.path
    }
  },
  methods:{

    RequstMessage:function (userId) {

      axios.get("api/findMsg/"+userId).then(res=>{
          if (res.data==null){
              alert("没有系统消息哦")
          }else {
            this.dialogVisible=true;
            this.msg=res.data;
          }
      })
    },
    toMessage:function(userId){
        axios.get("api/deleteMsg/"+this.user.userId+"/"+userId).then(res=>{
            /*删除redis缓存*/
        })
      this.dialogVisible=false;
      this.$router.push("/chatMessage/"+userId);
    },
    over:function (x) {
      if(x==1){
        this.active='background-color: orangered;border-radius: 0px 10px 0px 10px';
      } if(x==2){
        this.a='background-color: orangered;border-radius: 0px 10px 0px 10px';
      } if(x==3){
        this.b='background-color: orangered;border-radius: 0px 10px 0px 10px';
      } if(x==4){
        this.c='background-color: orangered;border-radius: 0px 10px 0px 10px';
      } if(x==5){
        this.d='background-color: orangered;border-radius: 0px 10px 0px 10px';
      } if(x==6){
        this.e='background-color: orangered;border-radius: 0px 10px 0px 10px';
      } if(x==7){
        this.f='background-color: orangered;border-radius: 0px 10px 0px 10px';
      } if(x==8){
        this.g='background-color: orangered;border-radius: 0px 10px 0px 10px';
      }if(x==9){
        this.h='background-color: orangered;border-radius: 0px 10px 0px 10px';
      }if(x==11){
        this.j='background-color: orangered;border-radius: 0px 10px 0px 10px';
      }if(x==12){
        this.m='background-color: orangered;border-radius: 0px 10px 0px 10px';
      }
      if(x==13){
        this.n='background-color: orangered;border-radius: 0px 10px 0px 10px';
      }
    },
    leave:function (x) {
      if(x==1){
        this.active='';
      } if(x==2){
        this.a='';
      } if(x==3){
        this.b='';
      } if(x==4){
        this.c='';
      } if(x==5){
        this.d='';
      } if(x==6){
        this.e='';
      } if(x==7){
        this.f='';
      } if(x==8){
        this.g='';
      }if(x==9){
        this.h='';
      }if(x==11){
        this.j='';
      }if(x==12){
        this.m='';
      }
      if(x==13){
        this.n='';
      }
    },
    //直播(跳转到直播页面)
    toOrders:function(){

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
          axios.post("api/aliPayPayForCount/"+this.user.userId+"/"+value).then(res => {
            this.$router.replace({path:'/applyText',query:{htmls:res.data}})
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
    payForVip:function(){
      if (this.user.userId!=null) {
        this.pay.userId=this.user.userId;

        if(this.radio1=="$15元/月"){
          this.pay.rechargeVip=15;
        }
        if(this.radio1=="$50元/季"){
          this.pay.rechargeVip=50;
        }
        if(this.radio1=="$200元/年"){
          this.pay.rechargeVip=200;
        }
         if(this.user.userStatue==1){
           swal({
             text: "您已经是vip了",
             icon: "warning",
             button: "确定",
           });
         }else {
           if(this.radio2=="账户余额支付"){
             if(this.pay.rechargeVip>this.user.userMoney){
               swal({
                 text: "你的账户余额不足，请前往充值中心充值",
                 icon: "info",
                 button: "确定",
               });
             }else {
               //console.log(this.pay)
               axios.post("api/countPayForVip",this.pay).then(res=>{
                 if(res.data!=null){
                   swal({
                     text: "充值成功",
                     icon: "success",
                     button: "确定",
                   });
                 }
               })
             }
           }
           if(this.radio2=="支付宝支付") {
             axios.post("api/alipayPayForVip", this.pay).then(res => {
               this.$router.replace({path: '/applyText', query: {htmls: res.data}})
             })
           }

         }

  }else {
    this.$message.error('还没登录哦，请登录后再试');
    this.$router.push("/userLogin")
  }
  },
    //      个人中心-完善信息
    toUser:function () {
      if (this.user.userId!=null) {
        this.$router.push("/userDetial")
      }else {
        this.$message.error('还没登录哦，请登录后再试');
        this.$router.push("/userLogin")
      }
    },
    //修改密码
    toModify:function () {
      if (this.user.userId!=null) {
        this.$router.push("/updatePassword")
      }else {
        this.$message.error('还没登录哦，请登录后再试');
        this.$router.push("/userLogin")
      }
    },
    toMessage(){
      if (this.user.userId!=null) {
        this.$router.push("/userMessage")
      }else {
        this.$message.error('还没登录哦，请登录后再试');
        this.$router.push("/userLogin")
      }
    },
    logout:function () {
      Cookies.remove('userId'); // fail!
      Cookies.remove('userId', { path: '/' });
      this.user.userName='登录'
      this.$router.go(0)
    },
  }
}
</script>

<style>

  .el-dropdown-link {
    cursor: pointer;
    color: black;
  }
  .el-icon-arrow-down {
    font-size: 20px;
  }


  .el-header {
    /*background-color: #B3C0D1;*/
    /*color: #333;*/
    text-align: center;
    line-height: 60px;
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 10px;*/
}
</style>

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
  .note{
    /*position: absolute;*/
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    /*overflow-y: auto;*/
  }
  /*设置头部（公共部分）悬浮样式*/
  .header{ position:fixed; margin-top:0; width:100%;margin: auto ;z-index:9999; }
  /*.body{ position:relative; padding-top:119px; width:100%; }*/
</style>
