// 按业务适合情况引入ui框架，手机ui自定义的比较强；
// 商城类型推荐vant-ui
// https://youzan.github.io/vant/#/zh-CN/intro
import Vue from 'vue'
import {
  Toast,
  Button,
  Row, Col,
  Tabs,Tab,
  Sidebar, SidebarItem,
  Grid,GridItem
} from 'vant'
import 'vant/lib/index.css'
Vue
.use(Button)
.use(Row)
.use(Col)
.use(Tabs)
.use(Tab)
.use(Sidebar)
.use(SidebarItem)
.use(Grid)
.use(GridItem)
Vue.prototype.$toast = Toast
