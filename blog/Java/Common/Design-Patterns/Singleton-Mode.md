---
date: 2021-08-13
tags:
 - Java设计模式
categories: 
 - Java
---
# 单例模式

## 概念

某个类在整个系统中只能有一个实例对象可以被获取和使用。

实现要点：

- 构造器私有

- 含有一个该类的静态变量来保存这个唯一的实例

- 对外提供获取该实例对象的方式

  

  单例模式分为饿汉式和懒汉式。

## 饿汉式

> 直接创建对象，不存在线程安全问题。

### 静态常量方式

- 优点：这种写法比较简单，就是在类加载的时候就完成实例化。避免了线程同步问题。

- 缺点：在类加载的时候就完成实例化，没有达到Lazy Loading的效果。如果从未使用过这个实例，则会造成内存的浪费。

```java
public class Single {
    private Single() {};
    private static Single single = new Single();
    public static Single newInstance(){
        return single;
    }
}
```

### 静态代码块方式

将类实例化的过程放在了静态代码块中，也是在类加载的时候，就执行静态代码块中的代码，初始化类的实例。

优缺点和上面的方式是一样的。
    

```java
//饿汉式：静态代码块
public class SingleTon {
  private static SingleTon singleTon;
  // 在静态代码块执行时，创建单例对象
  static {
      singleTon = new SingleTon();
  }
  private SingleTon(){}
  public static SingleTon getSingleTon(){
      return singleTon;
  }
}
```


### 枚举形式

1. 借助JDK1.5中添加的枚举来实现单例模式。不仅能避免多线程同步问题，而
   且还能防止反序列化重新创建新的对象。

2. 这种方式是Effective Java作者Josh Bloch 提倡的方式

3. 结论：推荐使用

```java
/*
  * 枚举类型：表示该类型的对象是有限的几个
  * 我们可以限定为一个，就成了单例
  */
public enum SingleTon {
  INSTANCE;
}
```

## 懒汉式

> 延迟创建对象（有的方式存在线程安全问题）。

线程不安全方式

- 起到了Lazy Loading的效果，但是只能在单线程下使用。

- 如果在多线程下，一个线程进入了if (singleton == null)判断语句块，还未来得及往下执行，另一个线程也通过了这个判断语句，这时便会产生多个实例。所以 在多线程环境下不可使用这种方式。

- 结论：在实际开发中，不要使用这种方式.

```java
public class SingleTon {
  private SingleTon(){}

  private static SingleTon singleTon;

  //当调用getSingleTon，才创建单例对象，懒汉式
  public static SingleTon getSingleTon(){
      if (singleTon == null){
          singleTon = new SingleTon();
      }
      return singleTon;
  }
}
```


### 双重检查

- 双重检查概念是多线程开发中常使用到的，如代码中所示，我们进行了两次if (singleton == null)检查，这样就可以保证线程安全了。

- 这样，实例化代码只会执行一次，后面再次访问时，判断if (singleton == null)，直接return实例化对象，也避免的反复进行方法同步.

- 线程安全；延迟加载；效率较高

- 结论：在实际开发中，推荐使用这种单例设计模式

```java
//懒汉式：双重检查
public class SingleTon {
	private static volatile SingleTon singleTon;
  private SingleTon(){

  }

  public static SingleTon getSingleTon(){
      if (singleTon == null){
          synchronized (SingleTon.class){
              if (singleTon == null)
                  singleTon = new SingleTon();
          }
      }
      return singleTon;
  }
}
```
### 静态内部类形式

1. 这种方式采用了类加载的机制来保证初始化实例时只有一个线程。

2. 静态内部类方式在Singleton类被加载时并不会立即实例化，而是在需要实例化
   时，调用getSingleTon方法，才会加载Inner类，从而完成Singleton的实例化。

3. 类的静态属性只会在第一次加载类的时候初始化，所以在这里，JVM帮助我们
   保证了线程的安全性，在类进行初始化时，别的线程是无法进入的。

4. 优点：避免了线程不安全，利用静态内部类特点实现延迟加载，效率高

5. 结论：推荐使用.

```java
//懒汉式：静态内部类形式
public class SingleTon {
  private SingleTon(){}
  private static class Inner{
      private static final SingleTon SINGLE_TON = new SingleTon();
  }
  public static SingleTon getSingleTon(){
      return Inner.SINGLE_TON;
  }
}
```
## 使用场景

1. 单例模式保证了系统内存中该类只存在一个对象，节省了系统资源，对于一些需
   要频繁创建销毁的对象，使用单例模式可以提高系统性能。

2. 当想实例化一个单例类的时候，必须要记住使用相应的获取对象的方法，而不是使
   用new。

3. 单例模式使用的场景：需要频繁的进行创建和销毁的对象、创建对象时耗时过多或
   耗费资源过多(即：重量级对象)，但又经常用到的对象、工具类对象、频繁访问数
   据库或文件的对象(比如数据源、session工厂等)。