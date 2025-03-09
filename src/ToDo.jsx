import React, { useState } from "react";

export default function ToDo() {
    const [tasks, setTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDate, setTaskDate] = useState(new Date().toISOString().split("T")[0])
    const [taskDetail, setTaskDetail] = useState("")

    const handleAddTask = () => {
        // function to handle addition of tasks
        const newTask = { title: taskTitle, date: taskDate, detail: taskDetail }

        if (taskTitle.trim() !== "") {
            setTasks(t => [...t, newTask])

            setTaskTitle("")
            setTaskDetail("")
            setTaskDate(new Date().toISOString().split("T")[0])
        }

    }
    const handleRemoveTask = () => {
        // function to handle removal of tasks
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }
    const handleTaskTitle = (e) => {
        // function to handle task title
        setTaskTitle(e.target.value)
    }
    const handleTaskDate = (e) => {
        // function to handle tasks due date
        setTaskDate(e.target.value)
    }
    const handleTaskDetails = (e) => {
        // function to handle tasks details
        setTaskDetail(e.target.value)
    }

    const handleTaskUp = (index) => {
        // move task up on the list according to user
        if (index > 0) {
            const updatedTasks = [...tasks]
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    const handleTaskDown = (index) => {
        // move task down on the list according to user
        if (index < tasks.length) {
            const updatedTasks = [...tasks]
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return (
        <div className="to-do-list">
            <h2>TO DO OR NOT TO DO</h2>
            <div>
                <input type="text" value={taskTitle} onChange={handleTaskTitle} placeholder="Enter task name" />
                <input type="date" value={taskDate} onChange={handleTaskDate} /><br />
                <input type="text" value={taskDetail} onChange={handleTaskDetails} placeholder="Enter task details" />
                <button className="add-task-btn" onClick={handleAddTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => {
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn" onClick={() => handleRemoveTask(index)}>
                            Remove
                        </button>
                        <button className="move up-btn" onClick={() => handleTaskUp(index)}>
                            ⬆️
                        </button>
                        <button className="move down-btn" onClick={() => handleTaskDown(index)}>
                            ⬇️
                        </button>
                    </li>
                })}
            </ol>
        </div>
    )
}