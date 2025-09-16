const express = require('express');
const router = express.Router();

router.get("/", (req,res,next)=>{
    res.json({
        body: req.body,
        params: req.params,
        query: req.query,
        header: req.headers
    })
})

module.exports = router;