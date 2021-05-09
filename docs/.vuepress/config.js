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
            // { text: '首页', link: '/' },
            {
                text: 'Java',
                items: [
                    { text: '常用操作', link: '/blog/java/Java-Common/' },
                    { text: '集合', link: '/blog/java/Java-Collection/' },
                    { text: '工具包', link: '/blog/java/Java-Toolkit/' },
                ]
            },
            {
                text: 'Java 框架/组件',
                items: [
                    {
                        text: 'Spring',
                        items: [
                            { text: 'Spring 事务', link: '/blog/Java-Frame/Spring/Spring-Transaction' },
                            { text: 'Spring AOP', link: '/blog/Java-Frame/Spring/Spring-AOP' },
                            { text: 'Spring IOC', link: '/blog/Java-Frame/Spring/Spring-IOC' },
                            { text: 'Spring JDBCTemplate', link: '/blog/Java-Frame/Spring/Spring-JDBCTemplate' },
                        ]
                    },
                    {
                        text: 'SpringBoot',
                        items: [
                            { text: 'SpringBoot 注解使用说明', link: '/blog/Java-Frame/SpringBoot/SpringBoot-annotation' },
                            { text: 'SpringBoot 集成Lombok', link: '/blog/Java-Frame/SpringBoot/SpringBoot-Lombok' },
                        ]
                    },
                    {
                        text: 'SpringCloud',
                        items: [
                            { text: 'SpringCloud', link: '/blog/Java-Frame/springcloud/springcloud' },
                        ]
                    },
                    {
                        text: 'Tomcat',
                        items: [
                            { text: 'Tomcat 安装/服务启动与暂停', link: '/blog/Java-Frame/Tomcat/Tomcat-Init' },
                            { text: 'Tomcat 启动web项目', link: '/blog/Java-Frame/Tomcat/Tomcat-Web' },
                        ]
                    },
                    {
                        text: 'IDE',
                        items: [
                            { text: 'IDEA 使用说明', link: '/blog/Java-Frame/IDE/IDEA' },
                        ]
                    },
                ]
            }, {
                text: '数据库',
                items: [
                    {
                        text: 'MongoDB',
                        items: [
                            { text: 'MongoDB 安装/服务暂停和启动', link: '/blog/Database/MongoDB/MongoDB-Init' }
                        ]
                    },
                    {
                        text: 'Mysql',
                        items: [
                            { text: 'Mysql 安装/服务暂停和启动', link: '/blog/Database/Mysql/Mysql-Init' },
                            { text: 'Mysql sql使用说明', link: '/blog/Database/Mysql/Mysql-SQL' },
                            { text: 'Mysql 可视化软件Workbench使用说明', link: '/blog/Database/Mysql/Mysql-Workbench' },
                            { text: 'Mysql 控制台使用说明', link: '/blog/Database/Mysql/Mysql-Console' },
                            { text: 'Mysql 常见错误', link: '/blog/Database/Mysql/Mysql-Error' },
                        ]
                    },
                    {
                        text: 'Redis',
                        items: [
                            { text: 'Redis 安装/服务暂停和启动', link: '/blog/Database/Redis/Redis-Init' }
                        ]
                    },
                    {
                        text: '达梦数据库',
                        items: [
                            { text: '达梦数据库', link: '/blog/Database/DM/DM/' }
                        ]
                    }
                ]
            }, {
                text: 'Web',
                items: [
                    {
                        text: 'Vue',
                        items: [
                            { text: 'Vue', link: '/blog/Web/Vue/Vue/' },
                            { text: 'Vuepress', link: '/blog/Web/Vue/Vuepress/' },
                        ]
                    },
                    {
                        text: 'CSS',
                        items: [
                            { text: 'CSS', link: '/blog/Web/CSS/CSS/' },
                        ]
                    },
                    {
                        text: 'IDE',
                        items: [
                            { text: 'VSCode', link: '/blog/Web/IDE/VSCode/' },
                        ]
                    },
                    {
                        text: 'Android',
                        items: [
                            { text: 'Android 参考', link: '/blog/Web/Android/Reference/' },
                        ]
                    },
                ]
            }, {
                text: '直播',
                items: [
                    { text: 'SRS流媒体直播', link: '/blog/Live-Stream/SRS/' },
                    { text: 'WebSocket', link: '/blog/Live-Stream/WebSocket/' },
                    { text: 'AR', link: '/blog/Live-Stream/AR/' },
                    { text: 'JavaCV', link: '/blog/Live-Stream/JavaCV/' },
                ]
            }, {
                text: '操作系统',
                items: [
                    { text: 'Linux', link: '/blog/OS/Linux/' },
                    { text: 'Mac', link: '/blog/OS/Mac/' },
                    { text: '虚拟机', link: '/blog/OS/Virtual-Machine/' },
                    { text: '银河麒麟', link: '/blog/OS/Kylin/' },
                ]
            }, {
                text: 'Markdown',
                items: [
                    { text: 'Markdown 语法使用说明', link: '/blog/Markdown/Markdown/' },
                ]
            }, {
                text: '面试问题',
                items: [
                    { text: 'Int和Integer的区别', link: '/blog/interview/java/Int-Integer' },
                    { text: 'Sstring、Stringbuffer、Stringbuiler的区别', link: '/blog/interview/java/String-Stringbuffer-Stringbuiler' },
                    { text: '创建线程的三种方式', link: '/blog/interview/java/Thread' },
                    { text: '集合', link: '/blog/interview/java/Collection' },
                ]
            },
        ]
    }
}
