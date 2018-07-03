<template>
    <div class="setting">
        <Upload
                type="drag"
                action="/api/upload/file/handle/" :data="form">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击或拖拽上传</p>
            </div>
        </Upload>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                    save_path: 'avatar'
                }
            };
        }
    }
</script>
