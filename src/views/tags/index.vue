<template>
  <div>
    <el-card>
      <el-tabs>
        <el-tab-pane :label="label1">
          <Tab
            :data="data1"
            todos="标记已读"
            a="primary"
            hasd="全部标记已读"
            @biaoji="biaoji"
          />
        </el-tab-pane>
        <el-tab-pane :label="label2">
          <Tab :data="data2" todos="删除" a="danger" hasd="删除全部" @biaoji="biaoji" />
        </el-tab-pane>
        <el-tab-pane :label="label3">
          <Tab :data="data3" todos="还原" a="danger" hasd="清空回收站" @biaoji="biaoji"  />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import Tab from "./tags.vue";
export default {
  components: { Tab },
  data() {
    return {
      datas: [
        {
          id: "1",
          message: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2019-12-2",
          status: "delete",
        },
        {
          id: "2",
          message: "今晚12点整发大红包，先到先得",
          time: "2020-12-2",
          status: "success",
        },
        {
          id: "3",
          message: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2021-12-2",
          status: "warning",
        },
        {
          id: "4",
          message: "【系统通知】该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2022-12-2",
          status: "warning",
        },
      ],
    };
  },
  computed: {
    data1() {
      const a = this.datas.filter((item) => {
        return item.status == "warning";
      });
      return a;
    },
    data2() {
      const a = this.datas.filter((item) => {
        return item.status == "success";
      });
      return a;
    },
    data3() {
      const a = this.datas.filter((item) => {
        return item.status == "delete";
      });
      return a;
    },
    label1() {
      return `未读消息(${this.data1.length})`;
    },
    label2() {
      return `已读消息(${this.data2.length})`;
    },
    label3() {
      return `回收站(${this.data3.length})`;
    },
  },
  methods: {
    biaoji(e, a) {
      const { datas } = this;
      switch (e) {
        case "标记已读":
        case "还原":
          console.log(2);
          datas.find((item) => {
            if (item.id == a) item.status = "success";
            return "";
          });
          break;
        case "删除":
          datas.find((item) => {
            if (item.id == a) item.status = "delete";
            return "";
          });
          break;
      }
    },
    ad(e){
      console.log(1);
console.log(e);
    }
  },
};
</script>

<style lang="scss" scoped></style>
