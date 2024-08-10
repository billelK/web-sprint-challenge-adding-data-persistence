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
    const tasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
        "t.task_id",
        "t.task_description",
        "t.task_notes",
        "t.task_completed",
        "p.project_name",
        "p.project_description"
    )
    tasks.forEach(task => task.task_completed 
        ? task.task_completed = true 
        : task.task_completed = false)

    return tasks 
}

module.exports = {
    createTask,
    findAllTasks
}