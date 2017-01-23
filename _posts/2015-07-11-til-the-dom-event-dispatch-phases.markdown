---
layout: post
title:  '[TIL] The DOM event dispatch phases'
permalink: /2015/07/11/the-dom-event-dispatch-phases/
date:   2015-07-11 00:00:00
categories: til article web
has_gist: true
---

Browsing [MDN](https://developer.mozilla.org/en/docs/Web/API/EventTarget.addEventListener), I stumbled upon the fact that `target.addEventListener` actually has a third parameter, called `useCapture`.  

<div class="highlight">

    target.addEventListener(type, listener[, useCapture]);

</div>

Turns out, it’s to control when an event listener gets called during an event dispatch.  
When an event is dispatched on a DOM element, [there are actually three phases](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow). During the first, the capture phase, all listeners (that make use of the useCapture flag) bound to ancestors of the event target are getting called.  
Secondly the event listeners bound to the target itself are being invoked. (Target phase)  
Last but not least, the event bubbles up through all ancesors and all listeners (that do not(!) make use of the useCapture flag) are getting called. (Bubble phase)  
An event listener can either be registered for the capture or bubble phase, but not both. However the same function can be registered for both phases separately.
### Example Code
{% include gh-gist.html gist_url="https://gist.github.com/robin-drexler/d4d167f1aa0bd94094e2" %}


### Scribble
<amp-img
  src="https://image.jimcdn.com/app/cms/image/transf/dimension=990x10000:format=jpg/path/se42d1516dcb4082b/image/i018a7d79830f2f10/version/1436639476/image.jpg"
  width="990"
  height="743"
  layout="responsive">
</amp-img>
