<template>
  <div>
    <el-card style="padding: 10px">
      <el-form ref="form" label-width="80px" size="mini" :inline="true">
        <el-form-item>
          <el-select placeholder="请选择地址" value="a">
            <el-option label="广东省" value="1"></el-option>
            <el-option label="江西省" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input type="text" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" type="primary">搜索</el-button>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-plus" type="primary">新增</el-button>
        </el-form-item>
      </el-form>

      <div class="block">
        <el-table :data="tableDatas" class="tables" border>
          <el-table-column type="index" label="ID" :index="count"> </el-table-column>
          <el-table-column prop="users" label="用户名" width="180"> </el-table-column>
          <el-table-column prop="balance" label="账户余额" width="180"> </el-table-column>
          <el-table-column prop="avatar" label="头像" width="130"> </el-table-column>
          <el-table-column prop="city" label="地址"> </el-table-column>
          <el-table-column prop="status" label="状态" width="80">
            <template slot-scope="">
              <el-tag type="success">成功</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="time" label="注册时间" width="140"> </el-table-column>
          <el-table-column label="操作" width="180">
            <template slot-scope="">
              <el-button icon="el-icon-edit-outline" type="info" size="small"
                >编辑</el-button
              >
              <el-button icon="el-icon-delete" type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentpage"
        :page-sizes="[5, 10, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import b from './a'
export default {
  data() {
    return {
      tableDatas: [],
      pagesize: 5, //每页的个数
      currentpage: 1, //当前页数
    };
  },
  computed: {
    total() {
      return b.length;
    },
  },
  mounted() {
    this.jisuan(this.currentpage);
  },
  methods: {
    handleSizeChange(val){
      this.pagesize = val;
      this.jisuan(this.currentpage,val);
    },
    handleCurrentChange(val) {
      this.currentpage = val;
      this.jisuan(val);
    },

    //计算每页的人数
    jisuan(cg, pss = this.pagesize) {
      this.tableDatas = b.slice(pss * (cg - 1), cg * pss);
    },
    //重新计算index的值
    count(index) {
      return (this.currentpage - 1) * this.pagesize + index + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.tables {
  width: 100%;
}
</style>
