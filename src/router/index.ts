import { createRouter, createWebHistory } from 'vue-router';
import Routes from '@/utils/routes';

const routes = [
  {
    path: Routes.Home,
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    meta: { title: "Home - Trydo" }
  },
  {
    path: Routes.About,
    name: 'about',
    component: () => import('@/pages/About.vue'),
    meta: { title: "About - Trydo" }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to?.meta?.title}`
  next();
})

export default router
