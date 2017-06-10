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
<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=288&l=ur1&category=amazonhomepage_2017&f=ifr&linkID=e967f6e96600883b0ee0db53980b2db7&t=ashrafwani-20&tracking_id=ashrafwani-20" width="320" height="50" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>

<!-- Flipkart Ads -->
<div data-WRID="WRID-149708497661973535" data-widgetType="staticBanner" data-responsive="yes" data-class="affiliateAdsByFlipkart" height="90" width="728"></div><script async src="//affiliate.flipkart.com/affiliate/widgets/FKAffiliateWidgets.js"></script>

<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-560ecd304a2437ec"></script> 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script type="text/javascript" src="http://arrow.scrolltotop.com/arrow79.js"></script>
<noscript>Not seeing a <a href="http://www.scrolltotop.com/">Scroll to Top Button</a>? Go to our FAQ page for more info.</noscript>
