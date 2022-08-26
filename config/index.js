const CONFIG = {
  // ================================基础配置 - 无需修改================================
  // 和风天气API
  HEFENG_API_KEY: "7b25e1aad0b7467a8577969b809021d9",

  // ================================高级配置 - 需要修改================================

  // 微信公众号的appID
  APP_ID: "wx200ac1eb88d7c478",

  // 微信公众号的appsecret
  APP_SECRET: "b0bba54753a59c9ef012bb29bcb2ac72",

  // 微信公众号的模板ID
  TEMPLATE_ID: "yQyRzlNLLVi-2Dx9zYvZ_DWI2KCSJ4a8wRcbQ9mO6qU",

  // 天行API的key
  TXApiKey: "806d907b3fb2e1bdee40bfe6798316fb ",

  // 用户列表 可配置多个用户
  user: [
    {
      // 男(女)朋友的名字（或昵称或网名）
      userName: "早上好~",
      // 用户列表的`微信号`
      userId: "oGGI-5iHADh6uDBZh1rsgJMC8D3o",
      // 星座
      star: "摩羯座",
      // 生日 - 格式：08-22
      birthday: "01-28",
      // 城市 - 格式：支持省市县区
      city: "深圳",
    },
  ],

  // 计划旅游日 - 格式：2022-05-20
  tourism: "2022-12-12",

  // 恋爱纪念日 - 格式：2022-05-20
  loveDay: "2022-05-20",

  // ================================功能配置 - 可选修改================================

  // 默认全部开启，关闭可以加快响应速度
  // true 开启，false 关闭
  plugins: {
    // 天气预报
    weather: true,
    // 天气接口 默认接口1，可选接口1、2，接口2暂时无法使用
    weatherType: 1,
    // 星座运势
    star: true,
    // 土味情话
    saylove: true,
    // 健康小提示
    healthtip: true,
    // 毒鸡汤
    duJiTang: true,
    // 早安心语
    zaoAn: true,
    // 晚安心语
    wanAn: true,
    // 彩虹屁
    caiHongPi: true,
  },
};

module.exports = {
  CONFIG,
};
