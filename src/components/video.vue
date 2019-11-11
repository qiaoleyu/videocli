<template>
  <div>
    <video id=example width="100%" height="500" style="margin: auto" class="video-js vjs-default-skin vjs-big-play-centered" controls>
      <source
        src="https://huyi-gajia.oss-cn-beijing.aliyuncs.com/file/2019-11-09/d30b6657b28b45d18b909c0b9c9271ee-day05.mp4"
        type="video/mp4"
      >
      <!--type="application/x-mpegURL"-->
    </video>
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
    name: 'video',
    data () {
      return {
      }
    },
    mounted(){
//      var player = videojs('example-video')
      this.initVideo();
    },
    methods: {
      initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(example, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          autoplay: "muted",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "800px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "400px"
        });
      }
    }

  }
</script>
