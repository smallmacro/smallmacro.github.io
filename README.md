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

- [Challenge4: GitHub user search app challenge](https://smallmacro.github.io/challenge4/)


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
  1. Safely manipulate the DOM by listening to the `DOMContenLoaded` event.

  2. Complete the basic ES6 syntax learning and use the `let` and  `arrow function`

  3. Load the json data through `fetch` function.

- 11.9  
  - [Regular Expression](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/) If condition is needed, then consider the alternation may complement the remaining constraints.

  Problem solved:
  [Restrict Possible Usernames](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/restrict-possible-usernames)

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

- 11.12
  `Array.splice(startIndex, amountToDelete, parameters to insert in the same index)` the Array which called this function also changed value.
  `Array.sort((a,b) => a-b)` return a sorted  ascending array,`(a,b) => a-b` is a compare function
  
  ```javascript
  //remove the duplicates in array  
  arr = arr.filter(function (value, index, array) { 
    return array.indexOf(value) === index;
  });
  // another method to get unique array item
  [...new Set(arr)]
  //The includes() method returns true if a string contains a specified string, otherwise false.includes() is case sensitive.
  ```

  `Object` dot notation vs bracket notation:


- 11.17
  `Array.from(iterator)`transfer a iterator into an Array.
  `String.fromCharCode(number)` turn a char code number into a character, while `str.charCodeAt()`return a character code. `A-Z`: `65-90`.
  To generate a Range(a,b) `Array`

  2.
  ```javascript
  //Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
  function smallestCommons(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let generated_arr = [];
    for(let i=min;i<= max; i++){
      generated_arr.push(i);
    }
    console.log(generated_arr);
    return generated_arr.reduce((acc,cur,index,array)=>{
      acc = findSmallCommon(acc,cur);
      return acc
    });
  }
  //欧几里德算法  通过先求最大公约数来求两数的最小公倍数
  function findSmallCommon(a, b){
    let divisor = Math.min(a,b);
    let dividend = Math.max(a,b);
    let reminder = dividend % divisor;
    let lcm;
    while(reminder !== 0){
      dividend = divisor;
      divisor = reminder;
      reminder = dividend % divisor;
    }
    lcm = divisor;
    return (a*b)/lcm;
  }


  ```

  Array.prototype.flat() or Array.prototype.flatMap() methods.：Flatten a nested array.

  ```javascript
  //recursive function to flat nested array

  function steamrollArray(arr){
    let init = [];
    let nested =  arr.filter(Array.isArray);
    let element = arr.filter(ele => !Array.isArray(ele));
    
    if(nested.length === 0){
      console.log("Get the element",element);
      return [].concat(element);
    }else{
      init = init.concat(element);
      nested.forEach(ele => {
        init = init.concat(steamrollArray(ele))
        
      })
      
      return init;
      
    }
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
