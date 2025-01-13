import React, {useState,useEffect} from "react";

import {Box,Input,Select,Button} from "@chakra-ui/react";

import {useNavigate} from "react-router-dom";
import axios from "axios";

function QuizSetup(){
    const [categories,setCategories]=useState([]);
    const [formData,setFormData]=useState({
       name:"",
       category:"",
       difficulty:"",
       amount:10,

    });

    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("https://opentdb.com/api_category.php")
        .then((res)=>setCategories(res.data.trivia_categories))
        .catch((err)=>console.error(err));
    },[]);


    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };


    const startQuiz=()=>{
        localStorage.setItem("quizSetup",JSON.stringify(formData));
        navigate("/quiz");
    };


    return (
        <Box p={5}
        className="quiz-setup">
            <input 
            name="name"
            placeholder="Enter your name" mb={3}
            onChange={handleChange}/>

            <Select name="category"
            placeholder="Select category" mb={3}
            onChange={handleChange}>
                {categories.map((category)=>(
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </Select>

            <Select name="difficulty" placeholder="Select difficulty" mb={3}
            onChange={handleChange}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </Select>

            <input name="amount" type="number" placeholder="Number of Questions" mb={3}
            onChange={handleChange}/>

            <Button color="teal" onClick={startQuiz}></Button>
        </Box>
    );

}

export default QuizSetup;