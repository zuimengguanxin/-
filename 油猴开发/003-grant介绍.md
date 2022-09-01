# grant介绍 
本节主要内容:
    介绍一下油猴脚本的grant属性,说明none和unsafeWindow
## grant
    这个属性可用来申请GM_*函数和unsafeWindow权限.相当于放在脚本header里面告诉油猴扩展,你需要用些什么东西,然后它就会给你相应的权限.

    更加详细的列表:
    tampermonkey文档地址:https://www.tampermonkey.net/documentation.php#_grant
    tampermonkey可申请api文档地址:https://www.tampermonkey.net/documentation.php#api

## none和unsafeWindow

    简单来说:none就是直接运行在前端页面中,否则就是运行在一个沙盒环境,需要使用unsafeWindow去操作前端的元素.

    除了GM_*函数外,还有两个特殊的权限,就是none和unsafeWindow.默认的情况下,你的脚本运行在油猴给你创建的一个沙盒环境下,这个沙河环境无法访问到前端的页面,也就无法操作前端的一些元素等.
    如果在页面最前方声明:"//@grant none",那么油猴就会将你的脚本直接放在前端的上下文中执行,这是的脚本上下文(window)就是前端的上下文.但是这样的话就无法使用GM_*等函数,无法与油猴交互,使用一些更强的功能.

    所以一般写脚本的时候是使用unsafeWindow与前端交互,而不使用"//@grant none",这样就可以使用grant去申请油猴的一些更强的函数功能.这时候的脚本上下文(window)是沙盒的上下文,而不是前端的上下文.

    在沙盒环境中,有一些window的操作也无法处理,需要使用grant来获取,例如:"// @grant window.onurlchange"(TamperMonkey文档中的)
    // ==UserScript==
    ...
    // @grant window.onurlchange
    // ==/UserScript==

    if (window.onurlchange === null) {
        // feature is supported
        window.addEventListener('urlchange', (info) => ...);
    }
    复制代码

    这样的作法是为了避免恶意网页可以直接的使用GM_*函数,也可以避免被网页检测到GM_*插件的存在
    GM文档内容:
    unsafeWindow绕过Greasemonkey的安全模型，该模型的存在是为了确保恶意网页不能以这样的方式修改对象，从而使用户脚本（比在网页中运行的普通JavaScript具有更高的权限执行）执行其作者或用户不想做的事情。

    更多详细内容请看:https://bbs.tampermonkey.net.cn/thread-182-1-1.html