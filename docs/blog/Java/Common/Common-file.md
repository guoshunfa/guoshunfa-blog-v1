# 文件处理

## 读取txt文件

### 读取全部文件

```java
Path path = Paths.get("D:/aa.txt");
byte[] data = Files.readAllBytes(path);
String result = new String(data, "utf-8");
```

