import Vue from 'vue'
import App from './App.vue'


Vue.filter('capitalize' , function ( string) {
  var [ first, ...tail] = string
  return first.toUpperCase() + tail. join('')
})
Vue.filter( 'date', function (date,locale) {
  moment.locale( locale );
  return moment(date).format( 'LL' );
})

Vue.component( 'puff', {
  functional: true,
  render: function (createElement, context) {
    var data = {
      props: {
      'enter-active-class' : 'magictime puffIn' ,
      'leave-active-class' : 'magictime puffOut'
      }
    }
    return createElement( 'transition', data, context.children)
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
