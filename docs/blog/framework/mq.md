# MQ

## 常用命令

sudo rabbitmqctl list\_users // 展示RabbitMQ中用户信息

sudo rabbitmqctl set\_user\_tags 用户名 administrator // 将当前用户名更改权限为administrator （管理员）。

sudo rabbitmqctl add\_user 用户名 密码 // 添加用户

### **启动：(暂时)**

cd /usr/local/Cellar/rabbitmq/3.8.8/sbin

sudo ./rabbitmq-server

## **安装配置**

 [**Mac安装RabbitMQ 配置rabbitmqctl**](https://blog.csdn.net/Coxhuang/article/details/89765797)

## 常见错误

（命令报错，先尝试在命令行前加入sudo，切换权限。）

 [**rabbitmq 启动 报"Error when reading /Users/xxx/.erlang.cookie: eacces**](https://www.cnblogs.com/wupeng88/p/12599730.html)

[**rabbitmq用户管理(Not management user问题解决)**](https://blog.csdn.net/qq_24095055/article/details/97001679)
