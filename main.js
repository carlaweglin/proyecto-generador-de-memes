const $ = (selector) => document.querySelector(selector);


// VARIABLES // 

let btnText = $('.btn-text');
let btnImage = $('btn-image');
let asideImage = $('#aside-image');
let asideText = $('#aside-image');








// eventos // 


// visualizacion de aside imagen y texto //

btnText.addEventListener('click', () => {
    asideImage.style.display = "none";
})

btnImage.addEventListener('click', () => {
    asideText.style.display = "none";
})


