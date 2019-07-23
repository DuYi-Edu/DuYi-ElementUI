# map
> 常常被称为数据地图，也有人称其为数组，因为他总是以 key:value 成对的出现，但其更像是一个 JSON 数据。

- JSON：
  ```
    {
      "name": "shanshan",
      "age": 18,
      "looks": "beautiful"
    }
  ```

- SCSS map
  ```
    $map: (
      $name: "shanshan",
      $age: 18,
      $looks: "beautiful"
    )
  ```

## SCSS Maps的函数
- map-get($map,$key)
  > 根据给定的 key 值，返回 map 中相关的值。

- map-merge($map1,$map2)
  > 将两个 map 合并成一个新的 map。

- map-remove($map,$key)
  > 从 map 中删除一个 key，返回一个新 map。

- map-keys($map)
  > 返回 map 中所有的 key。

- map-values($map)
  > 返回 map 中所有的 value。

- map-has-key($map,$key)
  > 根据给定的 key 值判断 map 是否有对应的 value 值，如果有返回 true，否则返回 false。

- keywords($args)
  > 返回一个函数的参数，这个参数可以动态的设置 key 和 value。

# inspect函数
> Maps不能转换为纯CSS。作为变量的值或参数传递给CSS函数将会导致错误，此时可以使用inspect($value) 函数以产生输出字符串。

# !default
> 默认变量

> 在变量赋值之前， 利用!default为变量指定默认值。也就是说，如果在此之前变量已经赋值，那就不使用默认值，如果没有赋值，则使用默认值。

> 由于在声明默认值之前，并没有变量的赋值，所以就使用默认值。例：
  ```
    $content: "shanshan" !default;
    #main {
      content: $content;
    }

    编译结果：

    #main {
      content: "shanshan"; 
    }
  ```

  > 由于在默认变量值声明之前，就已经有变量赋值了，所以就不再使用默认值。例：
  ```
    $content:"shanshan";
    $content: "duyi" !default;
    #main {
      content: $content;
    }

    编译结果：

    #main {
      content: "shanshan"; 
    }
  ```