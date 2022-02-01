$(document).ready(function () {});

//  so the text in the content can be displayed
let textArea = document.querySelector("#text-area");
let textArea2 = document.querySelector("#text-area-2");
let textArea3 = document.querySelector("#text-area-3");
let textArea4 = document.querySelector("#text-area-4");
let textArea5 = document.querySelector("#text-area-5");
let textArea6 = document.querySelector("#text-area-6");
let textArea7 = document.querySelector("#text-area-7");
let textArea8 = document.querySelector("#text-area-8");
let textArea9 = document.querySelector("#text-area-9");
let textArea10 = document.querySelector("#text-area-10");
let textArea11 = document.querySelector("#text-area-11");
let textArea12 = document.querySelector("#text-area-12");
let textArea13 = document.querySelector("#text-area-13");
let textArea14 = document.querySelector("#text-area-14");

// saving them to local stotage
textArea.value = localStorage.getItem("result");
textArea2.value = localStorage.getItem("result-2");
textArea3.value = localStorage.getItem("result-3");
textArea4.value = localStorage.getItem("result-4");
textArea5.value = localStorage.getItem("result-5");
textArea6.value = localStorage.getItem("result-6");
textArea7.value = localStorage.getItem("result-7");
textArea8.value = localStorage.getItem("result-8");
textArea9.value = localStorage.getItem("result-9");
textArea10.value = localStorage.getItem("result-10");
textArea11.value = localStorage.getItem("result-11");
textArea12.value = localStorage.getItem("result-12");
textArea13.value = localStorage.getItem("result-13");
textArea14.value = localStorage.getItem("result-14");

// function that lets them stay after the refresh
textArea.addEventListener("keyup", (event) => {
  localStorage.setItem("result", textArea.value);
});

textArea2.addEventListener("keyup", (event) => {
  localStorage.setItem("result-2", textArea2.value);
});

textArea3.addEventListener("keyup", (event) => {
  localStorage.setItem("result-3", textArea3.value);
});

textArea4.addEventListener("keyup", (event) => {
  localStorage.setItem("result-4", textArea4.value);
});

textArea5.addEventListener("keyup", (event) => {
  localStorage.setItem("result-5", textArea5.value);
});

textArea6.addEventListener("keyup", (event) => {
  localStorage.setItem("result-6", textArea6.value);
});

textArea7.addEventListener("keyup", (event) => {
  localStorage.setItem("result-7", textArea7.value);
});

textArea8.addEventListener("keyup", (event) => {
  localStorage.setItem("result-8", textArea8.value);
});

textArea9.addEventListener("keyup", (event) => {
  localStorage.setItem("result-9", textArea9.value);
});

textArea10.addEventListener("keyup", (event) => {
  localStorage.setItem("result-10", textArea10.value);
});

textArea11.addEventListener("keyup", (event) => {
  localStorage.setItem("result-11", textArea11.value);
});

textArea12.addEventListener("keyup", (event) => {
  localStorage.setItem("result-12", textArea12.value);
});

textArea13.addEventListener("keyup", (event) => {
  localStorage.setItem("result-13", textArea13.value);
});

textArea14.addEventListener("keyup", (event) => {
  localStorage.setItem("result-14", textArea14.value);
});

// have the current date display on the screen
var show = moment().format("MMMM Do YYYY, h:mm:a");
var dateDisplay = document.getElementById("currentDay");
dateDisplay.innerHTML = show;
console.log(dateDisplay);

$(".saveBtn").on("click", function () {
  var enterText = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, enterText);
});

var storedInput = localStorage.getItem("description");

$("#monday . description").val(localStorage.getItem("monday"));

$("#tuesday . description").val(localStorage.getItem("tuesday"));

$("#wednesday . description").val(localStorage.getItem("wednesday"));

$("#thursday . description").val(localStorage.getItem("thursday"));

$("#friday . description").val(localStorage.getItem("friday"));

$("#saturday . description").val(localStorage.getItem("saturday"));

$("#sunday . description").val(localStorage.getItem("sunday"));

$("#height . description").val(localStorage.getItem("height"));

$("#weight . description").val(localStorage.getItem("weight"));

$("#fat . description").val(localStorage.getItem("fat"));

$("#bmass . description").val(localStorage.getItem("bmass"));

$("#goal-week . description").val(localStorage.getItem("goal-week"));

$("#prev-goal . description").val(localStorage.getItem("prev-goal"));

$("#chall-goal . description").val(localStorage.getItem("chall-goal"));


function endSession() {
  // event.preventDefault();
  console.log('connected');

  // await fetch("/api/users/logout", {
  //   method: "post",
  //   body: JSON.stringify({
  //     username,
  //     password,
  //   }),
  //   headers: { "Content-Type": "application/json" },
  // });
  // if (response.ok) {
  //   document.location.replace("/");
  // } else {
  //   alert(response.statusText);
  // }
};

document.getElementById("logout").on("click", endSession);