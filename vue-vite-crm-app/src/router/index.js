import { createRouter, createWebHistory } from 'vue-router'

// Import Frontend Layout
import FrontendLayout from '@/layouts/Frontend.vue'

// Import Frontend Page
import Home from '@/views/frontend/Home.vue'
import About from '@/views/frontend/About.vue'
import Portfolio from '@/views/frontend/Portfolio.vue'
import Service from '@/views/frontend/Service.vue'
import Contact from '@/views/frontend/Contact.vue'
import Register from '@/views/frontend/Register.vue'
import Login from '@/views/frontend/Login.vue'
import ForgotPassword from '@/views/frontend/ForgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Frontend Route
    {
      // เรียกตัว Frontend Layout (แม่)
      path: '/',
      name: 'Frontend',
      component: FrontendLayout,
      // เรียกตัวลูกมาใส่
      children: [
        {
          path: '',
          name: 'Home',
          component: Home,
          meta: {
            title: 'หน้าหลัก'
          }
        },
        {
          path: 'about',
          name: 'About',
          component: About,
          meta: {
            title: 'เกี่ยวกับเรา'
          }
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: Portfolio,
          meta: {
            title: 'ผลงานของเรา'
          }
        },
        {
          path: 'service',
          name: 'Service',
          component: Service,
          meta: {
            title: 'บริการของเรา'
          }
        },
        {
          path: 'contact',
          name: 'Contact',
          component: Contact,
          meta: {
            title: 'ติดต่อเรา'
          }
        },
        {
          path: 'register',
          name: 'Register',
          component: Register,
          meta: {
            title: 'สมัครสมาชิก'
          }
        },
        {
          path: 'login',
          name: 'Login',
          component: Login,
          meta: {
            title: 'เข้าสู่ระบบ'
          }
        },
        {
          path: 'forgotpassword',
          name: 'ForgotPassword',
          component: ForgotPassword,
          meta: {
            title: 'ลืมรหัสผ่าน'
          }
        },
      ]
    }
  ]
  
})

export default router
