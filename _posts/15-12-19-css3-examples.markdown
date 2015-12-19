---
layout: post
title:  "CSS3 Examples"
date:   2015-12-19 06:31:50
categories: Design
---

<html>

<header>
    <h2>Real-World CSS</h2>
    
    <div>
        <p>If you're reading this, the chances are you&rsquo;ve seen some of the <a href="http://tjrus.com/iphone">amazing things</a> <a href="/articles/photoshop">that have</a> <a href="http://www.optimum7.com/css3-man/">been</a> <a href="http://anthonycalzadilla.com/css3-ATAT/index.html">done</a> <a href="http://www.romancortes.com/blog/pure-css-coke-can/">in</a> <a href="http://css-tricks.com/examples/CSS3Clock/">CSS3</a>. Unfortunately, most of them aren&rsquo;t practical for you, or your clients.</p>
        <p>No longer, I say!</p>
        <p>Below is a carefully-curated list of real-world examples and snippets of CSS3 that can be safely used to enhance any piece of work you create.</p>
        </p>
    </div>
</header>

<ol>
    <li>
        <h2>Recreating the <code>&lt;blink&gt;</code> tag</h2>
        <p>This was, by far, the best tag in HTML. Unfortunately, it got dropped due to its lack of semantics. Well, it&rsquo;s back.</p>
        
        <h3>Browser support</h3>
        <small>IE10+, Firefox 5+, Chrome, Safari 4+</small>
        
        <div class="preview">
            <p>This is some <span class="blink">blinking</span> text.</p>
        </div>
        
        <pre class="source-code php"><span class="preprocessor">This is some <span class="tag">&lt;<span class="keyword">span</span> <span class="keyword type">class</span>=<span class="string">"blink"</span>&gt;</span>blinking<span class="tag">&lt;/<span class="keyword">span</span>&gt;</span> text.</span></pre>    </li>

    <li>
        <h2>Recreating the <code>&lt;marquee&gt;</code> tag</h2>
        <p>You know when I said that <code>&lt;blink&gt;</code> was the best tag? Well, I lied. Presenting: a valid CSS3 marquee, just like 1999 ordered.</p>
        
        <h3>Browser support</h3>
        <small>IE10+, Firefox 5+, Chrome, Safari 4+</small>
        
        <div class="preview">
            <div class="marquee" style="width: 380px;">
                <div>
                    <span>You spin me right round, baby. Like a record, baby.</span>
                    <span>You spin me right round, baby. Like a record, baby.</span>
                </div>
            </div>
        </div>
        
        <pre class="source-code php"><span class="preprocessor"><span class="tag">&lt;<span class="keyword">div</span> <span class="keyword type">class</span>=<span class="string">"marquee"</span> <span class="keyword type">style</span>=<span class="string">"width: 380px;"</span>&gt;</span><span class="tag">&lt;<span class="keyword">p</span>&gt;</span><span class="tag">&lt;<span class="keyword">span</span>&gt;</span>You spin me right round, baby. Like a record, baby.<span class="tag">&lt;/<span class="keyword">span</span>&gt;</span><span class="tag">&lt;<span class="keyword">span</span>&gt;</span>You spin me right round, baby. Like a record, baby.<span class="tag">&lt;/<span class="keyword">span</span>&gt;</span><span class="tag">&lt;/<span class="keyword">p</span>&gt;</span><span class="tag">&lt;/<span class="keyword">div</span>&gt;</span></span></pre>    </li>
    
    <li>
        <h2>Peekaboo!</h2>
        <p>Is your client not listening to any of your opinions, is throwing a tantrum when it comes to the invoice, or is generally acting like a toddler? They might be a toddler. If so, this will help.</p>
        
        <h3>Browser support</h3>
        <small>IE7+, Firefox 3+, Opera, Chrome, Safari 3+</small>
        
        <div class="preview">
            <p class="peekaboo">I see you!</p>
        </div>
        
        <pre class="source-code php"><span class="preprocessor"><span class="tag">&lt;<span class="keyword">p</span> <span class="keyword type">class</span>=<span class="string">"peekaboo"</span>&gt;</span>I see you!<span class="tag">&lt;/<span class="keyword">p</span>&gt;</span></span></pre>    </li>    

    <li>
        <h2>Wibble-Wobble</h2>
        <p>Got a fidgety client, who makes lots of <em>stinging</em> remarks? They&rsquo;ll <em>bee</em> happy when their page wobbles, then.</p>
        
        <h3>Browser support</h3>
        <small>IE9+, Firefox 4+, Chrome, Safari 4+</small>
        
        <div class="preview">
            The 2<sup>nd</sup> man to walk on the moon was <span class="wobble">Buzz</span> Aldrin.
        </div>
        
        <pre class="source-code php"><span class="preprocessor">The 2nd man to walk on the moon was <span class="tag">&lt;<span class="keyword">span</span> <span class="keyword type">class</span>=<span class="string">"wobble"</span>&gt;</span>Buzz<span class="tag">&lt;/<span class="keyword">span</span>&gt;</span> Aldrin.</span></pre>    </li>    

    <li>
        <h2>The Third Degree</h2>
        <p>It won&rsquo;t take too much detective work to find this handy little snippet.</p>
        
        <h3>Browser support</h3>
        <small>IE9+, Firefox 4+, Opera, Chrome, Safari 4+</small>
        
        <div class="preview">
            <span class="third-degree">Something&rsquo;s not quite level here.</span>
        </div>
        
        <pre class="source-code php"><span class="preprocessor"><span class="tag">&lt;<span class="keyword">span</span> <span class="keyword type">class</span>=<span class="string">"third-degree"</span>&gt;</span>Something<span class="escaped">&amp;rsquo;</span>s not quite level here.<span class="tag">&lt;/<span class="keyword">span</span>&gt;</span></span></pre>    </li>    

    <li>
        <h2>WordArt</h2>
        <p>Finally, a standards-compliant way to unleash the best type in the world!</p>
        
        <h3>Browser support</h3>
        <small>Chrome, Safari 5+</small>
        
        <div class="preview">
            <h1 class="wordart" title="WordArt">WordArt</h1>
        </div>
        
        <pre class="source-code php"><span class="preprocessor"><span class="tag">&lt;<span class="keyword">h1</span> <span class="keyword type">class</span>=<span class="string">"wordart"</span> <span class="keyword type">title</span>=<span class="string">"WordArt!"</span>&gt;</span>WordArt!<span class="tag">&lt;/<span class="keyword">h1</span>&gt;</span></span></pre>    </li>

    <li>
        <h2>Nausea</h2>
        <p>Remember spinning on roundabouts as a kid? I hated &lsquo;em. After seeing this, hopefully you will too!</p>
        
        <h3>Browser support</h3>
        <small>IE9+, Firefox 4+, Chrome, Safari 4+</small>
        
        <div class="preview" style="padding-top: 60px; text-align: center;">
            <span class="nausea">Woah-oah-oah!</span>
        </div>
        
        <pre class="source-code php"><span class="preprocessor"><span class="tag">&lt;<span class="keyword">span</span> <span class="keyword type">class</span>=<span class="string">"nausea"</span>&gt;</span>Woah-oah-oah!<span class="tag">&lt;/<span class="keyword">span</span>&gt;</span></span></pre>    </li>
    
    <li>
        <h2>The Perfect Typography</h2>
        <p>Why bother choosing a font, when you know what you <em>and</em> your client wants?</p>
        
        <h3>Browser support</h3>
        <small>IE5+, Firefox, Opera, Chrome, Safari</small>
        
        <div class="preview">
            <p class="perfect">It&rsquo;s perfect!</p>
        </div>
        
        <pre class="source-code php"><span class="preprocessor"><span class="tag">&lt;<span class="keyword">p</span> <span class="keyword type">class</span>=<span class="string">"perfect"</span>&gt;</span>It's perfect!<span class="tag">&lt;/<span class="keyword">p</span>&gt;</span></span></pre>    </li>
</ol>

</html>
