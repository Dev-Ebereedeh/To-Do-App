let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button");


function addTask() {
    if (inputBox.value.trim() === "") {
        alert ("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value <i class="fa-solid fa-trash"></i>;
        listContainer.appendChild(li);
        // inputBox.value = "";

        addButton.addEventListener("click", addTask);


        li.addEventListener("click", function addTask() {
            li.classList.toggle("completed");
        });



    }

}