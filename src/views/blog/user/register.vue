<style lang="less">
    @import "../css/user/register";
</style>
<template>
    <div class="register">
        <div class="register-form">
            <div class="title">注册</div>
            <Form ref="form" :model="form" :rules="rule" class="form">
                <FormItem prop="account">
                    <Input type="text" v-model="form.account" placeholder="账号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="nickname">
                    <Input type="text" v-model="form.nickname" placeholder="昵称">
                    <Icon type="ios-flame-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="form.password" placeholder="密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password_c">
                    <Input type="password" v-model="form.password_c" placeholder="确认密码">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('form')" class="register-btn">注册</Button>
                </FormItem>
                <FormItem class="login-form-item">
                    已有账号？<a class="login-btn" href="javascript:void(0)" @click="goLoginPage()">立即登陆</a>
                </FormItem>
            </Form>
        </div>
    </div>
</template>
<script>
    import Header from '../common/header.vue';

    import {login,register} from '../../../api/blag/user';

    export default {
        data() {
            return {
                form: {
                    account: '',
                    password: '',
                    password_c: '',
                    nickname: '',
                },
                rule: {
                    account: [
                        {required: true, message: '账号不能为空', trigger: 'blur'},
                        {type: 'string', message: '账号格式有误', trigger: 'change'}
                    ],
                    nickname: [
                        {required: true, message: '昵称不能为空', trigger: 'blur'},
                        {type: 'string', message: '昵称格式有误', trigger: 'change'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6,max:20, message: '密码不能小于6位且不能大于20位', trigger: 'change'},
                    ],
                    password_c: [
                        {required: true, message: '确认密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6,max:20, message: '确认密码不能小于6位且不能大于20位', trigger: 'change'},
                        {validator: this.validatePassCheck, trigger: 'change'},
                    ]
                },
                validatePassCheck: (rule, value, callback) => {
                    if (value !== this.form.password) {
                        callback(new Error('两次密码输入不一致'));
                    } else {
                        callback();
                    }
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
                        register(this.form).then((res) => {
                            let meta = res.meta;
                            if (meta.code !== 0) {
                                this.$Message.error(meta.msg);
                            }else{
                                login(this.form).then((res)=>{
                                    let meta = res.meta;
                                    if(meta.code === 0){
                                        let url = this.$route.query.url;
                                        if (url)
                                            window.location.href = url;
                                        else
                                            this.$router.replace({name: 'blog-index'});
                                    }
                                });
                            }
                        });
                    } else {
                        this.$Message.error('账号或密码格式错误！');
                    }
                });
            },
            goLoginPage(){
                this.$router.replace({ name: 'blog-login'});
            }
        }
    };
</script>