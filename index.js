import { createRouter, createWebHistory } from 'vue-router'
import Tracking from '../views/TrackingShipment.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import AddAdmin from '@/views/AddAdmin.vue'
import AddShipment from '../views/AddShipment.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/add-admin',
      name: 'addadmin',
      component: AddAdmin
    },   
    {
      path: '/add-shipment',
      name: 'AddShipment',
      component: AddShipment
    },  
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }, 
      
      {
      path: '/Login',
      name: 'Login',
      component: Login
    }, 
    {
      path:'/Track-shipment',
      name:'Tracking',
      component:Tracking
    }
  ]
})

export default router
