// ! Variables for navbar togle
const body = document.querySelector('body')
const openNavBtn = document.querySelector('#openNav')
const overlay = document.querySelector('.overlay')
const mobileNav = document.querySelector('#mobileNav')
const navCloseBtn = document.querySelector('#closeNav')
const closeNavElems = [overlay, navCloseBtn]


// ! Navbar toggle function
let openNav = () => {
    overlay.classList.remove('invisible')
    mobileNav.classList.add('active')
    body.classList.add('no-scroll')
}

let closeNav = () => {
    overlay.classList.add('invisible')
    mobileNav.classList.remove('active')
    body.classList.remove('no-scroll')
}

openNavBtn.addEventListener('click', () => {
    openNav()
})

closeNavElems.forEach(el => {
    el.addEventListener('click', () => {
        closeNav()
    })
})



// ! Variables for image slide function
const img = document.querySelector('#slideImg')
const prevBtn = document.querySelector('.prevBtn')
const nexBtn = document.querySelector('.nextBtn')
let currentImg = 1

// ! Functions for image slide
prevBtn.addEventListener('click', () => {
    currentImg--
    currentImg < 1 ? currentImg = 4 : null
    renderImg()
})

nexBtn.addEventListener('click', () => {
    currentImg++
    currentImg > 4 ? currentImg = 1 : null
    renderImg()
})

let renderImg = () => {
    img.src = `./images/image-product-${currentImg}.jpg`
}
