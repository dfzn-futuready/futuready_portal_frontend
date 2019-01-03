import Vue from 'vue';
import Vuex from 'vuex';
import financeDashboard from './modules/finance/dashboard';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    financeDashboard,
  },
});
