---
title: 'Codecademy Career Path Advantages'
date: '2023-11-02'
image: codecademy-career-path-advantages-main.jpg
excerpt: University courses are structured by the experts. It's a good appoach to outsource your learning roadmap.
isFeatured: true
---

I always remember that brown bear web page that looked like it was from the 90s.

I took an HTML course provided by [Codecademy](https://www.codecademy.com/), a popular online platform that offers interactive coding courses. The course introduced the core concepts of HTML and CSS, including a pretend web page all about bears.

I finished the course and moved on. JavaScript, along with everything else, remained an unknown unknown.

Some time later, I secured a promotion at work, which saw me take on responsibility for a high-traffic online community forum site. It was built and maintained by a software company through a software-as-a-service arrangement. They didn't need me as a developer, but I felt the need to take a second look at that brown bear web page.

![A brown bear](brown-bear.jpg)

## Codecademy Front-End Career Path

They offered more than an HTML and CSS course. They offered 'career paths.' It's a fancy name, but it consisted of several modules on a range of subjects that someone would need to know for a career in that area. 'Back end' and 'Full stack' were the other options. I stuck with the bears.

The HTML and CSS course modules were included in the career path package. I was grateful for the chance to revise it. The platform even remembered my place in each module, which, as you might imagine, tended to be the final section of every module.

## Would I recommend it?

Yes. It or something like it.

Looking back now, I'm grateful I had a structured learning journey. Being self-taught doesn't mean you have to build the curriculum. It just means you have to be honest when you mark your own work. The range of subjects and lessons was extensive. It was designed like how I imagine a coding boot camp would be, perhaps just a bit less intense and more steady.

## A comprehensive structure

It had the obvious HTML, CSS, the fundamentals of web design, JavaScript was a significant section. It also included things that might not have been obvious to a novice to learn but which are part of a common front-end web developer's workflow:

- VSCode
- Git/Github
- Browser dev tools
- Testing

It covered JavaScript libraries: React and Redux. It discussed and got us practicing coding with data structures and algorithms. I was starting to miss how simple that bears web page was. Do you recognise this classic algorithm:

```js

function sieveOfEratosthenes(limit) {
  // Create an array to track prime numbers, initialize with true
  const isPrime = Array(limit + 1).fill(true);

  // 0 and 1 are not prime, so mark them as false
  isPrime[0] = isPrime[1] = false;

  // Start with the first prime number, 2
  for (let number = 2; number * number <= limit; number++) {
    // If isPrime[number] is still true, it's a prime number
    if (isPrime[number]) {
      // Mark all multiples of the prime number as not prime
      for (let multiple = number * number; multiple <= limit; multiple += number) {
        isPrime[multiple] = false;
      }
    }
  }

  // Collect the prime numbers into an array
  const primes = [];
  for (let number = 2; number <= limit; number++) {
    if (isPrime[number]) {
      primes.push(number);
    }
  }

  return primes;
}
```

It didn't stop at coding. Compotence and technical interview questions, CV writing, the list goes on. The course structure had an aim, and that aim was to make me employable as a front-end web developer.

## Learning and Applying

The Codecademy user interface is remarkably impressive. It recreates a development environment seamlessly within your web browser, complete with a virtual browser window alongside informative text and animated, step-by-step instructions. 

This setup encouraged me to read and immediately apply what I'd learned in bite-sized portions. At the end of each module, there was a practice project (available to paid members only) – one last opportunity to reinforce my newfound knowledge before moving forward.

## Balancing Learning and Application

Perhaps my primary critique lies in the Codecademy career path's structure, which limited opportunities for hands-on practice in real-world scenarios. I learned, I executed, and perhaps revisited, but the integration of new skills by building comprehensive projects was infrequent.

I've come to appreciate the perpetual learning process in the tech world and the vital need to implement new skills after each encounter with a library, language, or framework. Now, my year is divided into weeks or months dedicated to learning and applying what I've newly acquired, an approach that has helped rectify misunderstandings and forgotten details through practical projects.

## Grateful for the Journey

As I reflect on my initial HTML course and the humble brown bears' web page, I now view it with a sense of fondness and, perhaps, a tinge of regret that it didn't initially ignite my continuous learning journey. 

It took a work promotion to rekindle my interest, but I'm genuinely grateful that it did.

Thanks [Codecademy](https://www.codecademy.com/).






