---
title: "Helpful HTML"
date: 2020-02-01
cover: /assets/sample1-title.jpg
template: snippet
category: html
slug: helpful-html
tags:
    - html
    - helps
---

# Helpful HTML

Bad puns for all

```css
.ninja {
    visibility: hidden;
}
```

### Formularvalidierung

```html
<form>
  <!-- Case insensitive binary choice -->
  <label for="item1">Would you prefer a banana or a cherry?</label>
  <input id="item1" pattern="[Bb]anana|[Cc]herry">

  <!-- Email validation -->
  <label for="item2">What's your e-mail?</label>
  <input id="item2" type="email" name="email">

  <!-- Max length validation -->
  <label for="item3">Leave a short message</label>
  <textarea id="item3" name="msg" maxlength="140" rows="5"></textarea>

  <!-- Numeric + Symbol pattern as required field -->
  <label for="item4">Phone Number (format: xxxx-xxx-xxxx):</label><br/>
  <input id="item4" type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required >

  <button>Abschicken</button>
</form>
```
