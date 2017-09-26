var inputID = document.querySelector("#input");

function todo() {
    if(inputID.value !== "") {
        //create new line with all elements
        var input = document.createElement("input");
        input.className = "toggle";
        input.type = "checkbox";

        var li = document.createElement("li");
        li.append(input);
        li.append(inputID.value);

        var button = document.createElement("button");
        var text = document.createTextNode("X");
        button.append(text);
        li.append(button);

        document.querySelector("ul").append(li);
        inputID.value = "";

        //deleting lines
        button.addEventListener("click", function() {
            this.parentNode.remove();
        });

        //checking and unchecking lines
        li.addEventListener("click", function() {
            if(input.parentNode.classList.contains("inactive")){
                input.parentNode.classList.remove("inactive");
                this.querySelector("input").checked = false;
            } else {
                input.parentNode.classList.add("inactive");
                this.querySelector("input").checked = true;
            }
        });
    };
};

inputID.focus();

inputID.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        todo();
    };
});