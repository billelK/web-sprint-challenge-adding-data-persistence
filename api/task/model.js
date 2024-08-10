// build your `Task` model here
const db = require("../../data/dbConfig")

async function createTask(payload) {
    if(!payload.task_completed) {
        payload.task_completed = false
    } 
    const idNewtask = await db("tasks")
        .insert(payload)
    const newtask = await db("tasks")
        .where("task_id", idNewtask).first()
    if(newtask.task_completed === 0) newtask.task_completed = false
    else newtask.task_completed = true
    return newtask
}

async function findAllTasks() {
    const result = await db("tasks")
    result.forEach(project => project.task_completed 
        ? project.task_completed = true 
        : project.task_completed = false)
    return result 
}

module.exports = {
    createTask,
    findAllTasks
}