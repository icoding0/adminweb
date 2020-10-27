import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import { router } from './router'
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import { axios } from './network/axios'
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
});
Vue.use(VueI18n);
Vue.use(axios);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
