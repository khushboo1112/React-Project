import { useState } from "react";
import {v4 as uuidv4 } from "uuid";

export default function TodoList(){
    let [todos,setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
       setTodos([...todos,{ task: newTodo, id: uuidv4() }]);
       setNewTodo("");
    };                                    
    let updateTodoValue= (event) =>{
        setNewTodo(event.target.value);
    };
    // let deleteTodo = (id) => {
    //     setTodos((prevTodos) => {
    //         return prevTodos.filter(todo => todo.id !== id);
    //     });
    // }


    return(
        <div>
            <input placeholder="add a task" 
            value={newTodo}
            onChange={updateTodoValue}></input>
            <br></br>
            <br></br>
            <button onClick={addNewTask }>Add Task</button>
            <br></br>
            <br></br>
            <br></br>

            <hr></hr>
            <h4>Tasks ToDo</h4>
            <ul>
                {
                    todos.map((todo) =>{
                        <li key={todo.id}>{todo.task}</li>
                         })}
            </ul>  
        </div>
        
    );
}