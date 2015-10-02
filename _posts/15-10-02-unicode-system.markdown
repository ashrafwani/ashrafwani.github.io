---
layout: post
title:  "Unicode System"
date:   2015-10-02 08:55:00
categories: Design
---

Unicode is a universal international standard character encoding that is capable of representing most of the world's written languages.

<h2>Why java uses Unicode System?</h2>

Before Unicode, there were many language standards:
<b>ASCII</b> (American Standard Code for Information Interchange) for the United States.
ISO 8859-1 for Western European Language.
KOI-8 for Russian.
GB18030 and BIG-5 for chinese, and so on.

This caused two problems:

A particular code value corresponds to different letters in the various language standards.
The encodings for languages with large character sets have variable length.Some common characters are encoded as single bytes, other require two or more byte.
To solve these problems, a new language standard was developed i.e. Unicode System.
In unicode, character holds 2 byte, so java also uses 2 byte for characters.

lowest value:\u0000
highest value:\uFFFF
