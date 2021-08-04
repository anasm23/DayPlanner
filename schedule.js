// Declare moment variable
const m = moment;

//Times
var block = moment().format("HH");
console.log(block);


// Function to store plans
function functPlanner() {
   //display current day at top of page
   $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
   //time block function
   $(".time-block").each(function () {
       var id = $(this).attr("id");
       var schedule = localStorage.getItem(id);
       if (schedule !== null) {
        $(this).children(".schedule").val(schedule);
       }
   });
}
functPlanner();


//save button function
var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
   var time = $(this).parent().attr("id");
   var schedule = $(this).siblings(".schedule").val();

    alert ("Saved!")
   localStorage.setItem(time, schedule);
});
 
///Background color change function
function background() {
   current = moment().format("HH");
   $(".time-block").each(function() {
       var idgrab = parseInt($(this).attr("id"));
 
       if (idgrab > current) {
           $(this).addClass("future");
       }
       else if (idgrab == current){
           $(this).addClass("present");
       }
       else if (idgrab < current) {
           $(this).addClass("past");
       }
   }
);
}
background();
 
//clear all local storage
function clearLocalStorage(){
   window.localStorage.clear();
   alert ("cleared!");
}
