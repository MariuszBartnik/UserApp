import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/change-user',
      name: 'change-user',
      component: () => import('./views/ChangeUser.vue'),
      props: true
    },
    {
      path: '/user-details',
      name: 'user-details',
      component: () => import('./views/UserDetails.vue'),
      props: true
    },
    {
      path: '/delete-user',
      name: 'delete-user',
      component: () => import('./views/DeleteUser.vue'),
      props: true
    }
  ],
});
