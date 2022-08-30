# js基础
## 1.js简介
    JavaScript 是属于 HTML 和 Web 的编程语言。
    JavaScript 能够改变 HTML 内容
### （1）getElementById() 是多个 JavaScript HTML 方法之一。
    本例使用该方法来“查找” id="demo" 的 HTML 元素，并把元素内容（innerHTML）更改为 "Hello JavaScript"：
    实例
    document.getElementById("demo").innerHTML = "Hello JavaScript";
    提示：JavaScript 同时接受双引号和单引号：
    实例
    document.getElementById("demo").innerHTML = 'Hello JavaScript';

### （2）JavaScript 能够改变 HTML 属性
    本例通过改变 <img> 标签的 src 属性（source）来改变一张 HTML 图像：
    <button onclick="document.getElementById('myImage').src='/i/eg_bulbon.gif'">开灯</button>
    <img id="myImage" border="0" src="/i/eg_bulboff.gif" style="text-align:center;">
    <button onclick="document.getElementById('myImage').src='/i/eg_bulboff.gif'">关灯</button>

### （3）JavaScript 能够改变 HTML 样式 (CSS)
    改变 HTML 元素的样式，是改变 HTML 属性的一种变种：
    实例
    document.getElementById("demo").style.fontSize = "25px";

### （4）JavaScript 能够隐藏 HTML 元素
    可通过改变 display 样式来隐藏 HTML 元素：

    实例
    document.getElementById("demo").style.display="none";

### （5）JavaScript 能够显示 HTML 元素
    可通过改变 display 样式来显示隐藏的 HTML 元素：
    实例
    document.getElementById("demo").style.display="block";

## 2.JavaScript的使用
### （1）<script> 标签
    在 HTML 中，JavaScript 代码必须位于 <script> 与 </script> 标签之间。
    实例
    <script>
    document.getElementById("demo").innerHTML = "我的第一段 JavaScript";
    </script>
    注释：旧的 JavaScript 例子也许会使用 type 属性：<script type="text/javascript">。
    注释：type 属性不是必需的。JavaScript 是 HTML 中的默认脚本语言。

### （2）JavaScript 函数和事件
    JavaScript 函数是一种 JavaScript 代码块，它可以在调用时被执行。
    例如，当发生事件时调用函数，比如当用户点击按钮时。
### （3）JavaScript的位置
#### 内部脚本
    您能够在 HTML 文档中放置任意数量的脚本。
    脚本可被放置与 HTML 页面的 <body> 或 <head> 部分中，或兼而有之。
    提示：把脚本置于 <body> 元素的底部，可改善显示速度，因为脚本编译会拖慢显示。

#### 外部脚本
##### 外部脚本位置
    脚本可放置与外部文件中：
    外部文件：myScript.js
    function myFunction() {
        document.getElementById("demo").innerHTML = "段落被更改。";
    }
    外部脚本很实用，如果相同的脚本被用于许多不同的网页。
    JavaScript 文件的文件扩展名是 .js。
##### 外部脚本使用
    如需使用外部脚本，请在 <script> 标签的 src (source) 属性中设置脚本的名称：
    实例
    <script src="myScript.js"></script>
    注释：外部脚本不能包含 <script> 标签。

##### 外部 JavaScript 的优势
    在外部文件中放置脚本有如下优势：
    分离了 HTML 和代码
    使 HTML 和 JavaScript 更易于阅读和维护
    已缓存的 JavaScript 文件可加速页面加载
    如需向一张页面添加多个脚本文件 - 请使用多个 script 标签：
    实例
    <script src="myScript1.js"></script>
    <script src="myScript2.js"></script>
##### 外部引用
    可通过完整的 URL 或相对于当前网页的路径引用外部脚本：
    本例使用完整的 URL 来链接至脚本：
    实例
    <script src="https://www.w3school.com.cn/js/myScript1.js"></script>
    本例使用了位于当前网站上指定文件夹中的脚本：
    实例
    <script src="/js/myScript1.js"></script>
    本例链接了与当前页面相同文件夹的脚本：
    实例
    <script src="myScript1.js"></script>
 
    您能够在 HTML 文件路径中学习更多有关文件路径的知识 
### 3.JavaScript 输出
    JavaScript 不提供任何内建的打印或显示函数。

    JavaScript 显示方案
    JavaScript 能够以不同方式“显示”数据：
    使用 window.alert() 写入警告框
    使用 document.write() 写入 HTML 输出
    使用 innerHTML 写入 HTML 元素
    使用 console.log() 写入浏览器控制台
#### （1）使用 innerHTML
    如需访问 HTML 元素，JavaScript 可使用 document.getElementById(id) 方法。
    id 属性定义 HTML 元素。innerHTML 属性定义 HTML 内容：

    实例
    <!DOCTYPE html>
    <html>
    <body>
        <h1>我的第一张网页</h1>
        <p>我的第一个段落</p>
        <p id="demo"></p>

    <script>
        document.getElementById("demo").innerHTML = 5 + 6;
    </script>
    </body>
    </html> 
    提示：更改 HTML 元素的 innerHTML 属性是在 HTML 中显示数据的常用方法。

#### （2）使用 document.write()
    出于测试目的，使用 document.write() 比较方便：
    实例
    <!DOCTYPE html>
    <html>
    <body>
        <h1>我的第一张网页</h1>
        <p>我的第一个段落</p>
    <script>
        document.write(5 + 6);
    </script>
    </body>
    </html> 
    注意：在 HTML 文档完全加载后使用 document.write() 将删除所有已有的 HTML ：
    实例
    <!DOCTYPE html>
    <html>
    <body>
        <h1>我的第一张网页</h1>
        <p>我的第一个段落</p>
    <button onclick="document.write(5 + 6)">试一试</button>
    </body>
    </html>
    提示：document.write() 方法仅用于测试。

#### （3）使用 window.alert()
    您能够使用警告框来显示数据：
    实例
    <!DOCTYPE html>
    <html>
    <body>
        <h1>我的第一张网页</h1>
        <p>我的第一个段落</p>
    <script>
        window.alert(5 + 6);
    </script>

    </body>
    </html> 
 
    使用 console.log()
    在浏览器中，您可使用 console.log() 方法来显示数据。
    请通过 F12 来激活浏览器控制台，并在菜单中选择“控制台”。
    实例
    <!DOCTYPE html>
    <html>
    <body>
        <h1>我的第一张网页</h1>
        <p>我的第一个段落</p>
    <script>
        console.log(5 + 6);
    </script>

    </body>
    </html>
## 3.js语法句
    在 HTML 中，JavaScript 语句是由 web 浏览器“执行”的“指令”。

    实例
    var x, y, z;	// 语句 1
    x = 22;		// 语句 2
    y = 11;		// 语句 3
    z = x + y;	// 语句 4
### （1）JavaScript 语句由以下构成：

    值、运算符、表达式、关键词和注释。

    这条语句告诉浏览器在 id="demo" 的 HTML 元素中输出 "Hello Kitty."：
    实例
    document.getElementById("demo").innerHTML = "Hello Kitty.";
    大多数 JavaScript 程序都包含许多 JavaScript 语句。
    这些语句会按照它们被编写的顺序逐一执行。
    注释：JavaScript 程序（以及 JavaScript 语句）常被称为 JavaScript 代码。
### （2）分号分隔 JavaScript 语句。
        a = 5;
        b = 6;
        c = a + b;
    如果有分号分隔，允许在同一行写多条语句：
    a = 5; b = 6; c = a + b;
    您可能在网上看到不带分号的例子。
    提示：以分号结束语句不是必需的，但我们仍然强烈建议您这么做。

### （3）JavaScript 空白字符
    JavaScript 会忽略多个空格。您可以向脚本添加空格，以增强可读性。
    下面这两行是相等的：
    var person = "Bill";
    var person="Bill"; 
    在运算符旁边（ = + - * / ）添加空格是个好习惯：
    var x = y + z;
### （4）JavaScript 行长度和折行
    为了达到最佳的可读性，程序员们常常喜欢把代码行控制在 80 个字符以内。
    如果 JavaScript 语句太长，对其进行折行的最佳位置是某个运算符：
    实例
    document.getElementById("demo").innerHTML =
    "Hello Kitty.";
### （5）JavaScript 代码块
    JavaScript 语句可以用花括号（{...}）组合在代码块中。
    代码块的作用是定义一同执行的语句。
    您会在 JavaScript 中看到成块组合在一起的语句：
    实例
    function myFunction() {
        document.getElementById("demo").innerHTML = "Hello Kitty.";
        document.getElementById("myDIV").innerHTML = "How are you?";
    }

### （6）JavaScript 关键词
    JavaScript 语句常常通过某个关键词来标识需要执行的 JavaScript 动作。
    关键词	        描述
    break	        终止 switch 或循环。
    continue	    跳出循环并在顶端开始。
    debugger	    停止执行 JavaScript，并调用调试函数（如果可用）。
    do ... while	执行语句块，并在条件为真时重复代码块。
    for	            标记需被执行的语句块，只要条件为真。
    function	    声明函数。
    if ... else	    标记需被执行的语句块，根据某个条件。
    return	        退出函数。
    switch	        标记需被执行的语句块，根据不同的情况。
    try ... catch	对语句块实现错误处理。
    var	            声明变量。
    注释：JavaScript 关键词指的是保留的单词。保留词无法用作变量名。
## 4.js语法
    javaScript 语法是一套规则，它定义了 JavaScript 的语言结构。
    var x, y;	// 如何声明变量
    x = 7; y = 8;	// 如何赋值
    z = x + y;	// 如何计算值
 ### (1)JavaScript 值
    JavaScript 语句定义两种类型的值：混合值和变量值。
    混合值被称为字面量（literal）。变量值被称为变量。
### (2)JavaScript 字面量
#### 书写混合值最重要的规则是：
        写数值有无小数点均可：
#### 字符串是文本，由双引号或单引号包围：
        "Bill Gates"
        'Bill Gates' 
### （3）JavaScript 变量
    在编程语言中，变量用于存储数据值。
    JavaScript 使用 var 关键词来声明变量。
    = 号用于为变量赋值。
    在本例中，x 被定义为变量。然后，x 被赋的值是 7：
        var x;
        x = 7;
### (4)JavaScript 运算符
    JavaScript 使用算数运算符（+ - * /）来计算值：
        (7 + 8) * 10
    JavaScript 使用赋值运算符（=）向变量赋值：
        var x, y;
        var x = 7;
        var y = 8;
#### (5)JavaScript 表达式
    表达式是值、变量和运算符的组合，计算结果是值。
        6 * 10
    表达式也可包含变量值：
        x * 10
    值可以是多种类型，比如数值和字符串。
    例如，"Bill" + " " + "Gates"，计算为 "Bill Gates"：
#### (6)JavaScript 关键词
    JavaScript 关键词用于标识被执行的动作。
    var 关键词告知浏览器创建新的变量：
    var x = 7 + 8;
    var y = x * 10; 
 
#### (7)JavaScript 注释
    并非所有 JavaScript 语句都被“执行”。
    双斜杠 // 或 /* 与 */ 之间的代码被视为注释。
    注释会被忽略，不会被执行：
    var x = 7;   // 会执行
    // var x = 8;   不会执行
 
#### (8)JavaScript 标识符
##### 标识符是名称。
        在 JavaScript 中，标识符用于命名变量（以及关键词、函数和标签）。
        在大多数编程语言中，合法名称的规则大多相同。
##### 在 JavaScript 中，首字符必须是字母、下划线（-）或美元符号（$）。
        连串的字符可以是字母、数字、下划线或美元符号。
        提示：数值不可以作为首字符。这样，JavaScript 就能轻松区分标识符和数值。

##### JavaScript 对大小写敏感
    所有 JavaScript 标识符对大小写敏感。
    变量 lastName 和 lastname，是两个不同的变量。
        lastName = "Gates";
        lastname = "Jobs"; 
    JavaScript 不会把 VAR 或 Var 译作关键词 var。

##### JavaScript 与驼峰式大小写
    历史上，程序员曾使用三种把多个单词连接为一个变量名的方法：
    连字符：
        first-name, last-name, master-card, inter-city.
    注释：JavaScript 中不能使用连字符。它是为减法预留的。
    下划线：
        first_name, last_name, master_card, inter_city.
    驼峰式大小写（Camel Case）：
        FirstName, LastName, MasterCard, InterCity.
        camelCase
    JavaScript 程序员倾向于使用以小写字母开头的驼峰大小写：
        firstName, lastName, masterCard, interCity
##### JavaScript 字符集
    JavaScript 使用 Unicode 字符集。
    Unicode 覆盖世界上几乎所有的字符、标点和符号。
## JavaScript 注释
    JavaScript 注释用于解释 JavaScript 代码，增强其可读性。
    JavaScript 注释也可以用于在测试替代代码时阻止执行。

### 1.单行注释
    单行注释以 // 开头。
    任何位于 // 与行末之间的文本都会被 JavaScript 忽略（不会执行）。
    本例在每条代码行之前使用单行注释：
    实例
    // 改变标题：
        document.getElementById("myH").innerHTML = "我的第一张页面";
    // 改变段落：
        document.getElementById("myP").innerHTML = "我的第一个段落。";

    本例在每行结尾处使用了单行注释来解释代码：
    实例
        var x = 5;      // 声明 x，为其赋值 5
        var y = x + 2;  // 声明 y，为其赋值 x + 2
   
### 2.多行注释
        多行注释以 /* 开头，以 */ 结尾。
        任何位于 /* 和 */ 之间的文本都会被 JavaScript 忽略。
    本例使用多行注释（注释块）来解释代码：
    实例
        /*
        下面的代码会改变
        网页中
        id = "myH" 的标题
        以及 id = "myP" 的段落：
        */
        document.getElementById("myH").innerHTML = "我的第一张页面";
        document.getElementById("myP").innerHTML = "我的第一个段落。"; 

### 3.使用注释来阻止执行
    使用注释来防止代码执行很适合代码测试。
    在代码行之前添加 // 会把可执行的代码行更改为注释。
    本例使用 // 来阻止代码行的执行：

    实例
        //document.getElementById("myH").innerHTML = "我的第一张页面";
        document.getElementById("myP").innerHTML = "我的第一个段落。"; 
    本例使用注释块来阻止多行代码的执行：
    实例
        /*
        document.getElementById("myH").innerHTML = "我的第一张页面";
        document.getElementById("myP").innerHTML = "我的第一个段落。";
        */
### 4.JavaScript 变量
#### (1)JavaScript 变量是存储数据值的容器。
    在本例中，x、y 和 z 是变量：
    实例
        var x = 7;
        var y = 8;
        var z = x + y; 
    从上例中，您可获得：
        x 存储值 7
        y 存储值 8
        z 存储值 15
    类似代数
    在本例中，price1、price2 以及 total 是变量：
    实例
        var price1 = 7;
        var price2 = 8;
        var price3 = 12;
        var total = price1 + price2 + price3;
    在编程中，类似代数，我们使用变量（比如 price1）来存放值。
    在编程中，类似代数，我们在表达式中使用变量（total = price1 + price2 + price3）。
    从上例中，您可以算出 total 的值是 27。
    提示：JavaScript 变量是存储数据值的容器。

#### (2)赋值运算符
    在 JavaScript 中，等号（=）是赋值运算符，而不是“等于”运算符。
    这一点与代数不同。下面的代码在代数中是不合理的：
        x = x + 5
    然而在 JavaScript 中，它非常合理：把 x + 5 的值赋给 x。
    （计算 x + 5 的值并把结果放入 x 中。x 的值递增 5。）
    注释：JavaScript 中的“等于”运算符是 ==。

#### (3)JavaScript 数据类型
    JavaScript 变量可存放数值，比如 100，以及文本值，比如 "Bill Gates"。
    在编程中，文本值被称为字符串。
    JavaScript 可处理多种数据类型，但是现在，我们只关注数值和字符串值。
##### 字符串被包围在双引号或单引号中。数值不用引号。
    如果把数值放在引号中，会被视作文本字符串。
    实例
        var pi = 3.14;
        var person = "Bill Gates";
        var answer = 'How are you!';
#### (4)声明（创建） JavaScript 变量
    在 JavaScript 中创建变量被称为“声明”变量。
    您可以通过 var 关键词来声明 JavaScript 变量：
        var carName;
    声明之后，变量是没有值的。（技术上，它的值是 undefined。）
    如需赋值给变量，请使用等号：
        carName = "porsche";
    您可以在声明变量时向它赋值：
        var carName = "porsche";
    在上面的例子中，我们创建了名为 carName 的变量，并向其赋值 "porsche"。

    然后，我们在 id="demo" 的 HTML 段落中“输出”该值：
    实例
        <p id="demo"></p>
        <script>
        var carName = "porsche";
        document.getElementById("demo").innerHTML = carName; 
        </script>
    提示：在脚本的开头声明所有变量是个好习惯！

#### (5)一条语句，多个变量
    您可以在一条语句中声明许多变量,以 var 作为语句的开头，并以逗号分隔变量：
        var person = "Bill Gates", carName = "porsche", price = 15000;
    声明可横跨多行：
        var person = "Bill Gates",
        carName = "porsche",
        price = 15000;
#### (6)Value = undefined
    在计算机程序中，被声明的变量经常是不带值的。值可以是需被计算的内容，或是之后被提供的数据，比如数据输入。
    不带有值的变量，它的值将是 undefined。
    变量 carName 在这条语句执行后的值是 undefined：
    实例
        var carName;
#### (7)重复声明 JavaScript 变量
    如果再次声明某个 JavaScript 变量，将不会丢它的值。
    在这两条语句执行后，变量 carName 的值仍然是 "porsche"：
    实例
        var carName = "porsche";
        var carName; 
#### (8)JavaScript 算术
    与代数类似，您能够通过 JavaScript 变量进行算术运算，使用 = 和 + 之类的运算符：

    实例
        var x = 3 + 5 + 8;
    字符串也可以使用加号，但是字符串将被级联：

    实例
        var x = "Bill" + " " + "Gates";
        
    还可以试试这个：
    实例
        var x = "8" + 3 + 5;
    提示：如果把要给数值放入引号中，其余数值会被视作字符串并被级联。

    现在试试这个：
    实例
        var x = 3 + 5 + "8";
### 5.JavaScript Let
    ES2015 引入了两个重要的 JavaScript 新关键词：let 和 const。
    这两个关键字在 JavaScript 中提供了块作用域（Block Scope）变量（和常量）。
    在 ES2015 之前，JavaScript 只有两种类型的作用域：全局作用域和函数作用域。
#### （1）全局作用域
    全局（在函数之外）声明的变量拥有全局作用域。
    实例
        var carName = "porsche";
        // 此处的代码可以使用 carName
        function myFunction() {
        // 此处的代码也可以使用 carName
        }
    全局变量可以在 JavaScript 程序中的任何位置访问。

#### （2）函数作用域
    局部（函数内）声明的变量拥有函数作用域。
    实例
        // 此处的代码不可以使用 carName
        function myFunction() {
            var carName = "porsche";
            // code here CAN use carName
        }
        // 此处的代码不可以使用 carName
    局部变量只能在它们被声明的函数内访问。

#### （3）JavaScript 块作用域
    通过 var 关键词声明的变量没有块作用域。
    在块 {} 内声明的变量可以从块之外进行访问。
    实例
        { 
        var x = 10; 
        }
        // 此处可以使用 x
    在 ES2015 之前，JavaScript 是没有块作用域的。
    可以使用 let 关键词声明拥有块作用域的变量。
    在块 {} 内声明的变量无法从块外访问：

    实例
        { 
        let x = 10;
        }
        // 此处不可以使用 x
#### （4）重新声明变量
    使用 var 关键字重新声明变量会带来问题。
    在块中重新声明变量也将重新声明块外的变量：
    实例
        var x = 10;
        // 此处 x 为 10
        { 
        var x = 6;
        // 此处 x 为 6
        }
        // 此处 x 为 6
    使用 let 关键字重新声明变量可以解决这个问题。
    在块中重新声明变量不会重新声明块外的变量：
    实例
        var x = 10;
        // 此处 x 为 10
        { 
        let x = 6;
        // 此处 x 为 6
        }
        // 此处 x 为 10
    
    下表定义了第一个完全支持 let 关键词的浏览器版本：
#### （4）循环作用域
##### 在循环中使用 var：
    实例
    var i = 7;
    for (var i = 0; i < 10; i++) {
    // 一些语句
        }
    // 此处，i 为 10

##### 在循环中使用 let：

    实例
    let i = 7;
    for (let i = 0; i < 10; i++) {
    // 一些语句
    }
    // 此处 i 为 7
    在第一个例子中，在循环中使用的变量使用 var 重新声明了循环之外的变量。
    在第二个例子中，在循环中使用的变量使用 let 并没有重新声明循环外的变量。
    如果在循环中用 let 声明了变量 i，那么只有在循环内，变量 i 才是可见的。

#### （5）函数作用域
    在函数内声明变量时，使用 var 和 let 很相似。
    它们都有函数作用域：
    function myFunction() {
        var carName = "porsche";   // 函数作用域
    }
    function myFunction() {
        let carName = "porsche";   // 函数作用域
    }
#### （6）全局作用域
    块外声明声明，那么 var 和 let 也很相似。
    它们都拥有全局作用域：
    var x = 10;       // 全局作用域
    let y = 6;       // 全局作用域
#### （7）HTML 中的全局变量
    使用 JavaScript 的情况下，全局作用域是 JavaScript 环境。
    在 HTML 中，全局作用域是 window 对象。
    通过 var 关键词定义的全局变量属于 window 对象：
        实例
        var carName = "porsche";
        // 此处的代码可使用 window.carName

    通过 let 关键词定义的全局变量不属于 window 对象：
        实例
        let carName = "porsche";
        // 此处的代码不可使用 window.carName
#### （8）重新声明
##### 允许在程序的任何位置使用 var 重新声明 JavaScript 变量：
        实例
        var x = 10;
        // 现在，x 为 10
        var x = 6;
        // 现在，x 为 6

##### 在相同的作用域，或在相同的块中，通过 let 重新声明一个 var 变量是不允许的：
        实例
        var x = 10;       // 允许
        let x = 6;       // 不允许

        {
        var x = 10;   // 允许
        let x = 6;   // 不允许
        }
    在相同的作用域，或在相同的块中，通过 let 重新声明一个 let 变量是不允许的：

    实例
        let x = 10;       // 允许
        let x = 6;       // 不允许

        {
        let x = 10;   // 允许
        let x = 6;   // 不允许
        }
    在相同的作用域，或在相同的块中，通过 var 重新声明一个 let 变量是不允许的：

    实例
        let x = 10;       // 允许
        var x = 6;       // 不允许

        {
        let x = 10;   // 允许
        var x = 6;   // 不允许
        }
    在不同的作用域或块中，通过 let 重新声明变量是允许的：

    实例
    let x = 6;       // 允许

    {
    let x = 7;   // 允许
    }

    {
    let x = 8;   // 允许
    }
#### （8）提升
    通过 var 声明的变量会提升到顶端。如果您不了解什么是提升（Hoisting），请学习我们的提升这一章。
    您可以在声明变量之前就使用它：
        实例
        // 在此处，您可以使用 carName
        var carName;
    通过 let 定义的变量不会被提升到顶端。
    在声明 let 变量之前就使用它会导致 ReferenceError。
    变量从块的开头一直处于“暂时死区”，直到声明为止：
    实例
    // 在此处，您不可以使用 carName
    let carName;
### 6.JavaScript Const
    通过 const 定义的变量与 let 变量类似，但不能重新赋值：
        实例
        const PI = 3.141592653589793;
        PI = 3.14;      // 会出错
        PI = PI + 10;   // 也会出错
#### （1）块作用域
    在块作用域内使用 const 声明的变量与 let 变量相似。
    在本例中，x 在块中声明，不同于在块之外声明的 x：
        实例
        var x = 10;
        // 此处，x 为 10
        { 
        const x = 6;
        // 此处，x 为 6
        }
        // 此处，x 为 10
#### （2）在声明时赋值
    JavaScript const 变量必须在声明时赋值：
        const PI = 3.14159265359;
    不是真正的常数
    关键字 const 有一定的误导性。

    它没有定义常量值。它定义了对值的常量引用。

    因此，我们不能更改常量原始值，但我们可以更改常量对象的属性。

 #### （3）原始值
##### 如果我们将一个原始值赋给常量，我们就不能改变原始值：

        实例
        const PI = 3.141592653589793;
        PI = 3.14;      // 会出错
        PI = PI + 10;   // 也会出错
#### （4）常量对象可以更改
    您可以更改常量对象的属性：

        实例
        // 您可以创建 const 对象：
        const car = {type:"porsche", model:"911", color:"Black"};

    // 您可以更改属性：
        car.color = "White";

    // 您可以添加属性：
    car.owner = "Bill";
    但是您无法重新为常量对象赋值：

        实例
        const car = {type:"porsche", model:"911", color:"Black"};
        car = {type:"Volvo", model:"XC60", color:"White"};    // ERROR
#### （5）常量数组可以更改
    您可以更改常量数组的元素：

    实例
    // 您可以创建常量数组：
        const cars = ["Audi", "BMW", "porsche"];

    // 您可以更改元素：
        cars[0] = "Honda";

    // 您可以添加元素：
        cars.push("Volvo");
    但是您无法重新为常量数组赋值：
        实例
        const cars = ["Audi", "BMW", "porsche"];
        cars = ["Honda", "Toyota", "Volvo"];    // ERROR
#### （6）重新声明
    在程序中的任何位置都允许重新声明 JavaScript var 变量：

    实例
    var x = 2;    //  允许
    var x = 3;    //  允许
    x = 4;        //  允许
    在同一作用域或块中，不允许将已有的 var 或 let 变量重新声明或重新赋值给 const：

    实例
        var x = 2;         // 允许
            const x = 2;       // 不允许
        {
        let x = 2;     // 允许
            const x = 2;   // 不允许
        }
    在同一作用域或块中，为已有的 const 变量重新声明声明或赋值是不允许的：

    实例
    const x = 2;       // 允许
    const x = 3;       // 不允许
    x = 3;             // 不允许
    var x = 3;         // 不允许
    let x = 3;         // 不允许

    {
    const x = 2;   // 允许
    const x = 3;   // 不允许
    x = 3;         // 不允许
    var x = 3;     // 不允许
    let x = 3;     // 不允许
    }
    在另外的作用域或块中重新声明 const 是允许的：

    实例
    const x = 2;       // 允许

    {
    const x = 3;   // 允许
    }

    {
    const x = 4;   // 允许
    }
 #### （7）提升
    通过 var 定义的变量会被提升到顶端。如果您不了解什么是提升（Hoisting）。
    const 变量不能在声明之前使用：
### 7.JavaScript 运算符
#### （1）JavaScript 算数运算符
    +   加法
    -   减法
    *   乘法
    /	除法
    %	取模（余数）
    ++	递加
    --	递减
    **	幂（ES2016）
#### （2）JavaScript 赋值运算符

    =	    x = y	    x = y
    +=	    x += y	    x = x + y
    -=	    x -= y	    x = x - y
    *=	    x *= y	    x = x * y
    /=	    x /= y	    x = x / y
    %=	    x %= y	    x = x % y
    <<=	    x <<= y	    x = x << y
    >>=	    x >>= y	    x = x >> y
    >>>=	x >>>= y	x = x >>> y
    &=	    x &= y	    x = x & y
    ^=	    x ^= y	    x = x ^ y
    |=	    x |= y	    x = x | y
    **=	    x **= y	    x = x ** y
    加法赋值运算符（+=）向变量添加一个值。
#### （3）JavaScript 字符串运算符
##### 字符串进行相加
    + 运算符可以字符串进行相加（级联运算符）。
    += 赋值运算符也可用于相加（级联）字符串：
        实例
        txt1 = "Hello ";
        txt1 += "Kitty!"; 
        txt1 的结果将是：
        Hello Kitty!

##### 字符串和数字的相加
    相加两个数字，将返回和，但对一个数字和一个字符串相加将返回一个字符串：
        实例
        x = 7 + 8;
        y = "7" + 8;
        z = "Hello" + 7;
        x、y 和 z 的结果将是：

        15
        78
        Hello7
 

#### （4）JavaScript 比较运算符
    ==	等于
    ===	等值等型
    !=	不相等
    !==	不等值或不等型
    >	大于
    <	小于
    >=	大于或等于
    <=	小于或等于
    ?	三元运算符

#### (5)JavaScript 逻辑运算符
    运算符	描述
    &&	逻辑与
    ||	逻辑或
    !	逻辑非

#### (6)JavaScript 类型运算符
    运算符	描述
    typeof	返回变量的类型。
    instanceof	返回 true，如果对象是对象类型的实例。

#### (7)JavaScript 位运算符
    位运算符处理 32 位数。
    该运算中的任何数值运算数都会被转换为 32 位的数。结果会被转换回 JavaScript 数。

    运算符	描述	例子	等同于	结果	十进制
    &	与	5 & 1	0101 & 0001	0001	1
    |	或	5 | 1	0101 | 0001	0101	5
    ~	非	~ 5	~0101	1010	10
    ^	异或	5 ^ 1	0101 ^ 0001	0100	4
    <<	零填充左位移	5 << 1	0101 << 1	1010	10
    >>	有符号右位移	5 >> 1	0101 >> 1	0010	2
    >>>	零填充右位移	5 >>> 1	0101 >>> 1	0010	2
    上例使用 4 位无符号的例子。但是 JavaScript 使用 32 位有符号数。
    因此，在 JavaScript 中，~ 5 不会返回 10，而是返回 -6。
### 8.JavaScript 数据类型
    值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。
    引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）。
    注：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。

#### （1）JavaScript 拥有动态类型
    这意味着相同的变量可用作不同的类型：
    实例
        var x;               // x 为 undefined
        var x = 5;           // 现在 x 为数字
        var x = "John";      // 现在 x 为字符串

    变量的数据类型可以使用 typeof 操作符来查看：
        实例
        typeof "John"                // 返回 string
        typeof 3.14                  // 返回 number
        typeof false                 // 返回 boolean
        typeof [1,2,3,4]             // 返回 object
        typeof {name:'John', age:34} // 返回 object
    typeof 运算符可返回以下
    string
    number
    boolean
    undefined
    typeof 运算符把对象、数组或 null 返回 object。
    typeof 运算符不会把函数返回 object。


 #### (2)JavaScript 字符串 (String)
    字符串是存储字符（比如 "Bill Gates"）的变量。
    字符串可以是引号中的任意文本。您可以使用单引号或双引号：
        实例
        var carname="Volvo XC60";
        var carname='Volvo XC60';
    您可以在字符串中使用引号，只要不匹配包围字符串的引号即可：

        实例
        var answer="It's alright";
        var answer="He is called 'Johnny'";
        var answer='He is called "Johnny"';

 #### (4)JavaScript 数字 (Nunber)
    JavaScript 只有一种数字类型。数字可以带小数点，也可以不带：
        实例
        var x1=34.00;      //使用小数点来写
        var x2=34;         //不使用小数点来写
    极大或极小的数字可以通过科学（指数）计数法来书写：
        实例
        var y=123e5;      // 12300000
        var z=123e-5;     // 0.00123

#### （5）JavaScript 布尔 (Boolean)
    布尔（逻辑）只能有两个值：true 或 false。
        var x=true;
        var y=false;
    布尔常用在条件测试中。
#### （6）JavaScript 数组
    下面的代码创建名为 cars 的数组：
        var cars=new Array();
        cars[0]="Saab";
        cars[1]="Volvo";
        cars[2]="BMW";
    或者:
        var cars=new Array("Saab","Volvo","BMW");
    或者:
        var cars=["Saab","Volvo","BMW"];

    数组下标是基于零的，所以第一个项目是 [0]，第二个是 [1]，以此类推。

#### （7）JavaScript 对象
    对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔：

    var person={firstname:"John", lastname:"Doe", id:5566};
    上面例子中的对象 (person) 有三个属性：firstname、lastname 以及 id。

    空格和折行无关紧要。声明可横跨多行：
        var person={
        firstname : "John",
        lastname  : "Doe",
        id        :  5566
        };

    对象属性有两种寻址方式：
        实例
        name=person.lastname;
        name=person["lastname"];


#### （8）Undefined 和 Null
    Undefined 这个值表示变量不含有值。
    Undefined 与 null 的值相等，但类型不相等：
    可以通过将变量的值设置为 null 来清空变量。
        实例
        cars=null;
        person=null;


#### （9）声明变量类型
    当您声明新变量时，可以使用关键词 "new" 来声明其类型：
    var carname=new String;     //避免，这样声明会增加复杂度
    var x=      new Number;     //避免，这样声明会增加复杂度
    var y=      new Boolean;    //避免，这样声明会增加复杂度
    var cars=   new Array; 
    var person= new Object;
    JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。
### 9.JavaScript 对象
    
#### （1）JavaScript 对象
    在 JavaScript中，几乎所有的事物都是对象。
    对象也是一个变量，但对象可以包含多个值（多个变量），每个值以 name:value 对呈现。
        var car = {name:"Fiat", model:500, color:"white"};
    在以上实例中，3 个值 ("Fiat", 500, "white") 赋予变量 car。
    JavaScript 对象是变量的容器。
#### （2）对象定义
    你可以使用字符来定义和创建 JavaScript 对象:
    实例
        var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
    定义 JavaScript 对象可以跨越多行，空格跟换行不是必须的：

        实例
        var person = {
            firstName:"John",
            lastName:"Doe",
            age:50,
            eyeColor:"blue"
        };
 

#### （3）对象属性
    可以说 "JavaScript 对象是变量的容器"。
    但是，我们通常认为 "JavaScript 对象是键值对的容器"。
    键值对通常写法为 name : value (键与值以冒号分割)。
    键值对在 JavaScript 对象通常称为 对象属性。
    对象键值对的写法类似于：
        PHP 中的关联数组
        Python 中的字典
        C 语言中的哈希表
        Java 中的哈希映射
        Ruby 和 Perl 中的哈希表
#### （4）访问对象属性
    你可以通过两种方式访问对象属性:
        实例 1
        person.lastName;

        实例 2
        person["lastName"];

    

#### （5）对象方法
    对象的方法定义了一个函数，并作为对象的属性存储。
    对象方法通过添加 () 调用 (作为一个函数)。
    该实例访问了 person 对象的 fullName() 方法:
        name = person.fullName(); 
    如果你要访问 person 对象的 fullName 属性，它将作为一个定义函数的字符串返回：

    JavaScript 对象是属性和方法的容器。
    在随后的教程中你将学习到更多关于函数，属性和方法的知识。

 #### （6）访问对象方法
    你可以使用以下语法创建对象方法：
        methodName : function() {
            // 代码 
        }
    你可以使用以下语法访问对象方法：
        实例
            objectName.methodName()
    通常 fullName() 是作为 person 对象的一个方法， fullName 是作为一个属性。
    如果使用 fullName 属性，不添加 (), 它会返回函数的定义：
#### （7）this 关键词
    在函数定义中，this 引用该函数的“拥有者”。
### 10.JavaScript 函数
    JavaScript 函数是被设计为执行特定任务的代码块。
    JavaScript 函数会在某代码调用它时被执行。

        实例
        function myFunction(p1, p2) {
            return p1 * p2;              // 该函数返回 p1 和 p2 的乘积
        }
#### （1）JavaScript 函数语法
    JavaScript 函数通过 function 关键词进行定义，其后是函数名和括号 ()。
    圆括号可包括由逗号分隔的参数：
         (参数 1, 参数 2, ...)
    由函数执行的代码被放置在花括号中：{}
        function name(参数 1, 参数 2, 参数 3) {
            要执行的代码
        }
    在函数中，参数是局部变量。
#### （2）函数调用
    函数中的代码将在其他代码调用该函数时执行：
        当事件发生时（当用户点击按钮时）
        当 JavaScript 代码调用时
        自动的（自调用）


#### （3）函数返回
    当 JavaScript 到达 return 语句，函数将停止执行。
    如果函数被某条语句调用，JavaScript 将在调用语句之后“返回”执行代码。
    函数通常会计算出返回值。这个返回值会返回给调用者：
        实例
        计算两个数的乘积，并返回结果：

        var x = myFunction(7, 8);        // 调用函数，返回值被赋值给 x

        function myFunction(a, b) {
            return a * b;                // 函数返回 a 和 b 的乘积
        }
        x 的结果将是：
        56
#### （4）为何使用函数？
    能够对代码进行复用：只要定义一次代码，就可以多次使用它。
    能够多次向同一函数传递不同的参数，以产生不同的结果。

        实例
        把华氏度转换为摄氏度：
        function toCelsius(fahrenheit) {
            return (5/9) * (fahrenheit-32);
        }

        document.getElementById("demo").innerHTML = toCelsius(77);
#### （5） () 运算符调用函数
    使用上面的例子，toCelsius 引用的是函数对象，而 toCelsius() 引用的是函数结果。

        实例
        访问没有 () 的函数将返回函数定义：

        function toCelsius(fahrenheit) {
            return (5/9) * (fahrenheit-32);
        }

    document.getElementById("demo").innerHTML = toCelsius;
#### （6）用作变量值的函数
    函数的使用方法与变量一致，在所有类型的公式、赋值和计算中。
    使用变量来存储函数的值：
        var x = toCelsius(77);
        var text = "The temperature is " + x + " Celsius";
    您能够把函数当做变量值直接使用：
        var text = "The temperature is " + toCelsius(77) + " Celsius";
    局部变量
        在 JavaScript 函数中声明的变量，会成为函数的局部变量。

    局部变量只能在函数内访问。
        实例
        // 此处的代码不能使用 carName

        function myFunction() {
            var carName = "Volvo";
            // 此处的代码可以使用 carName
        }
        // 此处的代码不能使用 carName

    由于局部变量只能被其函数识别，因此可以在不同函数中使用相同名称的变量。
    局部变量在函数开始时创建，在函数完成时被删除。
### 11.JavaScript 事件
    HTML 事件是发生在 HTML 元素上的“事情”。
    当在 HTML 页面中使用 JavaScript 时，JavaScript 能够“应对”这些事件。

#### (1)HTML 事件
    HTML 事件可以是浏览器或用户做的某些事情。
        下面是 HTML 事件的一些例子：
        HTML 网页完成加载
        HTML 输入字段被修改
        HTML 按钮被点击

    通常，当事件发生时，用户会希望做某件事。JavaScript 允许您在事件被侦测到时执行代码。
    通过 JavaScript 代码，HTML 允许您向 HTML 元素添加事件处理程序。

    使用单引号：
        <element event='一些 JavaScript'>
    使用双引号：
        <element event="一些 JavaScript">
##### 在下面的例子中，onclick 属性（以及代码）被添加到 <button> 元素：
        实例
        <button onclick='document.getElementById("demo").innerHTML=Date()'>现在的时间是？</button>
    在上面的例子中，JavaScript 代码改变了 id="demo" 的元素的内容。

##### 在接下来的例子中，代码（使用 this.innerHTML）改变了其自身元素的内容：

        实例
        <button onclick="this.innerHTML=Date()">现在的时间是？</button>
    
##### JavaScript 代码通常有很多行。事件属性调用函数更为常见：

        实例
        <button onclick="displayDate()">现在的时间是？</button>
    
#### 常见的 HTML 事件
    事件	描述
    onchange	HTML 元素已被改变
    onclick	    用户点击了 HTML 元素
    onmouseover	用户把鼠标移动到 HTML 元素上
    onmouseout	用户把鼠标移开 HTML 元素
    onkeydown	用户按下键盘按键
    onload	    浏览器已经完成页面加载
