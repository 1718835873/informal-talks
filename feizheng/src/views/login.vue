<template>
  <div class="login">
    <!-- <el-button :plain="true" @click="open4">错误</el-button> -->
    <el-card class="box-card">
      <table align="center">
        <tr>
          <td>用户名:</td>
          <td><input type="text" value="" id="acount" /></td>
        </tr>
        <tr>
          <td>密码:</td>
          <td><input type="password" value="" id="pass"/></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: center;">
            <button type="default" @click="login" id="login">登录</button>
          </td>
        </tr>
      </table>
    </el-card>
    <p class="go-register" @click="goRegister">还没有账号,请注册……</p>
  </div>
</template>

<script>
  export default{
     data(){
       return{
        err:"",
        succ:"",
       }
     },
     methods:{
        showSuccess() {
           this.$message({
             message: this.succ,
             type: 'success'
           });
         },
       showError() {
          this.$message({
            showClose: true,
            message: this.err,
            type: 'error'
          });
        },
       goRegister(){
         this.$router.push({path:"/register"})
       },
       login(){
         let name=$.trim($("#acount").val())
         let pwd=$.trim($("#pass").val())

         if(name.length<1){
           this.err="请输入用户名"
           this.showError()
           return;
         }
         if(pwd.length<1){
           this.err="请输入密码"
           this.showError()
           return;
         }
         if(pwd.length<5 && pwd.length<20){
           this.err="密码的长度在5-20"
           this.showError()
           return;
         }
         const data={
           name:name,
           pwd:pwd
         }
          $.ajax({
            url:"http://localhost:3000/login",
            data:data,
            type:"POST",
            success:res=>{
              console.log(res)
              if(res.code==200){
                if(res.data.length==1){
                  this.succ="登录成功"
                  this.showSuccess()
                  window.localStorage.setItem("userInfo",JSON.stringify(res.data))
                  localStorage.setItem("isLogin",true)
                  this.$router.push({
                    path:"/index"
                  })
                }else{
                  this.err="用户名或密码输入错误"
                  this.showError()
                }
              }else{
                this.err="登录失败"
                this.showError()

              }
            },
            error:err=>{
              console.log(err)
              console.log("失败")
            }
          })
       }
     }

  }
</script>

<style scoped="scoped">
  .login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  table{
    width: 300px;
    padding:20px 20px;
  }
  tr{
    height: 50px;
  }

  input{
    box-sizing: border-box;
    border-right: 0px;
    border-left: 0px;
    border-top: 0px;
    outline: none;
    /* height: 24px; */
  }
  #login{
    width:80px;

  }
  .go-register{
    font-size: 12px;
    color: green;
    cursor: pointer;
  }
</style>
