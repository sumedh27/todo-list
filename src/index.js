import styles from "./styles.css"

const createTodo = function (title,description,dueDate,priority,checklist) {

    const todo = [
        {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            checklist: checklist
        }
    ]

    return todo;
};


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



const Projects = (function(){
    const printProjects = getProjects();

    return printProjects.forEach((project,index) => {
        console.log(`Project Number: ${index + 1} Project Name: ${project.name}`);
    });

})();





