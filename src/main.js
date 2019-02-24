import Vue from './vue.esm.js'
import './plugins/vuetify'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
//Vue.use(Vuetify);
Vue.config.productionTip = false
let url = 'http://140.227.228.52/connpass.json';
new Vue({
  el: '#app',
  data: function() {
    return {
      headers: [
        {
          text: 'Data',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { text: '公開日', value: 'disclosure_date' },
        { text: '題名', value: 'event_title' },
        { text: '場所', value: 'event_place' },
        { text: '開催日', value: 'convene_date' },
        { text: '定員', value: 'capacity' }
      ],    
      json_data:{}
    };
  },
  created: function () {
    axios.get(url)
      .then(res => {
        this.json_data = res.data;
    })
  }
})
