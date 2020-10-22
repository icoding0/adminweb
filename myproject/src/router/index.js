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

      ]
    }
  ]
});