# biji

## 介绍
学习前端的笔记
### 简介
    本篇笔记是本人学习前端的见证，主要是学习前端的基础知识。
    包括：html,css,js git 等。如后期需要酌情添加
    
### 一、html
 html是一种超文本标记语言，是web开发的基础语言，是web开发的基础语言。
 #### html标签
 ##### 1.标题

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

##### 2.段落

    <p>	
    定义段落。
    <br />	
    插入单个折行（换行）。
##### 3.样式 
    <style>
    用于改变 HTML 元素的样式。
##### 4.格式化
###### （1）文本格式化标签  [见4.格式化 001-文本格式化标签.html](html/格式化/001-文本格式化.html)

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

###### （2）预格式化标签[见4.格式化 002-预格式化标签.html](html/格式化/002-预格式化.html)

    <pre>	定义预格式化文本。


###### （3）计算机输出标签[见4.格式化 003-计算机输出标签.html](html/格式化/003-计算机输出标签.html)

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

###### （4）引用和术语定义[见格式化 004-引用和术语定义.html](html/格式化/004-引用和术语定义.html)
    
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

##### 5.css引入[见css引入 001-css引入.html](html/css引入/001-css引入.html)

     三种方式插入样式表：
###### （1）外联样式表：
     当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，你就可以通过更改一个文件来改变整个站点的外观。
    <link>	定义资源引用。

    <link rel="stylesheet" type="text/css" href="style.css">

###### （2）内部样式表：
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
    
###### （3）内联样式
    当特殊的样式需要应用到个别元素时，就可以使用内联样式。

    <p style="color: red; margin-left: 20px">
        This is a paragraph
    </p>

###### （4）优先级：
    内联样式 > 内部样式表 > 外部样式表 

##### 6.链接 [见链接 001-链接.html](html/链接/001-链接.html)

###### （1） a标签定义链接语法。
     <a href="url" targer="_self">链接文本</a>
###### (2) "链接文本" 不必一定是文本。图片或其他 HTML 元素都可以成为链接。如下:
    <a href="url">
    <img src="图片地址" />
    </a>

###### （3）重要属性： 
    href    值    链接的目标地址。
    target  值    链接的目标窗口。
                 _blank（新窗口） 
                 _self（当前窗口）。
                 _parent 
                 _top（多用于跳出框架）  framename
    id      值    定义链接的 id。
    name    值    定义链接的 name。

######  （4）锚点两种方式：  
    第一种方式，使用id：
        <a href="#C1">查看 Chapter 4。</a>
        <h2 id="C1">Chapter 1</h2>

    第二种方式，使用name：
        <a href="#C4">查看 Chapter 4。</a>
        <h2><a name="C4">Chapter 4</a></h2>
        
##### 7.图像 [见图像 001-图像.html](html/图像/001-图像.html)

###### (1)img定义图像的语法是：
    <img src="url" />
###### (2)重要属性：
    src    值    图像的地址。
    alt    值    图像的替代文本。
    width  值    图像的宽度。
    height 值    图像的高度。
    usemap 值    图像的使用的地图。填<map>标签name属性值或id值
    ismap  值    图像是否是一个地图。
    align  值    图像的对齐方式。 left, right,center, 

###### （3）map 将图像转化为图像映射：
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
##### 8.表格 [见表格 001-表格.html](html/表格/001-表格.html)
###### (1)table定义表格的语法是：
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
       
###### (2)主要标签
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

###### （3）主要属性：
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
##### 9.列表 [见列表 001-列表.html](html/列表/001-列表.html)
 列表有三种类型：无序列表 有序列表 定义列表。 
###### (1)无序列表：
无序列表是一个项目的列表，此列项目使用粗体圆点（典型的小黑圆圈）进行标记。
无序列表始于 ul 标签。每个列表项始于 li。

    <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
    </ul>
    重要属性:
     type 值有：circle,disc,square

###### (2)有序列表：
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
###### (3)定义列表：

    <dl>
        <dt>item1</dt>
        <dd>item1</dd>
        <dt>item2</dt>
        <dd>item2</dd>
        <dt>item3</dt>
        <dd>item3</dd>
    </dl>     
###### (4)主要标签
    <ol>	定义有序列表。
    <ul>	定义无序列表。
    <li>	定义列表项。
    <dl>	定义定义列表。
    <dt>	定义定义项目。
    <dd>	定义定义的描述。
    
##### 10.块
    <div>	定义文档中的分区或节（division/section）。
    <span>	定义 span，用来组合文档中的行内元素。
##### 11.内联框架 [见内联框架 001-内联框架.html](html/内联框架/001-内联框架.html)
    iframe 用于在网页内显示网页。
######   主要属性
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
##### 12.javascript [见javascript 001-javascript.html](html/javascript/001-javascript.html)
###### (1)介绍
    <script> 标签  定义客户端脚本（JavaScript）。
    <script> 元素即可包含脚本语句，也可通过 src 属性指向外部脚本文件。
    JavaScript 的常见用途是图像处理、表单验证和内容的动态更改。
    选取 HTML 元素，JavaScript 最常用 document.getElementById()  方法。
###### (2)主要标签
        <script>	定义客户端脚本。
        <noscript>	为不支持客户端脚本的用户定义替代内容。
##### 13.文件路径
###### (1)相对文件路径
    <img src="picture.jpg">	
    picture.jpg 位于与当前网页相同的文件夹
    <img src="images/picture.jpg">	
    picture.jpg 位于当前文件夹的 images 文件夹中
    <img src="/images/picture.jpg">	
    picture.jpg 当前站点根目录的 images 文件夹中
    <img src="../picture.jpg">	
    picture.jpg 位于当前文件夹的上一级文件夹中

###### (2)绝对文件路径
    <img src="https://www.w3school.com.cn/images/picture.jpg" >
    绝对文件路径是指向一个因特网文件的完整 URL

##### 14.头部[见头部 001-头部.html](html/头部/001-头部.html)
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

##### 15.布局[见布局 001-布局.html](html/布局/001-布局.html)
###### (1)HTML5 语义元素
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
###### (2) 元素位置图片    
![HTML5 语义元素](https://www.w3school.com.cn/i/ct_sem_elements.png)

##### 16.实体符号
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

##### 17.框架 [见框架 001-框架.html](html/框架/001-框架.html)
###### (1)frame语法
    <frameset cols="25%,75%">
        <frame src="frame_a.htm">
        <frame src="frame_b.htm">
    </frameset>
###### (2)主要标签
    noframes    定义一个没有框架的文档
    frame	    定义一个框架。
    frameset	定义一个框架集。
    注意事项:不能将 <body></body> 标签与 <frameset></frameset> 标签同时使用！不过，假如你添加包含一段文本的 <noframes> 标签，就必须将这段文字嵌套于 <body></body> 标签内。（在下面的第一个实例中，可以查看它是如何实现的。）



    










#### html标签的属性


























下面列出了适用于大多数 HTML 元素的属性：
    1.class：用于定义元素的类。
    2.id：用于定义元素的id。
    3.style：用于定义元素的样式。
    4.title：用于定义元素的标题。








### git
#### git流程
#### git命令
1.设置邮箱

    git config --global user.email "you@example.com"
    
2.设置名字

    git config --global user.name "Your Name"

3.命令把这个目录变成Git可以管理的仓库

    git init

4.克隆

    git clone 

5.添加进待提交  

    git add .  

6.提交       

    git commit -m "message"

7.根据.get配置推送到服务器 

    git push

8.从服务器拉取其他人的提交

    git pull

9.查看提交记录    

    git log

10.查看状态，是否已全部提交

    git status 

11.查看差异     

    git diff

 13.查看分支

    git branch   查看目前的分支

 创建A分支   

     git branch A  

12.切换分支       

    git checkout A  

14.创建分支并切换到该分支 

    git checkout -b master 

 15.删除本地分支

    git branch -d   

16.强制删除分支

    git branch -D  

 17.合并Bugfig分支
    （1）切换到A分支
         git checkout A
     (2) 合并
    git merge bugfig   
    git rebase bugfig
    （3）提交
    git commit -m "merge bugfig"

18.移动HEAD指向       

    git branch -f master HEAD~3

19.
修复BUG分支
   (1) 创建BUG分支
    git branch bugfig
    (2) 切换到BUG分支
    git checkout bugfig
    (3) 将分支合并到master
    git merge bugfig
    (4) 切换到master 
    git checkout master
    (5) 删除分支
    git branch -d bugfig













