<template>
    <el-badge :value="countDebtCredit.countCredit" class="item" v-if="currentUserIsActive">
        <h4>credit</h4>
    </el-badge>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'countDebtCredit','currentUserIsActive'
            ])
        },
    }

</script>