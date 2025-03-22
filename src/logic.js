const allProjects = [
    {
        name: `Workout`,
        todoList: []
    }
];

const getProjects = () => allProjects;

const createProject = (projectName) => {
    const todos = [];

    const project = {
        name: projectName,
        todoList: todos
    };

    allProjects.push(project);

};

createProject(`Sleeping Schedule`);
createProject(`Go OUTSIDE`);

const createTodos = function (partOfProject,title,description,dueDate,priority,checklist){

    const todosObj = 
        {
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            checklist: checklist
        }


    allProjects[partOfProject].todoList.push(todosObj);
};

createTodos(0,`Saturday Leg Day`,`Do leg workout on saturday`,`25-03-2025`,`high`,false);
createTodos(0,`Monday Abs Day`,`Do abs workout on Monday`,`23-03-2025`,`high`,false);
createTodos(1,`Wake up at 8`,`wake up at 8 am to run some home errands`,`29-03-2025`,`high`,false);
createTodos(2,`Walk in the Park`,`Take a nice lil walk in the evening in nearest Park`,`01-04-2025`,`low`,false);

const deleteTodo = function(projectName,todoName){
    
    const findProjectIndex = allProjects.findIndex(project => project.name === projectName);
    const findTodoIndex = allProjects[findProjectIndex].findIndex(todo => todo.name === todoName);

    // const todos = allProjects[findProjectIndex].todoList;

    // console.log(todos);

    // console.log(allProjects[0].todoList[1])

    allProjects[findProjectIndex].todoList.splice(findTodoIndex,1);
}

// deleteTodo(`Workout`,0);

const deleteProject = function(projectName){
    const findProjectIndex = allProjects.findIndex(project => project.name === projectName);

    allProjects.splice(findProjectIndex,1);
    
};

// deleteProject(`Go OUTSIDE`);

const getTodo = function(projectName,index){
    const findProjectIndex = allProjects.findIndex(project => project.name === projectName);

    const todos = allProjects[findProjectIndex].todoList;

    return todos[index];

}

// getTodo(`Workout`,1);



export {getProjects,createProject,createTodos,deleteProject,deleteTodo,getTodo};