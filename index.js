const express = require('express');
const app = express();

app.use(express.json());

const to_do = [
    {
        id: 1,
        title: "First task",
        status: {
            completed: false
        }
    }
];

//Get all tasks
app.get('/', (req, res) => {
    res.json(to_do);
});

//Add a new task
app.post('/', (req, res) => {
    const newTask = {
        id: to_do.length + 1,
        title: req.body.title || "Untitled Task",
        status: {
            completed: false
        }
    };
    to_do.push(newTask);
    res.status(201).json(newTask);
});

//Update a task (mark as completed or change title)
app.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = to_do.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    if (req.body.title) {
        task.title = req.body.title;
    }

    if (req.body.status && typeof req.body.status.completed === 'boolean') {
        task.status.completed = req.body.status.completed;
    }

    res.json(task);
});

//Delete a task
app.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = to_do.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
    }

    to_do.splice(taskIndex, 1);  // Remove task from array
    res.json({ message: 'Task deleted' });
});


app.use( (err,req,res,next) => {
    res.json({
        msg: "Something is up with our Server!"
    })
})
// Start server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
