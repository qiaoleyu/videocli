<template>
  <div class="hello" style="width: 100%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <el-header style="height: 80px">
        <div style="width: 100%;margin: auto;">
          <router-link :to="{name:'index'}"><el-image src="../static/img/logo3.jpg" style="width:100%;" title="返回首页"></el-image></router-link>
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
          <el-col :span="12"style="font-size: 14px;height:460px;margin-bottom: 20px;border-right: solid 2px #d3dce6">
            <!--<el-card class="box-card" style="background-color: #FDFFF4">-->
              <el-image src="../static/img/girl3.jpeg" style="height: 460px;width: 100%;font-size: 25px" title="欢迎来到bala视频网站"></el-image>
            <!--</el-card>-->
          </el-col>
          <el-col :span="12" >
            <NoButtonHeader></NoButtonHeader>
            <el-card class="box-card" style="background-color: #FDFFF4">
            <el-form :model="user" status-icon :rules="rules" ref="user" label-width="20%" style="width: 80%;margin: auto;margin-top: 10%" >
              <el-row :gutter="10">
                <el-col :span="24">
                <el-form-item label="账号：" prop="userName" style="font-size:25px;text-align: left;font-weight: bolder">
                  <el-input type="text" name="userName" v-model="user.userName" style="width: 340px" placeholder="昵称/邮箱/手机号"></el-input>
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
                <el-col :span="6" :offset="6" style="margin-bottom: 16px">
                <a type="primary" plain @click="toCheck()" style="font-size: 16px;float: right;cursor: pointer;">忘记密码》</a>
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
                      <el-image src="../static/img/qq.jpg" title="QQ"></el-image>
                    </div>
                    <div style="width:40px;margin-top: 10px;float:left;line-height: 20px;margin-right: 30px">
                      <span >QQ</span>
                    </div>
                  </a>
                  <a href="">
                    <div style="width:40px;margin-top: 10px;float:left">
                      <el-image src="../static/img/weixin1.jpg" title="微信"></el-image>
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

      <el-footer>
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
                <a href="/"><span style="width: 33%;height: 33%;float: left">客户端下载</span></a>
                <a href="/"><span style="width: 33%;height: 33%;float: left">新浪微博</span></a>
                  <a href="/"><span style="width: 33%;height: 33%;float: left">官方微信</span></a>
              </div>
            </div>
          </el-col>
        </el-row>

        <!--bottom版权-->
        <el-row>
          <!--class="bg-purple"-->
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
