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