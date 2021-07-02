# Markdown 流程图

> markdown有不同的插件实现，对应的语法也不太一样，对于插件就是把引用的语法对应成相应的标签，本文以CSDN中写作为例进行分别对mermaid和flowchart进行实例说明和语法解释。



# 1\. Mermaid 流程图
 
### 示例

```
	```mermaid
	graph TB
	A[Apple]-->B{Boy}
	A---C(Cat)
	B.->D((Dog))
	C==喵==>D
	style A fill:#2ff,fill-opacity:0.1,stroke:#faa,stroke-width:4px
	style D stroke:#000,stroke-width:8px;
```
```



​```mermaid
	graph TB
	A[Apple]-->B{Boy}
	A---C(Cat)
	B.->D((Dog))
	C==喵==>D
	style A fill:#2ff,fill-opacity:0.1,stroke:#faa,stroke-width:4px
	style D stroke:#000,stroke-width:8px;
```


::: demo [vue] 一个 Vue Demo

```vue
<template>
  <div class="box-vue">
    Mr.Hope <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  data: () => ({ message: "十分帅" }),
};
</script>
<style>
.box-vue span {
  color: red;
}
</style>
```

:::