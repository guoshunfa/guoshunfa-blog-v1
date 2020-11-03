# **SpringBoot**

· [快速搭建](https://www.cnblogs.com/pengyan-9826/p/8093099.html)

· [【spring boot】2.0增加跨域请求支持 全局配置 以及局部配置](https://blog.csdn.net/b376924098/article/details/79709075)

· [集成JDBC连接数据库](https://blog.csdn.net/catoop/article/details/50507516)

#**常见问题**

· [Element 'dependencies' cannot have character\[children\],because the type's content type is elemen](https://www.cnblogs.com/jpfss/p/10857622.html)

表 1 配图

· application配置上加debug=true，可以查看详细的报错内容。

· 启动类上加@SpringBootApplication(exclude= {DataSourceAutoConfiguration.class})。（可能性较高。）