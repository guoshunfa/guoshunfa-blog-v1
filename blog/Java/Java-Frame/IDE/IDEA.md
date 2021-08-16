---
date: 2021-08-13
tags:
 - IDE
categories: 
 - Java
---
# IDEA 使用说明

## 如何将Spring Boot打成war包

Springboot由于使用内置tomact，建议打成jar方便一点，但在这里我着重讲的是Springboot打war包。

第一步：修改packaging为war包；

![修改packaging为war包](./img/SpringBoot-war-01.png)

第二步：删除默认的tomact，这里有两种方式删除；

(1).第一种方式：

![修改packaging为war包](./img/SpringBoot-war-02.png)

注意：如果当前项目还需使用jsp，则需设置如下：

![修改packaging为war包](./img/SpringBoot-war-03.png)

(2).第二种方式：直接添加如下配置即可；

```
<!--部署成war包时开启↓↓↓↓-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
</dependency>
<dependency>
    <groupId>org.apache.tomcat.embed</groupId>
    <artifactId>tomcat-embed-jasper</artifactId>
    <scope>provided</scope>
</dependency>
<!--部署成war包时开启↑↑↑↑-->
```

第三步：使用外置tomact部署

1、继承SpringBootServletInitializer

```
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
public class Chapter05Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Chapter05Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Chapter05Application.class, args);
    }
}
```

这个类的作用与在web.xml中配置负责初始化Spring应用上下文的监听器作用类似，只不过在这里不需要编写额外的XML文件了。

2.pom.xml修改tomcat相关的配置
　　首先介绍下maven中scope依赖范围的概念，因为后续涉及到这个会有问题。

　　依赖范围就是用来控制依赖和三种classpath(编译classpath，测试classpath、运行classpath)的关系，Maven有如下几种依赖范围：

compile:编译依赖范围。如果没有指定，就会默认使用该依赖范围。使用此依赖范围的Maven依赖，对于编译、测试、运行三种classpath都有效。典型的例子是spring-code,在编译、测试和运行的时候都需要使用该依赖。

test: 测试依赖范围。使用次依赖范围的Maven依赖，只对于测试classpath有效，在编译主代码或者运行项目的使用时将无法使用此依赖。典型的例子是Jnuit,它只有在编译测试代码及运行测试的时候才需要。

provided:已提供依赖范围。使用此依赖范围的Maven依赖，对于编译和测试classpath有效，但在运行时候无效。典型的例子是servlet-api,编译和测试项目的时候需要该依赖，但在运行项目的时候，由于容器以及提供，就不需要Maven重复地引入一遍。

第四步：使用idea 工具生成war包；

![修改packaging为war包](./img/SpringBoot-war-04.png)

![修改packaging为war包](./img/SpringBoot-war-05.png)

