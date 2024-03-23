import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";


const RootLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;