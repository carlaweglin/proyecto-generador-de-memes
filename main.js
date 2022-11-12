const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// VARIABLES // 

let btnText = $('.btn-text');
let btnImage = $('.btn-image');
let asideImage = $('#aside-image');
let asideText = $('#aside-text');
let inputUrl = $('#img-url');
let containerMeme = $('#img-container');
let inputBackgroundColor = $('#input-background-color');
let selectBlendMode = $('#option-background');


console.log(selectBlendMode);


// EVENTOS // 


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
    containerMeme.style.backgroundImage = `url(${url})`;

})

// cambiar color de fondo contenedor // 

inputBackgroundColor.addEventListener('change', (event) => {
    let colorBack = event.target.value;
    containerMeme.style.backgroundColor = colorBack; 
    

})

// Cambiar modo de mezcla de fondo //

selectBlendMode.addEventListener('click',(event) => {
    value = event.target.value
    switch (value) {
        case 'ninguno':
            containerMeme.style.backgroundBlendMode = 'normal';
            break;
        case 'aclarar':
            containerMeme.style.backgroundBlendMode = 'lighten';
            break;
        case 'oscurecer':
            containerMeme.style.backgroundBlendMode = 'darken';
            break;
        case 'diferencia':
            containerMeme.style.backgroundBlendMode = 'difference';
            break;
        case 'luminosidad':
            containerMeme.style.backgroundBlendMode = 'luminosity';
            break;
        case 'multiplicar':
            containerMeme.style.backgroundBlendMode = 'multiply';
            break;    
    
    }
})



// Modo claro, modo Oscuro //
