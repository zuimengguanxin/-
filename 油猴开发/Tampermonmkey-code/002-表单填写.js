// @match        https://pan.baidu.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    window.addEventListener("load", function(event) {
        console.log(document.querySelector("#TANGRAM__PSP_4__userName"));
        setTimeout(function(){//2s后再进行登录
            if(document.querySelector("#TANGRAM__PSP_4__userName")==null){
                //没有找到表示登录了,不再执行后续代码
                return;
            }
            //未登录,执行登录代码
            document.querySelector('#TANGRAM__PSP_4__userName').value='xxxxx';
            document.querySelector('#TANGRAM__PSP_4__password').value='xxxx';
            document.querySelector('#TANGRAM__PSP_4__submit').click();
        },2000);
    });

})();