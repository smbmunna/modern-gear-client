import { useEffect, useState } from "react";
import CategoryCard from "../TopCategoryCard/CategoryCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="bg-black ">
            <h2 className="text-2xl font-bold text-center text-white uppercase p-8">Categories</h2>
                <Swiper
                    slidesPerView={4}
                    grid={{
                        rows: 2,
                        fill: "row",
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Grid, Pagination]}
                    className=""
                >
                    {
                        categories.map(category => <SwiperSlide key={category.id} ><CategoryCard category={category} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
    );
};

export default Categories;