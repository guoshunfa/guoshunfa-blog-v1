let database = require('./menu/database.js');
let java = require('./menu/java.js');
let java_frame = require('./menu/java-frame.js');
let live_steam = require('./menu/live-steam.js');
let markdown = require('./menu/markdown.js');
let os = require('./menu/os.js');
let web = require('./menu/web.js');

module.exports = {
    base: '/document-backup/',
    themeConfig: {
        // 你的GitHub仓库
        repo: 'https://github.com/guoshunfa/document-backup',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        // 侧边栏根据标题显示
        sidebar: 'auto',
        // 顶部导航菜单
        nav: [
            java,
            java_frame,
            database,
            web,
            live_steam,
            markdown,
            os
        ]
    }
}
