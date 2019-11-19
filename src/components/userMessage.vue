<template>
  <div style="width: 100%;margin: auto" class="note">
      <el-container style="height: 600px;width: 90%;margin: auto; border: 1px solid #eee;margin-top: 100px">

        <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
        <el-aside class="app-side app-side-left"
                  style="width: 200px;line-height: inherit;background-color: inherit;" >
          <el-menu
            router
            class="el-menu-vertical-demo"
          >
            <!--<template v-for="route in $router.options.routes" v-if="route.children && route.children.length">-->
              <!--<template v-for="item in route.children" >-->
                <!--<el-badge :value="7" class="item" type="primary" style="margin-top: 20px">-->
                <!--<el-menu-item-->
                  <!--:key="route.path + '/' + item.path"-->
                  <!--:index="item.path"-->
                  <!--active-text-color="#ffd04b"-->
                <!--&gt;-->
                  <!--<i class="el-icon-chat-dot-round"></i>-->
                  <!--<span slot="title">{{ item.name }}</span>-->
                <!--</el-menu-item>-->
                <!--</el-badge>-->
              <!--</template>-->
            <!--</template>-->
            <el-badge :value="6" class="item" type="primary" style="margin-top: 20px">
              <el-menu-item index="/chatMessage" style="height: 10%" @click="chat(0)">
                <i class="el-icon-chat-dot-round"></i>
                <span slot="title">私聊</span>
              </el-menu-item>
            </el-badge>

            <el-badge :value="10" class="item" type="primary" style="margin-top: 20px">
              <el-menu-item index="/message" style="height: 10%" @click="chat(1)">
                <i class="el-icon-message"></i>
                <span slot="title">评论</span>
              </el-menu-item>
            </el-badge>

            <el-badge :value="4" class="item" >
              <el-menu-item index="/document" style="height: 10%" @click="chat(2)">
                <i class="el-icon-document"></i>
                <span slot="title">回复</span>
              </el-menu-item>
            </el-badge>

            <el-badge :value="collection" class="item" type="primary">
              <el-menu-item index="/folder" style="height: 10%" @click="chat(3)">
                <i class="el-icon-folder-opened"></i>
                <span slot="title">收藏</span>
              </el-menu-item>
            </el-badge>

            <el-badge :value="5" class="item" type="primary">
            <el-menu-item index="chart" style="height: 10%" @click="chat(4)">
              <i class="el-icon-pie-chart"></i>
              <span slot="title">历史</span>
            </el-menu-item>
            </el-badge>

            <el-badge :value="upload" class="item" type="warning">
              <el-menu-item index="/upload" style="height: 10%" @click="chat(5)">
                <i class="el-icon-upload"></i>
                <span slot="title">发布</span>
              </el-menu-item>
            </el-badge>

          </el-menu>

          <!--<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">-->
          <!--</el-radio-group>-->
          <!--<el-tabs :tab-position="tabPosition" label-width="10%" style="height: 600px;width: 100%">-->
            <!--<el-tab-pane label="私聊"  style="height: 580px;width: 100%">-->
              <!--<div  style="height: 100%;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;border-radius: 20px" >-->
                <!--&lt;!&ndash;<header>&ndash;&gt;-->
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
                    <!--<el-col :span="18" style="height: 558px">-->
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

                <!--&lt;!&ndash;</header>&ndash;&gt;-->
              <!--</div>-->

            <!--</el-tab-pane>-->

            <!--<el-tab-pane  label="评论">-->

              <!--评论-->


            <!--</el-tab-pane>-->
            <!--<el-tab-pane label="回复">-->


              <!--回复-->


            <!--</el-tab-pane>-->
            <!--<el-tab-pane label="收藏">-->


              <!--收藏-->


            <!--</el-tab-pane>-->
            <!--<el-tab-pane label="点赞">-->


              <!--点赞-->


            <!--</el-tab-pane>-->
            <!--<el-tab-pane label="发布">-->

              <!--发布-->

            <!--</el-tab-pane>-->
          <!--</el-tabs>-->
        </el-aside>

        <el-main>
          <template>
              <!--&lt;!&ndash;</header>&ndash;&gt;-->
            <!--</div>-->
            <router-view/>
            <div style="background: url('../static/img/girl2.jpeg');opacity:0.6;height: 100%;width:100%;margin-top: 0px">
              <h1 style="color: red;line-height: 100%">欢迎来到个人中心！</h1>
            </div>
          </template>
        </el-main>

      </el-container>
  </div>
</template>


<style>
  /*.el-menu-item, .el-submenu__title{*/
    /*height: 20%;*/
  /*}*/
  .el-menu-vertical-demo {
    width: 200px;
    /*min-height: 400px;*/
  }
  .el-menu{
    background-color: #FDFFF4;
    /*background-color:#B3C0D1 ;*/
    height: 600px;

    position: inherit;
  }
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
  /*.el-menu-item:focus, .el-menu-item:hover{*/
    /*!*background-color: ;*!*/
    /*width: 100%;*/
  /*}*/

  /*.el-header, .el-footer {*/
    /*!*background-color: #B3C0D1;*!*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 60px;*/
    /*font-size: 20px;*/
  /*}*/

  .el-aside {
    color: #333;
    width: 200px;
    overflow: hidden;
    line-height: inherit;
  }

  .el-main {
    /*background-color: #FDFFF4;*/
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
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
  body{
    font-size: 16px;

  }





  /*.el-tabs--left .el-tabs__nav-scroll{*/
    /*width: 180px;*/

  /*}*/
  /*.el-tabs--left .el-tabs__item.is-left{*/
    /*font-size: 16px;*/
    /*text-align: center;*/
  /*}*/
  /*.el-tabs__item.is-active{*/
    /*height: 50px;*/
    /*background-color: paleturquoise;*/
  /*}*/
  /*.el-tabs__item{*/
    /*height: 50px;*/
    /*line-height: 50px;*/
  /*}*/
</style>
<style scoped>
  .note{
    /*position: absolute;*/
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    /*overflow-y: auto;*/
  }

</style>

<script>

  import axios from 'axios'
  import ElFooter from "../../node_modules/element-ui/packages/footer/src/main";
  import ElRadioButton from "../../node_modules/element-ui/packages/radio/src/radio-button";
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import Cookies from 'js-cookie'
  export default{
    components: {
      ElImage,
      ElRadioButton,
      ElFooter},
    data(){
      return{
        tabPosition: 'left',
        isCollapse: false,
        adminName:'未登录',
        userId:'',
        toUserId:'',
        tabPosition: 'left',
        collection:0,
        upload:0

//        showPrise:false,
      }
    },mounted(){
      var id=Cookies.get('userId');
//      this.adminName= Cookies.get('name');
//      console.log(this.adminName)
      //收藏
      var url="api/findAllCollection/"+id
      axios.get(url).then(res=>{
          this.collection=res.data.length
      })
      //发布
      var url="api/findVideoById/"+id
      axios.get(url).then(res=>{
          this.upload=res.data.length
      })


    },
    methods:{
//      chat:function(x){
//        for(var i=0;i<6;i++){
//          if(x==i){
////              alert(this.$refs.message.innerHTML)
////            this.$refs.message.children[0].innerHTML
//            alert()
//            document.getElementById("message").children;
////            this.$refs.message.hidden;
////            $(this).parent()
//
//
//          }
//        }
//      }
    }
  }
</script>
