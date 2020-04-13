---
title: Manifest zur PWA
date: 2019-10-02
cover: /assets/manifest-title.jpg
slug: manifest-zur-pwa
category: javascript
template: post
tags:
-   pwa
-   info
-   wip
---


# WebManifest

## Table of Contents
```toc
# This code block gets replaced with the TOC
```

Das Manifest regelt wie mit der "PWA/App" umgegangen werden soll.
Regelt Rahmen, teils Darstellung und besonders die behandlung als "app".
Sachen wie Icons, Bildschirmausrichtung, etc. werden hier festgelegt.

_Generator:_ [Web App Manifest Generator](https://tomitm.github.io/appmanifest/)

**Hinweis:** Dieser Inhalt ist noch in Arbeit und wird sich verändern!


Einbindung: ``<link rel="manifest" href="manifest.json">``

*minimum:*
*   [`short_name`or`name`](https://developers.google.com/web/fundamentals/web-app-manifest/#name)
*   [`icons`](https://developers.google.com/web/fundamentals/web-app-manifest/#icons)must include a 192px and a 512px sized icons
*   [`start_url`](https://developers.google.com/web/fundamentals/web-app-manifest/#start-url)
*   [`display`](https://developers.google.com/web/fundamentals/web-app-manifest/#display)must be one of:[`fullscreen`](https://developers.google.com/web/fundamentals/web-app-manifest/#display-params),[`standalone`](https://developers.google.com/web/fundamentals/web-app-manifest/#display-params), or[`minimal-ui`](https://developers.google.com/web/fundamentals/web-app-manifest/#display-params)

## Allgemeines

``"name" , "short_name"`` sind der Name und alternative Kurzform
``"description"`` ist eine kurze Beschreibung der App
``"theme_color", "background_color"`` beziehen sich auf die OS- und SplashScreenfarben
``"icons"`` array mit den verschiedenen Icons,etc.
Sicherheitshalber klassischer Fallback (<meta ...>) im Head
``"serviceworker"`` die Angabe stellt sicher das der SW auch bei der Installation läuft und nicht beim ersten start.
``"dir"`` ltr||rtl - Schreibrichtung
``"lang"`` Sprache bspw. de-DE.
``"share_target"`` sharing

_selten benötigt_
``"screenshots"`` array mit Screenshots
``"categories"`` für die auflistung in catalogs, etc
``"related_apps"`` falls eine _richtige_ App vorgeschlagen werden soll.
``"prefer_related_application"`` schlage die native App vor
``"iarc_rating_id"`` quasi wie FSK

### besondere Elemente

*Start URL /Scope*

```js
{
  "start_url": "/pwa/demo.html",
  "scope": "/pwa/" // rahmen in dem sich bewegt werden kann. andere urls werden geblockt
};
```

_._

*Display Mode*

```js
{
  "display": "standalone" //fullscreen, minimal-ui
};
```

-   "fullscreen" verbirgt steuerelemente des browsers und des OS. ...halt FULLscreen
-   "standalone" ist eher normales Appverhalten.
    Kein Browser aber Systemelemente (navbar/notifications, etc)
-   "minimal-ui" browser mit reduzierter ui
-   "browser" _normale_ Browserdarstellung.


kann im CSS mit ``@media all and (display-mode:standalone)`` angesprochen werden.

_._

*Screen Orientation*

```js
{
  "orientation": "portrait"
};
```

-   "any" beliebige Ausrichtung
-   "natural" natürliche Ausrichtung des Devices (mobil meist portrait)
-   "landscape", "portrait" quer oder hochkant (pri/sec automatisch)
-   "landscape-primary", "landscape-secondary" primary _normale_ ausrichtung
-   "portrait-primary", "portrait-secondary" secondary _auf-dem-kopf_ ausrichtung

kann auch über die ``Screen-Orientation API`` angesprochen werden.
```js
 screen.orientation.lock('portrait')
 screen.orientation.lock('landscape')
 screen.orientation.unlock()
```

kann im CSS mit ``@media all and (orientation:portrait)`` angesprochen werden.

_._

*Sharing*

```js
"share_target": {
      "action": "index.html",
      "params": {
        "title": "title",
        "text": "text",
        "url": "url"
      }
};
```

Icons etc sind wichtig dafür.
wenn sharing aktiv sollte sowas im head sein, hilft beim Sharing
```html
<meta name="twitter:card" content="summary_large_image">
<meta property="og:site_name" content="PWA - Progressive Web App With Workbox">
<meta name="twitter:creator" content="@rawsta">
<meta name="twitter:title" content="PWA - Progressive Web App Built With Workbox">
<meta name="twitter:description" content="Built With Workbox">
<meta name="twitter:image" content="https://url.tld/pwafireappbanner.gif">
<meta name="keywords" content="web, progressive web apps, pwa" />
<meta name="author" content="Maye Edwin" />
<!-- add facebook sharing meta data -->
<meta property="og:title" content="PWA Built With Workbox">
<meta property="og:site_name" content="PWA Built With Workbox">
<meta property="og:type" content="website">
<meta property="og:description" content="Progressive Web App Built With Workbox">
<meta property="og:image" content="./appbanner.gif">
<meta property="og:image:type" content="image/png" />
```




---
## Beispiele

*minimal beispiel*
```js
{
  "name": "Tolle Beispiel App",
  "description": "Beispielbeschreibung der PWA.",
  "short_name": "BeispielApp"
  "icons": [{
    "src": "images/icon.png",
    "sizes": "192x192"
  }]
}
```

*übliches beispiel*
```js
{
  "lang": "en",
  "dir": "ltr",
  "name": "Super Racer 3000",
  "description": "The ultimate futuristic racing game from the future!",
  "short_name": "Racer3K",
  "icons": [{
    "src": "icon/lowres.webp",
    "sizes": "64x64",
    "type": "image/webp"
  },{
    "src": "icon/lowres.png",
    "sizes": "64x64"
  }, {
    "src": "icon/hd_hi",
    "sizes": "128x128"
  }],
  "scope": "/racer/",
  "start_url": "/racer/start.html",
  "display": "fullscreen",
  "orientation": "landscape",
  "theme_color": "aliceblue",
  "background_color": "red",
  "serviceworker": {
    "src": "sw.js",
    "scope": "/racer/",
    "update_via_cache": "none"
  },
  "screenshots": [{
    "src": "screenshots/in-game-1x.jpg",
    "sizes": "640x480",
    "type": "image/jpeg"
  },{
    "src": "screenshots/in-game-2x.jpg",
    "sizes": "1280x920",
    "type": "image/jpeg"
  }]
}
```
