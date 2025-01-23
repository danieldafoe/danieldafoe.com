---
layout: post.njk
title: "write better skip link labels"
shareTitle: "Write better accessibility skip link labels"
teaser: "Yes, there's a best way to label your skip links."
date: 2024-03-18
tags: ['accessibility', 'copywriting']
---

<p class='intro'>
  Around the web, I sometimes see "Skip&nbsp;to&nbsp;main" as the visual label for skip links that take people to the main content of the page. This is problematic.
</p>

## The issue with "Skip to main"

Saying "Skip&nbsp;to&nbsp;main" isn't valuable to everyone. This is due to the technical nature of what a "main" even is. And no, it's not your go-to character in a video game.

What "main" refers to in the context of the web is the <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main'>HTML <code>&lt;main&gt;</code> element</a>. This element should contain the most relevant information of any given web page you visit.

Browsing a web page about available mortgage rates? The mortgage rate information should go inside the <code>&lt;main&gt;</code> element.

To put this back into context, we should never assume someone is familiar with web development jargon because they browse the web. People who [navigate by keyboard only](https://www.w3.org/WAI/people-use-web/user-stories/#reporter) or [use a switch device](https://www.24a11y.com/2018/i-used-a-switch-control-for-a-day/) are just as unlikely to know what an HTML <code>&lt;main&gt;</code> element is as anyone else.


## Which phrase is best?

<figure>
  <img src='https://preview.redd.it/in-snow-white-and-the-seven-dwarves-1937-the-symbols-v0-8a5gsqw2n7y91.jpg?auto=webp&s=4692986f0b131b490231df39a19ce6181f8ba2f0' alt='Evil Queen in black robe and gold crown standing before a large mirror' />
  <figcaption>Evil Sorceress from Snow White standing in front of the Magic Mirror.</figcaption>
</figure>

<p><em>Mirror, Mirror, on the wall, which is the clearest phrase of all?</em></p>

### Skip to main content

<strong>Judgment:</strong> Preferred.

This has no caveat or exceptions. This is by far the clearest of the presented options. The phrase "main content" makes this more understandable than other options.

### Skip navigation

<strong>Judgment:</strong> Acceptable.

<strong>Caveat:</strong> Only use this phrasing if what someone is skipping is really just navigation (i.e., items within a `<nav>` element). If anything other than navigation will be skipped—like search functionality—be very careful about this wording.


### Skip to content

<strong>Judgment:</strong> Avoid.

<strong>Rationale:</strong> Everything on your web page is content. How will someone know which content they're skipping to? If you tell them you're skipping to content, will they know that they missed other information?

### Skip to main

<strong>Judgment:</strong> Avoid.

<strong>Rationale:</strong> Again, saying someone will skip to "main" presumes they have knowledge of what a &lt;main&gt; is in the first place. This is too technical for everyone to understand.


## Recommendation

"Skip to main content" is the most understandable and the clearest call to action.

If you're in a position where you can implement a skip link but can't choose the content yourself, having a skip link is far better than not having one, so use the above phrase as a starting point.
