//Conter Application

const Counter=()=>{
const [count,setCount]=React.useState(0)

function incrementFun(){
    setCount(count+1)
}
console.log(count)

    return (
       <>
       <h1>Counter:{count}</h1>
       <button onClick={incrementFun}>Increment</button>
       </>
    );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<Counter/>);