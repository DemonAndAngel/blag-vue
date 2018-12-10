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
                <div class="list">
                    <div class="title">头部</div>
                    <div class="content">列表类容</div>
                </div>
            </div>
        </div>
        <div class="right">

        </div>
        <div class="sel"></div>
    </div>
</template>
<script>
    import {getBlogList} from '../../api/blag/blog';
    export default {
        methods: {
            goWrite(){
                this.$router.push({ name: 'blog-write'});
            },
            getBlogList(){
                getBlogList().then((res)=>{
                    console.log(res);
                });
            }
        },
        created(){
            this.getBlogList();
        }
    };
</script>