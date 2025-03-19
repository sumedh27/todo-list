import styles from "./styles.css"

const allTodos = [
    { 
        title: `Test`,
        description: `This is a test`,
        dueDate: `22-02-2025`,
        priority: `high`,
        checklist: false
    },
    {
        title: `Test2`,
        description: `This is a SECOND TEST`,
        dueDate: `22-02-2026`,
        priority: `low`,
        checklist: false
    },
    {
        title: `Test3`,
        description: `This is a THIRD TEST`,
        dueDate: `22-02-2025`,
        priority: `high`,
        checklist: false
    }
];

const getTodos = () => allTodos;


const createTodo = function (title,description,dueDate,priority,checklist) {

    const todo =
        {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            checklist: checklist
        };

    allTodos.push(todo);
    return allTodos;
};

createTodo(`THIS IS A NEW TEST`,`THIS IS NEW DESCRIPTION LULW`,`23-12-2004`,`low`,true);
createTodo(`THIS IS A NEW TEST`,`THIS IS NEW DESCRIPTION LULW`,`23-12-2004`,`low`,true);
createTodo(`THIS IS A NEW TEST`,`THIS IS NEW DESCRIPTION LULW`,`23-12-2004`,`low`,true);


console.log(getTodos());

const Todos = (function(){
    const printTodos = getTodos();

    return printTodos.forEach((todo,index) => {
        console.log(`Todo: ${index + 1} Title: ${todo.title}`);
    });

})();


const allProjects = [        
    { 
        name: `Test`,
        description: `This is a test`,
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

createProject(`test`,`testasdasdasd`);
createProject(`tes1t`,`testasdasdasd`);
createProject(`tes2t`,`testasdasdasd`);

console.log(getProjects());

const Projects = (function(){
    const printProjects = getProjects();

    return printProjects.forEach((project,index) => {
        console.log(`Project Number: ${index + 1} Project Name: ${project.name}`);
    });

})();





