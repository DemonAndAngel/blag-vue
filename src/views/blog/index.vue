<style lang="less">

</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                </h1>
                <h2>
                    <p>Welcome to your iView app!</p>
                    <Button type="ghost" @click="handleStart">Start iView</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$router.push({ name: 'blog-login'});
            }
        }
    };
</script>