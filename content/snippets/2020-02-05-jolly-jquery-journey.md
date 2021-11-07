---
title: "Jolly jQuery Journey"
date: 2020-02-05
cover: /assets/sample1-title.jpg
category: javascript
template: snippet
slug: jolly-jquery-journey
tags:
    - js
    - javascript
    - jquery
---

Da meine JavaScript/jQuery Skills noch relativ bescheiden sind, habe ich angefangen mir eine kleine Liste mit Tipps und Tricks anzulegen.
Da andere eventuell auch Probleme mit JavaScript haben könnten, dachte ich mir das ich meine Liste auch veröffentlichen kann.

### Prüfen ob jQuery geladen wurde

```js
if (typeof jQuery == 'undefined') {
    console.log('jQuery nicht gefunden');
} else {
    console.log('jQuery läuft!');
}
```

### Prüfen ob Element vorhanden ist

Es empfiehlt sich, erst zu prüfen ob das gewünschte Element auch vorhanden ist. Sonst kann es Fehler geben wenn das Element nicht vorhanden ist.

```js
if ($("#element").length) {
  //sachen machen mit dem element
}
```

### Prüfen ob Bilder geladen wurden

Wenn man bspw. eine Galerie schön gestalten will, ist es hilfreich zu warten bis alle Bilder geladen wurden.

```js
$('img').on('load', function () {
    console.log('Alle Bilder geladen');
});
```
## BEST PRACTISE

Manchmal geht es auch um den Stil...

### Besser `.on()` statt `.click()`

Statt dem `.click()` Binding oder ähnlichem kann man auch `.on()` nutzen. Das hat gleich mehrere Vorteile. Man kann direkt mehrere Events nutzen, das Binding wird auch direkt auf dynamisch erstellte Elemente und man kann auch _"namespaces"_ nutzen.

```js
.on('click tap hover') // mehrere events

.on('click.menuOpening') // Namespaces
// mit Namespaces kann man auch spezielle Events entfernen
.off('click.menuOpening') // andere Bindings bleiben unberührt

```

### Cache jQuery Selectors

Wenn man häufiger auf ein bestimmtes Element zugreifen muss, sollte man das Element _"cachen"_. Jedes mal wenn man ein Element sucht muss jQuery einmal durch den kompletten DOM wandern um alle Elenebte zu finden. Durch das Cachen der Position lässt sich die Performance etwas verbessern.

```js
// blocks cachen
var blocks = $('#blocks').find('li');

// blocks nutzen
$('#hideBlocks').on('click', function () {
    blocks.fadeOut();
});

$('#showBlocks').on('click', function () {
    blocks.fadeIn();
});

```

### Call Chaining

Wenn man mehrere Methodenaufrufe auf einem Element hat, lassen sich diese Aufrufe auch verketten. Dadurch muss auch nicht jedes mal durch den ganzen DOM gewandert werden.

```js
// SCHLECHT
$('#elem').show();
$('#elem').html('ping');
$('#elem').otherStuff();

// BESSER
$('#elem')
  .show()
  .html('ping')
  .otherStuff();
```


---

## ELEMENTE ERZEUGEN

### Easy Back To Top

Für einen einfachen _"Back to top"-Button_ braucht man keine speziellen Plugins oder sonstiges. jQuery bringt selsbt schon die `scrollTop` und `animate` Methoden mit. Damit lässt sich das leicht umsetzen.

```js
// Back to top
$('.container').on('click', '.back-to-top', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 700);
});
```

```html
<!-- Create an anchor tag -->
<div class="container">
  <a href="#" class="back-to-top">Back to top</a>
</div>
```

### Einfaches Akkordeon

```js
// alle Panels schließen
$('#akkordeon').find('.content').hide();

// Akkordeon
$('#akkordeon').find('.akkordeon-header').on('click', function () {
    var next = $(this).next();
    next.slideToggle('fast');
    $('.content').not(next).slideUp('fast');
    return false;
});
```

---

## FORMULARE

### Input/Button deaktivieren

Manchmal will man das der User z.B. erst die AGB akzeptiert oder ähnliches, bevor der User sich anmelden darf oder ähnliches.

```js
$('input[type="submit"]').prop('disabled', true);
// und Input wieder aktivieren
$('input[type="submit"]').prop('disabled', false);
```


---

## MAGIC

### Listeneinträge alphabetisch sortieren

Manchmal hat man wenig Einfluss auf die Erstellung einer Liste will jedoch doch eine sortierung drin haben.

```js
var ul = $('#list'),
lis = $('li', ul).get();

lis.sort(function (a, b) {
    return ($(a).text().toUpperCase() < $(b).text().toUpperCase()) ? -1 : 1;
});

ul.append(lis);
```
