// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link',
    { rel: 'icon', href: 'https://file.pandacode.cn//panda/202109101822245.png' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。',
    },
  ],
  ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ['script', { src: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
  ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
]
