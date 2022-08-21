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

#### (3) 内边距和元素宽度 [ 见内边距 001-元素宽度 ](css-code/内边距/001-元素宽度)

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
#### (4) height 和 width 
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

