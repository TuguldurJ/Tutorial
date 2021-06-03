import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: () =>
      import(/* webpackChunkName: "EventCreate" */ '../views/EventDetails.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
