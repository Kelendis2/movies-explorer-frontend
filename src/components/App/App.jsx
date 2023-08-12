 // import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Preloader from "../Movies/Preloader/Preloader";
import AboutProject from "../Main/AboutProject/AboutProject";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {

      <Routes>
            <Route path="*" element={<Preloader />} />
            <Route path="/" element ={<AboutProject />}/>
            <Route path="/movies" element ={<Movies />}/>
            <Route path="/saved-movies" element ={<SavedMovies />}/>
            <Route path="/profile" element ={<Profile />}/>
            <Route path="/signin" element ={<Login />}/>
            <Route path="/signup" element ={<Register />}/>
            </Routes>

}

export default App;
