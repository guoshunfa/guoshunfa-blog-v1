# 接口开发

## 注解
### @RestController

### @PathVariable

#### 作用

用于在请求地址中接收参数。
#### 案例

```java
@RequestMapping("/users/{username}")
@ResponseBody
public String userProfile(@PathVariable("username") String username){
    return "user" + username;
}
```