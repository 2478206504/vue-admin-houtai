<template>
  <div class="daoru">
    <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" label="ID"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="xuehao" label="学号" width="180"> </el-table-column>
      <el-table-column prop="classe" label="班级"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别" width="180"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import UploadExcelComponent from "@/components/UploadExcel/index.vue";
export default {
  name: "UploadExcel",
  components: { UploadExcelComponent },
  data() {
    return {
      tableData: [
        {
          name: "张三",
          xuehao: "21233",
          classe: "一班",
          age: 18,
          sex: "男",
        },
      ],
    };
  },
  methods: {
    beforeUpload(file) {
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (isLt1M) {
        return true;
      }
      this.$message({
        message: "Please do not upload files larger than 1m in size.",
        type: "warning",
      });
      return false;
    },
    handleSuccess({ results, header }) {
      const newobj = {
        name: `${results[0]['姓名']}`,
        xuehao: `${results[0]['学号']}`,
        classe: `${results[0]['班级']}`,
        age: `${results[0]['年龄']}`,
        sex: `${results[0]['性别']}`,
      };
      this.tableData.push(newobj)
    },
  },
};
</script>

<style lang="scss" scoped>
.daoru {
  padding: 25px;
}
</style>
