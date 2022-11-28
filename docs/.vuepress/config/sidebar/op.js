export default [
    {
        text: '运维人员笔记',
        children: [
            {
                text: '服务组件运维',
                children: [
                    {
                        text: 'mongodb数据库',
                        children: [
                            '/md/op/02.server-module/01.mongodb/01.mongodb-introduce.md',
                            '/md/op/02.server-module/01.mongodb/02.mongodb-command.md',
                            '/md/op/02.server-module/01.mongodb/03.mongodb-js-script.md',
                            '/md/op/02.server-module/01.mongodb/04.mongodb-stored-procedure.md',
                            '/md/op/02.server-module/01.mongodb/50.mongodb-error-record.md'
                        ],
                    },
                    {
                        text: 'mysql数据库',
                        children: [
                            '/md/op/02.server-module/02.mysql/01.mysql-introduce.md',
                            '/md/op/02.server-module/02.mysql/02.sql-command.md',
                            '/md/op/02.server-module/02.mysql/03.mysql-db-script.md',
                        ],
                    },
                    {
                        text: 'redis数据库',
                        children: [
                            '/md/op/02.server-module/03.redis/01.redis-introduce.md',
                            '/md/op/02.server-module/03.redis/10.redis-error-record.md',
                        ],
                    },
                    {
                        text: 'oracle数据库',
                        children: [
                            '/md/op/02.server-module/04.oracle/01.oracle-introduce.md',
                            '/md/op/02.server-module/04.oracle/10.oracle-stored-procedure.md',
                        ],
                    },
                    {
                        text: 'tomcat web应用服务器',
                        children: [
                            '/md/op/02.server-module/10.tomcat/01.tomcat-introduce.md',
                        ],
                    },
                    {
                        text: 'nginx web应用服务器',
                        children: [
                            '/md/op/02.server-module/11.nginx/01.nginx-introduce.md',
                            '/md/op/02.server-module/11.nginx/02.nginx-deploy-static-files.md'
                        ],
                    },
                    {
                        text: 'kafka 消息队列',
                        children: [
                            '/md/op/02.server-module/20.kafka/01.kafka-introduce.md',
                            '/md/op/02.server-module/20.kafka/02.kafka-command.md',
                            '/md/op/02.server-module/20.kafka/10.kafka-error-record.md',
                        ],
                    },
                    {
                        text: 'git版本控制',
                        children: [
                            '/md/op/02.server-module/30.git/01.git-command.md',
                            '/md/op/02.server-module/30.git/02.git-error-record.md',
                        ],
                    },
                    {
                        text: 'gitlab仓库管理',
                        children: [
                            '/md/op/02.server-module/31.gitlab/01.gitlab-docker-deploy.md',
                            '/md/op/02.server-module/31.gitlab/02.gitlab-password.md',
                            '/md/op/02.server-module/31.gitlab/20.gitlab-port.md',
                            '/md/op/02.server-module/31.gitlab/50.gitlab-gitlab-runner-register.md',
                            '/md/op/02.server-module/31.gitlab/51.gitlab-gitlab-runner-change-user.md',
                        ],
                    },
                    {
                        text: 'svn版本控制',
                        children: [
                            '/md/op/02.server-module/32.svn/90.svn-error-record.md',
                        ],
                    },
                    {
                        text: 'nexus maven仓库',
                        children: [
                            '/md/op/02.server-module/40.nexus/01.nexus-introduce.md',
                        ],
                    },
                    {
                        text: 'jmeter压力测试',
                        children: [
                            '/md/op/02.server-module/41.jmeter/01.jmeter-introduce.md',
                            '/md/op/02.server-module/41.jmeter/02.jmeter-demo.md',
                        ],
                    },
                    {
                        text: 'jenkins持续集成工具',
                        children: [
                            '/md/op/02.server-module/70.jenkins/01.jenkins-introduce.md',
                        ],
                    },
                    {
                        text: 'docker',
                        children: [
                            '/md/op/02.server-module/90.docker/01.docker-introduce.md',
                            '/md/op/02.server-module/90.docker/02.docker-command.md',
                            '/md/op/02.server-module/90.docker/05.docker-mac-install.md',
                            '/md/op/02.server-module/90.docker/10.docker-change-port.md',
                            '/md/op/02.server-module/90.docker/11.docker-add-port.md',
                            '/md/op/02.server-module/90.docker/90.docker-error-record.md',
                        ],
                    },
                ],
            }
        ],
    },
]