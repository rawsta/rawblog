---
title: "Pro TriCSS"
date: 2020-02-01
cover: /assets/sample2-title.jpg
template: snippet
slug: pro-tricss
tags:
    - css
    - pro
---

# Pro TriCSS

```toc
# This code block gets replaced with the TOC
```


Bad puns for all

```css
.ninja {
    visibility: hidden;
}
```

## Struktur

Kleine Tricks die beim Aufbau einer Struktur helfen.

### Minimal CSS-Reset

Eine minimale CSS-Reset Variante

```css
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

### Lobotomized Owl Selector

Klingt komisch, ist aber genial. Alle Elemente des Dokuments, die auf andere Elemente folgen, laufen mit 'margin-bottom: 20px'.

```css
* + * {
  margin-top: 1.5em;
}
```
Mehr Informationen: [Heydon Pickering @ A List Apart](http://alistapart.com/article/axiomatic-css-and-lobotomized-owls)


---

## Typografie und Co.

Tricks die Schriften und Schriftdarstellung betreffen.
Inhalte, Links, Listen, Tabellen usw...

### REM-Basis auf 10px stellen

Damit lässt sich die REM-Basis für z.B. Schriftarten setzen.<br />
 10px = 1rem

```css
    html {
        font-size: 62.5%; /* entspricht ~10px */
    }
```

### Responsive REM-Basis

Alternativ kann man die Schriftgröße auch abhängig vom Viewport setzen lassen.

```css
    :root {
        font-size: calc(1vw + 1vh + .5vmin);
    }

    body {
        font: 1rem/1.6 sans-serif;
    }
```

### Listen automatisch aufteilen

Listen automatisch mit Kommas separieren

```css
    ul > li:not(:last-child)::after {
        content: ",";
    }
```

### Auswahl gestalten

Markierte Inhalte anpassen.

```css
    ::selection {
        background-color: #222;
        color: white;
    }
    ::-moz-selection {
        background-color: #222;
        color: white;
    }
    ::-webkit-selection {
        background-color: #222;
        color: white;
    }
```


### Allgemeine Links gestalten

Links die keine besonderen angaben haben, bekommen einen Standardstil.

```css
    a[href]:not([class]) {
        color: #008000;
        text-decoration: underline;
    }
```

### Leere Links mit Linkziel füllen

Wenn das `<a>`-tag leer ist, wird das Linkziel als Text genommen.

```css
    a[href^="http"]:empty::before {
        content: attr(href);
    }
```
Ist auch für `print` media queries sehr praktisch.


### Styling für Linktarget

Links auf Dateien automatisch mit Dateiicons versehen. **Benötigt FontAwesome oder Grafiken!**

```css

    a[href$=".pdf"]:before{ /* PDF Dateien */
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f1c1";
        margin-right: 5px;
    }

    a[href$=".rtf"]:before,
    a[href$=".txt"]:before{ /* Text Dateien */
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f15c";
        margin-right: 5px;
    }

    a[href$=".xlsx"]:before{ /* Excel Dateien */
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f1c3";
        margin-right: 5px;
    }

    a[href$=".doc"]:before,
    a[href$=".docx"]:before{ /* Word Dateien */
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        content: "\f1c2";
        margin-right: 5px;
    }

    a[href^="http://"] { /* external links ^starts with*/
        padding-right: 13px;
        background: url(external.gif) no-repeat center right;
    }


    a[href^="mailto:"] { /* emails *somewhere in it */
        padding-right: 20px;
        background: url(email.png) no-repeat center right;
    }

```

### Elemente in Spalten aufteilen

Mit etwas Flexbox Magic kann man einfach Elemente in Spalten aufteilen.

```css
.list {
    display: flex;
    justify-content: space-between;
}

.list .item {
    flex-basis: 24%;
}
```

### Gleichmäßige Tabellenzellen

Damit Tabellen gleichmäßig dargestellt werden.

```css
.calendar {
    table-layout: fixed;
}
```

---


## Bilder und Grafiken

Alles was den Umgang mit Bildern und Grafiken erleichtert.

### Vollbild Hintergrund

```css
    body {
        background-image: url(bg.jpg);
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
```
oder

```css
    html {
        background: url('images/bg.jpg') no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
```

### Kaputte Bilder absichern

Falls Bilder mal nicht vorhanden sind, wird wenigstens eine kleine Nachricht iengeblendet.

````css
    img {
        display: block;
        font-family: sans-serif;
        font-weight: 300;
        height: auto;
        line-height: 2;
        position: relative;
        text-align: center;
        width: 100%;
    }
    /* Pseudo-Element Magic */
    img::before {
        content: "Sorry, das Bild kann nicht angezeigt werden :(";
        display: block;
        margin-bottom: 10px;
    }

    img::after {
        content: "(url: " attr(src) ")";
        display: block;
        font-size: 12px;
    }

```
