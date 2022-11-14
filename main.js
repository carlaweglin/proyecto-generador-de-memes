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
let checkToptext = $("#check-toptext");
let checkBottomtext = $("#check-bottomtext");
let optionFontFamily = $("#option-font-family");
let inputFontSize = $('#font-size');
let btnLeft = $('#btn-left');
let btnCenter = $('#btn-center');
let btnRight = $('#btn-right');
let colorText = $('#color-text');
let inputTextBackground = $('#text-background');
let notBackground = $('#not-background-color');
let btnOutlineNone = $('#outline-none');
let btnOutlineLight = $('#outline-light');
let btnOutlineDark = $('#outline-dark');
let inputSpacing = $('#input-spacing');
let inputLinespacing = $('#input-linespacing');
let viewModeDark = $('.view-mode-dark');
let viewModeLight = $('.view-mode-light');
let header = document.getElementsByTagName('header');
let tagH1 = document.getElementsByTagName('h1');
let main = $('main');
let inputs = $$('input');


console.log(inputs);

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

checkToptext.addEventListener("click", () => {
  texTop.classList.toggle("display-none");
});

checkBottomtext.addEventListener("click", () => {
  bottomText.classList.toggle("display-none");
});

//fuente//

optionFontFamily.addEventListener("change", (event) => {
  let value = event.target.value;
  switch (value) {
    case "verdana":
      texTop.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
      bottomText.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
      break;
    case "courier New":
      texTop.style.fontFamily = "'Courier New', Courier, monospace";
      bottomText.style.fontFamily = "'Courier New', Courier, monospace";
      break;
    case "georgia":
      texTop.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
      bottomText.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
      break;
    case "times New Roman":
      texTop.style.fontFamily = "'Times New Roman', Times, serif";
      bottomText.style.fontFamily = "'Times New Roman', Times, serif";
      break;
    case "lucida Sans":
      texTop.style.fontFamily =
        "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
      bottomText.style.fontFamily =
        "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
      break;
  }
});

// tamaño fuente // 
inputFontSize.addEventListener('change', (event) => {
    texTop.style.fontSize = `${event.target.value}px`;
    bottomText.style.fontSize = `${event.target.value}px`;
})

//alineacion texto // 

btnLeft.addEventListener('click', () => {
    texTop.style.justifyContent = "flex-start";
    bottomText.style.justifyContent = "flex-start";
})

btnCenter.addEventListener('click', () => {
    texTop.style.justifyContent = "center";
    bottomText.style.justifyContent = "center";
})

btnRight.addEventListener('click', () => {
    texTop.style.justifyContent = "flex-end";
    bottomText.style.justifyContent = "flex-end";
})

// color y fondo de texto // 

colorText.addEventListener('change',(event) => {
    let value = event.target.value;
    texTop.style.color = `${value}`;
    bottomText.style.color = `${value}`;
})

inputTextBackground.addEventListener('change',(event) => {
    let value = event.target.value;
    texTop.style.backgroundColor = `${value}`;
    bottomText.style.backgroundColor = `${value}`;
})

notBackground.addEventListener('change',() => {
    texTop.classList.toggle("background-transparent");
    bottomText.classList.toggle("background-transparent");
})

// contorno // 

btnOutlineDark.addEventListener('click', () => {
    texTop.style.textShadow = "3px -2px 0px rgba(3,3,3,0.65)";
    bottomText.style.textShadow = "3px -2px 0px rgba(3,3,3,0.65)";
})

btnOutlineLight.addEventListener('click', () => {
    texTop.style.textShadow = "3px -2px 0px rgba(255,255,255,0.65)";
    bottomText.style.textShadow = "3px -2px 0px rgba(255,255,255,0.65)";
})

btnOutlineNone.addEventListener('click', () => {
    texTop.style.textShadow = "0px 0px 0px rgba(255,255,255,0.65)";
    bottomText.style.textShadow = "0px 0px 0px rgba(255,255,255,0.65)";
})

//espaciado // 

inputSpacing.addEventListener('change',(event) => {
    let value = event.target.value;
    texTop.style.padding = `${value}px`;
    bottomText.style.padding = `${value}px`;
})

//interlineado //

inputLinespacing.addEventListener('change',(event) => {
    let value = event.target.value;
    texTop.style.lineHeight = `${value}`;
    bottomText.style.lineHeight = `${value}`;
})


// Modo claro, modo Oscuro //

viewModeDark.addEventListener('click', () => {
    viewModeDark.style.display = "none";
    viewModeLight.style.display = "inline";
    header[0].classList.add("light-mode-header");
    tagH1[0].classList.add('light-mode-text');
    main.classList.add('light-mode-main');
    asideImage.classList.add('light-mode-aside');
    asideText.classList.add('light-mode-aside');
    btnText.classList.add('light-mode-btn');
    btnImage.classList.add('light-mode-btn');
    viewModeLight.classList.add('light-mode-btn');
    inputUrl.classList.add('light-mode-main');
    
})

viewModeLight.addEventListener('click', () => {
    viewModeLight.style.display = "none";
    viewModeDark.style.display = "inline";
    header[0].classList.remove("light-mode-header");
    tagH1[0].classList.remove('light-mode-text'); 
    main.classList.remove('light-mode-main');
    asideImage.classList.remove('light-mode-aside');
    asideText.classList.remove('light-mode-aside'); 
    btnText.classList.remove('light-mode-btn');
    btnImage.classList.remove('light-mode-btn');
    viewModeDark.classList.remove('light-mode-btn');
    inputUrl.classList.remove('light-mode-main');
})


