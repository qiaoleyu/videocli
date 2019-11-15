<template>
  <div class="hello" style="width: 95%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <!--<el-header style="height: 80px">-->
        <!--<div style="width: 100%;margin: auto">-->
        <!--</div>-->
      <!--</el-header>-->

      <el-main style="width: 90%;margin: auto;margin-top: 60px">

        <div style="width: 80%;margin: auto;margin-top: 50px">
          <!-- <div style="width: 500px;margin: auto;height: 80px;line-height: 80px;text-align: right">
             <div style="width: 90px;float: left;margin-right: 10px">头像:</div>
             <div style="width: 300px;float: left"><input type="file" @change="getFile($event)"></div>
             <div style="width: 100px;float: left"><el-button plain style="height: 40px" @click="upload()">上传</el-button></div>
             &lt;!&ndash;<el-radio-group size="small"></el-radio-group>&ndash;&gt;
             &lt;!&ndash;<div style="margin: 20px;"></div>&ndash;&gt;
           </div>-->

          <el-form :model="user" status-icon :rules="rules" ref="user" label-width="100px" style="width: 500px;margin: auto;text-align: left">
            <el-form-item label="用户名：" prop="userName">
              <el-input class="arrow" name="userName" v-model="user.userName" disabled></el-input>
            </el-form-item>
            <el-form-item label="头像：">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                title="用户图像"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <!--<el-form-item label="性别:">-->
              <!--<el-radio v-model="users.usex" :label="true" name="usex">男</el-radio>-->
              <!--<el-radio v-model="users.usex" :label="false" name="usex">女</el-radio>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="注册时间:" prop="userUptime">-->
              <!--<el-date-picker name="userUptime" v-model="user.userUptime" type="date" placeholder="选择日期" style="width: 400px"></el-date-picker>-->
            <!--</el-form-item>-->
            <el-form-item label="联系方式：" prop="userTell" >
              <el-input name="userTell" v-model="user.userTell"></el-input>
            </el-form-item>
            <el-form-item label="邮箱账号：" prop="userEmail" >
              <el-input name="userEmail" v-model="user.userEmail"></el-input>
            </el-form-item>
            <el-form-item label="真实姓名：" prop="userRealname">
              <el-input name="userRealname" v-model="user.userRealname">
              </el-input>
            </el-form-item>
            <el-form-item label="爱好：" prop="userHobby">
              <el-input name="userHobby" v-model="user.userHobby">
              </el-input>
            </el-form-item>
            <el-form-item type="Date" label="注册时间：" prop="userUptime" >
              <el-input name="userUptime" v-model="user.userUptime" disabled>
              </el-input>
            </el-form-item>

            <!--<el-form-item label="用户爱好:" prop="userHobby">-->
              <!--<el-input name="userHobby" v-model="user.userHobby"   style="width: 400px"></el-input>-->
            <!--</el-form-item>-->

            <!--<el-form-item label="用户信息:" prop="userInfo">-->
              <!--<el-input name="userInfo" v-model="user.userInfo" type="date"  style="width: 400px"></el-input>-->
            <!--</el-form-item>-->
            <el-row :gutter="10">
              <el-col :span="8" :offset="5">
                <el-button type="primary" round plain style="height: 40px;width:100%" plain @click="updateUsers()">确认</el-button>
              </el-col>
              <el-col :span="8" >
                <el-button type="primary" round plain style="height: 40px;width:100%" plain @click="backIndex()">返回</el-button>
              </el-col>
            </el-row>
            <div style="margin: auto;height: 40px;">
            </div>
          </el-form>

        </div>

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
  import Cookies from 'js-cookie'

  export default {
    components: {
      ElButton,
      ElImage},
    name: 'index',
    data () {
//        非空验证
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          return callback();
        }
      };
      var checkUserRealname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('真实姓名不能为空'));
        }else{
          return callback();
        }
      };
      var checkUserHobby = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('爱好不能为空'));
        }else{
          return callback();
        }
      };
      var checkUserEmail = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('邮箱不能为空'));
        }else{
          return callback();
        }
      };
      var checkUserPic = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户图像不能为空'));
        }else{
          return callback();
        }
      };
      var checkUserTell = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('联系方式不能为空'));
        }else{
          return callback();
        }
      };
      var checkUserUptime = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('注册时间不能为空'));
        }else{
          return callback();
        }
      };
      return {
          videoUrl:'',
        dialogImageUrl: '',
        dialogVisible: false,
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
          userId:'',
          userTell:'',
          userHobby:'',
          //userInfo:'',
          userRealname:'',
          userEmail:'',
          userPic:'',
          userName:'',
          userUptime:'',
        },
        rules:{
          userName: [{ validator: checkUserName, trigger: 'blur' }],
          userRealname: [{ validator: checkUserRealname, trigger: 'blur' }],
          userUptime: [{ validator: checkUserUptime, trigger: 'blur' }],
          userHobby:[{ validator: checkUserHobby, trigger: 'blur' }],
          userEmail:[{ validator: checkUserEmail, trigger: 'blur' }],
          userPic:[{ validator: checkUserPic, trigger: 'blur' }],
          userTell:[{ validator: checkUserTell, trigger: 'blur' }],
          // userInfo:[{ validator: checkUserInfo, trigger: 'blur' }],
        }
      }
    },
    mounted(){
      var userId=Cookies.get('userId');
      //alert(userId)
      this.user.userId=userId;
      //alert(this.user.userId)
      if (this.user.userId!=null){
        axios.get("api/findUserByUserId/"+this.user.userId).then(res=>{
          this.user=res.data;
        })
      }else {
        alert("请登录")
        this.$router.push("/userLogin")
      }
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
/*//      个人中心-完善信息
      toUser:function () {
        if (this.user.userId!=null) {
          this.$router.push("/userDetial")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
//      修改密码
      toModify:function () {
        if (this.user.userId!=null) {
          this.$router.push("/updatePassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },*/
      updateUsers:function () {
        this.$refs['user'].validate((valid) => {
          if (valid) {
            axios.post("api/updateUser", this.user).then(res => {
              if (res.data == "success") {
                //                alert("修改成功")
                this.$message({
                  message: '恭喜你，修改成功',
                  type: 'success'
                });
                this.$router.push('/')
              } else {
                //alert(res.data)
                alert("修改失败")
              }
            })
          }else{
              return false;
          }
        })
      },
      //图片上传
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },

      handleAvatarSuccess(res, file) {
        this.imageUrl = res;
      //URL.createObjectURL(file.raw);
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
      //返回主页（首页）
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
    /*line-height: 60px;*/
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
    /*height: 600px;*/
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
