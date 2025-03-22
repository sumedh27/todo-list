import styles from "./styles.css"

import {getProjects,createProject,createTodos,deleteProject,deleteTodo,getTodo} from "./logic.js"

const allProjects = getProjects();
const main = document.querySelector(`main`);

const reset = () => main.innerHTML = `
    <div class="add-todo-button">
        <button>ADD TODO</button>
    </div>`;



console.table(allProjects);

const buttonOpen = function(){
    const openBtn = document.querySelectorAll(`#open-btn`);
    openBtn.forEach((button,index) => {
        button.addEventListener(`click`, () => {
            populateTodo(index);
        });
    });
};

const buttonBack = (function(){
    const backBtn = document.querySelector("#back-btn");

    backBtn.addEventListener(`click`, () => {
        reset();
        populateProjects();
    });
})();

// const buttonDelete = function(){
//     const btnDeleteProject = document.querySelectorAll("#delete-btn");
//     const btnDeleteTodo = document.querySelectorAll("#delete-todo-btn");

//     btnDeleteProject.forEach(button => {
//         button.addEventListener(`click`, (e) => {
//             console.log(`delete project ${e.target.parentElement.parentElement}`)
//         });
//     });

//     btnDeleteTodo.forEach(button => {
//         button.addEventListener(`click`, () => {
//             console.log(`delete todo button clicked`)
//         });
//     });
// }

const populateProjects = function(){
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
        button2.onclick = function() { deleteProject(project.name); reset(); populateProjects();}
        button2.id = 'delete-btn';
        div.appendChild(button2);
    });

    buttonOpen(); 
    // buttonDelete();  
    console.table(allProjects);


}

populateProjects();


const populateTodo = function(index){
    const projName =  allProjects[index].name;
    const todos = allProjects[index].todoList;

    reset();

    const todoLists = document.createElement(`div`);
    todoLists.className = "todo-list";
    main.appendChild(todoLists);

    const div = document.createElement(`div`);
    todoLists.appendChild(div);
    
    const projectName = document.createElement(`h2`);
    projectName.textContent = `Project :- ${projName}`;
    div.appendChild(projectName);

    const div2 = document.createElement(`div`);
    div2.className = "todo-cards";
    todoLists.appendChild(div2);

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
        button2.onclick = function() { deleteTodo(projName,todo.name); reset(); populateTodo(index)}
        button2.id = 'delete-todo-btn';
        div.appendChild(button2);
    });

}











