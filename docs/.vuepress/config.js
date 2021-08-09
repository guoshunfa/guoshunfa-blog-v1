let database = require('./menu/database.js');
let java = require('./menu/java.js');
let java_frame = require('./menu/java-frame.js');
let os = require('./menu/os.js');
let web = require('./menu/web.js');
let test = require('./menu/test.js');
let tool = require('./menu/tool.js');
let operation_maintenance = require('./menu/operation-maintenance.js');
let other = require('./menu/other.js');
let design_patterns = require('./menu/design-patterns.js');

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
            design_patterns,
            java_frame,
            database,
            test,
            web,
            operation_maintenance,
            os,
            other,
            tool
        ]
    }
}
