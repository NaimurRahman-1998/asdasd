import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import running from '../assets/images/banner/running.png'
import weight from '../assets/images/banner/weight.png'
import { motion } from "framer-motion"
import img1 from '../assets/images/Home/banner01.png'
import img2 from '../assets/images/Home/banner02.png'
import img3 from '../assets/images/Home/banner03.png'
const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="relative">
                    <img className="w-full h-[35rem]" src="https://i.ibb.co/L6j9m7g/young-man-kickboxing-black-155003-10758.jpg" alt="" />
                    <motion.div
                        initial={{ x: -400, scale: 0 }}
                        animate={{ x: 0, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.75 }}
                        className=" absolute top-36 left-[2rem] lg:left-[10rem]">

                        <h1 className="text-white text-lg lg:text-6xl font-bold ">Enroll With The Best </h1>
                        <h1 className="text-white text-lg lg:text-6xl font-bold"><span className="text-red-600">Fitness</span> Temp<span className="text-red-600">late</span> </h1>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[35rem]" src={running} alt="" />
                    <div className="bg-neutral-800 pt-[15rem] w-full h-full opacity-60 text-white text-center font-bold space-y-4 text-4xl absolute bottom-0 ">
                        <h1>Have a Problem with Stamina?</h1>
                        <h1>Build Maximum Stamina With Our Course Plan</h1>
                        <button className="btn bg-lime-500">Enroll Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img className="w-full h-[35rem]" src={weight} alt="" />
                    <div className="bg-neutral-800 pt-[15rem] w-full h-full opacity-60 text-white text-center font-bold space-y-4 text-4xl absolute bottom-0 ">
                        <h1>Friends Shaming Because of you are thin?</h1>
                        <h1>Build Maximum Strength With Our Course Plan</h1>
                        <button className="btn bg-lime-500">Enroll Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex lg:flex justify-center'>
                <img className='w-[6rem] lg:w-[25rem]' src={img1} alt="" />
                <img className='w-[6rem] lg:w-[25rem]' src={img2} alt="" />
                <img className='w-[6rem] lg:w-[25rem]' src={img3} alt="" />
            </div>

        </div>
    );
};

export default Banner;