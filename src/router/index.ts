import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from "@/store/";
import Account from '@/models/Account';

// Views
import Home from "@/views/Home/Home.vue";
import Landing from '@/views/Landing/Landing.vue';
import Admin from '@/views/Admin/Admin.vue';
import About from "@/views/About/About.vue";
import UserView from "@/views/User/User.vue";
import Profile from "@/views/User/Profile/Profile.vue";
import Login from '@/views/User/Login/Login.vue';
import Register from '@/views/User/Register/Register.vue';

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
    path: '/user/:id',
    name: 'User',
    component: UserView,
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
      is_admin: true
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

router.beforeEach((to, from, next) => {
  const savedAccount = localStorage.getItem('jwt') || "";

  // let account = JSON.parse(savedAccount);
  const accountIsAdmin = false;


  // If authed route
  if (to.matched.some(record => record.meta.authed)) {
    if (!savedAccount) {
      next({
        name: 'Landing',
        params: { nextUrl: to.fullPath }
      })
    }
    // If no saved user
    // If also Admin Route
    if (to.matched.some(record => record.meta.isAdmin)) {
      // If user is admin
      if (accountIsAdmin) {
        store.dispatch('login').then((newAccount: Account) => {
          newAccount ? next() : next({ name: 'Landing' })
        })
      }
      // If user is not admin
      else {
        store.dispatch('login').then((newAccount: Account) => {
          newAccount ? next({ name: 'Home' }) : next({ name: 'Landing' })
        })
      }
      // If just authed route
    } else {
      store.dispatch('login').then((newAccount: Account) => {
        newAccount ? next() : next({ name: 'Landing' })
      })
    }
    // If route is only for guests
  } else if (to.matched.some(record => record.meta.guest)) {
    // If no saved user
    if (!savedAccount) {
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
