export default [
    {
        text: '程序员笔记',
        children: [
            {
                text: '软件开发笔记',
                link: '/md/rd/basic/java/java-basic/01.java-introduce.md',
                // 该元素将一直处于激活状态
                activeMatch: '^/md/rd/',
            },
            // {
            //     text: '服务器运维笔记',
            //     link: '/md/op/',
            //     // 该元素将一直处于激活状态
            //     activeMatch: '^/md/op/',
            // },
            // {
            //     text: '数据库管理笔记',
            //     link: '/md/dba/',
            //     // 该元素将一直处于激活状态
            //     activeMatch: '^/md/dba/',
            // },
            // {
            //     text: '软件测试笔记',
            //     link: '/md/te/',
            //     // 该元素将一直处于激活状态
            //     activeMatch: '^/md/te/',
            // },
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
        text: '留言板',
        link: '/md/other/98.message-board'
    },
]