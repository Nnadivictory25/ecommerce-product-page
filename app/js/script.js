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

// * LB : LightBox

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
            let splitArr = mainImgSrc.split('-')
            currentImgLB = +splitArr.at(-1)
            LbMainImg.src = `${mainImgSrc}.jpg`   
            LBactiveImg.classList.remove('active')
            img.classList.add('active')
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


// ! Cart functionality variables & function
const quantityEl = document.querySelector('.quantity')
const addToCartBtn = document.querySelector('#addToCart')
const cartIcon = document.querySelector('#cartIcon')
const cartEl = document.querySelector('.cartModal')
const cartQuantityEl = document.querySelector('.cartQuantity')
const emptyCartMessageEl = document.querySelector('.emptyCartMsg')
let appendedHtml = false
let quantity = 0
const price = 125
let total = 0




let decrease = () => {
    quantity !== 0 && (quantity-- , addToCartBtn.disabled = false)
    quantity == 0 && (addToCartBtn.disabled = true)
    quantityEl.textContent = quantity
}

let increase = () => {
    quantity++
    quantity !== 0 && (addToCartBtn.disabled = false)
    quantityEl.textContent = quantity
}

cartIcon.addEventListener('click', () => {
    cartEl.classList.toggle('invisible')
})

addToCartBtn.addEventListener('click', () => {
    cartQuantityEl.classList.remove('hidden')
    cartQuantityEl.textContent = quantity
    
    Toastify({
        text: "Item added to cart",
        duration: 1000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
          background: "hsl(25, 100%, 94%)",
          color: 'hsl(26, 100%, 55%)',
        },
      }).showToast();

    calculateTotal()

    document.querySelector('.emptyCartMsg') && document.querySelector('.emptyCartMsg').remove()
    document.querySelector('.success-checkmark') && document.querySelector('.success-checkmark').remove()
    document.querySelector('#orderPlacedText') && document.querySelector('#orderPlacedText').remove()

    if (!appendedHtml) {
        cartEl.innerHTML += /*html*/ `
        <div class="cartModal__productInfo px-5 flex items-center justify-between py-3">
        <img class="w-12 rounded-md" src="./images/image-product-1-thumbnail.jpg" alt="">
    
            <div class="info">
                <p class="text-gray-600"> Fall Limited Edition Sneakers</p>
                <p class="priceCalc flex gap-x-1 text-gray-600">$125 x <span class="cartCalcQuantity">${quantity}</span><span class="result font-bold text-black">$${total}</span></p>
            </div>
    
            <div onclick="clearCart(this)" class="clearCartBtn cursor-pointer">
             <img src="./images/icon-delete.svg" alt="">
            </div>
       </div>
       <div class="btnCtn px-5 w-full py-3">
        <button onclick="checkOut(this)" class="w-full text-white font-bold text-lg rounded-md py-4 my-3">Checkout</button>
       </div>
        `;
        appendedHtml = true
    } else {
        document.querySelector('.cartModal__productInfo').remove()
        document.querySelector('.btnCtn').remove()
        cartEl.innerHTML += /*html*/ `
        <div class="cartModal__productInfo px-5 flex items-center justify-between py-3">
        <img class="w-12 rounded-md" src="./images/image-product-1-thumbnail.jpg" alt="">
    
            <div class="info">
                <p class="text-gray-600"> Fall Limited Edition Sneakers</p>
                <p class="priceCalc flex gap-x-1 text-gray-600">$125 x <span class="cartCalcQuantity">${quantity}</span><span class="result font-bold text-black">$${total}</span></p>
            </div>
    
            <div onclick="clearCart(this)" class="clearCartBtn cursor-pointer">
             <img src="./images/icon-delete.svg" alt="">
            </div>
       </div>
       <div class="btnCtn px-5 w-full py-3">
        <button onclick="checkOut(this)" id="checkOutBtn" class="w-full text-white font-bold text-lg rounded-md py-4 my-3">Checkout</button>
       </div>
        `;
    }

    appendedHtml = true
})

let calculateTotal = () => {
    total = price * quantity
}

let clearCart = (el) => {
    el.parentElement.remove()
    document.querySelector('.btnCtn').remove()
    cartEl.innerHTML += /*html*/`
    <div class="emptyCartMsg container mx-auto text-center">
     <p class="font-semibold text-gray-500 p-14">Your cart is empty</p>
    </div>
    ` 
    appendedHtml = false
    quantity = 0
    addToCartBtn.disabled = true
    calculateTotal()
    renderQuantityElems()
}


let renderQuantityElems = () => {
    cartQuantityEl.textContent = quantity
    quantityEl.textContent = quantity
}

let checkOut = (elem) => {
    elem.parentElement.previousElementSibling.remove()
    elem.parentElement.remove()
    cartEl.innerHTML += `
    <div class="success-checkmark my-5">
        <div class="check-icon">
            <span class="icon-line line-tip"></span>
            <span class="icon-line line-long"></span>
            <div class="icon-circle"></div>
            <div class="icon-fix"></div>
        </div>
    </div>
    <div id="orderPlacedText" class="container mx-auto text-center">
    <p class="font-semibold text-gray-500 mb-6">Order placed</p>
   </div>
    `

    appendedHtml = false
    quantity = 0
    addToCartBtn.disabled = true
    calculateTotal()
    renderQuantityElems()
}