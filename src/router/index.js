import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import HeaderThree from '@/components/HeaderThree.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redireciona automaticamente para /dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: HeaderThree
  },
  {
    path: '/new-user',
    name: 'Novo usuário',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewUserView.vue')
  },
  {
    path: '/user/:id',
    name: 'Informações do usuário',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserInfoView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
