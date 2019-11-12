<template>
  <div class="hello" style="width: 100%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <el-header style="height: 80px">
        <div style="width: 100%;margin: auto;">
          <el-image src="../static/img/logo3.jpg" style="width:100%;"></el-image>
        </div>
      </el-header>
      <el-main style="width: 100%;margin: auto;">
        <el-row :gutter="10">
          <el-col :span="6" :offset="5" style="font-size: 14px;margin-bottom: 20px;margin-top: 20px">
            <hr>
          </el-col>
          <el-col :span="2" style="font-size: 36px;font-weight:bolder;margin-bottom: 20px">
            <span>登  录</span>
          </el-col>
          <el-col :span="6" style="font-size: 14px;margin-bottom: 20px;margin-top: 20px">
            <hr>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12"style="font-size: 14px;height:300px;margin-bottom: 20px;margin-top: 20px;border-right: solid 2px #d3dce6">
            <el-image src=""></el-image>
          </el-col>
          <el-col :span="12" >
            <NoButtonHeader></NoButtonHeader>
            <el-card class="box-card" style="background-color: lavenderblush">
            <el-form :model="user" status-icon :rules="rules" ref="user" label-width="20%" style="width: 80%;margin: auto;margin-top: 10%" >
              <el-row :gutter="10">
                <el-col :span="24">
                <el-form-item label="昵称：" prop="userName" style="font-size:25px;text-align: left;font-weight: bolder">
                  <el-input type="text" name="userName" v-model="user.userName" style="width: 340px" placeholder="用户名/邮箱/手机号"></el-input>
                </el-form-item><br>
                <el-form-item label="密码：" prop="userPassword" style="font-size:25px;text-align: left;font-weight: bolder" show-password>
                  <el-input type="userPassword" name="userPassword" v-model="user.userPassword" style="width: 340px" placeholder="请输入密码"></el-input>
                </el-form-item><br>
                  <el-form-item label="验证码：" prop="usrcode" style="font-size:25px;text-align: left;font-weight: bolder" show-password>
                      <el-input type="text" class="ip1" placeholder="验证码,区分大小写" style="width:50%;float: left" name="usrcode" v-model="user.usrcode"></el-input>
                      <div id="code" style="float: left"><img src="pic" id="pic" style="width: 40%;margin-left: 20px"/></div>
                      <span class="err"></span>
                    <a href="" onclick="return refresh()">看不清楚</a>
                  </el-form-item><br>

                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="4"  :offset="4" style="margin-bottom: 16px">
                  <div style="width: 100px"><input type="checkbox" name="rememberme" value="yes"/>记住密码</div>
                </el-col>
                <el-col :span="6" :offset="5" style="margin-bottom: 16px">
                <a type="primary" plain @click="toCheck()" style="font-size: 16px;float: right">忘记密码</a>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="18" :offset="3">
                  <el-button type="primary" style="width: 28%" plain @click="login()">确认</el-button>
                  <el-button type="primary" style="width: 28%" plain @click="toinsetUser()">注册</el-button>
                  <el-button type="primary" style="width: 28%" plain @click="resetForm('user')">重置</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="18" :offset="3">
                  <a href="" >
                    <div style="width:40px;margin-top: 10px;float:left;margin-left: 10px">
                      <el-image src="../static/img/qq.jpg" ></el-image>
                    </div>
                    <div style="width:40px;margin-top: 10px;float:left;line-height: 20px;margin-right: 30px">
                      <span >QQ</span>
                    </div>
                  </a>
                  <a href="">
                    <div style="width:40px;margin-top: 10px;float:left">
                      <el-image src="../static/img/weixin1.jpg"></el-image>
                    </div>
                    <div style="width:40px;margin-top: 10px;float:left">
                      <span>微信</span>
                    </div>
                  </a>
                </el-col>
              </el-row>
            </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-main>


    </el-container>
  </div>
</template>
<style>
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

</style>

<script>
  import axios from 'axios'
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
//  import Cookies from 'js-cookie'

  export default {
    components: {ElImage},
    data () {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          return callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('密码不能为空'));
        } else{
          return callback();
        }

      };
      var checkUsrcode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        } else{
          return callback();
        }

      };
      return {
        msg: '登录',

        user:{
          userId:'',
          userName:'',
          userPassword:'',
          usrcode:'',
        },

        rules: {
          userName: [{ validator: checkUserName, trigger: 'blur' }],
          userPassword: [{ validator: validatePass, trigger: 'blur' }],
          usrcode:[{ validator: checkUsrcode, trigger: 'blur' }],
        }
      }
    },
    methods: {
      login:function () {
        this.$refs['user'].validate((valid) => {
          if (valid) {
            axios.post("api/userLogin", {userName: this.user.userName, userPassword: this.user.userPassword}).then(res => {
              var msg = res.data;
              //接收后端返回来的数据
              if (res.data == 'success') {
                axios.post("api/findUserByName/" + this.user.userName).then(res => {
                  this.users = res.data;
                  //cookie设置失效时间
//                  var millisecond = new Date().getTime();
//                  var expiresTime = new Date(millisecond + 60 * 1000 * 30 );
//                  Cookies.set('userId', this.user.userId, {expires:expiresTime, path: '/'});
                  this.$message({
                    message: '登录成功，欢迎操作其他业务！',
                    type: 'success'
                  });
                  this.$router.push("/");
                })
              } else if(res.data=="field"){
                this.$message.error("该账号未激活，请前往邮箱激活");
              }else{
                this.$message.error(res.data);
              }
            })
          }else{
            return false;
          }
        })
      },resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      toinsetUser: function () {
        this.$router.push('userRegist')
      },
      toCheck:function () {
        this.$router.push('checkUser')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  body{
    /*background-color: aliceblue;*/
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a:link {
    color: #000000;
    text-decoration-line: none;
  }
  a:hover{
    color: red;
  }
</style>
