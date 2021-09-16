// 插件配置
module.exports = [
  // 本地插件
  [require('../plugins/love-me'), { // 鼠标点击爱心特效
    color: '#11a8cd', // 爱心颜色，默认随机色
    excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  }],

  ['vuepress-plugin-baidu-autopush'], // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    'thirdparty-search',
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: '在magi中搜索',
          frontUrl: 'https://magi.com/search?q=',
        },
        {
          title: '在Bing中搜索',
          frontUrl: 'https://cn.bing.com/search?q=',
        },
        {
          title: '在Github中搜索',
          frontUrl: 'https://github.com/search?q=',
        },
        {
          title: '查找源码',
          frontUrl: 'http://coderead.pandacode.cn:82/search?searchall=true&defs=',
        },
      ],
    },
  ],

  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '503f098e7e5b3a5b5d8c5fc2938af002',
    },
  ],
  // https://valine.js.org/ valine官网
  // https://console.leancloud.cn/ 云数据库地址
  // 
  [
    // '../plugins/vuepress-plugin-comment',
    'vuepress-plugin-comment',
    {
      choosen: 'valine',
      options: {
        el: '#valine-vuepress-comment',
        appId: '56qNdPkQtulKT7LCUbwIhWnQ-gzGzoHsz',
        appKey: 'ilEPiCAP2sdCUWk5WsWonM7v',
        placeholder: '评论吧',           // 评论框占位符
        avatar: 'robohash',           // 评论用户的头像类型
        path: '<%- frontmatter.commentid || frontmatter.permalink %>',
        highlight: true,         // 代码高亮
        recordIP: true,         // 记录评论者的IP
        enableQQ: true,   //是否启用昵称框自动获取QQ昵称和QQ头像, 默认关闭，需博/网站主主动启
        meta: ['nick', 'mail'], // 评论者相关属性。
        requiredFields: ['nick', 'mail'], // 设置必填项，默认匿名
        visitor: true, // 文章访问量统计。
        // 设置Bilibili表情包地址
        emojiCDN: '//i0.hdslb.com/bfs/emote/',
        // 表情title和图片映射
        emojiMaps: {
          "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
          "tv_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
          "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
          "tv_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
          "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
          "tv_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
          "tv_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
          "tv_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
          "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
          "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
          "tv_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
          "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
          "tv_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
          "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
          "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
          "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
          "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
          "tv_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
          "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
          "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
          "tv_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
          // ... 更多表情
        }
      }
    }
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
  // 流程图 API：https://mermaid-js.github.io/mermaid/#/README
  [
    'vuepress-plugin-mermaidjs'
  ]
]
