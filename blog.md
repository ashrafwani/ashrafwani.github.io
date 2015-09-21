---
layout: page
title: Blog
permalink: /blog/
---

<div class="blog">
    <ul>
        {% for post in site.posts %}
        <li>
            <a href="{{ post.url }}">{{ post.title }}</a>
            {{ post.excerpt }}
        </li>
        {% endfor %}
    </ul>
</div>

<script>
var linkwithin_site_id = 2409957;
</script>
<script src="http://www.linkwithin.com/widget.js"></script>
<a href="http://www.linkwithin.com/"><img src="http://www.linkwithin.com/pixel.png" alt="Related Posts Plugin for WordPress, Blogger..." style="border: 0" /></a>

[![Join the chat at https://gitter.im/ashrafwani/ashrafwani.github.io](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ashrafwani/ashrafwani.github.io?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

<iframe src="//www.facebook.com/plugins/follow?href=https%3A%2F%2Fwww.facebook.com%2Faashuvani&amp;layout=standard&amp;show_faces=true&amp;colorscheme=light&amp;width=450&amp;height=80" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" allowtransparency="true"></iframe>

<a class="twitter-follow-button"
  href="https://twitter.com/aashu_wani">
Follow</a>
