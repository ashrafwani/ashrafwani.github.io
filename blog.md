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
