import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import OldBook from './components/OldBook';
import NewBook from './components/NewBook';
import Login from './components/Login';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="book-types/old_books">Old Books</Link></li>
          <li><Link to="book-types/new_books">New Books</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/book-types'>
            <Route path='old_books' element={<OldBook />}></Route>
            <Route path='new_books' element={<NewBook />}></Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
