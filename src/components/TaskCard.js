

import React, { useState  } from 'react'
import './task.css'
import TaskInput from './TaskInput'

function TaskCard({todos, completeTodo, removeTodo, updateTodo}) {
    const[edit, setEdit] = useState({
        id:null,
        value:''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id){
        return<TaskInput edit={edit} onSubmit={submitUpdate}/>
    }

   
    return todos.map((items, index) => (
        <div className={items.isComplete ? 'todo-row complete m-2': 'todo-row m-2'} key={index}>
               <div className="card" key={items.id} onClick={()=> completeTodo(items.id)}>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="p-3">
                            <h3>{items.text}</h3>
                        </div>
                        <div className="p-3 d-flex">
                                <div className="pencil" onClick={()=> removeTodo(items.id)}>   
                                        <i className="fa fa-trash m-3 pencil" 
                                        aria-hidden="true"></i>
                                </div>
                                <div className="delete" onClick={()=> setEdit({ id: items.id, value: items.text})}>
                                        <i className="fa fa-pencil m-3 delete" 
                                        aria-hidden="true"
                                        
                                        ></i>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    )
    )
}

export default TaskCard;
