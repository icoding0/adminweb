import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/dashboard',
      component: () => import('../components/common/Home.vue'),
      meta: '首页',
      children: [
        {
          path: '/dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '../page/Dashboard.vue'),
          meta: { title: '系统首页' }
        },
        {
          path: '/table',
          component: () => import(/* webpackChunkName: "dashboard" */ '../page/table.vue'),
          meta: { title: '系统首页' }
        },
      ]
    }
  ]
});