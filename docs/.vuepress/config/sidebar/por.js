export default [
    {
        text: '读书日志',
        children: ['/md/por/01.reading-notes-record.md'],
    },
    {
        text: '心理',
        children: [
            '/md/por/12.psychology/01.thinking-model.md',
            '/md/por/12.psychology/02.way-of-doing-things.md',
            '/md/por/12.psychology/03.always-be-awake.md',
            {
                text: '读书笔记',
                link: '/md/por/12.psychology/10.reading-notes/01.deliberate-practice-1.md',
                children: [
                    '/md/por/12.psychology/10.reading-notes/01.deliberate-practice-1.md',
                    '/md/por/12.psychology/10.reading-notes/02.crocodile-who-will-die-in-100-days-1.md'
                ],
            },
        ],
    },
    {
        text: '道家',
        children: [
            '/md/por/20.taoists/01.cultivate-one-is-body-and-mind.md',
            {
                text: '读书笔记',
                children: [
                    '/md/por/20.taoists/12.taoist-arts-and-crafts/01.eight-diamond-gong.md',
                    '/md/por/20.taoists/12.taoist-arts-and-crafts/02.flat-swing-work.md'
                ],
            },
        ],
    },
]