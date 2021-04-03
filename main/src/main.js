import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'

Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// 注册子应用
registerMicroApps([
  {
    name: 'sub-vue', // 子应用的唯一标识
    entry: '//localhost:7777', // 子应用的入口地址
    activeRule: '/sub-vue', // 子应用的激活规则(url路径)
    container: '#subapp-container' // 子应用挂载的容器
  },
  {
    name: 'sub-react',
    entry: '//localhost:7788',
    activeRule: '/sub-react',
    container: '#subapp-container'
  }
])

// 设置默认进入的子应用
setDefaultMountApp('/sub-vue')

// 启动 qiankun
start()
