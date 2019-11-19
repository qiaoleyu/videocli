<template>
  <div class="hello" style="width: 95%;margin: auto">
    <!--<h1>{{ msg }}</h1>-->
    <el-container >
      <!--导航栏-->
      <el-header style="height: 80px;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;opacity: 0.9" class="header">
        <div style="width: 100%;margin: auto;">
          <el-row :gutter="10">
            <!--<el-col :span="4">-->
            <!--<div class="grid-content " style="height: 60px;font-size: 16px">-->
            <!--<el-image src="http://pxx4c7852.bkt.clouddn.com/logo2%20%281%29.jpg" style="height: 60px;width:150px;border-radius: 3px"></el-image>-->
            <!--</div>-->
            <!--</el-col>-->
            <el-col :span="10" :offset="2">
              <div class="grid-content " style="height: 80px;font-size: 16px;">
                <div class="grid-content " style="height: 60px;font-size: 16px;float: left;">
                  <router-link :to="{name:'index'}"><el-image src="../static/img/bala2.gif" style="height: 80px;width:150px;border-radius: 3px" title="返回首页"></el-image></router-link>
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
                  <router-link type="info" :to="{name:'videoDirect'}" style="color:black;"><a style="cursor: pointer">直播</a></router-link>
                  <!--<a ></a>-->
                </div>
                <el-dropdown>
                  <div class="grid-content " style="height:60px;font-size: 16px;float: left;margin-top: 10px"
                       @mousemove="over(9)"
                       @mouseleave="leave(9)"
                       :style="h"
                  >
                  <span class="el-dropdown-link">
                    <a style="cursor: pointer">个人中心</a>
                    <i class="el-icon-arrow-down el-icon--left"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item><a @click="toUser()">完善资料</a></el-dropdown-item>
                      <el-dropdown-item><a @click="toModify()">修改密码</a></el-dropdown-item>
                      <el-dropdown-item><a @click="toMessage()">信息中心</a></el-dropdown-item>
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
                  <a style="cursor: pointer">视频</a>
                  <i class="el-icon-arrow-down el-icon--left"></i>
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
            <el-col :span="8" :offset="3">
              <div class="grid-content " style="height: 80px;margin-top: 10px">

                <!--VIP-->
                <div class="grid-content " style="height: 60px;width:50px;float: left"
                     @mousemove="over(11)"
                     @mouseleave="leave(11)"
                     :style="j"
                >
                 <span type="info" style="color:black;cursor: pointer;margin-right: 10px">
                    <el-popover
                      placement="top-start"
                      width="400"
                      trigger="hover"
                    >
                        <!--title="标题"-->
                      <!--content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"-->
                      <!--<el-button slot="reference">hover 激活</el-button>-->
                        <el-row :gutter="10">
                          <el-col :span="24">
                            <h3>请选择支付方式</h3>
                          </el-col>
                          <el-col :span="12">
                            <el-radio-group v-model="radio2">
                              <el-radio-button label="账户余额支付"></el-radio-button>
                            </el-radio-group>
                          </el-col>
                          <el-col :span="12">
                            <el-radio-group v-model="radio2">
                              <el-radio-button label="支付宝支付"></el-radio-button>
                            </el-radio-group>
                          </el-col>
                          <el-col :span="24">
                            <h3>请选择会员充值期限</h3>
                          </el-col>
                          <el-col :span="8">

                            <div style="float: left;text-align: center">
                              <el-card style="height: 120px;width: 100%;cursor: pointer">
                                <el-image src="../static/img/yue.jpg" style="width: 100%;height:100%" title="15元/月，普通会员"></el-image>
                             </el-card>
                              <el-radio-group v-model="radio1">
                                <el-radio-button label="$15元/月"></el-radio-button>
                              </el-radio-group>
                            </div>

                          </el-col>
                          <el-col :span="8">
                            <div style="float: left;text-align: center">
                              <el-card style="height: 120px;width: 100%;cursor: pointer">
                                <el-image src="../static/img/nian.jpg" style="width: 100%;height: 100%" title="50元/季，普通会员"></el-image>
                              </el-card>
                              <el-radio-group v-model="radio1">
                                <el-radio-button label="$50元/季"></el-radio-button>
                              </el-radio-group>
                            </div>
                          </el-col>
                          <el-col :span="8">
                            <div style="float: left;text-align: center">
                              <el-card style="height: 120px;width: 100%;cursor: pointer">
                                <el-image src="../static/img/huiyuan.jpg" style="width: 100%;height: 100%" title="200元/年，普通会员"></el-image>
                              </el-card>
                              <el-radio-group v-model="radio1">
                                <el-radio-button label="$200元/年"></el-radio-button>
                              </el-radio-group>
                            </div>
                          </el-col>
                          <el-col :span="18" :offset="3" style="font-size: 12px;margin-top: 20px">
                            <div style="float: left;width: 100%">
                              <el-button type="primary" style="width: 100%" plain  @click="payForVip()">充值</el-button>
                            </div>
                          </el-col>
                        </el-row>
                      <a  type="info" slot="reference" style="font-size: 16px" title="VIP">VIP</a>
                      </el-popover>

                </span>
                </div>

                <!--用户充值-->
                <div class="grid-content " style="height: 60px;float: left"
                     @mousemove="over(12)"
                     @mouseleave="leave(12)"
                     :style="m"
                >
                  <el-dropdown>
                    <div>
                  <span class="el-dropdown-link" style="margin-right: 10px">
                    <a>充值</a>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                      <el-dropdown-menu slot="dropdown" style="width:130px;">
                        <el-dropdown-item><a @click="WeChatPay()">微信充值</a></el-dropdown-item>
                        <el-dropdown-item><a @click="aliPay()" >支付宝充值</a></el-dropdown-item>
                      </el-dropdown-menu>
                    </div>
                  </el-dropdown>
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
                  <router-link type="info" :to="{name:'userLogin'}" style="color:black" v-if="this.user.userId==null" ><a class="el-icon-user" >登录</a></router-link>
                  <span style="color:black;" v-if="this.user.userId!=null"><a>{{user.userName}}</a></span>
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
        </div>
      </el-header>

      <el-main>

        <!--视频轮播-->
        <el-row :gutter="10">
          <el-col :span="18">
            <div style="width: 100%;">
              <!--<router-link :to="{path:'/shopDetial/'+shop.shopId}">-->
              <div style="float: left;width: 100%">
                <!--<canvas  id="canvasBarrage"></canvas>-->

                <video-player class="video-player vjs-custom-skin"
                              ref="videoPlayer"
                              :playsinline="true"
                              :options="playerOptions"
                              @play="onPlayerPlay($event)"
                              @pause="onPlayerPause($event)"
                              @ended="onPlayerEnded($event)"
                              @waiting="onPlayerWaiting($event)"
                              @playing="onPlayerPlaying($event)"
                              @loadeddata="onPlayerLoadeddata($event)"
                              @timeupdate="onPlayerTimeupdate($event)"
                              @canplay="onPlayerCanplay($event)"
                              @canplaythrough="onPlayerCanplaythrough($event)"
                              @statechanged="playerStateChanged($event)"
                              @ready="playerReadied"
                >
                  <source
                    src="video.videoUrl"
                    type="video/mp4">
                  >
                </video-player>







                <!--<video id="example-video" width=100% height=500 style="margin: auto" class="video-js vjs-default-skin vjs-big-play-centered" playRate controls>-->
                 <!--<source-->
                   <!--src="https://candy-jing.oss-cn-beijing.aliyuncs.com/01.mp4"-->
                   <!--type="video/mp4">-->
                  <!--&lt;!&ndash;<template>&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-select v-model="value" placeholder="倍速">&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-option&ndash;&gt;-->
                        <!--&lt;!&ndash;id="selRate"&ndash;&gt;-->
                        <!--&lt;!&ndash;v-for="item in options"&ndash;&gt;-->
                        <!--&lt;!&ndash;:key="item.value"&ndash;&gt;-->
                        <!--&lt;!&ndash;:label="item.label"&ndash;&gt;-->
                        <!--&lt;!&ndash;:value="item.value">&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-option>&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-select>&ndash;&gt;-->
                  <!--&lt;!&ndash;</template>&ndash;&gt;-->
                  <!--&lt;!&ndash;<source&ndash;&gt;-->
                    <!--&lt;!&ndash;&ndash;&gt;-->
                  <!--&lt;!&ndash;&gt;&ndash;&gt;-->
                  <!--&lt;!&ndash;type="application/x-mpegURL"&ndash;&gt;-->
                <!--</video>-->
              </div>

              <div style="float: left;width: 100%;background-color: #000; opacity: 0.8;">
                <el-tooltip content="切换视频" placement="bottom" effect="light">
                  <input type="button"  onClick="switchvideo()" style="height: 40px;width: 80px;font-size: 16px" value="switch"/>
                </el-tooltip>
                <!--<el-input type="text" id="txt" style="height:32px;width:280px;margin-left: 40px"-->
                          <!--placeholder="请输入弹幕内容"-->
                          <!--v-model="input1"-->
                <!--/>-->
                <el-input type="text" id="txt" style="height:32px;width:280px;margin-left: 40px"
                          placeholder="说点什么吧~^_^"
                          v-model="input1"
                />

                <el-button @click="sendBarrage()" style="height: 40px " plain>发送弹幕</el-button>

                <el-tooltip content="点赞" placement="bottom" effect="light">
                  <el-button icon="el-icon-thumb" type="warning" circle plain style="margin-left: 60px;font-size: 18px" @click="likeVideo()"></el-button>
                </el-tooltip>

                <el-tooltip content="收藏" placement="bottom" effect="light" >
                  <el-button type="warning" icon="el-icon-star-off" circle plain style="margin-left: 20px;font-size: 18px" @click="favoriteVideo()"></el-button>
                </el-tooltip>
                <el-tooltip content="打赏" placement="bottom" effect="light">
                  <el-button type="warning" icon="el-icon-coin" circle plain style="margin-left: 20px;font-size: 18px"></el-button>
                </el-tooltip>

                <el-tooltip content="弹幕" placement="bottom" effect="light">
                  <el-switch
                    v-model="value1"
                    style="margin-left: 30px;font-size: 18px"

                    active-text="开关"
                  >
                    <!--inactive-text="关闭"-->
                  </el-switch>
                </el-tooltip>

                <!--弹幕（飘屏设置）-->
                <div id="box" class="box" style="width:100%;float: left;margin: auto">
                  <!--<div v-for="(value,index) in messageList" :key="index">
                    <span>{{value}}</span>
                  </div>-->
                  <div id="message_id"></div>
                </div>

              </div>



              <!--视频数据，详情-->
              <div  style="float:left;text-align: left;margin-left: 10px">
                <div style="height: 40px;padding-top: 20px">
                  <span style="line-height: 40px">视频名称：</span>
                  <span>{{video.videoName}}</span>
                </div>
                <div style="height: 40px;">
                  <span style="line-height: 40px">作者：</span>
                  <span>{{video.videoUsername}}</span>
                </div>
                <div style="height: 40px;">
                  <span style="line-height: 40px">视频类别：</span>
                  <!--<span v-text="shop.shopPrice" style="color: red"></span>-->
                  <span >{{typeName}}</span>
                </div>
                <div style="height: 40px;">
                  <span style="line-height: 40px">视频描述：</span>
                  <span>{{video.videoInfo}}</span>
                </div>
              </div>

              <!--视频评论-->
              <div style="float: left;width: 100%;height: 200px;text-align: left">
                <el-row :gutter="10">
                  <el-col :span="24">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                    </el-menu>
                    <div style="height: 40px;font-size: 20px;font-weight: bolder;margin-left: 10px;line-height: 40px">
                      <span style="margin-right: 20px">评论数量</span>
                      <span>评论</span>
                    </div>
                    <div style="float: left;margin-left: 10px;font-size: 20px;font-weight: bolder;">
                      <span class="demonstration">视频评分：</span>
                    </div>
                    <div style="float: left;margin-left: 20px;font-size: 20px;font-weight: bolder;">
                      <el-rate
                        v-model="value2"
                        show-text
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </el-col>
                </el-row>

                <el-row :gutter="10">
                  <el-col :span="24">
                    <div style="height: 40px;font-size: 18px;font-weight: bolder;margin-left: 10px;text-align: center;line-height: 40px">
                      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">按热度排序</el-menu-item>
                        <el-menu-item index="2">按时间排序</el-menu-item>
                      </el-menu>
                    </div>
                  </el-col>
                </el-row>
                <el-row :gutter="10" style="margin-top: 20px">
                  <el-col :span="4">
                    <div style="height: 80px;font-size: 25px;font-weight: bolder;margin-left: 10px">
                      <el-avatar  :src="user.userPic" :size="80"></el-avatar>
                    </div>
                  </el-col>
                  <el-col :span="14">
                    <div style="height: 80px;font-size: 25px;font-weight: bolder;margin-left: 10px;line-height: 80px">
                      <input v-model="input2" type="text" style="height: 80px;width: 100%;font-size: 18px" />
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div style="height: 80px;font-size: 25px;font-weight: bolder;margin-left: 10px;line-height: 80px;text-align: center">
                      <el-button style="height: 80px;width: 80%;font-size: 20px;font-weight: bolder;" plain type="primary" @click="save()">发表评论</el-button>
                    </div>
                  </el-col>
                </el-row>

                <!--用户信息-->
                <el-row v-for="(item,index) in comments" v-bind:key="item.commentId" :gutter="10" style="margin-top: 20px">
                  <el-col :span="24">
                     <div style="width:150px;font-size: 25px;font-weight: bolder;margin-left: 10px;float: left;text-align: center">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                        </el-menu>
                        <el-popover
                          placement="top-start"
                          width="300"
                          trigger="hover"
                          >
                          <el-row :gutter="10">
                            <el-col :span="24">
                              <div style="float: left;">
                                <el-image src="../static/img/yh1.jpg" style="width: 100%"></el-image>
                              </div>
                            </el-col>
                            <el-col :span="10" :offset="2" style="height:60px;line-height: 60px">
                              <div style="float: left;">
                                <el-avatar :src="item.userPic" :size="60"></el-avatar>
                              </div>
                            </el-col>
                            <el-col :span="12" style="height:60px;line-height: 60px">
                              <div style="float: left;">
                                <span>{{item.userName}}</span>
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
                                <el-button type="primary" style="width: 100%" plain @click="toUserMsg(item.userId)">发信息</el-button>
                              </div>
                            </el-col>
                          </el-row>
                          <el-avatar slot="reference" :src="item.userPic" :size="60"></el-avatar>
                        </el-popover>
                      </div>
                      <div style="float: left;text-align: left;font-size: 20px;line-height: 60px;height: 60px">
                      <el-row :gutter="10">
                        <el-col :span="6" style="height: 30px;font-size: 14px;line-height: 30px">
                          <div style="float: left;">
                            <span>{{item.userName}}</span>
                          </div>
                        </el-col>
                        <el-col :span="12" style="height: 30px;font-size: 14px;line-height: 30px">
                          <div style="float: left;">
                            <span>{{item.commentContent}}</span>
                          </div>
                        </el-col>
                        <el-col :span="24" style="height: 30px;font-size: 14px;line-height: 30px">
                          <el-row :gutter="10">
                            <el-col :span="6">
                              <span >{{item.commentTime}}</span>
                            </el-col>
                            <el-col :span="6">
                              <el-button @click="like2(index)" icon="el-icon-thumb" type="warning" circle plain style="font-size: 8px"></el-button>
                              <sapn>{{item.commentCount}}</sapn>
                            </el-col>
                            <el-col :span="6">
                              <span >不赞同</span>
                            </el-col>
                            <el-col :span="6">
                              <a @click="replyMeg(index)" style="cursor: pointer;text-align: center">回复</a>
                            </el-col>
                          </el-row>
                        </el-col>
                      </el-row>

                      </div>

                      <!--评论信息-->
                      <el-row :gutter="10" style="margin-top: 20px">
                        <el-col :span="20" :offset="4">
                          <div v-for="(i,value) in comments2[index].list" style="width:99%;font-size: 16px;font-weight: bolder;margin-left: 10px;background-color: beige;float: left;text-align: center">
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
                                          <el-avatar :src="i.userPic" :size="60"></el-avatar>
                                        </div>
                                      </el-col>
                                      <el-col :span="12" style="height:60px;line-height: 60px">
                                        <div style="float: left;">
                                          <span>{{i.userName}}</span>
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
                                          <el-button type="primary" style="width: 100%" plain @click="toUserMsg(i.userId)">发信息</el-button>
                                        </div>
                                      </el-col>
                                    </el-row>
                                    <el-avatar slot="reference" :src="i.userPic" :size="30"></el-avatar>
                                  </el-popover>
                                  <!--<el-avatar slot="reference" src="item.userPic" :size="30"></el-avatar>-->
                                </div>
                              </el-col>
                              <el-col :span="4">
                                <div style="float: left;">
                                  <span>{{i.userName}}</span>
                                </div>
                              </el-col>
                              <el-col :span="4">
                                <div style="float: left;">
                                  <span v-if="i.commentLid<=1">{{i.commentContent}}</span>
                                  <span v-if="i.commentLid>1">回复@{{i.respondentName}}：{{i.commentContent}}</span>
                                </div>
                              </el-col>
                            </el-row>

                            <el-row :gutter="10" style="height: 20px;font-size: 14px">
                              <el-col :span="8" :offset="2">
                                <div style="float: left;">
                                  <span >{{i.commentTime}}</span>
                                </div>
                              </el-col>
                              <el-col :span="4">
                                <div style="float: left;">
                                  <el-button @click="like(index,value)" icon="el-icon-thumb" type="warning" circle plain style="font-size: 8px"></el-button>
                                  <sapn>{{i.commentCount}}</sapn>
                                </div>
                              </el-col>
                              <el-col :span="4">
                                <div style="float: left;">
                                  <a @click="replyMessage(index,value)" style="cursor: pointer;">回复</a>
                                </div>
                              </el-col>
                            </el-row>
                          </div>
                        </el-col>
                      </el-row>

                    <!--分页-->
                    <el-row :gutter="10" style="margin-top: 20px">
                      <el-col :span="24">
                        <el-pagination
                          background
                          @size-change="handleSizeChange"
                          @current-change="handleCurrentChange"
                          :current-page="currentPage"
                          layout="total, sizes, prev, pager, next, jumper"
                          :total="comments2[index].total"
                          style="text-align: center"
                        >
                        </el-pagination>
                      </el-col>
                    </el-row>

                  </el-col>
                </el-row>


              </div>

            </div>
            <!--</router-link>-->
          </el-col>
          <el-col :span="6">
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%;margin-bottom: 15px">

            </div>
            <div style="float: left;background-color: orange;height: 125px;width: 100%">

            </div>
          </el-col>
        </el-row>
      </el-main>

      <el-footer>
        <!--&lt;!&ndash;dan'mu&ndash;&gt;-->
        <!--<div id="container" class="container">-->
        <!--</div>-->
        <!--<div class="input-box">-->
          <!--&lt;!&ndash;限制用户输入的文字长度，尽量避免用户输入的内容长度超过屏幕的宽度&ndash;&gt;-->
          <!--<input type="text" maxlength="20" placeholder="说点什么吧~">-->
          <!--<button id="btn" class="btn">发送</button>-->
        <!--</div>-->


        <!--bottom-->
        <!--<el-row>-->
          <!--<el-col :span="24"  class="bg-purple">-->
            <!--<div style="height: 170px;line-height: 170px;font-size: 13px;text-align: center;float: left;width: 10%">-->
              <!--<el-image src="../static/img/hz.jpg"></el-image>-->
            <!--</div>-->
            <!--<div style="height: 170px;line-height: 25px;font-size: 13px;text-align: center;float: left;width: 90%">-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<a href="">广播电视节目制作经营许可证：（沪）字第1248号|网络文化经营许可证：沪网文【2016】2296-134号|信息网络传播视听节目许可证：0910417</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="">互联网ICP备案：沪ICP备13002172号-3沪ICP证：沪B2-20100043 |违法不良信息举报邮箱：help@bilibili.com |违法不良信息举报电话：4000233233转3 | 营业执照</a>-->
                <!--</li><br>-->
                <!--<li>-->
                  <!--<a href="">上海互联网举报中心 | 12318全国文化市场举报网站 | 沪公网安备31011002002436号 | 儿童色情信息举报专区</a>-->
                <!--</li><br>-->
                <!--<li>-->
                  <!--<a href="">网上有害信息举报专区：中国互联网违法和不良信息举报中心</a>-->
                <!--</li><br>-->
                <!--<li>-->
                  <!--<a href="">亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="">公司名称：上海宽娱数码科技有限公司|公司地址：上海市杨浦区政立路485号|电话：021-25099888</a>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-row>-->

      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import ElImage from "../../node_modules/element-ui/packages/image/src/main";
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";
  import ElInput from "../../node_modules/element-ui/packages/input/src/input";
  import Cookies from 'js-cookie'

//    弹幕
  function $(str)  {
    return document.getElementById(str);
  };
  setInterval(move,200)
  function move() {
if($('box').hasChildren){
      var spanArray = $('box').children;
      for (var i = 0; i < spanArray.length; i++) {

        spanArray[i].style.left = parseInt(spanArray[i].style.left) - spanArray[i].speed + 'px';
        if((parseInt(spanArray[i].style.left)- spanArray[i].speed)<0){
//          clearInterval(stopImg)
          spanArray[i].hidden;
          spanArray[i].style.left==0;
          spanArray[i].speed==0;
      }
    }
}

  };
  export default {
    components: {
      ElInput,
      ElButton,
      ElImage},
    name: 'index',
    data () {
      return {
        user: {
          userId: '',
          userName: '',
          userMoney: '',
          userStatue: '',
          userPic:''
        },
        radio1: '$15元/月',
        radio2: '账户余额支付',
        pay: {
          userId: '',
          rechargeVip: '',
        },
        playerOptions: {
          playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
          autoplay: false, // 如果为true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 是否视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            type: "video/mp4", // 类型
            src: '' // url地址
          }],
          poster: '../static/img/bala.jpg', // 封面地址
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true, // 当前时间和持续时间的分隔符
            durationDisplay: true, // 显示持续时间
            remainingTimeDisplay: false, // 是否显示剩余时间功能
            fullscreenToggle: true // 是否显示全屏按钮
          },
        },

        comments:[],  //针对视频的评论
        comments2:[],  //针对评论的评论
        com:{
          videoId:1,
          episodeId:'',
          userId:'',
          userName:'',
          userPic:'',
          commentContent:'',
          commentRid:0,
          commentCount:0,
          commentTime:''
        },

      visible: false,
        activeIndex: '1',
          input:'',
        input1:'',
        input2:'',
        /*user:{
              userId:'',
          userName:''
        },*/
        msg: 'Welcome video index',
        value1:'',
        val:'',
//        评分
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] , // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }，
//      分页
        currentPage: 1,
        player:'',
        index:1,
//        倍速
//        options: [
//          {
//            value: '0.5',
//            label: '0.5'
//          },{
//            value: '1',
//            label: '1.0'
//          },{
//            value: '1.25',
//            label: '1.25'
//          },{
//            value: '1.5',
//            label: '1.5'
//          },{
//            value: '2',
//            label: '2.0'
//          }
//        ]

        userName: "", // 用户名
        websocket: null, // WebSocket对象
        aisle: "", // 对方频道号==>视频id
        messageList: [], // 消息列表
        messageValue: "", // 弹幕消息内容
        barrage:{
          videoId:'',
          videoTime:'', //视频当前播放时间
          userId:'',
          barrageContent:'',
        },
        video:{
          videoId:'',
          typeId:'',
          videoName:'',
          videoUrl:'',
          videoLike:'',
          videoFavorite:'',
          videoComment:'',
          videoDownload:''
        },
        typeName:'',
        record:{
          userId:'',
          videoId:'',
          videoName:'',
          videoTime:'',
          videoPic:'',
          videoUrl:'',
        },
        time:''

      }
    },
    mounted(){
      this.record.userId=Cookies.get("userId");

      this.user.userId=Cookies.get("userId")
      if (this.user.userId!=''){
        axios.get("api/findUserByUserId/"+this.user.userId).then(res=>{
          this.user=res.data;
          console.log(this.user);
        })
      }else {
        alert("请登录")
        this.$router.push("/userLogin")
      }

      //alert(666)
      var videoId=this.$route.params.pk_video_id
      //alert(videoId)
      var url="api/findVideoByVideoId/"+videoId
      axios.get(url).then(res=>{
        this.video=res.data
        this.playerOptions.sources[0].src=this.video.videoUrl

        var id=this.video.typeId
        var url="api/findTypeById/"+id
        axios.get(url).then(res=>{
          this.typeName=res.data
        })
      })




        this.barrage.videoId=videoId;
//      this.barrage.videoId=1;   //待删
        this.com.userId=Cookies.get('userId');
        axios.get("api/findUserByUserId/"+this.com.userId).then(res=>{
            this.user=res.data;
//            console.log(this.user)
        })
      this.findAll();
//      this.findAll2();
//      this.findByCommentId();
//      var player = video('example-video');

    },
    beforeDestroy() {//这个才有用
      clearInterval(this.timer)
    },
    methods:{
        //点赞
      likeVideo:function () {
       var id=this.video.videoId
        if(this.user.userId!=null){
          var url = "api/like/" + id
          axios.get(url).then(res => {
            if (res.data != null) {
              swal({
                text: "点赞成功！",
                icon: "success",
                button: "确定",
              });
            }
          })
        }else{
          swal({
            text: "您还没有登录！",
            icon: "info",
            button: "确定",
          });
          this.$router.push("/userLogin")
        }
      },

      //收藏
      favoriteVideo:function () {
        var id=this.video.videoId
        var userId=this.user.userId
        if(this.user.userId!=null){
          var url="api/favorite/"+userId+"/"+id
          axios.get(url).then(res=>{
            if(res.data=="1"){
              swal({
                text: "收藏成功！",
                icon: "success",
                button: "确定",
              });
            }else{
              swal({
                text: "您已经收藏过该视频了！",
                icon: "info",
                button: "确定",
              });
            }
          })
        }else {
          swal({
            text: "您还没有登录！",
            icon: "info",
            button: "确定",
          });
          this.$router.push("/userLogin")
        }
      },

//      分页
      handleSizeChange(val) {
        console.log('每页 ${val} 条');
      },
      handleCurrentChange(val) {
        console.log('当前页: ${val}');
      },


      //弹幕
      sendMsg:function (msg) {
          for (var i=0;i<=msg.length;i++){

            var word = msg[i];
    //         alert(word)
            var length=word.length;//huoqu wenben de changdu
            var span = document.createElement('span');
            var top = parseInt(Math.random() * 500) - 20;
            var color1 = parseInt(Math.random() * 256);
            var color2 = parseInt(Math.random() * 256);
            var color3 = parseInt(Math.random() * 256);
            var color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
            top = top < 0 ? 0 : top;
            span.style.position = 'absolute';
            span.style.top = top + "px";
            span.style.color = color;
            span.style.left = '800px';
            span.style.whiteSpace = 'nowrap';
            span.style.fontSize='20px'
            var nub = (Math.random() * 10) + 1;
            span.setAttribute('speed', nub);
            span.speed = nub;
            span.innerHTML = word;
    //          alert($('box'))
            $('box').appendChild(span);
            /*if (span.offsetLeft < -length * random * 16) {
              clearInterval(timer);
              mainContent.removeChild(span);
            }*/
          }

      },

      sendMsg2:function (msg) {
          var word = msg;
          //         alert(word)
          var length=word.length;//huoqu wenben de changdu
        if(word!=null&&word!=''){
          var span = document.createElement('span');
          var top = parseInt(Math.random() * 500) - 20;
          var color1 = parseInt(Math.random() * 256);
          var color2 = parseInt(Math.random() * 256);
          var color3 = parseInt(Math.random() * 256);
          var color = "rgb(" + color1 + "," + color2 + "," + color3 + ")";
          top = top < 0 ? 0 : top;
          span.style.position = 'absolute';
          span.style.top = top + "px";
          span.style.color = color;
          span.style.left = '800px';
          span.style.whiteSpace = 'nowrap';
          span.style.fontSize='20px'
          var nub = (Math.random() * 10) + 1;
          span.setAttribute('speed', nub);
          span.speed = nub;
          span.innerHTML = word;
          //          alert($('box'))

          $('box').appendChild(span);
          this.input1= "";
          if (span.offsetLeft < -length * random * 16) {
            clearInterval(timer);
            mainContent.removeChild(span);
          }
        }

        },

        sendBarrage:function(){
          this.barrage.videoTime=this.time;
         this.barrage.barrageContent=this.input1;
         this.barrage.userId=this.user.userId;
         axios.post("api/saveBarrage",this.barrage).then(res=>{
           if (res.data!=null){
               console.log(res.data)
//                  alert("success")
           }else {
             alert("fail")
           }
         })
//         alert(word)
         this.sendMsg2(this.barrage.barrageContent);

       },
//      倍速播放

     /* //私聊  无用，勿解
      send:function(){
        if (this.com.userId!=null) {
          this.$router.push("/userMessage")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },*/

//      //注册画中画按钮
//      createMyButton () {
//        let Button = videojs.getComponent('Button')
//        let myButton = videojs.extend(Button, {
//          constructor: function (player, options) {
//            Button.apply(this, arguments)
//            this.addClass('fullscreen-enter')
//          },
//          handleClick: () => {
//            // 绑定点击事件
//          },
//          buildCSSClass: function () {
//            return 'vjs-icon-custombutton vjs-control vjs-button'
//          }
//        })
//
//        //注册
//        videojs.registerComponent('myButton', myButton)
//
//        this.$nextTick(() => {
//          // 添加到controlBar中
//          this.$refs.videoPlayer1.player.getChild('controlBar').addChild('myButton')
//        })
//      },


      // 播放回调
      onPlayerPlay(player) {
        //console.log('player play!', player)
        /*开始播放则定时器启动，websocket连接，向后台请求弹幕数据*/
//        this.conectWebSocket();
//        if (this.timer){
//          clearInterval(this.timer);
//        } else {
//          this.timer=setInterval(()=>{
//            this.sendMessage();
//          },1000)
//        }

      },

      // 暂停回调
      onPlayerPause(player) {
        //console.log('player pause!', player)
        /*视频暂停，定时器暂停，websocket连接*/
        this.websocket.close();
          clearInterval(this.timer);

        this.record.videoId=this.video.videoId;
        this.record.videoName=this.video.videoName;
        this.record.videoPic=this.video.videoPic;
        this.record.videoUrl=this.video.videoUrl;
        this.record.videoTime=this.time;
        axios.post("api/addRecord",this.record).then(res=>{
          this.record=res.data;
        })

      },

      // 视频播完回调
      onPlayerEnded($event) {
        //console.log($event)
        this.websocket.close();

          clearInterval(this.timer);

      },

      // DOM元素上的readyState更改导致播放停止
      onPlayerWaiting($event) {
       // console.log($event)
        this.websocket.close();
          clearInterval(this.timer);
      },

      // 已开始播放回调
      onPlayerPlaying($event) {
        //console.log($event)
        this.conectWebSocket();

          this.timer=setInterval(()=>{
            this.sendMessage();
          },1000)

      },

      // 当播放器在当前播放位置下载数据时触发
      onPlayerLoadeddata($event) {
        //console.log($event)
      },

      // 当前播放位置发生变化时触发。
      onPlayerTimeupdate($event) {
        this.time=($event.cache_.currentTime).toFixed();
      },

      //媒体的readyState为HAVE_FUTURE_DATA或更高
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },

      //媒体的readyState为HAVE_ENOUGH_DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },

      //播放状态改变回调
      playerStateChanged(playerCurrentState) {
        //console.log('player current update state', playerCurrentState)
      },

      //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
      playerReadied(player) {
        //console.log('example player 1 readied', player);
      },


      conectWebSocket: function() {
        console.log("建立连接");

          //判断当前浏览器是否支持WebSocket
          if ("WebSocket" in window) {
            this.websocket = new WebSocket(
                /*根据视频id建立连接*/
              "ws://localhost:8082/websocket/" + this.video.videoId

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
              console.log(event)
            var object = eval("(" + event.data + ")");
            console.log(object);
            console.log("接收到的消息："+object.msg);
            this.messageList=object.msg;
            console.log(this.messageList)
            if (object.type == 0) {
              // 提示连接成功
              console.log("连接成功");
              that.showInfo(object.people, object.aisle);
//              this.aisle=object.aisle;
//              alert(this.aisle)
            }
            if (object.type == 1) {
              //显示消息
              console.log("接受消息");
              that.messageList.push(object);
              that.sendMsg(this.messageList);
//              document.getElementById('box').innerHTML += object.msg + '<br/>';
            }
          };
          //连接关闭的回调方法
          this.websocket.onclose = function() {
            clearInterval(this.timer);
          };
          //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
          window.onbeforeunload = function() {
//            this.websocket.close();

          };
      },


      // 发送消息
      sendMessage: function() {
        var socketMsg = { msg: this.time, toUser: this.aisle };
        /*if (this.videoId == "") {
          //群聊.
          socketMsg.type = 0;
        } else {*/
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


      findAll:function () {
          var videoId=this.$route.params.pk_video_id;
        axios.get("api/findAllCom/"+videoId).then(res=>{
          if (res.data!=null){
//            console.log(res.data.com.list)
//            console.log(res.data.comment[0].list)
            this.comments=res.data.com.list;
            this.comments2=res.data.comment

//            console.log(this.comments)
          }else {
            alert("暂无评论")
          }
        })
      },
      /*评论
       *针对视频的评论
       */
      /*点赞--》2 */
      like2:function (index) {
        this.com=this.comments[index];

        this.com.commentCount=this.com.commentCount+1;
        axios.post("api/updateComment",this.com).then(res=>{
          if (res.data!=null){
//              alert("success")
          }
        })
      },

      /*点赞--》3 */
      like:function (index,value) {
        this.com=this.comments2[index].list[value];

        this.com.commentCount=this.com.commentCount+1;
        axios.post("api/updateComment",this.com).then(res=>{
          if (res.data!=null){
//              alert("success")
          }
        })
      },
     /* findByCommentId:function (commentId) {
        axios.get("api/").then(res=>{

        })
      },*/
      /*回复评论--》1 */
      save:function () {
        this.com.commentRid=0;
        this.com.userPic=this.user.userPic;
        this.com.userName=this.user.userName;
        this.com.userId=this.user.userId;
        this.com.videoId=this.$route.params.pk_video_id;
        this.com.commentLid=0;
        this.com.commentContent=this.input2;
        console.log(this.com)
        axios.post("api/saveComment",this.com).then(res=>{
          if (res.data!=null){
            alert("success")
            this.findAll();
          }else {
            alert("fail")
          }
        })
      },
      /*回复评论--》3 */
      replyMeg:function (index) {
        this.$prompt('请输入回复信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          //inputErrorMessage: '邮箱格式不正确'
        }).then(({ val }) => {
          this.$message({
            type: 'success',
            message: '您回复的信息是: ' + val,
          });
          this.com.userPic=this.user.userPic;
          this.com.userName=this.user.userName;
          this.com.userId=this.user.userId;
          this.com.videoId=this.$route.params.pk_video_id;
          this.com.commentRid =this.comments[index].commentId;
          this.com.respondentId=this.comments[index].userId;
          this.com.respondentName=this.comments[index].userName;
          this.com.commentContent=val;
          axios.post("api/saveComment",this.com).then(res=>{
            if (res.data!=null){
              alert("success")
              this.findAll();
            }else {
              alert("fail")
            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },
      //回复评论--》3
      replyMessage(index,value) {
        this.$prompt('请输入回复信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          //inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          //inputErrorMessage: '邮箱格式不正确'
        }).then(({ val }) => {
          this.$message({
            type: 'success',
            message: '您回复的信息是: ' + val,
          });
          this.com.userPic=this.user.userPic;
          this.com.userName=this.user.userName;
          this.com.userId=this.user.userId;
          this.com.commentRid =this.comments2[index].list[value].commentRid;
          this.com.respondentId=this.comments2[index].list[value].userId;
          this.com.respondentName=this.comments2[index].list[value].userName;
          this.com.commentLid=this.comments[index].commentId;
          this.com.commentContent=val;
          this.com.videoId=this.video.videoId;
          axios.post("api/saveComment",this.com).then(res=>{
            if (res.data!=null){
              alert("success")
              this.findAll();
            }else {
              alert("fail")
            }
          })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
      },

      //支付宝支付
      aliPay() {
        if (this.user.userId!=null) {
          this.$prompt('请输入需要充值的金额', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern:"" ,
            inputErrorMessage: '充值金额格式不正确'
          }).then(({ value }) => {
            swal({
              text: "充值的金额:"+value,
              icon: "success",
              button: "确定",
            });
            axios.post("api/aliPay/"+this.user.userId+"/"+value).then(res => {
              alert(111)
              this.$router.replace({path:'/applyText',query:{htmls:res.data}})
            })
          }).catch(() => {
            swal({
              text: "取消充值",
              icon: "info",
              button: "确定",
            });
          });
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      //用户充值会员
      payfor:function(){
        if (this.user.userId!=null) {
          this.pay.userId=this.user.userId;
          if(this.radio1=="$15元/月"){
            this.pay.rechargeMoney=15;
          }
          if(this.radio1=="$50元/季"){
            this.pay.rechargeMoney=50;
          }
          if(this.radio1=="$200元/年"){
            this.pay.rechargeMoney=200;
          }
          //alert(this.pay.userId)
          //alert(this.pay.rechargeMoney)
          axios.post("api/userRecharge",this.pay).then(res => {
            this.$router.replace({path:'/applyText',query:{htmls:res.data}})
          })
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      //      个人中心-完善信息
      toUser:function () {
        //alert(666)
        if (this.user.userId!=null) {
          this.$router.push("/userDetial")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      //修改密码
      toModify:function () {
        if (this.user.userId!=null) {
          this.$router.push("/updatePassword")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      toMessage(){
        if (this.user.userId!=null) {
          this.$router.push("/userMessage")
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      },
      logout:function () {
        Cookies.remove('userId'); // fail!
        Cookies.remove('userId', { path: '/' });
        this.user.userName='登录'
        this.$router.go(0)
      },
      toUserMsg:function (userId) {
        if (this.user.userId!=null) {
          this.$router.push("/chatMessage/"+userId)
        }else {
          this.$message.error('还没登录哦，请登录后再试');
          this.$router.push("/userLogin")
        }
      }
      /*delete:function (commentId) {
          axios.get
        this.findAll();
      },*/

      /*toUserMsg:function (index) {
        this.$router.push('/moreMessage/'+this.comments[index].userId)
      }*/
    }

}
</script>


<style>
  <!--视频样式-->
  .vjs-poster{
    /*background-repeat: no-repeat;*/
    background-repeat: inherit;
  }
  .el-image__error, .el-image__inner, .el-image__placeholder{
    height: inherit;
    width: inherit;
  }
  .video-js{
    height: 500px;
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
    width: 100px;
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

  .el-main{
    overflow: inherit;
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
  .note{
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    overflow-y: auto;
  }
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
