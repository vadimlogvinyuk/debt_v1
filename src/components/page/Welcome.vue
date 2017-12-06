<template>
    <dev id="welcome">
        <el-menu
                class="el-menu"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
            <button-log-in></button-log-in>
            <buttonCurrentUser></buttonCurrentUser>
            <button-create-account></button-create-account>
            <button-check-back-money></button-check-back-money>
            <button-history></button-history>
            <button-count-debt></button-count-debt>
            <button-count-credit></button-count-credit>
        </el-menu>
        <worning-page></worning-page>
        <table-data-out-user></table-data-out-user>
        <button-create-new-entry></button-create-new-entry>
        <button-edit-entry-out></button-edit-entry-out>
        <button-back-money></button-back-money>

    </dev>
</template>


<script>
    import buttonLogIn         from '../ButtonLogIn.vue'
    import buttonCreateAccount from '../ButtonCreateAccount.vue'
    import buttonCurrentUser   from '../ButtonCurrentUser.vue'
    import tableDataOutUser    from '../TableDataOutUser.vue'
    import buttonCreateNewEntry from '../ButtonCreateNewEntry.vue'
    import buttonCheckBackMoney from '../ButtonCheckBackMoney.vue'
    import buttonEditEntryOut   from '../ButtonEditEntryOut.vue'
    import buttonBackMoney      from '../ButtonBackMoneyOut.vue'
    import buttonHistory        from '../ButtonHistoryInput.vue'
    import worningPage          from '../WorningPage.vue'
    import buttonCountDebt      from '../ButtonCountDebt.vue'
    import buttonCountCredit    from '../ButtonCountCredit.vue'

    export default {
        components: {
            buttonLogIn,
            buttonCreateAccount,
            buttonCurrentUser,
            tableDataOutUser,
            buttonCreateNewEntry,
            buttonCheckBackMoney,
            buttonEditEntryOut,
            buttonBackMoney,
            buttonHistory,
            worningPage,
            buttonCountDebt,
            buttonCountCredit
        }
    }

</script>

