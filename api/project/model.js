// build your `Project` model here
const db = require("../../data/dbConfig")

async function createProject(payload) {
    if(!payload.project_completed) {
        payload.project_completed = false
    } 
    const idNewProject = await db("projects")
        .insert(payload)
    const newProject = await db("projects")
        .where("project_id", idNewProject).first()
    if(newProject.project_completed === 0) newProject.project_completed = false
    else newProject.project_completed = true
    return newProject
}

async function findAllProjects() {
    const result = await db("projects")
    result.forEach(project => project.project_completed 
        ? project.project_completed = true 
        : project.project_completed = false)
    return result 
}

module.exports = {
    createProject,
    findAllProjects
}