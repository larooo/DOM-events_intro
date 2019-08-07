//Events and addEventListener()
//mousedown mouse click

// window.addEventListener("mousedown", function(e) {
//   alert("WINDOW");
//   console.log(e);
// });

// Event.preventDefault()
// we use this method when we DO NOT want an HTML element to behave in  its default manner

// let link = document.querySelector("a");

// this is the method to access the first matched element

// link.addEventListener("click", function(e) {
//   console.log("Redirecting Stopped");
//   e.preventDefault();
// });

//..............................
// Event.stopProgation()
// document.getElementById("button12").addEventListener("mousedown", function(e) {
//   alert("Button clicked");
//   if (e.button == 2) {
//     // button == 2 is right click
//     e.stopPropagation();
//   }
// });

// Event listener on the paragraph element with its logic

// document.getElementById("demo").addEventListener("mousedown", function(e) {
//   alert("Paragraph clicked");
// });

//--------------------------------------

// let heading = document.querySelector("h1");

// function listener(e) {
//   if (e.type === "mouseenter") {
//     heading.style.color = "red";
//   } else if (e.type === "mouseleave") {
//     heading.style.color = "chartreuse";
//     heading.removeEventListener("mouseleave", listener); // we put it , to do it just one time
//   }
//   console.log(e);
// }
// heading.addEventListener("mouseenter", listener);
// heading.addEventListener("mouseleave", listener);

//-------------------------------------------

// DOMContentLoaded

// function onLoad(e) {
//   console.log(e);
//   alert("Page has loaded");
// }

// document.addEventListener("DOMContentLoaded", onLoad);

//--------------------------------------------

// let input = document.querySelector("input");

// function onKeyUpEvent(e) {
//   console.log(e);
//   alert(e.key + " was pressed");
// }

// input.addEventListener("keyup", onKeyUpEvent);

//----------------------------------------
// Form Events
// submit

function logSubmit(e) {
  log.textContent = `Form Submitted! Time Stamp ${e.timeStamp}`;
  e.preventDefault();
  let formData = new FormData(e.target);
  console.log(formData.get("name"));
}

const form = document.getElementById("form");
const log = document.getElementById("log");

form.addEventListener("submit", logSubmit);

function logReset(e) {
  resetLog.textContent = `Form reset! time Stamp ${e.timeStamp}`;
}

const resetLog = document.getElementById("reset-log");
form.addEventListener("reset", logReset);
