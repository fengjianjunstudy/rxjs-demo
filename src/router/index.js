import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Amb from '@/components/amb.vue'
import Observable from '@/components/observable.vue'
import Operators from '@/components/operators.vue'
import ThrottleTime from '@/components/throttleTime.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/observable',
      children: [
        {
          path: 'amb',
          component: Amb
        }
      ],
      component:Observable
    },
    {
      path: '/operators',
      children: [
        {
          path: 'throttleTime',
          component: ThrottleTime
        }
      ],
      component: Operators
    }
  ]
})
