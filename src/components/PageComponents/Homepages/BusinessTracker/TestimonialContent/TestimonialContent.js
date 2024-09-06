import React from 'react'
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import { NioSwiper, NioIcon, NioMedia, NioCard } from '../../../../../components';

export default function TestimonialContent() {

  const data = useData();
  const contents = data.testimonials.bsmanagement.contents;

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
                  <NioIcon name="quote-left" className="display-4 mb-3 text-primary" />
                  <p className="fs-5 text-dark mb-0 line-clamp-3">
                    {content?.comments}
                  </p>
                </div>
                <div className="d-flex gap-3 flex-wrap align-items-center">
                  <NioMedia rounded="circle" img={content?.cover} />
                  <div>
                    <h5 className="mb-0">{content?.name}</h5>
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
