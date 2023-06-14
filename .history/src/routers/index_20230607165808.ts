 import { createRouter, createWebHistory,RouteRecordRaw  } from "vue-router";
 const routes: Array<RouteRecordRaw> = [
  //  {
  //    path: "/login",
  //    name: "login",
  //    component: () => import('../views/login.vue')
  //  },
   {
    path: "/",
    name: "home",
    component: () => import('../views/index.vue')
  },
   //{
       //配置404页面
       //path: '/:catchAll(.*)',
       //name: '404',
       //component: () => import(''),
   //}
 ];
 
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
// 导出
export default router 