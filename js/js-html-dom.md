# HTML-DOM
通过 HTML DOM，JavaScript 能够访问和改变 HTML 文档的所有元素。

## 1.HTML DOM（文档对象模型）
    当网页被加载时，浏览器会创建页面的文档对象模型（Document Object Model）。
    HTML DOM 模型被结构化为对象树：
![对象的 HTML DOM 树](https://www.w3school.com.cn/i/ct_htmltree.gif)
    

    通过这个对象模型，JavaScript 获得创建动态 HTML 的所有力量：

    JavaScript 能改变页面中的所有 HTML 元素
    JavaScript 能改变页面中的所有 HTML 属性
    JavaScript 能改变页面中的所有 CSS 样式
    JavaScript 能删除已有的 HTML 元素和属性
    JavaScript 能添加新的 HTML 元素和属性
    JavaScript 能对页面中所有已有的 HTML 事件作出反应
    JavaScript 能在页面中创建新的 HTML 事件
## 2.什么是 DOM？
    DOM 是一项 W3C (World Wide Web Consortium) 标准。
    DOM 定义了访问文档的标准：
    “W3C 文档对象模型（DOM）是中立于平台和语言的接口，它允许程序和脚本动态地访问、更新文档的内容、结构和样式。”
    W3C DOM 标准被分为 3 个不同的部分：
        Core DOM - 所有文档类型的标准模型
        XML DOM - XML 文档的标准模型
        HTML DOM - HTML 文档的标准模型
## 3.什么是 HTML DOM？
    HTML DOM 是 HTML 的标准对象模型和编程接口。它定义了：
        作为对象的 HTML 元素
        所有 HTML 元素的属性
        访问所有 HTML 元素的方法
        所有 HTML 元素的事件
    换言之：HTML DOM 是关于如何获取、更改、添加或删除 HTML 元素的标准。
## 4.JavaScript - HTML DOM 方法
    HTML DOM 方法是您能够（在 HTML 元素上）执行的动作。
    HTML DOM 属性是您能够设置或改变的 HTML 元素的值。
### (1)DOM 编程界面
    HTML DOM 能够通过 JavaScript 进行访问（也可以通过其他编程语言）。
    在 DOM 中，所有 HTML 元素都被定义为对象。
    编程界面是每个对象的属性和方法。
    属性是能够获取或设置的值（就比如改变 HTML 元素的内容）。
    方法是您能够完成的动作（比如添加或删除 HTML 元素）。
    下面的例子改变了 id="demo" 的 <p> 元素的内容：
        document.getElementById("demo").innerHTML = "Hello World!";
    getElementById 是方法，而 innerHTML 是属性。

### （2）getElementById 方法
    访问 HTML 元素最常用的方法是使用元素的 id。
    在上面的例子中，getElementById 方法使用 id="demo" 来查找元素。

#### innerHTML 属性
    获取元素内容最简单的方法是使用 innerHTML 属性。
    innerHTML 属性可用于获取或替换 HTML 元素的内容。
    innerHTML 属性可用于获取或改变任何 HTML 元素，包括 <html> 和 <body>。
## 5.JavaScript HTML DOM 文档
    HTML DOM 文档对象是您的网页中所有其他对象的拥有者。

### （1）HTML DOM Document 对象
    文档对象代表您的网页。

    如果您希望访问 HTML 页面中的任何元素，那么您总是从访问 document 对象开始。

    下面是一些如何使用 document 对象来访问和操作 HTML 的实例。

#### 查找 HTML 元素
    方法	描述
    document.getElementById(id)	通过元素 id 来查找元素
    document.getElementsByTagName(name)	通过标签名来查找元素
    document.getElementsByClassName(name)	通过类名来查找元素
#### 改变 HTML 元素
    方法	描述
    element.innerHTML = new html content	改变元素的 inner HTML
    element.attribute = new value	改变 HTML 元素的属性值
    element.setAttribute(attribute, value)	改变 HTML 元素的属性值
    element.style.property = new style	改变 HTML 元素的样式
#### 添加和删除元素
    方法	描述
    document.createElement(element)	创建 HTML 元素
    document.removeChild(element)	删除 HTML 元素
    document.appendChild(element)	添加 HTML 元素
    document.replaceChild(element)	替换 HTML 元素
    document.write(text)	写入 HTML 输出流
#### 添加事件处理程序
    方法	描述
    document.getElementById(id).onclick = function(){code}	向 onclick 事件添加事件处理程序
#### 查找 HTML 对象
    首个 HTML DOM Level 1 (1998)，定义了 11 个 HTML 对象、对象集合和属性。它们在 HTML5 中仍然有效。

    后来，在 HTML DOM Level 3，加入了更多对象、集合和属性。

    属性	描述	DOM
    document.anchors	返回拥有 name 属性的所有 <a> 元素。	1
    document.applets	返回所有 <applet> 元素（HTML5 不建议使用）	1
    document.baseURI	返回文档的绝对基准 URI	3
    document.body	返回 <body> 元素	1
    document.cookie	返回文档的 cookie	1
    document.doctype	返回文档的 doctype	3
    document.documentElement	返回 <html> 元素	3
    document.documentMode	返回浏览器使用的模式	3
    document.documentURI	返回文档的 URI	3
    document.domain	返回文档服务器的域名	1
    document.domConfig	废弃。返回 DOM 配置	3
    document.embeds	返回所有 <embed> 元素	3
    document.forms	返回所有 <form> 元素	1
    document.head	返回 <head> 元素	3
    document.images	返回所有 <img> 元素	1
    document.implementation	返回 DOM 实现	3
    document.inputEncoding	返回文档的编码（字符集）	3
    document.lastModified	返回文档更新的日期和时间	3
    document.links	返回拥有 href 属性的所有 <area> 和 <a> 元素	1
    document.readyState	返回文档的（加载）状态	3
    document.referrer	返回引用的 URI（链接文档）	1
    document.scripts	返回所有 <script> 元素	3
    document.strictErrorChecking	返回是否强制执行错误检查	3
    document.title	返回 <title> 元素	1
    document.URL	返回文档的完整 URL	1

## JavaScript HTML DOM 元素
### 查找 HTML 元素
    通常，通过 JavaScript，您需要操作 HTML 元素。

    为了达成此目的，您需要首先找到这些元素。有好几种完成此任务的方法：
    通过 id 查找 HTML 元素
    通过标签名查找 HTML 元素
    通过类名查找 HTML 元素
    通过 CSS 选择器查找 HTML 元素
    通过 HTML 对象集合查找 HTML 元素
#### 通过 id 查找 HTML 元素
    DOM 中查找 HTML 元素最简单的方法是，使用元素的 id。
    

#### 通过标签名查找 HTML 元素
    本例查找所有 <p> 元素：

    实例
    var x = document.getElementsByTagName("p");
#### 本例查找 id="main" 的元素，然后查找 "main" 中所有 <p> 元素：

    实例
    var x = document.getElementById("main");
    var y = x.getElementsByTagName("p"); 
 #### 通过类名查找 HTML 元素
    如果您需要找到拥有相同类名的所有 HTML 元素，请使用 getElementsByClassName()。

    本例返回包含 class="intro" 的所有元素的列表：

    实例
    var x = document.getElementsByClassName("intro");

#### 通过 CSS 选择器查找 HTML 元素
    如果您需要查找匹配指定 CSS 选择器（id、类名、类型、属性、属性值等等）的所有 HTML 元素，请使用 querySelectorAll() 方法。

    本例返回 class="intro" 的所有 <p> 元素列表：
    实例
        var x = document.querySelectorAll("p.intro");





## JavaScript HTML DOM - 改变 HTML
    HTML DOM 允许 JavaScript 改变 HTML 元素的内容。

### 改变 HTML 输出流
    JavaScript 能够创建动态 HTML 内容：

    Thu Sep 01 2022 15:54:30 GMT+0800 (中国标准时间)
    在 JavaScript 中，document.write() 可用于直接写入 HTML 输出流：

        实例
        <!DOCTYPE html>
        <html>
        <body>

        <script>
            document.write(Date());
        </script>

        </body>
        </html>
    千万不要在文档加载后使用 document.write()。这么做会覆盖文档。

### 改变 HTML 内容
    修改 HTML 文档内容最简单的方法是，使用 innerHTML 属性。
    如需修改 HTML 元素的内容，请使用此语法：
        document.getElementById(id).innerHTML = new text
    本例修改了 <p> 元素的内容：
    实例
        <html>
        <body>

        <p id="p1">Hello World!</p>

        <script>
            document.getElementById("p1").innerHTML = "hello kitty!";
        </script>

        </body>
        </html>
    例子解释：
    上面的 HTML 文档包含 id="p1" 的 <p> 元素
    我们使用 HTML DOM 来获取 id="p1" 的这个元素
    JavaScript 把该元素的内容（innerHTML）更改为 "Hello Kitty!"
    本例修改了 <h1> 元素的内容：

    实例
    <!DOCTYPE html>
    <html>
    <body>

    <h1 id="header">Old Header</h1>

    <script>
    var element = document.getElementById("header");
    element.innerHTML = "New Header";
    </script>

    </body>
    </html> 
    亲自试一试
    例子解释：
    上面的 HTML 含有 id="header" 的一个 <h1> 元素
    我们使用了 HTML DOM 来获取 id="header" 的元素
    JavaScript 更改此元素的内容（innerHTML）
    改变属性的值
    如需修改 HTML 属性的值，请使用如下语法：

    document.getElementById(id).attribute = new value
    本例修改了 <img> 元素的 src 属性的值：

    实例
    <!DOCTYPE html>
    <html>
    <body>

    <img id="myImage" src="smiley.gif">

    <script>
    document.getElementById("myImage").src = "landscape.jpg";
    </script>

    </body>
    </html> 
    亲自试一试
    例子解释：
    上面的 HTML 文档含有一个 id="myImage" 的 <img> 元素
    我们使用 HTML DOM 来获取 id="myImage" 的元素
    JavaScript 把此元素的 src 属性从 "smiley.gif" 更改为 "landscape.jpg"






   avaScript HTML DOM - 改变 HTML
DOM 元素
DOM 表单
HTML DOM 允许 JavaScript 改变 HTML 元素的内容。

改变 HTML 输出流
JavaScript 能够创建动态 HTML 内容：

Thu Sep 01 2022 15:54:30 GMT+0800 (中国标准时间)
在 JavaScript 中，document.write() 可用于直接写入 HTML 输出流：

实例
<!DOCTYPE html>
<html>
<body>

<script>
document.write(Date());
</script>

</body>
</html>
亲自试一试
千万不要在文档加载后使用 document.write()。这么做会覆盖文档。

改变 HTML 内容
修改 HTML 文档内容最简单的方法是，使用 innerHTML 属性。

如需修改 HTML 元素的内容，请使用此语法：

document.getElementById(id).innerHTML = new text
本例修改了 <p> 元素的内容：

实例
<html>
<body>

<p id="p1">Hello World!</p>

<script>
document.getElementById("p1").innerHTML = "hello kitty!";
</script>

</body>
</html>
亲自试一试
例子解释：
上面的 HTML 文档包含 id="p1" 的 <p> 元素
我们使用 HTML DOM 来获取 id="p1" 的这个元素
JavaScript 把该元素的内容（innerHTML）更改为 "Hello Kitty!"
本例修改了 <h1> 元素的内容：

实例
<!DOCTYPE html>
<html>
<body>

<h1 id="header">Old Header</h1>

<script>
var element = document.getElementById("header");
element.innerHTML = "New Header";
</script>

</body>
</html> 
亲自试一试
例子解释：
上面的 HTML 含有 id="header" 的一个 <h1> 元素
我们使用了 HTML DOM 来获取 id="header" 的元素
JavaScript 更改此元素的内容（innerHTML）
改变属性的值
如需修改 HTML 属性的值，请使用如下语法：

document.getElementById(id).attribute = new value
本例修改了 <img> 元素的 src 属性的值：

实例
<!DOCTYPE html>
<html>
<body>

<img id="myImage" src="smiley.gif">

<script>
document.getElementById("myImage").src = "landscape.jpg";
</script>

</body>
</html> 
亲自试一试
例子解释：
上面的 HTML 文档含有一个 id="myImage" 的 <img> 元素
我们使用 HTML DOM 来获取 id="myImage" 的元素
JavaScript 把此元素的 src 属性从 "smiley.gif" 更改为 "landscape.jpg"













JavaScript HTML DOM - 改变 CSS
DOM 表单
DOM 动画
HTML DOM 允许 JavaScript 更改 HTML 元素的样式。

改变 HTML 样式
如需更改 HTML 元素的样式，请使用此语法：

document.getElementById(id).style.property = new style
下面的例子更改了 <p> 元素的样式：

实例
<html>
<body>

<p id="p2">Hello World!</p>

<script>
document.getElementById("p2").style.color = "blue";
</script>

<p>上面的段落已被脚本改变。</p>

</body>
</html>
亲自试一试
使用事件
HTML DOM 允许您在事件发生时执行代码。

当“某些事情”在 HTML 元素上发生时，浏览器会生成事件：

点击某个元素时
页面加载时
输入字段被更改时
您将在本教程的下一章学到更多有关事件的知识。

本例会在用户点击按钮时，更改 id="id1" 的 HTML 元素的样式：

实例
<!DOCTYPE html>
<html>
<body>

<h1 id="id1">我的标题 1</h1>

<button type="button" onclick="document.getElementById('id1').style.color = 'red'">
点击我！
</button>

</body>
</html>
亲自试一试
更多实例
Visibility
如何使元素不可见。您是否希望显示元素？











学习使用 JavaScript 来创建 HTML 动画。

基础页面
为了演示如何通过 JavaScript 来创建 HTML 动画，我们将使用一张简单的网页：

实例
<!DOCTYPE html>
<html>
<body>

<h1>我的第一部 JavaScript 动画</h1>

<div id="animation">我的动画在这里。</div>

</body>
</html>
创建动画容器
所有动画都应该与容器元素关联。

实例
<div id ="container">
    <div id ="animate">我的动画在这里。</div>
</div>
为元素添加样式
应该通过 style = "position: relative" 创建容器元素。

应该通过 style = "position: absolute" 创建动画元素。

实例
#container {
    width: 400px;
    height: 400px;
    position: relative;
    background: yellow;
}
#animate {
    width: 50px;
    height: 50px;
    position: absolute;
    background: red;
} 
亲自试一试
动画代码
JavaScript 动画是通过对元素样式进行渐进式变化编程完成的。

这种变化通过一个计数器来调用。当计数器间隔很小时，动画看上去就是连贯的。

基础代码是：

实例
var id = setInterval(frame, 5);

function frame() {
    if (/* 测试是否完成 */) {
        clearInterval(id);
    } else {
         /* 改变元素样式的代码 */
    }
} 
使用 JavaScript 创建动画
实例
function myMove() {
    var elem =  document.getElementById("animate"); 
    var pos = 0;
    var id = setInterval(frame, 5);
     function frame() {
        if (pos ==  350) {
             clearInterval(id);
        } else {
             pos++; 
             elem.style.top = pos + 'px'; 
             elem.style.left = pos + 'px'; 
        }
     }
}










JavaScript HTML DOM 事件
DOM 动画
DOM 事件监听程序
HTML DOM 允许 JavaScript 对 HTML 事件作出反应：

鼠标移上来！点击我
对事件作出反应
JavaScript 能够在事件发生时执行，比如当用户点击某个 HTML 元素时。

为了在用户点击元素时执行代码，请向 HTML 事件属性添加 JavaScript 代码：

onclick=JavaScript
HTML 事件的例子：

当用户点击鼠标时
当网页加载后
当图像加载后
当鼠标移至元素上时
当输入字段被改变时
当 HTML 表单被提交时
当用户敲击按键时
在本例中，当用户点击 <h1> 时，会改变其内容：

实例
<!DOCTYPE html>
<html>
<body>

<h1 onclick="this.innerHTML = 'Hello!'">点击此文本！</h1>

</body>
</html> 
亲自试一试
在本例中，从事件处理程序调用函数：

实例
<!DOCTYPE html>
<html>
<body>

<h1 onclick="changeText(this)">点击此文本！</h1>

<script>
function changeText(id) { 
    id.innerHTML = "Hello:)";
}
</script>

</body>
</html> 
亲自试一试
HTML 事件属性
如需向 HTML 元素分配事件，您能够使用事件属性。

实例
向 button 元素分配 onclick 事件：

<button onclick="displayDate()">试一试</button>
亲自试一试
在上例中，名为 displayDate 的函数会在按钮被点击时执行。

使用 HTML DOM 分配事件
HTML DOM 允许您使用 JavaScript 向 HTML 元素分配事件：

实例
为 button 元素指定 onclick 事件：

<script>
document.getElementById("myBtn").onclick = displayDate;
</script> 
亲自试一试
在上例中，名为 displayDate 的函数被分配到 id="myBtn" 的 HTML 元素。

当点击按钮时将执行函数。

onload 和 onunload 事件
当用户进入后及离开页面时，会触发 onload 和 onunload 事件。

onload 事件可用于检测访问者的浏览器类型和浏览器版本，然后基于该信息加载网页的恰当版本。

onload 和 onunload 事件可用于处理 cookie。

实例
<body onload="checkCookies()">
亲自试一试
onchange 事件
onchange 事件经常与输入字段验证结合使用。

下面是一个如何使用 onchange 的例子。当用户改变输入字段内容时，会调用 upperCase() 函数。

实例
<input type="text" id="fname" onchange="upperCase()">
亲自试一试
onmouseover 和 onmouseout 事件
onmouseover 和 onmouseout 事件可用于当用户将鼠标移至 HTML 元素上或移出时触发某个函数：

鼠标移上来！亲自试一试
onmousedown, onmouseup 以及 onclick 事件
onmousedown, onmouseup 以及 onclick 事件构成了完整的鼠标点击事件。

首先当鼠标按钮被点击时，onmousedown 事件被触发；然后当鼠标按钮被释放时，onmouseup 事件被触发；最后，当鼠标点击完成后，onclick 事件被触发。

点击我亲自试一试
更多实例
onmousedown 和 onmouseup
当用户按下鼠标按钮时改变图像。
onload
当页面已完成加载时显示报警框。
onfocus
当输入字段获得焦点时改变其背景色。
鼠标事件
当指针移动到元素上时改变其颜色。



JavaScript HTML DOM 事件监听程序
DOM 事件
DOM 导航
addEventListener() 方法
实例
添加当用户点击按钮时触发的事件监听器：

document.getElementById("myBtn").addEventListener("click", displayDate);
亲自试一试
addEventListener() 方法为指定元素指定事件处理程序。

addEventListener() 方法为元素附加事件处理程序而不会覆盖已有的事件处理程序。

您能够向一个元素添加多个事件处理程序。

您能够向一个元素添加多个相同类型的事件处理程序，例如两个 "click" 事件。

您能够向任何 DOM 对象添加事件处理程序而非仅仅 HTML 元素，例如 window 对象。

addEventListener() 方法使我们更容易控制事件如何对冒泡作出反应。

当使用 addEventListener() 方法时，JavaScript 与 HTML 标记是分隔的，已达到更佳的可读性；即使在不控制 HTML 标记时也允许您添加事件监听器。

您能够通过使用 removeEventListener() 方法轻松地删除事件监听器。

语法
element.addEventListener(event, function, useCapture);
第一个参数是事件的类型（比如 "click" 或 "mousedown"）。

第二个参数是当事件发生时我们需要调用的函数。

第三个参数是布尔值，指定使用事件冒泡还是事件捕获。此参数是可选的。

注意：请勿对事件使用 "on" 前缀；请使用 "click" 代替 "onclick"。

向元素添加事件处理程序
实例
当用户点击某个元素时提示 "Hello World!"：

element.addEventListener("click", function(){ alert("Hello World!"); });
亲自试一试
您也可以引用外部“命名”函数：

实例
当用户点击某个元素时提示 "Hello World!"：

element.addEventListener("click", myFunction);

function myFunction() {
    alert ("Hello World!");
}
亲自试一试
向相同元素添加多个事件处理程序
addEventListener() 方法允许您向相同元素添加多个事件，同时不覆盖已有事件：

实例
element.addEventListener("click", myFunction);
element.addEventListener("click", mySecondFunction);
亲自试一试
您能够向相同元素添加不同类型的事件：

实例
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
亲自试一试
向 Window 对象添加事件处理程序
addEventListener() 允许您将事件监听器添加到任何 HTML DOM 对象上，比如 HTML 元素、HTML 对象、window 对象或其他支持事件的对象，比如 xmlHttpRequest 对象。

实例
添加当用户调整窗口大小时触发的事件监听器：

window.addEventListener("resize", function(){
    document.getElementById("demo").innerHTML = sometext;
});
亲自试一试
传递参数
当传递参数值时，请以参数形式使用调用指定函数的“匿名函数”：

实例
element.addEventListener("click", function(){ myFunction(p1, p2); });
亲自试一试
事件冒泡还是事件捕获？
在 HTML DOM 中有两种事件传播的方法：冒泡和捕获。

事件传播是一种定义当发生事件时元素次序的方法。假如 <div> 元素内有一个 <p>，然后用户点击了这个 <p> 元素，应该首先处理哪个元素“click”事件？

在冒泡中，最内侧元素的事件会首先被处理，然后是更外侧的：首先处理 <p> 元素的点击事件，然后是 <div> 元素的点击事件。

在捕获中，最外侧元素的事件会首先被处理，然后是更内侧的：首先处理 <div> 元素的点击事件，然后是 <p> 元素的点击事件。

在 addEventListener() 方法中，你能够通过使用“useCapture”参数来规定传播类型：

addEventListener(event, function, useCapture);
默认值是 false，将使用冒泡传播，如果该值设置为 true，则事件使用捕获传播。

实例
document.getElementById("myP").addEventListener("click", myFunction, true);
document.getElementById("myDiv").addEventListener("click", myFunction, true);
亲自试一试
removeEventListener() 方法
removeEventListener() 方法会删除已通过 addEventListener() 方法附加的事件处理程序：

实例
element.removeEventListener("mousemove", myFunction);
亲自试一试
浏览器支持
表格中的数字规定了完全支持这些方法的首个浏览器版本。

方法					
addEventListener()	1.0	9.0	1.0	1.0	7.0
removeEventListener()	1.0	9.0	1.0	1.0	7.0
注释：IE 8、Opera 6.0 及其更早版本不支持 addEventListener() 和 removeEventListener() 方法。不过，对于这些特殊的浏览器版本，您可以使用 attachEvent() 方法向元素添加事件处理程序，并由 detachEvent() 方法删除：

element.attachEvent(event, function);
element.detachEvent(event, function);
实例
跨浏览器解决方案：

var x = document.getElementById("myBtn");
if (x.addEventListener) {                    // 针对主流浏览器，除了 IE 8 及更正版本
    x.addEventListener("click", myFunction);
} else if (x.attachEvent) {                  // 针对 IE 8 及更早版本
    x.attachEvent("onclick", myFunction);
} 









添加和删除节点（HTML 元素）

创建新 HTML 元素（节点）
如需向 HTML DOM 添加新元素，您必须首先创建这个元素（元素节点），然后将其追加到已有元素。

实例
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("这是新文本。");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
</script>
亲自试一试
例子解释
这段代码创建了一个新的 <p> 元素：

var para = document.createElement("p");
如需向 <p> 元素添加文本，则必须首先创建文本节点。这段代码创建了一个文本节点：

var node = document.createTextNode("这是一个新段落。");
然后您需要向 <p> 元素追加这个文本节点：

para.appendChild(node);
最后您需要向已有元素追加这个新元素。

这段代码查找一个已有的元素：

var element = document.getElementById("div1");
这段代码向这个已有的元素追加新元素：

element.appendChild(para);
创建新 HTML 元素 - insertBefore()
前面例子中的 appendChild() 方法，追加新元素作为父的最后一个子。

除此之外您还可以使用 insertBefore() 方法：

实例
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("这是新文本。");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);
</script>
亲自试一试
删除已有 HTML 元素
如需删除 HTML 元素，请使用 remove() 方法：

实例
<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const elmnt = document.getElementById("p1"); elmnt.remove();
</script>
亲自试一试
例子解释
这个 HTML 文档包含一个带有两个子节点（两个 <p> 元素）的 <div> 元素：

<div>
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
找到需要删除的元素：

const elmnt = document.getElementById("p1");
然后对该元素执行 remove() 方法：

elmnt.remove();
注意：remove() 方法在旧浏览器中不起作用，请参阅下面的例子，了解如何改用 removeChild()。

删除子节点
对于不支持 remove() 方法的浏览器，您必须找到父节点才能删除一个元素：

实例
<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
const parent = document.getElementById("div1");
const child = document.getElementById("p1");
parent.removeChild(child);
</script>
亲自试一试
例子解释
此 HTML 文档包含一个带有两个子节点（两个 <p> 元素）的 <div> 元素：

<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>
找到 id="div1" 的元素：

const parent = document.getElementById("div1");
找到 id="p1" 的 <p> 元素：

const child = document.getElementById("p1");
从父元素中删除子：

parent.removeChild(child);
这是一个常见的解决方法：找到要删除的子节点，并使用其 parentNode 属性找到父节点：

const child = document.getElementById("p1");
child.parentNode.removeChild(child);
替换 HTML 元素
如需替换元素的，请使用 replaceChild() 方法：

实例
<div id="div1">
<p id="p1">这是一个段落。</p>
<p id="p2">这是另一个段落。</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("这是新文本。");
para.appendChild(node);

var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.replaceChild(para, child);
</script>












JavaScript HTML DOM 集合
DOM 节点
DOM 节点列表
HTMLCollection 对象
getElementsByTagName() 方法返回 HTMLCollection 对象。

HTMLCollection 对象是类数组的 HTML 元素列表（集合）。

下面的代码选取文档中的所有 <p> 元素：

实例
var x = document.getElementsByTagName("p");
该集合中的元素可通过索引号进行访问。

如需访问第二个 <p> 元素，您可以这样写：

y = x[1];
亲自试一试
注释：索引从 0 开始。

HTML HTMLCollection 长度
length 属性定义了 HTMLCollection 中元素的数量：

实例
var myCollection = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = myCollection.length; 
亲自试一试
实例解释：
创建所有 <p> 元素的集合
显示集合的长度
length 属性在您需要遍历集合中元素时是有用的：

实例
改变所有 <p> 元素的背景色：

var myCollection = document.getElementsByTagName("p");
var i;
for (i = 0; i < myCollection.length; i++) {
    myCollection[i].style.backgroundColor = "red";
}
HTMLCollection 并非数组！
HTMLCollection 也许看起来像数组，但并非数组。

您能够遍历列表并通过数字引用元素（就像数组那样）。

不过，您无法对 HTMLCollection 使用数组方法，比如 valueOf()、pop()、push() 或 join()。







JavaScript HTML DOM 节点列表
DOM 集合
JS Window
HTML DOM NodeList 对象
NodeList 对象是从文档中提取的节点列表（集合）。

NodeList 对象与 HTMLCollection 对象几乎相同。

如使用 getElementsByClassName() 方法，某些（老的）浏览器会返回 NodeList 对象而不是 HTMLCollection。

所有浏览器都会为 childNodes 属性返回 NodeList 对象。

大多数浏览器会为 querySelectorAll() 方法返回 NodeList 对象。

下面的代码选取文档中的所有 <p> 节点：

实例
var myNodeList = document.querySelectorAll("p");
亲自试一试
NodeList 中的元素可通过索引号进行访问。

如需访问第二个 <p> 节点，您可以这样写：

y = myNodeList[1];
注释：索引从 0 开始。

HTML DOM Node List 长度
length 属性定义节点列表中的节点数：

实例
var myNodelist = document.querySelectorAll("p");
document.getElementById("demo").innerHTML = myNodelist.length;
亲自试一试
例子解释：
创建所有 <p> 元素的列表
显示该列表的长度
length 属性在您希望遍历节点列表中的节点时很有用：

实例
改变节点列表中所有 <p> 元素的背景色：

var myNodelist = document.querySelectorAll("p");
var i;
for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = "red";
}
亲自试一试
HTMLCollection 与 NodeList 的区别
HTMLCollection（前一章）是 HTML 元素的集合。

NodeList 是文档节点的集合。

NodeList 和 HTML 集合几乎完全相同。

HTMLCollection 和 NodeList 对象都是类数组的对象列表（集合）。

它们都有定义列表（集合）中项目数的 length 属性。

它们都可以通过索引 (0, 1, 2, 3, 4, ...) 像数组那样访问每个项目。

访问 HTMLCollection 项目，可以通过它们的名称、id 或索引号。

访问 NodeList 项目，只能通过它们的索引号。

只有 NodeList 对象能包含属性节点和文本节点。

节点列表不是数组！

节点数组看起来像数组，但并不是。

您能够遍历节点列表并像数组那样引用其节点。

不过，您无法对节点列表使用数组方法，比如 valueOf()、push()、pop() 或 join()。


































  