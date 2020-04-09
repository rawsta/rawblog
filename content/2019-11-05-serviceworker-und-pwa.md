---
title: ServiceWorker und PWA
date: 2019-11-05
cover: assets/serviceworker-title.jpg
category: javascript
template: post
slug: serviceworker-und-pwa
tags:
    - swjs
    - serviceworker
    - pwa
---

# serviceworker w/ workbox

## Basics

**Hinweis:** Dieser Beitrag ist mehr als Platzhalter gedacht, bis ich den weiter auswarbeiten konnte. Sorry!

## Precaching

`Precaching` ist allgemein eher für statische Elemente wie css/js/etc. geeignet. Diese Elemnte werden bevorzugt aus dem Cache geladen. Für Aktualisierungen, fügt `workbox` automatisch eigene Hashes hinzu.

!!! caution
**Warning:** Es wird empfohlen die Precache Dateien mit [Workbox's build tools zu generieren](https://developers.google.com/web/tools/workbox/guides/precache-files/#generating_a_precache_manifest). **Never hardcode revision info into a "hand written" manifest, as precached URLs will not be kept up to date unless the revision info reflects the URL's contents!**
!!!

### runtime caching / workbox.strategies

Der HTTP-Cache des Browsers ist relativ begrenzt und versucht immer zuerst die definierten, gecachten Elemente zuerst zuladen. Im Gegensatz zum Precaching


`serviceworker.js` wird angepasst beispielsweise auf:
```js
// The latest blog posts
workbox.routing.registerRoute('/wp-json/wp/v2/posts', workbox.strategies.networkFirst());

// A single blog post
workbox.routing.registerRoute(/\\/wp-json\\/wp\\/v2\\/posts\\/.+/, workbox.strategies.staleWhileRevalidate());
```

### Die verschiedenen Strategien
**CacheFirst**
Die `cacheFirst()` Strategie ist das Standardverhalten. Der Cache wird bevorzugt, bis es andere Anweisungen gibt. (Push, Force-Reload,etc)


**NetworkFirst**
The `networkFirst()` strategy is used because I want the user to always get a fresh list of all the latest blog posts. They will be served from the cache as fallback if the user is offline.


**StaleWhileRevalidate**
Single blog posts will probably not be updated very much after they has been published, so that’s why I’m using the `staleWhileRevalidate()` strategy for them. It means that the service worker will fetch the JSON data from the cache, but also make an network request and update the cache in the background. In other words, the blog post will load instantly from the second visit.
