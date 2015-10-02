---
layout: post
title:  "Unicode System"
date:   2015-10-02 08:55:00
categories: Design
---

<div dir="ltr" style="text-align: left;" trbidi="on">
<table style="color: black; font-family: verdana, helvetica, arial, sans-serif; font-size: 13px; line-height: 23px;"><tbody>
<tr><td style="margin-left: 20px;">Unicode is a universal international standard character encoding that is capable of representing most of the world's written languages.</td></tr>
</tbody></table>
<h3 class="h3" style="color: #610b4b; font-family: erdana, helvetica, arial, sans-serif; font-size: 21px; font-weight: 400; line-height: 23px;">
Why java uses Unicode System?</h3>
<table style="color: black; font-family: verdana, helvetica, arial, sans-serif; font-size: 13px; line-height: 23px;"><tbody>
<tr><td style="margin-left: 20px;">Before Unicode, there were many language standards:</td></tr>
<tr><td style="margin-left: 20px;"><ul>
<li style="font-family: Verdana; line-height: 1.5; margin-top: 3px;"><b>ASCII</b>&nbsp;(American Standard Code for Information Interchange) for the United States.</li>
<li style="font-family: Verdana; line-height: 1.5; margin-top: 3px;"><b>ISO 8859-1</b>&nbsp;for Western European Language.</li>
<li style="font-family: Verdana; line-height: 1.5; margin-top: 3px;"><b>KOI-8</b>&nbsp;for Russian.</li>
<li style="font-family: Verdana; line-height: 1.5; margin-top: 3px;"><b>GB18030 and BIG-5</b>&nbsp;for chinese, and so on.</li>
</ul>
</td></tr>
</tbody></table>
<table style="color: black; font-family: verdana, helvetica, arial, sans-serif; font-size: 13px; line-height: 23px;"><tbody>
<tr><td style="margin-left: 20px;"><strong>This caused two problems:</strong><br />
<ol>
<li style="font-family: Verdana; line-height: 1.5; margin-top: 3px;">A particular code value corresponds to different letters in the various language standards.</li>
<li style="font-family: Verdana; line-height: 1.5; margin-top: 3px;">The encodings for languages with large character sets have variable length.Some common characters are encoded as single bytes, other require two or more byte.</li>
</ol>
</td></tr>
<tr><td style="margin-left: 20px;">To solve these problems, a new language standard was developed i.e. Unicode System.</td></tr>
<tr><td style="margin-left: 20px;">In unicode, character holds 2 byte, so java also uses 2 byte for characters.</td></tr>
<tr><td style="margin-left: 20px;"><strong>lowest value:</strong>\u0000</td></tr>
<tr><td style="margin-left: 20px;"><strong>highest value:</strong>\uFFFF</td></tr>
</tbody></table>
</div>
