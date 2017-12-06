<template>
    <div v-if="!currentUserIsActive">
        <el-menu-item index="1">

            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#createAccountModal"
                    data-whatever="@mdo"><i class="el-icon-circle-plus-outline"></i> Create account </button>

            <div class="modal fade" id="createAccountModal" tabindex="-1" role="dialog"
                 aria-labelledby="createAccountModallLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New account</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="recipient-login" class="col-form-label">Login:</label>
                                    <input type="text" class="form-control" id="recipient-login" v-model="login">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="recipient-name" v-model="name">
                                </div>
                                <div class="form-group">
                                    <label for="recipient-password">Password</label>
                                    <input type="password" class="form-control" id="recipient-password" placeholder="Password" v-model="pass">
                                </div>

                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"   data-dismiss="modal" @click="onClickCreateAccount">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </el-menu-item>
    </div>
</template>

<script>

    import { mapActions } from 'vuex'
    import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
             login: '',
             pass : '',
             name : ''
            }
        },
        computed: {
            ...mapGetters([
                'currentUserIsActive'
            ])
        },
        methods: {
            ...mapActions (['createAccount']),

            onClickCreateAccount() {
                var userData = {login:this.login, pass: this.pass,name: this.name};
                this.createAccount(userData);
            }

        }
    }
</script>