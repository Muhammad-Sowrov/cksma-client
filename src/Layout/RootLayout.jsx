import { Outlet } from "react-router-dom";


const RootLayout = () => {
    return (
        <div className="">
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;