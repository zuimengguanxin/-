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

######（4）优先级：
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
        
##### 图像 [见图像 001-图像.html](html/图像/001-图像.html)

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

    git add 

6.提交       

    git commit

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

12.切换分支       

    git checkout A  

 13.查看分支

    git branch   A  

14.创建分支并切换到该分支 

    git checkout -b master 

 15.删除分支

    git branch -d   

16.强制删除分支

    git branch -D  

 17.合并分支

    git merge bugfig 
        将分支合并到master       
    git rebase bugfig

18.移动HEAD指向       

    git branch -f master HEAD~3
    









