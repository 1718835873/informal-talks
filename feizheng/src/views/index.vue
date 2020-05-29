<template>
  <div class="index">
    <el-container>
      <el-header>
        <div class="left-contaier">
          <img src="../assets/logo.png" alt="" class="set-logo">
          <a href="">非正式会谈</a>
        </div>
        <div class="right-contaier">
          <a href="#" class="three-menu" @click="drawer = true">
            <i class="el-icon-menu"></i>
          </a>
        </div>
      </el-header>
      <el-container style="height: 100%;">
        <el-aside width="200px" height="100%">
          <el-row class="tac" style="height: 100%;">
            <el-col :span="12" style="width: 100%;">
              <el-menu
                default-active="2"
                :unique-opened="true"
                :collapse-transition="true"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#79BD9A"
                :router="true"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item index="/index/">
                  <i class="el-icon-lollipop"></i>
                  <span slot="title">节目介绍</span>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-cold-drink"></i>
                    <span>节目主持</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/index/leader">会长</el-menu-item>
                    <el-menu-item index="/index/subleader">副会长</el-menu-item>
                    <el-menu-item index="/index/secret">秘书长</el-menu-item>
                    <el-menu-item index="/index/booker">书记官</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location-information"></i>
                    <span>各国代表</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/index/always">常驻代表</el-menu-item>
                    <el-menu-item index="/index/oneday">一日代表</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item index="/index/listnenu">
                  <i class="el-icon-s-order"></i>
                  <span slot="title">节目播出季</span>
                </el-menu-item>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-picture"></i>
                    <span>照片展示</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/index/showpic">节目照片</el-menu-item>
                    <el-menu-item index="/index/pic">代表硬照</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
    <!-- 抽屉中的内容 -->
    <el-drawer
      title="我是标题"
      :visible.sync="drawer"
      :with-header="false">

      <div class="right-continer-area">
        <div class="cube" v-show="isLogin">
          <p>
            <img src="https://dss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2280534479,826667349&fm=58&app=83&f=JPEG?w=250&h=250&s=2F00628277E327A14EDD4ABF0300F006" alt="" class="avatar">
          </p>
          <p>
            <span class="nickname">{{info.name}}</span>
          </p>
          <br>
          <p v-show="isLogin">
            <el-button type="warning" @click="outIn">退出</el-button>
          </p>
        </div>
        <div v-show="!isLogin">
          <p class="bueaty-word">快点登录吧，为你喜欢的代表点个<i class="el-icon-thumb"></i>！</p>
           <el-button type="primary" @click="login">登录</el-button>
        </div>

      </div>
    </el-drawer>
  </div>
</template>

<script>
  name:"Index"
  export default {
      data() {
        return {
          drawer: false,
          isCollapse: true,
          isLogin:true,
          info:[]
        };
      },
      methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        // 登录
        login(){
          this.$router.push({
            path:"/login"
          })
        },
        // 退出
        outIn(){
          localStorage.setItem("userInfo","")
          localStorage.setItem("isLogin",false)
          this.$router.push({
            path:"/login"
          })
        }
      },
      mounted() {
        // 获取用户信息，看是否存在
        let info =JSON.parse(window.localStorage.getItem("userInfo")||"[]")
        let isLogin=window.localStorage.getItem("isLogin")
        this.isLogin=isLogin
        this.info=info[0]
        // console.log(isLogin)
        // console.log(info[0])
      }
    };
</script>

<style scoped="scoped">
  .el-header{
    position: fixed;
    height: 70px;
    width: 100%;
    background-color: #3B8686;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left-contaier{
    display: flex;
    height: 100%;
    line-height: 70px;
    align-items: center;
  }
  .set-logo{
    display: block;
    width: 50px;
    height: 54px;
    vertical-align: top;
  }
  .left-contaier a{
    display: block;
    color: white;
    font-size:18px;
    margin-left: 10px;
    text-decoration: none;
    line-height: 70px;
  }
   .three-menu > i{
     color: white;
     font-size: 30px;
     font-weight: bold;
   }
  .nickname{
    color: #222;
    font-weight: bold;
    text-decoration: none;
    font-size: 14px;
  }
  .el-icon-thumb{
    color:brown;
    font-size: 18px;
  }
  .right-continer-area{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* box-sizing: border-box; */
  }
  .right-continer-area p{
    padding: 0px;
    margin: 6px 0px;
  }
  .avatar{
    box-sizing: border-box;
    width: 100px;
    border-radius: 50%;
    padding-top: 30px;
  }
  .bueaty-word{
    font-size: 12px;
    color: #c0c0c0;
  }
  .el-menu-item{
    background-color: transparent !important;
  }
  .el-aside{
    position: fixed;
    background-color: #79BD9A;
    top: 60px;
    height: 100%;
    width: 200px;
    bottom: 0px;
    border-right: 0px;
    left: 0px;
  }
  .el-menu {
      border-right: solid 0px #e6e6e6;
  }
  .el-menu-item i {
    color: white;
  }
  .el-submenu i{
    color: white;
  }
  .el-aside i{
    color: white;
  }
  .el-main{
    position:fixed;
    width: 100%;
    height: 100%;
    top: 70px;
    left: 200px;
  }
  .el-submenu__title i {
      color: white !important;
  }
  .el-submenu__icon-arrow {
    color: white !important;
  }
  .el-icon-arrow-down{
    color: white !important;
  }
</style>
