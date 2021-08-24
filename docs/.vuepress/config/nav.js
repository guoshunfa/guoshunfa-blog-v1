// nav
module.exports = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "Java",
    // link: "/Java/",
    items: [
      {
        text: "Java基础",
        link: "/Java/Java基础/"
      },
      {
        text: "Java框架",
        link: "/Java/Java框架/"
      },
    ]
  },
  {
    text: "数据库",
    link: "/数据库/"
  },
  {
    text: "运维",
    link: "/运维/"
  },
  {
    text: "测试",
    link: "/测试/"
  },
  {
    text: "前端",
    link: "/前端/"
  },
  {
    text: "Python",
    link: "/Python/"
  },
  {
    text: "其他",
    link: "/其他/"
  },
  {
    text: "在线工具箱",
    items: [
      {
        text: "开发",
        items: [
          {
            text: "JSON格式化",
            link: "https://www.bejson.com/jsonviewernew/"
          },
          {
            text: "时间戳转换",
            link: "http://tool.chinaz.com/tools/unixtime.aspx"
          },
        ]
      },
      {
        text: "下载",
        items: [
          {
            text: "Mac APP下载",
            link: "https://www.macapp.so/"
          },
        ]
      },
      {
        text: "反编译",
        items: [
          {
            text: "反编译 Jar",
            link: "http://www.decompiler.com"
          },
          {
            text: "反编译 Class",
            link: "http://javare.cn/De"
          },
        ]
      },
    ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
