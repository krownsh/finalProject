import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Restaurant from './restaurant'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from './img1.jpg';

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function StoreSlideBar() {
  const [swiperRef, setSwiperRef] = useState(null);
//   const appendNumber = useRef(500);
//   const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  

//   const prepend = () => {
//     setSlides([
//       `Slide ${prependNumber.current - 2}`,
//       `Slide ${prependNumber.current - 1}`,
//       ...slides,
//     ]);
//     prependNumber.current = prependNumber.current - 2;
//     swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
//   };

//   const append = () => {
//     setSlides([...slides, 'Slide ' + ++appendNumber.current]);
//   };

//   const slideTo = (index) => {
//     swiperRef.slideTo(index - 1, 0);
//   };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
        style={{width:'100%',height:'35vh'}}

      >
        {slides.map(({slideContent}, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <img src={img1} alt="img1" style={{objectFit:'auto'}}/>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}
// https://swiperjs.com/react