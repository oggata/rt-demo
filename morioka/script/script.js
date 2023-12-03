document.getElementById("11111").onclick = function () {
  //var modal = document.getElementById('model-viewer-modal');
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
};

document.getElementById("hodo").onclick = function () {
  //document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
  //document.getElementById('model-viewer-modal').setAttribute('src', './images/hodo.jpg');
  //document.getElementById('modalTitle360').innerHTML = "歩道";
};

document.getElementById("kawara").onclick = function () {
  //document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
  //document.getElementById('model-viewer-modal').setAttribute('src', './images/hodo.jpg');
  //document.getElementById('modalTitle360').innerHTML = "河原";
};

document.getElementById("kasenjiki").onclick = function () {
  //document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
  //document.getElementById('model-viewer-modal').setAttribute('src', './images/kasenjiki.jpg');
  //document.getElementById('modalTitle360').innerHTML = "河川敷";
};

document.getElementById("nanbutekki").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki.glb');
  document.getElementById('modalTitle3D').innerHTML = "南部鉄器";
};
document.getElementById("nanbutekki2").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki2.glb');
  document.getElementById('modalTitle3D').innerHTML = "南部鉄器";
};
document.getElementById("nanbutekki-fish").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki-fish.glb');
  document.getElementById('modalTitle3D').innerHTML = "南部鉄器";
};
document.getElementById("nanbutekki-bird").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/nanbutekki-bird.glb');
  document.getElementById('modalTitle3D').innerHTML = "南部鉄器";
};
document.getElementById("fukudapan").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/fukudapan.glb');
  document.getElementById('modalTitle3D').innerHTML = "大きなコッペパン";
};

document.getElementById("miyazawakenji").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/miyazawakenji.glb');
  document.getElementById('modalTitle3D').innerHTML = "宮澤賢治像";
};
document.getElementById("wankosoba").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/wankosoba.glb');
  document.getElementById('modalTitle3D').innerHTML = "わんこそば";
};
document.getElementById("wankosoba-big").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/wankosoba-big.glb');
  document.getElementById('modalTitle3D').innerHTML = "わんこそば";
};
document.getElementById("wankosoba-shoumeisho").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/wankosoba-shoumeisho.glb');
  document.getElementById('modalTitle3D').innerHTML = "わんこそば";
};
document.getElementById("cat").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/cat.glb');
  document.getElementById('modalTitle3D').innerHTML = "猫のおきもの";
};


document.getElementById("cat_link").onclick = function () {
  document.getElementById('model-viewer-modal').setAttribute('src', './glb/cat.glb');
  document.getElementById('modalTitle3D').innerHTML = "猫のおきもの";
};


var season = "spring";
document.getElementById("winter").onclick = function () {
  var modal = document.getElementById('model-viewer-main');
  if(season == "spring"){
    modal.setAttribute('src', './glb/winter.glb');
    season = "winter";
    document.getElementById('csssnow').innerHTML = "●";
    document.getElementById('csssnow2nd').innerHTML = "●";
  }else{
    modal.setAttribute('src', './glb/morioka-color.glb');
    season = "spring";
    document.getElementById('csssnow').innerHTML = "";
    document.getElementById('csssnow2nd').innerHTML = "";
  }
};

var isOmikuji = false;
function omikuji() {
    if(isOmikuji == false){
      var img = document.getElementById("myImg");
      //console.log(img);
      var random = Math.floor(Math.random() * 10) + 1;
      if(1 <= random && random < 4){
        img.src = "./images/omikuji/2.png";
      }else if(4 <= random && random < 6){
        img.src = "./images/omikuji/3.png";
      }else if(6 <= random && random < 8){
        img.src = "./images/omikuji/4.png";
      }else if(8 <= random && random < 9){
        img.src = "./images/omikuji/5.png";
      }else{
        img.src = "./images/omikuji/6.png";
      }
      isOmikuji = true;
    }
}