# Frontend Project Challenges 

This repositery will record all the frontend projects from FrontendMentor with the diffculities ranging from `Newbie` to `Guru`.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Project Links](#project-links)
  
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge
My final goal is to tackle at least the `advanced` level project.


### Project Links

- [Challenge1: Order summary component](https://smallmacro.github.io/challenge1/)

- [Challenge2: Four Card Feature Section](https://smallmacro.github.io/challenge2/)

- [Challenge3: Time tracking dashboard challenge](https://smallmacro.github.io/challenge3/)


## My process
- `Newbie` projects purely with `html` and `css` completed.

- Simplely Load json data from local file and combine it with UIs.

- grap data from `github` API
### Built with
- Semantic HTML5 markup
- CSS custom properties(CSS Variables)
- Google Fonts
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned
-  11.3. The strategy on mobile-first or desktop=first depends on the similarities between the PC design and mobile. And the implementation of it in `challenge2` project really works well.

- 11.8 
  1. Safely munipulate the DOM by listening to the `DOMContenLoaded` event.

  2. Complete the basic ES6 syntax learning and use the `let` and  `arrow function`

  3. Load the json data through `fetch` function.

- 11.9  
  - ![Regular Expression](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) If condition is needed, then consider the alternation may complement the remaining constraints.

  Problem solved:
  ![Restrict Possible Usernames](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)

  ```javascript
  let username = "JackOfAllTrades";
  let userCheck = /^([a-zA-Z]{2,}|[a-zA-Z]+\d{2,})\d*$/; // Change this line
  let result = userCheck.test(username);
  console.log(result)
  ```
  
- 11.11
  1. Use the custom css variables to define the dark and light theme. 

  2. Still wonder  what is the better 
  practice to set break ponits associated to moble, tablet and desktop design.

  3. Parse a string to datetime format.
  ```javascript
    const date = new Date(2019, 0, 23, 17, 23, 42);
    date.toString() //gives you Wed Jan 23 2019 17:23:42 GMT+0800 (Singapore Standard Time)
    date.toDateString() // gives you Wed Jan 23 2019
    date.toLocaleString() // gives you 23/01/2019, 17:23:42
    date.toLocaleDateString() // gives you 23/01/2019
    date.toGMTString() // gives you Wed, 23 Jan 2019 09:23:42 GMT
    date.toUTCString()// gives you Wed, 23 Jan 2019 09:23:42 GMT
    date.toISOString()// gives you 2019-01-23T09:23:42.079Z
  ```

  4. Handling the http status code and defining specfic behavour are big challenges. By constructing new Promise with `resolve` parameter, `respone.ok`  and `respone.status` can delivered through this function.

  5. Destructuring assightment is really powerful.

  6. chorme has its own input autofill style. Below css code sovles part issue.
    ```css
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
        background-color: var(--theme-main-bg-color) !important;
        font-family: inherit;
        color: var(--theme-font-color);
        box-shadow: 0 0 0px 1000px var(--theme-main-bg-color) inset;
        transition: background-color 5000s ease-in-out 0s;
    }
    ```
### Continued development
-  `Junior` challenges 


### Useful resources

- [The State Of Mobile First and Desktop First](https://ishadeed.com/article/the-state-of-mobile-first-and-desktop-first/) - This article helps me figure out  how to make decision between the Moble-first and PC first workflow.

- [LICEcap](https://www.cockos.com/licecap/) - Great and simple screen recording app, really recommand it.

## Author

- [@smallmacro](https://github.com/smallmacro)




## Acknowledgments
- [Frontend Mentor](https://www.frontendmentor.io/)
