import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Contect from '../views/Contect.vue'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path: '/login',    
    component: Login    
  },
  {
    path:'/Blog/:id',
    component:Blog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/contect',
    name:'Contect',
    component:Contect
  }
]

const router = new VueRouter({
  routes
})

export default router
