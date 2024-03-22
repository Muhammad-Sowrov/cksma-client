import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import Home from "../Home/Home/Home";
import Donate from "../Components/Donate/Donate";
import About from "../Home/About/About";
import Contact from "../Home/Contact/Contact";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
               path: "donate",
               element: <Donate></Donate> 
            },
            {
                path: "contact",
                element: <Contact></Contact>
            }
        ]
    }
])

export default Router;