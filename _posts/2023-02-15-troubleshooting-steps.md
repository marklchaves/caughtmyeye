---
title: Troubleshooting Steps
date: 2022-02-15
description: "General steps for troubleshooting a website."
categories:
  - webdev
tags:
  - troubleshooting
  - problemsolving
  - wordpress
header:
  teaser: /assets/images/blog/bali-ubud-pasar-jalan2-cowok2-sepeda-motor-300w.webp
  overlay_image: /assets/images/blog/bali-ubud-pasar-jalan2-cowok2-sepeda-motor-1280w.webp
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "everyday bali by mark l chaves"
swiper: false;
blog: true;
excerpt_separator: <!--more-->
---

You might need to go back and repeat a step more than once. For example, you can be on step 3 and need to go back to step 1 to ask more questions and update the problem description.

## The Steps

1. Understand what the customer is asking. <a href="#step-1">#</a>
2. If needed, sync your understanding of the problem with the customer.
3. Reproduce the problem as soon as possible.
4. Write down your _educated_ guesses (hypotheses) about what's causing the problem.
5. Rule out your guesses until you find out which one is causing the problem.
6. Test your fix or workaround.
7. Write down what you've done so far.

<!--more-->

<a id="step-1"></a>
## Step 1) Understand what the customer is asking.

You should be able to write down the best description of the problem. What the customer is asking isn't always what the customer emails to you. You need a sixth sense to read between the lines and ask precise questions.

**Skills you need**:

- Listening
- Reading
- Analyzing
- Asking questions
- Interpreting what the customer tells you (reading between the lines)

**What we need to know**:

- Where is the problem happening
- What's happening
- What should be happening
- The steps to make the problem happen (reproduce the issue) 
- As many symptoms like errors and _weirdness_

### Depending on what you know so far, do either step 2 or 3 next

---

## Step 2) If needed, sync your understanding of the problem with the customer. 

---

## Step 3) Reproduce the problem as soon as possible.

**Prerequisites**:

- Where the original problem is happening and how to reproduce it (stuff from step 1).
- Access to a dev, test, or staging copy of the customer's site.
- Or, access to a site you can create a [reprex](https://stackoverflow.com/help/minimal-reproducible-example) of the issue.

**Skills you need**:

- [Occam's Razor](https://en.wikipedia.org/wiki/Occam%27s_razor) (keeping things simple)
- Making a minimal reproducible example ([reprex](https://stackoverflow.com/help/minimal-reproducible-example))

## Step 4) Write down your educated guesses (hypotheses) about what's causing the problem.

---

## Step 5) Rule out each hypothesis until you find out which one is causing the problem.

By the end of this step, you might not know the exact root cause, but you are in an excellent place to test a fix or workaround.

Take this example: On all of the admin pages, we see a notification message that tells us to click a button, but we don't see any.

- **Hypothesis 1**: Maybe there's a CSS conflict. The button element is there, but some CSS rule is blocking it.
- **Hypothesis 2**: There's a code conflict. Some 3rd-party code is clashing with the code that's supposed to generate the HTML for the button element.
- **Hypothesis 3**: There could be a bug in the code that's supposed to display the button.

TO DO: narrowing down, pruning, and getting rid of things that don't contribute 

## Step 6) Test your fix or workaround.

---

## Step 7) Write down what you've done so far.

---

## References



---

## Credits

TBD

---