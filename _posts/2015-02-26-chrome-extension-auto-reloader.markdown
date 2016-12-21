---
layout: post
title:  'Chrome extension auto reloader'
permalink: /2015/02/26/chrome-extension-auto-reloader/
date:   2015-02-26 00:00:00
categories: chrome-extensions projects projects-chrome-extensions
---


# Chrome extension auto reloader
[chrome-extension-auto-reload](https://github.com/robin-drexler/chrome-extension-auto-reload "https://github.com/robin-drexler/chrome-extension-auto-reload") is a Chrome extension, which reloads all unpacked extensions whenever a file is changed in an extension that is currently under development. The hassle of manually reloading an extension (to update e.g. content scripts) while developing is now gone.   

This extension needs a counterpart, which sends file change events via websockets. You can find an Gulp-based <span style="line-height: 1.6;" data-mce-style="line-height: 1.6;">example</span><span style="line-height: 1.6;" data-mce-style="line-height: 1.6;"> </span>[here](https://github.com/robin-drexler/chrome-extension-auto-reload-watcher "https://github.com/robin-drexler/chrome-extension-auto-reload-watcher")<span style="line-height: 1.6;" data-mce-style="line-height: 1.6;">. </span>  
 <span style="line-height: 1.6;" data-mce-style="line-height: 1.6;"></span>   
<span style="line-height: 1.6;" data-mce-style="line-height: 1.6;">You can find the source code on: [robin-drexler/chrome-extension-auto-reload](https://github.com/robin-drexler/chrome-extension-auto-reload "https://github.com/robin-drexler/chrome-extension-auto-reload").</span>