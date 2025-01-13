



const users=Array(10).fill(0).map((elem,index)=>(
   {id:index,name:`User ${index}`}
))
console.log(users);

function Demo(){
 const[users,setUsers]=React.useState(data)


   return  <>
    <div>
        {users.map((user,index)=>(
            <button>{user.name}</button>
        ))}
    </div>
    </>
   
}

ReactDOM.createRoot(document.getElementById("root")).render(<Demo/>);