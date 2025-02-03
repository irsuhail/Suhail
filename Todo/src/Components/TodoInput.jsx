import {memo} from 'react'

const TodoInput=memo(({value,onChange,onAdd,onKeyPress})=>{
    return (
        <div className="todo-input">
            <input
            type="text"
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            placeholder="Add a new todo"/>
            <button onClick={onAdd}>Add</button>
        </div>
    )
})

export default TodoInput