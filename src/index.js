import styles from "./styles.css"

const allTodos = [
    {   
        partOfProject: 0,
        title: `Make Coffee`,
        description: `Make coffe in the morning`,
        dueDate: `20-03-2025`,
        priority: `high`,
        checklist: false
    },
    {
        partOfProject: 1,
        title: `Do Homework`,
        description: `Do homework this day`,
        dueDate: `20-03-2025`,
        priority: `high`,
        checklist: false
    },
    {
        partOfProject: 2,
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

createTodo(3,`Eat outside`,`Eat fast food at a fast food joint`,`25-03-2025`,`low`,false);
createTodo(3,`Go to a park`,`Go take a walk in the park`,`15-03-2025`,`low`,true);
createTodo(2,`Wake up early`,`Wake up early on this day`,`26-03-2025`,`high`,false);
createTodo(2,`Wake up late`,`Wake up late on this day`,`28-03-2025`,`low`,false);



const Todos = (function(){
    const printTodos = getTodos();

    return printTodos.forEach((todo,index) => {
        // console.log(`Todo: ${index + 1} Title: ${todo.title}`);
    });

})();


const allProjects = [        
    { 
        name: `Morning Routine`,
        description: `About early mornings`,
    }
];

const getProjects = () => allProjects;


const createProject = function(name,description){
    const project = 
        {
            name: name,
            description: description
        };

    allProjects.push(project);

    return allProjects;
};

createProject(`Study`,`About study routine`);
createProject(`Sleeping Schedule`,`To fix and keep a watch on sleeping schedule`);
createProject(`Outside`,`Todos about outside life`);

const Projects = (function(){
    const printProjects = projectTodoWrapper();

    return printProjects;

})();

function projectTodoWrapper(){
    const todos = getTodos();
    const projects = getProjects();

    return projects.forEach((project,index) => {
            console.log(`Project ${index + 1} ${project.name}`);
            todos.forEach(todo => {
                if(todo.partOfProject === index){
                    console.log(`Part of ${project.name} `);
                    console.log(`
                        Title: ${todo.title}
                        Description: ${todo.description}
                        Due Date: ${todo.dueDate}
                        Priority: ${todo.priority}
                        Checklist: ${todo.checklist}
                        `);
                };
            });
    });
}




