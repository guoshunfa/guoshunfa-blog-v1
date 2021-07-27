# docker 启动jar包

## 编写dockerFile文件

```dockerfile
# 引用哪个镜像，没有镜像则pull
FROM centos:7
# 为Dockerfile中所有RUN、CMD、ENTRYPOINT、COPY和ADD指令设定工作目录
WORKDIR /usr
# 执行命令(这里创建了一个目录)
RUN mkdir /usr/local/java
# 和copy一样，复制文件到指定目录，但是copy不能解压，add自动解压
ADD jdk-8u111-linux-x64.tar.gz /usr/local/java
# 重命名(不知道文件名可以现在宿主机解压后看一下)
RUN ln -s /usr/local/java/jdk1.8.0_111 /usr/local/java/jdk 
# 设置环境变量 
ENV JAVA_HOME /usr/local/java/jdk 
ENV JRE_HOME ${JAVA_HOME}/jre 
ENV CLASSPATH .:${JAVA_HOME}/lib:${JRE_HOME}/lib 
ENV PATH ${JAVA_HOME}/bin:$PATH 

# 创建一个目录
RUN mkdir /demo
# 将jar包copy到指定目录
ADD job.jar /demo/app.jar
# 启动命令
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","-Xmx512m","-Xms512m","/demo/app.jar"]

```

## 下载需要的外部包

​		这个场景我只用到了jdk。

## 执行dockerFile文件，构建镜像

```shell
docker build -t my/demo .
```

**注意最后的 .**  表示 Dockerfile 文件在当前目录下

my/demo  构建之后镜像名称

## 运行容器

```shell
docker run -d --name demo -p 8080:8080 my/demo
```



