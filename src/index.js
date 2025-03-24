import styles from "./styles.css"

import {getProjects,createProject,createTodos,deleteProject,deleteTodo,editTodo} from "./logic.js"

const allProjects = getProjects();
const main = document.querySelector(`main`);
const dialogProject = document.querySelector(".create-project");
const dialogTodo = document.querySelector(".create-todo");
const dialogEditTodo = document.querySelector(".edit-todo");

const resetTodo = () => main.innerHTML = ``;

const resetProject = () => main.innerHTML = ``;

dialogProject.addEventListener("click", e => {
  const dialogDimensions = dialogProject.getBoundingClientRect()
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialogProject.close()
  }
})

console.table(allProjects);

// const buttonOpen = function(){
//     const openBtn = document.querySelectorAll(`#open-btn`);
//     openBtn.forEach((button,index) => {
//         button.addEventListener(`click`, () => {
//             resetTodo();
//             populateTodo(index);
//             formTodo(index);
//         });
//     });
// };




const populateProjects = function(){
    const createProjectDiv = document.createElement(`div`);
    createProjectDiv.className = 'add-project-button';
    main.appendChild(createProjectDiv);
    const createProjectButton = document.createElement(`button`);
    createProjectButton.id = "create-project-button";
    createProjectButton.textContent = "Create Project";
    createProjectDiv.appendChild(createProjectButton);

    const projectContainer = document.createElement(`div`);
    projectContainer.className = "project-container";
    main.appendChild(projectContainer);

    allProjects.forEach(project => {
        const card = document.createElement(`div`);
        card.className = "card";
        projectContainer.appendChild(card);

        const name = document.createElement(`h2`);
        name.className = `${project.name}`
        name.textContent = project.name;
        card.appendChild(name);

        const div = document.createElement(`div`);
        card.appendChild(div);    
        const button1 = document.createElement(`button`);
        button1.id = 'open-btn';
        button1.textContent = "Open";
        button1.onclick = function() {
            const projectName = card.querySelector(`h2`).textContent;
            const indexOfProject = allProjects.findIndex(project => project.name === projectName);
            resetTodo();
            populateTodo(indexOfProject);
        };
        div.appendChild(button1);
        const button2 = document.createElement(`button`);
        button2.textContent = "Delete";
        button2.onclick = function() { deleteProject(project.name); resetProject(); populateProjects(); buttonCreateProject(); }
        button2.id = 'delete-btn';
        div.appendChild(button2);
    });


    // buttonOpen(); 
    console.table(allProjects);

}

populateProjects();

const buttonCreateProject = function(){
    const btnCreateProject = document.querySelector(`#create-project-button`);

    btnCreateProject.addEventListener(`click`, (e) => {
        e.preventDefault();
        dialogProject.showModal();
    });
};

buttonCreateProject();

const buttonBack = (function(){
    const backBtn = document.querySelector("#back-btn");

    backBtn.addEventListener(`click`, (e) => {
        e.preventDefault();
        resetProject();
        populateProjects();
        buttonCreateProject();
    });
})();

const buttonCreateTodo = function(){
    const btnCreateTodo = document.querySelector(`#create-todo-button`);
    btnCreateTodo.addEventListener(`click`, (e) => {
        e.preventDefault();
        dialogTodo.showModal();
        formTodo();
    });
};

const populateTodo = function(index){
    const projName =  allProjects[index].name;
    const todos = allProjects[index].todoList;

    resetTodo();

    const createTodoDiv = document.createElement(`div`);
    createTodoDiv.className = 'add-todo-button';
    main.appendChild(createTodoDiv);
    const createTodoButton = document.createElement(`button`);
    createTodoButton.id = "create-todo-button";
    createTodoButton.textContent = "Add Todo";
    createTodoDiv.appendChild(createTodoButton);

    const todoLists = document.createElement(`div`);
    todoLists.className = "todo-list";
    main.appendChild(todoLists);

    const div = document.createElement(`div`);
    todoLists.appendChild(div);
    
    const projectName = document.createElement(`h2`);
    projectName.className = "project-name";
    projectName.textContent = `Project :- ${projName}`;
    div.appendChild(projectName);

    const div2 = document.createElement(`div`);
    div2.className = "todo-cards";
    todoLists.appendChild(div2);

    buttonCreateTodo();


    todos.forEach(todo => {
        const card = document.createElement(`div`);
        card.className = "card";
        div2.appendChild(card);

        const title = document.createElement(`h2`);
        title.textContent = todo.title;
        card.appendChild(title);

        const description = document.createElement(`p`);
        description.textContent = todo.description;
        card.appendChild(description);

        const dueDate = document.createElement(`p`);
        dueDate.textContent = todo.dueDate;
        card.appendChild(dueDate);

        const priority = document.createElement(`h2`);
        priority.textContent = todo.priority;
        card.appendChild(priority);

        const checklist = document.createElement(`p`);
        checklist.textContent = todo.checklist;
        card.appendChild(checklist);

        const div = document.createElement(`div`);
        card.appendChild(div);    
        const button1 = document.createElement(`button`);
        button1.id = 'edit-btn';
        button1.onclick = function(){
                dialogEditTodo.showModal();
                const formEditTodo = (function(){
                    const editFormElement = document.querySelector(`.edit-todo-form`);
                    const todoTitle = editFormElement.querySelector(`input[name="edit-todo-title"]`)
                    const todoDescription = editFormElement.querySelector(`input[name="edit-todo-description"]`)
                    const todoDueDate = editFormElement.querySelector(`input[name="edit-todo-duedate"]`)
                    const todoPriority = editFormElement.querySelector(`input[name="edit-todo-priority"]`)
                    const todoChecklist = editFormElement.querySelector(`input[name="edit-todo-checklist"]`)

                    const todoName = todo.title;
                    const todoIndex = allProjects[index].todoList.findIndex(todo => todo.title === todoName);
                    console.log(todoIndex);

                    todoTitle.value = todo.title;
                    todoDescription.value = todo.description;
                    todoDueDate.value = todo.dueDate;
                    todoPriority.value = todo.priority;
                    todoChecklist.value = todo.checklist;

                    editFormElement.addEventListener(`submit`, (e) => {
                        e.preventDefault();
                        // const projectName = document.querySelector(`h2`).textContent.slice(11);
                        // const indexOfProject = allProjects.findIndex(project => project.name === projectName);
                        console.log(`In the listener ${projectName}`);
                        const todoTitle = e.target.querySelector(`[name="edit-todo-title"]`).value;
                        const todoDescription = e.target.querySelector(`[name="edit-todo-description"]`).value;
                        const todoDueDate = e.target.querySelector(`[name="edit-todo-duedate"]`).value;
                        const todoPriority = e.target.querySelector(`[name="edit-todo-priority"]`).value;
                        const todoChecklist = e.target.querySelector(`[name="edit-todo-checklist"]`).value;

                        editTodo(index,todoIndex,todoTitle,todoDescription,todoDueDate,todoPriority,todoChecklist)

                        e.target.reset();
                        dialogEditTodo.close();
                        resetTodo();
                        populateTodo(index);
                        console.log(`Project index is: ${index}`);
                    });
                })();
        };
        button1.textContent = "Edit";
        div.appendChild(button1);
        const button2 = document.createElement(`button`);
        button2.textContent = "Delete";
        button2.onclick = function() { deleteTodo(projName,todo.title);populateTodo(index); }
        button2.id = 'delete-todo-btn';
        div.appendChild(button2);
        
    });

}


const formTodo = function(){

    const formElement = document.querySelector(`.todo-form`);

    formElement.addEventListener(`submit`, (e) => {
        e.preventDefault();
        const projectName = document.querySelector(`h2`).textContent.slice(11);
        const indexOfProject = allProjects.findIndex(project => project.name === projectName);
        console.log(`In the listener ${projectName}`);
        const todoTitle = e.target.querySelector(`[name="todo-title"]`).value;
        const todoDescription = e.target.querySelector(`[name="todo-description"]`).value;
        const todoDueDate = e.target.querySelector(`[name="todo-duedate"]`).value;
        const todoPriority = e.target.querySelector(`[name="todo-priority"]`).value;
        const todoChecklist = e.target.querySelector(`[name="todo-checklist"]`).value;
        console.log(todoTitle);
        createTodos(indexOfProject,todoTitle,todoDescription,todoDueDate,todoPriority,todoChecklist);
        e.target.reset();
        dialogTodo.close();
        resetTodo();
        populateTodo(indexOfProject);
        console.log(`Project index is: ${indexOfProject}`);
    });
}


const formProject = function(){
    const formElement = document.querySelector(`.project-form`);
    formElement.addEventListener(`submit`, (e) => {
        e.preventDefault();
        const projectName = e.target.querySelector(`[name="project-name"]`).value;
        createProject(projectName);
        e.target.reset();
        dialogProject.close();
        resetProject();
        populateProjects(); 
        buttonCreateProject();
    });
}

formProject();














