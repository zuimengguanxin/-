// ==UserScript==
// @name         你才付费看答案修改版
// @namespace    http://tampermonkey.net/
// @version      2.3.1
// @description  考试资料网(ppkao)，上学吧，问答库，简答题等多平台免费查看答案
// @author       free
// @match        *://www.ppkao.com/*
// @match        *://*.shangxueba.com/*.html
// @match        *://*.asklib.com/*
// @match        *://www.soutiyun.com/question*
// @match        *//www.soutiyun.com/search?key=*      
// @match        *://www.jiandati.com/question.aspx*
// @match        *://www.shuashuati.com/ti/*.html

// @connect      jieda.tikuhai.com
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function () {
    'use strict';
    var $ = unsafeWindow.jQuery || jQuery,
        url = location.pathname,
        tm,
        urls,
        option,
        otherData = {};
    //引入layer弹窗css
    $("head").append('<script src="https://lib.baomitu.com/layui/2.6.8/layui.js"></script>');
    $("head").append('<link href="https://lib.baomitu.com/layui/2.6.8/css/layui.css" rel="stylesheet">');
    $("head").append('<style> .list-container { position: fixed; right: 10px; bottom: 10px;z-index:99999; } .list-container.active .more-button-list { opacity: 1; transform: scale(1) } .list-container.active .more-button-list-item { -webkit-animation: fadeInItem .6s .2s forwards; animation: fadeInItem .6s .2s forwards } .list-container.active .more-button-list-item:nth-child(2) { -webkit-animation-delay: .4s; animation-delay: .4s } .list-container.active .more-button-list-item:nth-child(3) { -webkit-animation-delay: .6s; animation-delay: .6s } .list-container.active .more-button-list-item:nth-child(4) { -webkit-animation-delay: .8s; animation-delay: .8s } .list-container.active .more-button { -webkit-animation: onePulse .6s forwards linear; animation: onePulse .6s forwards linear } .list-container.active .menu-icon-wrapper { transform: rotate(-45deg) } .list-container.active .menu-icon-line.first { transform: rotate(-90deg) translateX(1px) } .list-container.active .menu-icon-line.last { transform: rotate(-90deg) translateX(-1px) } .more-button { background-color: #5c67ff; box-shadow: 0 0 0 4px rgba(92, 103, 255, 0.3); border-radius: 50%; width: 50px; height: 50px; border: 0; padding: 0; cursor: pointer; transition: .2s ease-in; display: flex; align-items: center; justify-content: center; color: #fff; position: relative; z-index: 2 } .more-button:hover, .more-button:focus { box-shadow: 0 0 0 8px rgba(92, 103, 255, 0.3); background-color: #4854ff } .more-button:focus { outline: 0 } .more-button-list { background-color: #fff; border-radius: 8px; list-style-type: none; width: 140px; /* 			height: 170px; */ box-shadow: 0 0 4px 4px rgba(150, 157, 249, 0.16); padding: 0; padding: 6px; position: absolute; right: 24px; bottom: 0; opacity: 0; transform: scale(0); transform-origin: bottom right; transition: all .3s ease .1s } .more-button-list li { opacity: 0 } .more-button-list-item { display: flex; align-items: center; color: #1c3991; padding: 10px; border-radius: 4px; cursor: pointer; position: relative; transition: .2s ease-in; transform: translatex(-10px) } .more-button-list-item:hover { color: #5c67ff } .more-button-list-item:after { content: ""; position: absolute; height: 1px; width: calc(100% - 24px); left: 12px; bottom: 0; background-color: rgba(132, 160, 244, 0.1) } .more-button-list-item:last-child:after { display: none } .more-button-list-item svg { width: 18px; height: 18px } .more-button-list-item span { display: inline-block; line-height: 20px; font-size: 14px; margin-left: 8px } @-webkit-keyframes onePulse { 0% { box-shadow: 0 0 0 0 rgba(92, 103, 255, 0.3) } 50% { box-shadow: 0 0 0 12px rgba(92, 103, 255, 0.1) } 100% { box-shadow: 0 0 0 4px rgba(92, 103, 255, 0.3) } } @keyframes onePulse { 0% { box-shadow: 0 0 0 0 rgba(92, 103, 255, 0.3) } 50% { box-shadow: 0 0 0 12px rgba(92, 103, 255, 0.1) } 100% { box-shadow: 0 0 0 4px rgba(92, 103, 255, 0.3) } } @-webkit-keyframes fadeInItem { 100% { transform: translatex(0px); opacity: 1 } } @keyframes fadeInItem { 100% { transform: translatex(0px); opacity: 1 } } .socials { position: fixed; bottom: 16px; right: 16px; display: flex; align-items: center } .social-link { color: #fff; display: flex; align-items: center; cursor: pointer; text-decoration: none; margin-right: 12px } .menu-icon-wrapper { border-radius: 2px; width: 20px; height: 20px; display: flex; flex-direction: column; justify-content: space-between; cursor: pointer; transition: transform 330ms ease-out } .menu-icon-line { background-color: #fff; border-radius: 2px; width: 100%; height: 2px } .menu-icon-line.half { width: 50% } .menu-icon-line.first { transition: transform 300ms cubic-bezier(0.52, -0.8, 0.52, 0.52); transform-origin: right } .menu-icon-line.last { align-self: flex-end; transition: transform 300ms cubic-bezier(0.52, -0.8, 0.52, 0.52); transform-origin: left } </style>');
    $("body").append('<div class="list-container"> <button class="more-button" aria-label="Menu Button"> <div class="menu-icon-wrapper"> <div class="menu-icon-line half first"></div> <div class="menu-icon-line"></div> <div class="menu-icon-line half last"></div> </div> </button> <ul class="more-button-list"> <li id="bad_q" class="more-button-list-item"><span>错题反馈</span></li><li id="get_da" class="more-button-list-item"><span>查看答案</span></li> </ul> </div>');
    $(".more-button").click(function () {
        document.querySelector(".list-container").classList.toggle("active")
    });
    switch (location.host) {
        case 'www.ppkao.com':
            tm = $(".single-siti").find(".kt").html();
            $(".answer").removeAttr("onclick");
            $('.answer').on('click', '', answer);
            break;
        case 'www.asklib.com':
            tm = $(".essaytitle").html();
            $(".listtip").find(".btn").removeAttr("onclick");
            $(".listtip").find(".btn").on('click', '', answer);
            break;
        case 'www.shuashuati.com':
            var shua_info = unsafeWindow.window.__INITIAL_STATE__;
            console.log(shua_info);
            $(".injectImg_3Scbt").remove();
            $(".tiBodyRight_3w9eE").remove();
            tm = shua_info.tiDetail.question || filterImg($(".tiQuestionContent_34cHA"));
            option = shua_info.tiDetail.options !== null ? shua_info.tiDetail.options.map(function (index) { return index.detail }) : $(".tiOptions_hNYWZ").find(".tiOption_6pmwl div").map(function () {
                return filterImg(this);
            }).toArray();
            if (shua_info.sys.userInfo !== null) {
                otherData = { "token": shua_info.sys.userInfo.token }
            }
            $(".tiBlockContent_1LY0-:first").parent().html("<div class='answer_div'><button class='layui-btn layui-btn-normal'>查看答案</button></div>").removeAttr("onclick");
            $('.layui-btn').on('click', '', answer);
            console.log(tm, option);
            break;
        case location.host.indexOf("shangxueba.com") != -1 ? location.host : undefined:
            tm = filterImg($(".ask_title"));
            $(".sub_ans_btn").removeAttr("onclick");
            $('.sub_ans_btn').on('click', '', answer);
            break;
        case location.host.indexOf("www.soutiyun.com") != -1 ? location.host : undefined:
            tm = filterImg($(".question_main_title"));
            $(".viewAnswer").removeAttr("href");
            // $('.viewAnswer').trigger("click");
            $('.viewAnswer').on('click', '', answer);
            break;
        case location.host.indexOf("www.jiandati.com") != -1 ? location.host : undefined:
            tm = filterImg($(".sub_cont"));
            $(".sub_ans_btn").removeAttr("onclick");
            $('.sub_ans_btn').on('click', '', answer);
            break;
    }
    $('#get_da').on('click', '', answer);
    function answer() {
        var load = unsafeWindow.layer.load(2);
        GM_xmlhttpRequest({
            method: 'POST',
            url: "http://jieda.tikuhai.com/?url=" + location.href,
            data: JSON.stringify({ "question": tm, "option": option, "other": otherData }),
            headers: {
                'referer': location.href,
                'Content-type': 'application/json',
            },
            timeout: 5000,
            onload: function (xhr) {
                unsafeWindow.layer.close(load);
                if (xhr.status == 200) {
                    var obj = $.parseJSON(xhr.responseText) || {};
                    console.log(obj);
                    if (obj.status == 200) {
                        var contont = "";
                        //$(".single-siti").find("p").html(obj.data[3])选项暂时不加
                        console.log(location.host);
                        switch (location.host) {
                            case 'www.ppkao.com':
                                $("#zhangjieList").remove();
                                $(".ysyd").remove();
                                $(".tm-bottom:first").css("height", "300px");
                                $("strong.kt").html(obj.question);
                                contont = "云端题目：" + obj.question + "<br>云端选项:<br>" + obj.option.join('<br>') + "<br>云端参考答案:" + obj.answer + "<br><br>" + obj.msg
                                $(".tm-bottom:first").html(contont);
                                break;
                            case 'www.asklib.com':
                                //$(".listtip").find(".btn").remove();
                                console.log("123");
                                contont = "云端题目：" + obj.question + "<br>云端选项:<br>" + obj.option.join('<br>') + "<br>云端参考答案:" + obj.answer + "<br><br>" + obj.msg;
                                $(".listbg").html(contont);
                                break;
                            case location.host.indexOf("shangxueba.com") != -1 ? location.host : undefined:
                                $(".sub_ans_btn").remove();
                                contont = "云端题目：" + obj.question + "<br>云端选项:<br>" + obj.option.join('<br>') + "<br>云端参考答案:" + obj.answer + "<br><br>" + obj.msg;
                                $("#div_answer").html(contont);

                                break;
                            case 'www.shuashuati.com':
                                $(".sub_ans_btn").remove();
                                contont = "云端题目：" + obj.question + "<br>云端选项:<br>" + obj.option.join('<br>') + "<br>云端参考答案:" + obj.answer + "<br><br>" + obj.msg;
                                $(".answer_div:first").html(contont);
                                break;
                            case 'www.soutiyun.com':
                                $(".viewAnswer").remove();
                                $(".answer_detail").removeAttr("style");
                                contont = "云端题目：" + obj.question + "<br>云端选项:<br>" + obj.option.join('<br>') + "<br>云端参考答案:" + obj.answer + "<br><br>" + obj.msg;
                                $(".answer_detail:first").html(contont);
                                break;
                            case 'www.jiandati.com':
                                $(".sub_ans_btn").remove();

                                contont = "云端题目：" + obj.question + "<br>云端选项:<br>" + obj.option.join('<br>') + "<br>云端参考答案:" + obj.answer + "<br><br>" + obj.msg;
                                $("#div_answer").html(contont);
                                break;
                        }
                    } else {
                        unsafeWindow.layer ? unsafeWindow.layer.msg(obj.msg, { icon: 5 }) : alert(obj.msg);
                    }
                } else if (xhr.status == 203) {
                    obj = $.parseJSON(xhr.responseText) || {};
                    unsafeWindow.layer ? unsafeWindow.layer.msg(obj.msg, { icon: 5 }) : alert(obj.msg);
                } else if (xhr.status == 403) {
                    obj = $.parseJSON(xhr.responseText) || {};
                    console.log(obj);
                    unsafeWindow.layer ? unsafeWindow.layer.msg(obj.msg, { icon: 5 }) : alert(obj.msg);
                } else {
                    console.log(xhr.responseText);
                    unsafeWindow.layer ? unsafeWindow.layer.msg("题库服务器异常,请稍后再试吧~", { icon: 5 }) : alert("题库服务器异常,请稍后再试吧~");
                }
            },
            ontimeout: function () {
                unsafeWindow.layer.close(load);
                unsafeWindow.layer ? unsafeWindow.layer.msg("题库服务器异常,请稍后再试吧~", { icon: 5 }) : alert("题库服务器异常,请稍后再试吧~");
            }
        });
    }
    function filterImg(dom) {
        return $(dom).clone().find('img[src]').replaceWith(
            function () {
                return $('<p></p>').text('<img src="' + $(this).attr('src') + '">');
            }
        ).end().find('iframe[src]').replaceWith(
            function () {
                return $('<p></p>').text('<iframe src="' + $(this).attr('src') + '"></iframe>');
            }
        ).end().text().trim();
    }
})();