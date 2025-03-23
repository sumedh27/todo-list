import styles from "./styles.css"

import {getProjects,createProject,createTodos,deleteProject,deleteTodo,getTodo} from "./logic.js"

const allProjects = getProjects();
const main = document.querySelector(`main`);
const dialogProject = document.querySelector(".create-project");
const dialogTodo = document.querySelector(".create-todo");

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

const buttonOpen = function(){
    const openBtn = document.querySelectorAll(`#open-btn`);
    openBtn.forEach((button,index) => {
        button.addEventListener(`click`, () => {
            populateTodo(index);
            formTodo();
        });
    });
};

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
        name.textContent = project.name;
        card.appendChild(name);

        const div = document.createElement(`div`);
        card.appendChild(div);    
        const button1 = document.createElement(`button`);
        button1.id = 'open-btn';
        button1.textContent = "Open";
        div.appendChild(button1);
        const button2 = document.createElement(`button`);
        button2.textContent = "Delete";
        button2.onclick = function() { deleteProject(project.name); resetProject(); populateProjects(); buttonCreateProject(); }
        button2.id = 'delete-btn';
        div.appendChild(button2);
    });

    buttonOpen(); 
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

    backBtn.addEventListener(`click`, () => {
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
        button1.textContent = "Edit";
        div.appendChild(button1);
        const button2 = document.createElement(`button`);
        button2.textContent = "Delete";
        button2.onclick = function() { deleteTodo(projName,todo.title); resetTodo(); populateTodo(index); buttonCreateTodo()}
        button2.id = 'delete-todo-btn';
        div.appendChild(button2);
        
    });
}

const formTodo = function(){
    const projects = getProjects();

    const formElement = document.querySelector(`.todo-form`);

    const projectIndexName = document.querySelector(`.project-name`).textContent.slice(11);
    const projectIndex = projects.findIndex(project => project.name === projectIndexName);

    formElement.addEventListener(`submit`, (e) => {
        e.preventDefault();
        const todoTitle = e.target.querySelector(`[name="todo-title"]`).value;
        createTodos(projectIndex,todoTitle);
        e.target.reset();
        dialogTodo.close();
        populateTodo(projectIndex);
        buttonCreateTodo();
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












