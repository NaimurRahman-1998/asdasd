import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Review.css'
import { Pagination, Navigation } from "swiper";
import { FaQuoteLeft } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Review = () => {
    AOS.init();
    return (
        (<div
            
            className='my-40 bg-fixed reviewDiv'>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper lg:h-[25rem] bg-black opacity-90"
            >
                <SwiperSlide>
                    <div className='mt-20 flex flex-col items-center gap-7 justify-center'>
                        <h1 className='text-neutral-400 text-xs lg:text-xl text-center lg:px-40'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</h1>
                        <div>
                            <FaQuoteLeft className='text-white text-sm lg:text-3xl lg:mb-[-1rem]' />
                            <img className='w-12 lg:w-36 rounded-full border-2 lg:border-8 border-white' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                        </div>
                        <h1 className='text-neutral-400 text-lg mt-[-1.5rem] font-bold'>Jennifer Anniston :<span className='font-normal'>Fitness Analytics</span> </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mt-20 flex flex-col items-center gap-7 justify-center'>
                        <h1 className='text-neutral-400 text-xs lg:text-xl text-center lg:px-40'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</h1>
                        <div>
                            <FaQuoteLeft className='text-white text-sm lg:text-3xl lg:mb-[-1rem]' />
                            <img className='w-12 lg:w-36 rounded-full border-2 lg:border-8 border-white' src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=1050" alt="" />
                        </div>
                        <h1 className='text-neutral-400 text-lg mt-[-1.5rem] font-bold'>Mark David :<span className='font-normal'>Health Nutritionist</span> </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mt-20 flex flex-col items-center gap-7 justify-center'>
                        <h1 className='text-neutral-400 text-xs lg:text-xl text-center lg:px-40'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."</h1>
                        <div>
                            <FaQuoteLeft className='text-white text-sm lg:text-3xl lg:mb-[-1rem]' />
                            <img className='w-12 lg:w-36 lg:h-36 rounded-full border-2 lg:border-8 border-white' src="https://web.certicamara.com/app/webroot/files/uploads/cweb/certicamara/img/quote_user.jpg" alt="" />
                        </div>
                        <h1 className='text-neutral-400 text-lg mt-[-1.5rem] font-bold'>Chris Warner :<span className='font-normal'>Media Manager</span> </h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div >)
    );
};

export default Review;