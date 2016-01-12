// ==UserScript==
// @name         使用 you-get -p mpv url 播放视频
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  使用 you-get -p mpv url 播放视频
// @author       Jin Liu
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @include      *.iqiyi.com/*
// @include      *.youku.com/*
// @include      *.letv.com/*
// @include      *.bilibili.com/*
// @include      *.tudou.com/*
// @include      *.youtube.com/*
// @include      *.tumblr.com/*
// @include      *tv.sohu.com/*
// ==/UserScript==
/* jshint -W097 */
'use strict';

unsafeWindow.play = function() {
    GM_xmlhttpRequest({
        method: "POST",
        url: "http://localhost:1234/play",
        data: "url=" + encodeURIComponent(window.location.href),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        onload: function (response) {
            console.log(response.statusText);
            if(response.status == 200) {
                document.body.innerHTML = '';
            }
        },
        onerror: function (response) {
            console.log(response.statusText);
        }
    });
}

var elemButton = document.createElement('button');
elemButton.style.cssText = 'z-index: 999999999; position: fixed;right: 0;top: 50%;padding: 15px;border: none;background: #8BC34A;color: darkgreen;font-size: 20px;box-shadow: 0px 0px 32px 0;';
elemButton.innerHTML = 'PLAY';
elemButton.onclick = play;
document.body.appendChild(elemButton);
