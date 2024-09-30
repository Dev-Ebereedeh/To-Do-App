let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let dueDateInput = document.getElementById("due-date")


const addButton = document.getElementById("add-button");


addButton.addEventListener("click", addTask);
event.preventDefault();


function addTask() {
    if (inputBox.value.trim() === "") {
        alert ("You must write something!");
        return;

    }


    else{
        let li = document.createElement("li");
        li.innerHTML = `<span class="task-text">${inputBox.value}</span>  <i class='bx bx-trash' ></i>`;
        listContainer.appendChild(li);
        inputBox.value = "";
        // dueDateInput.value = "";

       

        li.addEventListener("click", function addTask() {
            li.classList.toggle("completed");
        });
        
        


    }

}