# Mongodb - 表达式操作符

#### 管道操作符的分类

管道操作符可以分为三类：

1. 阶段操作符（Stage Operators）
2. 表达式操作符（Expression Operators）--主要用于$project
3. 累加器（Accumulators）--主要用于$group分组

## 表达式操作符（Expression Operators）

表达式操作符主要用于在管道中构建表达式时使用，使用类似于函数那样需要参数，主要用于$project操作符中，用于构建表达式，使用方法一般如下：

方法1：

```javascript
{ <operator>: [ <argument1>, <argument2> ... ] }
```

方法2：

```javascript
{ <operator>: <argument> }
```

### 表达式操作符分类

- 布尔值操作符（Boolean Operators）
- 集合操作符（Set Operators）
- 比较操作符（Comparison Operators）
- 数学操作符（Arithmetic Operators）
- 字符串操作符（String Operators）
- 文本搜索操作符（Text Search Operators）
- 数组操作符（Array Operators）
- 变量操作符（Variable Operators）
- 字面量操作符（Literal Operators）
- 日期操作符（Date Operators）
- 条件操作符（Conditional Operators）
- 数据类型操作符（Data Type Operators）

### 常用表达式操作符

####  布尔值操作符（Boolean Operators）

| 操作符 | 简述                                                         |
| :----- | :----------------------------------------------------------- |
| $and   | 逻辑与操作符，当他的表达式中所有值都是true的时候，才返回true。 用法：{ $and: [ <expression1>, <expression2>, ... ] }。 |
| $or    | 逻辑或操作符，当他的表达式中有值是true的时候，就会返回true。用法：{ $or: [ <expression1>, <expression2>, ... ] } |
| $not   | 取反操作符，返回表达式中取反后的布尔值。用法：{ $not: [ <expression> ] } |

##### 示例

| 例子                                     | 结果  |
| :--------------------------------------- | :---- |
| { $and: [ 1, "green" ] }                 | true  |
| { $and: [ ] }                            | true  |
| { $and: [ [ null ], [ false ], [ 0 ] ] } | true  |
| { $and: [ null, true ] }                 | false |
| { $and: [ 0, true ] }                    | false |
| { $or: [ true, false ] }                 | true  |
| { $or: [ [ false ], false ] }            | true  |
| { $or: [ null, 0, undefined ] }          | false |
| { $or: [ ] }                             | false |
| { $not: [ true ] }                       | false |
| { $not: [ [ false ] ] }                  | false |
| { $not: [ false ] }                      | true  |
| { $not: [ null ] }                       | true  |
| { $not: [ 0 ] }                          | true  |

#### 比较操作符（Comparison Operators） 

| 操作符 | 简述                                                         |
| :----- | :----------------------------------------------------------- |
| $cmp   | 比较操作符，比较表达式中两个值的大小，如果第一个值小于第二个值则返回-1，相等返回0，大于返回1。用法{ $cmp: [ <expression1>, <expression2> ] } |
| $eq    | 比较表达式中两个是否相等，是则返回true，否则返回false。用法{ $eq: [ <expression1>, <expression2> ] } |
| $gt    | 比较表达式中第一个值是否大于第二个值，是则返回true，否则返回false。用法{ $gt: [ <expression1>, <expression2> ] } |
| $gte   | 比较表达式中第一个值是否大于等于第二个值，是则返回true，否则返回false。用法{ $gte: [ <expression1>, <expression2> ] } |
| $lt    | 比较表达式中第一个值是否小于第二个值，是则返回true，否则返回false。用法{ $lt: [ <expression1>, <expression2> ] } |
| $lte   | 比较表达式中第一个值是否小于等于第二个值，是则返回true，否则返回false。用法{ $lte: [ <expression1>, <expression2> ] } |
| $ne    | 比较表达式中两个是否相等，不过返回值与$eq相反，是则返回false，否则返回true。用法{ $ne: [ <expression1>, <expression2> ] } |

##### 示例

假设有一个关于考试成绩的集合：

```javascript
{ "_id" : 1, "name" : "abc1",  score: 80 }
{ "_id" : 2, "name" : "avc1",  score: 82 }
{ "_id" : 3, "name" : "adc1",  score: 79 }
{ "_id" : 4, "name" : "awc1",  score: 60 }
{ "_id" : 5, "name" : "xyz1",  score: 50 }
{ "_id" : 6, "name" : "VWZ1",  score: 100 }
```

操作如下：

```javascript
db.collection.aggregate(
   [
     {
       $project:
          {
            name: 1,
            score: 1,
            cmp60: { $cmp: [ "$score", 60 ] },
            eq100: { $eq: [ "$score", 100 ] },
            gt80: { $gt: [ "$score", 80 ] },
            gte80: { $gte: [ "$score", 80 ] },
            lt80: { $lt: [ "$score", 80 ] },
            lte80: { $lte: [ "$score", 80 ] },
            ne100: { $ne: [ "$score", 100 ] },
            _id: 0
          }
     }
   ]
)
```

返回结果：

```javascript
{ "name" : "abc1", score: 80, cmp60: 1, eq100: false, gt80: false, gte80: true, lt80: false, lte80: true, ne100: true }
{ "name" : "avc1", score: 82, cmp60: 1, eq100: false, gt80: true, gte80: true, lt80: false, lte80: false, ne100: true }
{ "name" : "adc1", score: 79, cmp60: 1, eq100: false, gt80: false, gte80: false, lt80: true, lte80: false, ne100: true }
{ "name" : "awc1", score: 60, cmp60: 0, eq100: false, gt80: false, gte80: false, lt80: true, lte80: true, ne100: true }
{ "name" : "xyz1", score: 50, cmp60: -1, eq100: false, gt80: false, gte80: false, lt80: true, lte80: true, ne100: true }
{ "name" : "VWZ1", score: 100, cmp60: 1, eq100: true, gt80: true, gte80: true, lt80: false, lte80: false, ne100: false }
```

#### 数学操作符（Arithmetic Operators） 

| 操作符    | 简述                                                         |
| :-------- | :----------------------------------------------------------- |
| $abs      | 求绝对值操作符，于v3.2版新加入。用法：{ $abs: <number> }     |
| $add      | 求和操作符，返回所有表达式相加起来的结果。用法：{ $add: [ <expression1>, <expression2>, ... ] } |
| $ceil     | 进一法取整操作符，取 于v3.2版新加入。用法：{ $ceil: <number> } |
| $divide   | 求商操作符，返回表达式1除以表达式2的商。用法：{ $divide: [ <expression1>, <expression2> ] } |
| $subtract | 求差操作符，返回表达式1减去表达式2的结果。用法：{ $subtract: [ <expression1>, <expression2> ] } |
| $multiply | 求积操作符，返回所有表达式相乘的结果。用法：{ $multiply: [ <expression1>, <expression2>, ... ] } |
| $mod      | 求余操作符，返回所有表达式1除以表达式2所得到的余数。用法：{ $multiply: [ <expression1>, <expression2>] } |

##### 示例

| 例子                   | 结果 |
| :--------------------- | :--- |
| { $abs: -1 }           | 1    |
| { $abs: 1 }            | 1    |
| { $abs: null }         | null |
| { $add: [1, 1] }       | 2    |
| { $ceil: 1 }           | 1    |
| { $ceil: 7.80 }        | 8    |
| { $ceil: -2.8 }        | -2   |
| { $divide: [40, 8] }   | 5    |
| { $subtract: [10, 8] } | 2    |
| { $multiply: [5, 8] }  | 40   |
| { $mob: [80, 7] }      | 3    |
| { $mob: [80, 8] }      | 0    |

>  Tips: `$add`将一个日期类型和数字类型相加会变成日期类型。 这样的话，当数据库存储的是时间戳但是需要又想对其使用日期操作符的话，就可以通过这样的方法，先让其变成日期类型，然后再使用日期操作符，用法参考：`{ $add: [ new Date(0), '$ts' ] }`。 

####  字符串操作符（String Operators） 

| 操作符       | 简述                                                         |
| :----------- | :----------------------------------------------------------- |
| $concat      | 连接操作符，将给定表达式中的字符串连接一起。用法：{ $concat: [ <expression1>, <expression2>, ... ] } |
| $split       | 切割操作符，用于对字符串进行分切。用法：{ $split: [ <string expression>, <delimiter> ] } |
| $toLower     | 用于返回字符串的小写形式。用法：{ $toLower: <expression> }   |
| $toUpper     | 用于返回字符串的大写形式。用法：{ $toUpper: <expression> }   |
| $substr      | 用于返回子字符串，v3.4+版本不建议使用，应该使用substrBytes或substrCP，v3.4+版本使用的话，相当于substrBytes。用法：{ $substr: [ <string>, <start>, <length> ] } |
| $substrBytes | 用于根据UTF-8下的字节位置返回子字符串（起始位置为0），于v3.4新增。用法：{ $substrBytes: [ <string expression>, <byte index>, <byte count> ] } |
| $substrCP    | 用于根据UTF-8下的Code Point位置返回子字符串（起始位置为0），于v3.4新增。用法：{ $substrCP: [ <string expression>, <code point index>, <code point count> ] } |

>  [Code Point](http://www.unicode.org/glossary/#code_point): (1) Any value in the Unicode codespace; that is, the range of integers from 0 to 10FFFF16. Not all code points are assigned to encoded characters. See code point type. (2) A value, or position, for a character, in any coded character set. 

##### 示例

| 例子                                       | 结果                                                         |
| :----------------------------------------- | :----------------------------------------------------------- |
| { $concat: [ "item", " - ", "a" ] }        | item - a                                                     |
| { $split: [ "June-15-2013", "-" ] }        | [ "June", "15", "2013" ]                                     |
| { $split: [ "banana split", "a" ] }        | [ "b", "n", "n", " split" ]                                  |
| { $split: [ "headphone jack", 7 ] }        | $split第二个参数必须是一个字符串，不能是数字                 |
| { $toLower: "ITEM" }                       | "item"                                                       |
| { $toLower: "Item" }                       | "item"                                                       |
| { $toLower: null }                         | ""                                                           |
| { $toUpper: "item" }                       | "ITEM"                                                       |
| { $toUpper: "Item" }                       | "ITEM"                                                       |
| { $toUpper: null }                         | ""                                                           |
| { $substrBytes: [ "abcde", 1, 2 ] }        | "bc"                                                         |
| { $substrBytes: [ "Hello World!", 6, 5 ] } | "World"                                                      |
| { $substrBytes: [ "cafétéria", 0, 5 ] }    | "café"                                                       |
| { $substrBytes: [ "cafétéria", 5, 4 ] }    | "tér"                                                        |
| { $substrBytes: [ "cafétéria", 7, 3 ] }    | "Error: Invalid range, starting index is a UTF-8 continuation byte." |
| { $substrBytes: [ "cafétéria", 3, 1 ] }    | "Error: Invalid range, ending index is in the middle of a UTF-8 character." |
| { $substrBytes: [ "寿司sushi", 0, 3 ] }    | "寿"                                                         |
| { $substrCP: [ "abcde", 1, 2 ] }           | "bc"                                                         |
| { $substrCP: [ "Hello World!", 6, 5 ] }    | "World"                                                      |
| { $substrCP: [ "cafétéria", 0, 5 ] }       | "cafét"                                                      |
| { $substrCP: [ "cafétéria", 5, 4 ] }       | "tér"                                                        |
| { $substrCP: [ "cafétéria", 7, 3 ] }       | "ia"                                                         |
| { $substrCP: [ "cafétéria", 3, 1 ] }       | "é"                                                          |
| { $substrCP: [ "寿司sushi", 0, 3 ] }       | "寿司s"                                                      |

####  日期操作符（Date Operators） 

| 操作符        | 简述                                                         |
| :------------ | :----------------------------------------------------------- |
| $dayOfYear    | 返回一年中的一天，值在1和366（闰年）之间。用法：{ $dayOfYear: <expression> } |
| $dayOfMonth   | 返回一个月中的一天，值在1和31之间。用法：{ $dayOfMonth: <expression> } |
| $dayOfWeek    | 返回一周中的一天，值在1（周日）和7（周六）之间。用法：{ $dayOfWeek: <expression> } |
| $year         | 返回年份，eg:2017。用法：{ $year: <expression> }             |
| $month        | 返回月份，值在1和12之间。用法：{ $month: <expression> }      |
| $week         | 返回周 ，值在0和53之间。用法：{ $week: <expression> }        |
| $hour         | 返回时 ，值在0和23之间。用法：{ $hour: <expression> }        |
| $minute       | 返回分 ，值在0和59之间。用法：{ $minute: <expression> }      |
| $second       | 返回秒，值在0和60之间（闰秒）。用法：{ $second: <expression> } |
| $millisecond  | 返回毫秒，值在0和999之间。用法：{ $millisecond: <expression> } |
| $dateToString | 返回日期的字符串。用法：{ $dateToString: { format: <formatString>, date: <dateExpression> } } |

##### 示例

假如有以下数据：

```javascript
{ "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, "date" : ISODate("2014-01-01T08:15:39.736Z") }
```

进行如下操作：

```javascript
db.collection.aggregate(
   [
     {
       $project:
         {
           year: { $year: "$date" },
           month: { $month: "$date" },
           day: { $dayOfMonth: "$date" },
           hour: { $hour: "$date" },
           minutes: { $minute: "$date" },
           seconds: { $second: "$date" },
           milliseconds: { $millisecond: "$date" },
           dayOfYear: { $dayOfYear: "$date" },
           dayOfWeek: { $dayOfWeek: "$date" },
           week: { $week: "$date" },
           yearMonthDayUTC: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          time: { $dateToString: { format: "%H:%M:%S:%L", date: "$date" } }
         }
     }
   ]
)
```

返回结果:

```javascript
{
  "_id" : 1,
  "year" : 2014,
  "month" : 1,
  "day" : 1,
  "hour" : 8,
  "minutes" : 15,
  "seconds" : 39,
  "milliseconds" : 736,
  "dayOfYear" : 1,
  "dayOfWeek" : 4,
  "week" : 0,
  "yearMonthDayUTC" : "2014-01-01", 
  "time" : "08:15:39:736"
}
```

####  条件操作符（Conditional Operators） 

| 操作符  | 简述                                                         |
| :------ | :----------------------------------------------------------- |
| $cond   | 用法：{ $cond: [ <boolean-expression>, <true-case>, <false-case> ] } 或者 v2.6+还支持{ $cond: { if: <boolean-expression>, then: <true-case>, else: <false-case-> } } |
| $ifNull | 用法：{ $ifNull: [ <expression>, <replacement-expression-if-null> ] } |

##### 示例

假设有一个关于考试成绩的集合：

```javascript
{ "_id" : 1, "name" : "a",  score: 80 }
{ "_id" : 2, "name" : "b",  score: 69 }
{ "_id" : 3, "name" : "c",  score: 53 }
{ "_id" : 3, "name" : null,  score: 70 }
```

操作如下：

```javascript
db.collection.aggregate(
   [
      {
         $project:
           {
              _id: 0,
              score: 1,
              pass:
                {
                  $cond: [ { $gte: [ "$score", 60 ] }, 1, 0 ]
                },
              description: { $ifNull: [ "$name", "Unspecified" ] } 
           }
      }
   ]
)
```

返回结果：

```javascript
{ "name" : "a",  score: 80, pass: 1 }
{ "name" : "b",  score: 69, pass: 1 }
{ "name" : "c",  score: 53, pass: 0 }
{ "name" : "Unspecified",  score: 70, pass: 1 }
```

# 总结

本文介绍表达式操作符的分类和常用的表达式操作符的用法，表达式操作符主要作用于$project下，通过使用这些操作符可以对文档中的字面量进行处理并返回，进而返回更多有用的数据。