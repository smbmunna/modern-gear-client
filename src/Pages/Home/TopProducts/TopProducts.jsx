import { useEffect } from "react";
import { useState } from "react";
import TopProductCard from "../TopProductCard/TopProductCard";

const TopProducts = () => {
    const [topProducts, setTopProducts] = useState([]);
    useEffect(() => {
        fetch('topProducts.json')
            .then(res => res.json())
            .then(data => setTopProducts(data))
    }, [])
    return (
        <div className=" bg-black text-white">
            <h2 className="text-2xl font-bold text-center uppercase p-8">Top Products</h2>
            <div className="grid grid-cols-3 justify-items-center pb-8">
                {
                    topProducts.map(topProduct => <TopProductCard
                        key={topProduct.id}
                        topProduct={topProduct}

                    />)
                }
            </div>
        </div>
    );
};

export default TopProducts;