---
date: 2021-08-13
tags:
 - IO
categories: 
 - Java
---
# 文件处理

## 读取txt文件

### 读取全部文件

```java
Path path = Paths.get("D:/aa.txt");
byte[] data = Files.readAllBytes(path);
String result = new String(data, "utf-8");
```

## 图片处理（javax.imageio.ImageIO）

[常用处理方法](https://blog.csdn.net/baidu_28665563/article/details/82887485)

<img src="./Common-file.assets/image-20210722175729063.png" alt="image-20210722175729063" style="zoom:50%;" />

### 检测当前文件是不是图片

```java
BufferedImage image = ImageIO.read(inputStream);
if (image != null) { // 图片验证，不是图片ImageIO.read会返回null。只能检测的图片格式：bmp/gif/jpg/png
  // ******
}
```

