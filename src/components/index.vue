<template>
  <div class="hello" style="width: 95%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <el-header style="height: 80px">
        <div style="width: 100%;margin: auto">
        <el-row :gutter="10">
          <!--<el-col :span="4">-->
            <!--<div class="grid-content " style="height: 60px;font-size: 16px">-->
              <!--<el-image src="http://pxx4c7852.bkt.clouddn.com/logo2%20%281%29.jpg" style="height: 60px;width:150px;border-radius: 3px"></el-image>-->
            <!--</div>-->
          <!--</el-col>-->
          <el-col :span="10" :offset="2">
            <div class="grid-content " style="height: 80px;font-size: 16px;border: solid 1px orangered;border-radius: 10px">
              <div class="grid-content " style="height: 60px;font-size: 16px;float: left;">
                <el-image src="../static/img/bala1.jpg" style="height: 80px;width:150px;border-radius: 3px"></el-image>
              </div>
              <div id="sy" class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                   @mousemove="over(1)"
                   @mouseleave="leave(1)"
                   :style="active"

              >
                <router-link type="info" :to="{name:'index'}" style="color:black;"><a>首页</a></router-link>
              </div>
              <div class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                   @mousemove="over(2)"
                   @mouseleave="leave(2)"
                   :style="a"
              >
                <a @click="toOrders()" style="cursor: pointer">直播</a>
              </div>
              <el-dropdown>
                <div class="grid-content " style="height:60px;font-size: 16px;float: left;margin-top: 10px"
                     @mousemove="over(9)"
                     @mouseleave="leave(9)"
                     :style="h"
                >
                  <span class="el-dropdown-link">
                    <a>分类</a><i class="el-icon-arrow-down el-icon--left"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><a @click="toUser()">完善信息</a></el-dropdown-item>
                    <el-dropdown-item><a @click="toModify()">修改密码</a></el-dropdown-item>
                  </el-dropdown-menu>
                </div>
              </el-dropdown>

              <el-dropdown>

                <span class="el-dropdown-link">
                  <div class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;top: 10px"
                       @mousemove="over(3)"
                       @mouseleave="leave(3)"
                       :style="b"
                  >
                    <a>赛事</a><i class="el-icon-arrow-down el-icon--left"></i>
                  </div>
                </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>1</el-dropdown-item>
                    <el-dropdown-item>2</el-dropdown-item>
                    <el-dropdown-item>3</el-dropdown-item>
                    <el-dropdown-item>4</el-dropdown-item>
                    <el-dropdown-item>5</el-dropdown-item>
                  </el-dropdown-menu>

              </el-dropdown>
              <el-dropdown>
                <div class="grid-content " style="height: 60px;font-size: 16px;float: left"
                     @mousemove="over(4)"
                     @mouseleave="leave(4)"
                     :style="c"
                >
                <span class="el-dropdown-link">
                  <a>视频</a><i class="el-icon-arrow-down el-icon--left"></i>
                </span>
                  <el-dropdown-menu slot="dropdown">
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
          <el-col :span="6">
            <div class="grid-content " style="height: 80px">
              <!--搜索-->
              <el-input ref="searchName" type="text" style="width: 75%;margin: auto;margin-top: 10px" placeholder="请输入内容"
                        v-model="input"
              />
              <el-button type="primary" icon="el-icon-search" plain @click="search()"></el-button>
            </div>
          </el-col>
          <!--<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
          <el-col :span="5" :offset="1">
            <div class="grid-content " style="height: 80px;margin-top: 10px">
              <div class="grid-content " style="height: 60px;float: left"
                   @mousemove="over(5)"
                   @mouseleave="leave(5)"
                   :style="d"
              >
                <span type="info" style="color:black;cursor: pointer;margin-right: 10px" ><a @click="logout()" class="el-icon-pie-chart" :size="50">历史</a></span>
              </div>
              <div class="grid-content " style="height: 60px;width:50px;float: left"
                   @mousemove="over(6)"
                   @mouseleave="leave(6)"
                   :style="e"
              >
                <router-link type="info" :to="{name:'userLogin'}" style="color:black" v-if="this.uid==null" ><a class="el-icon-user">登录</a></router-link>
                <span style="color:black;" v-if="this.uid!=null"><a>{{users.uname}}</a></span>
              </div>

              <div class="grid-content " style="height: 60px;width:50px;float: left"
                   @mousemove="over(7)"
                   @mouseleave="leave(7)"
                   :style="f"
              >
                <router-link type="info" :to="{name:'userRegist'}" style="color:black"><a>注册</a></router-link>
              </div>

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

      <el-main>

        <!--视频轮播-->
        <el-row :gutter="10">
          <el-col :span="24">
            <template>
              <el-carousel :interval="5000" arrow="always" height="500px" width="100%">
                <el-carousel-item v-for="item in 4" :key="item">
                  <!--<router-link :to="{path:'/shopDetial/'+shop.shopId}">-->
                    <video id=example-video width=100% height=500 style="margin:auto" class="video-js vjs-default-skin vjs-big-play-centered" controls>
                      <source
                        src="http://video.qf.com/video/xmds36.m3u8"
                        type="application/x-mpegURL">

                    </video>
                    <!--<div style="float:left;margin-top:10px">-->
                      <!--<input type="button"  onClick="switchvideo()" value="switch"/>-->
                    <!--</div>-->

                    <!--<div id="box" class="box" style="width:100%;margin:auto"></div>-->
                    <!--<div style="float:left;margin-left:40px;margin-top:10px">-->
                      <!--<input type="text" id="txt" style="height:20px;width:250px"/>-->
                      <!--<button onclick="send()">发送弹幕</button>-->
                    <!--</div>-->

                  <!--</router-link>-->
                </el-carousel-item>

              </el-carousel>
            </template>
          </el-col>
        </el-row>
      </el-main>

      <el-footer style="height: 160px">
        <!--bottom-->
        <el-row>
          <el-col :span="24"  class="bg-purple">
            <div style="height: 170px;line-height: 170px;font-size: 13px;text-align: center;float: left;width: 10%">
              <el-image src="../static/img/hz.jpg"></el-image>
            </div>
            <div style="height: 170px;line-height: 25px;font-size: 13px;text-align: center;float: left;width: 90%">
              <ul>
                <li>
                  <a href="">广播电视节目制作经营许可证：（沪）字第1248号|网络文化经营许可证：沪网文【2016】2296-134号|信息网络传播视听节目许可证：0910417</a>
                </li>
                <li>
                  <a href="">互联网ICP备案：沪ICP备13002172号-3沪ICP证：沪B2-20100043 |违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3 | 营业执照</a>
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
  export default {
    components: {ElImage},
    name: 'index',
    data () {
      return {
          input:'',
        msg: 'Welcome video index',
        active:'',
        a:'',
        b:'',
        c:'',
        d:'',
        e:'',
        f:'',
        g:'',
        h:''
      }
    },
    mounted(){

    },
    methods:{
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
        }
      }
    }
}
</script>


<style>
  .video-js{
    height: 500px;
    width: 90%;
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
    line-height: 160px;
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
