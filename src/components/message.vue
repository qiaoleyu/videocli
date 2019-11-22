<template>
  <div style="height: 100%;background: #f5f5f5 url('../static/img/bg.jpg') no-repeat center;background-size: cover;border-radius: 20px" >
<div v-for="(item,index) in communication" :key="item.id">
    <span>用户{{item.userName}}向您发送了通讯请求，是否同意</span>
  <el-button @click="toChat(item.userId)">同意</el-button>
</div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
  import axios from 'axios';
  import ElButton from "../../node_modules/element-ui/packages/button/src/button";

  export default {
    components: {ElButton},
    data() {
      return {
        communication:[]
      };
    },
    mounted(){
      var userId=Cookies.get('userId');

      axios.get("api/findMsg/"+userId).then(res=>{})
        this.ommunication=res.data;
      },
    methods: {
      toChat:function (userId) {
        this.$router.push("/chatMessage/"+userId)
      }

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

