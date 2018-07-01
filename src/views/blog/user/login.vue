<style lang="less">
    @import "../css/user/login";
</style>
<template>
    <div class="login">
        <div class="login-form">
            <div class="title">登录</div>
            <Form ref="form" :model="form" :rules="rule" class="form">
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
                    <Button class="login-btn" type="primary" @click="handleSubmit('form')">登录</Button>
                </FormItem>
                <FormItem class="register-form-item">
                    还没有账号<a class="register-btn" href="javascript:void(0)" @click="goRegisterPage()">立即注册</a>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>

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
                        {required: true, message: '账号不能为空', trigger: 'blur'},
                        {type: 'string', message: '账号格式有误', trigger: 'change'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6,max:20, message: '密码不能小于6位且不能大于20位', trigger: 'change'},
                    ]
                }
            };
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        login(this.form).then((res)=>{
                            let meta = res.meta;
                            if(meta.code !== 0){
                                this.$Message.error(meta.msg);
                            }
                        });
                    } else {
                        this.$Message.error('账号或密码格式错误！');
                    }
                });
            },
            goRegisterPage(){
                this.$router.replace({ name: 'blog-register'});
            }
        }
    };
</script>