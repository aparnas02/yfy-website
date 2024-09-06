import React from 'react'
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioSwiper from '../../../../NioSwiper/NioSwiper';

export default function BrandContent() {

  const data = useData();
  const contents = data.testimonials.fintech.contents;

  return (
    <NioSwiper
      loop
      gap={30}
      autoplay
      className="nl-swiper-peoples"
      breakpoints={{
        "0": {
          "slidesPerView": 3,
          "slidesPerGroup": 1
        },
        "768": {
          "slidesPerView": 4,
          "slidesPerGroup": 1
        },
        "1200": {
          "slidesPerView": 6,
          "slidesPerGroup": 1

        }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <Link to="#" className="d-inline-block position-relative text-center text-xl-start w-100 h-24">
              <img src={content?.logo} alt={content?.title} className="w-auto h-24" />
            </Link>
          </SwiperSlide>
        ))
      }
    </NioSwiper>
  )
}
