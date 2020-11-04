module.exports = {
    base: '/document-backup',
    themeConfig: {
        // 你的GitHub仓库
        repo: 'https://github.com/guoshunfa/document-backup',
        // 自定义仓库链接文字。
        repoLabel: 'GitHub',
        // 侧边栏根据标题显示
        sidebar: 'auto',
        // 顶部导航菜单
        nav: [
            { text: '首页', link: '/' },
            // 模块内含多个
            {
                text: '后端框架',
                items: [
                    { text: 'Apollo', link: '/blog/framework/apollo/' },
                    { text: 'MQ', link: '/blog/framework/mq/' },
                    { text: 'Nacos', link: '/blog/framework/nacos/' },
                    { text: 'Ngnix', link: '/blog/framework/ngnix/' },
                    { text: 'SpringBoot', link: '/blog/framework/springboot/' },
                    { text: 'SpringCloud', link: '/blog/framework/springcloud/' },
                ]
            },{
                text: '数据库',
                items: [
                    { text: 'MongoDB', link: '/blog/database/mongodb/' },
                    { text: 'Mysql', link: '/blog/database/mysql/' },
                    { text: 'Redis', link: '/blog/database/redis/' },
                ]
            },{
                text: 'java',
                items: [
                    { text: '常用操作', link: '/blog/java/common/' }
                ]
            },{
                text: 'web',
                items: [
                    { text: 'css', link: '/blog/web/css/' },
                    { text: 'vue', link: '/blog/web/vue/' },
                ]
            },{
                text: '直播',
                items: [
                    { text: 'srs流媒体直播', link: '/blog/live-stream/srs/' },
                    { text: 'WebSocket', link: '/blog/live-stream/web-socket/' },
                    { text: 'AR', link: '/blog/live-stream/ar/' },
                    { text: 'JavaCV', link: '/blog/live-stream/java-cv/' },
                ]
            },{
                text: '操作系统',
                items: [
                    { text: 'Linux', link: '/blog/os/linux/' },
                    { text: 'Mac', link: '/blog/os/mac/' },
                    { text: '虚拟机', link: '/blog/os/virtual-machine/' },
                ]
            },{
                text: '开发工具',
                items: [
                    { text: 'Idea', link: '/blog/tool/idea/' },
                ]
            },
        ]
    }
}
