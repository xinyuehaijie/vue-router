<template>
  <div class="header">
    <div class="nav-box">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/miaov.png"/>
        </router-link>
      </div>
      <div class="nav">
        <router-link to="/project" tag="span" class="cur">我的项目</router-link>
        <router-link to="/workbench" tag="span" class="cur">工作台</router-link>
        <router-link to="/doc" tag="span" class="cur">文档</router-link>
      </div>
    </div>
    <div class="login-box">
      <router-link to="login" v-if="!isLogin" tag="span" class="login-btn">登录</router-link>
      <div class="info-box" v-if="isLogin">
        <img src="../assets/portrait.png"  />
        <span>{{userName}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Header",
    data:function(){
        return {
            isLogin:false,
            userName:""
        }
    },
    created(){
      this.getInfo();
    },
    methods:{
        getInfo(){
            let info = this.$local.fetch("miaov");

            if(info.isLogin != 'undefined'){
                this.isLogin = info.isLogin;
                this.userName = info.username;
            }
        }
    }
  }
</script>

<style scoped>
  @import "../assets/css/header.css";
</style>
