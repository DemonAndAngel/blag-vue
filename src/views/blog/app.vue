<style lang="less">
    @import 'common/css/common';
</style>
<template>
    <div class="blog">
        <blog-header></blog-header>
        <router-view></router-view>
        <blog-footer></blog-footer>
    </div>
</template>
<script>
    import BlogHeader from './common/header.vue';
    import BlogFooter from './common/footer.vue';

    export default {
        components: {
            BlogHeader,BlogFooter
        },
    };
</script>