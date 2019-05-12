// ==UserScript==
// @name                        4chan.org CDN Fixer
// @description                 Reverts is2.4chan.org CDN to the one at i.4cdn.org
// @author                      Xyrec
// @version                     1.0
// @updateURL                   https://raw.githubusercontent.com/Xyrec/4chan-cdn-fixer/master/4chan-cdn-fixer.user.js
// @include                     *.4chan.org/*
// @require                     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
// ==/UserScript==

var links,thisLink;
links = document.evaluate("//a[contains(@href, 'is.4chan')]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

    thisLink.href = thisLink.href.replace('is.4chan.org/',
                                          'i.4cdn.org/');
}
var links,thisLink;
links = document.evaluate("//a[contains(@href, 'is2.4chan')]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);
for (var i=0;i<links.snapshotLength;i++) {
    var thisLink = links.snapshotItem(i);

    thisLink.href = thisLink.href.replace('is2.4chan.org/',
                                          'i.4cdn.org/');
}
