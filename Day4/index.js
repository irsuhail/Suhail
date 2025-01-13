function App(){
    const [formData,setFormData]=React.useState({
        username:"",
        email:"",
        phone:"",
    });


  const [users,setUsers]=React.useState([])
  const handleChange=(e)=>{
      const{name,value}=e.target;
      console.log("name:",name,"value:",value)
      //setFormData({...formData,[name]:value});
      setFormData({...formData,[name]:value})
  };
  

  const handleFetchData=async()=>{
      const res=await axios.get("https://web-205-139cf-default-rtdb.firebaseio.com/users.json")
      const out=Object.entries(res.data)
      setUsers(out)
  }

  console.log(users)



  //singleuseState
  //capture information
  const handleSubmit=(e)=>{
    e.preventDefault();

    const postData={
        username:formData.username,
        email:formData.email,
        phone:formData.phone
    }
    const res=axios.post("https://web-205-139cf-default-rtdb.firebaseio.com/users.json",
    postData
);
console.log(res)

setFormData({
   username:"",
   email:"",
   phone:"",

});
};
//axios.get(url)
//axios.post(url)



  
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input  
            type="text" 
            placeholder="enter username" 
            name="username"
            onChange={handleChange}
            value={formData.username}
            />
            <input  
            type="email" 
            placeholder="enter email" 
            name="email"
            onChange={handleChange}
            value={formData.email}
            />
             <input  
            type="number" 
            placeholder="enter phone number" 
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            />
            <input type="submit"/>
        </form>
        <button onClick={handleFetchData} style={{marginTop:"20px"}}>FetchData</button>

        <div className="container">
       {users.map((elem)=>(
        <DisplayData data={elem} handleFetchData={handleFetchData}/>
       ))}
      </div>
        </>
    );
}



function DisplayData(props){
    const{data,handleFetchData}=props;
    console.log(props)
    const handleDelete=async(id)=>{
        const res=  await axios.delete(
            `https://web-205-139cf-default-rtdb.firebaseio.com/users/${id}.json`
            );
        console.log(res);
        handleFetchData()
       };
    console.log(props,"props")
    return (
    <>

    <div className="card">
        <h3>{data[1].username}</h3>
        <h3>{data[1].email}</h3>
        <h3>{data[1].phone}</h3>
        <button onClick={()=>handleDelete(props.data[0])}>Delete</button>
        <button>Edit</button>
    </div>
        
    
    </>
    );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App/>);
