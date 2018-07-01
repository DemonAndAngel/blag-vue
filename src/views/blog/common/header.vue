<template>
    <div class="header">
        <div class="header-logo" @click="goIndexPage()">
            <img src="./img/logo.png"/>
        </div>
        <div class="header-sel">
            <div class="item-sel">
                <a class="item-sel-btn">首页</a>
            </div>
            <div class="item-sel">
                <a class="item-sel-btn">发现</a>
            </div>
            <div class="item-sel">
                <a class="item-sel-btn">话题</a>
            </div>
            <div class="item-sel">
                <Input class="search-input" v-model="search" icon="ios-search-strong" placeholder="搜索您感兴趣的帖子"
                       @on-click="handleSearch()" @keyup.enter.native="handleSearch()">
                </Input>
            </div>
        </div>
        <div class="header-user" v-if="blogUserInfo">
            <Dropdown trigger="click">
                <a href="javascript:void(0)">
                    {{ blogUserInfo.nickname }}
                    <Avatar icon="person" style="margin-left:10px;"/>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem>注销</DropdownItem>
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
    import {mapState, mapMutations} from 'vuex';

    export default {
        data() {
            return {
                search: ''
            }
        },
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
                this.$router.push({name: 'blog-index'})
            },
            goLoginPage() {
                this.$router.push({name: 'blog-login'})
            },
            goRegisterPage() {
                this.$router.push({name: 'blog-register'})
            },
            handleSearch() {
                this.$Message.info('测试');
            }
        },
    }
</script>