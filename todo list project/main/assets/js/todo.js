$("ul").on("click","li",function() {
    $(this).toggleClass("clicked");
});

$("ul").on("click","span",function(event) {
    $(this).parent().fadeOut(500,"linear",function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event) {
    if(event.which === 13) {
        var newToDo = $(this).val();
        $("ul").append("<li><span class='listItem'><i class='fas fa-trash'></i></span> " + newToDo + "</li>");
        $(this).val("");
    }
});

$(".toggleInput").on("click",function() {
    $("input[type='text']").fadeToggle();
});