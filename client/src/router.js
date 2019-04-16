import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contract from './views/Contract.vue'
import PrintContract from './views/PrintContract.vue'
import NotFound from './views/NotFound.vue'
// import Batch from './views/Batch.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contract/:id',
      name: 'contract',
      component: Contract,
      props: true
    },
    {
      path: '/contract/print/:id',
      name: 'printContract',
      component: PrintContract,
      props: true
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
    // {
    //   path: '/batch',
    //   name: 'batch',
    //   component: Batch,
    // },
  ]
})
