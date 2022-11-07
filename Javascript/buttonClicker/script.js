function changeText(element) {
  element.innerText = "Logout";
}
//This Changes Text in an element Onclick

function hide(element) {
  element.remove();
} //this removes an element Onclick

function over(element) {
  element.style.backgroundColor = "lime";
} //Changes background color onmouseover or onmouseout

function addShadow(element) {
  element.classList.add("shadow");
}//add shadow on mouseover(looks floating)