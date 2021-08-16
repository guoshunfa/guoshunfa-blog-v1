module.exports = [
    "",
    {
        title: "基础知识",
        sidebarDepth: 1,
        children: [
            {
                title: "抽象类/接口",
                sidebarDepth: 2,
                children: [
                    "Common/Abstract-Interface/Abstract",
                    "Common/Abstract-Interface/Interface"
                ],
            },
            {
                title: "集合",
                sidebarDepth: 2,
                children: [
                    {
                        title: "List",
                        sidebarDepth: 3,
                        children: [

                        ],
                    },
                    {
                        title: "Set",
                        sidebarDepth: 3,
                        children: [

                        ],
                    },
                    {
                        title: "Map",
                        sidebarDepth: 3,
                        children: [
                            "Common/Collection/Map/HashMap"
                        ],
                    },
                ],
            },
            {
                title: "设计模式",
                sidebarDepth: 2,
                path: '/blog/Java/Common/Design-Patterns/',
                children: [
                    {
                        title: "创建者模式",
                        sidebarDepth: 3,
                        children: [
                            "Common/Design-Patterns/Factory-Mode",
                            // "Common/Design-Patterns/Abstract-Factory-Mode",
                            "Common/Design-Patterns/Singleton-Mode",
                            "Common/Design-Patterns/Builder-Mode",
                            "Common/Design-Patterns/Prototype-Mode"
                        ],
                    },
                    {
                        title: "结构型模式",
                        sidebarDepth: 3,
                        children: [
                            "Common/Design-Patterns/Adapter-Pattern",
                            "Common/Design-Patterns/Decorator-Pattern",
                            "Common/Design-Patterns/Agency-Model",
                            "Common/Design-Patterns/Appearance-Mode",
                            "Common/Design-Patterns/Bridge-Mode",
                            "Common/Design-Patterns/Combination-Mode",
                            "Common/Design-Patterns/Flyweight-Model",
                        ],
                    },
                    {
                        title: "行为型模式",
                        sidebarDepth: 3,
                        children: [
                            "Common/Design-Patterns/Strategy-Mode",
                            "Common/Design-Patterns/Template-Method-Pattern",
                            "Common/Design-Patterns/Observer-Mode",
                            "Common/Design-Patterns/Iterative-Subpattern",
                            "Common/Design-Patterns/Chain-Of-Responsibility-Model",
                            "Common/Design-Patterns/Command-Mode",
                            "Common/Design-Patterns/Memo-Mode",
                            "Common/Design-Patterns/State-Mode",
                            "Common/Design-Patterns/Visitor-Mode",
                            "Common/Design-Patterns/Intermediary-Model",
                            "Common/Design-Patterns/Interpreter-Mode",
                        ],
                    },
                ],
            },
            {
                title: "IO",
                sidebarDepth: 2,
                children: [
                    "Common/IO/file",
                ],
            },
            {
                title: "JSON",
                sidebarDepth: 2,
                children: [
                    {
                        title: "FastJson",
                        sidebarDepth: 3,
                        children: [
                            "Common/JSON/FastJson/Fastjson-Use",
                            "Common/JSON/FastJson/Fastjson-JSONField-JSONType",
                            "Common/JSON/FastJson/Fastjson-Serialize",
                            "Common/JSON/FastJson/Fastjson-Deserialize",
                            "Common/JSON/FastJson/Fastjson-SerializeFilter",
                            "Common/JSON/FastJson/Fastjson-SerializerFeature"
                        ],
                    },
                ],
            },
            {
                title: "基本数据类型",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "线程/线程池",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "异常/自定义异常",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "注解/自定义注解",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "反射",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "事务",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "锁",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "session/cookie",
                sidebarDepth: 2,
                children: [
                ],
            },
            {
                title: "换位符号 >> <<",
                sidebarDepth: 2,
                children: [
                ],
            },
        ],
    },
    {
        title: "框架",
        sidebarDepth: 2,
        children: [
            {
                title: "Spring",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/Spring/Spring-Validator",
                    "Java-Frame/Spring/Spring-Event",
                    "Java-Frame/Spring/Spring-Transaction"
                ],
            },
            {
                title: "SpringBoot",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/SpringBoot/SpringBoot-Init",
                    "Java-Frame/SpringBoot/SpringBoot-Annotation",
                    "Java-Frame/SpringBoot/SpringBoot-Tool"
                ],
            },
            {
                title: "SpringCloud",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/SpringCloud/SpringCloud",
                ],
            },
            {
                title: "Tomcat",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/Tomcat/Tomcat-Init",
                    "Java-Frame/Tomcat/Tomcat-run-web",
                ],
            },
            {
                title: "Quartz",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/Quartz/Quartz-Database",
                    "Java-Frame/Quartz/Quartz-Up",
                ],
            },
            {
                title: "Maven",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/Maven/Maven-Pom",
                ],
            },
            {
                title: "Log框架",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/Log/Logback",
                ],
            },
            {
                title: "IDE",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/IDE/IDEA",
                ],
            },
            {
                title: "其他",
                sidebarDepth: 3,
                children: [
                    "Java-Frame/Other/apollo",
                    "Java-Frame/Other/kafka",
                    "Java-Frame/Other/mq",
                    "Java-Frame/Other/nacos",
                    "Java-Frame/Other/nginx",
                ],
            },
        ],
    },
    {
        title: "学习工具",
        sidebarDepth: 2,
        children: [
            "Tool/Awesome-Java.md"
        ]
    }
]

