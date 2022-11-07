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


var count = 0;
var countElement = document.querySelector("#count");

console.log(countElement);

function add1(){
  count++;
  countElement.innerText =  " The Count is " + count;
  console.log(count); 
}//this increase the value of clicked button

function subtract1(){
  count--;
  countElement.innerText = " The Count is " + count;
  console.log(count);
}//this decrease the value of clicked button




function changeText(){
  document.querySelector("#jName").innerHTML = "Jane Dough";
}//changes the innerHTML in the DOM, remember to use # for ID and . for class. When we assign this function to a selector(onclick="functionName()"), the id or class is selected



function codeToRunLater(){
  for (var i=0; i<1111; i++) {
    console.log("runnin: " + i);
   }
  }
  setTimeout(codeToRunLater,1000)
  console.log("END");
  //function(what code to run, how long to wait to run it)

  function myFunction() {
    setInterval(function(){ alert("Hello"); }, 3000);

  // The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

// The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

  function chooseLunch(element) {
    alert("You picked " + element.value);
}


var nameTag = document.querySelector("#name-tag");

function setName(element) {
    console.log(element.value);
    nameSpan.innerText = element.value;
}


var lifesAnswers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes – definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

function randomAnswear(){
  var index =Math.floor(Math.random()*lifesAnswers.length);

  var shuffle = lifesAnswers[index];

  console.log(shuffle);
}

randomAnswear();











