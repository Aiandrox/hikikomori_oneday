Vue.component('modal', {
  template: '#modal-template'
})

var human = new Vue({
  el: "#human",
  data: {
    name: null,
    activity_time: 0,
    flag: false,
    status: {
      satiety: 0,
      toilet: 50,

    }
  }
})