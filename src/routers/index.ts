import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw  } from "vue-router";
const routes: Array<RouteRecordRaw> = [
 {
   path: "/",
   name: "index",
   component: () => import('../views/index.vue'),
   meta:{
    keepAlive: true,
   }
 },
 {
   path: "/indexb",
   name: "indexb",
   component: () => import('../views/index_2.vue'),
   meta:{
     keepAlive: true,
    }
 },
 {
   path: "/indexc",
   name: "indexc",
   component: () => import('../views/index_3.vue'),
   meta:{
     keepAlive: true
    }
 },
 {
   path: "/indexd",
   name: "indexd",
   component: () => import('../views/index_4.vue'),
   meta:{
     keepAlive: true
    }
 },
 //  {
 //      配置404页面
 //      path: '/:catchAll(.*)',
 //      name: '404',
 //      component: () => import(''),
 //  }
];

// 路由
const router = createRouter({
   history: createWebHashHistory(),
   routes
})
// 导出
export default router 