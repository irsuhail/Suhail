import {memo} from 'react'

const Todo=memo(({todo,onToggle,onDelete})=>{
    return (
        <div className="todo-item">
            <input
            type="checkbox"
            checked={todo.completed}
            onChange={()=>
                onToggle(todo.id)}/>
            
            <span style={{
                textDecoration:todo.completed?'line-through':'none'
            }}>
                {todo.next}
            </span>
            <button onClick={()=>
                onDelete(todo.id)}>Delete</button>
                
        </div>
    )
})

export default Todo