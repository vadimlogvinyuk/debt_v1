<template>
    <el-badge :value="200" :max="historyCount" class="item" v-if="currentUserIsActive">
        <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#historyModal" data-whatever="@mdo" >
            <i class="el-icon-tickets"></i> History</button>

        <div class="modal fade" id="historyModal" tabindex="-1" role="dialog" aria-labelledby="historyModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="historyModalLabel">History</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">Creditor Name</th>
                                    <th scope="col">Debitor Name</th>
                                    <th scope="col">Described</th>
                                    <th scope="col">Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="refund in history">
                                    <td>{{refund.creditUserName}}</td>
                                    <td>{{refund.debtUserName}}</td>
                                    <td>{{refund.described}}</td>
                                    <td>{{refund.amount}}</td>
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

    export default {
        data () {
            return {
                descriptor: '',
            }
        },
        computed: {
            ...mapGetters([
                'history','historyCount','currentUserIsActive'
            ])
        },

    }


</script>