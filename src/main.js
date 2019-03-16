import Vue from 'vue/dist/vue.esm.js'
import './plugins/vuetify'
import axios from 'axios'
import Vuetify from 'vuetify';
Vue.use(Vuetify);
Vue.config.productionTip = false
let url = 'http://140.227.228.52/connpass.json';
new Vue({
  el: '#app',
  data: function() {
    return {
      headers: [
        {
          text: '題名',
          value: 'event_title',
          align: 'left',
          sortable: false,
        },
        { text: '場所',
         value: 'event_place',
         align: 'left',
         sortable: false,
         },
      {
        text: '開催日', 
        value: 'convene_date',
        align: 'left',
        sortable: true,
      },
      {
       text: '公開日',
       value: 'disclosure_date',
       align: 'center',
       sortable: true,
       },
        {
           text: '定員', 
           value: 'capacity',
           align: 'center',
           sortable: false,
           }
      ],
        pagination: {
          sortBy: 'disclosure_date',
          descending: true,
          rowsPerPage: -1,
        },
      json_data: []
    }
  },
  created: function () {
    axios.get(url).then((res) => {
      this.json_data = res.data;
  })
}})
