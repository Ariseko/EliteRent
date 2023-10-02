import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context/context";
import Loader from "./UI/Loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading, isAdmin} = useContext(AuthContext);
    if (isLoading) {
        return <Loader/>
    }

    return (

        isAuth
        ?
            <Routes>
                {
                    privateRoutes.map(route=>
                        <Route key={route.path} path={route.path} element={route.component}></Route>
                    )
                }

                <Route path={"/error"} element={<Error/>}></Route>
                <Route path={"*"} element={ <Navigate to={"/products"}/>} ></Route>
            </Routes>
        :
            <Routes>
                {
                    publicRoutes.map(route=>
                        <Route key={route.path} path={route.path} element={route.component}></Route>
                    )
                }

                <Route path={"/error"} element={<Error/>}></Route>
                <Route path={"*"} element={ <Navigate to={"/login"}/>} ></Route>
            </Routes>

    );
};

export default AppRouter;