import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import React from 'react'
import Header from "./Header";
import {Link, useNavigate} from 'react-router-dom'

function User(){
    const params = useParams()
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://reqres.in/api/users/${params.userId}`)
          .then(res => res.json())
          .then((json) => setUser(json.data));
      }, [])


    const handleChange = event =>{
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = event =>{
        fetch(`https://reqres.in/api/users/${params.userId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(response => alert("User created"),
        navigate("/")) 
      }
      const handleDelete = event =>{
        fetch(`https://reqres.in/api/users/${params.userId}`, {
            method: 'DELETE',})
            .then(response => alert("User Deleted"),
            navigate("/")) 

    }
    return (<div>
        <Header />
        <h2>User Details</h2>
        <form onSubmit={handleSubmit}>
            <label>Email:</label ><br />
            <input type="text" name="email" value={user.email} onChange={handleChange} /><br />
            <label>First name:</label><br />
            <input type="text" name = "first_name" value={user.first_name} onChange={handleChange}  /><br />
            <label>Last name:</label><br />
            <input type="text" name = "last_name" value={user.last_name} onChange={handleChange}  /><br /><br />
            <input type="submit" value="Update User" />
        </form> 
        <br />
        <button onClick={handleDelete}>Delete User</button>
    </div>)
}

export default User;