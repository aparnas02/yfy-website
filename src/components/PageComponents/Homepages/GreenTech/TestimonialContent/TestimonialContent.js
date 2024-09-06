import React from 'react'
import { useRef } from 'react';
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioMedia from '../../../../NioMedia/NioMedia';
import NioSwiper from '../../../../NioSwiper/NioSwiper';
import NioCard from '../../../../Cards/NioCard/NioCard';

export default function TestimonialContent() {

  const prevRef = useRef(null);
  const nextRef = useRef(null)

  const data = useData();
  const contents = data.testimonials.expense.contents;

  return (
    <NioSwiper
      loop
      gap={30}
      autoplay
      freeMode={true}
      className="mt-lg-n9"
      centeredSlides={true}
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 },
        "1200": { "slidesPerView": 3, "slidesPerGroup": 1 }
      }}
      onInit={swiper => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <NioCard className="h-100">
              <NioCard.Body className="d-flex flex-column justify-content-between gap-3  gap-lg-5">
                <div>
                  <h5 className="mb-3">{content?.title}</h5>
                  <p className="fs-8 line-clamp-3 mb-0"> {content?.description}</p>
                </div>
                <div className="d-flex gap-3 flex-wrap align-items-center">
                  <NioMedia rounded="circle" size="md" img={content?.user.cover} />
                  <div>
                    <h6 className="fs-7 mb-0">{content?.user.name}</h6>
                    <p className="fs-9 mb-0">{content?.user.designation}</p>
                  </div>
                </div>
              </NioCard.Body>
            </NioCard>

          </SwiperSlide>
        ))
      }

      <div className="d-flex align-items-center justify-content-center justify-content-lg-start flex-wrap pt-5 pt-xxl-7 mb-1">
        <div className="swiper-button-group swiper-button-group-s1  gap-2">
          <div ref={prevRef} className="swiper-button-prev m-0"></div>
          <div ref={nextRef} className="swiper-button-next m-0"></div>
        </div>
      </div>
    </NioSwiper>
  )
}
