<template>
  <div>
    <h2 class="title">登录</h2>
    <div class="login-box">
      <input type="text"  placeholder="请输入用户名" ref="loginInput" />
      <input type="password" placeholder="请输入密码" />
      <span class="btn cur" v-on:click="sendLogin()">一键登录</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      methods:{
        sendLogin(){
          let name = this.$refs.loginInput.value;
          this.$local.save("miaov",{
              isLogin:true,
              username:name
          });

          var redirect = this.$route.query.redirect;
          if(redirect){
            this.$router.push({
              path:'/'+redirect
            });
          }else{
            this.$router.push("/project")
          }
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/login.css";
</style>
