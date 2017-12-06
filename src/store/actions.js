import * as types from './mutations_types'

export default {

    createAccount({commit}, obg) {
        commit(types.CREATE_ACCOUNT, obg)
    },
    logOut({commit}) {
        commit(types.LOG_OUT)
    },
    createNewEntry({commit}, descriptor) {
        commit(types.CREATE_NEW_ENTRY, descriptor)
    },
    logIn({commit}, obg) {
        commit(types.LOG_IN, obg)
    },
    backMoney({commit}, obg) {
        commit(types.BACK_MONEY, obg)
    },
    chooseRowEditEntry({commit}, id) {
        commit(types.CHOOSE_ROW_EDIT, id)
    },
    chooseRowBackMoney({commit}, id) {
        commit(types.CHOOSE_ROW_BACK_MONEY, id)
    },
    checkBackMoney({commit}, obg) {
        commit(types.CHECK_BACK_MONEY, obg)
    },
    editRowAfterClose({commit}) {
        commit(types.EDIT_ROW_AFTER_CLOSE)
    }
}