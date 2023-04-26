const express = require('express')
const router = express.Router()

//@desc Login/Landing page 
// @route GET/

router.get('/', (req,res) => {
    res.render('./views/login')
})

// @desc Dashboard
// @route Get/ Dashboard
router.get('/dashboard', (req,res) => {
    res.render('./views/dashboard')
})
module.exports = router