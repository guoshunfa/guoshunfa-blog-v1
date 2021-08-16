---
date: 2021-08-13
tags:
 - TestNG
categories: 
 - 测试
---
# TestNG - DataProvider（注解）数据提供者

> 测试参数化能让测试大量的数据集变为可能，也大大方便数据的修改和测试脚本的编写，测试参数化让数据和脚本分离开来，方便后续的维护。
> 这一篇先来说说数据提供者DataProvider

**数据提供者@DataProvider**
注解@DataProvider在参数化测试中起到重要的作用，该注解下的函数返回数据类型需要时Object[][]，看例子如何实现：

## 使用

@DataProvider函数，需要定义属性name

```java
@DataProvider(name = "testcase")
public Object[][] dataProvider(){
    return new Object[][]{
            {"小李"},
            {"小赵"},
            {"小明"},
            {"小周"}
    };
}
```
```java
// @Test测试用例，属性dataProvider需要指定对应的数据提供者名称
@Test(dataProvider = "testcase")
public void testcase(String name){
    System.out.println(name);
}

```
执行结果

```
create test :com.testproj.Demo.TestDataProvider@38bc8ab5
[TestNG] Running:
  E:\OPPO\JavaProject\TestNGProj\res\testNG.xml
小李
小赵
小明
小周
```

## 备注

### 注解使用

1. DataProvider注解name属性和Test对应dataProvider属性可以进行绑定。

### 返回结构`Object[][]`

1. `Object[][]`每层都会调用一次测试用例。上面的例子，会调用四次对应的testcase测试用例。

2. `Object[][]`一层可以放入多个属性，例：

```java
@DataProvider(name = "testcase")
public Object[][] dataProvider(){
    return new Object[][]{
            {"小李", 19, "男", 187},
            {"小王", 19, "女", 167},
            {"小组", 19, "男", 174},
            {"小六", 19, "男", 179}
    };
}
@Test(dataProvider = "testcase")
public void testcase(String name, long age, String sex, long height){
    System.out.println("姓名："+name+"；年龄："+age+"；性别："+sex+"；身高："+height);
}
```

3. `Object[][]`每层的参数数量和参数类型必须相同。



## 提供数据方式

1. 硬编码在Java源码上。
2. txt文本文件。
3. 配置文件properties。
4. excel文档。
5. 数据库。
6. 网络中。

