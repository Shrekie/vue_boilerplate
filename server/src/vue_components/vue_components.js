import Vue from 'vue';

// Components
import myComponent from './my_component/my_component.vue';

new Vue({
  el: '#app',
  render: h => h(myComponent)
})
