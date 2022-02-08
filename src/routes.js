import VueRouter from 'vue-router'
import Home from './pagess/Home'
import Cars from './pagess/Cars'


export default new VueRouter({
  routes: [{
      path: '/',
      component: Home
    },
    {
      path: '/Cars',
      component: Cars
    }
  ],
  mode: 'history'
})
