# 什么是BEM？

- block: 块
- element：元素
- modifier：修饰符

## 解释

- 块：独立的实体，它本身是有意义的。就像应用的一块“积木”。一个块既可以是简单的也可以是复合的（包含其他块）。

- 元素：块的一部分，没有独立的含义，并且在语义上与其块相关联

- 修饰符：块或元素上的标志。用它们来改变外观或行为。

## 写法

- 块：.block
- 元素： .block__element
- 修饰符： .block--modifier

.block {
  
  &__element {

  }

  &--modifier {
    
  }
}