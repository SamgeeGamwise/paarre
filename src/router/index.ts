import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from 'vue-router'
import store from "@/store/"
import { getCookie } from '@/store/util'

// Views
import Home from "@/views/Home/Home.vue"
import Landing from '@/views/Landing/Landing.vue'
import Admin from '@/views/Admin/Admin.vue'
import About from "@/views/About/About.vue"
import User from "@/views/User/User/User.vue"
import Profile from "@/views/User/Profile/Profile.vue"
import Login from '@/views/User/Login/Login.vue'
import Register from '@/views/User/Register/Register.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authed: true
    }
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    meta: {
      authed: true
    }
  },
  {
    path: '/user/:id/profile',
    name: "Profile",
    component: Profile,
    meta: {
      authed: true
    }
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing,
    meta: {
      guest: true
    }
  },
  {
    path: '/user/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/user/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      authed: true,
      isAdmin: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const sid: string = getCookie("connect.sid")

  if (sid && !store.getters.isAuthenticated) {
    try {
      await store.dispatch("getAccount")
    } catch (err: any) {
      console.log(err)
    }
  }
  // If authed route
  if (to.matched.some(record => (record.meta.authed))) {
    // If also Admin Route
    if (to.matched.some(record => record.meta.isAdmin)) {
      // If user is admin
      store.getters.isAuthenticated ?
        store.getters.isAdmin ?
          next() :
          next({ name: 'Home' }) :
        next({
          name: 'Landing',
          params: { nextUrl: to.fullPath }
        })
    } else {
      store.getters.isAuthenticated ? next() : next({ name: 'Landing' })
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    // If no saved user
    if (store.getters.accountId === 0) {
      next()
    }
    // If saved user
    else {
      next({ name: 'Home' })
    }
    // If route is not guest, authed, or admin
  } else {
    next()
  }
})

export default router
