import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',

    data: {
      currencyList: {}
    },
    mounted(){
      this.fetchCurrency()
    },

    methods: {
      fetchCurrency: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencyList = data)
      }
    }
  })
})
