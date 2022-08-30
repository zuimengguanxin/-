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
    亲自试一试
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
    亲自试一试
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