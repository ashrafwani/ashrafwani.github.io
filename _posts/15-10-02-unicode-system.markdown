---
layout: post
title:  "Unicode System"
date:   2015-10-02 08:55:00
categories: Design
---

Unicode is a universal international standard character encoding that is capable of representing most of the world's written languages.

<h3>Why Java uses Unicode System?</h3>

Before Unicode, there were many language standards:

<b>ASCII</b> (American Standard Code for Information Interchange) for the United States.<br>
<b>ISO 8859-1</b> for Western European Language.<br>
<b>KOI-8</b> for Russian.<br>
<b>GB18030</b> and <b>BIG-5</b> for chinese, and so on.

This caused two problems:

A particular code value corresponds to different letters in the various language standards.
The encodings for languages with large character sets have variable length.Some common characters are encoded as single bytes, other require two or more byte.

To solve these problems, a new language standard was developed i.e. Unicode System.<br>
In unicode, character holds 2 byte, so java also uses 2 byte for characters.

<b>lowest value:\u0000</b><br>
<b>highest value:\uFFFF</b>
