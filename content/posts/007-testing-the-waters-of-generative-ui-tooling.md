---
title: 'Testing the Waters of Generative UI Tooling'
date: '2025-10-21'
image: 007-testing-the-waters-of-generative-ui-tooling.png
excerpt: "My two-week journey using Vercel v0, Gemini, and several AI design tools to create a functional Next.js game — and why coders aren't obsolete yet."
isFeatured: true
---

## Want to play the game? [Click here to check it out](https://battleships-commander-of-the-seas.vercel.app/)
## The Mission: Why AI?

The mission was straightforward: build a fun, visually engaging web version of Battleships while maximizing the use of free AI tools. As a self-taught, hobbyist developer, I aimed to put modern Large Language Models (LLMs) and popular generative design platforms to the test, exploring their true capabilities beyond the advertisements.

![A battle scene from an existing Battleships game](battleships-online-existing-game.png)

The mission was not to build something to be popular or to attract players. There are already a great free versions of Battleships you can play, such as [this one here](https://www.calculators.org/games/battleship/). 

## The Tech Stack & Gameplay

I chose a robust, yet straightforward front end approach for reliable deployment:

- Frontend: Next.js (React), Typescript
- Styling: Tailwind CSS 
- Deployment: Vercel

![File structure and code of the project](v0-code-screenshot.png)

The gameplay was intentionally simplified: 1 Battleship (5 squares, 4 hits to sink) and 4 Destroyers (1 square, 1 hit to sink). Crucially, the core game mechanics—ship placement, alternating turns, and victory conditions—had to be perfectly coded and work flawlessly.

## The Great AI Tool Showdown

My experience with the current generation of AI design tools was mixed but I never paid. Maybe the experience on offer would be dramatically different if I was a paying customer. For the free versions, many promised automated UI generation but quickly fell short of delivering exportable, usable, and maintainable code. I divided the field into three categories:

### A. The Disappointments (Uizard, Visily, Banani, Stitch)

This group was immediately frustrating. [Uizard](https://uizard.io/) and [Visily](https://www.visily.ai/) both had poor user experiences; Uizard hid its paywall, and Visily's chat functionality was broken.

![The user interface of a battleships game](unknown-game-ui.jpeg)

[Banani](https://www.banani.co/) provided designs that simply didn't match the prompt requirements. [Stitch with Google](https://stitch.withgoogle.com/) was quick, but only exported raw HTML, which was incompatible with my React stack. The takeaway here was simple: the free version of these tools are not ready for complex, functional application generation.

### B. The Paywalls and Black Boxes (UXMagic, Loveable, Bolt)

This group showed promise but hit immediate limitations.

![UX Magic battleships game design](uxmagic-designs.png)

[UXMagic](https://uxmagic.ai/) and Loveable generated functional previews but obscured the code behind paywalls or strict usage limits. Loveable's functionality was impressive, but its output was clearly aimed at non-coders - a "no-code" black box that was unsuitable for self-hosting or professional maintenance.

![Bolt battleships game design](bolt-design.png)

[Bolt](https://bolt.new/) required a chaotic signup and login process but eventually generated a seemingly full-stack app. However, its use of React/TypeScript and a separate database meant it would require significant re-writing to host on Vercel, not a simple copy-paste job.

![Loveable battleships game design](loveble-designs.png)

These tools proved that while AI can create complex apps, they aren't designed to give the code back to the developer easily.

### C. The Clear Winner: Vercel v0

[Vercel v0](https://v0.app/) was the unequivocal winner.

- It produced the best designs and the best functionality.
- Its code output was modern best-practice Next.js, React, and TypeScript.
- It offered direct GitHub integration, allowing me to easily manage versions and add custom files.

![The ship placement page of the game using v0](v0-bug-1.png)

V0 built 95% of the initial game structure and logic straight up, which was incredibly impressive. However, the experience was still a learning curve:

- Prompt Limits: I frequently used up my daily allowance. This wasn't due to simple mistakes but because the AI needed several attempts to fix bugs, highlighting a lack of internal testing of its own generated code.
- Agentic Changes: When I asked the AI to implement state preservation, it did so perfectly, but was willing to make sweeping, structural changes that wiped out my previous manual fixes. The lesson here is paramount: Get the tool to build the app end-to-end, then immediately take the reins yourself to finish the project without further agentic changes.

### The Developer's Reality: Debugging and Maintenance

V0 successfully generated the fantastic structure (the crucial "80%"), but the AI did not create a perfect application. My biggest challenges quickly shifted from coding to fixing code.

#### The Crucial Role of LLMs (Gemini)

Once my V0 prompts ran out, Google Gemini (Pro, thanks to my employer) became my effective co-pilot:

![A screenshot of a buggy ship placement page from v0](v0-bug-2.png)

- Pinpoint Debugging: Gemini proved effective at taking complex errors, narrowing down the issue's location, and pointing out logic flaws or necessary code improvements
- Code Explanation: Any generated code I copied over, Gemini was able to explain clearly, detailing its purpose and underlying logic. This helped me deeply understand the codebase and confidently identify necessary improvements.
- Asset Creation: Gemini assisted in generating and refining the required image assets for sea tiles and ships, though—similar to V0—refining the output required persistence and careful prompting. A final shout-out goes to remove.bg and GIMP for their excellent, free image editing tools that made the assets web-ready.

### Overall Verdict: The 80% Rule

My experience tells me that that AI design tools are not replacing developers yet, but they are dramatically accelerating development.

![A battle scene from the final version built using V0](v0-battle-scene.png)

- AI gets you 80% of the way there. V0 provided the foundation, the styling, and the best-practice file structure in about an hour. Without it, the project would have taken weeks of UI/UX design and boilerplate coding.
- A coder is still required. The remaining 20% - the bug fixing, the subtle CSS improvement, the custom game logic, and debugging conflicts - required over 30 hours of focused manual work. The final solution often involved using an LLM (Gemini) to guide a human coder (me) to the solution.
- This was the most complex app I’ve ever built. The final product is robust and enjoyable, something I would not have attempted two weeks ago.

The total experience was incredibly positive, and I am very impressed with the final application I built. Gemini also wrote this blog post completing the journey from inception to documentation. Plus I didn’t spend a penny! 

ps I loved most of the landing page designs:

![Unsued landing page with battleship guns](unused-landing-page-1.png) 

![Another unused landing page design from the control room of a ship](unused-landing-page-2.png) 

