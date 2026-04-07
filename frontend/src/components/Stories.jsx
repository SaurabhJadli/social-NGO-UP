import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import StoryCard from './StoryCard';

export default function Stories() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-full h-full"
      >

        <SwiperSlide className='flex min-w-60 md:min-w-40 max-w-60'><StoryCard /></SwiperSlide>
        <SwiperSlide className='flex min-w-60 md:min-w-40 max-w-60'><StoryCard /></SwiperSlide>
        <SwiperSlide className='flex min-w-60 md:min-w-40 max-w-60'><StoryCard /></SwiperSlide>
        <SwiperSlide className='flex min-w-60 md:min-w-40 max-w-60'><StoryCard /></SwiperSlide>
        <SwiperSlide className='flex min-w-60 md:min-w-40 max-w-60'><StoryCard /></SwiperSlide>
        <SwiperSlide className='flex min-w-60 md:min-w-40 max-w-60'><StoryCard /></SwiperSlide>
        <SwiperSlide className='flex min-w-60 md:min-w-40 max-w-60'><StoryCard /></SwiperSlide>
      </Swiper>

    </>
  );
}
