<template>
  <div style="height: 100%;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;border-radius: 20px" >

      <div class="card">
        <el-row :gutter="20">
          <el-col :span="6" style="height: 545px;">

            <div style="background-color: black;width: 80%;height: 92%;margin-left: 20%;padding-top: 20%">

              <el-avatar  width="50" height="50" src="../static/img/group.png"></el-avatar>
              <!--<p class="name" style="color: white">官方群组</p>-->
              <hr>
              <!--<div v-for="(item,index) in userList">
                <el-avatar  width="50" height="50" :src="item.userPic" @click="creatWS(index)"></el-avatar>
                <p class="name" style="color: white">{{item.userName}}</p>
              </div>-->
              <el-avatar  width="50" height="50" :src="user2.userPic"></el-avatar>
            </div>
          </el-col>
          <el-col :span="18" style="height: 558px">
            <el-row :gutter="20">
              <el-col :span="24" style="height: 500px;">
                <el-card class="box-card"  style="opacity:0.8;width: 95%;margin-right:5%;height: 93%;margin-bottom: 5%;border-radius: 10px;margin-top: 2%;overflow-y: visible">

                  <span> {{user.userName}}</span>
                  <!--<el-button type="primary" @click="conectWebSocket()">建立连接</el-button>-->
                  <!--<el-button type="danger">断开连接</el-button>-->
                  <!--<el-input-->
                    <!--placeholder="请输入对方频道号"-->
                    <!--prefix-icon="el-icon-phone"-->
                    <!--v-model="aisle"-->
                    <!--style="width:40%"-->
                  <!--&gt;</el-input>-->

                  <div v-for="(value,key,index) in messageList" :key="index">
                    <el-row :gutter="10">
                      <el-col :span="8" :offset="12" v-if="value.name==aisle">
                        <!--<el-tag   style="background-color: white;color: black;font-weight: bolder;margin-right: 5%">-->
                          <el-tag style="text-align: right;float: right">{{value.msg}}</el-tag>
                        <!--</el-tag>-->
                      </el-col>
                      <el-col :span="4" >
                        <span style="line-height: 30px;font-size: 14px">{{user.userName}}</span>
                        <img height="30px" width="30px" :src="user.userPic" style="border:15px;"/>
                      </el-col>
                    </el-row>
                    <el-row :gutter="10">
                      <el-col :span="4" style="font-size: 14px">
                        <img height="30px" width="30px" :src="user2.userPic" style="border:15px;"/>
                        {{user.userName}}：
                      </el-col>
                      <el-col :span="20" v-if="value.name!=aisle">
                        <el-tag  style="float:left;text-align: left;">
                          {{value.msg}}
                        </el-tag>
                      </el-col>

                    </el-row>
                  </div>
                </el-card>
              </el-col>
              <el-col :span="24" style="height: 58px;">
                <div style="width: 95%;margin-right:5%;height: 95%;margin-bottom: 5%">
                    <el-input placeholder="请输入要发送的消息" prefix-icon="el-icon-s-promotion" v-model="messageValue" style="width:50%"
                    ></el-input>
                    <el-button type="primary" @click="sendMessage()">发送</el-button>
                    <el-button @click="clean()"  type="danger">清空</el-button>
                </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>
        <!--<el-avatar slot="reference" src="../static/img/bala2.jpg" :size="60"></el-avatar>-->
        <!--<p class="name"></p>-->
      </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import axios from 'axios';

  export default {
    data() {
      return {
        name: "", // 昵称
        websocket: null, // WebSocket对象
        aisle: "", // 对方频道号
        messageList: [], // 消息列表
        messageValue: "" ,// 消息内容
        user:{

        },
        user2:{

        },
        communication:{

        },
        userList:[],
        toUserId:''  //对方id

      };
    },
    mounted(){

      this.toUserId=this.$route.params.userId;  //对方id
//      alert(this.toUserId)
      axios.get("api/findUserByUserId/"+this.toUserId).then(res=>{
        this.user2=res.data;
//        console.log(this.user2)

      })

      this.user.userId=Cookies.get('userId');
//      alert(this.user.userId)
      axios.get("api/findUserByUserId/"+this.user.userId).then(res=>{
        this.user=res.data;
//        console.log(this.user)

      })
      this.conectWebSocket();
    },
    methods: {
      conectWebSocket: function() {
        console.log("建立连接");
        /*if (this.name === "") {
          this.$alert("请输入自己的昵称", "提示", {
            confirmButtonText: "确定",
            callback: action => {}
          });
        } else {*/
          //判断当前浏览器是否支持WebSocket
          if ("WebSocket" in window) {
            this.websocket = new WebSocket(
              "ws://27517f29s2.zicp.vip/websocket/" + this.user.userId

            );
          } else {
            alert("不支持建立socket连接");
          }
          //连接发生错误的回调方法
          this.websocket.onerror = function() {

          };
          //连接成功建立的回调方法
          this.websocket.onopen = function(event) {

          };
          //接收到消息的回调方法
          var that = this;
          this.websocket.onmessage = function(event) {
            var object = eval("(" + event.data + ")");
            console.log(object);
            if (object.type == 0) {
              // 提示连接成功
              console.log("连接成功");
              that.showInfo(object.people, object.aisle);
            }
            if (object.type == 1) {
              //显示消息
              console.log("接受消息");

              /*存库*/
             /* this.communication.userId=this.user.userId;
              this.communication.userName=this.user.userName;
              this.communication.userPic=this.user.userPic;
              this.communication.userRid=this.user2.userId;
              this.communication.userRname=this.user2.userName;
              this.communication.userRpic=this.user2.userPic;
              this.communication.message=object.msg;
              alert(object.msg);
                  axios.post("api/saveUserMsg",this.communication).then(res=>{
                  if (res.data!=null){
                    that.messageList.push(object);
                  }else {
                      alert("网络不佳")
                  }
              })*/
              that.messageList.push(object);
              that.messageValue="";

            }
          };
          //连接关闭的回调方法
          this.websocket.onclose = function() {};
          //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
          window.onbeforeunload = function() {
            this.websocket.close();
          };
      },
      // 发送消息
      sendMessage: function() {
        var socketMsg = { msg: this.messageValue, toUser: this.toUserId };
//        if (this.aisle == "") {
          //群聊.
//          socketMsg.type = 0;
//        } else {
          //单聊.
          socketMsg.type = 1;
//        }
        this.websocket.send(JSON.stringify(socketMsg));
      },
      showInfo: function(people, aisle) {
        /*this.$notify({
          title: "当前在线人数：" + people,
          message: "您的频道号：" + aisle,
          duration: 0
        });*/
        this.aisle=aisle;
      },
      //清空
      clean(){
        this.messageValue='';
      }
    }
  }
</script>

<style scoped>
  .main {
    position: relative;
    top: 20px;
  }
  .message {
    position: relative;
    overflow:auto;
    top: 20px;
    width: 100%;
    height: 40%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5px;
  }
  .note{
    /*position: absolute;*/
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    /*overflow-y: auto;*/
  }
</style>

