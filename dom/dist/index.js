"use strict";
// ! to store the data in a db-like structure
let todos = [];
// ! Targetting the elements
let form = document.getElementById("form"); //type accession: I know more than you TS, HTMLFormElement is a class
let input = document.getElementById("inputValue");
let listItems = document.getElementById("items");
// ! ADDING TASK
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    let newTask = {
        id: Date.now().toString(),
        task: value,
    };
    todos.push(newTask); //to send data to our db-like structure
    input.value = "";
    render();
});
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    render();
}
function render() {
    listItems.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        let display = todos[i];
        let listings = document.createElement("li");
        listings.textContent = display.task;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            deleteTodo(display.id);
        });
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.style.borderRadius = "15px";
        listings.appendChild(deleteBtn);
        listItems.appendChild(listings);
    }
}
