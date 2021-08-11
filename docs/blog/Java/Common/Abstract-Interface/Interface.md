# 接口(interface)

> **接口（英文：Interface），在 Java 中是一个抽象类型，是抽象方法的集合**；接口通过关键字 `interface` 来定义。接口与抽象类的不同之处在于：
>
> 1. 抽象类可以有方法体的方法，但接口没有。
> 2. 接口中的成员变量隐式为 `static final`，但抽象类不是的。 
> 3. 一个类可以实现多个接口，但只能继承一个抽象类。

```java
interface CC{
  String cc();
}

static class DD implements CC{
  @Override
  public String cc() {
    return "cc";
  }
}

public static void main(String[] args) {
  CC cc = new DD();
  System.out.println(cc.cc());
}
```

