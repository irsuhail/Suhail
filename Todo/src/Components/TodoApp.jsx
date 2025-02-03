import {useState,useCallback,useMemo} from 'react'
import TodoInput from './TodoInput'
import Todo from './Todo'

const heavyTask=()=>{
    let start=Date.now()
    while (Date.now()-start<400)
        continue
    return true
}

const TodoApp=()=>{
    const [todos,setTodos]=useState([])
    const [inputValue,setInputValue]=useState('')

    const heavyTaskResult=useMemo(()=>heavyTask,[])

    const handleAddTodo=useCallback(()=>{
        if (inputValue.trim()){
            setTodos(prev=>[...prev,{
                id:Date.now(),
                text:inputValue.trim(),
                completed:false
            }])

            setInputValue('')
        }
    },[inputValue])

    const handleKeyPress=useCallback((e)=>{
        if (e.key==='Enter'){
            handleAddTodo()
        }
    },[handleAddTodo])

    const handleToggleTodo=useCallback((id)=>{
        setTodos(prev=>prev.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    },[])

    const handleDeleteTodo=useCallback((id)=>{
        setTodos(prev=>prev.filter(todo=>todo.id!==id))
    },[])

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <TodoInput value={inputValue}
            onChange={handleInputChange}
            onAdd={handleAddTodo}
            onKeyPress={handleKeyPress}/>

            <div className="todos-container">
                {todos.map(todo=>(
                    <Todo key={todo.id}
                    todo={todo}

                    onToggle={handleToggleTodo}
                    onDelete={handleDeleteTodo}/>
                ))}
            </div>
        </div>
    )
}

export default TodoApp