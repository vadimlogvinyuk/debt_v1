import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        users:[],
        currentUser: {name:''},

        activeDebtCreditUsersArray  :[],
        checkDebtUsersArray         :[],
        passiveDebtCreditUsersArray :[],

        mutualSettlements:[{id:'',date:'',described:''}],
        sweep:[],
        tableForCreateNewEntry:[],
        backMoneyUsersTable:[],

        tempCreditIdRowEdit  : '',
        tempBackMoneyEntryId : {}
    },

    mutations,
    actions,
    getters

});
