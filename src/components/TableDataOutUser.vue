<template>
    <div v-if="currentUserIsActive && tableUserDebtCredit.length > 0">
        <template>
            <el-table
                    :data="tableUserDebtCredit"
                    style="width: 100%"
                    :row-class-name="tableRow">
                <el-table-column
                        fixed
                        prop="date"
                        label="Date"
                        width="150">
                </el-table-column>
                <el-table-column
                        fixed
                        prop="creditUserName"
                        label="Name"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="described"
                        label="Described"
                        width="400">
                </el-table-column>
                <el-table-column
                        prop="debt"
                        label="Debt"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="credit"
                        label="Credit"
                        width="150">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="Operations"
                        width="400">
                    <template slot-scope="scope">
                        <div v-if="!scope.row.credit && !scope.row.checking">
                        <el-button type="text" size="small" @click="onClickBackMoneyRow(tableUserDebtCredit[scope.$index])">
                            <button-back-money></button-back-money></el-button>
                        </div>
                        <div v-if="!scope.row.debt">
                        <el-button type="text" size="small" @click="onClickEditRow(tableUserDebtCredit[scope.$index])">
                            <button-edit-entry></button-edit-entry></el-button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>

<style>
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

     .el-table .success-row_my {
         background: #67C23A;
         text-decoration: line-through;
     }
</style>

<script>
    import { mapGetters }  from 'vuex'
    import { mapActions }  from 'vuex'
    import buttonEditEntry from './ButtonEditEntryImput.vue'
    import buttonBackMoney from './ButtonBackMoneyInput.vue'

    export default {
        data () {
            return {
            }
        },
        components:{
            buttonEditEntry,
            buttonBackMoney
        },
        computed: {
            ...mapGetters([
                'tableUserDebtCredit','currentUserIsActive'
            ])
        },
        methods: {
            ...mapActions([
                'backMoney','chooseRowBackMoney','chooseRowEditEntry'
            ]),
            onClickEditRow(row) {
                this.chooseRowEditEntry(row.creditId);
            },
            onClickBackMoneyRow(row) {
                this.chooseRowBackMoney({debtId: row.debtId, creditId: row.creditId, debt: row.debt});
            },
            tableRow({row, rowIndex}) {
                if (row.checking) {
                    return 'success-row_my';
                }
                if (row.debt != 0) {
                    return 'warning-row';
                } else if (row.credit != 0) {
                    return 'success-row';
                }
                return '';
            }

        }
    }
</script>