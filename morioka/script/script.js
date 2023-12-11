var vrView;

function onLoad() {
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 480,
    image: '/images/hodo.jpg',
    is_stereo: true,
    is_autopan_off: true
  });
  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('getposition', onGetPosition);
  vrView.on('error', onVRViewError);
}

function replace1(){
  vrView.setContent({
    image: '/images/hodo.jpg',
    preview:'/images/hodo.jpg',
    is_stereo: true
  });                     
}
function replace2(){
  vrView.setContent({
    image: '/images/kasenjiki.jpg',
    preview:'/images/kasenjiki.jpg',
    is_stereo: true
  });                     
}
function replace3(){
  vrView.setContent({
    image: '/images/kasenjiki.jpg',
    preview:'/images/kasenjiki.jpg',
    is_stereo: true
  });                     
}
window.addEventListener('load', onLoad);


document.getElementById("hodo").onclick = function () {
  //document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
  //document.getElementById('model-viewer-modal').setAttribute('src', './images/hodo.jpg');
  //document.getElementById('modalTitle360').innerHTML = "歩道";
  replace1();
};
document.getElementById("kawara").onclick = function () {
  //document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
  //document.getElementById('model-viewer-modal').setAttribute('src', './images/hodo.jpg');
  //document.getElementById('modalTitle360').innerHTML = "河原";
  replace2();
};
document.getElementById("kasenjiki").onclick = function () {
  //document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
  //document.getElementById('model-viewer-modal').setAttribute('src', './images/kasenjiki.jpg');
  //document.getElementById('modalTitle360').innerHTML = "河川敷";
  replace3();
};
document.getElementById("nanbutekki").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
};
document.getElementById("nanbutekki2").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki2.glb');
};
document.getElementById("nanbutekki-fish").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki-fish.glb');
};
document.getElementById("nanbutekki-bird").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki-bird.glb');
};
document.getElementById("fukudapan").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/fukudapan.glb');
};
document.getElementById("miyazawakenji").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/miyazawakenji.glb');
};
document.getElementById("wankosoba").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/wankosoba.glb');
};
document.getElementById("wankosoba-big").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/wankosoba-big.glb');
};
document.getElementById("wankosoba-shoumeisho").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/wankosoba-shoumeisho.glb');
};

var season = "spring";
document.getElementById("winter").onclick = function () {
  var modal = document.getElementById('model-viewer-main');
  if (season == "spring") {
    modal.setAttribute('src', './glb/winter.glb');
    season = "winter";
    document.getElementById('csssnow').innerHTML = "●";
    document.getElementById('csssnow2nd').innerHTML = "●";
  } else if(season == "winter") {
    modal.setAttribute('src', './glb/main-night.glb');
    season = "night";
    document.getElementById('csssnow').innerHTML = "";
    document.getElementById('csssnow2nd').innerHTML = "";
  } else{
    modal.setAttribute('src', './glb/main.glb');
    season = "spring";
    document.getElementById('csssnow').innerHTML = "";
    document.getElementById('csssnow2nd').innerHTML = "";
  }
};



var isOmikuji = false;

function omikuji() {
  if (isOmikuji == false) {
    var img = document.getElementById("myImg");
    //console.log(img);
    var random = Math.floor(Math.random() * 10) + 1;
    if (1 <= random && random < 4) {
      img.src = "./images/omikuji/2.png";
    } else if (4 <= random && random < 6) {
      img.src = "./images/omikuji/3.png";
    } else if (6 <= random && random < 8) {
      img.src = "./images/omikuji/4.png";
    } else if (8 <= random && random < 9) {
      img.src = "./images/omikuji/5.png";
    } else {
      img.src = "./images/omikuji/6.png";
    }
    isOmikuji = true;
  }
}