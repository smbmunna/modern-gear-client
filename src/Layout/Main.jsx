import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Banner from "../Components/Shared/Banner/Banner";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Outlet/>
        </div>
    );
};

export default Main;