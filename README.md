# Frontend Project Challenges

## Officelite coming soon site

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The Name and/or Email Address fields are empty
  - The Email Address is not formatted correctly
- Bonus: See a live countdown timer that ticks down every second
- Bonus: See a custom-styled select form control in the sign-up form

## Other Project Links

- [Challenge1: Order summary component](https://smallmacro.github.io/challenge1/)

- [Challenge2: Four Card Feature Section](https://smallmacro.github.io/challenge2/)

- [Challenge3: Time tracking dashboard challenge](https://smallmacro.github.io/challenge3/)

- [Challenge4: GitHub user search app challenge](https://smallmacro.github.io/challenge4/)

- [Challenge5: Officelite coming soon site](https://smallmacro.github.io/officelitecom/)

## Built with

- vite(React + Typescript)

  ```shell
  $ npm create vite@latest $project_name --template react-ts
  ```

- Tailwind Css
- React Router

### What I learned

`rafce` short cut to init a React functional component

```shell

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

#tailwindcss configuration
content: [ "./src/**/*.{js,jsx,ts,tsx}"]

#For the smallest possible production build, we recommend minifying your CSS with a tool like cssnano, and compressing your CSS with Brotli.
#If you’re using Tailwind CLI, you can minify your CSS by adding the --minify flag:
npx tailwindcss -o build.css --minify
```

`npm run build` run production use, but load a white page index with `css` and `js`file missing ;

- It turns out you need to set basename path in `react-router-dom` and also in `vite config file` when deploy it to a github repo. It seems a bit late to learn that github pages really enable user to put multiple project, though so far they are all pure static websites.

Question:

- background image position issues , can't put it in the right place.
- mix blend mode for display the button and the text color
  - fix it by using the `rgba(r,g,b, opcacity)`,seperate the text from background color
- calulate the sibling element's height and set its margin top to negative value
  - fix it by setting background image container to `position:absolute ` and its parent element to `position:relative`
- Pro plan background image position (same with sign up form background image)

  - `backgroud position` and `background size`

- How to set the text color(`span`) inside a `select` `option`

- form validation

  - Useful article :[How to type a React form onSubmit handler](https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/)

  ```javascript
  //custom interface for FormElements
  interface FormElements extends HTMLFormControlsCollection {
    name: HTMLInputElement,
    email: HTMLInputElement,
    plan: HTMLSelectElement,
    phoneNo: HTMLInputElement,
    company: HTMLInputElement,
  }

  interface CustomFormElements extends HTMLFormElement {
    readonly elements: FormElements
  }


  ```

  - simple email validation pattern: `/^\S+@\S+$/g`

  - Deploy to Github Pages with white loading index page - unsolve problem

## TO DO NEXT

- custom-styled select form control in the sign-up form
- live countdown timer

## One more thing

How is the efficient workflow when `tailwindcss` working with figma design draft

## Author

- [@smallmacro](https://github.com/smallmacro)

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/)
