let listTasks = [];
//constructor
function Task(descrition, priority) {
    this.title = descrition;//this is the problematic***
    this.priority = priority;
}
//globlal varible 
let inputPractice = document.getElementById("txtPractice");//getting the html 
let selectPriority = document.getElementById("selPriority");
let task = "";
function register() {
    let newTask = new Task(inputPractice.value, selectPriority.value);
    listTasks.push(newTask);
    display(newTask);
    display();
    inputPractice.value = "";//clear the input 
    inputPractice.className = "error"//adding the css class 
}
function display(aTask) {
    let taskSection = document.getElementById('tasks')//getting the HTML element
    //create the task HTML element
    task += `<tr><td class="title">${aTask.title}</td> <td class="priority">${aTask.priority}</td></tr>`
    taskSection.innerHTML = task;//injection the task into the HTML 
}