const toDoList = ["Write a small program", "Contribute to open source"];

const txtInput = document.getElementById('inputText');
const button = document.getElementById('btnAdd');
const output = document.getElementById('output');

button.addEventListener('click', handleAddButton);
displayList();

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

function displayList() {
    output.innerHTML = '';
    for (let i = 0; i < toDoList.length; i++) {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        const btn = document.createElement('button');
        btn.innerHTML = `<i class="material-icons">delete</i>`;
        taskText.textContent = `${toDoList[i]}`
        li.appendChild(taskText)
        li.appendChild(btn);

        taskText.addEventListener('dblclick', () => {
            taskText.contentEditable = true;
            li.focus();
        });

        taskText.addEventListener('keydown', (event) => {
            if (event.key == 'Enter') {
                event.preventDefault();
                taskText.contentEditable = false;
                toDoList[i] = taskText.textContent.trim();
            }
        })
        btn.addEventListener('click', () => {
            toDoList.splice(i, 1);
            displayList();
        })
        output.appendChild(li);

    }
}

