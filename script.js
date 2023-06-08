const toDoList = ["Write a small program", "Contribute to open source"];

const txtInput = document.getElementById('inputText');
const button = document.getElementById('btnAdd');
const output = document.getElementById('output');

button.addEventListener('click', handleAddButton);
document.addEventListener("DOMContentLoaded", () => {
    displayList();
});

function handleAddButton() {
    const value = txtInput.value.trim();
    if (value !== "") {
        toDoList.push(value);
        txtInput.value = '';
        displayList();
    }
}

function handleTaskTextDoubleClick(event) {
    const taskText = event.target;
    taskText.contentEditable = true;
    taskText.focus();
}

function handleTaskTextKeyDown(event, index) {
    if (event.keyCode === "Enter") {
        event.preventDefault();
        const taskText = event.target;
        taskText.contentEditable = false;
        toDoList[index] = taskText.textContent.trim();
    }
}

function handleDeleteButtonClick(index) {
    toDoList.splice(index, 1);
    displayList();
}

function createListItem(task, index) {
    const li = document.createElement("li");
    const taskText = document.createTextNode('span');
    const btn = document.createElement('button');
    taskText.textContent = task;
    btn.textContent = 'Delete';

    li.appendChild(taskText);
    li.appendChild(btn);

    taskText.addEventListener('dblclick', handleTaskTextDoubleClick);
    taskText.addEventListener('keydown', handleTaskTextKeyDown(toDoList[i], i));
    btn.addEventListener('click', () => handleDeleteButtonClick(index));

    return li;
}

function displayList() {
    output.textContent = "";
    for (let i = 0; i < toDoList.length; i++) {
        const listItem = createListItem(toDoList[i], i);
        output.appendChild(listItem);
    }
}
