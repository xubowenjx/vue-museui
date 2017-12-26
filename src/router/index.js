import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/readme/readme.vue'
import index from '@/components/Head.vue'
Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      meta: {
        title: 'index'
      },
      component: index
    },
    {
      path: '/hellow',
      name: 'HelloWorld',
      meta: {
        title: 'Hello'
      },
      component: HelloWorld
    }, {
      path: '*',

      meta: {
        title: 'Hello'
      },
      redirect: '/index'
    }
  ]
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'default title'
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})
export default router
