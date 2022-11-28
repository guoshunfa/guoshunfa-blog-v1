export default [
    {
        text: '软件开发项目',
        children: [
            {
                text: '搭建项目',
                children: [
                    {
                        text: '从头搭建springboot单体项目',
                        link: '/md/rd/project/build-project/construct-framework-springboot/',
                        children: [
                            {
                                text: '统一结构',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/01.unify-structure/01.unify-response-structure.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/01.unify-structure/02.specific-response-structure.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/01.unify-structure/03.unify-exception.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/01.unify-structure/04.unify-date-format.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/01.unify-structure/10.unify-services-swagger.md'
                                ],
                            },
                            {
                                text: '用户登陆鉴权管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/10.certificate-authority-framework/01.integrated-spring-security.md',
                                ],
                            },
                            {
                                text: '定时器管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/20.timer/01.integrated-quartz.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/20.timer/10.spring-timer.md'
                                ],
                            },
                            {
                                text: '日志管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/21.log-management/01.integrated-logback.md',
                                ],
                            },
                            {
                                text: '消息通知管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/22.message-queue/01.integrated-kafka.md',
                                ],
                            },
                            {
                                text: '流程管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/23.process-management/20.integrated-activiti7-basic.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/23.process-management/21.integrated-activiti7-advance.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/23.process-management/22.integrated-activiti7-conformity.md'
                                ],
                            },
                            {
                                text: '数据库管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/24.database-management/01.integrated-mysql.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/24.database-management/03.integrated-mongodb.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/24.database-management/05.integrated-redis.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/24.database-management/90.integrated-druid.md'
                                ],
                            },
                            {
                                text: '模版引擎管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/30.template-engine/10.integrated-freemarker.md',
                                ],
                            },
                            {
                                text: '单元测试',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/31.test/50.integrated-testng.md',
                                ],
                            },
                            {
                                text: '工具包',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/60.tools/01.integrated-hutool.md',
                                    '/md/rd/project/build-project/construct-framework-springboot/60.tools/53.integrated-fastjson.md'
                                ],
                            },
                            {
                                text: '版本管理',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/70.version-control/31.integrated-profile.md',
                                ],
                            },
                            {
                                text: '其他',
                                children: [
                                    '/md/rd/project/build-project/construct-framework-springboot/99.other/71.integrated-jsonp.md',
                                ],
                            }
                        ],
                    }
                ],
            },
            {
                text: '开源项目',
                children: [
                    {
                        text: '脚手架',
                        children: [
                            {
                                text: 'ruoyi',
                                children: [
                                    '/md/rd/project/open-source-projects/cli/ruoyi/ruoyi-more-menu.md',
                                ],
                            },
                        ],
                    },
                    {
                        text: '工具项目',
                        children: [
                            '/md/rd/project/open-source-projects/tool/01.opengrok.md',
                            '/md/rd/project/open-source-projects/tool/03.java-decompiler.md',
                        ],
                    }
                ],
            }
        ],
    },
]