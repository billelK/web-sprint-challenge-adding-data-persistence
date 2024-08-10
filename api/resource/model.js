// build your `Resource` model here
const db = require("../../data/dbConfig")

async function createRessource(payload) {
    
    const idNewRessource = await db("resources")
        .insert(payload)
    const newResource = await db("resources")
        .where("resource_id", idNewRessource).first()
    return newResource
}

async function findAllRessources() {
    const result = await db("resources")
    return result 
}

module.exports = {
    createRessource,
    findAllRessources
}