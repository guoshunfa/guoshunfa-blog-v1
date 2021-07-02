# 排序

>对数组和集合进行排序。

## Java 8 Comparator: 列表排序

几个关于如何在Java 8中对List进行排序的示例。

> 默认排序规则：从低到高。
>
> 可以通过反转函数（reversed）进行调整排序规则。

### 1.按字母顺序排序字符串列表

```java
List<String> cities = Arrays.asList(
             "Milan",
             "london",
             "San Francisco",
             "Tokyo",
             "New Delhi"
);
System.out.println(cities);
//[Milan, london, San Francisco, Tokyo, New Delhi]
cities.sort(String.CASE_INSENSITIVE_ORDER);
System.out.println(cities);
//[london, Milan, New Delhi, San Francisco, Tokyo]
cities.sort(Comparator.naturalOrder());
System.out.println(cities);
//[Milan, New Delhi, San Francisco, Tokyo, london]
```

为了更加突出显示`Comparator.naturalOrder()`(返回按照大小写字母排序的Comparator)和`String.CASE_INSENSITIVE_ORDER`(返回不区分大小写的Comparator)的区别，我们在'London'使用小写的'L'。

基本上，在`Java 7`中，我们使用的`Collections.sort()`方法接受一个`List`参数，最终返回一个`Comparator`,而在`Java 8`中新的`List.sort()`方法，它接受`Comparator`参数。

### 2.对整数列表进行排序

```java
List<Integer> numbers = Arrays.asList(6, 2, 1, 4, 9);
System.out.println(numbers); //[6, 2, 1, 4, 9]
numbers.sort(Comparator.naturalOrder());
System.out.println(numbers); //[1, 2, 4, 6, 9]
```

### 3.按字符串字段对列表进行排序

假设我们有`Movie`类，想按标题对列表进行排序。我们可以使用`Comparator.comparing()`并传递用于排序的字段——在本例中为`title`。

```java
List<Movie> movies = Arrays.asList(
                new Movie("Lord of the rings"),
                new Movie("Back to the future"),
                new Movie("Carlito's way"),
                new Movie("Pulp fiction"));
movies.sort(Comparator.comparing(Movie::getTitle));
movies.forEach(System.out::println);
```

输出是:

```java
Movie{title='Back to the future'}
Movie{title="Carlito's way"}
Movie{title='Lord of the rings'}
Movie{title='Pulp fiction'}
```

你可能已经注意到，我们没有通过比较器(Comparator),但List已正确排序，这是因为提取的字段title是String类型，而String实现了`Comparable`接口。
如果你查看`Comparator.comparison()`的实现，你将看到它对提取的键调用`compareTo`方法。

```java
return (Comparator<T> & Serializable)
                (c1, c2) -> keyExtractor.apply(c1).compareTo(keyExtractor.apply(c2));
```

### 4.按Double字段排序列表

以类似的方式，可以使用`Comparator.comparingDouble()`来比较`double`值。在示例中，我们希望通过评级从高到低来对电影列表进行排序。

```java
List<Movie> movies = Arrays.asList(
                new Movie("Lord of the rings", 8.8),
                new Movie("Back to the future", 8.5),
                new Movie("Carlito's way", 7.9),
                new Movie("Pulp fiction", 8.9));
movies.sort(Comparator.comparingDouble(Movie::getRating)
                                            .reversed());
movies.forEach(System.out::println);
```

我们使用反转函数(`reversed`)来反转**(默认从低到高的自然排序)**，`Comparator.comparingDouble()` 底层使用`Double.compare()`实现。如果需要比较`int`或`long`，可以分别使用`comparisonInt()`和`comparisonLong()`。

### 5.使用自定义比较器对列表进行排序

在前面的例子中，没有指定任何`Comparator`，因为没有必要。现在让我们看一个自定义`Comparator`的例子。
我们的`Movie`类有一个新字段——'starred'。使用第三个构造函数设置参数。在示例中，我们要对列表进行排序，以便在列表顶部显示已加星标的电影。

```java
List<Movie> movies = Arrays.asList(
                new Movie("Lord of the rings", 8.8, true),
                new Movie("Back to the future", 8.5, false),
                new Movie("Carlito's way", 7.9, true),
                new Movie("Pulp fiction", 8.9, false));
movies.sort(new Comparator<Movie>() {
        @Override
        public int compare(Movie m1, Movie m2) {
                if(m1.getStarred() == m2.getStarred()){
                        return 0;
                }
                return m1.getStarred() ? -1 : 1;
         }
});
movies.forEach(System.out::println);
```

结果是:

```java
Movie{starred=true, title='Lord of the rings', rating=8.8}
Movie{starred=true, title="Carlito's way", rating=7.9}
Movie{starred=false, title='Back to the future', rating=8.5}
Movie{starred=false, title='Pulp fiction', rating=8.9}
```

当然，我们可以使用`lambda`表达式而不是匿名类(`Anonymous class`)，如下所示:

```java
movies.sort((m1, m2) -> {
        if(m1.getStarred() == m2.getStarred()){
                return 0;
        }
        return m1.getStarred() ? -1 : 1;
});
```

也可以使用`Comparator.comparing()`:

```java
movies.sort(Comparator.comparing(Movie::getStarred, (star1, star2) -> {
        if(star1 == star2){
                 return 0;
        }
        return star1 ? -1 : 1;
}));
```

在后面的示例中，`Comparator.comparing()`接受用于排序的键作为第一个参数，并将`Comparator`作为第二个参数，该`Comparator`使用提取的键进行比较。`star1`和`star2`是布尔值，分别代表`m1.getStarred()`和`m2.getStarred()`。

### 6.使用比较器链对列表进行排序

最后一个示例中，我们希望将已加星标的电影放在顶部，然后按评分排序。

```java
List<Movie> movies = Arrays.asList(
                new Movie("Lord of the rings", 8.8, true),
                new Movie("Back to the future", 8.5, false),
                new Movie("Carlito's way", 7.9, true),
                new Movie("Pulp fiction", 8.9, false));
movies.sort(Comparator.comparing(Movie::getStarred)
                                            .reversed()
                                            .thenComparing(Comparator.comparing(Movie::getRating)
                                            .reversed())
);
movies.forEach(System.out::println);
```

输出是:

```java
Movie{starred=true, title='Lord of the rings', rating=8.8}
Movie{starred=true, title="Carlito's way", rating=7.9}
Movie{starred=false, title='Pulp fiction', rating=8.9}
Movie{starred=false, title='Back to the future', rating=8.5}
```