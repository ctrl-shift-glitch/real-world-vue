import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '../views/EventList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'event-show',
    // route level code-splitting
    // this generates a separate chunk (event-show.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event-show" */ '../views/EventShow.vue'),
    props: true
  },
  {
    path: '/event/create',
    name: 'event-create',
    // route level code-splitting
    // this generates a separate chunk (event-create .[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "event-create" */ '../views/EventCreate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
