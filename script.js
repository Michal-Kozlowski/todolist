function todo(){
    if($("input").val() !== ""){
        var todo = $("input").val();
        $("ul").append("<li>" + todo + "<i class='fa fa-trash'></i>" + "</li>");
        $("input").val("");
    }
}

$("input").focus();
$("input").on("keypress", function(e){
    if (e.keyCode === 13) {
        e.preventDefault();
        todo();
    };
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("inactive");
});


$("ul").on("click", "i", function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });    
    e.stopPropagation();
});