<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--导航栏-->
    <el-header style="height: 140px">
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
                <router-link :to="{name:'index'}"><el-image src="../static/img/bala2.jpg" style="height: 80px;width:150px;border-radius: 3px" title="返回首页"></el-image></router-link>
              </div>
              <div id="sy" class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                   @mousemove="over(1)"
                   @mouseleave="leave(1)"
                   :style="active"

              >
                <router-link type="info" :to="{name:'index'}" style="color:black;"><a style="cursor: pointer">首页</a></router-link>
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

          <!--<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>-->
          <el-col :span="8" :offset="4">
            <div class="grid-content " style="height: 80px;margin-top: 10px">

              <!--VIP-->
              <div class="grid-content " style="height: 60px;width:50px;float: left"
                   @mousemove="over(11)"
                   @mouseleave="leave(11)"
                   :style="j"
              >
                 <span type="info" style="color:black;cursor: pointer;margin-right: 10px">
                  <a  type="info" @click="toPay()" style="font-size: 20px" title="VIP">VIP</a>
                </span>
              </div>
              <!--历史-->
              <div class="grid-content " style="height: 60px;float: left"
                   @mousemove="over(5)"
                   @mouseleave="leave(5)"
                   :style="d"
              >
                <span type="info" style="color:black;cursor: pointer;margin-right: 10px" ><a @click="logout()" class="el-icon-pie-chart" :size="50">历史</a></span>
              </div>
              <!--登录-->
              <div class="grid-content " style="height: 60px;width:50px;float: left"
                   @mousemove="over(6)"
                   @mouseleave="leave(6)"
                   :style="e"
              >
                <router-link type="info" :to="{name:'userLogin'}" style="color:black" v-if="this.userId==null" ><a class="el-icon-user">登录</a></router-link>
                <span style="color:black;" v-if="this.userId!=null"><a>{{user.userName}}</a></span>
              </div>
              <!--注册-->
              <div class="grid-content " style="height: 60px;width:50px;float: left"
                   @mousemove="over(7)"
                   @mouseleave="leave(7)"
                   :style="f"
              >
                <router-link type="info" :to="{name:'userRegist'}" style="color:black"><a>注册</a></router-link>
              </div>
              <!--退出-->
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
        <!--搜索-->
        <el-row :gutter="10">
          <el-col :span="14" :offset="5">
            <div class="grid-content " style="height: 60px">
              <!--搜索-->
              <el-input ref="searchName" type="text" style="width: 75%;margin: auto;margin-top: 10px" placeholder="想搜索点什么呢~^_^"
                        v-model="input"
              />
              <el-button type="primary" icon="el-icon-search" style="width: 100px" plain @click="search()"></el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 10px;*/
}
</style>
