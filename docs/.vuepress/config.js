let menu = require('./menu.js');

module.exports = {
    base: '/',
    title: '熊猫🐼',
    head: [
        ['link', { rel: 'icon', href: 'logo.jpeg' }]
    ],
    themeConfig: {
        // 你的GitHub仓库
        repo: 'https://gitee.com/guoshunfa',
        // 自定义仓库链接文字。
        repoLabel: 'Gitee',
        // 侧边栏根据标题显示
        sidebar: 'auto',
        // 顶部导航菜单
        nav: menu
    }
}
