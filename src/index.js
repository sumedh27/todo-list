import styles from "./styles.css"
import {getTodos, getProjects} from "./logic.js";

const main = document.querySelector(`main`);

const reset = () => main.innerHTML = ``;

const todoList = function(index){
    const todos = getTodos();

    reset();

    const todoLists = document.createElement(`div`);
    todoLists.className = "todo-list";
    main.appendChild(todoLists);

    const div = document.createElement(`div`);
    todoLists.appendChild(div);
    
    const projectName = document.createElement(`h2`);
    projectName.textContent = `Project Name`;
    div.appendChild(projectName);

    const div2 = document.createElement(`div`);
    div2.className = "todo-cards";
    todoLists.appendChild(div2);

    todos.forEach(todo => {
        if(todo.partOfProject === index){
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
            button1.id = 'open-btn';
            button1.textContent = "Open";
            div.appendChild(button1);
            const button2 = document.createElement(`button`);
            button2.textContent = "Delete";
            button2.id = 'delete';
            div.appendChild(button2);
        
        }
        
    });


};

const renderProjectLists = (function () {
    
    const projects = getProjects();

    const projectContainer = document.createElement(`div`);
    projectContainer.className = "project-container";
    main.appendChild(projectContainer);

    projects.forEach(project => {
        const card = document.createElement(`div`);
        card.className = "card";
        projectContainer.appendChild(card);

        const name = document.createElement(`h2`);
        name.textContent = project.name;
        card.appendChild(name);

        const description = document.createElement(`p`);
        description.textContent = project.description;
        card.appendChild(description);

        const div = document.createElement(`div`);
        card.appendChild(div);    
        const button1 = document.createElement(`button`);
        button1.id = 'open-btn';
        button1.textContent = "Open";
        div.appendChild(button1);
        const button2 = document.createElement(`button`);
        button2.textContent = "Delete";
        button2.id = 'delete';
        div.appendChild(button2);

    });

    const openBtn = document.querySelectorAll(`#open-btn`);
    openBtn.forEach((button,index) => 
        button.addEventListener(`click`, () => {
            todoList(index);
    }));


})();








