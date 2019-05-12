// ==UserScript==
// @name                        4chan.org CDN Fixer
// @description                 Reverts is2.4chan.org CDN to the one at i.4cdn.org
// @author                      Xyrec
// @version                     1.1.1
// @updateURL                   https://raw.githubusercontent.com/Xyrec/4chan-cdn-fixer/master/4chan-cdn-fixer.user.js
// @include                     *.4chan.org/*
// @include                     *.4channel.org/*
// @require                     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

var imgLinks = document.querySelectorAll('a.fileThumb');
for (var _i = imgLinks.length - 1; _i >= 0; _i--)
{
var imgLink = imgLinks[_i];
if (imgLink.href.match(/is\d\.4chan\.org/))
imgLink.href = imgLink.href.replace(/is\d\.4chan\.org/, 'i.4cdn.org');
}
