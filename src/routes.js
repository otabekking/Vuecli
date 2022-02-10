import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import Carfull from './pages/Carfull'

export default new VueRouter({
  routes: [{
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: Car,
      children: [{
        path: 'full',
        component: Carfull,
        name: 'carFull',
        beforeEnter(to, from, next) {
          console.log('beforeEnter')
          next()
        }
      }]
    },
    {
      path: '/olll',
      redirect: {
        name: 'cars'

      }

    },

    {
      path: '*',
      component: ErrorCmp
    }
  ],
  mode: 'history'
})
