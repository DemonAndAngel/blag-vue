<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
</style>
<template>
    <div class="index">
        <header></header>
        <template>
            <Form ref="form" :model="form" :rules="rule">
                <FormItem prop="account">
                    <Input type="text" v-model="form.account" placeholder="账号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="form.password" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('form')">登录</Button>
                </FormItem>
            </Form>
        </template>


    </div>
</template>
<script>
    import Header from '../common/header.vue';

    import {login} from '../../../api/blag/user';

    export default {
        data() {
            return {
                form: {
                    account: '',
                    password: '',
                },
                rule: {
                    account: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur'}
                    ]
                }
            };
        },
        components: {
            Header
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        login(this.form);
                    } else {
                        this.$Message.error('账号或密码格式错误！');
                    }
                });
            }
        }
    };
</script>