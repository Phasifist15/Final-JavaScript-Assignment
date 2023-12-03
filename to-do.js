const inputField = document.getElementById("to-do-field");
const taskField = document.getElementById("task-field");

function addTask() {
  if(inputField.value === ""){
    alert("You need to input something!");
  }

  else{
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    taskField.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
  inputField.value = "";
  saveData();
}

taskField.addEventListener("click", function(a){
  if (a.target.tagName === "LI"){
    a.target.classList.toggle("text");
    saveData();
  }
  else if(a.target.tagName === "SPAN"){
    a.target.parentElement.remove();
    saveData();
  }
}, false);


function saveData() {
  localStorage.setItem("data", taskField.innerHTML);
}

function retrieveData(){
  taskField.innerHTML = localStorage.getItem("data");
}

retrieveData();