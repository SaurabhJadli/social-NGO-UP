import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
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
        className="swiper-h mb-6 rounded"
      >
        <SwiperSlide>
          <img src="/home1.jpeg" alt=""
            className="aspect-[16/9] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/36744/agriculture-arable-clouds-countryside.jpg" alt=""
            className="aspect-[16/9] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3993211/pexels-photo-3993211.jpeg" alt=""
            className="aspect-[16/9] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/teaching_yoga.jpeg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
