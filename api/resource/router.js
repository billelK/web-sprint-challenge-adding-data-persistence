// build your `/api/resources` router here
const express = require("express")
const resourceModel = require("./model")
const router = express.Router()


router.post("/", async(req,res,next) => {
    await resourceModel.createRessource(req.body)
        .then(newResource => {
            res.json(newResource)
        })
        .catch(next)
})

router.get("/", async(req,res,next) => {
    await resourceModel.findAllRessources()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.use((err,req,res,next) => {// eslint-disable-line
    res.status(err.status || 500)
        .json({
            message: err.message
        })
})

module.exports = router