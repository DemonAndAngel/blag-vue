<style lang="less">
    @import "./css/index";
</style>
<template>
    <div class="index">
        <div class="sel"></div>
        <div class="left">
            <div class="nav">
                    <div class="btn" @click="goWrite" >
                        <Icon type="ios-compose-outline" class="icon"></Icon>
                        说点什么
                    </div>
                    <div class="btn" >
                        <Icon type="ios-chatboxes-outline" class="icon"></Icon>
                        评论
                    </div>
            </div>
            <div class="content">
                asdasd
            </div>
        </div>
        <div class="right">

        </div>
        <div class="sel"></div>
    </div>
</template>
<script>
    export default {
        methods: {
            goWrite(){
                this.$router.push({ name: 'blog-write'});
            }
        }
    };
</script>