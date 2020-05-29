// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 import $ from "jquery"
import {
  Button,
  Container,
  Aside,
  Main,
  Header,
  Icon,
  RadioGroup,
  Radio,drawer ,
  MessageBox,
  Avatar,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Row,
  Col,
  RadioButton,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Card,
  Form,
  FormItem,
  Message,
  Input
  } from 'element-ui';

import App from './App'
import router from './router'
Vue.use(Button)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Icon)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(drawer)
Vue.use(Avatar)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(RadioButton)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
