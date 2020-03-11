import Vue from 'vue'
import VueRouter from 'vue-router'
import Wrapper from '../views/wrapper.vue'
Vue.use(VueRouter)

const routes = [{
    path: "/",
    name: "wrapper",
    component: Wrapper,
    redirect: 'list',
    children: [{
      path: "list",
      name: "list",
      meta: {
        partersName: 'list',
        keepAlive:false
      },
      component: () => import('../views/hotWall/list.vue'),
    }]
  },
  {
    path: "/sheetDetail",
    name: "wrapper",
    component: Wrapper,
    redirect: '/sheetDetail/index',
    children: []
  },
  {
    path: "/songSheet",
    name: "wrapper",
    component: Wrapper,
    redirect: '/songSheet/sheetList',
    children: [{
        path: "sheetList",
        name: "sheetList",
        meta:{
          partersName: 'songSheet',
          keepAlive: true
        },
        
        component: () => import('../views/songSheet/sheetList.vue'),
      },
      {
        path: "moreSheetList",
        name: "moreSheetList",
        meta: {
          partersName: 'songSheet',
          keepAlive: false
        },
        component: () => import('../views/songSheet/moreSheetList.vue'),
      },
      {
        path: "sheetDetail",
        name: "sheetDetail",
        meta: {
          partersName: 'songSheet',
          keepAlive: false
        },
        component: () => import('../views/songSheet/sheetDetail.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router