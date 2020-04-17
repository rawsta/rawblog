---
title: "Pro TriCSS"
date: 2020-02-01
cover: /assets/bla.jpg
template: snippet
slug: pro-tricss
tags:
    - css
    - pro
---

# Pro TriCSS

Bad puns for all

```css
.ninja {
    visibility: hidden;
}
```
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

### Listen automatisch aufteilen

Listen automatisch mit Kommas separieren

```css
    ul > li:not(:last-child)::after {
        content: ",";
    }
```

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

### REM-Basis auf 10px stellen

Damit lässt sich die REM-Basis für z.B. Schriftarten setzen.<br />
 10px = 1rem

 ```css
html {
    font-size: 62.5%;
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

### Auswahl anpassen

Markierte Inhalte anpassen.

```css
::selection {
    background-color: #222;
    color: white;
}
::-moz-selection { background: #222;color: white; }
::-webkit-selection { background: #222;color: white; }
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
