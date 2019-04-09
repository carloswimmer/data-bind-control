import Vue from 'vue'
import Router from 'vue-router'
import OutputInput from '@/components/OutputInput'
import Output from '@/components/Output'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'OutputInput',
      component: OutputInput
    },
    {
      path: 'with_component',
      name: 'Output',
      component: Output
    }
  ]
})
