// funciones //
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
let resetearFiltros = () => {
  inputControlShiny.value = 1;
  inputControlOpacity.value = 100;
  inputControlContrast.value = 100;
  inputControlBlur.value = 0;
  inputControlGrayscale.value = 0;
  inputControlSaturation.value = 100;
  inputControlNegative.value = 0;
  inputControlSepia.value = 0;
  containerMeme.style.filter = `brightness(${inputControlShiny.value}) contrast(${inputControlContrast.value}%) blur(${inputControlBlur.value}px) grayscale(${inputControlGrayscale.value}%) saturate(${inputControlSaturation.value}%) invert(${inputControlNegative.value}%) sepia(${inputControlSepia.value}%)`;
  containerMeme.style.opacity = `${inputControlOpacity.value}%`;
};

//------------------------------------------------------------------//

// VARIABLES //

let btnText = $(".btn-text");
let btnImage = $(".btn-image");
let asideImage = $("#aside-image");
let asideText = $("#aside-text");
let inputUrl = $("#img-url");
let containerMeme = $("#principal-img-container");
let inputBackgroundColor = $("#input-background-color");
let selectBlendMode = $("#option-background");
let btnDownloadMeme = $("#download-meme"); // boton que descarga meme//
let inputControlShiny = $("#range-shiny");
let inputControlOpacity = $("#range-opacity");
let inputControlContrast = $("#range-contrast");
let inputControlBlur = $("#range-blur");
let inputControlGrayscale = $("#range-grayscale");
let inputControlSaturation = $("#range-saturation");
let inputControlNegative = $("#range-negative");
let inputControlSepia = $("#range-sepia");
let btnResetValues = $("#reset-values");
let inputTopText = $("#top-text");
let inputBottomText = $("#text-bottom");
let texTop = $(".top-text");
let bottomText = $(".bottom-text");
let checkToptext = $('#check-toptext');
let checkBottomtext = $('#check-bottomtext');

console.log(texTop);

//FUNCIONES //

// funcion para descargar meme //

const descargarMeme = () => {
  domtoimage.toBlob(contenedorImagen).then(function (blob) {
    saveAs(blob, "mi-meme.jpg");
  });
}; // cuando ejecuto funcion me deja de funcionar la imagen ?? //

//------------------------------------------------------------------//

// EVENTOS //

// visualizacion de aside imagen y texto //

btnText.addEventListener("click", () => {
  asideImage.classList.add("display-none");
  asideText.classList.remove("display-none");
});

btnImage.addEventListener("click", () => {
  asideText.classList.add("display-none");
  asideImage.classList.remove("display-none");
});

// insertar imagen en div //

inputUrl.addEventListener("input", (event) => {
  let url = event.target.value;
  containerMeme.style.backgroundImage = `url(${url})`;
});

// cambiar color de fondo contenedor //

inputBackgroundColor.addEventListener("change", (event) => {
  let colorBack = event.target.value;
  containerMeme.style.backgroundColor = colorBack;
});

// Cambiar modo de mezcla de fondo //

selectBlendMode.addEventListener("click", (event) => {
  value = event.target.value;
  switch (value) {
    case "ninguno":
      containerMeme.style.backgroundBlendMode = "normal";
      break;
    case "aclarar":
      containerMeme.style.backgroundBlendMode = "lighten";
      break;
    case "oscurecer":
      containerMeme.style.backgroundBlendMode = "darken";
      break;
    case "diferencia":
      containerMeme.style.backgroundBlendMode = "difference";
      break;
    case "luminosidad":
      containerMeme.style.backgroundBlendMode = "luminosity";
      break;
    case "multiplicar":
      containerMeme.style.backgroundBlendMode = "multiply";
      break;
  }
});

// cambiar filtros //

//brillo//
inputControlShiny.addEventListener("change", (event) => {
  containerMeme.style.filter = `brightness(${event.target.value})`;
});

//opacidad ///

inputControlOpacity.addEventListener("change", (event) => {
  containerMeme.style.opacity = `${event.target.value}%`;
});

//contraste//

inputControlContrast.addEventListener("change", (event) => {
  containerMeme.style.filter = `contrast(${event.target.value}%)`;
});

//desenfoque//

inputControlBlur.addEventListener("change", (event) => {
  containerMeme.style.filter = `blur(${event.target.value}px)`;
});

//escala de grises //

inputControlGrayscale.addEventListener("change", (event) => {
  containerMeme.style.filter = `grayscale(${event.target.value}%)`;
});

//saturado//

inputControlSaturation.addEventListener("change", (event) => {
  containerMeme.style.filter = `saturate(${event.target.value}%)`;
});

//negativo//

inputControlNegative.addEventListener("change", (event) => {
  containerMeme.style.filter = `invert(${event.target.value}%)`;
});

//sepia//

inputControlSepia.addEventListener("change", (event) => {
  containerMeme.style.filter = `sepia(${event.target.value}%)`;
});

//boton resetear filtros//

btnResetValues.addEventListener("click", resetearFiltros);

// top y bottom text //

inputTopText.addEventListener("input", (event) => {
  texTop.innerText = event.target.value;
});

inputBottomText.addEventListener("input", (event) => {
  bottomText.innerText = event.target.value;
});

// con/sin texto //

checkToptext.addEventListener('click', () => {
    texTop.classList.toggle("display-none"); 
})

checkBottomtext.addEventListener('click', () => {
    bottomText.classList.toggle("display-none"); 
})





// Modo claro, modo Oscuro //
