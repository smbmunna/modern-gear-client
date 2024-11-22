import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Banner from "../Components/Shared/Banner/Banner";
import TopProducts from '../Pages/Home/TopProducts/TopProducts'; 


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <TopProducts/>
            <Outlet/>
        </div>
    );
};

export default Main;