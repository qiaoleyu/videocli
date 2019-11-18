<template>
  <div style="height: 100%;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;border-radius: 20px" >

    <!--评论-->
    <el-row :gutter="10">
      <el-col :span="22" :offset="1">
        <!--v-for="(i,value) in comments2[index].list"-->
        <div  style="width:99%;font-size: 16px;font-weight: bolder;margin-left: 10px;background-color: beige;float: left;text-align: center">
          <!--遍历评论信息-->

          <el-row :gutter="10" style="margin-top: 20px;font-size: 14px">
            <el-col :span="2">
              <div style="float: left;">
                <el-popover
                  placement="top-start"
                  width="300"
                  trigger="hover"
                >
                  <!--title="标题"-->
                  <!--content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"-->
                  <!--<el-button slot="reference">hover 激活</el-button>-->
                  <el-row :gutter="10">
                    <el-col :span="24">
                      <div style="float: left;">
                        <el-image src="../static/img/yh1.jpg" style="width: 100%"></el-image>
                      </div>
                    </el-col>
                    <el-col :span="10" :offset="2" style="height:60px;line-height: 60px">
                      <div style="float: left;">
                        <el-avatar src="i.userPic" :size="60"></el-avatar>
                      </div>
                    </el-col>
                    <el-col :span="12" style="height:60px;line-height: 60px">
                      <div style="float: left;">
                        <!--<span>{{i.userName}}</span>-->
                        用户名
                      </div>
                    </el-col>
                    <el-col :span="18" :offset="6" style="font-size: 12px">
                      <div style="float: left;margin-right: 20px;width: 40%">
                        <span style="float: left">关注：</span>
                        <span style="float: left">3</span>
                      </div>
                      <div style="float: left;width: 40%">
                        <span style="float: left">粉丝：</span>
                        <span style="float: left">13</span>
                      </div>
                    </el-col>
                    <el-col :span="12"  style="font-size: 12px;margin-top: 20px">
                      <div style="float: left;width: 100%">
                        <el-button type="primary" style="width: 100%" plain  @click="guanzhu()">+关注</el-button>
                      </div>
                    </el-col>
                    <el-col :span="12"  style="font-size: 12px;margin-top: 20px">
                      <div style="float: left;width: 100%">
                        <el-button type="primary" style="width: 100%" plain>
                          发信息
                          <!--<router-link :to="{name:'私聊',params:{toUserId:item.userId}}">发信息</router-link>-->
                        </el-button>
                      </div>
                    </el-col>
                  </el-row>
                  <el-avatar slot="reference" src="item.userPic" style="background-color: aqua" :size="30"></el-avatar>
                </el-popover>
                <!--<el-avatar slot="reference" src="item.userPic" :size="30"></el-avatar>-->
              </div>
            </el-col>
            <el-col :span="4">
              <div style="float: left;">
                <!--<span>{{i.userName}}</span>-->
                用户名
              </div>
            </el-col>
            <el-col :span="4">
              <div style="float: left;">
                评论
                <!--<span v-if="i.commentLid<=1">{{i.commentContent}}</span>-->
                <!--<span v-if="i.commentLid>1">回复@{{i.respondentName}}：{{i.commentContent}}</span>-->
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="10" style="height: 20px;font-size: 14px">
            <el-col :span="8" :offset="2">
              <div style="float: left;">
                <!--<span >{{i.commentTime}}</span>-->
                时间
              </div>
            </el-col>
            <el-col :span="4">
              <div style="float: left;">
                <!--<el-button @click="like(index,value)" icon="el-icon-thumb" type="warning" circle plain style="font-size: 8px"></el-button>-->
                <!--<sapn>{{i.commentCount}}</sapn>-->
                评论内容
              </div>
            </el-col>
            <el-col :span="4">
              <div style="float: left;">
                <!--<a @click="replyMessage(index,value)" style="cursor: pointer;">回复</a>-->
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <!--<div class="card">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :span="6" style="height: 558px;">-->

            <!--<div style="background-color: black;width: 80%;height: 92%;margin-left: 20%;padding-top: 20%">-->

              <!--<el-avatar  width="50" height="50" src="../static/img/group.png"></el-avatar>-->
              <!--<p class="name" style="color: white">官方群组</p>-->
              <!--<hr>-->
              <!--<el-avatar  width="50" height="50" src="../static/img/bala2.jpg"></el-avatar>-->
              <!--<p class="name" style="color: white">{{name}}</p>-->
            <!--</div>-->
          <!--</el-col>-->
            <!--<el-row :gutter="20">-->
              <!--<el-col :span="24" style="height: 500px;">-->
                <!--<el-card class="box-card"  style="opacity:0.4;width: 95%;margin-right:5%;height: 93%;margin-bottom: 5%;border-radius: 10px;margin-top: 2%">-->

                  <!--&lt;!&ndash;<el-input placeholder="请输入自己的昵称" prefix-icon="el-icon-user-solid" v-model="name" style="width:50%"></el-input>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="primary" @click="conectWebSocket()">建立连接</el-button>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="danger">断开连接</el-button>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-input&ndash;&gt;-->
                    <!--&lt;!&ndash;placeholder="请输入对方频道号"&ndash;&gt;-->
                    <!--&lt;!&ndash;prefix-icon="el-icon-phone"&ndash;&gt;-->
                    <!--&lt;!&ndash;v-model="aisle"&ndash;&gt;-->
                    <!--&lt;!&ndash;style="width:40%"&ndash;&gt;-->
                  <!--&lt;!&ndash;&gt;</el-input>&ndash;&gt;-->

                  <!--<div v-for="(value,key,index) in messageList" :key="index">-->
                      <!--<el-tag v-if="value.name==name" type="success" style="float:right">我：{{value.msg}}</el-tag>-->
                      <!--<br />-->
                      <!--<el-tag v-if="value.name!=name" style="float:left">{{value.name}}：{{value.msg}}</el-tag>-->
                      <!--<br />-->
                    <!--</div>-->
                <!--</el-card>-->
              <!--</el-col>-->
              <!--<el-col :span="24" style="height: 58px;">-->
                <!--<div style="width: 95%;margin-right:5%;height: 95%;margin-bottom: 5%">-->
                    <!--<el-input placeholder="请输入要发送的消息" prefix-icon="el-icon-s-promotion" v-model="messageValue" style="width:50%"-->
                    <!--&gt;</el-input>-->
                    <!--<el-button type="primary" @click="sendMessage()">发送</el-button>-->
                    <!--<el-button @click="clean()"  type="danger">清空</el-button>-->
                <!--</div>-->
              <!--</el-col>-->
            <!--</el-row>-->

          <!--</el-col>-->
        <!--</el-row>-->
        <!--&lt;!&ndash;<el-avatar slot="reference" src="../static/img/bala2.jpg" :size="60"></el-avatar>&ndash;&gt;-->
        <!--&lt;!&ndash;<p class="name"></p>&ndash;&gt;-->
      <!--</div>-->
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
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
        toUserId:''  //对方id
      };
    },
    mounted(){

    },
    methods: {


    },
  }
</script>

<style scoped>
  .header{
    position: inherit;
  }
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

