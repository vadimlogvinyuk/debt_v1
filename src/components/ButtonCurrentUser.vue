<template>
    <div v-if="currentUserIsActive">
        <el-submenu index="2">
            <template slot="title"><i class="el-icon-star-off"></i>{{currentUser.name}}</template>
            <el-menu-item  @click="onClickLogOut"><i class="el-icon-download"></i> Log out</el-menu-item>
        </el-submenu>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'currentUser','currentUserIsActive'
            ])
        },
        methods: {
            ...mapActions([
                'logOut'
            ]),
            onClickLogOut() {
                this.logOut();
            }
        }
    }

</script>