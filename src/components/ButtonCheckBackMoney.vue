<template>
    <el-badge :value="200" :max="checkCount" class="item" v-if="currentUserIsActive">
        <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#confimRefundModal" data-whatever="@mdo" >
            <i class="el-icon-check" ></i> Checking</button>

        <div class="modal fade" id="confimRefundModal" tabindex="-1" role="dialog" aria-labelledby="confimRefundModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confimRefundModalLabel">Confirm refund</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Described</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Check</th>
                                </tr>
                                </thead>
                            <tbody>
                            <tr v-for="refund in arrCheckBackMoney">
                                <td>{{refund.debtUserName}}</td>
                                <td>{{refund.described}}</td>
                                <td>{{refund.debt}}</td>
                                <td><button type="button" class="btn btn-link" @click="onClickCheckBackMoneyRow(refund)">Check</button></td>
                            </tr>
                            </tbody>
                            </table>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </el-badge>
</template>

<style>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        data () {
            return {
                descriptor: '',
            }
        },
        computed: {
            ...mapGetters([
                'users','checkCount','arrCheckBackMoney','currentUserIsActive'
            ])
        },
        methods: {
            ...mapActions([
                'checkBackMoney'
            ]),
            onClickCheckBackMoneyRow(row) {
                this.checkBackMoney(row);


            }
        }
    }


</script>