<template>
    <div>
        <button type="button" class="btn btn-success" data-toggle="modal"
                data-target="#createNewEntryleModal" data-whatever="@mdo" v-if="currentUserIsActive && countUsers > 1"> &#10010; Add </button>

        <div class="modal fade" id="createNewEntryleModal" tabindex="-1" role="dialog" aria-labelledby="createNewEntryModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">New Entry</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">Descriptor</label>
                                <textarea class="form-control" id="message-text" v-model="descriptor"></textarea>
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
                                    <tr v-for="user in usersArrIdName">
                                        <td>{{user.name}}</td>
                                        <td><div class="input-group">
                                            <span class="input-group-addon">0.00</span>
                                            <input type="text" class="form-control" aria-label="Amount" v-model="user.amount">
                                        </div></td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary"   data-dismiss="modal" @click="onClickCreateNewEntry">Create</button>
                    </div>
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
                'users','usersArrIdName','tableForCreateNewEntry','currentUserIsActive','countUsers'
            ])
        },
        methods: {
            ...mapActions([
                'createNewEntry'
            ]),
           onClickCreateNewEntry() {
               this.createNewEntry(this.descriptor);
               this.descriptor = '';

           }
        }
    }


</script>