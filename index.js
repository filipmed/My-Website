
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

$(".logo").mouseover(function(){
    $(this).css("color","#FF2E63")
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
$(".logo").mouseout(function(){
    $(this).css("color","#EAEAEA")
});


