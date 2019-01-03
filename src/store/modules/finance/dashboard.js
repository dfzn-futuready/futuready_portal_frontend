
const mutations = {
  EDIT_BANK_ACCOUNT(state, payload) {
    state.forEach((bank) => {
      const eachBank = bank;
      if (bank.id === payload.id) {
        eachBank.name = payload.name;
      }
    });
  },
};

const actions = {
  editBankAccount: ({ commit }, bank) => {
    commit('EDIT_BANK_ACCOUNT', bank);
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
