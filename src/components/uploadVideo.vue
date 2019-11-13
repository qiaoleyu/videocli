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
                    <a style="cursor: pointer">个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item><a @click="toUser()">完善资料</a></el-dropdown-item>
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
                    <a style="cursor: pointer">赛事</a><i class="el-icon-arrow-down el-icon--left"></i>
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
                  <a style="cursor: pointer">视频</a><i class="el-icon-arrow-down el-icon--left"></i>
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


        <!--分类展示-->
       <el-row :gutter="10">
         <el-col :span="12" style="margin: auto;width: 100%;margin-top: 40px">

           <el-form label-width="100px" :model="video" status-icon :rules="rules" ref="video" style="width: 500px;margin: auto;height: 80px;line-height: 80px;text-align: left">
             <el-form-item label="发布人：" prop="videoUsername">
               <el-input class="arrow" name="videoUsername"  v-model="video.videoUsername"></el-input>
             </el-form-item>
             <el-form-item label="视频：">
               <el-upload
                 class="avatar-uploader"
                 action="api/upload"
                 :on-change="handleChange"
                 :on-remove="handleRemove"
                 :file-list="fileList"
                 :on-success="handleAvatarVideoSuccess"
                 :before-upload="beforeAvatarVideoUpload"
                 title="发布视频"
               >
                 <!--:show-file-list="false"-->
                  <!--:on-preview="handlePictureCardPreview"-->
                 <img v-if="video.videoUrl" :src="video.videoUrl" class="avatar"  >
                 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
             </el-form-item>

             <el-form-item label="视频封面：">
               <el-upload
                 class="avatar-uploader"
                 action="api/upload"
                 :show-file-list="false"
                 :on-success="handleAvatarSuccess"
                 :before-upload="beforeAvatarUpload"
                 title="视频封面"
               >
                 <img v-if="video.videoPic" :src="video.videoPic" name="videoPic" width="80px" height="80px" class="avatar">
                 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
               </el-upload>
             </el-form-item>
             <!--<el-form-item label="视频封面图：">-->
               <!--<el-upload-->
                 <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                 <!--list-type="picture-card"-->
                 <!--:on-preview="handlePictureCardPreview"-->
                 <!--:on-remove="handleRemove"-->
                 <!--:on-success="handleAvatarSuccess"-->
                 <!--:before-upload="beforeAvatarUpload"-->
                 <!--title="视频封面"-->
               <!--&gt;-->
                 <!--<i class="el-icon-plus"></i>-->
               <!--</el-upload>-->
               <!--<el-dialog :visible.sync="dialogVisible">-->
                 <!--<img width="100%" :src="dialogImageUrl" alt="">-->
               <!--</el-dialog>-->

             <!--</el-form-item>-->
             <el-form-item label="视频名称：" prop="videoName">
               <el-input name="videoName" v-model="video.videoName" ></el-input>
             </el-form-item>
             <el-form-item label="视频类别：" prop="typeName">
               <el-select v-model="type.typeName" placeholder="请选择" style="width: 100%">
                 <el-option
                   v-for="item in videoKinds"
                   :key="item.typeId"
                   :label="item.typeName"
                   :value="item.typeId">
                 </el-option>
               </el-select>
             </el-form-item>
             <!--<el-form-item label="注册时间:">-->
               <!--<el-date-picker name="createTime" v-model="user.createTime" type="date" placeholder="选择日期" style="width: 400px"></el-date-picker>-->
             <!--</el-form-item>-->
             <el-form-item label="视频简介：" prop="videoInfo">
               <el-input name="videoInfo" v-model="video.videoInfo" ></el-input>
             </el-form-item>
             <div style="width: 400px;margin: auto;height: 40px;margin-left: 120px">
               <el-button type="primary" round plain style="height: 40px;width:40%;float: left"  plain @click="uploadVideo()">上传</el-button>
               <el-button type="primary" round plain style="height: 40px;width:40%;float: left" plain @click="backIndex()">返回</el-button>
             </div>
           </el-form>

            <!--<el-input></el-input>-->
         </el-col>
       </el-row>


      </el-main>

      <el-footer>


      </el-footer>
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
      var checkVideoUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('发布人不能为空'));
        }else{
          return callback();
        }
      };
      var checkVideoName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('视频名称不能为空'));
        }else{
          return callback();
        }
      };
      var checkVideoPic = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('视频封面图不能为空'));
        }else{
          return callback();
        }
      };
      var checkVideoInfo = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('视频简介不能为空'));
        }else{
          return callback();
        }
      };
      var checkVideoUrl = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('视频文件不能为空'));
        }else{
          return callback();
        }
      };
      return {
        videoKinds: [],
        fileList: [{
          name: '',
          url: ''
        }],
          videoUrl:'',
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
        type:{
          typeId:1,
          typeName:'直播'
        },
        video:{
          userId:1,
          videoName:'',
          videoPic:'',
          videoInfo:'',
          videoUsername:'',
          videoUrl:''
        },
        rules:{
          videoUsername: [{ validator: checkVideoUsername, trigger: 'blur' }],
          videoName: [{ validator: checkVideoName, trigger: 'blur' }],
          videoPic: [{ validator: checkVideoPic, trigger: 'blur' }],
          videoInfo:[{ validator: checkVideoInfo, trigger: 'blur' }],
          videoUrl:[{ validator: checkVideoUrl, trigger: 'blur' }],
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
//      视频上传
      handleAvatarVideoSuccess(res1, file) {
        this.user.videoUrl = res1;
//          URL.createObjectURL(file.raw);
      },
      beforeAvatarVideoUpload(file) {
        const isMP4 = file.type === 'video/mp4';
//        小于60M的视频
        const isLt400M = file.size / 1024 / 1024 < 400;

        if (!isMP4) {
          this.$message.error('上传视频只能是 MP4 格式!');
        }
        if (!isLt400M) {
          this.$message.error('上传视频大小不能超过 400MB!');
        }
        return isMP4 && isLt400M;
      },
      //      handleChange(file, fileList) {
      //        this.fileList = fileList.slice(-3);
      //      },
//      handleRemove(file, fileList) {
//        console.log(file, fileList);
//      },
//      handlePictureCardPreview(file) {
//        this.dialogImageUrl = file.url;
//        this.dialogVisible = true;
//      },
      //图片上传
      handleAvatarSuccess(res, file) {
        this.user.videoPic = res;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        //小于60M的视频
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传封面只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传封面大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
//      返回主页（首页）
      backIndex:function () {
        this.$router.push("/")
      },
      uploadVideo:function () {
        this.$refs['video'].validate((valid) => {
          if (valid) {
            axios.post("api/uploadVideo", this.video).then(res => {
              if (res.data == "success") {
                //                alert("修改成功")
                this.$message({
                  message: '上传视频成功',
                  type: 'success'
                });
                this.$router.push('/')
              } else {
                alert(res.data)
              }
            })
          } else {
            return flase;
          }

        })
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
//      修改密码
      toModify:function () {
        if (this.userId!=null) {
          this.$router.push("/updatePassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
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
