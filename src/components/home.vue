<template>
  <div class="main">
    <div class="home-header">
      <img src="../assets/miaov.png"/>
      <router-link to="/login"  class="login" v-if="!isLogin" tag="span">登录</router-link>
      <div class="login-info" v-if="isLogin">
        <img src="../assets/portrait.png"/>
        <span>{{userName}}</span>
      </div>
    </div>
    <div>
      <h2>一起来学vue-router</h2>
    </div>
    <div class="link">
      <router-link to="/project" tag="span" class="cur">我的项目</router-link>
      <router-link to="/doc" tag="span" class="cur">我的文档</router-link>
    </div>
  </div>
</template>

<script>

    export default {
        name: "home",
        data(){
            return {
                isLogin:false,
                userName:""
            }
        },
        created(){
          this.getLogin();
        },
        methods:{
            getLogin(){
               var info = this.$local.fetch("miaov");
               if(info.isLogin != undefined){
                   this.isLogin = info.isLogin;
                   this.userName = info.username;
               }
            }
        }
    }
</script>

<style scoped>
  @import "../assets/css/home.css";
</style>
