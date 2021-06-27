https://zhuanlan.zhihu.com/p/109435181
https://markdown.com.cn/basic-syntax/blockquotes.html
# MarkDown语法

## Markdown 引用语法

要创建块引用，请在段落前添加一个 > 符号。

```> Dorothy followed her through many of the beautiful rooms in her castle.```

渲染效果如下所示：

> Dorothy followed her through many of the beautiful rooms in her castle.

### 多个段落的块引用
块引用可以包含多个段落。为段落之间的空白行添加一个 > 符号。

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```
渲染效果如下：

> Dorothy followed her through many of the beautiful rooms in her castle.
> 
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### 嵌套块引用
块引用可以嵌套。在要嵌套的段落前添加一个 >> 符号。

```
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```
渲染效果如下：

> Dorothy followed her through many of the beautiful rooms in her castle.
> 
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

### 带有其它元素的块引用
块引用可以包含其他 Markdown 格式的元素。并非所有元素都可以使用，你需要进行实验以查看哪些元素有效。
```
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

渲染效果如下：

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

## Markdown 图片语法

要添加图像，请使用感叹号 (!), 然后在方括号增加替代文本，图片链接放在圆括号里，括号里的链接后可以增加一个可选的图片标题文本。

插入图片Markdown语法代码：```![图片alt](图片链接 "图片title")。```

对应的HTML代码：```<img src="图片链接" alt="图片alt" title="图片title">```
```
![这是图片](/docs/blog/Markdown/img/show01.jpg "Magic Gardens")
```
渲染效果如下：

![这是图片](/docs/blog/Markdown/img/show01.jpg "Magic Gardens")

链接图片
给图片增加链接，请将图像的Markdown 括在方括号中，然后将链接添加在圆括号中。
```
[![沙漠中的岩石图片](/docs/blog/Markdown/img/show01.jpg "Shiprock")](https://markdown.com.cn)
```
渲染效果如下：
[![沙漠中的岩石图片](/docs/blog/Markdown/img/show01.jpg "Shiprock")](https://www.google.com)

## 上划线、中划线、下划线
### 中划线

语法：``~~中划线~~``

效果：~~中划线~~

### 下划线

语法：``$\underline{\text{下划线}}$``

效果：$\underline{\text{下划线}}$

### 上划线

语法：``$\overline{\text{上划线}}$``

效果：
$\overline{\text{上划线}}$

## 列表
列表有三种情况，有序列表、无序列表和层级列表，有序列表只需前面加上- 或者*后面接个空格：

**1、无序列表：**

```- 首页```<p>
```- 文件```<p>
```- 编辑```<p>
```- 帮助```<p>

效果如下：

- 首页
- 文件
- 编辑
- 帮助

**2、有序列表：**

有序列表则直接在文字前加一、 二、 三、 或者其他的序列格式1. 2. 3.：

```1. 首页```<p>
```2. 文件```<p>
```3. 编辑```<p>
```4. 帮助```<p>

显示如下:

1. 首页
2. 文件
3. 编辑
4. 帮助

**3、层级列表：**

层级列表一般只支持三级，第一级实心圆点，第二级空心圆点，第三级以后都是实心方点。要实现层级列表，每下一级在开头都要比上一级多输入2个Space或者1个Tab，而且第一级前面不要超过3个Space:

效果如下：

- 一级列表
  -   二级列表
      -   三级列表
