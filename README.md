# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![](./images/Web%20capture_2-1-2023_195554_localhost.jpeg)


### Links

- Solution URL: [Frontend mentor challenge URL](https://www.frontendmentor.io/solutions/ecommerce-product-page-SHGcZFM3c1)
- Live Site URL: [Click to visit the live site](https://ecommerce-product-page-vic.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SCSS/SASS
- Gulp
- Tailwind CSS



### What I learned


Just proud of this dynamic scss mixin I creted for transition, it accepts a property parameter with a default of 'all'

```css
@mixin transition($prop: all) {
    transition: $prop .2s ease-in-out !important;
}
```

My first using the '&&' operator in place of the ternery operator or if/else
```js
prevBtnLB.addEventListener('click', () => {
    currentImgLB--
    currentImgLB < 1 && (currentImgLB = 4)
    renderImgLB()
})

nextBtnLB.addEventListener('click', () => {
    currentImgLB++
    currentImgLB > 4 && (currentImgLB = 1)
    renderImgLB()
})
```


### Continued development

Will try to master CSS animations


### Useful resources

Google



## Author
- Frontend Mentor - [@Nnadivictory25](https://www.frontendmentor.io/profile/Nnadivictory25)
- Twitter - [@nnvictory001](https://www.twitter.com/nnvictory001)


## Acknowledgments


Me and myself
