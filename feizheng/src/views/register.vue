<template>
  <div class="login">
    <el-card class="box-card">
      <table align="center">
        <tr>
          <td>用户名:</td>
          <td><input type="text" value="" id="acount" /></td>
        </tr>
        <tr>
          <td>密码:</td>
          <td><input type="password" value="" id="pass" /></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: center;">
            <button type="default" id="login" @click="register">注册</button>
          </td>
        </tr>
      </table>
    </el-card>
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
      register(){
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
          url:"http://localhost:3000/register",
          type:"POST",
          data:data,
          success:res=>{
            if(res.code==200){
              window.localStorage.setItem("userInfo",JSON.stringify(data))
              localStorage.setItem("isLogin",true)
              this.succ="注册成功";
              this.showSuccess()
              this.$router.push({
                path:"/index"
              })
            }else if(res.code==201){
              this.err="注册失败,该用户已存在";
              this.showError()
            }else{
              this.err="注册失败";
              this.showError()
            }
          },
          error:err=>{
            console.log(err)
            this.err="注册失败";
            this.showError()
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
    /* line-height: 50px; */

  }

  td{
    /* height: 40px; */
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

</style>
