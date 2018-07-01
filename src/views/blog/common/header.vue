<template>
    <div class="header">
        <div class="header-sel">
        </div>
        <div class="header-user" v-if="blogUserInfo">
            <Dropdown trigger="click">
                <a href="javascript:void(0)" style="color:#666;font-size:12px;">
                    {{ blogUserInfo.nickname }}<Avatar icon="person" style="margin-left:10px;" />
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem >注销</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="header-user" v-else>
            <a class="login-btn" href="javascript:void(0)" @click="goLoginPage()">登录/</a>
            <a class="register-btn" href="javascript:void(0)" @click="goRegisterPage()">注册</a>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import { mapState,mapMutations } from 'vuex';
    export default {

        computed: {
            ...mapState([
                'blogUserInfo'
            ]),
        },
        methods: {
            ...mapMutations([
                'GET_USER_INFO',
                'REMOVE_USER_INFO'
            ]),
            goIndexPage() {
                this.$router.push({ name: 'blog-index' })
            },
            goLoginPage(){
                this.$router.push({ name: 'blog-login' })
            },
            goRegisterPage(){
                this.$router.push({ name: 'blog-register' })
            }
        },
    }
</script>