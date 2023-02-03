<template>
  <div>
    <el-card>
      <span>角色:</span>
      <el-select v-model="value" placeholder="请选择" style="margin-bottom: 20px" @change="gai">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- 选项 -->
      <el-tree
        v-if="isS"
        ref="abcd"
        :data="data"
        show-checkbox
        node-key="id"
        :default-checked-keys="datsssa"
        :default-expand-all="true"
        :props="defaultProps"
      >
      </el-tree>
      <el-button type="primary" style="margin-top: 24px" @click="bao">保存权限</el-button>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "super",
          label: "超级管理员",
        },
        {
          value: "vip",
          label: "高级用户",
        },
        {
          value: "user",
          label: "普通用户",
        },
      ],
      data: [
        {
          id: 1,
          label: "系统首页",
        },
        {
          id: 2,
          label: "表格相关",
          children: [
            {
              id: 3,
              label: "常用表格",
            },
            {
              id: 4,
              label: "导出表格",
            },
            {
              id: 5,
              label: "导入表格",
            },
          ],
        },
        {
          id: 6,
          label: "Tab选项卡",
        },
        {
          id: 7,
          label: "表单相关",
          children: [
            {
              id: 8,
              label: "基本表单",
            },
            {
              id: 9,
              label: "上传表单",
            },
            {
              id: 10,
              label: "富文本编辑器",
            },
            {
              id: 11,
              label: "markdown编辑器",
            },
          ],
        },
        {
          id: 12,
          label: "Icon图标",
        },
        {
          id: 13,
          label: "权限管理",
          disabled: true
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      defau: [],
      value: "super",
    };
  },
  computed: {
    ...mapGetters("qx", ["abcd"]),
    datsssa() {
      const ar = [];
      for (let i = 0; i < this.abcd[this.value].length; i++) {
        ar.push(this.abcd[this.value][i].id);
      }
     
      return ar;
    },
    isS() {
      console.log(this.datsssa);
      return this.datsssa.length > 0;
    },
  },
  methods: {
    ...mapActions("qx", ["updataQuanxian"]),
    // }
    gai(){
      this.$refs.abcd.setCheckedNodes([{id:1}])
    },
    bao() {
      this.updataQuanxian([this.$refs.abcd.getCheckedNodes(), this.value]);
    },
  },
};
</script>

<style lang="scss" scoped></style>
