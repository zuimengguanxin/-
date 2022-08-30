# css 高级
## 1.CSS 圆角
    通过 CSS border-radius 属性，可以实现任何元素的“圆角”样式。

### （1）CSS border-radius 属性
    CSS border-radius 属性定义元素角的半径。
    提示：您可以使用此属性为元素添加圆角！
    这里有三个例子：
    1. 带有指定背景颜色的元素的圆角：
       #rcorners1 {
            border-radius: 25px;
            background: #73AD21;
            padding: 20px; 
            width: 200px;
            height: 150px; 
        }
    2. 带边框元素的圆角：
        #rcorners2 {
            border-radius: 25px;
            border: 2px solid #73AD21;
            padding: 20px; 
            width: 200px;
            height: 150px; -
        }
    3. 带有背景图像的元素的圆角：
        #rcorners3 {
            border-radius: 25px;
            background: url(paper.gif);
            background-position: left top;
            background-repeat: repeat;
            padding: 20px; 
            width: 200px;
            height: 150px; 
        }
### （2）border-radius 属性实际上是以下属性的简写属性：
    border-top-left-radius
    border-top-right-radius
    border-bottom-right-radius
    border-bottom-left-radius
    CSS border-radius - 指定每个角
    border-radius 属性可以接受一到四个值。规则如下：
    1.四个值 - border-radius: 15px 50px 30px 5px;（依次分别用于：左上角、右上角、右下角、左下角）：
        #rcorners1 {
            border-radius: 15px 50px 30px 5px;
            background: #73AD21;
            padding: 20px; 
            width: 200px;
            height: 150px; 
        }
    2.三个值 - border-radius: 15px 50px 30px;（第一个值用于左上角，第二个值用于右上角和左下角，第三个用于右下角）：
        #rcorners2 {
            border-radius: 15px 50px 30px;
            background: #73AD21;
            padding: 20px; 
            width: 200px;
            height: 150px; 
        }
    3.两个值 - border-radius: 15px 50px;（第一个值用于左上角和右下角，第二个值用于右上角和左下角）：
        #rcorners3 {
            border-radius: 15px 50px;
            background: #73AD21;
            padding: 20px; 
            width: 200px;
            height: 150px; 
        }
    4.一个值 - border-radius: 15px;（该值用于所有四个角，圆角都是一样的）：
        #rcorners4 {
            border-radius: 15px;
            background: #73AD21;
            padding: 20px; 
            width: 200px;
            height: 150px; 
        }

### （3）创建椭圆角：

    实例
    #rcorners1 {
        border-radius: 50px / 15px;
        background: #73AD21;
        padding: 20px; 
        width: 200px;
        height: 150px; 
    }

    #rcorners2 {
        border-radius: 15px / 50px;
        background: #73AD21;
        padding: 20px; 
        width: 200px;
        height: 150px; 
    }

    #rcorners3 {
        border-radius: 50%;
        background: #73AD21;
        padding: 20px; 
        width: 200px;
        height: 150px;
    }
### （4）CSS 圆角属性
属性	                   描述
border-radius	用于设置所有四个 border-*-*-radius 属性的简写属性。
border-top-left-radius	定义左上角边框的形状。
border-top-right-radius	定义右上角边框的形状。
border-bottom-right-radius	定义右下角边框的形状。
border-bottom-left-radius	定义左下角边框的形状。


## 2.CSS 边框图像
### (1)CSS border-image 属性
    CSS border-image 属性允许您指定要使用的图像，而不是包围普通边框。
    该属性有三部分：
    用作边框的图像
    在哪里裁切图像
    定义中间部分应重复还是拉伸
    我们将使用这幅图像（"border.png"）


    border-image 属性接受图像，并将其切成九部分，就像井字游戏板。然后，将拐角放置在拐角处，并根据您的设置重复或拉伸中间部分。

注意：为了使 border-image 起作用，该元素还需要设置 border 属性！

此处，重复图像的中间部分以创建边框：

图像作为边框！
这是代码：

实例
#borderimg {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 30 round;
}
亲自试一试
此处，图像的中间部分被拉伸以创建边框：

图像作为边框！
这是代码：

实例
#borderimg {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 30 stretch;
}
亲自试一试
提示：border-image 属性实际上是以下属性的简写属性：

border-image-source
border-image-slice
border-image-width
border-image-outset
border-image-repeat
CSS border-image - 不同的裁切值
不同的裁切值会完全改变边框的外观：

实例 1：
border-image: url(border.png) 50 round;
实例 2：
border-image: url(border.png) 20% round;
实例 3：
border-image: url(border.png) 30% round;
这是代码：

实例
#borderimg1 {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 50 round;
}

#borderimg2 {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 20% round;
}

#borderimg3 {
  border: 10px solid transparent;
  padding: 15px;
  border-image: url(border.png) 30% round;
}
亲自试一试
CSS 边框图像属性
属性	描述
border-image	用于设置所有 border-image-* 属性的简写属性。
border-image-source	规定用作边框的图像的路径。
border-image-slice	规定如何裁切边框图像。
border-image-width	规定边框图像的宽度。
border-image-outset	规定边框图像区域超出边框盒的量。
border-image-repeat	规定边框图像应重复、圆角、还是拉伸。