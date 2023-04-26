const express = require("express");

const router = express.Router();

router.get("/",(req, res) => {
    res.render('index')
})

router.post("/",(req, res) => {
    res.json({message: "Create contact"})
});

router.get("/:id",(req, res) => {
    res.json({message: `Get contact for ${req.params.id}`})
});

router.put("/:id",(req, res) => {
    res.json({message: `Update contact for ${req.params.id}`})
});

router.delete("/:id",(req, res) => {  
    res.json({message: `Delete contact for ${req.params.id} `})
});



module.exports = router;