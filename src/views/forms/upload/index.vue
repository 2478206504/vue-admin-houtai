<template>
  <div class="upload">
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.upload {
  position: absolute;
  transform: translate(50%,50%);
}
::v-deep .el-upload-dragger {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
