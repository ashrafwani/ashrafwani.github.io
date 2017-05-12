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

<!-- Amazon Ads -->
<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=26&l=ur1&category=amazonhomepage_2017&f=ifr&linkID=0bbcdbc82f33859381c9c3490fc00768&t=ashrafwani-20&tracking_id=ashrafwani-20" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>

<!-- Amazon Mobile Popover -->
<script type="text/javascript">
    amzn_assoc_ad_type = "link_enhancement_widget";
    amzn_assoc_tracking_id = "ashrafwani-20";
    amzn_assoc_linkid = "a4452f44a4a494bf9e913a4058d5730b";
    amzn_assoc_placement = "";
    amzn_assoc_marketplace = "amazon";
    amzn_assoc_region = "US";
</script>
<script src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&MarketPlace=US"></script>

<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-560ecd304a2437ec"></script> 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="http://arrow.scrolltotop.com/arrow79.js"></script>
<noscript>Not seeing a <a href="http://www.scrolltotop.com/">Scroll to Top Button</a>? Go to our FAQ page for more info.</noscript>
