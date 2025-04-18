import styles from "./styles.css"
import {getTodos, getProjects,displayTodos,deleteProject,deleteTodo} from "./logic.js";

const main = document.querySelector(`main`);

const reset = () => main.innerHTML = `
    <div class="add-todo-button">
        <button>ADD TODO</button>
    </div>`;


const renderProjectLists = function () {
    
    const projects = getProjects();

    const projectContainer = document.createElement(`div`);
    projectContainer.className = "project-container";
    main.appendChild(projectContainer);

    projects.forEach(project => {
        const card = document.createElement(`div`);
        card.className = "card";
        card.classList.add(`${project.UUID}`);
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
        button2.id = 'delete-btn';
        button2.onclick = deleteProject;
        div.appendChild(button2);

    });


    const openBtn = document.querySelectorAll(`#open-btn`);
    openBtn.forEach((button,index) => 
        button.addEventListener(`click`, () => {
            todoList(index);
    }));


};


renderProjectLists();

// const buttonsWrapper = (function (){
//     const openBtn = document.querySelectorAll(`#open-btn`);
//     const openButton = openBtn.forEach((button,index) => 
//         button.addEventListener(`click`, () => {
//             todoList(index);
//     }));
    
//     return openButton;
// })();

const backBtn = document.querySelector("#back-btn");
backBtn.addEventListener(`click`, () => {
    reset();
    renderProjectLists();
});



const todoList = function(index){
    const displayTodo = displayTodos(index);
    const project = getProjects();

    reset();

    const todoLists = document.createElement(`div`);
    todoLists.className = "todo-list";
    main.appendChild(todoLists);

    const div = document.createElement(`div`);
    todoLists.appendChild(div);
    
    const projectName = document.createElement(`h2`);
    projectName.textContent = project[index].name;
    div.appendChild(projectName);

    const div2 = document.createElement(`div`);
    div2.className = "todo-cards";
    todoLists.appendChild(div2);

    // const deleteTodo = function(){
    //     const todoId = this.previousSibling.classList[0];
    
    //     const findTodo = displayTodo.findIndex(
    //       (element) => element.UUID === todoId
    //     );
    //     const delBook = displayTodo.splice(findTodo, 1);
    //     console.log(displayTodo);
    //     this.previousSibling.remove();
    // }
    

    displayTodo.forEach((todo) => {
            console.log(index);
            const card = document.createElement(`div`);
            card.className = "card";
            card.classList.add(`${todo.UUID}`);
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
            button2.id = 'delete-todo-btn';
            button2.onclick = deleteTodo;
            div.appendChild(button2);

            // const deleteBtn = document.querySelectorAll(`#delete-todo-btn`);
            // deleteBtn.forEach((button,index) => 
            //     button.addEventListener(`click`, () => {
            //         displayTodo.find(todo => {
            //             if(todo.UUID == deleteBtn[index].dataset.uniqueId){
            //                 console.log(`test`);
            //             }
            //         });                 
            // }));
        
    });


};







