<template>
  <div class="hello" style="width: 95%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <el-header style="height: 140px">
        <div style="width: 100%;margin: auto;">
        <el-row :gutter="10" >
          <!--style="background-color: gainsboro;"-->

          <!--<el-col :span="4">-->
            <!--<div class="grid-content " style="height: 60px;font-size: 16px">-->
              <!--<el-image src="http://pxx4c7852.bkt.clouddn.com/logo2%20%281%29.jpg" style="height: 60px;width:150px;border-radius: 3px"></el-image>-->
            <!--</div>-->
          <!--</el-col>-->
          <el-col :span="10" :offset="2">
            <div class="grid-content " style="height: 80px;font-size: 16px;border: solid 1px orangered;border-radius: 10px">
              <div class="grid-content " style="height: 60px;font-size: 16px;float: left;">
                <router-link :to="{name:'index'}">
                  <el-image src="../static/img/bala2.jpg" style="height: 80px;width:150px;border-radius: 3px" title="首页"></el-image>
                </router-link>
              </div>
              <div id="sy" class="grid-content " style="height: 60px;width:60px;font-size: 16px;float: left;margin-top: 10px"
                   @mousemove="over(1)"
                   @mouseleave="leave(1)"
                   :style="active"

              >
                <router-link type="info" :to="{name:'index'}" style="color:black;" ><a>首页</a></router-link>
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
                    <a>个人中心</a><i class="el-icon-arrow-down el-icon--left"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><a @click="toUser()">完善信息</a></el-dropdown-item>
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
                    <a>赛事</a><i class="el-icon-arrow-down el-icon--left"></i>
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
                  <a>视频</a><i class="el-icon-arrow-down el-icon--left"></i>
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
                <router-link type="info" :to="{name:'userLogin'}" style="color:black" v-if="this.userId==null" ><a class="el-icon-user" >登录</a></router-link>
                <span style="color:black;" v-if="this.usrId!=null"><a>{{user.userName}}</a></span>
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


      <el-main style="width: 90%;margin: auto">
        <!--分类展示-->
        <el-row :gutter="10">
          <el-col :span="24" style="font-size: 14px;margin-bottom: 20px">

            <!--遍历视频类别-->
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <a href="/">
                <span class="el-icon-s-home" style="float: left;width: 100%;"></span>
                <span style="float: left;width: 100%;">首页</span>
              </a>
            </div>

            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">番剧</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">国创</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">音乐</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">舞蹈</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">游戏</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">科技</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">数码</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">生活</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">时尚</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">娱乐</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">影视</a></span>
            </div>
            <div style="float: left;width: 50px;height: 50px;background-color: orangered;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <span style="float: left;width: 100%;"><a href="/">直播</a></span>
            </div>
            <div style="float: left;width: 100px;height: 50px;margin-bottom: 10px;margin-right: 20px;line-height:50px;text-align: center">
              <el-image src="../static/img/bala2.jpg" style="float: left;width: 100%;"></el-image>
            </div>
            <div class="grid-content " style="height: 60px;width:50px;float: left"
                 @mousemove="over(10)"
                 @mouseleave="leave(10)"
                 :style="i"
            >
                 <span type="info" style="color:black;cursor: pointer;margin-top:20px">
                  <a class="el-icon-circle-plus-outline" type="primary" @click="toUpload()" style="font-size: 30px" title="发布视频"></a>
                </span>
            </div>
          </el-col>
        </el-row>



        <!--视频轮播-->
        <el-row :gutter="10">
          <el-col :span="24">
            <template>
              <div style="margin-bottom: 10px">
                <el-carousel :interval="5000" type="card" height="300px" width="800px">
                  <el-carousel-item v-for="item in 4" :key="item">

                    <video id=example-video width=90% height=300 style="margin:auto" class="video-js vjs-default-skin vjs-big-play-centered" controls title="王者荣耀播主视频">
                      <source
                        src="https://candy-jing.oss-cn-beijing.aliyuncs.com/01.mp4"
                        type="video/mp4"
                      >
                      <!--type="application/x-mpegURL"-->
                    </video>
                  </el-carousel-item>
                </el-carousel>


              <!--<el-carousel :interval="5000" arrow="always" height="500px" width="100%">-->
                <!--<el-carousel-item v-for="item in 4" :key="item">-->
                  <!--&lt;!&ndash;<router-link :to="{path:'/shopDetial/'+shop.shopId}">&ndash;&gt;-->
                    <!--<video id=example-video width=90% height=500 style="margin:auto" class="video-js vjs-default-skin vjs-big-play-centered" controls>-->
                      <!--<source-->
                        <!--src="https://candy-jing.oss-cn-beijing.aliyuncs.com/01.mp4"-->
                        <!--type="video/mp4"-->
                        <!--&gt;-->
                    <!--&lt;!&ndash;type="application/x-mpegURL"&ndash;&gt;-->
                    <!--</video>-->
                    <!--&lt;!&ndash;<div style="float:left;margin-top:10px">&ndash;&gt;-->
                      <!--&lt;!&ndash;<input type="button"  onClick="switchvideo()" value="switch"/>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->

                    <!--&lt;!&ndash;<div id="box" class="box" style="width:100%;margin:auto"></div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div style="float:left;margin-left:40px;margin-top:10px">&ndash;&gt;-->
                      <!--&lt;!&ndash;<input type="text" id="txt" style="height:20px;width:250px"/>&ndash;&gt;-->
                      <!--&lt;!&ndash;<button onclick="send()">发送弹幕</button>&ndash;&gt;-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->

                  <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
                <!--</el-carousel-item>-->

              <!--</el-carousel>-->
              </div>
            </template>
          </el-col>
        </el-row>
        <!--视频标题-->
        <el-row :gutter="10">
          <el-col :span="24">
            <div style="text-align: center;background-color: orangered;height: 40px;margin-bottom: 20px;line-height: 40px">
              <span>王者荣耀播主视频(轮播视频对应的标题)</span>
            </div>
          </el-col>
        </el-row>


        <!--更多-->
        <el-row>
          <el-col :span="6" :offset="18">
            <div class="grid-content" style="line-height: 40px;float: right;">
              <el-tooltip content="更多" placement="bottom" effect="light">
                <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
              </el-tooltip>
            </div>
          </el-col>
        </el-row>
        <!--视频-->
        <el-row :gutter="10">
          <!--<el-col :span="4" v-for="" v-bind:key="">-->
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px;">
              <div style="height: 120px;">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px">
              <div style="height: 120px;">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px">
              <div style="height: 120px;">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px">
              <div style="height: 120px;">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px">
              <div style="height: 120px">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px">
              <div style="height: 120px;">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px">
              <div style="height: 120px;">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div style="height: 120px;background-color: orangered;margin-bottom: 10px">
              <div style="height: 120px;">
                <!--<router-link :to=""><img src="../static/img/bala2.jpg" style="width:310px;height: 310px"></router-link>-->
              </div>
            </div>
          </el-col>
        </el-row>


        <!--视频分类-特别推荐-->
        <el-row :gutter="10">
          <el-col :span="18">

            <el-row :gutter="10">
              <el-col :span="12">
                <!--background-color: #d3dce6;-->
                <div style="width:150px;height: 40px;float:left;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 20px">
                  <div style="height: 40px;float: left;width: 40px;margin-right: 10px">
                    <el-image src="../static/img/tuijian.jpg" style="width: 40px;height: 40px;cursor: pointer" title="特别推荐"></el-image>
                  </div>
                  <div style="height: 40px;float: left;">
                    <span>特别推荐</span>
                  </div>
                </div>
                <div style="height: 40px;float:left;font-size: 18px;font-weight: bolder;text-align: center;line-height: 40px">
                  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">最新动态</el-menu-item>
                    <el-menu-item index="2">最新投稿</el-menu-item>
                  </el-menu>
                </div>

              </el-col>
              <!--更多-->
              <el-col :span="6" :offset="6">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <!--遍历特别推荐-->
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
            </el-row>

          </el-col>

          <el-col :span="6" >

            <el-row :gutter="10">

              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;background-color: #d3dce6;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 16px">
                  排 行
                </div>

              </el-col>
              <!--更多-->
              <el-col :span="6" :offset="12">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>


              <el-col :span="24">
                <!--遍历排行-->
                <div style="height: 260px;background-color: orangered"> </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>


        <!--视频分类-直播-->
        <el-row :gutter="10">
          <el-col :span="18">

            <el-row :gutter="10">
              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 20px">
                  <div style="height: 40px;float: left;width: 40px;margin-right: 10px">
                    <el-image src="../static/img/zhibo.jpg" style="width: 40px;height: 40px;cursor:pointer" title="直播"></el-image>
                  </div>
                  <div style="height: 40px;float: left;">
                    <span>正在直播</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 40px;float:left;font-size: 16px;color:palevioletred;text-align: center;line-height: 40px">
                  <span>共？播主在线直播</span>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 40px;float:left;font-size: 16px;color:palevioletred;text-align: center;line-height: 40px">
                  <el-button class="el-icon-refresh"></el-button>
                  <span>共？条动态</span>
                </div>
              </el-col>
              <!--更多-->
              <el-col :span="6" >
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <!--遍历直播-->
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
            </el-row>

          </el-col>

          <el-col :span="6" >

            <el-row :gutter="10">

              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;background-color: #d3dce6;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 16px">
                  直播排行
                </div>
              </el-col>
              <!--更多-->
              <el-col :span="6" :offset="12">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>

              <el-col :span="24">
                <!--遍历排行-->
                <div style="height: 260px;background-color: orangered"> </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>


        <!--视频分类-动漫-->
        <el-row :gutter="10">
          <el-col :span="18">

            <el-row :gutter="10">
              <el-col :span="12">
                <div style="width:150px;height: 40px;float:left;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 20px">
                  <div style="height: 40px;float: left;width: 40px;margin-right: 10px">
                    <el-image src="../static/img/dongman.jpg" style="width: 40px;height: 40px;cursor:pointer" title="动漫"></el-image>
                  </div>
                  <div style="height: 40px;float: left;">
                    <span>动 漫</span>
                  </div>
                </div>
                <div style="height: 40px;float:left;font-size: 18px;font-weight: bolder;text-align: center;line-height: 40px">
                  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">最新动态</el-menu-item>
                    <el-menu-item index="2">最新投稿</el-menu-item>
                  </el-menu>
                </div>

              </el-col>

              <!--更多-->
              <el-col :span="6" :offset="6">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <!--遍历动漫-->
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
            </el-row>

          </el-col>

          <el-col :span="6" >

            <el-row :gutter="10">

              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;background-color: #d3dce6;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 16px">
                  排 行
                </div>
              </el-col>
              <!--更多-->
              <el-col :span="6" :offset="12">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>

              <el-col :span="24">
                <!--遍历排行-->
                <div style="height: 260px;background-color: orangered"> </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>


        <!--视频分类-游戏-->
        <el-row :gutter="10">
          <el-col :span="18">

            <el-row :gutter="10">
              <el-col :span="12">
                <div style="width:150px;height: 40px;float:left;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 20px">
                  <div style="height: 40px;float: left;width: 40px;margin-right: 10px">
                    <el-image src="../static/img/youxi.jpg" style="width: 40px;height: 40px;cursor:pointer" title="游戏"></el-image>
                  </div>
                  <div style="height: 40px;float: left;">
                    <span>游 戏</span>
                  </div>
                </div>
                <div style="height: 40px;float:left;font-size: 18px;font-weight: bolder;text-align: center;line-height: 40px">
                  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">最新动态</el-menu-item>
                    <el-menu-item index="2">最新投稿</el-menu-item>
                  </el-menu>
                </div>

              </el-col>

              <!--更多-->
              <el-col :span="6" :offset="6">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <!--遍历动画-->
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
            </el-row>

          </el-col>

          <el-col :span="6" >

            <el-row :gutter="10">

              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;background-color: #d3dce6;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 16px">
                  排 行
                </div>
              </el-col>
              <!--更多-->
              <el-col :span="6" :offset="12">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>

              <el-col :span="24">
                <!--遍历排行-->
                <div style="height: 260px;background-color: orangered"> </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>

        <!--视频分类-音乐-->
        <el-row :gutter="10">
          <el-col :span="18">

            <el-row :gutter="10">
              <el-col :span="12">
                <div style="width:150px;height: 40px;float:left;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 20px">
                  <div style="height: 40px;float: left;width: 40px;margin-right: 10px">
                    <el-image src="../static/img/yinyue.jpg" style="width: 40px;height: 40px;cursor:pointer" title="音乐舞蹈"></el-image>
                  </div>
                  <div style="height: 40px;float: left;">
                    <span>音乐舞蹈</span>
                  </div>
                </div>
                <div style="height: 40px;float:left;font-size: 18px;font-weight: bolder;text-align: center;line-height: 40px">
                  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    <el-menu-item index="1">最新动态</el-menu-item>
                    <el-menu-item index="2">最新投稿</el-menu-item>
                  </el-menu>
                </div>

              </el-col>

              <!--更多-->
              <el-col :span="6" :offset="6">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <!--遍历音乐舞蹈-->
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
              <el-col :span="6">
                <div style="height: 120px;background-color: orangered;margin-bottom: 20px"> </div>
              </el-col>
            </el-row>

          </el-col>

          <el-col :span="6" >

            <el-row :gutter="10">

              <el-col :span="6">
                <div style="width:150px;height: 40px;float:left;background-color: #d3dce6;margin-bottom: 20px;line-height: 40px;font-weight: bolder;font-size: 16px">
                  排 行
                </div>
              </el-col>
              <!--更多-->
              <el-col :span="6" :offset="12">
                <div class="grid-content" style="line-height: 40px;float: right;">
                  <el-tooltip content="更多" placement="bottom" effect="light">
                    <el-button class="el-icon-arrow-right" plain @click="next()"></el-button>
                  </el-tooltip>
                </div>
              </el-col>

              <el-col :span="24">
                <!--遍历排行-->
                <div style="height: 260px;background-color: orangered"> </div>
              </el-col>
            </el-row>

          </el-col>
        </el-row>


      </el-main>

      <el-footer>
        <el-row :gutter="10" class="bg-purple" style="margin-left: inherit;margin-right: inherit">
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
                <span style="width: 33%;height: 33%;float: left"><a href="/">客户端下载</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">新浪微博</a></span>
                <span style="width: 33%;height: 33%;float: left"><a href="/">官方微信</a></span>
              </div>
            </div>
          </el-col>
        </el-row>

        <!--bottom版权-->
        <el-row>
          <el-col :span="24"  class="bg-purple">
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

<script>
  import axios from 'axios';
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  export default {
    components: {
      ElButton,
      ElImage},
    name: 'index',
    data () {
      return {
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
        i:'',
        j:'',
        user:{
//            userId:null,
          userTell:'',
          userHobby:'',
//          userInfo:'',
          userRealname:'',
          userEmail:'',
          userPic:'',
          userName:''

        },
      }
    },
    mounted(){

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
            }if(x==11){
            this.j='background-color: orangered;border-radius: 0px 10px 0px 10px';
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
        }if(x==11){
          this.j='';
        }
      },
//      上传视频
      toUpload:function(){
        if (this.userId!=null) {
          this.$router.push("/uploadVideo")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
//      个人中心-完善信息
      toUser:function () {
        if (this.userId!=null) {
          this.$router.push("/userDetial")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
//      修改密码
      toModify:function () {
        if (this.userId!=null) {
          this.$router.push("/updatePassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
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
