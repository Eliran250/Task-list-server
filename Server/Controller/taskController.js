const Task  = require("../Models/taskSchema");

exports.getTask = async(req,res) =>{
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching tasks", error });
    }
}

exports.postTask = async(req,res) =>{
    const { title, isCompleted } = req.body;
    if (!title) 
    {
        return res.status(400).json({ message: "Title required" });
    }
    try {
        const newTask = new Task({title, isCompleted});
        await newTask.save();
        res.status(201).json(newTask); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating task", error });
    }
}

exports.updateTask = async (req, res) => {
    const { id } = req.params;  
    const { title, isCompleted } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id,{ title, isCompleted },{ new: true });
        if (!updatedTask) 
        {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Error updating task", error });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;  
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task)
        {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully", task });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error deleting task", error });
    }
};
