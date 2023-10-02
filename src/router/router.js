import About from "../pages/About";
import Costumes from "../pages/Costumes";
import CostumeIdPage from "../pages/CostumeIdPage";
import Login from "../pages/Login";
import CreateCostume from "../pages/CreateCostume";


export const privateRoutes = [
    {path: '/about', component: <About />},
    {path: "/products", component: <Costumes />},
    {path: "/products/:id", component: <CostumeIdPage />},
    {path: '/products/create', component: <CreateCostume />},
]

export const publicRoutes = [
    {path: '/login', component: <Login />},
]
console.log(typeof privateRoutes + " hui")

