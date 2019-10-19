---
title: Full Blog Post
cover: ./image.jpg
date: 2019-07-25
description: Here is a helpful excerpt or brief description of this blog post.
tags: ['post']
---

Back in early 2013, I was working at a small startup in San Francisco called Stitch Fix, alongside Adam Morse and a handful of others. We were designing and building out early versions of their marketing pages and some internal tools. I had the word designer in my title, and until that point in my career, I'd not shipped much production code for work. I learned Flash in college and taught myself HTML and CSS on the side over the years, using it for small side projects and design prototypes for user research, but had never used Git and knew next-to-nothing about JavaScript.

![image-in-post](./image-in-post.png)

We were both enamored by the work that people like Nicole Sullivan and Nicolas Gallagher were doing with Object-Oriented CSS and stealing lots of ideas for what we were working on.

```bash
bash command test
```

I learned Flash in college and taught myself HTML and CSS on the side over the years, using it for small side projects and design prototypes for user research, but had never used Git and knew next-to-nothing about JavaScript.

```js
const someFun = (text) => {
  console.log('some ' + text);
};
//
someFun('text');
//
```

After we left the company, I decided to move back to the east coast and work for Kickstarter.

![logo](/avatar.png)

In late 2013, I'd taken some of the ideas Adam and I were talking about at the time, and some of the problems we were working on at Kickstarter (involving a 1MB+ CSS bundle), and released the first version of Basscss. Around the same time, Adam released Tachyons. We both continued to develop each project separately and never landed on a common API for the two libraries.

Naming things is hard
In hindsight, I wish I'd pushed forward with Tachyons naming conventions, but at the time, I don't think my team would have gone for it. I had changed btn to button because the designers & developers I worked with prefered "human readable" naming conventions. There's nothing objectively more or less "human readable" between btn or button, but I do understand the concern and think it's valuable to side with the team your working with in situations like this. But there's no reason Basscss, as an open source library, had to adhere to the same conventions.

The real tragedy here in the divergent naming conventions is that if you've started building an application with Basscss, but then want to upgrade to something more fully-featured like Tachyons, you'll have to do a lot of manual work to migrate. Essentially, HTML templates written with either of these libraries isn't as portable as if we'd used a standard syntax, for example inline styles. Today's tools would make this a lot easier, using type checking, unit tests, and perhaps even AST parsing, but it would still create a barrier.

The interopability between these two libraries suffered because what they did, was different from how they did it.

Around the same time, Etsy adopted a similar approach with slightly different naming conventions, and as the years passed, so did BuzzFeed Solid, GitHub Primer, and Bootstrap – and now there are other open source libraries doing the same thing with, again, new naming conventions. I don't mean to call these projects out in a bad way – I think they took (what I think was) a good idea and made it work for their team.

Learning from the past
The paradigm of atomic/functional/utility CSS has passed. I don't think there are any problems left to solve in this space, and, in my opinion, Tachyons has done the best job at it. It's still a valid approach to styling an application, but if you're using a modern front-end stack with React, I wouldn't recommend using a CSS library like these to build out an application. Libraries like Styled Components and Emotion are tools much better suited to the job and will save you a lot of headache in the long run.
