import Vue from 'vue'
import App from './App.vue'





// car import main js dagi kornishi and also we should use Vue component

// import Car from './Car.vue'

// Vue.component('app-car', Car)

export const eventEmitter = new Vue()

//This first view

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

//This seconfd view

new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})
