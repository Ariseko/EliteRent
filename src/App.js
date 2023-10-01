import React from "react";
import './styles/App.css'
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Costumes from "./pages/Costumes";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";


function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
