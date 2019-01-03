import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/src/stylus/app.styl';

const portalIcons = {
  'icon-home': 'la-home',
  'icon-configuration': 'flaticon-cogwheel',
  'icon-data': 'flaticon-layers',
  'icon-import-transaction': 'flaticon-download',
  'icon-page': 'fa-cubes',
  'icon-engagement-services': 'flaticon-network',
  'icon-operation': 'flaticon-graphic',
  'icon-legal-risk': 'flaticon-light',
  'icon-finance': 'flaticon-line-graph',
  'icon-profile': 'flaticon-users',
  'icon-channel': 'flaticon-computer',
  'icon-engagement-approach': 'flaticon-interface-7',
  'icon-others': 'flaticon-signs-2',
  'icon-human-resource': 'flaticon-list-3',
  'icon-core': 'la-database',
};

Vue.use(Vuetify, {
  iconfont: 'md',
  icons: portalIcons,
});
