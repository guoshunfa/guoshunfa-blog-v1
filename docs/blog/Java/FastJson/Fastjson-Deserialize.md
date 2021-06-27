# fastjson - 自定义反序列化

## 场景

​	反序列化时需要进行特殊处理的**类型**，可以进行特殊配置。

## 自定义反序列化解析器 - ObjectDeserializer

```java
public class PersonDeserializer implements ObjectDeserializer {

    @Override
    public Person deserialze(DefaultJSONParser parser, Type type, Object fieldName) {
				/*
				 * 处理过程
				 */
      
      	// 处理之后的返回结果
        return null;
    }

    @Override
    public int getFastMatchToken() {
        return 0;
    }

}

```

## 使用解析器

有三种方法，按情况决定使用哪种。

1. 定义的字段上加解析器注解

```java
@Setter
@Getter
private static class ResultData {
		@JSONField(deserializeUsing = PersonDeserializer.class)
    private Person personInfo;
}
```

2. **框架统一配置**，反序列化时会根据类型进行匹配。

   在WebAppConfigurer#configureMessageConverters中加入。

```java
ParserConfig.getGlobalInstance().putDeserializer(AlarmString.class,AlarmStringDeserializer.instance);
```

3. 反系列化时使用。

```java
ParserConfig parserConfig = new ParserConfig();
parserConfig.putDeserializer(AlarmString.class, AlarmStringDeserializer.instance);
Alarm alarm = JSON.parseObject(jsonStr, Alarm.class, parserConfig);
```

###### 反序列化相关的概念

- ParserConfig：内部通过一个map保存各种ObjectDeserializer。
- JSONLexer : 与SerializeWriter相对应，用于解析json字符串。
- JSONToken：定义了一系统的特殊字符，这些称为token。
- ParseProcess ：定制反序列化，类似于SerializeFilter。
- Feature：用于定制各种反序列化的特性。
- DefaultJSONParser：相当于反序列化组合器，集成了ParserConfig，Feature， JSONLexer 与ParseProcess。

反序列化的入口代码如下，上面的概念基本都包含了：

```java
    @SuppressWarnings("unchecked")
    public static <T> T parseObject(String input, Type clazz, ParserConfig config, ParseProcess processor,
                                          int featureValues, Feature... features) {
        if (input == null) {
            return null;
        }

        if (features != null) {
            for (Feature feature : features) {
                featureValues |= feature.mask;
            }
        }

        DefaultJSONParser parser = new DefaultJSONParser(input, config, featureValues);

        if (processor != null) {
            if (processor instanceof ExtraTypeProvider) {
                parser.getExtraTypeProviders().add((ExtraTypeProvider) processor);
            }

            if (processor instanceof ExtraProcessor) {
                parser.getExtraProcessors().add((ExtraProcessor) processor);
            }

            if (processor instanceof FieldTypeResolver) {
                parser.setFieldTypeResolver((FieldTypeResolver) processor);
            }
        }

        T value = (T) parser.parseObject(clazz, null);

        parser.handleResovleTask(value);

        parser.close();

        return (T) value;
    }
```





