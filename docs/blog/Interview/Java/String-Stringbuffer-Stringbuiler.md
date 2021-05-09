# String、StringBuffer、StringBuilder的区别

### String、StringBuffer、StringBuilder的区别：

|   |  String  |  StringBuffer  |  StringBuilder  |
| ---- |  ----  | ---- |    ----    |
|  执行速度	|  最差	|  其次	|  最高|  
| 线程安全 | 线程安全 | 线程安全 | 线程不安全 |
| 使用场景 | 少量字符串操作 | 多线程环境下的大量操作 | 单线程环境下的大量操作 |


### String：
对于String来说，是把数据存放在了常量池中，因为所有的String，默认都是以常量形式保存，且由final修饰，因此在线程池中它是线程安全的。因为每一个String当被创建好了以后，他就不再发生任何变化，但是它的执行速度是最差的。
我们要创建String的时候，他在常量池中对这些信息进行处理，如果在程序中出现了大量字符串拼接的工作，效率是非常底下的。
因此使用场景是在少量字符串操作的时候才建议直接使用String来操作。

### StringBuffer：（效率不如StringBuilder，但远比String要高）
StringBuffer相对于StringBuilder效率要相对低一点，但也远比String要高的多。效率低的原因：对于StringBuffer来说更多的考虑到了多线程的情况，在进行字符串操作的时候，它使用了synchronize关键字，对方法进行了同步处理。
因此StringBuffer适用于多线程环境下的大量操作。

### StringBuilder：（没有考虑线程安全问题）
线程安全与线程不安全：
在进行多线程处理的时候，如果多个线程对于这一个对象同时产生操作，会产生预期之外的结果。对于StringBuilder来说，执行效率虽然高，但是因为线程不安全，所以不建议在多线程的环境下对同一个StringBuilder对象进行操作。
因此StringBuilder适用于单线程环境下的大量字符串操作。