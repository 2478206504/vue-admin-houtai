<template>
  <div>
    <el-row class="main-card" :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="author-card">
          <div class="toux">
            <img
              src="@/layout/ke.jpg"
              style="width: 100px; border-radius: 50%; display: block"
            />
            <div>
              <p class="username">admin</p>
              <p class="users">超级管理员</p>
            </div>
          </div>
          <el-divider></el-divider>
          <div class="times">
            <p>上次登录时间：<span>2020-1-1</span></p>
            <p>上次登录地址：<span>北京</span></p>
          </div>
        </el-card>
        <el-card shadow="hover" style="height: 252px">
          <template #header>
            <span>语言详情</span>
          </template>
          Vue
          <el-progress :percentage="79.4" color="#42b983"></el-progress>
          TypeScript
          <el-progress :percentage="14" color="#f1e05a"></el-progress>
          CSS
          <el-progress :percentage="5.6"></el-progress>
          HTML
          <el-progress :percentage="1" color="#f56c6c"></el-progress>
        </el-card>
      </el-col>

      <el-col :span="16">
        <div style="height: 110px">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <i class="el-icon-user icon-left" style="backgroundColor: #2d8cf0"></i>
              <div class="grid-cont-right">
                <div class="grid-num" style="color: #2d8cf0; font-weight: bolder">
                  1234
                </div>
                <div>用户访问量</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <i
                class="el-icon-chat-dot-round icon-left"
                style="backgroundColor: red"
              ></i>
              <div class="grid-cont-right">
                <div class="grid-num" style="color: #64d572; font-weight: bolder">
                  321
                </div>
                <div>系统消息</div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <i class="el-icon-goods icon-left" style="backgroundColor: #f15e43"></i>
              <div class="grid-cont-right">
                <div class="grid-num" style="color: #f15e43; font-weight: bolder">
                  5000
                </div>
                <div>商品数量</div>
              </div>
            </el-card>
          </el-col>
        </div>
        <div>
          <el-card shadow="hover" style="height: 400px">
            <template #header>
              <span>代办事项</span>
              <el-button
                style="float: right; padding: 3px 0"
                text
                @click="centerDialogVisible = true"
                >添加</el-button
              >
            </template>
            <div class="qwqe">
              <div v-for="(item, index) in todoList" :key="index" >
                <input type="checkbox" :checked="item.status" style="margin-right: 25px;" />
               <span style="line-height:4px;height:4px"> {{ item.title }}</span>
                <el-divider></el-divider>
              </div>
            </div>
            
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row
      :gutter="20"
      style="display: flex; justify-content: space-between; margin-top: 20px"
    >
      <el-card shadow="hover" id="ABC" style="width: 47%; height: 300px"></el-card>
      <el-card shadow="hover" id="abc" style="width: 47%; height: 300px"></el-card>
    </el-row>
    <div class="dia">
      <el-dialog title="输入" :visible.sync="centerDialogVisible" width="30%" center>
        <el-input type="text" placeholder="请输入你想要做的事情" v-model="val"></el-input>
        <div class="button-qa">
          <el-button type="success" @click="quxiao" class="qx">取消添加</el-button>
          <el-button type="danger" @click="add" class="add">确定添加</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  mounted() {
    this.initecharts();
  },
  data() {
    return {
      todoList: [
        {
          title: "今天要修复100个bug",
          status: false,
        },
        {
          title: "123",
          status: false,
        },
        {
          title: "234",
          status: false,
        },
        {
          title: "今天要修复100个bug",
          status: false,
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: false,
        },
        {
          title: "今天要修复100个bug",
          status: false,
        },
        {
          title: "今天要修复100个bug",
          status: true,
        },
        {
          title: "今天要写100行代码加几个bug吧",
          status: true,
        },
      ],
      centerDialogVisible: false,
      val: "",
    };
  },
  methods: {
    initecharts() {
      // // 基于准备好的dom，初始化echarts实例
      var myChart2 = this.$echarts.init(document.querySelector("#abc"));
      var myChart1 = this.$echarts.init(document.querySelector("#ABC"));
      // 绘制图表
      myChart1.setOption({
        title: {
          text: "最近一周各品类销售图",
        },
        legend: {
          data: ["家电", "百货", "食品"],
        },
        xAxis: {
          data: ["周一", "周二", "周三", "周四", "周五"],
        },
        tooltip: {},
        yAxis: {},
        series: [
          {
            type: "bar",
            name: "家电",
            data: [234, 278, 270, 190, 230],
          },
          {
            type: "bar",
            name: "百货",
            data: [164, 178, 190, 135, 160],
          },
          {
            type: "bar",
            name: "食品",
            data: [144, 198, 150, 235, 120],
          },
        ],
      });
      myChart2.setOption({
        title: {
          text: "最近几个月各品类销售趋势图",
        },
        tooltip: {},
        legend: {
          data: ["家电", "百货", "食品"],
        },
        yAxis: {},
        xAxis: {
          data: ["6月", "7月", "8月", "9月", "10月"],
        },
        series: [
          {
            type: "line",
            name: "家电",
            data: [234, 278, 270, 190, 230],
          },
          {
            type: "line",
            name: "百货",
            data: [164, 178, 150, 135, 160],
          },
          {
            type: "line",
            name: "食品",
            data: [74, 118, 200, 235, 90],
          },
        ],
      });
    },
    quxiao() {
      this.val = "";
      this.centerDialogVisible = false;
    },
    add() {
      let flag = this.val.trim() == "";
      if (!flag) {
        const newtodos = {
          title: this.val,
          status: false,
        };
        this.todoList.push(newtodos);
        this.val = "";
        this.centerDialogVisible = false;
      } else {
        alert("请输入你向做的事情");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/**
*
*/
.username {
  font-weight: bolder;
  font-size: larger;
}
.users {
  color: gray;
}

.author-card {
  .toux {
    display: flex;
    align-content: center;
    justify-content: space-around;
  }
  .times {
    margin-top: 20px;
    margin-left: 30px;
    color: gray;
    span {
      margin-left: 75px;
    }
  }
}

.main-card {
  width: 100%;
}
#ABC,
#abc {
  padding: 20px;
}

.icon-left {
  font-size: 60px;
  line-height: 110px;
  text-align: center;
  height: 110px;
  width: 40%;
  float: left;
}
.grid-cont-right {
  width: 60%;
  height: 110px;
  float: right;
  line-height: 25px;
  padding-top: 25px;
  text-align: center;
  font-size: 20px;
  color: gray;
}
.button-qa {
  margin-top: 15px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.qwqe{
height: 300px;
margin-bottom: 20px;
overflow: auto;
}
</style>
