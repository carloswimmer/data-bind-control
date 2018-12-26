import Vue from 'vue'
import Router from 'vue-router'
import OutputInput from '@/components/OutputInput'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OutputInput',
      component: OutputInput
    }
  ]
})
