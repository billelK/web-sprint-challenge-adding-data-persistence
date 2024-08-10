// build your `/api/projects` router here
const express = require("express")
const projectModel = require("./model")
const router = express.Router()


router.post("/", async(req,res,next) => {
    await projectModel.createProject(req.body)
        .then(project => {
            res.json(project)
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