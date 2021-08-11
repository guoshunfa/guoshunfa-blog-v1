# 抽象类(abstract)

> 在 Java 中，通过关键字 `abstract` 定义的类叫做抽象类。Java 是一门面向对象的语言，因此所有的对象都是通过类来描述的；但反过来，并不是所有的类都是用来描述对象的，抽象类就是其中的一种。
>
> 
>
> 1. 抽象类不能被实例化。 
> 2. 抽象类应该至少有一个抽象方法，否则它没有任何意义。
> 3. 抽象类中的抽象方法没有方法体。 
> 4. 抽象类的子类必须给出父类中的抽象方法的具体实现，除非该子类也是抽象类。

```java
static abstract class AA{
  abstract String aa();
  String bb() {
    return "bb";
  }
};

static class BB extends AA{
  String aa() {
    return this.bb();
  }
}

public static void main(String[] args) {
  BB bb = new BB();
  System.out.println(bb.aa());
}
```

