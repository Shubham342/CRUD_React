import './App.css';
import {useState, useEffect} from 'react'
import Header from './Header';
import {Link, useNavigate} from 'react-router-dom'

function Home(){
    const [users, setUsers] = useState([]);
  const [extraUsers, setExtraUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(users => setUsers(users.data));
  }, []);
  let total = 2;
  useEffect(() => {
    
    while (total >=2){
      
      fetch(`https://reqres.in/api/users?page=${total}`)
      .then(res => res.json())
      .then(extraUsers => setExtraUsers(extraUsers.data));
      total--;
    }
  }, []);

  return (
    <div>
        <Header />
      <body>
      <table>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>View</th>
        </tr>
        
        {users.map(user => (
          <tr>
            <td key={user.id}>{user.email}</td>
            <td key={user.id}>{user.first_name}</td>
            <td key={user.id}>{user.last_name}</td>
            <td key={user.id}>
            <Link to={`/users/${user.id}`}>
                    <button>View</button>
                </Link>
            </td>
          </tr>
          ))}
          {extraUsers.map(extrauser => (
          <tr>
            <td key={extrauser.id}>{extrauser.email}</td>
            <td key={extrauser.id}>{extrauser.first_name}</td>
            <td key={extrauser.id}>{extrauser.last_name}</td>
            <td key={extrauser.id}>
                <Link to={`/users/${extrauser.id}`}>
                    <button>View</button>
                </Link>
            </td>
          </tr>
          ))}
      </table>
      </body>
    </div>
  );
}

export default Home;
