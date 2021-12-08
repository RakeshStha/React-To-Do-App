import React, { useState } from 'react'
import './task.css'

function TaskInput(props) {

    const [task, setTask] = useState("");
    const handleSubmit = (e)=> {
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: task
        })
        e.preventDefault();
        setTask('')
    }

    return (
        <div>
            <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-center m-3 p-3">
                        <form className="form-group" onSubmit={handleSubmit}>
                                <label for="task" className="form-label font-weight-bold">Add your Task: &nbsp;
                                    <input type="text" 
                                    className="form-control-sm"
                                    placeholder="Your task"
                                    name="task"
                                    value={task}
                                    onChange={(e)=> setTask(e.target.value)}
                                    />    
                                </label>
                                <p className="text-center m-3">      
                                    <button type="submit" 
                                    className="btn btn-outline-primary w-50" 
                                    >ADD</button>
                                </p>
                        <div>
                        </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default TaskInput