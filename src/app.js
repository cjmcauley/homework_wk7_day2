import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => { new Vue({
  el: "#app",
  data: {
    currencyData: [],
    selectedCurrency: null,
    calculateBase: null
  },
  computed: {
    calculateBase: function(amountbase){
      amountbase * 10;
    }
  },
  mounted(){
    this.getCurrencies()
  },
  methods: {
    getCurrencies: function (){
      fetch("https://api.exchangeratesapi.io/latest")
      .then(result => result.json())
      .then(currencies => this.currencyData = currencies.rates)
    }
  }
})

})
