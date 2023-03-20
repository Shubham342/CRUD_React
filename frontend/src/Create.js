import React from "react";
import Header from "./Header";
import {useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'

function Create(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const handleChange = event =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(formData)
        fetch('https://reqres.in/api/users',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(formData),
            
          })
            .then(response => alert("User created"),
            navigate("/"))           
 };
    

    return(<div>
        <Header />
        <h2>Enter Email and Password to create a new user</h2>

        <form onSubmit={handleSubmit}>
            <label>Email:</label ><br />
            <input type="text" name="email" value={formData.email} onChange={handleChange} /><br />
            <label>Password:</label><br />
            <input type="text" name = "password" value={formData.password} onChange={handleChange}  /><br /><br />
            <input type="submit" value="Submit" />
        </form> 
        
    </div>);
}
export default Create;