# css 简介 [示例](css-code/多个样式表。html)

CSS 是一种描述 HTML 文档样式的语言。
CSS 指的是层叠样式表* (Cascading Style Sheets)
CSS 描述了如何在屏幕、纸张或其他媒体上显示 HTML 元素
CSS 节省了大量工作。它可以同时控制多张网页的布局外部样式表存储在 CSS 文件中

## css 基础

### 1.css 语法

    选择器指向您需要设置样式的 HTML 元素。
    声明块包含一条或多条用分号分隔的声明。
    每条声明都包含一个 CSS 属性名称和一个值，以冒号分隔。
    多条 CSS 声明用分号分隔，声明块用花括号括起来。
    p {
        color: red;
        text-align: center;
    }
    p 是 CSS 中的选择器（它指向要设置样式的 HTML 元素：p）。
    color 是属性，red 是属性值
    text-align 是属性，center 是属性值

### 2.css 选择器

    (1)id 选择器
       将应用于 id="para1" 的 HTML 元素，前加 # 如：
       #para1 {
         text-align: center;
        color: red;
        }
    (2)class 选择器
      所有带有 class="center" 的 HTML 元素，前加 . 如
      .center {
            text-align: center;
            color: red;
        }
    (3) 其他

| 选择器                            | 例子                                         | 例子描述                                            |
| --------------------------------- | -------------------------------------------- | --------------------------------------------------- |
| .class                            | .intro                                       | 选择 class="intro" 的所有元素。                     |
| .class1.class2                    | .name1.name2                                 | 选择 class 属性中同时有 name1 和 name2 的所有元素。 |
| .class1 .class2                   | .name1 .name2                                | 选择作为类名 name1 元素后代的所有类名 name2 元素。  |
| #id                               | #firstname                                   | 选择 id="firstname" 的元素。                        |
| *                                 | *                                            | 选择所有元素。                                      |
| element                           | p                                            | 选择所有 p 元素。                                   |
| element.class                     | p.intro                                      | 选择 class="intro" 的所有 p 元素。                  |
| element,element                   | div, p                                       | 选择所有 div 元素和所有 p 元素。                    |
| element element                   | div p                                        | 选择 div 元素内的所有 p 元素。                      |
| elementelement                    | div  p                                       | 选择父元素是 div 的所有 p 元素。                    |
| element+element                   | div + p                                      | 选择紧跟 div 元素的首个 p 元素。                    |
| element1~element2                 | p ~ ul                                       | 选择前面有 p 元素的每个 ul 元素。                   |
| [attribute]                       | [target]                                     | 选择带有 target 属性的所有元素。                    |
| [attribute=value]                 | [target=_blank]                              | 选择带有 target="_blank" 属性的所有元素。           |
| [attribute~=value]                | [title~=flower]                              | 选择 title 属性包含单词 "flower" 的所有元素。       |
| [attribute=value]                 | [lang=en]                                    | 选择 lang 属性值以 "en" 开头的所有元素。            |
| [attribute^=value]                | a[href^="https"]                             | 选择其 src 属性值以 "https" 开头的每个 a 元素。     |
| [attribute$=value]$               | $a[href$=".pdf"]                             | 选择其 src 属性以 ".pdf" 结尾的所有 a 元素。        |
| [attribute*=value]                | a[href*="w3schools"]                         | 选择其 href 属性值中包含 "abc" 子串的每个 a 元素。  |
| :active                           | a:active                                     | 选择活动链接。                                      |
| ::after                           | p::after                                     | 在每个 p 的内容之后插入内容。                       |
| ::before                          | p::before                                    | 在每个 p 的内容之前插入内容。                       |
| :checked                          | input:checked                                | 选择每个被选中的 input 元素。                       |
| :default                          | input:default                                | 选择默认的 input 元素。                             |
| :disabled                         | input:disabled                               | 选择每个被禁用的 input 元素。                       |
| :empty                            | p:empty                                      | 选择没有子元素的每个 p 元素（包括文本节点）。       |
| :enabled                          | input:enabled                                | 选择每个启用的 input 元素。                         |
| :first-child                      | p:first-child                                | 选择属于父元素的第一个子元素的每个 p 元素。         |
| ::first-letter                    | p::first-letter                              | 选择每个 p 元素的首字母。                           |
| ::first-line                      | p::first-line                                | 选择每个 p 元素的首行。                             |
| :first-of-type                    | p:first-of-type                              | 选择属于其父元素的首个 p 元素的每个 p 元素。        |
| :focus                            | input:focus                                  | 选择获得焦点的 input 元素。                         |
| :fullscreen                       | :fullscreen                                  | 选择处于全屏模式的元素。                            |
| :hover                            | a:hover                                      | 选择鼠标指针位于其上的链接。                        |
| :in-range                         | input:in-range                               | 选择其值在指定范围内的 input 元素。                 |
| :indeterminate                    | input:indeterminate                          | 选择处于不确定状态的 input 元素。                   |
| :invalid                          | input:invalid                                | 选择具有无效值的所有 input 元素。                   |
| :lang(language)                   | p:lang(it)                                   | 选择 lang 属性等于 "it"（意大利）的每个 p 元素。    |
| :last-child                       | p:last-child                                 | 选择属于其父元素最后一个子元素每个 p 元素。         |
| :last-of-type                     | p:last-of-type                               | 选择属于其父元素的最后 p 元素的每个 p 元素。        |
| :link                             | a:link                                       | 选择所有未访问过的链接。                            |
| :not(selector)                    | :not(p)                                      | 选择非 p 元素的每个元素。                           |
| :nth-child(n)                     | p:nth-child(2)                               | 选择属于其父元素的第二个子元素的每个 p 元素。       |
| :nth-last-child(n)                | p:nth-last-child(2)                          | 同上，从最后一个子元素开始计数。                    |
| :nth-of-type(n)\	p:nth-of-type(2) | 选择属于其父元素第二个 p 元素的每个 p 元素。 |                                                     |
| :nth-last-of-type(n) 同上，       | p:nth-last-of-type(2)                        | 但是从最后一个子元素开始计数。                      |
| :only-of-type                     | p:only-of-type                               | 选择属于其父元素唯一的 p 元素的每个 p 元素。        |
| :only-child                       | p:only-child                                 | 选择属于其父元素的唯一子元素的每个 p 元素。         |
| :optional                         | input:optional                               | 选择不带 "required" 属性的 input 元素。             |
| :out-of-range                     | input:out-of-range                           | 选择值超出指定范围的 input 元素。                   |
| ::placeholder                     | input::placeholder                           | 选择已规定 "placeholder" 属性的 input 元素。        |
| :read-only                        | input:read-only                              | 选择已规定 "readonly" 属性的 input 元素。           |
| :read-write                       | input:read-write                             | 选择未规定 "readonly" 属性的 input 元素。           |
| :required                         | input:required                               | 选择已规定 "required" 属性的 input 元素。           |
| :root                             | :root                                        | 选择文档的根元素。                                  |
| ::selection                       | ::selection                                  | 选择用户已选取的元素部分。                          |
| :target                           | #news:target                                 | 选择当前活动的 #news 元素。                         |
| :valid                            | input:valid                                  | 选择带有有效值的所有 input 元素。                   |
| :visited                          | a:visited                                    | 选择所有已访问的链接。                              |

### 3. 添加 css

有三种插入样式表的方法：

    外部 CSS
    内部 CSS
    行内 CSS

#### (1) 外部 CSS

    1. 通过使用外部样式表，您只需修改一个文件即可改变整个网站的外观！
    2. 每张 HTML 页面必须在 head 部分的<link> 元素内
    包含对外部样式表文件的引用。
    3. 外部样式表可以在任何文本编辑器中编写，并且必须以 .css 扩展名保存。
    4. 外部 .css 文件不应包含任何 HTML 标签。
    "mystyle.css" 是这样的：
    "mystyle.css"
    body {
        background-color: lightblue;
    }

    h1 {
        color: navy;
        margin-left: 20px;
    }
    5. 请勿在属性值和单位之间添加空格
    （例如 margin-left: 20 px;）。正确的写法是：margin-left: 20px;

实例
外部样式在 HTML 页面 head 部分内的 link 元素中进行定义：





#### (2) 内部 CSS

    如果一张 HTML 页面拥有唯一的样式，那么可以使用内部样式表。
    内部样式是在 head 部分的 style 元素中进行定义。
实例
内部样式在 HTML 页面的 head 部分内的 style 元素中进行定义：

    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                background-color: linen;
            }

    h1 {
                color: maroon;
                margin-left: 40px;
            }</style>
    </head>
    <body>
        <h1>This is a heading </h1>
        <p>This is a paragraph.</p>
    </body>
    </html>

#### (3) 行内 CSS

    1. 行内样式（也称内联样式）可用于为单个元素应用唯一的样式。
    2. 如需使用行内样式，请将 style 属性添加到相关元素。style 属性可包含任何 CSS 属性。
    3. 行内样式失去了样式表的许多优点（通过将内容与呈现混合在一起）。请谨慎使用此方法。

实例
行内样式在相关元素的 "style" 属性中定义：

    <!DOCTYPE html>
    <html>
    <body>
        <h1 style="color:blue;text-align:center;">This is a heading </h1>
        <p style="color:red;">This is a paragraph.</p>
    </body>
    </html>

#### (4) 多个样式表优先级

    如果在不同样式表中为同一选择器（元素）定义了一些属性，则将使用最后读取的样式表中的值。

假设某个外部样式表为 h1 元素设定的如下样式：

    h1 {
    color: navy;
    }
然后，假设某个内部样式表也为 h1 元素设置了如下样式：

    h1 {
    color: orange;
    }
如果内部样式是在链接到外部样式表之后定义的，则 h1 元素将是橙色：

    <head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    <style>
    h1 {
    color: orange;
    }
    </style>
    </head>
不过，如果在链接到外部样式表之前定义了内部样式，则 h1 元素将是深蓝色：

    <head>
    <style>
    h1 {
    color: orange;
    }
    </style>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
    </head>
层叠顺序

    当为某个 HTML 元素指定了多个样式时，
    页面中的所有样式将按照以下规则“层叠”为新的“虚拟”样式表，其中第一优先级最高：
    行内样式（在 HTML 元素中）>内部样式表（在 head 部分）>外部样式表>浏览器默认样式
    因此，行内样式具有最高优先级，并且将覆盖外部和内部样式以及浏览器默认样式。

### 4. 添加注释

    1. 位于 style 元素内的 CSS 注释，以 /* 开始，以*/ 结束，如：
        /* 这是一条单行注释*/
        p {
            color: red;/* 把文本设置为红色*/
        }
        /* 这是
        一条多行的
        注释 */

    2. 语法在 HTML 源代码中添加注
    <!--...-->, 如：
    <!-- 这些段落将是红色的 -->
    <p>Hello World!</p>
    <p>这段文本由 CSS 设置样式。</p>
    <p>CSS 注释不会在输出中显示。</p>

### 5.css 背景

#### (1)background-image

    1. 指定用作元素背景的图像。
    2. 默认情况下，图像会重复，以覆盖整个元素。
    3. 使用背景图像时，请使用不会干扰文本的图像。
    body {
        background-image: url("paper.gif");
    }
    4. 可以为特定元素设置背景图像，例如<p> 元素：
    p {
        background-image: url("paper.gif");
    }

#### (2)background-repeat

    1. 默认情况下，background-image 属性在水平和垂直方向上都重复图像。
        设置只在水平方向重复平铺图片
        background-repeat: repeat-x;
        设置只在垂直方向重复平铺图像
        background-repeat: repeat-y;。
        设置不重复平铺图片
        background-repeat: no-repeat

#### (3)background-position

    1. 属性用于指定背景图像的位置。
    值 top bottom right left center
        把背景图片放在右上角：
    body {
    background-image: url("tree.png");
    background-repeat: no-repeat;
    background-position: right top;

#### (4)background-attachment 背景附着

    1.background-attachment 属性指定背景图像是应该滚动还是固定的（不会随页面的其余部分一起滚动）：
    2. 指定应该固定背景图像：
    body {
        background-image: url("tree.png");
        background-repeat: no-repeat;
        background-position: right top;
        background-attachment: fixed;
    }

    指定背景图像应随页面的其余部分一起滚动：

    body {
        background-image: url("tree.png");
        background-repeat: no-repeat;
        background-position: right top;
        background-attachment: scroll;
    }

#### (5) 简写背景属性

    在使用简写属性时，属性值的顺序为：
    background-color
    background-image
    background-repeat
    background-attachment
    background-position
    属性值之一缺失并不要紧，只要按照此顺序设置其他值即可。

#### (6) 所有 css 属性背景

    background	在一条声明中设置所有背景属性的简写属性。
    background-attachment	设置背景图像是固定的还是与页面的其余部分一起滚动。 fixed scroll
    background-clip	规定背景的绘制区域。
    background-color	设置元素的背景色。
    background-image	设置元素的背景图像。
    background-origin	规定在何处放置背景图像。
    background-position	设置背景图像的开始位置。
    background-repeat	设置背景图像是否及如何重复。
    background-size	 规定背景图像的尺寸。

### 6.border 边框

#### (1)border-style  边框样式

    属性指定要显示的边框类型。
    border-style 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。顺时针
    允许以下值：
        dotted - 定义点线边框
        dashed - 定义虚线边框
        solid - 定义实线边框
        double - 定义双边框
        groove - 定义 3D 坡口边框。效果取决于 border-color 值
        ridge - 定义 3D 脊线边框。效果取决于 border-color 值
        inset - 定义 3D inset 边框。效果取决于 border-color 值
        outset - 定义 3D outset 边框。效果取决于 border-color 值
        none - 定义无边框
        hidden - 定义隐藏边框

#### (2)border-width

    1. 属性指定四个边框的宽度。
    2. 可以将宽度设置为特定大小（以 px、pt、cm、em 计），也可以使用以下三个预定义值之一：thin、medium 或 thick：
    3.border-width 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）顺时针

#### (3)border-color  边框颜色

    1. 属性用于设置四个边框的颜色。
    2.transparent   透明
    3. 如果未设置 border-color，则它将继承元素的颜色。
    4.border-color 属性可以设置一到四个值（用于上边框、右边框、下边框和左边框）。

#### (4) 边框各边

    border-style 或 border-color 或 border-width 属性多个值
    1. 如果属性设置四个值：用于上边框、右边框、下边框和左边框（顺时针）。
    2. 如果属性设置三个值：用于上边框、右和左边框、下边框。
    3. 如果属性设置两个值：上和下边框、右和左边框。
    4. 如果 属性设置一个值：四条边框
    注：可以单独设置各边，中间加 left right top bottom 如 border-right-color

#### （5）简写边框属性

    为了缩减代码，也可以在一个属性中指定所有单独的边框属性。
    border 属性是以下各个边框属性的简写属性：
        border-width
        border-style（必需）
        border-color
        如：
        p {
            border: 5px solid red;
        }

#### （6）border-radius   圆角边框

    用于向元素添加圆角边框
        如：
        
        p {
            border: 2px solid red;
            border-radius: 5px;
        }

### 7.margin 外边距

    1.CSS margin 属性用于在任何定义的边框之外，为元素周围创建空间。
    2. 通过 CSS，您可以完全控制外边距。有一些属性可用于设置元素每侧（上、右、下和左）的外边距。属性的值接受任何长度单位、百分数值甚至负值。
    3.margin 属性设置为 auto，以使元素在其容器中水平居中。
    然后，该元素将占据指定的宽度，并且剩余空间将在左右边界之间平均分配。
    4.margin 属性设置为 inherit，使元素继承父元素。

#### （1）Margin - 单独的边

    CSS 拥有用于为元素的每一侧指定外边距的属性：
    margin-top
    margin-right
    margin-bottom
    margin-left

#### （2）magin 简写属性

    如：
    margin: 25px 50px 75px 100px;
    四个值：上右下左
    三个值：上 右左 下
    两个值；上下  右左

#### （3）css 外边距合并

    外边距合并指的是，
    1. 当两个垂直外边距相遇时，它们将形成一个外边距。
        合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。
    2. 当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上外边距/或下外边距也会发生合并。
        结果是外边距的高度中的较大者
    3. 外边距甚至可以与自身发生合并。
        空元素，它有外边距，但是没有边框或填充。在这种情况下，上外边距与下外边距就碰到了一起，它们会发生合并。
        结果是外边距的高度中的较大者
    4. 只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。

### 8.padding 内边距

    1.CSS padding 属性用于在任何定义的边界内的元素内容周围生成空间。
    2. 通过 CSS，您可以完全控制内边距（填充）。有一些属性可以为元素的每一侧（上、右、下和左侧）设置内边距。
    3. 所有内边距属性都可以设置以下值：
        length - 以 px、pt、cm 等单位指定内边距
        % - 指定以包含元素宽度的百分比计的内边距
        inherit - 指定应从父元素继承内边距

#### （1）Padding - 单独的边

    CSS 拥有用于为元素的每一侧指定内边距的属性：
        padding-top
        padding-right
        padding-bottom
        padding-left

#### （2）Padding - 简写属性

    如：
    padding: 25px 50px 75px 100px;
    四个值：上右下左
    三个值：上 右左 下
    两个值；上下  右左

#### (3) 内边距和元素宽度 [见内边距 001-元素宽度](css-code/内边距/001-元素宽度)

    1.CSS width 属性指定元素内容区域的宽度。内容区域是元素（盒模型）的内边距、边框和外边距内的部分。
    2. 因此，如果元素拥有指定的宽度，则添加到该元素的内边距会添加到元素的总宽度中。
    3. 在这里，div 元素的宽度为 300px。但是，div 元素的实际宽度将是 350px（300px + 左内边距 25px + 右内边距 25px）：
    div {
        width: 300px;
        padding: 25px;
    }
    4.若要将宽度保持为 300px，无论填充量如何，那么您可以使用 box-sizing 属性。这将导致元素保持其宽度。如果增加内边距，则可用的内容空间会减少。
    div {
    width: 300px;
    padding: 25px;
    box-sizing: border-box;
    }
#### (4)height和width
##### 用于设置元素的高度和宽度。
    height 和 width 属性不包括内边距、边框或外边距。
    设置的是元素内边距、边框以及外边距内的区域的高度或宽度。
##### height 和 width 属性可设置如下值：
    auto - 默认。浏览器计算高度和宽度。
    length - 以 px、cm 等定义高度/宽度。
    % - 以包含块的百分比定义高度/宽度。
    initial - 将高度/宽度设置为默认值。
    inherit - 从其父值继承高度/宽度。
##### 设置 CSS 尺寸属性
    属性	描述
    height	设置元素的高度。
    max-height	设置元素的最大高度。
    min-height	设置元素的最小高度。

    width	设置元素的宽度。
    max-width	设置元素的最大宽度
    min-width	设置元素的最小宽度。   
### 9 .css框模型
![框模型](https://www.w3school.com.cn/i/css/boxmodel.gif)
#### (1)对不同部分的说明：

    内容 - 框的内容，其中显示文本和图像。
    内边距 - 清除内容周围的区域。内边距是透明的。
    边框 - 围绕内边距和内容的边框。
    外边距 - 清除边界外的区域。外边距是透明的。

    元素框的最内部分是实际的内容，直接包围内容的是内边距。
    内边距呈现了元素的背景。
    背景应用于由内容和内边距、边框组成的区域。
    内边距的边缘是边框。
    边框以外是外边距，
    外边距默认是透明的，因此不会遮挡其后的任何元素。
#### (2)覆盖浏览器样式（用户代理样式表）
    * {
        margin: 0;
        padding: 0;
    }
#### (3)元素的总宽度应该这样计算：
    元素总宽度 = 宽度 + 左内边距 + 右内边距 + 左边框 + 右边框 + 左外边距 + 右外边距
    元素的总高度应该这样计算：
    元素总高度 = 高度 + 上内边距 + 下内边距 + 上边框 + 下边框 + 上外边距 + 下外边距
### 10.轮廓
#### （1）CSS 拥有如下轮廓属性：
    outline-style
    outline-color
    outline-width
    outline-offset
    outline
    注：轮廓与边框不同！不同之处在于：
    轮廓是在元素边框之外绘制的，并且可能与其他内容重叠。
    同样，轮廓也不是元素尺寸的一部分；元素的总宽度和高度不受轮廓线宽度的影响。
#### （2）outline-style 
    指定轮廓的样式，并可设置如下值：
    dotted - 定义点状的轮廓。
    dashed - 定义虚线的轮廓。
    solid - 定义实线的轮廓。
    double - 定义双线的轮廓。
    groove - 定义 3D 凹槽轮廓。
    ridge - 定义 3D 凸槽轮廓。
    inset - 定义 3D 凹边轮廓。
    outset - 定义 3D 凸边轮廓。
    none - 定义无轮廓。
    hidden - 定义隐藏的轮廓。
#### （3）outline-width
    指定轮廓的宽度，并可设置如下值之一：
    thin（通常为 1px）
    medium（通常为 3px）
    thick （通常为 5px）
    特定尺寸（以 px、pt、cm、em 计）
#### （4）outline  轮廓简写
    用于设置以下各个轮廓属性的简写属性：
    outline-width
    outline-style（必需）
    outline-color
    从上面的列表中，outline 属性可指定一个、两个或三个值。值的顺序无关紧要。
#### （5）outline-offset	
    指定轮廓与元素的边缘或边框之间的空间。
### 11.css文本属性
    color              文本颜色
    background-color   背景颜色
    text-align      文本对齐center left right justify
    direction       文本位置
### 11.css文本属性
#### （1）基本属性
    color             文本颜色
    background-color  背景颜色
    text-align        文本对齐center left right justify
    direction         文本位置 rtl 
    unicodebidi      与 direction 属性一起使用，设置或返回是否应重写文本来支持同一文档中的多种语言。 bidioverride
    vertical-align    垂直对齐方式  top middle bottom
#### （2）文本处理
    text-decoration   设置或删除文本修饰 none通常用作从链接上删除下划线 overline 上  linethrough 穿过  underline 下
    text-transform    大小写  uppercase 大写 lowercase 小写    capitalize 首字母大写
    text-indent       文本缩进   
    letter-spacing    文本中字符间距
    line-height       行之间的间距
    word-spacing      指定文本中单词的间距
    white-space       空白的处理方式
#### （3）文本阴影
    textshadow       文本阴影 
        h1 {
            textshadow: 2px 2px 5px red;
        }
#### （4）字体字号等处理
    font-family      文本字体
       如果不想使用 HTML 中的任何标准字体，可以使用 Google Fonts API 向页面添加数百种其他字体。
       只需添加一个样式表链接并引用您选择的字体系列：<link relef="https://fonts.googleapis.com/css?family=Sofia
    fon样式，用于指定斜体文本      normal  文字正常显示  italic  文本以斜体显示  oblique  文本为“倾斜”（倾斜与斜体非常相似，但支持较少）
    font-weight      字体的粗细  normal  bold
    font-variant     以小型大写字母显示文本 normal  smallcaps()
    font-size        文本大小   支持 px em  %    vw
#### （5）简写字体属性
    为了缩短代码，也可以在一个属性中指定所有单个字体属性。
    font 属性是以下属性的简写属性：
        font-variant
        font-weight
        font-size/lineheight
        font-family

    如：p.a {
        font: 20px Arial, sansserif;
        }

        p.b {
            font: italic smallcaps bold 12px/30px Georgia, serif;
        }
    fontsize 和 fontfamily 的值是必需的
### 12.链接
#### （1）链接可以使用任何 CSS 属性
    如 color、fontfamily、background 等来设置样式。
#### （3）可以根据链接处于什么状态来设置链接的不同样式。
    四种链接状态分别是：
    a:link  正常的，未访问的链接
    a:visited  用户访问过的链接
    a:hover  用户将鼠标悬停在链接上时
    a:active  链接被点击时

    如果为多个链接状态设置样式，请遵循如下顺序规则：

    a:hover 必须 a:link 和 a:visited 之后
    a:active 必须在 a:hover 之后
#### （4）鼠标状态
    <span style="cursor:auto">auto</span><br>

    auto
    crosshair
    default
    e-resize
    help
    move
    n-resize
    ne-resize
    nw-resize
    pointer
    progress
    s-resize
    se-resize
    sw-resize
    text
    w-resize
    wait
### 13.列表属性
#### (1)简介
    CSS 列表属性使您可以：
        1.为有序列表设置不同的列表项标记
        2.为无序列表设置不同的列表项标记
        3.将图像设置为列表项标记
        4.为列表和列表项添加背景色
#### （2）主要属性
    list-style-type 属性指定列表项标记的类型。circle square upper-roman lower-alpha
    list-style-image 属性将图像指定为列表项标记 url()
    list-style-position  指定列表项标记（项目符号）的位置。outside inside none
#### （3）简写属性
   list-style 属性是一种简写属性。它用于在一条声明中设置所有列表属性：
    实例
    ul {
    list-style: square inside url("sqpurple.gif");
    }
### 14.css表格属性 [花表格](css-code/表格/001-css花表格案例.html)
    border-collapse 表格合并规定是否应折叠表格边框
    border 边框
    text-align 水平对齐
    vertical-align 垂直对齐
    padding    内边距
    
    border	简写属性。在一条声明中设置所有边框属性。
    border-spacing	规定相邻单元格之间的边框的距离。
    caption-side	规定表格标题的位置。
    empty-cells	规定是否在表格中的空白单元格上显示边框和背景。
    table-layout	设置用于表格的布局算法。

    在 <table> 元素周围添加带有 overflow-x:auto 的容器元素（例如 <div>），以实现响应式效果：   
## css中级

### 1.display
     默认值 block 块级元素 或 inline 行内元素 
     none  隐藏或使用元素，visibility:hidden;，也可以隐藏元素。该元素仍将占用与之前相同的空间。元素将被隐藏，但仍会影响布局：
    flex
    inline-block 
    如果设置了 display: inline-block，将保留上下外边距/内边距，而 display: inline 则不会。


#### (1)块级元素（block element）
    块级元素总是从新行开始，并占据可用的全部宽度（尽可能向左和向右伸展）。
    块级元素的一些例子：
    <div>
    <h1> - <h6>
    <p>
    <form>
    <header>
    <footer>
    <section>
#### (2)行内元素（inline element）
    内联元素不从新行开始，仅占用所需的宽度。
    这是段落中的行内 <span> 元素。
    行内元素的一些例子：
    <span>
    <a>
    <img>
### 2.position 定位
#### （1）position 属性规定应用于元素的定位方法的类型。
    有五个不同的位置值：
    static       静态的
    relative     相对于其正常位置进行定位
    fixed        相对于视口定位的  固定定位
    absolute     相对于最近的定位祖先元素进行定位
    sticky       根据用户的滚动位置进行定位 粘性定位

    元素其实是使用 top、bottom、left 和 right 属性定位的。但是，除非首先设置了 position 属性，否则这些属性将不起作用。根据不同的 position 值，它们的工作方式也不同。
 #### （2）z-index
    属性指定元素的堆栈顺序（哪个元素应放置在其他元素的前面或后面）。
    元素可以设置正或负的堆叠顺序：
    具有较高堆叠顺序的元素始终位于具有较低堆叠顺序的元素之前。
    注意：如果两个定位的元素重叠而未指定 z-index，则位于 HTML 代码中最后的元素将显示在顶部。
### 3.溢出
    overflow 属性控制对太大而区域无法容纳的内容的处理方式 是剪裁内容还是添加滚动条

    overflow 属性可设置以下值：
    visible - 默认。溢出没有被剪裁。内容在元素框外渲染
    hidden - 溢出被剪裁，其余内容将不可见
    scroll - 溢出被剪裁，同时添加滚动条以查看其余内容
    auto - 与 scroll 类似，但仅在必要时添加滚动条

    overflow-x 和 overflow-y 属性规定是仅水平还是垂直地（或同时）更改内容的溢出
### 4.浮动
#### （1）CSS float 属性规定元素如何浮动。
    
    float 属性可以设置以下值之一：
    left - 元素浮动到其容器的左侧
    right - 元素浮动在其容器的右侧
    none - 元素不会浮动（将显示在文本中刚出现的位置）。默认值。
    inherit - 元素继承其父级的 float 值
#### （2）CSS clear 属性规定哪些元素可以在清除的元素旁边以及在哪一侧浮动。
    clear 属性可设置以下值之一：
    none - 允许两侧都有浮动元素。默认值
    left - 左侧不允许浮动元素
    right- 右侧不允许浮动元素
    both - 左侧或右侧均不允许浮动元素
    inherit - 元素继承其父级的 clear 值
#### （3）overflow: auto
    如果一个元素比包含它的元素高，并且它是浮动的，它将“溢出”到其容器之外：
    然后我们可以向包含元素添加 overflow: auto;，来解决此问题：
#### （4）清除浮动
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
#### (5)导航菜单示例[示例](css-code/浮动/001-导航栏.html)
### 5.对齐
#### （1）使块元素（例如 <div> ）水平居中，
    margin: auto
    设置元素的宽度将防止其延伸到容器的边缘。（如果未设置 width 属性（或将其设置为 100％），则居中对齐无效。）
    然后，元素将占用指定的宽度，剩余空间将在两个外边距之间平均分配：
    如：
    .center {
        margin: auto;
        width: 50%;
        border: 3px solid green;
        padding: 20px;
    }
#### （2）水平居中对齐文本
    text-align: center;
    这段文本是居中的。
#### （4）居中对齐图像
    将左右外边距设置为 auto，并将其设置为块元素：
    如：img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 40%;
        }
#### (5)左和右对齐 
##### position: absolute; :
    如：
    .right {
        position: absolute;
        right: 0px;
        width: 300px;
        border: 3px solid #73AD21;
        padding: 20px;
    }
    绝对定位的元素将从正常流中删除，并可能出现元素重叠。
##### float
    .right {
        float: right;
        width: 300px;
        border: 3px solid #73AD21;
        padding: 10px;
    }
#### （6）垂直对齐
    使用padding 使上下内边距相等
    .center {
        padding: 70px 0;
        border: 3px solid green;
    }
#### （7）垂直和水平居中文本
##### padding 和 text-align: center;
     .center {
        padding: 70px 0;
        border: 3px solid green;
        text-align: center;
    }
##### 使用其值等于 height 属性值的 line-height 属性
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
##### 使用 position 和 transform 属性
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
##### 同时将 justify-content 和 align-items 属性设置为 center 的容器将使项目在中心（在两个轴上）对齐
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        border: 3px solid green; 
    }
### 6.css 组合器
    CSS 中有四种不同的组合器：
    后代选择器 (空格)    div p	选择 <div> 元素内的所有 <p> 元素。
    子选择器 (>)    div > p	选择其父元素是 <div> 元素的所有 <p> 元素。
    相邻兄弟选择器 (+)  div + p	选择所有紧随 <div> 元素之后的 <p> 元素。
    通用兄弟选择器 (~)  p ~ ul	选择前面有 <p> 元素的每个 <ul> 元素

#### （1）后代选择器 (空格)
    下面的例子选择 <div> 元素内的所有 <p> 元素：
    实例
    div p {
    background-color: yellow;
    }
#### （2）子选择器 (>)
    下面的例子选择属于 <div> 元素子元素的所有 <p> 元素：
    div > p {
    background-color: yellow;
    }
#### （3）相邻兄弟选择器
    匹配所有作为指定元素的相邻同级的元素。
    兄弟（同级）元素必须具有相同的父元素，“相邻”的意思是“紧随其后”。
    下面的例子选择紧随 <div> 元素之后的所有 <p> 元素：
    div + p {
    background-color: yellow;
    }
#### （4）通用兄弟选择器
    匹配属于指定元素的同级元素的所有元素。
    下面的例子选择属于 <div> 元素的同级元素的所有 <p> 元素：
    实例
    div ~ p {
    background-color: yellow;
    }
### 7.伪元素
 [伪类与微元素参考](https://www.w3school.com.cn/css/css_pseudo_classes.asp)
#### 简介
    CSS 伪元素用于设置元素指定部分的样式。
    例如，它可用于：
    设置元素的首字母、首行的样式
    在元素的内容之前或之后插入内容
#### 所有 CSS 伪元素
     选择器	例子	例子描述
    ::after	p::after	在每个 <p> 元素之后插入内容。
    ::before	p::before	在每个 <p> 元素之前插入内容。 content:url()
    ::first-letter	p::first-letter	选择每个 <p> 元素的首字母。 只适用于块级元素。
    ::first-line	p::first-line	选择每个 <p> 元素的首行。只能应用于块级元素。
    ::selection 	p::selection	选择用户选择的元素部分。
### 8.CSS 不透明度 / 透明度
    opacity 属性指定元素的不透明度/透明度。opacity 属性的取值范围为 0.0-1.0。值越低，越透明：

    使用 opacity 属性为元素的背景添加透明度时，子元素都继承相同的透明度。使完全透明的元素内的文本难以阅读
    解决方案：使用RGBA设置背景色， 
    rgba(red, green, blue, alpha。
    alpha 参数是介于 0.0（完全透明）和 1.0（完全不透明）之间的数字。
### 9.导航栏
#### （1）垂直导航栏 [垂直导航栏](css-code/导航栏/001-垂直导航栏.html)
#### (2)水平导航栏 
##### 行内列表项 [水平导航栏](css-code/导航栏/001-水平导航栏.html)
    将 <li> 元素指定为 inline：
##### 行内块列表项
    将 <li> 元素指定为 inline-block：
##### 浮动列表项[水平导航栏](css-code/导航栏/002-水平导航栏（浮动列表项）.html)
    浮动 <li> 元素，并为导航链接规定布局 
[实例](css-code/导航栏/003-水平导航栏（实例）.html)

### 10.下拉菜单[下拉菜单](css-code/下拉菜单/001-下拉菜单.html)
### 11.css表单 [表单](css-code/表单/001-表单外观.html)
#### (1)获得焦点的输入框
    获得焦点的输入框
    默认情况下，某些浏览器在获得焦点（单击）时会在输入框周围添加蓝色轮廓。您可以通过向输入添加 outline: none; 来消除此行为。
    使用 :focus 选择器可以在输入字段获得焦点时为其设置样式：
    实例 1
    input[type=text]:focus {
        background-color: lightblue;
    }
#### (2)带有图标/图像的输入框 [表单](css-code/表单/002-带有图标图像的输入框.html)
    如果希望在输入框中包含图标，请使用 background-image 属性，并将其与 background-position 属性一起设置。还要注意，我们添加了一个较大的左内边距（padding-left）来留出图标的空间：
    实例
    input[type=text] {
        background-color: white;
        background-image: url('searchicon.png');
        background-position: 10px 10px; 
        background-repeat: no-repeat;
        padding-left: 40px;
    }
#### (3)带动画效果的搜索输入框[表单](css-code/表单/003-带动画效果的搜索输入框.html)
    在本例中，我们使用 CSS transition 属性为搜索输入框获得焦点时的宽度变化设置动画。
    实例
    input[type=text] {
        transition: width 0.4s ease-in-out;
    }
    input[type=text]:focus {
        width: 100%;
    }
#### (4)设置文本域的样式
    提示：使用 resize 属性可防止对 textareas 调整大小（禁用右下角的“抓取器”）：
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

#### (5)响应式表单[表单](css-code/表单/004-响应式表单.html)
#### （6）计数器
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
    

## css 高级
### 1.圆角
#### (1)border-radius 接受px
        一个值：一样
        两个值：左上右下   左下右上
        三个值：左上 左下右上  右下
        四个值：顺时针，从左上开始
#### (2)单独设置
    border-top-left-radius
    border-top-right-radius
    border-bottom-left-radius
    border-bottom-right-radius
#### （3）30px-

## css 响应式设计

### 1.什么是响应式网页设计？
    响应式 web 设计会让您的网页在所有设备上看起来都不错。
    响应式 web 设计仅使用 HTML 和 CSS。
    响应式 web 设计并不是程序或 JavaScript。
    使用 CSS 和 HTML 调整大小、隐藏、缩小、放大或移动内容，以使其在任何屏幕上看起来都很好，则称为响应式 Web 设计。
### 2.响应式网页设计 - 视口
#### (1)什么是视口？
    视口（viewport）是用户在网页上的可见区域。
    视口随设备而异，在移动电话上会比在计算机屏幕上更小。
    在平板电脑和手机之前，网页仅设计为用于计算机屏幕，并且网页拥有静态设计和固定大小是很常见的。
    然后，当我们开始使用平板电脑和手机上网时，固定大小的网页太大了，无法适应视口。
    为了解决这个问题，这些设备上的浏览器会按比例缩小整个网页以适合屏幕大小。

    这并不是完美的！勉强是一种快速的修正。

#### (2)设置视口
    HTML5 引入了一种方法，使 Web 设计者可以通过 <meta> 标签来控制视口。
    您应该在所有网页中包含以下 <meta> 视口元素：
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        它为浏览器提供了关于如何控制页面尺寸和缩放比例的指令。
        width=device-width 部分将页面的宽度设置为跟随设备的屏幕宽度（视设备而定）。
        当浏览器首次加载页面时，initial-scale=1.0 部分设置初始缩放级别。

#### (3)把内容调整到视口的大小
    用户习惯在台式机和移动设备上垂直滚动网站，而不是水平滚动！
    还需要遵循的一些附加规则：
    1. 请勿使用较大的固定宽度元素 - 例如，如果图像的宽度大于视口的宽度，则可能导致视口水平滚动。请务必调整此内容以适合视口的宽度。
    2. 不要让内容依赖于特定的视口宽度来呈现好的效果 - 由于以 CSS 像素计的屏幕尺寸和宽度在设备之间变化很大，因此内容不应依赖于特定的视口宽度来呈现良好的效果。
    3. 使用 CSS 媒体查询为小屏幕和大屏幕应用不同的样式 - 为页面元素设置较大的 CSS 绝对宽度将导致该元素对于较小设备上的视口太宽。而是应该考虑使用相对宽度值，例如 width: 100%。另外，要小心使用较大的绝对定位值，这可能会导致元素滑落到小型设备的视口之外。
### 3.响应式网页设计 - 网格视图
#### (1)简介
    响应式网格视图通常有 12 列，总宽度为 100％，并且在调整浏览器窗口大小时会收缩和伸展。
#### (2)构建响应式网格视图
##### 设置border-box
    首先，确保所有 HTML 元素的 box-sizing 属性设置为 border-box。这样可以确保元素的总宽度和高度中包括内边距（填充）和边框。
    请在 CSS 中添加如下代码：
    * {
        box-sizing: border-box;
    }

##### 两列响应式网格
    实例
    .menu {
        width: 25%;
        float: left;
    }
    .main {
        width: 75%;
        float: left;
    }
##### 12列的响应式网格视图。
    首先，我们必须计算一列的百分比：100% / 12 列 = 8.33%。
    然后，我们为 12 列中的每一列创建一个类，即 class="col-" 和一个数字，该数字定义此节应跨越的列数：
[12列响应式网格视图](css-code/响应式设计/001-12列响应式网格视图.html)
    CSS:
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

    所有这些列应向左浮动，并带有 15px 的内边距：
    CSS:
    [class*="col-"] {
    float: left;
    padding: 15px;
    border: 1px solid red;
    }

    每行都应被包围在 <div> 中。行内的列数总应总计为 12：
    HTML:
    <div class="row">
    <div class="col-3">...</div> <!-- 25% -->
    <div class="col-9">...</div> <!-- 75% -->
    </div>

    行内的所有列全部都向左浮动，因此会从页面流中移出，并将放置其他元素，就好像这些列不存在一样。为了防止这种情况，我们会添加清除流的样式：
    CSS:
    .row::after {
        content: "";
        clear: both;
        display: table;
    }
### 4.响应式网页设计 - 媒体查询
#### （1）什么是媒体查询？
    媒体查询是 CSS3 中引入的一种 CSS 技术。
    仅在满足特定条件时，它才会使用 @media 规则来引用 CSS 属性块。

     如：
    如果浏览器窗口是 600px 或更小，则背景颜色为浅蓝色：
    @media only screen and (max-width: 600px) {
        body {
            background-color: lightblue;
        }
    }
#### （2）添加断点
    媒体查询可以帮助您。我们可以添加一个断点，其中设计的某些部分在断点的每一侧会表现得有所不同。
    如：
    使用媒体查询在 768px 处添加断点：
    当屏幕（浏览器窗口）小于 768px 时，每列的宽度应为 100％：
    /* 针对桌面设备： */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}

    @media only screen and (max-width: 768px) {
    /* 针对手机： */
    [class*="col-"] {
            width: 100%;
        }
    }
#### （3）始终移动优先设计
    移动优先（Mobile First）指的是在对台式机或任何其他设备进行设计之前，优先针对移动设备进行设计（这将使页面在较小的设备上显示得更快）。
    这意味着我们必须在 CSS 中做一些改进。

    当宽度小于 768px 时，我们应该修改设计，而不是更改宽度。我们就这样进行了“移动优先”的设计：

    实例
    /* 针对手机： */
    [class*="col-"] {
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
    /* 针对桌面： */
        .col-1 {width: 8.33%;}
        .col-2 {width: 16.66%;}
        .col-3 {width: 25%;}
        .col-4 {width: 33.33%;}
        .col-5 {width: 41.66%;}
        .col-6 {width: 50%;}
        .col-7 {width: 58.33%;}
        .col-8 {width: 66.66%;}
        .col-9 {width: 75%;}
        .col-10 {width: 83.33%;}
        .col-11 {width: 91.66%;}
        .col-12 {width: 100%;}
    }
#### （4）不同设备响应式设计 [不同设备响应式设计](css-code/响应式设计/002-不同设备响应式设计.html)
    为此，我们添加了一个媒体查询（在 600 像素），并为大于 600 像素（但小于 768 像素）的设备添加了一组新类：
    请注意，两组类几乎相同，唯一的区别是名称（col- 和 col-s-）：
    /* 针对手机： */
    [class*="col-"] {
    width: 100%;
    }
    @media only screen and (min-width: 600px) {
    /* 针对平板电脑： */
    .col-s-1 {width: 8.33%;}
    .col-s-2 {width: 16.66%;}
    .col-s-3 {width: 25%;}
    .col-s-4 {width: 33.33%;}
    .col-s-5 {width: 41.66%;}
    .col-s-6 {width: 50%;}
    .col-s-7 {width: 58.33%;}
    .col-s-8 {width: 66.66%;}
    .col-s-9 {width: 75%;}
    .col-s-10 {width: 83.33%;}
    .col-s-11 {width: 91.66%;}
    .col-s-12 {width: 100%;}
    }
    @media only screen and (min-width: 768px) {
    /* 针对桌面： */
    .col-1 {width: 8.33%;}
    .col-2 {width: 16.66%;}
    .col-3 {width: 25%;}
    .col-4 {width: 33.33%;}
    .col-5 {width: 41.66%;}
    .col-6 {width: 50%;}
    .col-7 {width: 58.33%;}
    .col-8 {width: 66.66%;}
    .col-9 {width: 75%;}
    .col-10 {width: 83.33%;}
    .col-11 {width: 91.66%;}
    .col-12 {width: 100%;}
    }
    有两组相同的类似乎很奇怪，但是它给了我们机会用 HTML 来决定在每个断点处的列会发生什么：
    对于台式机：
    第一和第三部分都会跨越 3 列。中间部分将跨越 6 列。
    对于平板电脑：
    第一部分将跨越 3 列，第二部分将跨越 9 列，第三部分将显示在前两部分的下方，并将跨越 12 列：
    <div class="row">
    <div class="col-3 col-s-3">...</div>
    <div class="col-6 col-s-9">...</div>
    <div class="col-3 col-s-12">...</div>
    </div>
#### （5）典型的设备断点
    高度和宽度不同的屏幕和设备不计其数，因此很难为每个设备创建精确的断点。为了简单起见，您可以瞄准这五组：
    实例
    /* 超小型设备（电话，600px 及以下） */
    @media only screen and (max-width: 600px) {...} 

    /* 小型设备（纵向平板电脑和大型手机，600 像素及以上） */
    @media only screen and (min-width: 600px) {...} 

    /* 中型设备（横向平板电脑，768 像素及以上） */
    @media only screen and (min-width: 768px) {...} 

    /* 大型设备（笔记本电脑/台式机，992px 及以上） */
    @media only screen and (min-width: 992px) {...} 

    /* 超大型设备（大型笔记本电脑和台式机，1200px 及以上） */
    @media only screen and (min-width: 1200px) {...}
#### （6）方向
    媒体查询还可用于根据浏览器的方向来更改页面的布局。
    您可以设置一组 CSS 属性，这些属性仅在浏览器窗口的宽度大于其高度时才适用，即所谓的“横屏”方向：
    实例
    如果方向为横向模式（landscape mode），则网页背景为浅蓝色：

    @media only screen and (orientation: landscape) {
    body {
        background-color: lightblue;
    }
    }
#### （7）用媒体查询隐藏元素
    媒体查询的另一种常见用法是在不同屏幕尺寸上对元素进行隐藏：
    实例
    /* 如果屏幕尺寸为 600 像素或更小，请隐藏该元素 */
    @media only screen and (max-width: 600px) {
        div.example {
            display: none;
        }
    }
#### （8）用媒体查询修改字体
    您还可以使用媒体查询来更改不同屏幕尺寸上的元素的字体大小：
    实例
    /* 如果屏幕尺寸为 601px 或更大，请将 <div> 的 font-size 设置为 80px */
    @media only screen and (min-width: 601px) {
        div.example {
            font-size: 80px;
        }
    }

    /* 如果屏幕尺寸为 600px 或更小，请将 <div> 的 font-size 设置为 30px */
    @media only screen and (max-width: 600px) {
        div.example {
            font-size: 30px;
        }
    }
### 5.响应式网页设计 - 图像
#### （1）使用 width 属性
    如果 width 属性设置为百分比，且高度设置为 "auto"，则图像将进行响应来放大或缩小：
    img {
    width: 100%;
    height: auto;
    }
    注意，在上面的例子中，图像可以放大到大于其原始大小。在多数情况下，更好的解决方案是改为使用 max-width 属性。

#### （2）使用 max-width 属性
    如果将 max-width 属性设置为 100％，则图像将按需缩小，但绝不会放大到大于其原始大小：
    img {
        max-width: 100%;
        height: auto;
    }
#### （3）背景图像
背景图像也可以响应调整大小和缩放比例。

    这是我们展示的三种不同方法：
##### 1.将 background-size 属性设置为 "contain"
    如果将 background-size 属性设置为 "contain"，
    则背景图像将缩放，并尝试匹配内容区域。
    不过图像将保持其长宽比（图像宽度与高度之间的比例关系）：
    如:
    div {
        width: 100%;
        height: 400px;
        background-image: url('img_flowers.jpg');
        background-repeat: no-repeat;
        background-size: contain;
        border: 1px solid red;
    }
##### 2.将 background-size 属性设置为 "100% 100%"
    如果将 background-size 属性设置为 "100% 100%"，则背景图像将拉伸以覆盖整个内容区域：
    如：
    div {
        width: 100%;
        height: 400px;
        background-image: url('img_flowers.jpg');
        background-size: 100% 100%;
        border: 1px solid red;
    }
##### 3.background-size 属性设置为 "cover"
    如果 background-size 属性设置为 "cover"，则背景图像将缩放以覆盖整个内容区域。请注意，"cover" 值保持长宽比，且可能会裁剪背景图像的某部分：
    如：
    div {
        width: 100%;
        height: 400px;
        background-image: url('img_flowers.jpg');
        background-size: cover;
        border: 1px solid red;
    }

#### （4）为不同设备准备不同图像
    大幅的图像在大型计算机屏幕上可以完美显示，但在小型设备上就没用了。为什么在不得不缩小图像时又加载大图像呢？为了减少负载或出于任何其他原因，您可以使用媒体查询在不同的设备上显示不同的图像。
    这是一幅大图像和一幅小图像，会在不同的设备上显示：

    如：
    /* 针对小于 400 像素的宽度： */
    body {
        background-image: url('img_smallflower.jpg'); 
    }

    /* 针对 400 像素或更大的宽度： */
    @media only screen and (min-width: 400px) {
        body { 
            background-image: url('img_flowers.jpg'); 
        }
    }

    您可以使用媒体查询 min-device-width 而不是 min-width 来检查设备宽度，而不是浏览器宽度。然后，当您调整浏览器窗口的大小时，图像将不会变化：

    如：
    /* 针对小于 400 像素的设备： */
    body {
        background-image: url('img_smallflower.jpg'); 
    }

    /* 针对 400 像素及更大的设备： */
    @media only screen and (min-device-width: 400px) {
        body { 
            background-image: url('img_flowers.jpg'); 
        }
    }
##### HTML5 <picture> 元素
    HTML5 引入了 <picture> 元素，该元素使您可以定义多幅图像。
    <picture> 元素的作用类似于 <video> 和 <audio> 元素。我们设置了不同的来源，而匹配优先权的第一个来源是正在使用的来源：
    如：

        <picture>
            <source srcset="img_smallflower.jpg" media="(max-width: 400px)">
            <source srcset="img_flowers.jpg">
            <img src="img_flowers.jpg" alt="Flowers">
        </picture>

    srcset 属性是必需的，它定义图像的来源。

    media 属性是可选的，它接受可在 CSS @media 规则 中找到的媒体查询。
    提示：您还应该为不支持 <picture> 元素的浏览器定义 <img> 元素。
### 6.响应式网页设计 - 视频
#### （1）使用 width 属性
    如果 width 属性设置为100％，则视频播放器将响应并放大和缩小：
    如：
    video {
        width: 100%;
        height: auto;
    }
    请注意，在上面的例子中，视频播放器可以放大到大于其原始尺寸。在许多情况下，更好的解决方案是改用 max-width 属性。

#### （2）使用 max-width 属性
    如果将 max-width 属性设置为 100％，则视频播放器将按比例缩小，但绝不会放大到大于其原始尺寸：
    如：
    video {
        max-width: 100%;
        height: auto;
    }
#### 在实例网页中添加视频
    我们希望在实例网页中添加视频。视频将被调整大小以便始终占据所有可用空间：
    如：
    video {
        width: 100%;
        height: auto;
    }
## 网格
[实例](css-code/css网格布局模块/001-grid布局.html)
### 1.网格布局模块
#### （1）网格布局
    CSS 网格布局模块（CSS Grid Layout Module）提供了带有行和列的基于网格的布局系统，它使网页设计变得更加容易，而无需使用浮动和定位。

#### （2）网格元素
    网格布局由一个父元素以及一个或多个子元素组成。
    如：
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
    </div>
#### （3）Display 属性
    当 HTML 元素的 display 属性设置为 grid 或 inline-grid 时，它就会成为网格容器。
    如：
    .grid-container {
        display: grid;
    }
    .grid-container {
        display: inline-grid;
    }
    网格容器的所有直接子元素将自动成为网格项目。
#### （4）网格列（Grid Columns）
    网格项的垂直线被称为列。
#### (5)网隔行（Grid Rows）
    网格项的水平线被称为行。
#### (6)网格间隙（Grid Gaps）
    每列/行之间的间隔称为间隙。
    通过使用以下属性之一来调整间隙大小：
    grid-column-gap
    grid-row-gap
    grid-gap

    grid-column-gap 属性设置列之间的间隙：
    .grid-container {
        display: grid;
        grid-column-gap: 50px;
    }

    grid-row-gap 属性设置行之间的间隙：

    .grid-container {
        display: grid;
        grid-row-gap: 50px;
    }

    grid-gap 属性是 grid-row-gap 和 grid-column-gap 属性的简写属性：
    .grid-container {
        display: grid;
        grid-gap: 50px 100px;
    }

    grid-gap 属性还可用于将行间隙和列间隙设置为一个值：
    .grid-container {
        display: grid;
        grid-gap: 50px;
    }
#### (7)网格行（Grid Lines）
    列之间的线称为列线（column lines）。
    行之间的线称为行线（row lines）。
    当把网格项目放在网格容器中时，请引用行号：
    把网格项目放在列线 1，并在列线 3 结束它：
    .item1 {
        grid-column-start: 1;
        grid-column-end: 3;
    }

    把网格项目放在行线 1，并在行线 3 结束它：
    .item1 {
        grid-row-start: 1;
        grid-row-end: 3;
    }

