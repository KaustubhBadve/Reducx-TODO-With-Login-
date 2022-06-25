import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Todo from './Pages/Todo';
import TodoItem from './Pages/TodoItem';
import TodoEdit from './Pages/TodoEdit';
import Login from './Pages/Login';
import { RequireAuth } from './HOC/RequireAuth';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<RequireAuth><Todo/></RequireAuth>}></Route>
      <Route path='/:id' element={<RequireAuth><TodoItem/></RequireAuth>}></Route>
      <Route path='/:id/edit' element={<RequireAuth><TodoEdit/></RequireAuth>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
