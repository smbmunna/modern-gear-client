import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Banner from "../Components/Shared/Banner/Banner";
import TopProducts from '../Pages/Home/TopProducts/TopProducts'; 
import Categories from "../Pages/Home/Categories/Categories";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <TopProducts/>
            <Categories/>
            <Outlet/>
        </div>
    );
};

export default Main;