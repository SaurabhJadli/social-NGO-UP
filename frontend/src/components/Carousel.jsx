import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/1624497/pexels-photo-1624497.jpeg" alt=""
            className="aspect-[16/9] object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg" alt=""
            className="aspect-[16/9] object-cover"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/6798128/pexels-photo-6798128.jpeg" alt=""
            className="aspect-[16/9] object-cover"/>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}
