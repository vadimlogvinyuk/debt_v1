<template>
    <el-badge :value="countDebtCredit.countDebt" class="item" v-if="currentUserIsActive">
        <h4>debt</h4>
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