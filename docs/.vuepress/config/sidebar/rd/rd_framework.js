export default [
    {
        text: '软件开发框架',
        children: [
            {
                text: 'web开发框架',
                children: [
                    {
                        text: 'Java',
                        children: [
                            {
                                text: 'Spring生态',
                                children: [
                                    {
                                        text: 'Spring框架',
                                        children: [
                                            '/md/rd/framework/web/java/spring/01.spring/01.spring-introduce.md',
                                            '/md/rd/framework/web/java/spring/01.spring/03.spring-scheduled.md',
                                            '/md/rd/framework/web/java/spring/01.spring/99.spring-event.md'
                                        ],
                                    },
                                    {
                                        text: 'SpringBoot框架',
                                        children: [
                                            '/md/rd/framework/web/java/spring/02.spring-boot/01.spring-boot-introduce.md',
                                        ],
                                    },
                                    {
                                        text: 'SpringSecurity框架',
                                        children: [
                                            '/md/rd/framework/web/java/spring/10.spring-security/01.spring-security-introduce.md',
                                            '/md/rd/framework/web/java/spring/10.spring-security/02.spring-security-use.md',
                                        ],
                                    },
                                ],
                            },
                            {
                                test: '其他',
                                children: [
                                    {
                                        test: 'mybatis',
                                        children: [
                                            '/md/rd/framework/web/java/other/06.mybatis/01.mybatis-introduce.md',
                                            '/md/rd/framework/web/java/other/06.mybatis/02.mybatis-configuration.md',
                                            '/md/rd/framework/web/java/other/06.mybatis/03.mybatis-xml.md',
                                            '/md/rd/framework/web/java/other/06.mybatis/04.mybatis-dynamic-sql.md',
                                            '/md/rd/framework/web/java/other/06.mybatis/05.mybatis-java-api.md',
                                            '/md/rd/framework/web/java/other/06.mybatis/06.mybatis-statement-builders.md',
                                            '/md/rd/framework/web/java/other/06.mybatis/07.mybatis-logging.md',
                                            '/md/rd/framework/web/java/other/06.mybatis/50.mybatis-plus-introduce.md'
                                        ]
                                    }
                                ]
                            }
                        ],
                    },
                ],
            },
        ],
    },
]