---
layout: null
---
const VERSION = '{{site.time}}';
const assetsToCache = [];
{% for asset in site.static_files %}
{% if asset.path contains '/assets'  %}assetsToCache.push('{{asset.path}}');{% endif %}
{% endfor %}
{% for page in site.pages %}
{% unless page.url contains "sw.js" %}assetsToCache.push('{{page.url}}');{% endunless %}
{% endfor %}
{% for post in site.posts %}
assetsToCache.push('{{post.url}}');
{% endfor %}


self.addEventListener("install", event => {
  event.waitUntil(
    self.caches.open(VERSION).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== VERSION)
          .map(cacheName => {
            return caches.delete(cacheName);
          })
      );
    })
  );
});



self.addEventListener("fetch", event => {
  console.log('FETCHING THINGS')
  event.respondWith(
    
    self.caches.match(event.request).then((response) => {
      console.log(event.request, response)
      return response || fetch(event.request);
    })
  );
});