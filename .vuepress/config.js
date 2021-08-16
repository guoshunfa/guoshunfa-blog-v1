let sidebar = require('./public/sidebar/sidebar.js');

module.exports = {
  title: "up 就完了",
  description: "当一个小小的心念变成成为行为时，便能成了习惯;从而形成性格，而性格就决定你一生的成败。",
  dest: "public",
  // theme: "reco",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.jpeg"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "文档",
        icon: "reco-message",
        items: [
          {
            text: "Java",
            link: "/blog/Java/"
          },
          {
            text: "数据库",
            link: "/blog/Database/"
          },
          {
            text: "运维",
            link: "/blog/Operation-Maintenance/"
          },
          {
            text: "测试",
            link: "/blog/Testing/"
          },
          {
            text: "测试",
            link: "/blog/Web/"
          },
          {
            text: "Python",
            link: "/blog/Python/"
          },
          {
            text: "其他",
            link: "/blog/Other/"
          },
        ]
      },
      {
        text: "在线工具箱",
        // icon: "reco-date",
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
        text: "关于我",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/guoshunfa/",
            icon: "reco-github"
          }, {
            text: "Gitee",
            link: "https://gitee.com/guoshunfa/",
            icon: "reco-mayun"
          },
        ]
      }
    ],
    sidebar: {
      "/blog/Java/": sidebar.java,
      "/blog/Database/": sidebar.database,
      "/blog/Operation-Maintenance/": sidebar.operation_maintenance,
      "/blog/Testing/": sidebar.testing,
      "/blog/Python/": sidebar.python,
      "/blog/Web/": sidebar.web
    },
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "种类"
      },
      tag: {
        location: 3,
        text: "标签"
      }
    },
    // 友链
    friendLink: [
      {
        title: "vuepress",
        desc: "vuepress官方文档",
        link: "https://vuepress.vuejs.org/zh/"
      },
      {
        title: "vuepress-theme-reco",
        desc: "vuepress 主题 -> vuepress-theme-reco",
        link: "https://vuepress-theme-reco.recoluan.com/"
      },
    ],
    logo: "/logo.jpeg",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "panda",
    authorAvatar: "/logo.jpeg",
    record: "备案",
    startYear: "2021",
    // 评论 API: https://valine.js.org/
    valineConfig: {
      // el: '',
      appId: '56qNdPkQtulKT7LCUbwIhWnQ-gzGzoHsz',// your appId
      appKey: 'ilEPiCAP2sdCUWk5WsWonM7v', // your appKey
      placeholder: '唠！唠就完了。',           // 评论框占位符
      avatar: 'mp',           // 评论用户的头像类型
      highlight: true,         // 代码高亮
      recordIP: true,         // 记录评论者的IP
      enableQQ: true,   //是否启用昵称框自动获取QQ昵称和QQ头像, 默认关闭，需博/网站主主动启用
    },
    // 加密 密钥
    // keyPage: {
    //   keys: ['e9714033238402b831955dd0de8430b6'], // 1.3.0 版本后需要设置为密文
    //   color: '#42b983', // 登录页动画球的颜色
    //   lineColor: '#42b983', // 登录页动画线的颜色
    //   absoluteEncryption: true
    // },
    /**
     * 代码块主题
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     */
    codeTheme: 'tomorrow', // default 'tomorrow'
    // 侧边栏
    subSidebar: 'auto',
    mottos: [
      {
        "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
        "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
      },
      {
        "zh": "年轻就是无限的可能。",
        "en": "Youth means limitless possibilities."
      },
      {
        "zh": "真正的梦就是现实的彼岸。",
        "en": "Real dream is the other shore of reality."
      },
      {
        "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
        "en": "Don't worry about the vague future, just strive for the clear present."
      },
      {
        "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
        "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
      }, {
        "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
        "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
      },
      {
        "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
        "en": "Life without regret, we can only do our best to not to regret."
      }
    ],
    covers: [
      'https://pan.zealsay.com/zealsay/cover/7.jpg',
      'https://pan.zealsay.com/zealsay/cover/1.jpg',
      'https://pan.zealsay.com/zealsay/cover/2.jpg',
      'https://pan.zealsay.com/zealsay/cover/3.jpg',
      'https://pan.zealsay.com/zealsay/cover/4.jpg',
      'https://pan.zealsay.com/zealsay/cover/5.jpg',
      'https://pan.zealsay.com/zealsay/cover/6.jpg'
    ],
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    require("./public/plug-in/vuepress-plugin-kan-ban-niang/index.js"),
    require("./public/plug-in/vuepress-plugin-bgm-player/index.js"),

  ],

}