import Vue from 'vue'
import home from './components/home.vue'

new Vue({
  el: '#app',
  components: {
    home
  },
  template: 
  `
    <home/>
  `,
  data: {
    info: null,
    title: ''
  }
})
