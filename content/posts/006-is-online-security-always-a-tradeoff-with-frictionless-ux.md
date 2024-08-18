---
title: 'Is online security always a tradeoff with frictionless UX?'
date: '2024-08-18'
image: '006-is-online-security-always-a-tradeoff-with-frictionless-ux.jpg'
# to be written:
excerpt: "My recent online bank account was a pain to access every time I wanted to log in. It was probably dificult to hack. Should I be more grateful?"
isFeatured: true
---

I'm not an expert, or even that interested in cyber security. But I know it's important. 

I have read articles documenting the ongoing, changing threats that exists in our online and digital worlds. Some state sponsered, some not. All of it ugly and filled with malice. Or ruthlessly focused on making money no matter what the impact. Either way, buckle up and be ready because they're coming for all of us sooner or later. 

With this in mind, companies of all shapes and sizes know that they have a responsibility to design a safe and secure system for their business and for their customers. Single-sign-on (SSO) or multi-factor-authentication flows aim at making sure the person logging in is actually you. SSO also makes logging in easy on devices where you're signed in to that provider. That is an example of a win win scenrio for security and UX. We need more of those. 

![Angry with something showing on their laptop screen](angry-with-laptop.jpg)

## More room for UX improvements

Let me demonstrate my point
Like a staircase, progress in a given technology happens with gradual optimisations and steep, transformative breakthroughs, argues Tim Goodwin in his 2018 book, [Digital Darwinism: Survival of the fittest in the age of business disruption](https://uk.virginmoney.com/) part one. 

It's a beautiful analogy and I think it can be applied to the development of any industry, technology or process. Web development is no exception. In fact software development have a versioning method that demonstrates this for me: vx.x.x. Think of the transformative breakthroughs as 'major versions'. v1, v2, v3. The gradual optimisations, as you might imagine, are the minor updates and patches. v2.5.4, v2.5.5, v2.5.6 and so on. 



Generative AI technology such as Open AI's Chat GPT was transformative for the way people find answers online by changing the technology behind search engines. We've got years of optimisations of this technology ahead. 

At a more macro level Tim Goodwin talks of new technologies and their transformative potential not being fully exploited and realised when discovered. They're bolted onto existing ways of working, as optimisations. It takes a bolder vision from a small and agile startup, to create transformations using new technology at its core. 

Uber doesn't own any taxis, Airbnb any hotels nor Facebook any media outlets. These companies transformed the industries they now dominate thanks to business models that were very different to their established competitors. 

We still have desktops, files and folders on our devices. Perhaps this is another example of bolting onto the workflows of white collor clerks the as-of-now underutilised breakthroughs that personal computers might allow. 

And then there's quantum computing...



The user experience of some web sites certainly make me feel like we're in the infancy of this technology. Passwords hidden in a diary and account IDs on paper communications strike me as two examples of how computers have augmented the analogue. We've got a crappy hybrid UX at this point in time. Room for improvement that can't wait for the major changes. 

I've spent too much time filling in tiny input boxes on my phone, the screen a few inches from my face to make sure there's not a typo, only to find a vague error message and all of the input fields wiped blank on submit. Please oh please only reset the inputs when it's a successful submit!

I demo this on [the 'Contact me' form of my portfolio site](https://tim-cavey-portfolio.vercel.app/#contact), with: 

```js

  useEffect(() => {
    if(submitStatus === "success") {
      nameInputRef.current!.value = "";
      emailInputRef.current!.value = "";
      messageInputRef.current!.value = "";
      newsletterInputRef.current!.checked = false;
    }
    return;
  }, [submitStatus])

```

I'm also making it clear to the user when the form is being submitted and loading, when it's successful and when there's an error. Designed so that the error that gets sent from the server can reach the end user, in case it helps them to know the next best steps to take:

```js

  return (
    <div className={classes.notificationContainer}>
      <div className={classes.flexContainer}>
        <h3>{notificationData.status} </h3>
        {notificationData.status === "Sending" && <Spinner animation="grow" variant="light" />}
        {notificationData.status === "Success!" && <div className={classes.iconContainer}><Image width={50} height={50} src={tickIcon} alt="Success"/></div>}
        {notificationData.status === "Error" && <div className={classes.iconContainer}><Image width={50} height={50} src={crossIcon} alt="Error"/></div>}
        {notificationData.message && <p>{notificationData.message}</p>}
      </div>
    </div>
  );

```

Designing a good user experience for a web contact form isn't going to change the world. If it falls into any category of progress, it would be at the minor-changes and patch level. That's OK. 

There's only a little room for further improvement in web forms. Go after it with all you've got like it's survival of the fittest. Or take a step back and design a whole new way...