<template>
  <div class="hello" style="width: 100%;lef:0;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container style="width: 100%">
      <!--导航栏-->
      <el-header style="height: 80px;padding: 0">
        <div style="width: 100%;margin: auto;">
          <router-link :to="{name:'index'}"><el-image src="../static/img/logo3.jpg" style="width:100%;" title="返回首页"></el-image></router-link>
        </div>
      </el-header>
      <el-main style="width: 100%;margin: auto;padding: 0;margin-top: 20px">
        <el-card style="width: 100%;height: 660px;background: url('../static/img/girl10.jpg') no-repeat center;background-size: cover;opacity: 0.9">


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
        <el-row :gutter="10" style="height:460px;">
          <el-col :span="8" :offset="14">
            <NoButtonHeader></NoButtonHeader>
            <el-card class="box-card" style="opacity: 0.9;border-radius: 15px;height: 430px;margin-top: 30px;">
            <el-form :model="users" status-icon :rules="rules" ref="users" label-width="20%" style="width: 80%;margin: auto;margin-top: 10%" >
              <el-row :gutter="10">
                <el-col :span="24">
                <el-form-item label="账号：" prop="loginName" style="font-size:25px;text-align: left;font-weight: bolder">
                  <el-input type="text" name="loginName" v-model="users.loginName" style="width: 240px" placeholder="昵称/邮箱/手机号"></el-input>
                </el-form-item><br>
                <el-form-item label="密码：" prop="password" style="font-size:25px;text-align: left;font-weight: bolder" show-password>
                  <el-input type="password" name="password" v-model="users.password" style="width: 240px" placeholder="请输入密码"></el-input>
                </el-form-item><br>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="4"  :offset="2" >
                  <div style=" width: 100px"><input type="checkbox" name="rememberme" value="yes"/>记住密码</div>
                </el-col>
                <el-col :span="8" :offset="8" >
                <a type="primary" plain @click="toCheck()" style="font-size: 16px;cursor: pointer;">忘记密码>></a>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="20" :offset="2" style="margin-top: 10%">
                  <el-button type="primary" style="width: 29%" plain @click="login()">确认</el-button>
                  <el-button type="primary" style="width: 29%" plain @click="toinsetUser()">注册</el-button>
                  <el-button type="primary" style="width: 29%" plain @click="resetForm('users')">重置</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="22" :offset="2">
                  <a href="" >
                    <div style="width:40px;margin-top: 20px;float:left;">
                      <el-image src="../static/img/qq.jpg" title="QQ"></el-image>
                    </div>
                    <div style="width:40px;margin-top: 20px;float:left;line-height: 20px;">
                      <span >QQ</span>
                    </div>
                  </a>
                  <a href="">
                    <div style="width:40px;margin-top: 20px;float:left;margin-left: 30%">
                      <el-image src="../static/img/weixin1.jpg" title="微信"></el-image>
                    </div>
                    <div style="width:40px;margin-top: 20px;float:left">
                      <span>微信</span>
                    </div>
                  </a>
                </el-col>
              </el-row>
            </el-form>
            </el-card>
          </el-col>
        </el-row>
        </el-card>
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
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item";
  import Cookies from 'js-cookie'

  export default {
    components: {
      ElFormItem,
      ElForm,
      ElImage},
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
      /*var checkUsrcode = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('验证码不能为空'));
        } else{
          return callback();
        }
      };*/
      return {
        msg: '登录',
        users:{
          userId:'',
          loginName:'',
          password:'',
          //usrcode:'',
        },

        rules: {
          loginName: [{ validator: checkUserName, trigger: 'blur' }],
          password: [{ validator: validatePass, trigger: 'blur' }],
          //usrcode:[{ validator: checkUsrcode, trigger: 'blur' }],
        }
      }
    },
    methods: {
      login:function () {
        this.$refs['users'].validate((valid) => {
          if (valid) {
            axios.post("api/userLogin", {loginName: this.users.loginName, password: this.users.password}).then(res => {
              var msg = res.data;
              //接收后端返回来的数据
              if (msg == 'success') {
                axios.post("api/findUserByName/" + this.users.loginName).then(res => {
                  this.users = res.data;
                  //cookie设置失效时间
                  Cookies.set("userId", this.users.userId, {expires: 7, path: '/'});
                  this.$message({
                    message: '登录成功，欢迎操作其他业务！',
                    type: 'success'
                  });
                  var userId=Cookies.get('userId');
//                  alert(userId)
                  var days=Cookies.get(userId+"days");
                  if (days==null){
                      axios.post("api/updateStatue/"+userId).then(res=>{
                          this.users=res.data;
                      })
                  }
                  this.$router.push("/");
                  this.$router.go(0);
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
      },




    },
    mounted(){

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
