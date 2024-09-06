import React from 'react'
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import { NioSwiper, NioMedia, NioCard } from '../../../../../components';

export default function TestimonialContent() {

  const data = useData();
  const contents = data.testimonials.learning.contents;

  return (
    <NioSwiper
      gap={30}
      loop={false}
      autoplay={false}
      duration={1600}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      navClass="d-none d-lg-block"
      wrapperClass="has-pagination"
      className="nl-swiper-s4"
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 },
        "991": { "slidesPerView": 2, "slidesPerGroup": 1 }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx} className="h-auto">

            <NioCard className="border-0">
              <NioCard.Body className="d-flex flex-column gap-5">
                <div>
                  <h5 className="mb-3">{content?.title}</h5>
                  <p className="fs-7 mb-0 line-clamp-2">
                    {content?.comments}
                  </p>
                </div>
                <div className="d-flex gap-3 flex-wrap align-items-center">
                  <NioMedia rounded="circle" img={content?.cover} />
                  <div>
                    <h6 className="fs-7 mb-0">{content?.name}</h6>
                    <p className="fs-8">{content?.designation}</p>
                  </div>
                </div>
              </NioCard.Body>
            </NioCard>
          </SwiperSlide>
        ))
      }
    </NioSwiper>
  )
}
