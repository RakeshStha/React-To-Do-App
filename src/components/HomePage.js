import React, {useState} from 'react'
import TaskInput from './TaskInput'
import TaskCard from './TaskCard'

function HomePage() {
    const[todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo || /^\s*$/.test(todo.text)){
            return
        };
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArr);
        alert(id)
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


        return (
            <div>
                <div className="container-fluid">
                    <h1 className="text-center">To Do</h1>
                        <TaskInput onSubmit={addTodo}/>

                        <div className=" row d-flex align-items-center justify-content-center">
                            <TaskCard todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                        </div>
                </div>
            </div>
            
        )

}
export default HomePage
