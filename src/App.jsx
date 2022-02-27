import { Route, Link, Routes, BrowserRoute as Router, BrowserRouter } from 'react-router-dom'
import React, {Component} from 'react'
import './App.css';
import Header from './component/layout/header'
import Footer from './component/layout/footer'
import Home from './component/home/home'
import Profile from './component/profile/profile'
import ProfileEdit from './component/profile/profileEdit'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile/edit" element={<ProfileEdit />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
