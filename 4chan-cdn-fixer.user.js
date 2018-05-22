// ==UserScript==
// @name                        4chan.org CDN Fixer
// @description                 Reverts is2.4chan.org CDN to the one at i.4cdn.org
// @author                      Xyrec
// @version                     1.0
// @include                     *.4chan.org/*
// @require                     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

$(function(){
    $("a").each(function() {
        this.href = this.href.replace('is2.4chan' , 'i.4cdn');
    });
});
