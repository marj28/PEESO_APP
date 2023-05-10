import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#006341',
            secondary: '#f9db01',
            tertiary: '#F1BA27',
            accent: '#F07427',
            error: '#f55a4e',
            info: '#00d3ee',
            success: '#5cb860',
            warning: '#ffa21a'
          },
        },
      }
});
