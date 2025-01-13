//function ChangeName(){
 // const [name,setName]=React.useState("Suhail")

  //function changeName(){
   // setName("Masai")
  //}

    //return (
      // <div>
       // <h1>Name:{name}</h1>
       // <button onClick={changeName}>Change Name to Masai</button>
       //</div>
   // );
//}

//function ArrayExample() {
   // let fruitsArr=["Apple","Mango"];
   // const [fruits,setFruits]=React.useState(fruitsArr);

    //function addFruit(){
       // const newFruits=[...fruits];
       // newFruits.push("Banana");
        //setFruits(newFruits);
    //}
    //return ( 
    //<>
    //<h1>Fruits</h1>
    //<ul>
    //    {fruits.map((elem)=>(
      //      <li>{elem}</li>
      //  ))}
   // </ul>
   // <button onClick={addFruit}>Add Banana</button>
//</>
   // );
//}

//function ObjectExample(){
  //  let details={name:"Suhail",age:22};
   // let [user,setUser]=React.useState(details);

   // const increaseAge=()=>{
   //     setUser({...user,age:user.age+1});
   // };
  // return (
  //  <>
    //  <h1>{user.name}</h1>
     // <p>{user.age}</p>
     // <button onClick={increaseAge}>Increase Age by 1 Year</button>
   // </>
   //)
//}

//function BooleanExample(){
  //const [isLoggedIn,setIsLoggedIn]=React.useState(false);

  //const toggleLogin=()=>{
   // setIsLoggedIn(!isLoggedIn);
  //};
   // return (
     //   <>
       // <h1>{isLoggedIn?"Welcome Back":"Please login in"}</h1>
       // <button onClick={toggleLogin}>{isLoggedIn?"Logout":"Login"}</button>
       // </>
    //)
//}

const Todo=()=>{
  const [currentTodo,setCurrentTodo]=React.useState("")
  const [todoList,setTodoList]=React.useState([])

    function handleInput(a) {
        setCurrentTodo(a.target.value)
    }

    function handleAddTask (){
        setTodoList([...todoList,currentTodo]);
    }

   
    return (
        <>
         <h1>Todo</h1>
         <input onChange={handleInput} type="text" placeholder="Enter task" />
         <button onClick={handleAddTask}>Add Task</button>


         <ul>
            {/* Tasks needs to be Updated*/}
            {todoList.map((elem)=>(
                <li>{elem}</li>
            ))}
         </ul>
        </>
    )
}

ReactDOM.createRoot(document.querySelector("#root")).render(<Todo/>);