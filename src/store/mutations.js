import * as types from './mutations_types'

export default {

    [types.CREATE_ACCOUNT](state,obg) {

        var accountIsCorrect = true;

        if (state.sweep.length > 0) {

        var foundUsers = state.users.filter(
            function (user) {
               return user.login === obg.login;
            });

            if(foundUsers.length > 0){
            alert('Oops, login: '+obg.login+' in use!');
            accountIsCorrect = false;
            }
        };

        if(accountIsCorrect) {
        var newAccount = {
            id      : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            login   : obg.login,
            name    : obg.name,
            password: obg.pass
        };
        state.users.push(newAccount);
        state.currentUser = newAccount;
        };

    },

    [types.LOG_OUT](state) {
        state.currentUser = {name:''}
    },

    [types.LOG_IN](state,obg) {

        var userIsFound = false;
        for(var n=0; state.users.length > n ; n++) {
            if (state.users[n].login === obg.login) {

                if (state.users[n].password === obg.pass) {
                    state.currentUser = state.users[n];
                    userIsFound = true;
                }
            }
        };

        if (!userIsFound) {
            alert("Oops user or password not correct");
        };
    },

    [types.CREATE_NEW_ENTRY](state,des) {

        var options = {
            year:  'numeric',
            month: 'numeric',
            day:   'numeric',
            timezone: 'UTC'
        };

        var newEntry = {
            creditId        : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
            creditUserId    : state.currentUser.id,
            creditUserName  : state.currentUser.name,
            date            : new Date().toLocaleString("ru", options),
            described       : des,
            credit          : Number(0),
            debtors         : [],
        };

        var count = 0;

        for(var n=0; state.tableForCreateNewEntry.length > n; n++) {

            var amount = Number(String(state.tableForCreateNewEntry[n].amount).replace(',','.'));

            if (amount > 0 ) {
                newEntry.debtors.push({
                    debtId      : Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
                    debtUserId  : state.tableForCreateNewEntry[n].id,
                    debtUserName: state.tableForCreateNewEntry[n].name,
                    debt        : amount,
                });
                count += amount;
            } else {
                alert('Oops, amount: '+state.tableForCreateNewEntry[n].amount+', is not correct');
                break;
            }
        };

        newEntry.credit = count;
        state.activeDebtCreditUsersArray.push(newEntry);
        state.tableForCreateNewEntry = [];
    },
    [types.BACK_MONEY](state,am) {

        var amount = Number(String(am).replace(',','.'));
        if(!amount > 0) {
            alert('Oops, amount is not correct!');
            return;
        }

        var filter = state.activeDebtCreditUsersArray.filter(
            function (row) {
                return row.creditId === state.tempBackMoneyEntryId.creditId
            });

        var result = filter[0].debtors.filter(
            function (obg) {
                return obg.debtId === state.tempBackMoneyEntryId.debtId
            });

        var newObg = {
            creditId      : filter[0].creditId,
            creditUserId  : filter[0].creditUserId,
            described     : filter[0].described,
            debtId        : result[0].debtId,
            debtUserId    : result[0].debtUserId,
            debtUserName  : result[0].debtUserName,
            debt          : amount,
        };
        state.checkDebtUsersArray.push(newObg);
    },
    [types.CHOOSE_ROW_EDIT](state, id) {
        state.tempCreditIdRowEdit = id;
    },
    [types.CHOOSE_ROW_BACK_MONEY](state, id) {

        state.tempBackMoneyEntryId.creditId = id.creditId;
        state.tempBackMoneyEntryId.debtId   = id.debtId;
        state.tempBackMoneyEntryId.debt     = id.debt;


    },
    [types.CHECK_BACK_MONEY](state, obg) {

        var amount = Number(obg.debt);

        var filter = state.activeDebtCreditUsersArray.filter(
            function (row) {
                return row.creditId === obg.creditId
            }
        );

        var debrArr = filter[0].debtors.filter(
            function (debtRow) {
                return debtRow.debtId === obg.debtId
            }
        );

        debrArr[0].debt  = debrArr[0].debt  - amount;
        filter[0].credit = filter[0].credit - amount;

        state.passiveDebtCreditUsersArray.push(
            {
                id                  :  debrArr[0].debtId,
                creditUserId        :  filter[0].creditUserId,
                creditUserName      :  filter[0].creditUserName,
                debtUserId          :  debrArr[0].debtUserId,
                debtUserName        :  debrArr[0].debtUserName,
                amount              :  amount,
                described           :  filter[0].described
            }
        );

        state.checkDebtUsersArray.splice(state.checkDebtUsersArray.indexOf(obg),1);

        if (debrArr[0].debt === 0) {
            filter[0].debtors.splice(filter[0].debtors.indexOf(debrArr[0]), 1);
        }

        if (filter[0].debtors.length === 0) {
            state.activeDebtCreditUsersArray.splice(state.activeDebtCreditUsersArray.indexOf(filter[0]),1);
        }

    },

    [types.EDIT_ROW_AFTER_CLOSE](state) {

        var filter = state.activeDebtCreditUsersArray.filter(function (row) {
                return row.creditId === state.tempCreditIdRowEdit
            }
        );
        var count = 0;
        filter[0].debtors.forEach(
            function (obgDebt) {
                count += Number(obgDebt.debt);
            }
        );

        filter[0].credit = count;


    }
}
