var vrView = null;
window.addEventListener('load', onVrViewLoad)

function onVrViewLoad() {
  vrView = new VRView.Player('#vrview', {
    width: '100%',
    height: 480,
    image: './images/hodo.jpg'
  });
}

function replace1() {
  vrView.setContent({
    image: './images/hodo.jpg'
  });
}

function replace2() {
  vrView.setContent({
    image: './images/kasenjiki.jpg'
  });
}

function replace3() {
  vrView.setContent({
    image: './images/kasenjiki.jpg'
  });
}
document.getElementById("hodo").onclick = function () {
  replace1();
};
document.getElementById("kasenjiki").onclick = function () {
  replace2();
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

var season = "main";
document.getElementById("winter").onclick = function () {
  if(season == "main"){
    season = "winter"
  }else if(season == "night"){
    season = "main"
  }else if(season == "winter"){
    season = "main"
  }
  replaceMoel();
};
document.getElementById("night").onclick = function () {
  if(season == "main"){
    season = "night";
  }else if(season == "night"){
    season = "main";
  }else if(season == "winter"){
    season = "night";
  }
  replaceMoel();
};

function replaceMoel(){
  var model = document.getElementById('model-viewer-main');
  if (season == "winter") {
    model.setAttribute('src', './glb/winter.glb');
    document.getElementById('csssnow').innerHTML = "●";
    document.getElementById('csssnow2nd').innerHTML = "●";
  } else if (season == "night") {
    model.setAttribute('src', './glb/night.glb');
    document.getElementById('csssnow').innerHTML = "";
    document.getElementById('csssnow2nd').innerHTML = "";
  } else if (season == "main"){
    model.setAttribute('src', './glb/main.glb');
    document.getElementById('csssnow').innerHTML = "";
    document.getElementById('csssnow2nd').innerHTML = "";
  }
}


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