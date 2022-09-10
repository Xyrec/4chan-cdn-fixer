// ==UserScript==
// @name                        4chan.org CDN Fixer
// @description                 Reverts is2.4chan.org CDN to the one at i.4cdn.org
// @author                      Xyrec
// @version                     1.3.2
// @match                       *.4chan.org/*
// @match                       *.4channel.org/*
// @require                     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// @downloadURL                 https://raw.githubusercontent.com/Xyrec/4chan-cdn-fixer/master/4chan-cdn-fixer.user.js
// @updateURL                   https://raw.githubusercontent.com/Xyrec/4chan-cdn-fixer/master/4chan-cdn-fixer.user.js
// ==/UserScript==

var thumbLinks = document.querySelectorAll('a.fileThumb');
for (var _i = thumbLinks.length - 1; _i >= 0; _i--) {
    var thumbLink = thumbLinks[_i];
    if (thumbLink.href.match(/is\d\.4chan\.org/)) {
        thumbLink.href = thumbLink.href.replace(/is\d\.4chan\.org/, 'i.4cdn.org');
    }
}

var urlLinks = document.querySelectorAll('div.fileText > a');
for (var i = urlLinks.length - 1; i >= 0; i--) {
    var urlLink = urlLinks[i];
    if (urlLink.href.match(/is\d\.4chan\.org/)) {
        urlLink.href = urlLink.href.replace(/is\d\.4chan\.org/, 'i.4cdn.org');
    }
}
