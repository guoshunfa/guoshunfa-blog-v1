# SpringBoot

· [【spring boot】2.0增加跨域请求支持 全局配置 以及局部配置](https://blog.csdn.net/b376924098/article/details/79709075)

## 图片上传

### 文件存储位置
[**目前了解的几种文件存储方式**](https://www.cnblogs.com/wangtao_20/p/3440570.html)： 以二进制的形式存储到数据库 ； 以文件路径的方式存储到数据库。

#### 以二进制的形式存储到数据库
**原理**：将上传的图片文件的文件流存储到数据库中。
**优点**：数据迁移方便。
**缺点**：会占用极大的空间，把数据库的负担弄重了。

#### 以文件路径的方式存储到数据库
**原理**：将文件的路径放入数据库，例如http://www.123.com/images/img01.png。参见springboot静态资源访问](https://www.cnblogs.com/paddix/p/8301331.html)
**优点**：方便解读。
