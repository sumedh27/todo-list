const allTodos = [
    {   
        UUID: crypto.randomUUID(),
        // UUID: "asdf",
        partOfProject: 1,
        title: `Make Coffee`,
        description: `Make coffe in the morning`,
        dueDate: `20-03-2025`,
        priority: `high`,
        checklist: false,
    },
    {
        UUID: crypto.randomUUID(),
        // UUID: "wwf",
        partOfProject: 2,
        title: `Do Homework`,
        description: `Do homework this day`,
        dueDate: `20-03-2025`,
        priority: `high`,
        checklist: false
    },
    {
        UUID: crypto.randomUUID(),
        partOfProject: 3,
        title: `Sleep early`,
        description: `Sleep early this day`,
        dueDate: `22-03-2025`,
        priority: `high`,
        checklist: false
    }
];

const getTodos = () => allTodos;


const createTodo = function (partOfProject,title,description,dueDate,priority,checklist) {

    const todo =
        {
            UUID: crypto.randomUUID(),
            partOfProject: partOfProject,
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            checklist: checklist
        };

    allTodos.push(todo);
    return allTodos;
};

createTodo(4,`Eat outside`,`Eat fast food at a fast food joint`,`25-03-2025`,`low`,false);
createTodo(4,`Go to a park`,`Go take a walk in the park`,`15-03-2025`,`low`,true);
createTodo(3,`Wake up early`,`Wake up early on this day`,`26-03-2025`,`high`,false);
createTodo(3,`Wake up late`,`Wake up late on this day`,`28-03-2025`,`low`,false);

// const deleteTodo = function(index){
//     const todos = getTodos();
//     todos.splice(index, 1);
// }

const allProjects = [        
    { 
        UUID: crypto.randomUUID(),
        name: `Morning Routine`,
        description: `About early mornings`,
        id: 1
    }
];

const getProjects = () => allProjects;

let nextId = allProjects.length + 1;


const createProject = function(name,description){
    const project = 
        {
            UUID: crypto.randomUUID(),
            name: name,
            description: description,
            id: nextId++
        };
    
    allProjects.push(project);

    return allProjects;
};

createProject(`Study`,`About study routine`);
createProject(`Sleeping Schedule`,`To fix and keep a watch on sleeping schedule`);
createProject(`Outside`,`Todos about outside life`);

// const deleteProject = function(index){
//     const projects = getProjects();
//     projects.splice(index, 1);
// }


// const sameIdTodos = function(id){
//     const todos = getTodos();
//     const projects = getProjects();
//     const newTodos = [];

//     const todoId = todos.map((todo) => {
//         if(todo.partOfProject === id){
//             return newTodos.push(todo);
//         }
//     })
//     return newTodos;
// }


const displayTodos = function(id){
    const todos = getTodos();
    const projects = getProjects();

    const projId =  projects.filter(project => project.id === id + 1).map(proj => proj.id);

    return todos.filter((todo) => todo.partOfProject == projId);
}


const deleteTodo = function(){
    const parentDiv = this.parentElement
    const todoId = parentDiv.parentElement.classList[1];

    const todos = getTodos();

    const findIndex = todos.findIndex(todo => todo.UUID === todoId );

    todos.splice(findIndex,1);

    parentDiv.parentElement.remove();


}

const deleteProject = function(){
    const parentDiv = this.parentElement
    const projectId = parentDiv.parentElement.classList[1];

    const projects = getProjects();

    const findIndex = projects.findIndex(todo => todo.UUID === projectId );
    
    const todos = getTodos();
    const projectTodos = displayTodos(findIndex);

    projects.splice(findIndex,1);

    // const deleteTodos = todos.filter(todo => todo);
    // console.log(deleteTodos);
    projectTodos.forEach((projectTodo) =>{ 

            const getIndex = todos.findIndex(todo => todo.UUID === projectTodo.UUID);
            todos.splice(getIndex,1);
    });



    console.log(getTodos());
    parentDiv.parentElement.remove();

}

console.log(getProjects());
console.log(getTodos());



export {getTodos, getProjects,displayTodos,deleteTodo,deleteProject}; 
