<template>
  <div>
    <el-card>
      使用方法:
      <div v-for="(item, index) in a" :key="index" class="icons">
        <svg-icon :icon-class="index" style="width: 30%" />
        <span style="width: 70%">{{ item }}</span>
      </div>
      <h1>图标</h1>
      <el-input
        placeholder="请输入你想查询的图标"
        class="idd"
        @input="souc"
        v-model="mo"
      ></el-input>
      <div class="ssss">
        <el-card v-for="(item, index) in iconss" :key="index" class="qwe">
          <div>
            <svg-icon :icon-class="item.icon" />
          </div>
          <div>
            <span style="font-size: 12px">{{ item.icon }}</span>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: {
        example: `<svg-icon icon-class="example" />`,
        link: `<svg-icon icon-class="link" />`,
        eye: `<svg-icon icon-class="eye" />`,
      },
      mo: "",

      iconss: [],

      icons: [
        {
          icon: "404",
        },
        {
          icon: "bug",
        },
        {
          icon: "chart",
        },
        {
          icon: "clipboard",
        },
        {
          icon: "component",
        },
        {
          icon: "dashboard",
        },
        {
          icon: "documentation",
        },
        {
          icon: "donate",
        },
        {
          icon: "drag",
        },
        {
          icon: "edit",
        },
        {
          icon: "education",
        },
        {
          icon: "email",
        },
        {
          icon: "example",
        },
        {
          icon: "excel",
        },
        {
          icon: "exit - fullscreen",
        },
        {
          icon: "eye - open",
        },
        {
          icon: "eye",
        },
        {
          icon: "form",
        },
        {
          icon: "fullscreen",
        },
        {
          icon: "guide",
        },
        {
          icon: "icon",
        },
        {
          icon: "international",
        },
        {
          icon: "language",
        },
        {
          icon: "link",
        },
        {
          icon: "list",
        },
        {
          icon: "lock",
        },
        {
          icon: "message",
        },
        {
          icon: "money",
        },
        {
          icon: "nested",
        },
        {
          icon: "password",
        },
        {
          icon: "pdf",
        },
        {
          icon: "people",
        },
        {
          icon: "peoples",
        },
        {
          icon: "qq",
        },
        {
          icon: "search",
        },
        {
          icon: "shopping",
        },
        {
          icon: "size",
        },
        {
          icon: "skill",
        },
        {
          icon: "star",
        },
        {
          icon: "tab",
        },
        {
          icon: "table",
        },
        {
          icon: "theme",
        },
        {
          icon: "tree - table",
        },
        {
          icon: "tree",
        },
        {
          icon: "user",
        },
        {
          icon: "wechat",
        },
        {
          icon: "zip",
        },
      ],
    };
  },
  mounted() {
    this.iconss = this.icons;
  },
  methods: {
    souc(e) {
      this.iconss = this.icons.filter((item) => {
        const flag = item.icon.indexOf(e);
        return flag > -1;
      });
      // const item =
      console.log(this.icoiconssns);
    },
  },
};
</script>

<style lang="scss" scoped>
.icons {
  width: 40%;
  height: 40px;
  font-size: 20px;
  line-height: 40px;
}
.idd {
  width: 40%;
  //margin: 0 auto;
  position: relative;
  left: 30%;
  margin-bottom: 20px;
}
.ssss {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  font-size: 30px;
  .qwe {
    cursor: pointer;
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-around;
  }
}
//::v-deep
</style>
