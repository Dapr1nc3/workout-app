$(document).ready(function(){

});

//  so the text in the content can be displayed 
let textArea = document.querySelector("#text-area")
let textArea2 = document.querySelector("#text-area-2")
let textArea3 = document.querySelector("#text-area-3")
let textArea4 = document.querySelector("#text-area-4")
let textArea5 = document.querySelector("#text-area-5")
let textArea6 = document.querySelector("#text-area-6")
let textArea7 = document.querySelector("#text-area-7")
let textArea8 = document.querySelector("#text-area-8")
let textArea9 = document.querySelector("#text-area-9")

// saving them to local stotage 
textArea.value = localStorage.getItem("result")
textArea2.value = localStorage.getItem("result-2")
textArea3.value = localStorage.getItem("result-3")
textArea4.value = localStorage.getItem("result-4")
textArea5.value = localStorage.getItem("result-5")
textArea6.value = localStorage.getItem("result-6")
textArea7.value = localStorage.getItem("result-7")


// function that lets them stay after the refresh 
textArea.addEventListener("keyup", event =>{
localStorage.setItem("result", textArea.value)
})

textArea2.addEventListener("keyup", event =>{
localStorage.setItem("result-2", textArea2.value)
})

textArea3.addEventListener("keyup", event =>{
localStorage.setItem("result-3", textArea3.value)
})

textArea4.addEventListener("keyup", event =>{
localStorage.setItem("result-4", textArea4.value)
})

textArea5.addEventListener("keyup", event =>{
localStorage.setItem("result-5", textArea5.value)
})

textArea6.addEventListener("keyup", event =>{
localStorage.setItem("result-6", textArea6.value)
})

textArea7.addEventListener("keyup", event =>{
localStorage.setItem("result-7", textArea7.value)
})


// have the current date display on the screen 
var show = moment().format('MMMM Do YYYY, h:mm:a');
var dateDisplay = document.getElementById('currentDay');
dateDisplay.innerHTML = show;
console.log(dateDisplay)






$(".saveBtn").on("click", function(){
   var enterText = $(this).siblings(".description").val();
   var hour = $(this).parent().attr("id");
   localStorage.setItem(hour, enterText);
})

var storedInput = localStorage.getItem("description")


$("#9am . description")
.val(localStorage.getItem("9am"));

$("#10am . description")
.val(localStorage.getItem("10am"));

$("#11am . description")
.val(localStorage.getItem("11am"));

$("#12pm . description")
.val(localStorage.getItem("12pm"));

$("#1pm . description")
.val(localStorage.getItem("1pm"));

$("#2pm . description")
.val(localStorage.getItem("2pm"));

$("#3pm . description")
.val(localStorage.getItem("3pm"));


