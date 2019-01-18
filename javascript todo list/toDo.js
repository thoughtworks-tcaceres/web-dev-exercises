var selection;
var toDoList = [];

window.setTimeout(function() {

selection = prompt("What would you like to do?");

while (selection !== "quit") {
        if (selection === "new") {
            var newToDo = prompt("Enter a new to do item.");
            toDoList.push(newToDo);            
        }

        else if (selection === "list") {
            console.log(toDoList);
        }

    selection = prompt("What would you like to do?");
}

console.log("You have quit. Goodbye.");

}, 1000);