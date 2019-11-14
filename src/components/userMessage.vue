<template>
  <div style="width: 100%;margin: auto" class="hello">
      <el-container style="height: 600px;width: 90%;margin: auto; border: 1px solid #eee">
        <!--<el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
        <el-aside class="app-side app-side-left"
                  style="width: 20%;line-height: inherit;background-color: inherit" >
          <el-menu
            router
            class="el-menu-vertical-demo"
          >
            <template v-for="route in $router.options.routes" v-if="route.children && route.children.length">
              <template v-for="item in route.children" >
                <el-badge :value="7" class="item" type="primary" style="margin-top: 20px">
                <el-menu-item
                  :key="route.path + '/' + item.path"
                  :index="item.path"
                  active-text-color="#ffd04b"
                >
                  <i class="el-icon-chat-dot-round"></i>
                  <span slot="title">{{ item.name }}</span>
                </el-menu-item>
                </el-badge>
              </template>
            </template>
            <el-badge :value="10" class="item" type="primary" style="margin-top: 20px">
              <el-menu-item index="1" style="height: 20%">
                <i class="el-icon-message"></i>
                <span slot="title">评论</span>
              </el-menu-item>
            </el-badge>

            <el-badge :value="4" class="item" >
              <el-menu-item index="2" style="height: 20%">
                <i class="el-icon-document"></i>
                <span slot="title">回复</span>
              </el-menu-item>
            </el-badge>

            <el-badge :value="5" class="item" type="primary">
              <el-menu-item index="3" style="height: 20%">
                <i class="el-icon-folder-opened"></i>
                <span slot="title">收藏</span>
              </el-menu-item>
            </el-badge>

            <el-badge :value="6" class="item" type="warning">
              <el-menu-item index="4" style="height: 20%">
                <i class="el-icon-upload"></i>
                <span slot="title">发布</span>
              </el-menu-item>
            </el-badge>

          </el-menu>
        </el-aside>

        <el-main>
          <template>
            <router-view/>
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
//  import Cookies from 'js-cookie'
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";

  export default{
    components: {
      ElImage,
      ElRadioButton,
      ElFooter},
    data(){
      return{
        tabPosition: 'left',
        isCollapse: false,
        adminName:'未登录'
      }
    },mounted(){

//      this.adminName= Cookies.get('name');
//      console.log(this.adminName)


    },
    methods:{

    }
  }
</script>
