import React, {useContext} from 'react';
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/button/Button";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth, setIsAuth, setIsAdmin} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        setIsAdmin(true);
        localStorage.setItem('auth', 'true')
        localStorage.setItem('isAdmin', 'true')
    }

    return (
        <div>
            <h1>Авторизация</h1>
            <form onSubmit={login}>
                <Input type={"text"} placeholder={"Логин..."}/>
                <Input type={"password"} placeholder={"Пароль..."}/>
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;