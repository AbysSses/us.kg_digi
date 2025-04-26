---
{"dg-publish":true,"dg-path":"R/R基础函数.md","permalink":"/r/r/","tags":["R"],"created":"2025-04-11T15:04:49.431+08:00","updated":"2025-04-26T13:06:14.317+08:00"}
---

# R语言中判断向量是否相同的常用函数包括：

1. `identical()` - 严格比较，检查两个对象是否完全相同，包括类型、长度和值
    
    ```r
    identical(vec1, vec2)
    ```
    
2. `all.equal()` - 近似比较，允许数值有微小的差异，更适合浮点数比较
    
    ```r
    all.equal(vec1, vec2)
    ```
    
3. ` == `   运算符配合 `all()` - 元素级比较，检查每个对应元素是否相等
    
    ```r
    all(vec1 == vec2)
    ```
    
4. `setequal()` - 检查两个向量是否包含相同的元素，不考虑顺序
    
    ```r
    setequal(vec1, vec2)
    ```
    
5. `%in%` 配合 `all()` - 检查一个向量的所有元素是否都在另一个向量中
    
    ```r
    all(vec1 %in% vec2) && all(vec2 %in% vec1)
    ```
    

# Match()函数
```text
original_data$Sample    # 假设是: c("A", "C", "B")
wang_all_subtypes$Sample # 假设是: c("B", "A", "C")

# match() 会返回: c(2, 3, 1)
# 因为:
# - "A" 在 wang_all_subtypes$Sample 中位置是 2
# - "C" 在 wang_all_subtypes$Sample 中位置是 3
# - "B" 在 wang_all_subtypes$Sample 中位置是 1

# 所以 wang_all_subtypes[c(2, 3, 1),] 会重排为:
# 行2 (对应 "A")
# 行3 (对应 "C")
# 行1 (对应 "B")

# 结果是 wang_all_subtypes$Sample 变成了: c("A", "C", "B")
# 这与 original_data$Sample 的顺序一致
```
