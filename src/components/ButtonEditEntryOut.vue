<template>
    <div class="modal fade" id="editEntryModal" tabindex="-1" role="dialog" aria-labelledby="editEntryModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editEntryModalLabel">Edit</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="message-text" class="col-form-label">Descriptor</label>
                            <textarea class="form-control" id="message-text" v-model="editEntryRow.described"></textarea>
                        </div>
                        <div>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Amount</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="deb in editEntryRow.debtors">
                                    <td>{{deb.debtUserName}}</td>
                                    <td><div class="input-group">
                                        <span class="input-group-addon">0.00</span>
                                        <input type="text" class="form-control" aria-label="Amount" v-model="deb.debt">
                                    </div></td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="onClickCloseEditRow">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

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
                'editEntryRow'
            ])
        },
        methods: {
            ...mapActions([
                'editRowAfterClose'
            ]),
            onClickCloseEditRow() {
                this.editRowAfterClose()
            }
        }
    }


</script>