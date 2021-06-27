# MongoDB shell语法

## 命令行选项

该[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)外壳可以与众多的选择开始。有关所有可用选项的详细信息，请参见 [mongo shell](https://mongodb.net.cn/manual/reference/program/mongo/)页面。

下表显示了一些常见的选项[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)：

| 选项                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`--help`](https://mongodb.net.cn/manual/reference/program/mongo/#cmdoption-mongo-help) | 显示命令行选项                                               |
| [`--nodb`](https://mongodb.net.cn/manual/reference/program/mongo/#cmdoption-mongo-nodb) | 在[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)不连接数据库的情况下启动Shell。要稍后连接，请参阅“ [打开新连接”](https://mongodb.net.cn/manual/tutorial/write-scripts-for-the-mongo-shell/#mongo-shell-new-connections)。 |
| [`--shell`](https://mongodb.net.cn/manual/reference/program/mongo/#cmdoption-mongo-shell) | 与JavaScript文件（即[](https://mongodb.net.cn/manual/reference/program/mongo/#mongo-shell-file)）结合使用，可 [`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)在运行JavaScript文件后继续在 Shell中运行。有关示例，请参见[JavaScript文件](https://mongodb.net.cn/manual/tutorial/write-scripts-for-the-mongo-shell/#mongo-shell-javascript-file)。 |

## 命令助手

该[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)外壳提供了各种帮助。下表显示了一些常见的帮助方法和命令：

| 帮助方法和命令                                               | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| `help`                                                       | 显示帮助。                                                   |
| [`db.help()`](https://mongodb.net.cn/manual/reference/method/db.help/#db.help) | 显示有关数据库方法的帮助。                                   |
| `db.<collection>.help()`                                     | 在收集方法上显示帮助。该`<collection>`可以是现有的集合或不存在的集合的名称。 |
| `show dbs`                                                   | 打印服务器上所有数据库的列表。该操作与[`listDatabases`](https://mongodb.net.cn/manual/reference/command/listDatabases/#dbcmd.listDatabases)命令相对应。如果部署使用访问控制运行，则该操作将根据用户权限返回不同的值。有关详细信息，请参见 [listDatabases行为](https://mongodb.net.cn/manual/reference/command/listDatabases/#listdatabases-behavior)。 |
| `use <db>`                                                   | 将当前数据库切换到`<db>`。该[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)shell变量`db`被设置为当前数据库。 |
| `show collections`                                           | 打印当前数据库的所有集合的列表。也可以看看[显示收藏](https://mongodb.net.cn/manual/release-notes/4.0-compatibility/#compat-show-collections) |
| `show users`                                                 | 打印当前数据库的用户列表。                                   |
| `show roles`                                                 | 打印当前数据库的所有角色的列表，包括用户定义角色和内置角色。 |
| `show profile`                                               | 打印耗时1毫秒或更长时间的五个最新操作。有关更多信息，请参见[数据库分析器](https://mongodb.net.cn/manual/tutorial/manage-the-database-profiler/)上的文档。 |
| `show databases`                                             | 打印所有可用数据库的列表。该操作与[`listDatabases`](https://mongodb.net.cn/manual/reference/command/listDatabases/#dbcmd.listDatabases)命令相对应。如果部署使用访问控制运行，则该操作将根据用户权限返回不同的值。有关详细信息，请参见 [listDatabases行为](https://mongodb.net.cn/manual/reference/command/listDatabases/#listdatabases-behavior)。 |
| `load()`                                                     | 执行一个JavaScript文件。有关 更多信息，请参见 [mongo Shell的编写脚本](https://mongodb.net.cn/manual/tutorial/write-scripts-for-the-mongo-shell/)。 |

## Shell JavaScript基本操作

该[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)外壳程序提供了用于数据库操作的 [JavaScript API](https://mongodb.net.cn/manual/reference/method/)。

在[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)外壳程序中，`db`是引用当前数据库的变量。该变量自动设置为默认数据库，`test`或者在使用切换当前数据库时设置。`use <db>`

下表显示了一些常见的JavaScript操作：

| JavaScript数据库操作                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`db.auth()`](https://mongodb.net.cn/manual/reference/method/db.auth/#db.auth) | 如果以安全模式运行，请对用户进行身份验证。                   |
| `coll = db.<collection>`                                     | 将当前数据库中的特定集合设置为一个变量 `coll`，如以下示例所示：`coll = db.myCollection; `您可以`myCollection`使用变量对变量执行操作，如以下示例所示：`coll.find(); ` |
| [`db.collection.find()`](https://mongodb.net.cn/manual/reference/method/db.collection.find/#db.collection.find) | 查找集合中的所有文档并返回一个游标。有关更多信息和示例，请参见[`db.collection.find()`](https://mongodb.net.cn/manual/reference/method/db.collection.find/#db.collection.find)和 [查询文档](https://mongodb.net.cn/manual/tutorial/query-documents/)。有关[在外壳](https://mongodb.net.cn/manual/tutorial/iterate-a-cursor/)中处理游标的信息，请参阅[在mongo Shell中迭代游标](https://mongodb.net.cn/manual/tutorial/iterate-a-cursor/)[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)。 |
| [`db.collection.insertOne()`](https://mongodb.net.cn/manual/reference/method/db.collection.insertOne/#db.collection.insertOne) | 将新文档插入集合中。                                         |
| [`db.collection.insertMany()`](https://mongodb.net.cn/manual/reference/method/db.collection.insertMany/#db.collection.insertMany) | 将多个新文档插入集合中。                                     |
| [`db.collection.updateOne()`](https://mongodb.net.cn/manual/reference/method/db.collection.updateOne/#db.collection.updateOne) | 更新集合中的单个现有文档。                                   |
| [`db.collection.updateMany()`](https://mongodb.net.cn/manual/reference/method/db.collection.updateMany/#db.collection.updateMany) | 更新集合中的多个现有文档。                                   |
| [`db.collection.save()`](https://mongodb.net.cn/manual/reference/method/db.collection.save/#db.collection.save) | 插入新文档或更新集合中的现有文档。                           |
| [`db.collection.deleteOne()`](https://mongodb.net.cn/manual/reference/method/db.collection.deleteOne/#db.collection.deleteOne) | 从集合中删除单个文档。                                       |
| [`db.collection.deleteMany()`](https://mongodb.net.cn/manual/reference/method/db.collection.deleteMany/#db.collection.deleteMany) | 从集合中删除文档。                                           |
| [`db.collection.drop()`](https://mongodb.net.cn/manual/reference/method/db.collection.drop/#db.collection.drop) | 完全删除或删除集合。                                         |
| [`db.collection.createIndex()`](https://mongodb.net.cn/manual/reference/method/db.collection.createIndex/#db.collection.createIndex) | 如果索引不存在，则在集合上创建一个新索引；否则，该操作无效。 |
| [`db.getSiblingDB()`](https://mongodb.net.cn/manual/reference/method/db.getSiblingDB/#db.getSiblingDB) | 使用相同的连接返回对另一个数据库的引用，而无需显式切换当前数据库。这允许跨数据库查询。 |

有关在shell中执行操作的更多信息，请参见：

- [MongoDB CRUD操作](https://mongodb.net.cn/manual/crud/)
- [mongo Shell方法](https://mongodb.net.cn/manual/reference/method/#js-administrative-methods)

## 查询

在[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)Shell中，使用[`find()`](https://mongodb.net.cn/manual/reference/method/db.collection.find/#db.collection.find)和[`findOne()`](https://mongodb.net.cn/manual/reference/method/db.collection.findOne/#db.collection.findOne) 方法执行读取操作 。

该[`find()`](https://mongodb.net.cn/manual/reference/method/db.collection.find/#db.collection.find)方法返回一个游标对象，[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)shell对其进行迭代以在屏幕上打印文档。默认情况下，[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)打印前20个结果 [`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)。shell将提示用户“ ”以继续迭代下20个结果。`Type it`

下表提供了[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)Shell 中的一些常见读取操作 ：

| 读取操作                                                     | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`db.collection.find()`](https://mongodb.net.cn/manual/reference/method/db.collection.find/#db.collection.find) | `<query>`在集合中找到符合条件的文档。如果`<query>`未指定标准或该标准为空（即`{}`），则读取操作将选择集合中的所有文档。下面的示例选择`users` 集合中`name`字段等于的文档`"Joe"`：`coll = db.users; coll.find( { name: "Joe" } ); `有关指定`<query>`条件的更多信息，请参阅“ [指定相等条件”](https://mongodb.net.cn/manual/tutorial/query-documents/#read-operations-query-argument)。 |
| [`db.collection.find(, )`](https://mongodb.net.cn/manual/reference/method/db.collection.find/#db.collection.find) | 查找符合`<query>`条件的文档，然后仅返回中的特定字段`<projection>`。以下示例从集合中选择所有文档，但仅返回该`name`字段和该`_id`字段。将 `_id`始终返回，除非明确指定有来无回。`coll = db.users; coll.find( { }, { name: true } ); `有关指定的更多信息`<projection>`，请参见 [要从查询返回的项目字段](https://mongodb.net.cn/manual/tutorial/project-fields-from-query-results/#read-operations-projection)。 |
| [`db.collection.find().sort()`](https://mongodb.net.cn/manual/reference/method/cursor.sort/#cursor.sort) | 返回指定结果。`<sort order>`以下示例从集合中选择所有文档，并返回按`name`字段升序（`1`）排序的结果。使用`-1`降序排序：`coll = db.users; coll.find().sort( { name: 1 } ); ` |
| [`db.collection.find().sort()`](https://mongodb.net.cn/manual/reference/method/cursor.sort/#cursor.sort) | 返回`<query>`与指定条件中的条件相符的文档。`<sort order>`    |
| [`db.collection.find( ... ).limit( )`](https://mongodb.net.cn/manual/reference/method/cursor.limit/#cursor.limit) | 将结果限制为`<n>`行。如果只需要一定数量的行以获得最佳性能，则强烈建议使用。 |
| [`db.collection.find( ... ).skip( )`](https://mongodb.net.cn/manual/reference/method/cursor.skip/#cursor.skip) | 跳过`<n>`结果。                                              |
| [`db.collection.count()`](https://mongodb.net.cn/manual/reference/method/db.collection.count/#db.collection.count) | 返回集合中的文档总数。                                       |
| [`db.collection.find().count()`](https://mongodb.net.cn/manual/reference/method/cursor.count/#cursor.count) | 返回与查询匹配的文档总数。在[`count()`](https://mongodb.net.cn/manual/reference/method/cursor.count/#cursor.count)忽略[`limit()`](https://mongodb.net.cn/manual/reference/method/cursor.limit/#cursor.limit)和[`skip()`](https://mongodb.net.cn/manual/reference/method/cursor.skip/#cursor.skip)。例如，如果有100条记录匹配，但限制为10， [`count()`](https://mongodb.net.cn/manual/reference/method/cursor.count/#cursor.count)则将返回100。这比迭代自己的速度更快，但仍然需要时间。 |
| [`db.collection.findOne()`](https://mongodb.net.cn/manual/reference/method/db.collection.findOne/#db.collection.findOne) | 查找并返回一个文档。如果找不到，则返回null。以下示例在`users` 集合中选择一个与`name`字段匹配的文档`"Joe"`：`coll = db.users; coll.findOne( { name: "Joe" } ); `在内部，该[`findOne()`](https://mongodb.net.cn/manual/reference/method/db.collection.findOne/#db.collection.findOne) 方法是[`find()`](https://mongodb.net.cn/manual/reference/method/db.collection.find/#db.collection.find)带有的方法[`limit(1)`](https://mongodb.net.cn/manual/reference/method/cursor.limit/#cursor.limit)。 |

有关更多信息和示例，请参阅[查询文档](https://mongodb.net.cn/manual/tutorial/query-documents/)文档。请参阅[查询和投影运算符](https://mongodb.net.cn/manual/reference/operator/query/)以指定其他查询运算符。

## 错误检查方法

该[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)壳write方法集成了 [写关注](https://mongodb.net.cn/manual/reference/write-concern/)直接进入方法执行，并返回一个[`WriteResult()`](https://mongodb.net.cn/manual/reference/method/WriteResult/#WriteResult)包含该操作的结果，包括任何写入错误和写入错误的关注对象。



## 管理命令助手

下表列出了一些支持数据库管理的常用方法：

| **JavaScript数据库管理方法**                                 | **描述**                                                     |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [`db.fromColl.renameCollection()`](https://mongodb.net.cn/manual/reference/method/db.collection.renameCollection/#db.collection.renameCollection) | 将集合从重命名`fromColl`为`<toColl>`。请参阅 [命名限制](https://mongodb.net.cn/manual/reference/limits/#restrictions-on-db-names)。 |
| [`db.getCollectionNames()`](https://mongodb.net.cn/manual/reference/method/db.getCollectionNames/#db.getCollectionNames) | 获取当前数据库中所有集合的列表。                             |
| [`db.dropDatabase()`](https://mongodb.net.cn/manual/reference/method/db.dropDatabase/#db.dropDatabase) | 删除当前数据库。                                             |

有关[方法](https://mongodb.net.cn/manual/reference/method/#js-administrative-methods)的完整列表，另请参见[管理数据库](https://mongodb.net.cn/manual/reference/method/#js-administrative-methods)方法。

## 打开附加连接

您可以在[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)外壳中创建新的连接。

下表显示了创建连接的方法：

| JavaScript连接创建方法                          | 描述                                                         |
| :---------------------------------------------- | :----------------------------------------------------------- |
| `db = connect("<host><:port>/<dbname>") `       | 打开一个新的数据库连接。                                     |
| `conn = new Mongo() db = conn.getDB("dbname") ` | 使用打开与新服务器的连接。`new Mongo()`使用`getDB()`连接方法选择数据库。 |

另请参阅[打开新连接](https://mongodb.net.cn/manual/tutorial/write-scripts-for-the-mongo-shell/#mongo-shell-new-connections)以获取有关从[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)Shell [打开新连接](https://mongodb.net.cn/manual/tutorial/write-scripts-for-the-mongo-shell/#mongo-shell-new-connections)的更多信息。

## 杂项

下表显示了一些其他方法：

| **方法**                      | **描述**                                                     |
| :---------------------------- | :----------------------------------------------------------- |
| `Object.bsonsize(<document>)` | 打印<document> 的[BSON](https://mongodb.net.cn/manual/reference/glossary/#term-bson)大小（以字节为单位） |

## 其他资源

考虑以下解决[`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)外壳及其接口的参考资料 ：

- [`mongo`](https://mongodb.net.cn/manual/reference/program/mongo/#bin.mongo)
- [mongo Shell方法](https://mongodb.net.cn/manual/reference/method/#js-administrative-methods)
- [数据库命令](https://mongodb.net.cn/manual/reference/command/#database-commands)
- [汇总参考](https://mongodb.net.cn/manual/reference/aggregation/#aggregation-reference)
- [入门指南](https://docs.mongodb.com/getting-started/shell)