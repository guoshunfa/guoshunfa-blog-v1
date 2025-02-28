---
date: 2021-11-11 09:42:33
permalink: /pages/51a891/
author: 
  name: 熊猫代码
  link: https://pandacode.cn
tags: 
  - null
title: 数据库并发修改问题
---

# 乐观锁解决数据库并发修改问题

## 1. 相关信息描述

### 1.1. 数据库并发场景描述

表中有一属性，记录着当前记录被查询的次数。每一次查询之后会把处理过程甩给event（观察者模式）。如果一段时间内访问量变大会出现并发问题。并发会导致数据的不准确。

### 1.2. 什么是乐观锁

> 乐观锁（ Optimistic Locking ） 相对[悲观锁](https://baike.baidu.com/item/悲观锁)而言，乐观锁机制采取了更加宽松的加锁机制。悲观锁大多数情况下依靠数据库的锁机制实现，以保证操作最大程度的独占性。但随之而来的就是数据库性能的大量开销，特别是对长[事务](https://baike.baidu.com/item/事务)而言，这样的开销往往无法承受。而乐观锁机制在一定程度上解决了这个问题。乐观锁，大多是基于数据版本（ Version ）记录机制实现。何谓数据版本？即为数据增加一个版本标识，在基于数据库表的版本解决方案中，一般是通过为数据库表增加一个 “version” 字段来实现。读取出数据时，将此版本号一同读出，之后更新时，对此版本号加一。此时，将提交数据的版本数据与数据库表对应记录的当前版本信息进行比对，如果提交的数据版本号等于数据库表当前版本号，则予以更新，否则认为是过期数据。

## 2. 实现

### 2.1.  场景描述

SpringBoot + Mysql

### 2.2. 数据库表调整

加入属性version，用来做乐观锁验证。

### 2.3. sql调整

```sql
update test_user set age=age+1,version=version+1 where id=#{id} and version=#{version};
```

### 2.4. 服务层逻辑加入乐观锁

```java
public void userAgeAddOne(String id) {
    TestUser testUser = userTestMapper.findById(id);

    int i = userTestMapper.userAgeAddOne(testUser.getId(), testUser.getVersion());
    if (i == 0) {
        userAgeAddOne(id);
    } else {
        return ;
    }
}
```

