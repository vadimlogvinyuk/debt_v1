export default {

    users(state) {
        return state.users;

    },
    usersArrIdName(state) {
        state.tableForCreateNewEntry = [];

        for( var n=0; state.users.length > n; n++){
            if (state.users[n].id !== state.currentUser.id) {
            state.tableForCreateNewEntry.push({id:state.users[n].id ,name:state.users[n].name,amount:''});
            }
        }
        return state.tableForCreateNewEntry;

    },
    tableForCreateNewEntry(state) {
      return state.tableForCreateNewEntry;
    },
    currentUser(state) {
        return state.currentUser;

    },
    currentUserIsActive(state) {
        return state.currentUser.name !== '';
    },
    tableUserDebtCredit (state) {

           var result = [];

           state.activeDebtCreditUsersArray.forEach(
              function (row) {
                  if (row.creditUserId === state.currentUser.id) {
                      result.push({
                      creditId       : row.creditId,
                      debtId         : '',
                      date           : row.date,
                      creditUserName : row.creditUserName,
                      described      : row.described,
                      credit         : row.credit,
                      debt           : 0,
                      checking       : false
                      });
                  };

                  row.debtors.forEach(
                      function (rowDeb) {
                          if (rowDeb.debtUserId === state.currentUser.id) {

                              var checkArr = state.checkDebtUsersArray.filter(
                                  function (obg) {
                                      return obg.debtId === rowDeb.debtId

                                  });
                              result.push({
                                  creditId       : row.creditId,
                                  debtId         : rowDeb.debtId,
                                  date           : row.date,
                                  creditUserName : row.creditUserName,
                                  described      : row.described,
                                  credit         : 0,
                                  debt           : rowDeb.debt,
                                  checking       : checkArr.length > 0,
                              });
                          };

                      });
              });

            return result;

    },
    countDebtCredit(state) {

        var countDebt   = 0;
        var countCredit = 0;

        if (state.activeDebtCreditUsersArray.length > 0) {

            state.activeDebtCreditUsersArray.forEach(
            function (row) {
                if (row.creditUserId === state.currentUser.id) {
                    countCredit += Number(row.credit);
                }

                row.debtors.forEach(
                    function (rowDeb) {
                        if (rowDeb.debtUserId === state.currentUser.id) {
                            countDebt += Number(rowDeb.debt);
                        }

                    });
            });
        }

        return {countDebt:countDebt, countCredit:countCredit};

    },
    editEntryRow(state){

        if (state.activeDebtCreditUsersArray.length === 0) {
            return []
        }else {

        var filter = state.activeDebtCreditUsersArray.filter(function (row) {
                 return row.creditId == state.tempCreditIdRowEdit
            });
        return filter[0];
        }
    },
    countBackMoney (state) {

        if (state.tempBackMoneyEntryId === {}) {
            return 0;
        }else {
            return state.tempBackMoneyEntryId.debt;
        }
    },
    checkCount(state) {

        if(state.checkDebtUsersArray.length > 0) {
            return state.checkDebtUsersArray.filter(
                function (row) {
                    return row.creditUserId === state.currentUser.id
                }).length;
        } else {
            return 0;
        }
    },
    arrCheckBackMoney(state) {
        if(state.checkDebtUsersArray.length > 0) {
            var filter =  state.checkDebtUsersArray.filter(
                function (row) {
                    return row.creditUserId === state.currentUser.id
                });
            if (filter.length > 0) {
                return filter;
            } else {
                return []
            }

        } else {
            return [];
        }
    },
    history(state) {

        if (state.passiveDebtCreditUsersArray.length > 0) {

        return state.passiveDebtCreditUsersArray.filter(
            function (obg) {
                return obg.creditUserId === state.currentUser.id || obg.debtUserId === state.currentUser.id

            });
        } else {
            return []
        }

    },
    historyCount(state) {

        if (state.passiveDebtCreditUsersArray.length > 0) {

            return state.passiveDebtCreditUsersArray.filter(
                function (obg) {
                    return obg.creditUserId === state.currentUser.id || obg.debtUserId === state.currentUser.id

                }).length;
        } else {
            return 0
        }

    },
    countUsers(state) {
        return state.users.length
    }

}
