import { useEffect } from "react";
import { useState } from "react";

const TopProducts = () => {
    const [topProducts, setTopProducts]= useState([]);
    useEffect(()=>{
        fetch('topProducts.json')
        .then(res=>res.json())
        .then(data=>setTopProducts(data))
    },[])
    return (
        <div>
            <h1>Number of Top Products: {topProducts.length}</h1>
        </div>
    );
};

export default TopProducts;