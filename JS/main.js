console.log("andreaIsGreat");

$(".menu").on("click", function(){
    $(".navigation").slideToggle();
});

$("#nav-projects").mouseenter(function(){
    $(".sub_navigation").slideToggle();
    $(".sub_navigation").css({"background-color":"#FCFFFD","padding-left": "0px","display":"block","position":"absolute","font-family":"Mulish","font-size":"17px","box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",});
    $(".nav-link").css({"margin-left":"14px","margin-top":"16px","margin-right":"16px","margin-bottom":"16px","font-size": "15px",})
});
