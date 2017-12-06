<template>

        <div class="modal fade" id="backMoneyModal" tabindex="-1" role="dialog" aria-labelledby="backMoneyModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="backMoneyModalLabel">Back money</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div>
                                <div class="input-group">
                                <span class="input-group-addon">0.00</span>
                                <input type="text" class="form-control" aria-label="Amount" v-model="debt">
                            </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="onClickBackMoney">Enter</button>
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
                debt: '',
            }
        },
        computed: {
            ...mapGetters([
                'countBackMoney'

            ])
        },
        methods: {
            ...mapActions([
                'backMoney'
            ]),
            onClickBackMoney () {
                this.backMoney(this.debt);
                this.debt = 0;
            }
        }
    }
</script>