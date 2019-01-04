import axios from '../../../axios-instance';

const { financeApi } = axios;

const mutations = {
  EDIT_BANK_ACCOUNT(state, payload) {
    state.forEach((bank) => {
      const eachBank = bank;
      if (bank.id === payload.id) {
        eachBank.name = payload.name;
      }
    });
  },
  GET_BANK_ACCOUNT_LIST(state, payload) {
    const currentState = state;
    currentState.bankAccountList = payload;
  },
};

const actions = {
  editBankAccount: ({ commit }, bank) => {
    commit('EDIT_BANK_ACCOUNT', bank);
  },
  getBankAccountList: ({ commit }) => {
    financeApi.get('/financebankaccount')
      .then((response) => {
        commit('GET_BANK_ACCOUNT_LIST', response.data);
      })
      .catch(err => err);
  },
};

const getters = {
  getBankAccount: state => state.bankAccountList,
};

const state = {
  bankAccountList: [
    {
      id: '1',
      name: 'BCA',
    },
    {
      id: '2',
      name: 'Mandiri',
    },
  ],
};


export default {
  state,
  mutations,
  actions,
  getters,
};
