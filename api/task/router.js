// build your `/api/tasks` router here
const express = require("express")
const taskModule = require("./model")
const router = express.Router()


router.post("/", async(req,res,next) => {
    await taskModule.createTask(req.body)
        .then(newTask => {
            res.json(newTask)
        })
        .catch(next)
})

router.get("/", async(req,res,next) => {
    await taskModule.findAllTasks(req.body)
        .then(Tasks => {
            res.json(Tasks)
        })
        .catch(next)
})

router.use((err,req,res,next) => { // eslint-disable-line
    res.status(err.status || 500)
        .json({
            message: err.message
        })
})

module.exports = router