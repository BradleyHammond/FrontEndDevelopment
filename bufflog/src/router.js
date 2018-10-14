import Vue from 'vue'
import Router from 'vue-router'
import ContactRequests from './components/ContactRequests.vue'
import Create from './components/Create.vue'
import Edit from './components/Edit.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactRequests
      },

  ]
})