import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'
import welcome from '@/views/welcome.vue'
import error from '@/components/error.vue'
import { tokenStore } from '@/stores/token'
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
      meta:{requireAuth:true},
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
          component: () => import("../components/page/list.vue")
        },
      ]
    },
    {
      path:"/:xxx(.*)*",
      component: error
    }
  ],
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some((r)=>r.meta?.requireAuth)){
    const store=tokenStore()
    console.log(store.token)
    if(!store.token){
      next({name:"login"})
      return
    }
  }
next()
})
export default router
