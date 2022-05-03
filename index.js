/*let menav = document.querySelector("#me");
let projNav = document.querySelector("#proj");
let skillNav = document.querySelector("#skills");
let diceAnim = document.querySelector("#dice");


$(".contact_info").mouseover(function(){
    $(".contact_info").css("color","red")
});
menav.addEventListener('mouseover',()=>menav.style.color='#FF2E63');
projNav.addEventListener('mouseover',()=>projNav.style.color='#FF2E63');
skillNav.addEventListener('mouseover',()=>skillNav.style.color='#FF2E63');


menav.addEventListener('mouseout',()=>menav.style.color='#EAEAEA');
projNav.addEventListener('mouseout',()=>projNav.style.color='#EAEAEA');
skillNav.addEventListener('mouseout',()=>skillNav.style.color='#EAEAEA');




*/ 
//This code does the same as above except that It is done in a more efficient manner while using my newly learned JQuerly Knowledge
$("#me").mouseover(function(){
    $("#me").css("color","#FF2E63")
});

$("#proj").mouseover(function(){
    $("#proj").css("color","#FF2E63")
});

$("#skills").mouseover(function(){
    $("#skills").css("color","#FF2E63")
}); 

$("#me").mouseout(function(){
    $("#me").css("color","#EAEAEA")
});
$("#proj").mouseout(function(){
    $("#proj").css("color","#EAEAEA")
});
$("#skills").mouseout(function(){
    $("#skills").css("color","#EAEAEA")
});