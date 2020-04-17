---
title: PHP und OpCache
date: 2019-04-17
cover: /assets/opcache-title.jpg
category: server
template: post
slug: php-und-opcache
tags:
    - php
    - opcache
    - server
---

# OpCache Einstellungen

**Hinweis:** Dieser Beitrag ist mehr als Platzhalter zu sehen. Bis ich den Blog endlich fertig habe!

## Einstieg
Ich bin auf die schöne Zusammenstellung/Erklärung von ["Steven Corona"](https://www.scalingphpbook.com/blog/2014/02/14/best-zend-opcache-settings.html) gestossen und habe bisher noch keine einfache Version auf Deutsch gefunden. Da ich selbst ewig lange gesucht habe, dachte ich mir vielleicht kann ich hiermit jemanden diese Arbeit ersparen.


*Das Angaben wie opcache.enable aktiv sein müssen, sollte klar sein.*

Hier also meine Version von Steve’s Erklärungen.

`opcache.revalidate_freq` -
Gibt an, wie oft (in Sekunden) der Code Cache erneuert werden soll. Der Cache wird ungültig und überprüft ob der Code sich geändert hat. 0 heisst in dem Fall, das bei jedem Aufruf der PHP code überprüft wird was sehr viele stat syscalls verursacht.  In der DEV Umgebung kann man das ruhig auf 0 setzen. In der PROD Umgebung ist das irrelevant, wegen der nächsten Einstellung

`opcache.validate_timestamps` -
Wenn dies aktiv ist, überprüft PHP nachdem die opcache.revalidate_freq abgelaufen ist.

Wenn es deaktiviert ist, wird die revalidate_freq ignoriert und PHP Dateien werden NIEMALS auf aktualisierungen überprüft. Also werden Änderungen erst übernommen, wenn PHP neugestartet wird (oder force reload mit kill -SIGUSR2)

Yes, this is a pain in the ass, but you should use it. Why? While you're updating or deplying code, new code files can get mixed with old ones— the results are unknown. It's unsafe as hell.

`opcache.max_accelerated_files` -
Gibt an wieviele PHP maximal im Speicher gehalten werden sollen. Hier solltet Ihr drauf achten das die Anzahl der Dateien in euren Projekten unterhalb dieses Wertes liegt.

*Mit `“find . -type f -print | grep php | wc -l”` könnt Ihr schnell die Anzahl der Dateien berechnen lassen.

Controls how many PHP files, at most, can be held in memory at once. It's important that your project has LESS FILES than whatever you set this at. My codebase has ~6000 files, so I use the prime number 7963 for maxacceleratedfiles.

`opcache.memory_consumption` -
Standart ist 64MB und dürfte für kleinere Sachen reichen.
Ich empfehle da 128MB _(bei sehr großen/gierigen Projekten 192MB)_

Mit der Funktion `opcachegetstatus()` könnt Ihr überprüfen wieviel opcache verbraucht und den Wert ggfs. anpassen. _(evtl. link zu steve erklärung)_



`opcache.interned_strings_buffer` -
Standart ist **4** für **4MB**. Da kann man entspannte **16(MB)** reinsetzen.
PHP nutzt sogenanntes “string interning” um die Leistung zu verbessern.
> _Als Beispiel:__
> Du hast 1000mal den string `“foobar”` in deinem Code. Intern speichert PHP `1 *immutable* Variable` für den Wert und für die anderen 999mal wird ein Pointer auf die Variable gesetzt.
> So weit, so cool… aber es geht noch besser.
> Anstatt einen Pool von diesen *immutable* strings für jeden php-fpm
> prozess, setzt diese Einstellung das für alle php-fpm prozesse.
> Spart Speicher und verbessert die Leistung. Besonders bei großen Anwendungen.

This setting takes it to the next level— instead of having a pool of these immutable string for each SINGLE php-fpm process, this setting shares it across ALL of your php-fpm processes. It saves memory and improves performance, especially in big applications.

`opcache.fast_shutdown` -

Another interesting setting with no useful documentation. "Allows for faster shutdown". Oh okay. Like that helps me. What this actually does is provide a faster mechanism for calling the deconstructors in your code at the end of a single request to speed up the response and recycle php workers so they're ready for the next incoming request faster. Set it to 1 and turn it on.

### TL;DR

in die php.ini einfach folgendes eintragen:
```ini
    opcache.revalidate_freq=0
    opcache.validate_timestamps=0 (comment this out in your dev environment)
    opcache.max_accelerated_files=7963
    opcache.memory_consumption=192
    opcache.interned_strings_buffer=16
    opcache.fast_shutdown=1
```

Diese Einstellungen sind natürlich nur ein Vorschlag. Wer z.B. Nextcloud betreibt, sollte `opcache.revalidate_freq` auf 1 setzen. _(link zum hinweis von nc)_

