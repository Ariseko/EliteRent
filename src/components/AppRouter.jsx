import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Costumes from "../pages/Costumes";
import Error from "../pages/Error";
import CostumeIdPage from "../pages/CostumeIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={"/about"} element={<About/> }></Route>

            <Route path={"/costumes"} element={<Costumes/> }></Route>

            <Route path={'/costumes/:id'} element={<CostumeIdPage/>}></Route>

            <Route path={"/error"} element={<Error/>}></Route>



            <Route path={"*"} element={ <Navigate to={"/error"}/>} ></Route>
        </Routes>
    );
};

export default AppRouter;