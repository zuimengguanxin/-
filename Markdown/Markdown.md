# Makdown教程
[TOC] 
## 一、概述
    Makdown是一个文本标记语言，以md后缀名结尾，和vscold一起用来做笔记。
    为了良好的记笔记体验, 你需要安装和 Markdown 相关的 VS Code 插件:
    可以下载这个 已经有人整理好的插件Markdown-Notes-Pack
[Markdown-Notes-Pack插件教程](https://zhuanlan.zhihu.com/p/366596107)
    它包括了下面这些插件:

    Markdown Preview Enhanced
    Markdown All in One
    Better Markdown & Latex Shortcuts
    Latex Sympy Calculator
    Python Brackets
    Orangex4 Snippets
    Paste Image
    Vscode Icons
## 二、技巧
#### 1.修改预览窗口背景 
    默认为白色，预览窗口背景Markdown Preview Enhanced 插件生成的
    设置界面搜索 Preview theme，找到相关设置
#### 2.保存为html
    右键 选第一个HTML(offline),第二个为远程
#### 3.自动保存html
    将以下代码，写在文档中
    ---
    export_on_save:
     html: true
    ---

## 三、标题
#### 1.使用 = 和 - 设置一级标题和二级标题
    我展示的是一级标题
    =================

    我展示的是二级标题
    -----------------

#### 2.使用 # 号可表示 1-6 级标题，
    一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。
    # 一级标题
    ## 二级标题
    ### 三级标题
    #### 四级标题
    ##### 五级标题
    ###### 六级标题
## 四、段落字体格式
#### 1.换行
    使用两个以上空格加上回车。
#### 2.字体
    *斜体文本*
    **粗体文本**
    ***粗斜体文本***
#### 3.分割线
    常用***或者---
    一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
#### 4.删除线
    如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 ~~ 即可
     ~~要加删除线的文本~~
#### 5.下划线
    下划线可以通过 HTML 的 <u> 标签来实现：
    <u>带下划线文本</u>
#### 6.脚注
    脚注是对文本的补充说明。格式如下:
    [^1]
#### 7.列表
    Markdown 支持有序列表和无序列表。
    无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记
    有序列表使用数字并加上 . 号来表示
    列表嵌套只需在子列表中的选项前面添加四个空格即可：
#### 8.区块
    1.在段落开头使用 > 符号
    2.区块是可以嵌套的:
    >qw
    >>qw
    >>>qe
    >>>>qe
    3.在列表项目内放进区块
    * qw
    >qw
    >>qw
    >>>qe
    >>>>qe
#### 9.代码
如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`）
```
public class jh {
       public static void main(String[] args) {
        //创建Collection对象
        Collection<Integer> list =new ArrayList();
        //2.向集合中录入数据
        list.add(100);
        list.add(200);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(6);
        list.add(7);
        list.add(8);
        System.out.println(list);
    }
    
}
```
#### 10.链接
    1.[链接名称](链接地址) 或者 <链接地址>
    2.高级链接：我们可以通过变量来设置一个链接，变量赋值在文档末尾进行

    [qw][1]

    [1]: https://www.runoob.com/markdown/md-link.html

#### 11.图片
    1.![alt 属性文本](图片地址) 或者 
      ![alt 属性文本](图片地址 "可选标题")
    2.也可以网址那样对图片网址使用变量:

#### 12.表格
    1.使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行
    |  表头   | 表头  |
    |  ----  | ----  |
    | 单元格  | 单元格 |
    | 单元格  | 单元格 |

    2.对齐方式
    -: 设置内容和标题栏居右对齐。
    :- 设置内容和标题栏居左对齐。
    :-: 设置内容和标题栏居中对齐
#### 13.另存为html等
    Markdown Preview Enhanced扩展提供直接转为html等，








