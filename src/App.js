import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Authcontex from './components/Contex/Authcontex';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <Router>
      <Authcontex>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/book/:bedType" element={<Book />} /> */}
          {/* <Route path="/book/*" element={<Home />} /> */}
          <Route path="/book/*" element={<PrivateRoute>
            <Book />
          </PrivateRoute>} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Authcontex>
    </Router>

  );
}

export default App;
