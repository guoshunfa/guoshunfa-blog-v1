export default [
    {
        text: '程序员笔记',
        children: [
            {
                text: '软件开发笔记',
                link: '/md/rd/basic/java/java-basic/01.java-introduce.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/md/rd/',
                children: [
                    {
                        text: '软件开发基础',
                        link: '/md/rd/basic/java/java-basic/01.java-introduce.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/rd/basic',
                    },
                    {
                        text: '软件开发框架',
                        link: '/md/rd/framework/web/java/spring/01.spring/01.spring-introduce.html',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/rd/framework',
                    },
                    {
                        text: '软件开发项目',
                        link: '/md/rd/project/build-project/construct-framework-springboot/',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/rd/project',
                    },
                    {
                        text: '软件开发工具',
                        link: '/md/rd/tool/ide/idea/05.idea-debug.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/rd/tool',
                    },
                    {
                        text: '软件开发算法',
                        link: '/md/rd/algorithm/leetcode/1.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/rd/algorithm',
                    },
                ]
            },
            {
                text: '服务器运维笔记',
                link: '/md/op/02.server-module/01.mongodb/01.mongodb-introduce.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/md/op/',
                children: [
                    {
                        text: '服务组件运维',
                        link: '/md/op/02.server-module/01.mongodb/01.mongodb-introduce.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/op/02.server-module/',
                    },
                ]
            },
            // {
            //     text: '数据库管理笔记',
            //     link: '/md/dba/',
            //     // 该元素将一直处于激活状态
            //     activeMatch: '^/md/dba/',
            // },
            {
                text: '软件测试笔记',
                link: '/md/te/concept/01.black-white-box-testing.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/md/te/',
                children: [
                    {
                        text: '软件测试概念',
                        link: '/md/te/concept/01.black-white-box-testing.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/te/concept/',
                    },
                    {
                        text: '自动化测试',
                        link: '/md/te/automation/01.python/30.python-selenium-unittest.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/te/automation/',
                    },
                    {
                        text: '压力测试',
                        link: '/md/te/pressure/01.jmeter/01.jmeter-introduce.md',
                        // 该元素将一直处于激活状态
                        activeMatch: '^/md/te/pressure/',
                    },
                ]
            },
            // {
            //     text: '项目管理和产品管理',
            //     link: '/md/pm/',
            //     // 该元素将一直处于激活状态
            //     activeMatch: '^/md/pm/',
            // },
        ],
    },
    {
        text: '游戏娱乐',
        link: '/md/gamer/01.tv-series-recommendation/01.korean-drama.md',
        activeMatch: '^/md/gamer/',
    },
    {
        text: '读书分享',
        link: '/md/por/01.reading-notes-record.md',
        activeMatch: '^/md/por/',
    },
    {
        text: '工具箱',
        link: '/md/other/90.tools.md',
        activeMatch: '/md/other/90.tools.md',
    },
    {
        text: '时间线',
        link: '/md/other/01.timeline.md',
        activeMatch: '^/md/other/01.timeline',
    },
    {
        text: '留言板',
        link: '/md/other/98.message-board'
    },
    {
        text: '我的',
        children: [
            {
                text: 'Gitee',
                link: 'https://gitee.com/guoshunfa'
            },
            {
                text: '博客园',
                link: 'https://www.cnblogs.com/guoshunfa'
            },
        ]
    },
]