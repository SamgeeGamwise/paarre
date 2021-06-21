import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from "@/store/";
import User from "@/models/User";
import Home from "@/views/Home/Home.vue";
import Profile from "@/views/Profile/Profile.vue";
import Landing from '@/views/Landing/Landing.vue';
import Login from '@/views/Login/Login.vue';
import Admin from '@/views/Admin/Admin.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      authed: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
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
    path: '/login',
    name: 'Login',
    component: Login,
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
      is_admin: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const stringUser = localStorage.getItem('jwt') || "";
  let user: User;

  if (to.matched.some(record => record.meta.authed)) {
    if (!stringUser) {
      next({
        name: 'Landing',
        params: { nextUrl: to.fullPath }
      })
    } else {
      user = JSON.parse(stringUser);

      if (to.matched.some(record => record.meta.isAdmin)) {
        if (user.isAdmin) {
          store.dispatch('login').then((newUser: User) => {
            newUser ? next() : next({ name: 'Landing' })
          })
        }
        else {
          store.dispatch('login').then((newUser: User) => {
            newUser ? next({ name: 'Home' }) : next({ name: 'Landing' })
          })
        }
      } else {
        store.dispatch('login').then((newUser: User) => {
          newUser ? next() : next({ name: 'Landing' })
        })
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    }
    else {
      next({ name: 'Home' })
    }
  } else {
    next()
  }
})

export default router
