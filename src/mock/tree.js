const { config } = require('./common')

const { apiPrefix } = config;
let database = {
  httpCode:'200',
  message:'获取成功',
  result:[
    {
      "parentValue": "0",
      "text": "系统管理",
      "value": "1"
    },
    {
      "parentValue": "1",
      "text": "菜单管理",
      "value": "2"
    },
    {
      "parentValue": "1",
      "text": "权限管理",
      "value": "4"
    },
    {
      "parentValue": "4",
      "text": "组织机构列表",
      "value": "5"
    },
    {
      "parentValue": "4",
      "text": "岗位设置",
      "value": "6"
    },
    {
      "parentValue": "4",
      "text": "用户列表",
      "value": "7"
    },
    {
      "parentValue": "1",
      "text": "字典管理",
      "value": "8"
    },
    {
      "parentValue": "8",
      "text": "字典类型",
      "value": "9"
    },
    {
      "parentValue": "8",
      "text": "字典选项",
      "value": "10"
    },
    {
      "parentValue": "0",
      "text": "CMS系统",
      "value": "11"
    },
    {
      "parentValue": "11",
      "text": "分类管理",
      "value": "12"
    },
    {
      "parentValue": "11",
      "text": "属性管理",
      "value": "13"
    },
    {
      "parentValue": "1",
      "text": "站点管理",
      "value": "14"
    },
    {
      "parentValue": "1",
      "text": "表单管理",
      "value": "15"
    },
    {
      "parentValue": "15",
      "text": "自定义表单",
      "value": "16"
    },
    {
      "parentValue": "15",
      "text": "表单设置",
      "value": "17"
    },
    {
      "parentValue": "14",
      "text": "站点列表",
      "value": "18"
    },
    {
      "parentValue": "0",
      "text": "CRM系统管理",
      "value": "19"
    },
    {
      "parentValue": "19",
      "text": "车辆管理",
      "value": "20"
    },
    {
      "parentValue": "0",
      "text": "综合管理",
      "value": "21"
    },
    {
      "parentValue": "4",
      "text": "权限管理",
      "value": "34"
    }
  ]
}

export default  {

  [`GET ${apiPrefix}/tree`] (req, res) {
    res.status(200).json(database)
  },
}
