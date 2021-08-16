# MongoDB



[Mongodb存储读取Word文档](https://www.php.cn/mysql-tutorials-128285.html)

[mongodb用户创建以及权限控制](https://www.jianshu.com/p/62736bff7e2e)

[SpringBoot中MongoDB注解概念及使用](https://blog.csdn.net/tianyaleixiaowu/article/details/73530679)



## [MongoDB只查询一个字段](https://www.cnblogs.com/navy235/archive/2012/05/03/2480956.html)

```sql
db.users.find({}, {"userName":1,"_id":0}) ;1表示取该字段；0不取，因为mongodb默认查询——id所以这里把——id设置为不查询
```

## 根据id查询

```sql
db.getCollection("test").find({"_id":ObjectId("5f5231b36172e874326a559e")})
```

## ObjectId类型转换成string

```shell
new ObjectId().str  
```

