<template>
  <div>
    <el-table :data="data" :show-header="false" border>
      <el-table-column prop="message">
        <template slot-scope="scope">
          <div style="color: #20a0ff">
            {{ scope.row.message }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="time" width="150"></el-table-column>
      <el-table-column width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="biaoji(todos, scope.row.id)"
            :type="de"
            >{{ todos }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button style="margin-top: 20px" :type="a" >{{ hasd }}</el-button>
  </div>
</template>

<script>
export default {
  props: ["data", "todos", "hasd", "a"],
  computed: {
    de() {
      let dd  ;
      this.data.forEach(item => {
        if(item.status == "success"){
          return dd = "danger"
        }
      });
      return dd
    },
  },
  methods: {
    biaoji(e, a) {
      this.$emit("biaoji",e, a);
    },

  },
};
</script>

<style lang="scss" scoped>
.a {
  background-color: red($color: #f13030);
}
</style>
