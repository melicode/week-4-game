$(document).ready(function (){
    console.log("hello")
});


// var valone;
// var valtwo;
// var valthree;
// var valfour;
// var wins = 0;
// var losses = 0;
// var computerchoice;
// var usercount;

// function initialize() {

//     computerchoice = 1 + Math.floor(Math.random() * 100);
//     valone = 1 + Math.floor(Math.random() * 20);
//     valtwo = 1 + Math.floor(Math.random() * 20);
//     valthree = 1 + Math.floor(Math.random() * 20);
//     valfour = 1 + Math.floor(Math.random() * 20);
//     usercount = 0;

//     $("#winstotal").html("Wins: " + wins);
//     $("#losetotal").html("Losses: " + losses);
//     $("#randomNumber").html(computerchoice);
//     $("#userScore").html(usercount);
// }

// function result() {

//     if (usercount > computerchoice) {
//         losses++;
//         initialize();
//     }


//     if (usercount == computerchoice) {
//         wins++;
//         initialize();
//     }
// }


// initialize();


// $(".gem").on("click", function() {

//     var pressed = $(this).attr("value");

//     if (pressed == "gem1") {
//         usercount += gemOneValue;
//     } else if (pressed == "gem2") {
//         usercount += gemTwoValue;
//     } else if (pressed == "gem3") {
//         usercount += gemThreeValue;
//     } else if (pressed == "gem4") {
//         usercount += gemFourValue;
//     } 

//     $("#userScore").html(usercount);


//     result();

// });
// });
