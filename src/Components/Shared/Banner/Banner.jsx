import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import jbl from '../../../assets/Banner/banner-jbl.png';
import cpu from '../../../assets/Banner/banner-cpu.png';
import watch from '../../../assets/Banner/banner-watch.png';

//import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="bg-gradient-to-r from-cyan-500 to-black">
                <SwiperSlide className='px-16' >
                    <div className='flex items-center h-screen justify-between'>
                        <div>
                            <h1 className='text-white font-bold text-2xl'>Special Offer Today!</h1>
                            <h1 className='text-white text-6xl font-bold py-4'>Apple Watch</h1>
                            <h2 className='text-cyan-300 text-2xl font-semibold'>Starting at BDT 50,000/-</h2>
                        </div>
                        <div><img className='' src={watch} /></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-16' >
                    <div className='flex items-center h-screen'>
                        <div><img className='w-3/4' src={cpu} /></div>
                        <div>
                            <h1 className='text-white font-bold text-2xl'>Vibe Gaming!</h1>
                            <h1 className='text-white text-6xl font-bold py-4'>Alienware Gaming Desktop</h1>
                            <h2 className='text-cyan-300 text-2xl font-semibold'>Starting at BDT 50,000/-</h2>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-16' >
                    <div className='flex items-center h-screen justify-between'>
                        <div>
                            <h1 className='text-white font-bold text-2xl'>Super Bass with new JBL!</h1>
                            <h1 className='text-white text-6xl font-bold py-4'>JBL Go6!</h1>
                            <h2 className='text-cyan-300 text-2xl font-semibold'>Starting at BDT 20,000/-</h2>
                        </div>
                        <div><img className='' src={jbl} /></div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;