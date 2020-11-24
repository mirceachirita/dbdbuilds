import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Builds from '../views/Builds.vue';
import Perks from '../views/Perks.vue';
import Survivors from '../views/Survivors.vue';
import Killers from '../views/Killers.vue';
import BuildCreator from '../views/BuildCreator.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/builds',
    name: 'Builds',
    component: Builds,
  },
  {
    path: '/perks',
    name: 'Perks',
    component: Perks,
  },
  {
    path: '/killers',
    name: 'Killers',
    component: Killers,
  },
  {
    path: '/survivors',
    name: 'Survivors',
    component: Survivors,
  },
  {
    path: '/build-creator',
    name: 'BuildCreator',
    component: BuildCreator,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
