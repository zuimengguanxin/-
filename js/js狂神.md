# js狂神
https://www.kuangstudy.com/bbs/1478723516651454466
##  前端三要素

- HTML（结构）：HTML，超文本标记语言（Hyper Text Markup Language），为前端页面的主体，决定网页的结构和内容。可以理解为一间什么东西都没有的房间
- CSS（表现）：层叠样式表（Cascading Style Sheets），设定网页的表现样式，可以理解成房间里的地砖，灯，床
- JavaScript（行为）：是一种弱类型脚本语言，其源代码不需经过编译，而是由浏览器解释运行，用于控制网页的行为，JS为前端页面的脚本。可以理解成房间开灯，关门。

# 1.什么是JavaScript

##  1.1概述

JavaScript简称JS，是一种具有函数优先的轻量级、解释型或即时编译型的编程语言。

是一门世界上最流行的脚本语言。

一个合格的后端人员，必须精通JavaScript。

##  1.2历史

https://blog.csdn.net/kese7952/article/details/79357868

ECMAScript它可以理解为是JavaScript的一个标准

最新版本已经到ES6，但是大部分浏览器还只停留在支持ES5代码上。存在开发环境---线上环境，版本不一致的问题

#  2.快速入门

##  2.1引入JavaScript

* 内部标签

  ```javascript
  &lt;script&gt;
      alert(&quot;hello&quot;)
  &lt;/script&gt;
  ```

* 外部引入

  ```javascript
  &lt;script src=&quot;js/js.js&quot;&gt;&lt;/script&gt;
  ```

* 测试代码

  ```javascript
  &lt;!DOCTYPE html&gt;
  &lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
      &lt;meta charset=&quot;UTF-8&quot;&gt;
      &lt;title&gt;Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
  &lt;!--第一种方式，内部引用 --&gt;
  &lt;script&gt;
      /**
       * script标签内写JavaScript代码，script标签必须成对出现。
       */
      alert(&quot;hello&quot;)
  &lt;/script&gt;
  &lt;!--第二种方式，外部引用--&gt;
  &lt;script src=&quot;js/js.js&quot;&gt;&lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
  ```

##  2.2浏览器控制台调试

在页面上可以按F12调出控制台，可以在这里输出当前页面的变量值（或者写脚本），非常方便。

![img](https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/12/28/kuangstudyb1e7c268-cdb2-42bf-ae16-04c5768e6db2.png)

##  2.3.数据类型

###  2.3.1快速入门

- 因为JS是弱语言，里面不用声明类型。

- 统一用 `var` 来声明变量

- 在ES6新增加了`let` 和`const`来声明变量。

- 测试代码：

  ```javascript
  &lt;!--JavaScript严格区分大小写！--&gt;
      &lt;script&gt;
          // 1. 定义变量    变量类型  变量名  = 变量值;
          // 注：在JavaScript中不存在变量类型，一切的变量都叫var，对于var并没有一个固定的变量类型的限制
          var score = 71;// 此时score就是一个数字类型的变量
          var name=&#39;qqqdweob&#39;;// 此时name就是一个字符串类型的变量
          // alert(score);
          // 2. 条件控制
          if (score&gt;60 &amp;&amp; score&lt;70){
              alert(&quot;60~70&quot;)
          }else if(score&gt;70 &amp;&amp; score&lt;80){
              alert(&quot;70~80&quot;)
          }else{
              alert(&quot;other&quot;)
          }
      &lt;/script&gt;
  ```

###  2.3.2Number

JavaScript不区分浮点数和整数，统一用Number表示，以下都是合法的Number类型：

```javascript
//--- number
var a  = 1;
a = 123//整数
a = 123.1//浮点数
a = -99//负数
a = NaN//not a number，当无法计算结果时用NaN表示
a = 1.2345e3//科学计数法表示1.2345X1000，等同于1234.5
InFinity//InFinity表示无限大，当数值超过了JavaScript的Number能表示的最大值时表示为InFinity
```

###  2.3.3字符串

```javascript
//--- 字符串
var b = &quot;abc&quot;;
b = &#39;cba&#39;;
```

###  2.3.4布尔值

一个布尔值只有true、false两种值，要么是true，要么是false，可以直接用true、false表示布尔值，也可以通过布尔运算计算出来：

```javascript
//--- 布尔值
var c = true;
c = false;
true; // 这是一个true值 
false; // 这是一个false值 
2 &gt; 1; // 这是一个true值 
2 &gt;= 3; // 这是一个false值
```

###  2.3.5运算符

* 逻辑运算符

```javascript
//--- 逻辑运算符
&amp;&amp;  //两个都为真，结果为真
||    //一个为真，结果为真
!    //真即假，假即真
```

* 比较运算符

  ```javascript
  //--- 比较运算符
  =      //赋值运算法
  ==     //等于（类型不一致，值一样，也会判断为true  即判断1==&#39;1&#39;）
  ===    //绝对等于（类型一样，值一样，结果为true）
  ```

  当我们对Number做比较时，可以通过比较运算符得到一个布尔值：

  ```javascript
  2 &gt; 5; // false 
  5 &gt;= 2; // true 
  7 == 7; // true
  ```

  实际上，JavaScript允许对任意数据类型做比较：

  ```javascript
  false == 0; // true 
  false === 0; // false
  ```

  须知：

* 由于JavaScript的设计缺陷，不要使用==比较，始终坚持使用===比较

* NaN，not a number，当无法计算结果时用NaN表示，与所有的数值都不相等，包括自己

  ```javascript
  NaN === NaN; //false
  ```

* 只能通过isNaN()来判断这个数是不是NaN

###  2.3.6浮点数问题

```javascript
(1/3)===(1-2/3) //结果为false
```

尽量避免使用浮点数进行运算，存在精度问题

```javascript
Math.abs(1/3-(1-2/3))&lt;0.00000001 //结果为true
```

###  2.3.7null和undefined

- null 空；

  它和 0 以及空字符串 &quot; &quot; 不同， 0 是一个数值， &quot; &quot;表示长度为0的字符串，而 null 表示“空”。

- undefined 未定义

- 大多数情况下，我们都应该用 null 。 undefined 仅仅在判断函数参数是否传递的情况下有用。

###  2.3.8数组

* Java的数组必须是相同类型的对象。JS中不需要这样！

* 数组是一组按顺序排列的集合，集合的每个值都称为元素。

* JS的数组可以包括任意数据类型。例如：

```javascript
[1, 2, 3.14, &#39;Hello&#39;, null, true];
```

上述数组包含6个元素。数组用 [] 表示，元素之间用 , 分隔。

* 数组的元素可以通过索引来访问。请注意，索引的起始值为 0 ：

```javascript
var arr = [1, 2, 3.14, &#39;Hello&#39;, null, true]; arr[0]; // 返回索引为0的元素，即1 
arr[5]; // 返回索引为5的元素，即true 
arr[6]; // 索引超出了范围，返回undefined
```

* 在浏览器的控制台打印，取数组下标：如果越界了，就会undefined——未定义

###  2.3.9对象

* 对象是大括号，数组是中括号

* 每一个属性之间使用逗号隔开，最后一个不需要加逗号

* JavaScript的对象是一组由键-值对组成的无序集合，例如：

```javascript
var person = { 
    name: &#39;Bob&#39;, 
    age: 20, 
    tags: [&#39;js&#39;, &#39;web&#39;, &#39;mobile&#39;],
    city: &#39;Beijing&#39;, 
    hasCar: true, 
    zipcode: null 
};
```

* ​	JS对象的键都是字符串类型，值可以是任意数据类型。上述 person 对象一共定义了6个键值对，其中每个键又称为对象的属性，例如， person 的 name 属性为 &#39;Bob&#39; ， zipcode 属性为 null 。

* 取对象的值，我们用 对象变量.属性名 的方式：

```javascript
person.name; // &#39;Bob&#39; 
person.zipcode; // null
```

###  2.3.10变量

* 变量在JS中就是用一个变量名表示

* 变量名是大小写英文、数字、 $ 和 _ 的组合，且不能用数字开头

* 变量名也不能是JS的关键字，如 if 、 while 等

* 申明一个变量用 var 语句，比如：

  ```javascript
  var a; // 申明了变量a，此时a的值为undefined-未定义
  var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1 
  var s_007 = &#39;007&#39;; // s_007是一个字符串
  var Answer = true; // Answer是一个布尔值true 
  var t = null; // t的值是null
  ```

* 变量名也可以用中文，但是，请不要给自己找麻烦。

* 变量的赋值：

  在JS中，使用等号 = 对变量进行赋值。可以把任意数据类型赋值给变量，同一个变量可以反复赋值，而且可以是不同类型的变量，但是要注意只能用 var 申明一次，例如：

  ```javascript
  var a = 123; // a的值是整数123 
  a = &#39;ABC&#39;; // a变为字符串
  ```

* 这种变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。例如Java是静态语言，赋值语句如下：

```javascript
int a = 123; // a是整数类型变量，类型用int申明 
a = &quot;ABC&quot;; // 错误：不能把字符串赋给整型变量
```

* 和静态语言相比，动态语言更灵活，就是这个原因。

* 请不要把赋值语句的等号等同于数学的等号。

## 2.4.严格检查模式

* JS在设计之初，为了方便初学者学习，并不强制要求使用var声明变量，这个设计错误带来的后果是：如果一个变量没有通过var声明就被使用，那么该变量就自动被声明为全局变量。

```javascript
i=10;//现在是全局变量
```

* 在同一个页面的不同的JS文件中，如果都不用 var 声明，而恰好都使用了变量 i ，将造成变量 i 互相影响，产生难以调试的错误结果。
* 使用 var 声明的变量则不是全局变量，它的范围被限制在该变量被声明的函数体内，同名变量在不同的函数体内互不冲突。
* 为了修补JS这一严重设计缺陷，ECMA在后续规范中推出了strict模式，在strict模式下运行的JS代码，强制通过 var 声明变量，未使用 var 声明变量就使用的，将导致运行错误。
* 启用strict模式的方法是在JavaScript代码的第一行写上：

```javascript
&#39;use strict&#39;;
```

* 这是一个字符串，不支持strict模式的浏览器会把它当作一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JS。

  * 调试自己的浏览器是否能支持strict模式：

    ```javascript
    &#39;use strict&#39;;
    //如果浏览器支持strict模式，下面的代码将报ReferenceError错误；
    abc=&#39;hello world&#39;;
    console.log(abc);
    ```

* 代码部分：

```javascript
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;title&gt;Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!--
前提：Idea，设置支持ES6语法
&#39;use strict&#39;;严格检查模式，预防JS随意性导致产生的一些问题
必须写在script标签内的第一行！
局部变量建议都使用let去定义
--&gt;
&lt;script&gt;
    &#39;use strict&#39;;
    let a = 1;
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;                                           
```

#  3.数据类型

## 3.1字符串

* 正常字符串我们使用单引号、双引号包裹

  ```javascript
  console.log(&#39;a&#39;);
  console.log(&quot;a&quot;);
  ```

* 注意转义字符 \ 

  ```javascript
  &#39;i\&#39;m\&quot;ok\&quot;!&#39;;
  console.log(&#39;i\&#39;m\&quot;ok\&quot;!&#39;)
  i&#39;m&quot;ok!
  ```

```javascript
\ &#39;
\n 表示换行
 \t 表示制表符
 字符 \ 本身也要转义,所以 \\ 表示的字符就是 \ 
 &#39;\x41&#39;; // 完全等同于 &#39;A&#39;;ASCII字符可以以 \x## 形式的十六进制表示
&#39;\u4e2d\u6587&#39;; // 完全等同于 &#39;中文&#39;;以用 \u#### 表示一个Unicode字符
```

* 多行字符串

```javascript
  //tab上面 esc键下面，此处为反引号 
var msg=
              `hello 
               world
               你好呀
               你好ya`
console.log(msg)
hello
world
你好呀
你好ya
```

*  模板字符串

  ```javascript
    let name =&quot;zhangsan&quot;;
          let age =154;
          let msg =`你好呀,${name}`//此处为反引号
   console.log(msg)
  你好呀，zhangsan
  ```

* 字符串长度

  ```javascript
  var student=&quot;student&quot;
  console.log(student.length)
  7
  console.log(student[0])
  s
  ```

* 字符串的可变性——不可变

  ```javascript
  var student=&quot;student&quot;
  student[0]=1
  1
  console.log(student)
  student
  ```

* 大小写转换

  ```javascript
  //注意：这里是方法，不是属性了
  var student=&quot;student&quot;
  student.toUpperCase()
  STUDENT
  student.toLowerCase()
  student
  ```

* 字符串查找

  ```javascript
  var student=&quot;student&quot;
  console.log(student.indexOf(&#39;t&#39;))
  1
  console.log(student.indexOf(&#39;u&#39;))
  2
  ```

* 截取

  ```javascript
  var student=&quot;student&quot;
  student.substring(1)//从第一个字符串截取到最后一个字符串
  tudent
  student.substring(1,3)//下标几到下标几
  tu
  student.substring(0)
  student
  ```

## 3.2数组

JavaScript的 Array 可以包含任意数据类型，并通过索引来访问每个元素。

```javascript
var arr=[1,2,3,4,5,6]
//通过下标取值和赋值
arr[0]
1
arr[0]=1
1
```

* 1.长度

  ```javascript
  var arr=[1,2,3,4,5,6]
  arr.length
  6
  ```

  * 注意;假如给iarr.length赋值，数组大小就会发生变化；

    如果赋值过小，元素就会丢失

    ```javascript
    var arr=[1,2,3,4,5,6]
    arr.length
    6
    arr.length=10
    10
    console.log(arr)
    (10)[1,2,3,4,5,6,empty*4]
    arr.length=3
    3
    console.log(arr)
    (3)[1,2,3]
    ```

* 2.获得下标索引——indexOf()

  ```javascript
  var arr=[1,2,3,&quot;1&quot;,&quot;3&quot;]
  arr.indexOf(3)
  2
  arr.indexOf(&quot;3&quot;)
  4
  //注意：字符串的&quot;1&quot;和数字的1是不一样的
  ```

* 3.数组截取——slice()

  截取数组的一部分，返回一个新的数组.类似于string中的substring()

  ```javascript
  var arr=[1,2,3,4,5,6]
  arr.slice(3)
  (3) [4,5,6]
  ```

* 4.元素操作

  * 对尾部元素的操作

    push():插入到尾部；

    pop()：删除尾部的一个元素

    ```javascript
    var arr=[1,2,3,4,5,6]
    arr.push(&quot;a&quot;,&quot;b&quot;)
    8
    arr
    (8) [1,2,3,4,5,6,&quot;a&quot;,&quot;b&quot;]
    arr.pop()
    &quot;b&quot;
    arr
    (7) [1,2,3,4,5,6,&quot;a&quot;]
    ```

  * 对头部元素进行操作

    unshift():插入到头部；

    shift()：删除头部的一个元素；

    ```javascript
    var arr=[1,2,3,4,5,6]
    arr.unshift(&quot;a&quot;,&quot;b&quot;)
    8
    arr
    (8) [&quot;a&quot;,&quot;b&quot;,1,2,3,4,5,6]
    arr.shift()
    &quot;a&quot;
    arr
    (7) [&quot;b&quot;,1,2,3,4,5,6]
    ```

* 5.排序 ——sort()

  ```javascript
  var arr=[&quot;c&quot;,&quot;b&quot;,&quot;a&quot;]
  arr.sort()
  (3) [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]
  ```

* 6.元素反转——reverse()

  ```javascript
  var arr=[&quot;a&quot;,&quot;b&quot;,&quot;d&quot;]
  arr.reverse()
  (3) [&quot;d&quot;,&quot;b&quot;,&quot;a&quot;]
  ```

* 7.concat():把当前的数组和另一个数组连接起来，并返回一个新的数组

  ```javascript
  var arr = [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]; 
  arr.concat([1, 2, 3]); 
  (6) [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, 1, 2, 3]
  //注意：concat（）并没有修改当前数组，只是返回了一个新的数组
  console.log(arr)
  (3) [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]
  ```

* 8.join()——把当前 Array 的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：

  ```javascript
  var arr = [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;, 1, 2, 3]
  arr.join(&#39;-&#39;); 
  &#39;A-B-C-1-2-3&#39;
  ```

  注意：如果 Array 的元素不是字符串，将自动转换为字符串后再连接。

* 9.splice()——splice() 方法是修改 Array 的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素

  会改变原来的数组

  ```javascript
  var arr = [&#39;Microsoft&#39;, &#39;Apple&#39;, &#39;Yahoo&#39;, &#39;AOL&#39;, &#39;Excite&#39;, &#39;Oracle&#39;]; 
  // 从索引2开始删除3个元素,然后再添加两个元素:
  arr.splice(2, 3, &#39;Google&#39;, &#39;Facebook&#39;); 
  // 返回删除的元素 
  [&#39;Yahoo&#39;, &#39;AOL&#39;, &#39;Excite&#39;] 
  arr;
  [&#39;Microsoft&#39;, &#39;Apple&#39;, &#39;Google&#39;, &#39;Facebook&#39;, &#39;Oracle&#39;] 
  // 只删除,不添加:
  arr.splice(2, 2); 
  [&#39;Google&#39;, &#39;Facebook&#39;] 
  arr; 
  [&#39;Microsoft&#39;, &#39;Apple&#39;, &#39;Oracle&#39;] 
  // 只添加,不删除: 
  arr.splice(2, 0, &#39;Google&#39;, &#39;Facebook&#39;); 
  // 返回[],因为没有删除任何元素 
  arr; 
  [&#39;Microsoft&#39;, &#39;Apple&#39;, &#39;Google&#39;, &#39;Facebook&#39;, &#39;Oracle&#39;]
  ```

* 10.多维数组——如果数组的某个元素又是一个Array，则可以形成多维数组

  ```javascript
  var arr=[[1,2,3],[200,900,877],&#39;-&#39;]
  //上述Array包含3个元素，其中头两个元素本身也是Array
  //通过索引取到500这个值
  arr[0][2]
  3
  arr[1][1]
  900
  arr[2]
  &#39;-&#39;
  ```

  