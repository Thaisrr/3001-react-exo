import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Nav from "./layout/Nav";

function App() {



  return (
    <div className="App">
        <BrowserRouter>
            <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
