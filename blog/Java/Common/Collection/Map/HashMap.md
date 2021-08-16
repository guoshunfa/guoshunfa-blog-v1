---
date: 2021-08-13
tags:
 - 基础
categories: 
 - Java
---
# HashMap

> 负载因子(loadFactor)：表示 HashMap 满的程度，默认值为 0.75f，也就是说默认情况下，当 HashMap 中元素个数达到了容量的 3/4 的时候就会进行自动扩容。
>
> 临界值（threshold） = 负载因子（loadFactor） \* 容量（capacity）

## 初始化

<img src="./HashMap.assets/image-20210810161250885.png" alt="image-20210810161250885" style="zoom:50%;" />

`HashMap(int, float)`：指定初始容量、负载因子。

`HashMap(int)`：指定初始容量、使用默认的负载因子。

`HashMap()`：使用默认的负载因子。

`public HashMap(Map<? extends K, ? extends V>)`：将参数Map值，遍历赋值给HashMap。

## 扩容 resize()

