// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui'
import 'material-design-icons/iconfont/material-icons.css'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 teal 主题
import markdownElement from './components/markdownElement.vue'
Vue.component('markdown-element', markdownElement)
Vue.config.productionTip = false
Vue.use(MuseUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
