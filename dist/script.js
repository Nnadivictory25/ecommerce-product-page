"use strict";var body=document.querySelector("body"),openNavBtn=document.querySelector("#openNav"),overlay=document.querySelector(".overlay"),mobileNav=document.querySelector("#mobileNav"),navCloseBtn=document.querySelector("#closeNav"),closeNavElems=[overlay,navCloseBtn],openNav=function(){overlay.classList.remove("invisible"),mobileNav.classList.add("active"),body.classList.add("no-scroll")},closeNav=function(){overlay.classList.add("invisible"),mobileNav.classList.remove("active"),body.classList.remove("no-scroll")};openNavBtn.addEventListener("click",(function(){openNav()})),closeNavElems.forEach((function(e){e.addEventListener("click",(function(){closeNav()}))}));var img=document.querySelector("#slideImg"),prevBtn=document.querySelector(".prevBtn"),nexBtn=document.querySelector(".nextBtn"),currentImg=1;prevBtn.addEventListener("click",(function(){--currentImg<1&&(currentImg=4),renderImg()})),nexBtn.addEventListener("click",(function(){++currentImg>4&&(currentImg=1),renderImg()}));var renderImg=function(){img.src="./images/image-product-".concat(currentImg,".jpg")};
//# sourceMappingURL=script.js.map