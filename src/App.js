import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login/Login';
import SignUp from './components/signup/Signup';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Posts from './components/posts/posts';
import NewPost from './components/posts/NewPost';

function App() {
  return (
      <div className="App">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-12 '>
              <Routes>
                <Route path="/sign-up" element={<SignUp />} />
                <Route exact path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/new-post" element={<NewPost />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
  )
}




export default App;
