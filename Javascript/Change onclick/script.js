var antiHeroImg = document.querySelector("#antihero");




function pickMoonknight(element) {
  element.style.backgroundColor="goldenrod";
  antiHeroImg.src = "MoonKnight.jpg";
  //element..remove();  Using this will remove the element onclick
}



function pickMorbius(element) {
  element.classList.add("btn");
  antiHeroImg.src = "Morbius.jpg";

}


