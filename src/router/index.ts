import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import welcome from '@/views/welcome.vue'
import error from '@/components/error.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:"/login",
      name:"login",
      component: ()=>import("@/components/page/login.vue")
    },
    {
      path: '/',
      name: 'home',
      component: AppLayout,
      children:[
        {
          path: "",
          component: welcome,
        },
        {
          path: "/exit",
          component: () => import("../views/goodbye.vue")
        },
        {
          path: "/tem",
          component: () => import("../components/page/tem.vue")
        },
      ]
    },
    {
      path:"/:xxx(.*)*",
      component: error
    }
  ],
})

export default router
