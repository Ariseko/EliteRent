import React, {useContext, useState} from 'react';
import "./Navbar.module.css"
import {Link} from "react-router-dom";
import Button from "../button/Button";
import {AuthContext} from "../../../context/context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }

    return (
        <div className={"navbar"}>
            <div className="navbar__links">
                <Button><Link to="/about">О нас</Link></Button>
                <Button><Link to="/products">Костюмы</Link></Button>
            </div>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
};

export default Navbar;