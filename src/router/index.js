import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: Home
  },
  {
    path: '/login',
    name:'login',    
    component: () =>
      import(/* webpackChunkName:"Login"*/"../views/Login.vue" )    
  },
  {
    path:'/Blog/:id',
    name:'blog',
    component: () =>
      import(/* webpackChunkName: "Blog" */ "../views/Blog.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requiresAuth: true }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!index.state.cookey) {
      next({
        name:'login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router
