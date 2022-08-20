# html简介
    本篇笔记是本人学习html的见证
    html是一种超文本标记语言，是web开发的基础语言，是web开发的基础语言。
    本笔记是根据 http://www.w3school.com.cn  所做。
## html基础
 ### 1.标题

    <html>	
    定义 HTML 文档。
    <body>
    定义文档的主体。
    <h1> to <h6>	
    定义 HTML 标题
    <hr>	
    定义水平线。
    <!--...-->	
    定义注释。

### 2.段落

    <p>	
    定义段落。
    <br />	
    插入单个折行（换行）。
### 3.样式 
    <style>
    用于改变 HTML 元素的样式。
### 4.格式化
#### （1）文本格式化标签  [见4.格式化 001-文本格式化标签.html](html-code/格式化/001-文本格式化.html)

    <b>	定义粗体文本。
    <big>	定义大号字。
    <em>	定义着重文字。
    <i>	定义斜体字。
    <small>	定义小号字。
    <strong>	定义加重语气。
    <sub>	定义下标字。
    <sup>	定义上标字。
    <ins>	定义插入字。
    <del>	定义删除字。

#### （2）预格式化标签[见4.格式化 002-预格式化标签.html](html-code/格式化/002-预格式化文本.html)

    <pre>	定义预格式化文本。


#### （3）计算机输出标签[见4.格式化 003-计算机输出标签.html](html-code/格式化/003-计算机输出标签.html)

    <code>	
    定义计算机代码。
    <kbd>	
    定义键盘码。
    <samp>	
    定义计算机代码样本。
    <tt>	
    定义打字机代码。
    <var>	
    定义变量。
    <pre>	
    定义预格式文本。

#### （4）引用和术语定义[见格式化 004-引用和术语定义.html](html-code/格式化/004-引用和术语定义.html)
    
    <abbr>	
    定义缩写。
    <acronym>	
    定义首字母缩写。
    <address>	
    定义地址。此元素通常以斜体显示。大多数浏览器会在此元素前后添加折行。
    <bdo>	
    定义文字方向。
    <blockquote>	
    定义长的引用。
    <q>	
    定义短的引用语。
    <cite>	
    定义引用、引证。HTML <cite> 元素定义著作的标题。
    浏览器通常会以斜体显示 <cite> 元素。
    <dfn>	
    定义一个定义项目。缩写  ？？？？？？？

### 5.css引入[见css引入 001-css引入.html](html-code/css引入/001-css引入.html)

     三种方式插入样式表：
#### （1）外联样式表：
     当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，你就可以通过更改一个文件来改变整个站点的外观。
    <link>	定义资源引用。

    <link rel="stylesheet" type="text/css" href="style.css">

#### （2）内部样式表：
    当单个文件需要特别样式时，就可以使用内部样式表。你可以在 head 部分通过 <style> 标签定义内部样式表。

    <head>
    <style type="text/css">
        body {
            background-color: red
            }
        p {
            margin-left: 20px
            }
    </style>
    </head>
    
#### （3）内联样式
    当特殊的样式需要应用到个别元素时，就可以使用内联样式。

    <p style="color: red; margin-left: 20px">
        This is a paragraph
    </p>

#### （4）优先级：
    内联样式 > 内部样式表 > 外部样式表 

### 6.链接 [见链接 001-链接.html](html-code/链接/001-链接.html)

#### （1） a标签定义链接语法。
     <a href="url" targer="_self">链接文本</a>
#### (2) "链接文本" 不必一定是文本。图片或其他 HTML 元素都可以成为链接。如下:
    <a href="url">
    <img src="图片地址" />
    </a>

#### （3）重要属性： 
    href    值    链接的目标地址。
    target  值    链接的目标窗口。
                 _blank（新窗口） 
                 _self（当前窗口）。
                 _parent 
                 _top（多用于跳出框架）  framename
    id      值    定义链接的 id。
    name    值    定义链接的 name。

####  （4）锚点两种方式：  
    第一种方式，使用id：
        <a href="#C1">查看 Chapter 4。</a>
        <h2 id="C1">Chapter 1</h2>

    第二种方式，使用name：
        <a href="#C4">查看 Chapter 4。</a>
        <h2><a name="C4">Chapter 4</a></h2>
        
### 7.图像 [见图像 001-图像.html](html-code/图像/001-图像.html)

#### (1)img定义图像的语法是：
    <img src="url" />
#### (2)重要属性：
    src    值    图像的地址。
    alt    值    图像的替代文本。
    width  值    图像的宽度。
    height 值    图像的高度。
    usemap 值    图像的使用的地图。填<map>标签name属性值或id值
    ismap  值    图像是否是一个地图。
    align  值    图像的对齐方式。 left, right,center, 

#### （3）map 将图像转化为图像映射：
    意义：定义一个客户端图像映射。图像映射（image-map）指带有可点击区域的一幅图像。
    <img src="url" usemap="#mapname" />
    <map name="mapname">
        <area shape="rect" coords="x1,y1,x2,y2" href="url" 
        <area shape="circle"coords="x1,x2,r" href="url"
        <area shape = "poly" coords = "x1,y1,x2,y2,.....,xn,yn" href="url"/>
    </map>

    shape="rect"：coords="x1,y1,x2,y2"为矩形的左上角和右下角坐标。
    shape="circle"coords="x1,x2,r"为圆形的圆心坐标,半径
    shape = "poly" coords = "x1,y1,x2,y2,.....,xn,yn"为多边形的n个坐标点，最后一个点的坐标应该与第一个相同，若不同浏览器会自动补全。
     
    map标签     定义图像地图。
    area标签    定义地图的区域。 必须在map标签中。
        shape  值      图像的形状。rect矩 circle圆 poly多边形
        coords 值      图像的坐标。
        href   值      图像的链接。
### 8.表格 [见表格 001-表格.html](html-code/表格/001-表格.html)
#### (1)table定义表格的语法是：
    <table>
        <tr>
            <td>100</td>
            <td>200</td>
            <td>300</td>
        </tr>
        <tr>
            <td>400</td>
            <td>500</td>
            <td>600</td>
        </tr>
    </table>    
       
#### (2)主要标签
    <table>	定义表格
    <caption>	定义表格标题。
    <th>	定义表格的表头。
    <tr>	定义表格的行。
    <td>	定义表格单元。
    <thead>	定义表格的页眉。
    <tbody>	定义表格的主体。
    <tfoot>	定义表格的页脚。
    <col>	定义用于表格列的属性。
    <colgroup>	定义表格列的组。

#### （3）主要属性：
    border 值    表格的边框。
    cellspacing 值    表格的单元格间距。
    cellpadding 值    表格的单元格内距。
    rules 值    表格的规则。
    summary 值    表格的摘要。
    width 值    表格的宽度。
    height 值    表格的高度。
    align 值    表格的对齐方式。
    bgcolor 值    表格的背景颜色。
    background 值    表格的背景图像。
    frame 值    表格的框架。 框架的值有：void,above,below,hsides,lhs,rhs,vsides,box,border
### 9.列表 [见列表 001-列表.html](html-code/列表/001-列表.html)
 列表有三种类型：无序列表 有序列表 定义列表。 
#### (1)无序列表：
无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。
无序列表始于 ul 标签。每个列表项始于 li。

    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
    重要属性:
     type 值有：circle,disc,square

#### (2)有序列表：
有序列表也是一列项目，列表项目使用数字进行标记。

有序列表始于 ol>标签。每个列表项始于 li 标签。

    <ol>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ol>
    重要属性:
     type 值   1,a,A,i,I
     start 值    列表的起始值。
#### (3)定义列表：

    <dl>
        <dt>item1</dt>
        <dd>item1</dd>
        <dt>item2</dt>
        <dd>item2</dd>
        <dt>item3</dt>
        <dd>item3</dd>
    </dl>     
#### (4)主要标签
    <ol>	定义有序列表。
    <ul>	定义无序列表。
    <li>	定义列表项。
    <dl>	定义定义列表。
    <dt>	定义定义项目。
    <dd>	定义定义的描述。
    
### 10.块
    <div>	定义文档中的分区或节（division/section）。
    <span>	定义 span，用来组合文档中的行内元素。
### 11.内联框架 [见内联框架 001-内联框架.html](html-code/内联框架/001-内联框架.html)
    iframe 用于在网页内显示网页。
####   主要属性
    src 值    文档的 URL。
    width 值    宽度。
    height 值    高度。
    target 值    链接的目标。 
    frameborder 值    框架边框。    

        
    scrolling 值    滚动条。 auto 或者 yes 时显示滚动条。
    marginheight 值    页边距。
    marginwidth 值    页边距。
    name 值    框架的名称。
    align 值    对齐方式。
    hspace 值    水平边距。
    vspace 值    垂直边距。   
### 12.javascript [见javascript 001-javascript.html](html-code/javascript/001-javascript.html)
#### (1)介绍
    <script> 标签  定义客户端脚本（JavaScript）。
    <script> 元素即可包含脚本语句，也可通过 src 属性指向外部脚本文件。
    JavaScript 的常见用途是图像处理、表单验证和内容的动态更改。
    选取 HTML 元素，JavaScript 最常用 document.getElementById()  方法。
#### (2)主要标签
        <script>	定义客户端脚本。
        <noscript>	为不支持客户端脚本的用户定义替代内容。
### 13.文件路径
#### (1)相对文件路径
    <img src="picture.jpg">	
    picture.jpg 位于与当前网页相同的文件夹
    <img src="images/picture.jpg">	
    picture.jpg 位于当前文件夹的 images 文件夹中
    <img src="/images/picture.jpg">	
    picture.jpg 当前站点根目录的 images 文件夹中
    <img src="../picture.jpg">	
    picture.jpg 位于当前文件夹的上一级文件夹中

#### (2)绝对文件路径
    <img src="https://www.w3school.com.cn/images/picture.jpg" >
    绝对文件路径是指向一个因特网文件的完整 URL

### 14.头部[见头部 001-头部.html](html-code/头部/001-头部.html)
    <head>	
    定义文档的头部。
    <title>	
        定义文档的标题。
    <base>   
        定义文档的基本 URL。
        href 属性：定义文档的基本 URL。
        target 属性：定义文档的基本 URL。
    <meta>	
        定义文档的元数据。
        charset		规定 HTML 文档的字符编码。
        content 定义与 http-equiv 或 name 属性相关的元信息。
        http-equiv	
            把 content 属性关联到 HTTP 头部。
            content-security-policy
            content-type 
            default-style
            refresh
        name	
            把 content 属性关联到一个名称。
            application-name
            author
            description
            generator
            keywords   定义了一组关键字
            viewport
        scheme	
            定义用于翻译 content 属性值的格式。
            some_text	
    <link>	定义文档的链接。
    <style>	定义文档的样式。
    <body>	定义文档的主体。
    <script>	定义客户端脚本。
    <html>	定义文档的根元素。           

### 15.布局[见布局 001-布局.html](html-code/布局/001-布局.html)
#### (1)HTML5 语义元素
    header	定义文档或节的页眉
    nav	定义导航链接的容器
    section	定义文档中的节
    article	定义独立的自包含文章
    aside	定义内容之外的内容（比如侧栏）
    footer	定义文档或节的页脚
    details	定义额外的细节
    summary	定义 details 元素的标题
    figure	定义图片或表格的容器
    figcaption	定义 figure 元素的标题
    main	定义文档的主要内容
#### (2) 元素位置图片    
![HTML5 语义元素](https://www.w3school.com.cn/i/ct_sem_elements.png)

### 16.实体符号
   	    空格	        &nbsp;
    <	小于号	        &lt;	
    >	大于号	        &gt;	
    &	和号	        &amp;	
    "	引号	        &quot;	
    '	撇号 	        &apos; 	
    ￠	分（cent）	   &cent;	
    £	镑（pound） 	&pound;	
    ¥	元（yen）	    &yen;	
    €	欧元（euro）	&euro;	
    §	小节	        &sect;	
    ©	版权（copyright）	&copy;	
    ®	注册商标	    &reg;	
    ™	商标	        &trade;	
    ×	乘号	        &times;	
    ÷	除号	        &divide;	

### 17.框架 [见框架 001-框架.html](html-code/框架/001-框架.html)
#### (1)frame语法
    垂直框架：
    <frameset cols="25%,75%">
        <frame src="frame_a.htm">
        <frame src="frame_b.htm">
    </frameset>
    水平框架：
    <frameset rows="25%,50%,25%">
        <frame src="/example/html/frame_a.html">
        <frame src="/example/html/frame_b.html">
        <frame src="/example/html/frame_c.html">
    </frameset>

#### (2)主要标签
    noframes    为不支持框架的浏览器添加 <noframes> 标签。
    frame	    定义一个框架。
         属性   noresize="noresize"。假如一个框架有可见边框，用户可以拖动边框来改变它的大小。为了避免这种情况发生，
    frameset	定义一个框架集。
    注意事项:不能将 <body></body> 标签与 <frameset></frameset> 标签同时使用！不过，假如你添加包含一段文本的 <noframes> 标签，就必须将这段文字嵌套于 <body></body> 标签内。（在下面的第一个实例中，可以查看它是如何实现的。）

### 18.html版本
    HTML	1991
    HTML+	1993
    HTML 2.0	1995
    HTML 3.2	1997
    HTML 4.01	1999
    XHTML 1.0	2000
    HTML5	2012
    XHTML5	2013       

## html进阶
### 1.表单 
[见表单 001-表单.html](html-code/表单/001-表单.html)[见表单 002-表单元素.html](html-code/表单/002-表单元素.html)
#### （1）主要标签
    <form>	定义一个表单。
        <input>	定义一个输入框。
        <fieldset>    定义一个域集。
            <legend>	定义 fieldset 元素的标题。
        <datalist>
            <option>	定义一个选项。
        <keygen>
        <output>
    <textarea>	定义一个文本区。
    <select>	定义一个下拉列表。
        <option>	定义一个下拉列表的选项。
    <button>	定义一个按钮。
    <label for=#id>  	定义一个标签，其中包含一个或多个 id 属性。

#### （2）form主要属性
    accept-charset	规定在被提交表单中使用的字符集（默认：页面字符集）。
    action	规定向何处提交表单的地址（URL）（提交页面）。
    autocomplete	规定浏览器应该自动完成表单（默认：开启）。
    enctype	规定被提交数据的编码（默认：url-encoded）。
    method  值    get   post
    name	规定识别表单的名称（对于 DOM 使用：document.forms.name）。
    novalidate	规定浏览器不验证表单。
    target  值   
        _blank 新窗口 _self 当前窗口  _parent 父框架 _top body中 frameName iframe中
#### （3）input属性
##### 主要属性  
    type	规定输入框的类型。
    list    定义下拉列表输入，必须引用 <datalist> 标签的id属性 
[见表单 005-list_datalist.html](html-code/表单/005-list_datalist.html)

    autofocus	规定输入框自动获得焦点。
    autocomplete	规定浏览器应该自动完成表单（默认：开启）。
   formaction	用以向 action URL 发送表单数据的地址（URL）。覆盖form action属性。
 [见表单 004-两个提交按钮.html](html-code/表单/004-两个提交按钮.html) 

     placeholder	规定输入框的默认提示信息。
     multiple	    规定输入框可以选择多个值。   
     min            规定输入框的最小值。
     max            规定输入框的最大值。 
     formtarget    规定向何处提交表单的地址（URL）。 覆盖form target属性。
        _blank 新窗口 _self 当前窗口  _parent 父框架 _top body中 frameName iframe中
    formnovalidate	规定浏览器不验证表单。覆盖form novalidate属性。
    formmethod	用以向 action URL 发送表单数据（form-data）的 HTTP 方法。覆盖form method属性。
    formenctype	用以向 action URL 发送表单数据的编码方式（仅针对 method="post" 的表单）。覆盖form enctype属性。
    
##### 输入限制属性
    disabled	规定输入字段应该被禁用。
    max	规定输入字段的最大值。
    maxlength	规定输入字段的最大字符数。
    min	规定输入字段的最小值。
    pattern	规定通过其检查输入值的正则表达式。
    readonly	规定输入字段为只读（无法修改）。
    required	规定输入字段是必需的（必需填写）。
    size	规定输入字段的宽度（以字符计）。
    step	规定输入字段的合法数字间隔。
    value	规定输入字段的默认值。
##### 其他属性
      form	规定input元素所属的form元素的id属性。


#### （4） 输入类型（type值） [见表单 003-输入类型（type值）.html](html-code/表单/003-输入类型（type值）.html)
##### 主要值：
    text    定义一个单行文本输入。
    password	定义一个密码输入。
    submit	定义一个提交按钮。
    radio	定义一个单选框。
    checkbox	定义一个复选框。
    file	定义一个文件输入。
    hidden	定义一个隐藏输入。
    image	定义一个图像输入。
    button	定义一个按钮。
    reset	定义一个重置按钮。
    
    
 ##### HTML5 增加了多个新的输入类型：
    color   定义一个颜色输入。
    date   定义一个日期输入。
    datetime  定义一个日期时间输入。
    datetime-local   定义一个日期时间输入。
    email  定义一个电子邮件输入。
    month 定义一个月份输入。 
    number  定义一个数字输入。
    range   定义一个范围输入。
    search  定义一个搜索输入。
    tel 定义一个电话输入。
    time    定义一个时间输入。
    url 定义一个网址输入。
    week    定义一个星期输入。

    
#### （5）txtarea主要属性  
    cols="cols"。定义文本区的列数。
    rows="rows"。定义文本区的行数。
    disabled="disabled"。假如文本区被禁用，则该属性被设置为 disabled。

### 2.图形
### 3.媒体 
#### （1）主要媒体形式
##### 视频格式
    AVI	.avi	
    AVI (Audio Video Interleave) 格式是由微软开发的。所有运行 Windows 的计算机都支持 AVI 格式。它是因特网上很常见的格式，但非 Windows 计算机并不总是能够播放。

    WMV	.wmv	
    Windows Media 格式是由微软开发的。Windows Media 在因特网上很常见，但是如果未安装额外的（免费）组件，就无法播放 Windows Media 电影。一些后期的 Windows Media 电影在所有非 Windows 计算机上都无法播放，因为没有合适的播放器。

    MPEG .mpg.mpeg 
    MPEG (Moving Pictures Expert Group) 格式是因特网上最流行的格式。它是跨平台的，得到了所有最流行的浏览器的支持。

    QuickTime	.mov	

    QuickTime 格式是由苹果公司开发的。QuickTime 是因特网上常见的格式，但是 QuickTime 电影不能在没有安装额外的（免费）组件的 Windows 计算机上播放。

    RealVideo    .rm.ram	
    RealVideo 格式是由 Real Media 针对因特网开发的。该格式允许低带宽条件下（在线视频、网络电视）的视频流。由于是低带宽优先的，质量常会降低。

    Flash .swf .flv
    Flash (Shockwave) 格式是由 Macromedia 开发的。Shockwave 格式需要额外的组件来播放。但是该组件会预装到 Firefox 或 IE 之类的浏览器上。

    Mpeg-4	.mp4	
    Mpeg-4 (with H.264 video compression) 是一种针对因特网的新格式。事实上，YouTube 推荐使用 MP4。YouTube 接收多种格式，然后全部转换为 .flv 或 .mp4 以供分发。越来越多的视频发布者转到 MP4，将其作为 Flash 播放器和 HTML5 的因特网共享格式。

##### 声音格式
    MIDI	.mid.midi

    MIDI (Musical Instrument Digital Interface) 是一种针对电子音乐设备（比如合成器和声卡）的格式。MIDI 文件不含有声音，但包含可被电子产品（比如声卡）播放的数字音乐指令。
    因为 MIDI 格式仅包含指令，所以 MIDI 文件极其小巧。上面的例子只有 23k 的大小，但却能播放将近 5 分钟。MIDI 得到了广泛的平台上的大量软件的支持。大多数流行的网络浏览器都支持 MIDI。

    RealAudio	.rm .ram

    RealAudio 格式是由 Real Media 针对因特网开发的。该格式也支持视频。该格式允许低带宽条件下的音频流（在线音乐、网络音乐）。由于是低带宽优先的，质量常会降低。

    Wave	.wav	
    Wave (waveform) 格式是由 IBM 和微软开发的。所有运行 Windows 的计算机和所有网络浏览器（除了 Google Chrome）都支持它。

    WMA	.wma	
    WMA 格式 (Windows Media Audio)，质量优于 MP3，兼容大多数播放器，除了 iPod。WMA 文件可作为连续的数据流来传输，这使它对于网络电台或在线音乐很实用。

    MP3	 .mp3.mpga
    MP3 文件实际上是 MPEG 文件的声音部分。MPEG 格式最初是由运动图像专家组开发的。MP3 是其中最受欢迎的针对音乐的声音格式。期待未来的软件系统都支持它。
#### （2）对象 [见媒体 001-对象.html](html-code/媒体/001-对象.html)
     object 标签是一种特殊的 HTML 标签，定义 HTML 文档中的嵌入式对象。
     embed 标签是一种特殊的 HTML 标签，定义了 HTML 文档中的嵌入式对象。
#### （3）音频 [见媒体 002-音频.html](html-code/媒体/002-音频.html)
     audio 标签是一种特殊的 HTML 标签，定义 HTML 文档中的音频。
     embed 标签是一种特殊的 HTML 标签，定义了 HTML 文档中的音频。
##### 定义音频音频的语句
    1.使用 embed 元素
    <embed height="100" width="300" src="https://www.w3school.com.cn/i/horse.mp3" />
    2.使用 object 元素
    <object height="100" width="300" data="https://www.w3school.com.cn/i/horse.mp3"></object>
    3.使用 audio 元素
    <audio height="100" width="300" src="https://www.w3school.com.cn/i/horse.mp3"></audio>  //不起作用        
     <audio controls="controls">
        <source src="https://www.w3school.com.cn/i/horse.mp3" type="audio/mp3" />
        <source src="song.ogg" type="audio/ogg" />   //两种格式选一
      Your browser does not support this audio format.
    </audio> -->
     4.使用雅虎媒体播放器 
    <a href="https://www.w3school.com.cn/i/horse.mp3">Play Sound</a>
    <a href="song1.mp3">Play Song 1</a>
    <a href="song2.mp3">Play Song 2</a>
    <script type="text/javascript" src="http://mediaplayer.yahoo.com/js"></script>
#### （4）视频 [见媒体 003-视频.html](html-code/媒体/003-视频.html)
##### 定义视频的语句
    1.使用 embed 标签
        embed 标签的作用是在 HTML 页面中嵌入多媒体元素。
        下面的 HTML 代码显示嵌入网页的 Flash 视频：
        <embed src="movie.swf" height="200" width="200"/>
    2.使用 object> 标签
        object标签的作用是在 HTML 页面中嵌入多媒体元素。
        下面的 HTML 片段显示嵌入网页的一段 Flash 视频：
        <object data="movie.swf" height="200" width="200"/>
    3.使用 video 标签
        video 是 HTML 5 中的新标签。
        video 标签的作用是在 HTML 页面中嵌入视频元素。
        以下 HTML 片段会显示一段嵌入网页的 ogg、mp4 或 webm 格式的视频：
        <video width="320" height="240" controls="controls">
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          <source src="movie.webm" type="video/webm" />
        Your browser does not support the video tag.
        </video>
        您必须把视频转换为很多不同的格式。
        video 元素在老式浏览器中无效。
        video 元素无法通过 HTML 4 和 XHTML 验证。
    4.最好的 HTML 解决方法
        HTML 5 + object + embed
        <video width="320" height="240" controls="controls">
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          <source src="movie.webm" type="video/webm" />
          <object data="movie.mp4" width="320" height="240">
            <embed src="movie.swf" width="320" height="240" />
          </object>
        </video>
        上例中使用了 4 中不同的视频格式。HTML 5 video 元素会尝试播放以 mp4、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 embed 元素。
##### video主要属性
      controls      控件
      loop          循环播放
      autoplay     自动播放
      mute           静音

      
    


