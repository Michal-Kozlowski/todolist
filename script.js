function todo() {
    if ($("input").val() !== "") {
        var input = document.createElement("input");
        input.className = "toggle";
        input.type = "checkbox";

        var li = document.createElement("li");
        li.append(input);
        li.append($("input").val());

        var button = document.createElement("button");
        var text = document.createTextNode("X");
        button.append(text);
        li.append(button);

        $("ul").append(li);
        $("input").val("");
    };

    $("button").on("click", function() {
        $(this).parent("li").remove();
    });
};

function check() {
    $(".toggle").on("click", function() {
        if ($(this).prop("checked")) {
            $(this).parent("li").css({
                "text-decoration": "line-through",
                "color": "#999"
            });
        } else {
            $(this).parent("li").css({
                "text-decoration": "none",
                "color": "#000"
            });
        };
    });
};

$(document).ready(function() {
    $("input").focus();

    $("input").on("keypress", function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            todo();
            check();
        };
    });

});


/*
$("ul").on("click","li", function() {
    $(this).children(".toggle").trigger("click");
});
*/
