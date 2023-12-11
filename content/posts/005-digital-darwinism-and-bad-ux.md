---
title: 'Digital Darwinism and Bad UX'
date: '2023-12-12'
image: 005-digital-darwinism-and-bad-ux-cover.jpg
excerpt: Tim Goodwin's Digital Darwinism writes of our current online ecosystem as something in its infancy, destined for fundamental change. Some terrible UX supports this.
isFeatured: true
---

The Dunning Kruger effect is a cognitive bias in which individuals with low abilities or knowledge in a specific field tend to overestimate their competence, while those with higher abilities or expertise may do the opposite.  [There's a great summary on Ted-Ex's YouTube here](https://youtu.be/pOLmD_WVY-E?si=F7eY9F4_9lPUtqh-).

It's the phenomenon where less skilled individuals often believe they are more skilled than they actually are, with heightened self-confidence but a lack of self-awareness, resulting in poor decision-making. This is why the process of learning to drive a vehicle is strictly guided and new starters to a company should have comprehensive inductions and ample support early on.

Here's the gist:

![The Dunning Kruger Effect](dunning-kruger-effect.svg)

To illustrate this self-perception roller coaster, I can relate it to my journey of learning JavaScript, specifically focusing on JavaScript functions.


## Functions: The Doers of JavaScript

My initial exposure to JavaScript functions was through ES6 arrow function syntax. The "=>" symbol signified a function that performed actions – it seemed simple.

```js

const exampleFunction = (parameter) => {
    console.log(parameter, this)
}

```

But there was more too it. Only after months of writing and reading JavaScript functions would that slowly reveal itself. Bit by bit, usually in the form of confusion and uncertainy. 

For instance, I now understand that the exampleFunction above is a variable expression pointing to an anonymous arrow function. Another way to define such a function would be:

```js

const exampleFunction = function (parameter) {
    console.log(parameter, this)
}

```

This is an anonymous function declaration stored as a variable expression, with different context for 'this' within that function. Another example is a function declaration:


```js

function exampleFunction (parameter) {
    console.log(parameter, this)
}

```

Not only does the context of 'this' differ from the initial arrow function, but this function name is hoisted at runtime, allowing the function declaration to be placed anywhere in the file, unlike the first two examples.

Yet another way to write an anonymous arrow function avoids the variable expression:

```js

const exampleFunction = function (parameter) {
    return () => console.log(parameter, this)
}

```

And so on...

## The Unknown Unknowns

When embarking on the journey of learning functions, it might have been the right approach to avoid diving into all the different methods and implications of writing functions comprehensively. Getting bogged down in implementation details can be counterproductive, diverting focus from grasping the core concept and its practical application.

It's perfectly acceptable for a newcomer to a subject to be unaware of the extent of what they don't know. In fact, it might be a necessary part of the learning process, allowing learners to remain largely oblivious initially and gradually revealing the nuances of the subject over time.

As the Dunning and Krugger effect shows, the learner responds to the realisation of how little they know and how much there is to learn with a sense of incompetence. The 'valley of despaire'. Perhaps learning structures should make this decline into the valley a gentle slope, to avoid any trips and tumbles that might bring the whole journey to an end. 

## Embracing a Growth Mindset

I firmly believe that adopting a 'growth mindset' can help individuals respond to drops in confidence that come with an awareness of incompetence. I find it empowering to acknowledge that I know very little about the complex world we live in, making each opportunity to learn and grow an exciting one. I try not to become defensive about my ignorance; instead, it makes it easier for me to acknowledge and celebrate small victories as I intentionally seize opportunities to enhance my understanding every day.

A person with a growth mindset embraces ignorance as a stepping stone to knowledge, rather than shying away from it or confusing ignorance with enlightenment. 

People with a growth mindset may not be immune to the Dunning Kruger effect, but their relationship between confidence and competence tends to be more linear, with fewer spikes and a shorter time horizon.