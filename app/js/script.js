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
const nextBtn = document.querySelector('.nextBtn')
let currentImg = 1

// ! Functions for image slide
prevBtn.addEventListener('click', () => {
    currentImg--
    currentImg < 1 ? currentImg = 4 : null
    renderImg()
})

nextBtn.addEventListener('click', () => {
    currentImg++
    currentImg > 4 ? currentImg = 1 : null
    renderImg()
})

let renderImg = () => {
    img.src = `./images/image-product-${currentImg}.jpg`
}


// ! Desktop lightbox gallery variables
const mainImgCtn = document.querySelector('.topImgCtn')
const mainImg = mainImgCtn.firstElementChild
const thumbnailImgs = Array.from(document.querySelectorAll('.thumImg__ctn'))
let activeImg;
let LBactiveImg;

const lightboxModal = document.querySelector('.modal')
let closeLBmodalBtn = document.querySelector('#closeModal')
const LbMainImg = document.querySelector('#LbMainImg')
const LBthumnailImgs = Array.from(document.querySelectorAll('.modalThumImg__ctn'))
const nextBtnLB = document.querySelector('.modalNextBtn')
const prevBtnLB = document.querySelector('.modalPrevBtn')
let currentImgLB = 1
let closeLBelems = [closeLBmodalBtn, overlay]


// ! Img gallery function
thumbnailImgs.forEach(img => {
    img.classList.contains('active') && (activeImg = img)
    img.addEventListener('click', () => {
        const innerImgSrc = img.firstElementChild.src
        const mainImgSrc = innerImgSrc.split('-').filter(word => word !== 'thumbnail.jpg').join('-')
        mainImg.src = `${mainImgSrc}.jpg`   
        img.classList.add('active')
        activeImg.classList.remove('active')
        activeImg = img
    })
}) 


// ! Lightbox modal functions
let openLBmodal = () => {
    lightboxModal.classList.remove('invisible')
    overlay.classList.remove('invisible')
    body.classList.add('no-scroll')


    LBthumnailImgs.forEach(img => {
        img.classList.contains('active') && (LBactiveImg = img)
        img.addEventListener('click', () => {
            const innerImgSrc = img.firstElementChild.src
            const mainImgSrc = innerImgSrc.split('-').filter(word => word !== 'thumbnail.jpg').join('-')
            LbMainImg.src = `${mainImgSrc}.jpg`   
            img.classList.add('active')
            LBactiveImg.classList.remove('active')
            LBactiveImg = img
        })
    }) 
}

let closeLBmodal = () => {
    lightboxModal.classList.add('invisible')
    overlay.classList.add('invisible')
    body.classList.remove('no-scroll')

    LBthumnailImgs.forEach(img => {
        img.classList.remove('active')
    })
}

mainImgCtn.addEventListener('click', (e) => {
    openLBmodal()
    const localhost = e.target.src.includes('http://localhost:3000')
    
    const selectedImg = localhost ? e.target.src.split('http://localhost:3000').filter(el => el !== '').join('') : e.target.src
    const imgID = selectedImg.split('').map(el => Number(el)).filter(number => !isNaN(number)).join('')
    currentImgLB = imgID
    let matchingTN = LBthumnailImgs.at(imgID - 1)
    matchingTN.classList.add('active')
    LbMainImg.src = selectedImg
    LBactiveImg = matchingTN
})

closeLBelems.forEach(el => {
    el.addEventListener('click', () => {
        closeLBmodal()
    })
})

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

let renderImgLB = () => {
    const localhost = LBthumnailImgs.find( tn => tn.firstElementChild.src.includes('http://localhost:3000'))
    LbMainImg.src = `./images/image-product-${currentImgLB}.jpg`

    LBactiveImg.classList.remove('active')
    let currTN = LBthumnailImgs.find(tn => localhost ? tn.firstElementChild.src.split('http://localhost:3000').filter(el => el !== '').join('').includes(currentImgLB) : tn.firstElementChild.src.includes(currentImgLB))
    currTN.classList.add('active')
    LBactiveImg = currTN
}