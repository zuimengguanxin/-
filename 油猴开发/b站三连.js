// ==UserScript==
// @name         b站3连
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// @require      file://C:\Users\Administrator\Documents\code\myjava\biji\油猴开发\b站三连.js
// ==/UserScript==

(function() {
    'use strict';
    //引入awesome图标库
    //  let h=document.querySelector('head');
    //  h.append('<link href="https://cdn.bootcss.com/font-awesome/5.13.0/css/all.css" rel="stylesheet">');

     //创建元素
     
    setTimeout(function(){
        let share=document.querySelector('#arc_toolbar_report .toolbar-left .share-wrap')
        let mydiv=document.createElement('botton');

        mydiv.innerText='三连';
        mydiv.style.background='blue';
        mydiv.style.color='while';
        mydiv.style.marginRight='10px'
        mydiv.onclick(

        )
       share.parentElement.insertBefore(mydiv,share);
    },5000
    )

    // Your code here...
})();