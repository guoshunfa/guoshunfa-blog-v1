# Spring 参数校验器（Validator）
应用在执行业务逻辑之前，必须通过校验保证接受到的输入数据是合法正确的，但很多时候同样的校验出现了多次，在不同的层，不同的方法上，导致代码冗余，浪费时间，违反DRY原则。

- 每一个控制器都要校验
- 过多的校验参数会导致代码太长
- 代码的复用率太差，同样的代码如果出现多次，在业务越来越复杂的情况下，维护成本呈指数上升。

可以考虑把校验的代码封装起来，来解决出现的这些问题。

## JSR-303

JSR-303是Java为Bean数据合法性校验提供的标准框架，它定义了一套可标注在成员变量，属性方法上的校验注解。
Hibernate Validation提供了这套标准的实现，在我们引入Spring Boot web starter或者Spring boot starter validation的时候，默认会引入Hibernate Validation。

## 用法实例
说了这么多废话，上代码。

1、引入SpringBoot项目
```
      <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.hibernate.validator</groupId>
            <artifactId>hibernate-validator</artifactId>
        </dependency>
       <!-- 引入lomhok --> 
       <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>        
```
2、编写校验对象

```
@Data
public class User {
    // 名字不允许为空，并且名字的长度在2位到30位之间
    // 如果名字的长度校验不通过，那么提示错误信息
    @NotNull
    @Size(min=2, max=30,message = "请检查名字的长度是否有问题")
    private String name;

    // 不允许为空，并且年龄的最小值为18
    @NotNull
    @Min(18)
    private Integer age;
}
```
3、创建控制器
```
@SpringBootApplication
@RestController
public class UserApplication{
    public static void main(String[] args) {
        SpringApplication.run(UserApplication.class,args);
    }
    
    // 1. 要校验的参数前，加上@Valid注解
    // 2. 紧随其后的，跟上一个BindingResult来存储校验信息
    @RequestMapping("/test1")
    public Object test1(
            @Valid User user,
            BindingResult bindingResult
    ) {
        //如果检验出了问题，就返回错误信息
        // 这里我们返回的是全部的错误信息，实际中可根据bindingResult的方法根据需要返回自定义的信息。
        // 通常的解决方案为：JSR-303 + 全局ExceptionHandler
        if (bindingResult.hasErrors()){
            return bindingResult.getAllErrors();
        }
        return "OK";
    }
    
}
```

## 常见的校验注解

> @Null 被注释的元素必须为 null<p>
> @NotNull 被注释的元素必须不为 null<p>
> @AssertTrue 被注释的元素必须为 true<p>
> @AssertFalse 被注释的元素必须为 false<p>
> @Min(value) 被注释的元素必须是一个数字，其值必须大于等于指定的最小值<p>
> @Max(value) 被注释的元素必须是一个数字，其值必须小于等于指定的最大值<p>
> @DecimalMin(value) 被注释的元素必须是一个数字，其值必须大于等于指定的最小值<p>
> @DecimalMax(value) 被注释的元素必须是一个数字，其值必须小于等于指定的最大值<p>
> @Size(max=, min=) 被注释的元素的大小必须在指定的范围内<p>
> @Digits (integer, fraction) 被注释的元素必须是一个数字，其值必须在可接受的范围内<p>
> @Past 被注释的元素必须是一个过去的日期<p>
> @Future 被注释的元素必须是一个将来的日期<p>
> @Pattern(regex=,flag=) 被注释的元素必须符合指定的正则表达式<p>
> <p>

> **Hibernate Validator提供的校验注解：**<p>
> @NotBlank(message =) 验证字符串非null，且长度必须大于0<p>
> @Email 被注释的元素必须是电子邮箱地址<p>
> @Length(min=,max=) 被注释的字符串的大小必须在指定的范围内<p>
> @NotEmpty 被注释的字符串的必须非空<p>
> @Range(min=,max=,message=) 被注释的元素必须在合适的范围内<p>

## 自定义校验注解
有时候，第三方库中并没有我们想要的校验类型，好在系统提供了很好的扩展能力，我们可以自定义检验。
比如，我们想校验用户的手机格式，写手机号码校验器

1、编写校验注解
```
// 我们可以直接拷贝系统内的注解如@Min，复制到我们新的注解中，然后根据需要修改。
@Target({METHOD, FIELD, ANNOTATION_TYPE, CONSTRUCTOR, PARAMETER})
@Retention(RUNTIME)
@Documented
//注解的实现类。
@Constraint(validatedBy = {IsMobileValidator.class})
public @interface IsMobile {
    //校验错误的默认信息
    String message() default "手机号码格式有问题";

    //是否强制校验
    boolean isRequired() default false;
    
    Class<?>[] groups() default {};

    Class<? extends Payload>[] payload() default {};
}
```
2、编写具体的实现类
我们知道注解只是一个标记，真正的逻辑还要在特定的类中实现，上一步的注解指定了实现校验功能的类为IsMobileValidator。
```
// 自定义注解一定要实现ConstraintValidator接口奥，里面的两个参数
// 第一个为 具体要校验的注解
// 第二个为 校验的参数类型
public class IsMobileValidator implements ConstraintValidator<IsMobile, String> {

    private boolean required = false;

    private static final Pattern mobile_pattern = Pattern.compile("1\\d{10}");
    //工具方法，判断是否是手机号
    public static boolean isMobile(String src) {
        if (StringUtils.isEmpty(src)) {
            return false;
        }
        Matcher m = mobile_pattern.matcher(src);
        return m.matches();
    }

    @Override
    public void initialize(IsMobile constraintAnnotation) {
        required = constraintAnnotation.isRequired();
    }

    @Override
    public boolean isValid(String phone, ConstraintValidatorContext constraintValidatorContext) {
        //是否为手机号的实现
        if (required) {
            return isMobile(phone);
        } else {
            if (StringUtils.isEmpty(phone)) {
                return true;
            } else {
                return isMobile(phone);
            }
        }
    }
    
}
```
3、测试自定义注解的功能
```
@Data
public class User {
    @NotNull
    @Size(min=2, max=30,message = "请检查名字的长度是否有问题")
    private String name;

    @NotNull
    @Min(18)
    private Integer age;

    //这里是新添加的注解奥
    @IsMobile
    private String phone;
}
```
## 额外
也可以通过方法的校验。

- 控制器上添加@Validated注解
- 在控制器的方法上添加校验注解，@Min，@Max等。
```
@Validated
@RestController
@SpringBootApplication
public class UserApplication{
    public static void main(String[] args) {
        SpringApplication.run(UserApplication.class,args);
    }

    @RequestMapping("/test2")
    public String test2(
            @IsMobile String phone

    ){
        return phone + "ok";
    }

    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseBody
    public Object handleConstraintViolationException(ConstraintViolationException cve){

        HashSet<String> messageSet = new HashSet();
        for (ConstraintViolation constraintViolation : cve.getConstraintViolations()) {
            messageSet.add(constraintViolation.getMessage());
        }
        return messageSet;
    }

}
```
## 最后
通过使用校验器，所有的控制器，我们都不用再去做校验啦，代码再回看是不是清爽很多。我们写代码很简答，但是一定要想到如何把代码写的更简单，更清晰，更利于维护，写重复的代码是在浪费自己的时间奥。

以后再碰到参数校验的情况，首先想到的不是直接就去校验，可以查找自己是否写过某一类的验证器，可以直接拿来即用。
