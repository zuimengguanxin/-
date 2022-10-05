[toc]
## css中级

## 1.display
     默认值 block 块级元素 或 inline 行内元素 
     none  隐藏或使用元素，visibility:hidden;，也可以隐藏元素。该元素仍将占用与之前相同的空间。元素将被隐藏，但仍会影响布局：
    flex
    inline-block 
    如果设置了 display: inline-block，将保留上下外边距/内边距，而 display: inline 则不会。


### (1)块级元素(block element)
    块级元素总是从新行开始，并占据可用的全部宽度(尽可能向左和向右伸展)。
    块级元素的一些例子：
    <div>
    <h1> - <h6>
    <p>
    <form>
    <header>
    <footer>
    <section>
### (2)行内元素(inline element)
    内联元素不从新行开始，仅占用所需的宽度。
    这是段落中的行内 <span> 元素。
    行内元素的一些例子：
    <span>
    <a>
    <img>
## 2.position 定位
### (1)position 属性规定应用于元素的定位方法的类型。
    有五个不同的位置值：
    static       静态的
    relative     相对于其正常位置进行定位
    fixed        相对于视口定位的  固定定位
    absolute     相对于最近的定位祖先元素进行定位
    sticky       根据用户的滚动位置进行定位 粘性定位

    元素其实是使用 top、bottom、left 和 right 属性定位的。但是，除非首先设置了 position 属性，否则这些属性将不起作用。根据不同的 position 值，它们的工作方式也不同。
 ### (2)z-index
    属性指定元素的堆栈顺序(哪个元素应放置在其他元素的前面或后面)。
    元素可以设置正或负的堆叠顺序：
    具有较高堆叠顺序的元素始终位于具有较低堆叠顺序的元素之前。
    注意：如果两个定位的元素重叠而未指定 z-index，则位于 HTML 代码中最后的元素将显示在顶部。
## 3.溢出
    overflow 属性控制对太大而区域无法容纳的内容的处理方式 是剪裁内容还是添加滚动条

    overflow 属性可设置以下值：
    visible - 默认。溢出没有被剪裁。内容在元素框外渲染
    hidden - 溢出被剪裁，其余内容将不可见
    scroll - 溢出被剪裁，同时添加滚动条以查看其余内容
    auto - 与 scroll 类似，但仅在必要时添加滚动条

    overflow-x 和 overflow-y 属性规定是仅水平还是垂直地(或同时)更改内容的溢出
## 4.浮动
### (1)CSS float 属性规定元素如何浮动。
    
    float 属性可以设置以下值之一：
    left - 元素浮动到其容器的左侧
    right - 元素浮动在其容器的右侧
    none - 元素不会浮动(将显示在文本中刚出现的位置)。默认值。
    inherit - 元素继承其父级的 float 值
### (2)CSS clear 属性规定哪些元素可以在清除的元素旁边以及在哪一侧浮动。
    clear 属性可设置以下值之一：
    none - 允许两侧都有浮动元素。默认值
    left - 左侧不允许浮动元素
    right- 右侧不允许浮动元素
    both - 左侧或右侧均不允许浮动元素
    inherit - 元素继承其父级的 clear 值
### (3)overflow: auto
    如果一个元素比包含它的元素高，并且它是浮动的，它将“溢出”到其容器之外：
    然后我们可以向包含元素添加 overflow: auto;，来解决此问题：
### (4)清除浮动
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
### (5)导航菜单示例[示例](css-code/浮动/001-导航栏.html)
## 5.对齐
### (1)使块元素(例如 <div> )水平居中，
    margin: auto
    设置元素的宽度将防止其延伸到容器的边缘。(如果未设置 width 属性(或将其设置为 100％)，则居中对齐无效。)
    然后，元素将占用指定的宽度，剩余空间将在两个外边距之间平均分配：
    如：
    .center {
        margin: auto;
        width: 50%;
        border: 3px solid green;
        padding: 20px;
    }
### (2)水平居中对齐文本
    text-align: center;
    这段文本是居中的。
### (3)居中对齐图像
    将左右外边距设置为 auto，并将其设置为块元素：
    如：img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
        }
### (4)左和右对齐 
#### position: absolute; :
    如：
    .right {
        position: absolute;
        right: 0px;
        width: 300px;
        border: 3px solid #73AD21;
        padding: 20px;
    }
    绝对定位的元素将从正常流中删除，并可能出现元素重叠。
#### float
    .right {
        float: right;
        width: 300px;
        border: 3px solid #73AD21;
        padding: 10px;
    }
### (6)垂直对齐
    使用padding 使上下内边距相等
    .center {
        padding: 70px 0;
        border: 3px solid green;
    }
### (7)垂直和水平居中文本
#### padding 和 text-align: center;
     .center {
        padding: 70px 0;
        border: 3px solid green;
        text-align: center;
    }
#### 使用其值等于 height 属性值的 line-height 属性
    .center {
        line-height: 200px;
        height: 200px;
        border: 3px solid green;
        text-align: center;
    }

    /* 如果有多行文本，请添加如下代码：*/
    .center p {
        line-height: 1.5;
        display: inline-block;
        vertical-align: middle;
    }
#### 使用 position 和 transform 属性
    .center { 
        height: 200px;
        position: relative;
        border: 3px solid green; 
    }

    .center p {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
#### 同时将 justify-content 和 align-items 属性设置为 center 的容器将使项目在中心(在两个轴上)对齐
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        border: 3px solid green; 
    }
## 6.css 组合器
    CSS 中有四种不同的组合器：
    后代选择器 (空格)    div p	选择 <div> 元素内的所有 <p> 元素。
    子选择器 (>)    div > p	选择其父元素是 <div> 元素的所有 <p> 元素。
    相邻兄弟选择器 (+)  div + p	选择所有紧随 <div> 元素之后的 <p> 元素。
    通用兄弟选择器 (~)  p ~ ul	选择前面有 <p> 元素的每个 <ul> 元素

### (1)后代选择器 (空格)
    下面的例子选择 <div> 元素内的所有 <p> 元素：
    实例
    div p {
    background-color: yellow;
    }
### (2)子选择器 (>)
    下面的例子选择属于 <div> 元素子元素的所有 <p> 元素：
    div > p {
    background-color: yellow;
    }
### (3)相邻兄弟选择器
    匹配所有作为指定元素的相邻同级的元素。
    兄弟(同级)元素必须具有相同的父元素，“相邻”的意思是“紧随其后”。
    下面的例子选择紧随 <div> 元素之后的所有 <p> 元素：
    div + p {
    background-color: yellow;
    }
### (4)通用兄弟选择器
    匹配属于指定元素的同级元素的所有元素。
    下面的例子选择属于 <div> 元素的同级元素的所有 <p> 元素：
    实例
    div ~ p {
    background-color: yellow;
    }
## 7.伪元素
 [伪类与微元素参考](https://www.w3school.com.cn/css/css_pseudo_classes.asp)
### 简介
    CSS 伪元素用于设置元素指定部分的样式。
    例如，它可用于：
    设置元素的首字母、首行的样式
    在元素的内容之前或之后插入内容
### 所有 CSS 伪元素
     选择器	例子	例子描述
    ::after	p::after	在每个 <p> 元素之后插入内容。
    ::before	p::before	在每个 <p> 元素之前插入内容。 content:url()
    ::first-letter	p::first-letter	选择每个 <p> 元素的首字母。 只适用于块级元素。
    ::first-line	p::first-line	选择每个 <p> 元素的首行。只能应用于块级元素。
    ::selection 	p::selection	选择用户选择的元素部分。
## 8.CSS 不透明度 / 透明度
    opacity 属性指定元素的不透明度/透明度。opacity 属性的取值范围为 0.0-1.0。值越低，越透明：

    使用 opacity 属性为元素的背景添加透明度时，子元素都继承相同的透明度。使完全透明的元素内的文本难以阅读
    解决方案：使用RGBA设置背景色， 
    rgba(red, green, blue, alpha。
    alpha 参数是介于 0.0(完全透明)和 1.0(完全不透明)之间的数字。
## 9.导航栏
### (1)垂直导航栏 [垂直导航栏](css-code/导航栏/001-垂直导航栏.html)
### (2)水平导航栏 
#### 行内列表项 [水平导航栏](css-code/导航栏/001-水平导航栏.html)
    将 <li> 元素指定为 inline：
#### 行内块列表项
    将 <li> 元素指定为 inline-block：
#### 浮动列表项[水平导航栏](css-code/导航栏/002-水平导航栏(浮动列表项).html)
    浮动 <li> 元素，并为导航链接规定布局 
[实例](css-code/导航栏/003-水平导航栏(实例).html)

## 10.下拉菜单[下拉菜单](css-code/下拉菜单/001-下拉菜单.html)
## 11.css表单 [表单](css-code/表单/001-表单外观.html)
### (1)获得焦点的输入框
    获得焦点的输入框
    默认情况下，某些浏览器在获得焦点(单击)时会在输入框周围添加蓝色轮廓。您可以通过向输入添加 outline: none; 来消除此行为。
    使用 :focus 选择器可以在输入字段获得焦点时为其设置样式：
    实例 1
    input[type=text]:focus {
        background-color: lightblue;
    }
### (2)带有图标/图像的输入框 [表单](css-code/表单/002-带有图标图像的输入框.html)
    如果希望在输入框中包含图标，请使用 background-image 属性，并将其与 background-position 属性一起设置。还要注意，我们添加了一个较大的左内边距(padding-left)来留出图标的空间：
    实例
    input[type=text] {
        background-color: white;
        background-image: url('searchicon.png');
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding-left: 40px;
    }
### (3)带动画效果的搜索输入框[表单](css-code/表单/003-带动画效果的搜索输入框.html)
    在本例中，我们使用 CSS transition 属性为搜索输入框获得焦点时的宽度变化设置动画。
    实例
    input[type=text] {
        transition: width 0.4s ease-in-out;
    }
    input[type=text]:focus {
        width: 100%;
    }
### (4)设置文本域的样式
    提示：使用 resize 属性可防止对 textareas 调整大小(禁用右下角的“抓取器”)：
    resize 值 
    实例
    textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }

### (5)响应式表单[表单](css-code/表单/004-响应式表单.html)
### (6)计数器
    counter() 或 counters() 函数 - 将计数器的值添加到元素
    content	与 ::before 和 ::after 伪元素一同使用，来插入生成的内容。
    counter-increment	递增一个或多个计数器值。  section
    counter-reset	创建或重置一个或多个计数器。    subsection section

    如：
    body {
        counter-reset: section;
    }

    h2::before {
        counter-increment: section;
         content: "第" counter(section) "个: " ;
    



