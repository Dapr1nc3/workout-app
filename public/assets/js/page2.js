$(document).ready(function () {});
const username = localStorage.getItem("current_user")
const savedData = JSON.parse(localStorage.getItem((username)))
let userResults = savedData;

// event listener/function to keep updating local storage with key inputs from user
const planner = document.getElementById('planner');
planner.addEventListener("keyup",(event) => {
  const {id, value} = event.target
  userResults = { ...userResults, [id]: value}
  localStorage.setItem(username, JSON.stringify(userResults))
});

const measurements = document.getElementById('measurements');
measurements.addEventListener("keyup",(event) => {
  const {id, value} = event.target
  userResults = { ...userResults, [id]: value}
  localStorage.setItem(username, JSON.stringify(userResults))
});
const goals = document.getElementById('goals');
goals.addEventListener("keyup",(event) => {
  const {id, value} = event.target
  userResults = { ...userResults, [id]: value}
  localStorage.setItem(username, JSON.stringify(userResults))
});

//  selects each text area from the front end by its id
let textArea = document.querySelector("#textArea");
let textArea2 = document.querySelector("#textArea2");
let textArea3 = document.querySelector("#textArea3");
let textArea4 = document.querySelector("#textArea4");
let textArea5 = document.querySelector("#textArea5");
let textArea6 = document.querySelector("#textArea6");
let textArea7 = document.querySelector("#textArea7");
let textArea8 = document.querySelector("#textArea8");
let textArea9 = document.querySelector("#textArea9");
let textArea10 = document.querySelector("#textArea10");
let textArea11 = document.querySelector("#textArea11");
let textArea12 = document.querySelector("#textArea12");
let textArea13 = document.querySelector("#textArea13");
let textArea14 = document.querySelector("#textArea14");

// makes selected text area value = what is stored in local storage for that user
textArea.innerHTML = savedData.textArea
textArea2.innerHTML = savedData.textArea2;
textArea3.innerHTML = savedData.textArea3;
textArea4.innerHTML = savedData.textArea4;
textArea5.innerHTML = savedData.textArea5;
textArea6.innerHTML = savedData.textArea6;
textArea7.innerHTML = savedData.textArea7;
textArea8.innerHTML = savedData.textArea8;
textArea9.innerHTML = savedData.textArea9;
textArea10.innerHTML = savedData.textArea10;
textArea11.innerHTML = savedData.textArea11;
textArea12.innerHTML = savedData.textArea12;
textArea13.innerHTML = savedData.textArea13;
textArea14.innerHTML = savedData.textArea14;


// have the current date display on the screen
var show = moment().format("MMMM Do YYYY, h:mm:a");
var dateDisplay = document.getElementById("currentDay");
dateDisplay.innerHTML = show;
console.log(dateDisplay);

// prior code for local storage 
// $(".saveBtn").on("click", function () {
//   var enterText = $(this).siblings(".description").val();
//   var hour = $(this).parent().attr("id");
//   localStorage.setItem(hour, enterText);
// });
// var storedInput = localStorage.getItem("description");
// $("#monday . description").val(localStorage.getItem("monday"));
// $("#tuesday . description").val(localStorage.getItem("tuesday"));
// $("#wednesday . description").val(localStorage.getItem("wednesday"));
// $("#thursday . description").val(localStorage.getItem("thursday"));
// $("#friday . description").val(localStorage.getItem("friday"));
// $("#saturday . description").val(localStorage.getItem("saturday"));
// $("#sunday . description").val(localStorage.getItem("sunday"));
// $("#height . description").val(localStorage.getItem("height"));
// $("#weight . description").val(localStorage.getItem("weight"));
// $("#fat . description").val(localStorage.getItem("fat"));
// $("#bmass . description").val(localStorage.getItem("bmass"));
// $("#goal-week . description").val(localStorage.getItem("goal-week"));
// $("#prev-goal . description").val(localStorage.getItem("prev-goal"));
// $("#chall-goal . description").val(localStorage.getItem("chall-goal"));


async function logout() {
  // function/call to logout the user and destroy the current session
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);
