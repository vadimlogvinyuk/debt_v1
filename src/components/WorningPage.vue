<template>
    <div v-if="countUsers == 1 && currentUserIsActive">
        <div class="alert alert-danger" role="alert">
            You can work when there are more users !
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'countUsers','currentUserIsActive'
            ])
        },

    }

</script>