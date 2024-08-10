// build your `/api/tasks` router here
const express = require("express")
const router = express.Router()


router.get("/", (req,res,next) => {
    try {
        res.json("Hello from task router")
    } catch(error) {
        next(error)
    }
})

router.use((err,req,res,next) => { // eslint-disable-line
    res.status(err.status || 500)
        .json({
            message: "err.message"
        })
})

module.exports = router