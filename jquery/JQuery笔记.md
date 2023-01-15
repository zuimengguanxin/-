# 锋利的JQuary笔记
## 简介
   本笔记用于记录JQuary的学习过程与常用方法
## 一、认识jQuary 
##### 1.13链式操作风格
#### 1.4 JQuery对象与DOM对象
##### 1.41 简介
    DOM对象
    通过原生js使用getElementByTagName等取得的对象

    JQuery对象
    通过JQuery包装DOM后产生的对象

    两者方法不可通用
##### 1.42 JQuery对象与DOM对象互相转换
    DOM对象转JQuery对象
    DOM对象可以使用$()包装， $(DOM对象) 转换成jQuery对象，如$(cr)

    JQuery对象转DOM对象
    JQuery对象本质是数组，可用jQuery对象[0]获取到DOM对象，如$("#cr")[0]
#### 1.5 解决JQuery库与其他库的冲突
JQuery后引入

    1.可以将$变量控制权移交其他库
    使用JQuery.noConflict()移交，然后使用全称jQuery()函数作为对象制造工厂。

    2.自定义变量
    var $j =jQuery.noConflict(),这样可以使用$j()作为对象制造工厂快捷方式

    3.使用JQuery设定页面加载时执行的函数（其一）
    jQuery.noConflict();   //第一步移交$控制权
    jQuery(function($){    
        //在此内部可以使用jQuery的$()方法
    })
    //外部可以使用其他库的$()方法

    4.使用JQuery设定页面加载时执行的函数（其二）
     jQuery.noConflict();   //第一步移交$控制权
     （function($){
             //在此内部可以使用jQuery的$()方法
     }）(jQuery);

 JQuery前引入

      无需调用jQuery.noConflict();可以直接使用jQuery(),同时$()可以作为其他库的快捷方式







## 二、选择器
基本选择器

    #id             #cr
    .class          .cr
    element         p
    *
    ，              .cr,.ce    组合

层次选择器

    后代选择器       .cr .ce    有空格 无，
    子代选择器       .cr>.ce    
    兄弟选择器       .one+div     下一个div 实测加不加空格都行
                    .one~ div  .one后所有div元素
    