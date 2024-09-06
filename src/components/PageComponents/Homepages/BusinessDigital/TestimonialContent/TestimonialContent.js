import React from 'react'
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioBadge from '../../../../NioBadge/NioBadge';
import NioMedia from '../../../../NioMedia/NioMedia';
import NioCard from '../../../../Cards/NioCard/NioCard';
import NioSwiper from '../../../../../components/NioSwiper/NioSwiper';

export default function TestimonialContent() {

  const data = useData();
  const contents = data.testimonials.digital.contents;

  return (
    <NioSwiper
      loop
      navigation
      pagination={{
        clickable: true,
      }}
      masks={["shape-30"]}
      wrapperClass="has-pagination-and-navigation"
      navClass="swiper-button-group-s1 w-100 justify-content-center mb-md-n1"
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx}>
            <NioCard className="bg-transparent border-0">
              <NioCard.Body className="d-flex flex-column text-center gap-5 gap-lg-7 p-0">
                <div className="d-flex flex-column align-items-center gap-4">
                  <NioMedia
                    size="xxl"
                    rounded="circle"
                    img={content?.user.cover}
                  />
                  <div>
                    <h4 className="mb-0">{content?.user.name}</h4>
                    <p className="fs-8 text-gray-700">
                      {content?.user.designation}
                    </p>
                  </div>
                </div>
                <div>
                  <NioBadge
                    rounded
                    label="Quotes"
                    className="text-bg-primary-soft mb-4"
                  />
                  <p className="fs-3 fw-bold text-dark col-lg-8 mx-auto mb-0">{content?.comments}</p>
                </div>
              </NioCard.Body>
            </NioCard>
          </SwiperSlide>
        ))
      }
    </NioSwiper>
  )
}