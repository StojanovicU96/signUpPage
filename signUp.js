$("button").on("click", function(){
   //loop through all inputs and check if they are empty or not 
   $("input").each(function(){
        if($(this).val()===""){
            $(this).siblings("img").show();
            $(this).parent().siblings("small").show();
        }else{
            $(this).siblings("img").hide();
            $(this).parent().siblings("small").hide();
        }
    });
});

