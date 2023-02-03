<template>
  <el-card style="padding: 10px">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-cascader :options="options" :show-all-levels="false"></el-cascader>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="是否开启">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动人数">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="10-12"></el-checkbox>
          <el-checkbox label="8-12"></el-checkbox>
          <el-checkbox label="5-7"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="活动内容">
        <el-radio-group v-model="form.resource">
          <el-radio label="唱歌/跳舞"></el-radio>
          <el-radio label="看电影" ></el-radio>
          <el-radio label="郊游" ></el-radio>
          <el-radio label="滑冰" ></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      options : [{
            value: "jilin",
            label: "吉林省",
            children: [
                {
                    value: "changchun",
                    label: "长春市",
                    children: [{
                            value: "chaoyang",
                            label: "朝阳区",
                        },
                        {
                            value: "gaoxin",
                            label: "高新区",
                        },
                    ],
                },
                {
                    value: "baishan",
                    label: "白山市",
                    children: [{
                            value: "hedong",
                            label: "河东区",
                        },
                    ],
                },
            ],
        },
        {
            value: "zujian",
            label: "组件",
            children: [{
                    value: "basic",
                    label: "Basic",
                    children: [{
                            value: "layout",
                            label: "Layout 布局",
                        },
                        {
                            value: "color",
                            label: "Color 色彩",
                        },
                        {
                            value: "typography",
                            label: "Typography 字体",
                        },
                        {
                            value: "icon",
                            label: "Icon 图标",
                        },
                        {
                            value: "button",
                            label: "Button 按钮",
                        },
                    ],
                },
                {
                    value: "form",
                    label: "Form",
                    children: [{
                            value: "radio",
                            label: "Radio 单选框",
                        },
                        {
                            value: "checkbox",
                            label: "Checkbox 多选框",
                        },
                        {
                            value: "input",
                            label: "Input 输入框",
                        },
                        {
                            value: "input-number",
                            label: "InputNumber 计数器",
                        },
                        {
                            value: "select",
                            label: "Select 选择器",
                        },
                        {
                            value: "cascader",
                            label: "Cascader 级联选择器",
                        },
                        {
                            value: "switch",
                            label: "Switch 开关",
                        },
                        {
                            value: "slider",
                            label: "Slider 滑块",
                        },
                        {
                            value: "time-picker",
                            label: "TimePicker 时间选择器",
                        },
                        {
                            value: "date-picker",
                            label: "DatePicker 日期选择器",
                        },
                        {
                            value: "datetime-picker",
                            label: "DateTimePicker 日期时间选择器",
                        },
                        {
                            value: "upload",
                            label: "Upload 上传",
                        },
                        {
                            value: "rate",
                            label: "Rate 评分",
                        },
                        {
                            value: "form",
                            label: "Form 表单",
                        },
                    ],
                },
                {
                    value: "data",
                    label: "Data",
                    children: [{
                            value: "table",
                            label: "Table 表格",
                        },
                        {
                            value: "tag",
                            label: "Tag 标签",
                        },
                        {
                            value: "progress",
                            label: "Progress 进度条",
                        },
                        {
                            value: "tree",
                            label: "Tree 树形控件",
                        },
                        {
                            value: "pagination",
                            label: "Pagination 分页",
                        },
                        {
                            value: "badge",
                            label: "Badge 标记",
                        },
                    ],
                },
                {
                    value: "notice",
                    label: "Notice",
                    children: [{
                            value: "alert",
                            label: "Alert 警告",
                        },
                        {
                            value: "loading",
                            label: "Loading 加载",
                        },
                        {
                            value: "message",
                            label: "Message 消息提示",
                        },
                        {
                            value: "message-box",
                            label: "MessageBox 弹框",
                        },
                        {
                            value: "notification",
                            label: "Notification 通知",
                        },
                    ],
                },
                {
                    value: "navigation",
                    label: "Navigation",
                    children: [{
                            value: "menu",
                            label: "NavMenu 导航菜单",
                        },
                        {
                            value: "tabs",
                            label: "Tabs 标签页",
                        },
                        {
                            value: "breadcrumb",
                            label: "Breadcrumb 面包屑",
                        },
                        {
                            value: "dropdown",
                            label: "Dropdown 下拉菜单",
                        },
                        {
                            value: "steps",
                            label: "Steps 步骤条",
                        },
                    ],
                },
                {
                    value: "others",
                    label: "Others",
                    children: [{
                            value: "dialog",
                            label: "Dialog 对话框",
                        },
                        {
                            value: "tooltip",
                            label: "Tooltip 文字提示",
                        },
                        {
                            value: "popover",
                            label: "Popover 弹出框",
                        },
                        {
                            value: "card",
                            label: "Card 卡片",
                        },
                        {
                            value: "carousel",
                            label: "Carousel 走马灯",
                        },
                        {
                            value: "collapse",
                            label: "Collapse 折叠面板",
                        },
                    ],
                },
            ],
        },
        {
            value: "ziyuan",
            label: "资源",
            children: [{
                    value: "axure",
                    label: "Axure Components",
                },
                {
                    value: "sketch",
                    label: "Sketch Templates",
                },
                {
                    value: "jiaohu",
                    label: "组件交互文档",
                },
            ],
        },
    ],
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
