# Font Awesome简介
    Font Awesome 是一套绝佳的图标字体库和CSS框架。
    Font Awesome 字体为您提供可缩放矢量图标,它可以
    大小(fa-lg (33% 递增), fa-2x, fa-3x, fa-4x, 或 fa-5x)、
    固定宽度(fa-fw )
    替换无序列表中的默认图标 fa-ul and fa-li 
    可以轻易构造出引用的特殊效果fa-border 和 fa-pull-right 或 fa-pull-left 
    任意图标旋转(动画)fa-spin， 
    使其进行8方位旋转fa-pulse 。
    图标任意旋转和翻转fa-rotate-* and fa-flip-*
    图标组合(fa-stack)
    颜色、
    阴影以及任何可以用CSS的样式。
## 涉及英文单词
    1.fa   
    2.pull  拉
    3.spin   
    4.pulse 脉搏
    5.spinner  别扣针者；头巾之一种
    6.refresh 刷新
    7.cog  齿轮
    8.rotate 旋转
    9.flip 翻转
    10.stack 堆

    1.Awesome    令人惊叹
    2.item  项目
    3.check  检查
    4.terminal 终点
##  使用方法 
### 使用Font Awesome图标前需引入css
    1、国内推荐 CDN：
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    2、海外推荐 CDN
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    3、直接下载到本地
     1.网址:   http://www.fontawesome.com.cn/
     2.复制 目录到你的项目中font-awesome
    3.在处加载字体-awesome.min.css如下。
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
###  基本语法
    你可以通过设置CSS前缀 fa 和 图标的具体名称，来把Font Awesome 图标放在任意位置。
    Font Awesome 被设计为用于行内元素 用<i>标签包裹.
    如:
    <i class="fa fa-camera-retro"></i> fa-camera-retro

    注意: 默认图标修改了图标容器的字体大小，图标大小会随之改变。同样也适用于颜色，阴影，阴影等其它任何CSS支持的效果上。
### 大小设置
    为了增加图标大小相对于它们的容器, 使用 fa-lg (33% 递增), fa-2x, fa-3x, fa-4x, 或 fa-5x classes.
    如:
    <i class="fa fa-camera-retro fa-lg"></i> 
    <i class="fa fa-camera-retro fa-2x"></i> 
    <i class="fa fa-camera-retro fa-3x"></i> 
    <i class="fa fa-camera-retro fa-4x"></i> 
    <i class="fa fa-camera-retro fa-5x"></i> 
### 使用 fa-fw 来设置图标在一个固定宽度内
    主要用于不同宽度图标无法对齐的情况，尤其在列表或导航时起到重要作用。
    <div class="list-group">
        <a class="list-group-item" href="#"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; 首页</a>
        <a class="list-group-item" href="#"><i class="fa fa-book fa-fw" aria-hidden="true"></i>&nbsp; 关于我们</a>
        <a class="list-group-item" href="#"><i class="fa fa-pencil fa-fw" aria-hidden="true"></i>&nbsp; 后台应用编辑</a>
        <a class="list-group-item" href="#"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp; 系统设置</a>
    </div>
#### 使用 fa-ul and fa-li 替换无序列表中的默认图标。
    <ul class="fa-ul">
        <li><i class="fa-li fa fa-check-square"></i>使用列表类图标</li>
        <li><i class="fa-li fa fa-check-square"></i>轻松的替换</li>
        <li><i class="fa-li fa fa-spinner fa-spin"></i>无序列表</li>
        <li><i class="fa-li fa fa-square"></i>中的默认图标</li>
    </ul>
### 使用 fa-border 和 fa-pull-right 或 fa-pull-left 可以轻易构造出引用的特殊效果。
    <i class="fa fa-quote-left fa-3x fa-pull-left fa-border" aria-hidden="true"></i>
    ...独坐在路边街角 冷风吹醒，默默地伴着我的孤影，只想将结他紧抱，诉出辛酸，就在这刻想起往事，心中一股冲劲勇闯，抛开那现实没有顾虑，仿佛身边拥有一切，看似与别人筑起隔膜。
### 使用 fa-spin 使任意图标旋转(动画)，还可以使用 fa-pulse 使其进行8方位旋转。尤其适合 fa-spinner, fa-refresh, 和 fa-cog。
    <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>

    <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>

    <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>

    <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>

    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>
### 若要对图标进行任意旋转和翻转, 可以使用 fa-rotate-* and fa-flip-* 类.

    <i class="fa fa-shield"></i> normal<br>
    <i class="fa fa-shield fa-rotate-90"></i> fa-rotate-90<br>
    <i class="fa fa-shield fa-rotate-180"></i> fa-rotate-180<br>
    <i class="fa fa-shield fa-rotate-270"></i> fa-rotate-270<br>
    <i class="fa fa-shield fa-flip-horizontal"></i> fa-flip-horizontal<br>
    <i class="fa fa-shield fa-flip-vertical"></i> fa-flip-vertical
### 图标组合
    如果想要将多个图标组合起来，使用fa-stack类，作为父容器，fa-stack-1x作为正常比例的图标，fa-stack-2x作为大一些的图标。还可以使用fa-inverse类来切换图标颜色。您可以在父容器中 通过添加 larger icon 类来控制整体大小。
    <span class="fa-stack fa-lg">
    <i class="fa fa-square-o fa-stack-2x"></i>
    <i class="fa fa-twitter fa-stack-1x"></i>
    </span>
    fa-twitter on fa-square-o<br>
    <span class="fa-stack fa-lg">
    <i class="fa fa-circle fa-stack-2x"></i>
    <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
    </span>
    fa-flag on fa-circle<br>
    <span class="fa-stack fa-lg">
    <i class="fa fa-square fa-stack-2x"></i>
    <i class="fa fa-terminal fa-stack-1x fa-inverse"></i>
    </span>
    fa-terminal on fa-square<br>
    <span class="fa-stack fa-lg">
    <i class="fa fa-camera fa-stack-1x"></i>
    <i class="fa fa-ban fa-stack-2x text-danger"></i>
    </span>
    fa-ban on fa-camera