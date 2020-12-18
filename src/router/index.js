import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/TaskAuto/Home.vue'
import TaskList from '../views/TaskAuto/TaskList.vue'
import RegTask from '../views/TaskAuto/RegTask.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Tasklist',
    name: 'TaskList',
    component :TaskList 
  },
  {
    path: '/RegTask',
    name: 'RegTask',
    component :RegTask 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
