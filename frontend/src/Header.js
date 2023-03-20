import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './App.css';

function Header(){
    return(
    <div class="topnav">
        <Link to={'/'}>
            <a >Home</a>
        </Link>
        <Link to={'/create'}>
            <a >Create</a>
        </Link>
    </div>   
    )
}
export default Header;