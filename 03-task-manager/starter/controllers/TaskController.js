const Task = require('../models/task')

const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json( {tasks})
    }catch(error){
        res.status(500).json({ msg : error})
    }
    }
   

const createTask =async (req,res) => {
    try{
       const task = await Task.create( req.body)
       res.status(201).json({task})
    }catch(error) {
       res.status(400).json({ msg: error})
    }
    }

const getTask = async (req,res) => {
    try{
        const task = await Task.findOne({_id:req.params.id})
        res.status(201).json({task})
    }catch(error) {
        res.status(400).json({msg : error})
    }     
    }

const updateTask = async (req,res) => {
    try {
        const update = await Task.findOneAndUpdate({_id: req.params.id },req.body, {
            new : true, runValidators : true
        })
        res.status(201).json({update})
    }catch(error){
        res.status(400).json({msg:error})
    }
        
    }
const deleteTask =async (req,res) => {
    try {
        const remove = await Task.findOneAndDelete({_id:req.params.id})
        res.status(201).json({remove})
    }catch(error) {
        res.status(400).json( {msg : error})
    }
    }

module.exports = {getAllTasks , getTask, deleteTask, createTask, updateTask}