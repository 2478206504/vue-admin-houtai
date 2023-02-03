<template>
    <div>
        <tinymce width="400" height="300" v-model="content" id='tinymce'></tinymce>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                content:"无"
            }
        },
    }
</script>

<style lang="scss" scoped>
#tinymce{
    background-color: red;
}
</style>