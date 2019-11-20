<template>
  <div class="note" style="width: 100%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <!--<el-header style="height: 80px">-->
        <!--<div style="width: 100%;margin: auto">-->
        <!--</div>-->
      <!--</el-header>-->

      <el-main style="width: 90%;margin: auto;margin-top: 60px">


        <div style="width: 80%;height:300px;margin: auto;margin-top: 100px">
          <el-form :model="user" status-icon :rules="rules" ref="user" class="demo-ruleForm" label-width="100px" style="width: 480px;margin: auto;height: 80px;line-height: 80px;text-align: left">
            <el-form-item label="手机号：" prop="userTell" style="text-align: left;margin-bottom: 40px">
              <el-input id="phone" type="text" v-model="user.userTell" name="userTell" autocomplete="off"  placeholder="请输入真实有效的手机号"></el-input>
            </el-form-item>
            <el-form-item label="验证码：" prop="userCode" style="text-align: left;margin-bottom: 40px">
              <el-input type="text" v-model="user.userCode" autocomplete="off" style="width: 250px" placeholder="请输入短信验证码"></el-input>
              <el-button round type="primary" plain :class="{disabled: !this.canClick}" @click="sendMail()">{{content}}</el-button>
            </el-form-item>
            <el-from-item>
              <div style="margin: auto;height: 40px;margin-left: 100px">
                <el-button type="primary" round plain style="height: 40px;width: 150px;float: left" plain @click="toPass()">确认</el-button>
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
  import Cookies from 'js-cookie'

  export default {
    components: {
      ElButton,
      ElImage},
    name: 'index',
    data () {
//        非空验证
      var checkUserTell = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }else{
          return callback();
        }
      };
      var checkUserCode = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('短信验证码不能为空'));
        }
        else {
          var phone = document.getElementById('phone').value;
          if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone))){
            alert("手机号码有误，请重填");
            return false;
          }else{
            callback();
          }
        }
      };
      return {
          videoUrl:'',
        imageUrl: '',
        input:'',
        msg: 'Welcome video index',
        user:{
          userId:'',
          userName:'',
          userTell:'',
          userCode:''
        },

        rules:{
          userTell: [{ validator: checkUserTell, trigger: 'blur' }],
          userCode: [{ validator: checkUserCode, trigger: 'blur' }],
        },
        //        验证码失效时间控制
        userCode:'',
        content:'发送验证码',
        totalTime:60,
        canClick:true
      }
    },
    mounted(){

    },
    methods:{
      sendMail:function () {
        var phone = document.getElementById('phone').value;
        if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(phone))){
          alert("手机号码有误，请重填");
          return false;
        }else{
          if (!this.canClick) return  //改动的是这两行代码
          this.canClick = false
          this.content = this.totalTime + 's后重新发送'
          let clock = window.setInterval(() => {
            this.totalTime--
            this.content = this.totalTime + 's后重新发送'
            if (this.totalTime < 0) {
              window.clearInterval(clock)
              this.content = '重新发送'
              this.totalTime = 60
              this.canClick = true  //这里重新开启
            }
          },1000)
        }
        axios.post("/api/sendEmail",this.users).then(res=>{
          if(res.data!=''){
            alert(res.data)
            this.$message({
              message: '验证码发送成功，欢迎注册！',

              type: 'success'
            });
            console.log(res.data)
//              alert(res.data)
          }else{
//              alert("发送失败！")
            this.$message.error('错了哦，验证码发送失败');
          }
        })
      },
      toPass:function () {
        this.$refs['user'].validate((valid) => {
          if (valid) {
            this.$router.push("/userLogin")
          }else{
              return false;
          }
        })
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
  .header{ position:fixed; margin-top:0; width:99%;margin: auto ;z-index:9999; }
</style>
