# list常用语法
## java8List.sort()排序功能

```
//按照List中对象的id属性升序
list.sort(Comparator.comparing(Stu::getId))
//按照List中对象的id属性降序
list.sort   ;
//多条件升序
list.sort(Comparator.comparing(Stu::getId).thenComparing(Stu::getSid));
//id升序,sid降序
list.sort(Comparator.comparing(Stu::getId).reversed().thenComparing(Stu::getSid));
//key值重复的map
MultiValueMap<Integer, String> timeMap = new LinkedMultiValueMap<>();
//集合升序排序
Collections.sort(student, new Comparator(){
public int compare(StudentVo p1, StudentVo p2) {
return Integer.parseInt(p1.getStudentCode()) - Integer.parseInt(p2.getStudentCode());
}
});
```