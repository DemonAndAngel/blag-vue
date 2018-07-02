<style lang="less">
    @import "./css/write";
</style>
<template>
    <div class="write">
        <div class="sel"></div>
        <div class="content">
            <Form ref="form" :model="form" :rules="rule">
                <FormItem prop="title">
                    <Input class="title" type="text" v-model="form.title" placeholder="请输入标题（5-100个字符）">
                    </Input>
                </FormItem>
                <FormItem prop="content">
                    <im-edit :catchData="imEditMethod"></im-edit>
                </FormItem>
            </Form>
            <div class="btn-div">
                <Button class="btn" type="primary" @click="handleSubmit('form')">发布</Button>
            </div>
        </div>
        <div class="sel"></div>
    </div>
</template>
<script>
    import ImEdit from './common/edit.vue';

    export default {
        data() {
            return {
                form: {
                    title: '',
                    content: '',
                },
                rule: {
                    title: [
                        {required: true, message: '标题不能为空', trigger: 'blur'},
                        {type: 'string', min: 5, max: 100, message: '标题为5到100个字符', trigger: 'blur'}
                    ],
                    content: [
                        {type: 'string', required: true, message: '内容不能为空', trigger: 'change'},
                    ]
                }
            };
        },
        methods: {
            imEditMethod(value) {
                this.form.content = value; //在这里接受子组件传过来的参数，赋值给data里的参数
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if(this.form.content === '<p><br></p>'){
                            this.$Message.error('内容不能为空！');
                            return;
                        }
                        this.$Message.info('success');
                    } else {
                        this.$Message.error('标题或内容格式有误！');
                    }
                });
            },
        },
        components: {
            ImEdit
        },
    };
</script>