interface task {
    name: string,
    desc: string,
    started: Date
}


function createTask(name: string , desc: string): Partial<task> {
    let newTask : Partial<task>= {}
    newTask.name = name
    newTask.desc = desc
    newTask.started = new Date()
    return newTask
}



function createSuvTask(name: string , desc: string): task {
    let newTask : Partial<task>= {}
    newTask.name = name
    newTask.desc = desc
    newTask.started = new Date()
    return newTask as task
}