import Vue from 'vue'
import App from './App.vue'


Vue.filter('capitalize', function (string) {
  var [first, ...tail] = string
  return first.toUpperCase() + tail.join('')
})
Vue.filter('date', function (date, locale) {
  moment.locale(locale);
  return moment(date).format('LL');
})

Vue.component('puff', {
  functional: true,
  render: function (createElement, context) {
    var data = {
      props: {
        'enter-active-class': 'magictime puffIn',
        'leave-active-class': 'magictime puffOut'
      }
    }
    return createElement('transition', data, context.children)
  }
})

//directive
Vue.directive('pony', {
  bind(el) {
    el.style.backgroundColor = 'hotpink'
    el.onclick = () => {
      const colGen = () => Math.round(Math.random() * 255 + 25)
      const cols = [colGen() + 100, colGen(), colGen()]
      const randRGB = `rgb(${cols[0]}, ${cols[1]}, ${cols[2]})`
      el.style.backgroundColor = randRGB
    }
  }
})

//plugin
const jump = el => {
  el.classList.add('kangaroo')
  el.addEventListener('animationend', () => {
    console.log('removeclass')
    el.classList.remove('kangaroo')
  })
}

const doOnRandomElement = (action, collection) => {
  if (collection.length === 0) {
    return
  }
  const el =
    collection[Math.floor(Math.random() * collection.length)]
  action(el)
}

const atRandomIntervals = action => {
  setTimeout(() => {
    action()
    atRandomIntervals(action)
  }, Math.round(Math.random() * 6000))
}

const Kangaroo = {
  install(vueInstance) {
    vueInstance.kangaroos = []
    vueInstance.directive('kangaroo', {
      bind(el) {
        vueInstance.kangaroos.push(el)
      }
    })
    atRandomIntervals(() =>
      doOnRandomElement(jump, vueInstance.kangaroos))
  }
}
Vue.use(Kangaroo)  //plugin

new Vue({
  el: '#app',
  render: h => h(App)
})
