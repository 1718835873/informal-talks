import Vue from 'vue'
import Router from 'vue-router'
import Index from "../views/index.vue"
import Login from "../views/login.vue"
import Register from "../views/register.vue"
import EditorIntroduce from "../views/editorIntroduce.vue"
import Introduce from "@/components/introduce.vue"
import Always from "@/components/always.vue"
import Booker from "@/components/booker.vue"
import Leader from "@/components/leader.vue"
import Listnenu from "@/components/listmenu.vue"
import Oneday from "@/components/oneday.vue"
import Pic from "@/components/pic.vue"
import Secret from "@/components/secret.vue"
import Showpic from "@/components/showpic.vue"
import Subleader from "@/components/subleader.vue"
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {path:"/",redirect:"/introduce"},
        {path:"/introduce",name:'Introduce',component:Introduce},
        {path:"always",name:'Always',component:Always},
        {path:"booker",name:'Booker',component:Booker},
        {path:"leader",name:'Leader',component:Leader},
        {path:"listnenu",name:'Listnenu',component:Listnenu},
        {path:"oneday",name:'Oneday',component:Oneday},
        {path:"pic",name:'Pic',component:Pic},
        {path:"secret",name:'Secret',component:Secret},
        {path:"showpic",name:'Showpic',component:Showpic},
        {path:"subleader",name:'Subleader',component:Subleader}
      ]
    },
    {
      path:"/editorIntroduce",
      name:"EditorIntroduce",
      component:EditorIntroduce
    },
    {
      path:"/login",
      name:"Login",
      component:Login
    },
    {
      path:"/register",
      name:"Register",
      component:Register
    }
  ]
})
