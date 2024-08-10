// build your `/api/projects` router here
const express = require("express")
const router = express.Router()


router.get("/", (req,res,next) => {
    res.json("Hello from project router")
//     try {
//         res.json("Hello from project router")
//     } catch(error) {
//         next(error)
//     }
})

router.use((err,req,res,next) => {
    res.status(err.status || 500)
        .json({
            message: "err.message"
        })
})

module.exports = router