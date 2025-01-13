import axios from 'axios';
import {useEffect} from 'react'


function Todo(){

    useEffect(()=>{
         const fetchTods=async()=>{
            const res=await axios.get("https://jsonplaceholder.typicode.com/todos")
            console.log(res)
         }
    },[]);
    return (
        <>
           <h1>Todos</h1>
        
        </>
    )
}


export default Todo