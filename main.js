const $ = (selector) => document.querySelector(selector);


// VARIABLES // 

let btnText = $('.btn-text');
let btnImage = $('.btn-image');
let asideImage = $('#aside-image');
let asideText = $('#aside-text');
let inputUrl = $('#img-url');
let containerMeme = $('#img-container');






// eventos // 


// visualizacion de aside imagen y texto //

btnText.addEventListener('click', () => {
    console.log('aprete boton texto');
    asideImage.classList.add('display-none');
    asideText.classList.remove('display-none');

})

btnImage.addEventListener('click', () => {
    console.log('aprete boton img');
    asideText.classList.add('display-none');
    asideImage.classList.remove('display-none');
})


// insertar imagen en div //

inputUrl.addEventListener('input', (event) => {
    let url = event.target.value;
    console.log(url);
    containerMeme.style.backgroundImage = `url(${url})`;

})




// Modo claro, modo Oscuro //
