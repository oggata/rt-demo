const modal = document.querySelector('.js-modal');
const modalButton = document.getElementsByName("load-3d-data");
const modalClose = document.querySelector('.js-close-button');
for (var i = 0, l = modalButton.length; i < l; i++) {
  modalButton[i].addEventListener('click', () => {
    modal.classList.add('is-open');
  });
}
modalClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

const modal360 = document.querySelector('.js-modal-360');
const modal360Button = document.getElementsByName("load-360-data");
const modal360Close = document.querySelector('.js-close-button-360');
for (var i = 0, l = modal360Button.length; i < l; i++) {
  modal360Button[i].addEventListener('click', () => {
    modal360.classList.add('is-open');
  });
}
modal360Close.addEventListener('click', () => {
  modal360.classList.remove('is-open');
});

const modalPDF = document.querySelector('.js-modal-pdf');
const modalPDFButton = document.getElementsByName("load-pdf-data");
const modalPDFClose = document.querySelector('.js-close-button-pdf');
for (var i = 0, l = modalPDFButton.length; i < l; i++) {
  modalPDFButton[i].addEventListener('click', () => {
    modalPDF.classList.add('is-open');
  });
}
modalPDFClose.addEventListener('click', () => {
  modalPDF.classList.remove('is-open');
});

var season = "spring";

document.getElementById("nanbutekki").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/nanbutekki.glb');
};
document.getElementById("nanbutekki2").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/nanbutekki2.glb');
};
document.getElementById("nanbutekki-fish").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/nanbutekki-fish.glb');
};
document.getElementById("nanbutekki-bird").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/nanbutekki-bird.glb');
};
document.getElementById("fukudapan").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/fukudapan.glb');
};
document.getElementById("jihanki").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/jihanki.glb');
};
document.getElementById("miyazawakenji").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/miyazawakenji.glb');
};
document.getElementById("wankosoba").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/wankosoba.glb');
};
document.getElementById("wankosoba-big").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/wankosoba-big.glb');
};
document.getElementById("wankosoba-shoumeisho").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/wankosoba-shoumeisho.glb');
};
document.getElementById("cat").onclick = function () {
  var modal = document.getElementById('model-viewer-modal');
  modal.setAttribute('src', './glb/cat.glb');
};

document.getElementById("winter").onclick = function () {
  var modal = document.getElementById('model-viewer-main');
  if(season == "spring"){
    modal.setAttribute('src', './glb/winter.glb');
    season = "winter";
  }else{
    modal.setAttribute('src', './glb/morioka-color.glb');
    season = "spring";
  }
};