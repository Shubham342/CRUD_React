import Home from './Home';
import Create from './Create';
import User from './User';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  

  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/users/:userId' element={<User />} />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
