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
                  <el-image src="../static/img/bala2.jpg" style="height: 80px;width:150px;border-radius: 3px"></el-image>
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
                    <a>个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
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
                  <el-dropdown-menu slot="dropdown" style="width:240px;">
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


      <el-main style="width: 90%;margin: auto">


        <div style="width: 80%;height:300px;margin: auto;margin-top: 60px">
          <el-form :model="user" status-icon :rules="rules" ref="user" class="demo-ruleForm" label-width="100px" style="width: 500px;margin: auto;height: 80px;line-height: 80px;text-align: left">
            <el-form-item label="设置新密码" prop="userPassword" style="text-align: left;margin-bottom: 40px">
              <el-input type="password" v-model="user.userPassword" name="userPassword" autocomplete="off" placeholder="请设置密码"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="checkPass" style="text-align: left;margin-bottom: 40px">
              <el-input type="password" v-model="user.checkPass" autocomplete="off"  placeholder="请输入确认密码"></el-input>
            </el-form-item>
            <el-from-item>
              <div style="margin: auto;height: 40px;margin-left: 100px">
                <el-button type="primary" round plain style="height: 40px;width: 150px;float: left" plain @click="updatePass()">确认</el-button>
                <el-button type="primary" round plain style="height: 40px;width: 150px;float: left" plain @click="reference('user')">重置</el-button>
              </div>
            </el-from-item>
          </el-form>
        </div>

      </el-main>

      <!--<el-footer>-->


      <!--</el-footer>-->
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElImage},
    name: 'index',
    data () {
//        非空验证
      var checkUserPassword = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('发布人不能为空'));
        }else{
          return callback();
        }
      };
      var checkPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.userPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
          videoUrl:'',
        imageUrl: '',
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
        h:'',
        user:{
          userPassword:'',
          checkPass:''
        },
        rules:{
          userPassword: [{ validator: checkUserPassword, trigger: 'blur' }],
          checkPass: [{ validator: checkPass, trigger: 'blur' }],
        }
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
      },
//      个人中心-完善信息
      toUser:function () {
        if (this.userId!=null) {
          this.$router.push("/userDetial")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      updatePass:function () {
        this.$refs['user'].validate((valid) => {
          if (valid) {
            axios.post("api/updatePassword", this.user).then(res => {
              if (res.data == "success") {
//                alert("修改成功")
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                });
                this.$router.push('/')
              }
              else {
                this.$message.error('错了哦，修改失败');
                this.$router.push("/updatePassword")
              }
            })
          } else {
//
            return false;
          }
        })
      },
//      修改密码
      toModify:function () {
        if (this.userId!=null) {
          this.$router.push("/updatePassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      reference:function () {
        this.$refs['user'].resetFields();
      },
//      返回主页（首页）
      backIndex:function () {
        this.$router.push("/")
      },
    }
  }
</script>


<style>
  element.style{
    margin-left: inherit;
    margin-right: inherit;
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
    height: 600px;
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
