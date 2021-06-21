import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from "@/store/";
import User from "@/models/User";

// Views
import Home from "@/views/Home/Home.vue";
import Profile from "@/views/Profile/Profile.vue";
import Landing from '@/views/Landing/Landing.vue';
import Login from '@/views/Login/Login.vue';
import Admin from '@/views/Admin/Admin.vue';
import About from "@/views/About/About.vue";
import Register from '@/views/Register/Register.vue';

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
    path: '/register',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const savedUser = localStorage.getItem('jwt') || "";
  let user: User;

  // If authed route
  if (to.matched.some(record => record.meta.authed)) {
    // If no saved user
    if (!savedUser) {
      next({
        name: 'Landing',
        params: { nextUrl: to.fullPath }
      })
      // Else if saved user
    } else {
      user = JSON.parse(savedUser);
      // If also Admin Route
      if (to.matched.some(record => record.meta.isAdmin)) {
        // If user is admin
        if (user.isAdmin) {
          store.dispatch('login').then((newUser: User) => {
            newUser ? next() : next({ name: 'Landing' })
          })
        }
        // If user is not admin
        else {
          store.dispatch('login').then((newUser: User) => {
            newUser ? next({ name: 'Home' }) : next({ name: 'Landing' })
          })
        }
        // If just authed route
      } else {
        store.dispatch('login').then((newUser: User) => {
          newUser ? next() : next({ name: 'Landing' })
        })
      }
    }
    // If route is only for guests
  } else if (to.matched.some(record => record.meta.guest)) {
    // If no saved user
    if (!savedUser) {
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
