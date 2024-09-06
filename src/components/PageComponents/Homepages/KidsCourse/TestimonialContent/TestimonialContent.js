import React from 'react';
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from "../../../../../context/DataProvider/DataProvider";

// components 
import { NioCard, NioSwiper, NioMedia } from '../../../../../components'

export default function TestimonialContent() {

  const data = useData()
  const contents = data.testimonials.kids.contents;

  return (
    <NioSwiper
      className="nl-swiper-s1 pt-5 pt-xxl-7 px-3"
      gap={30}
      navigation
      loop={true}
      duration={1600}
      autoplay={false}
      centeredSlides={true}
      wrapperClass="align-items-center pt-4"
      navClass="swiper-button-group-s1 pt-7 justify-content-center"
      breakpoints={{
        "0": { "slidesPerView": 1 },
        "992": { "slidesPerView": 2 },
        "1200": { "slidesPerView": 3 }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide className="h-auto" key={idx}>
            <NioCard className="nl-tm shadow border-0">
              <NioCard.Body className="d-flex flex-column gap-5">
                <NioMedia
                  size="2xl"
                  rounded="circle"
                  className="mx-auto mt-n8"
                  img={content?.author.cover}
                  alt={content?.author.name}
                />
                <div className="text-center">
                  <h3 className="mb-1">{content?.author.name}</h3>
                  <p className="fs-7 line-clamp-3 mb-0">{content?.description}</p>
                  <ul className="d-flex gap-2 pt-5 align-items-center justify-content-center">
                    <li>
                      <NioMedia size="xs" rounded="circle" variant="primary" icon="star-fill" />
                    </li>
                    <li>
                      <NioMedia size="xs" rounded="circle" variant="primary" icon="star-fill" />
                    </li>
                    <li>
                      <NioMedia size="xs" rounded="circle" variant="primary" icon="star-fill" />
                    </li>
                    <li>
                      <NioMedia size="xs" rounded="circle" variant="primary" icon="star-fill" />
                    </li>
                    <li>
                      <NioMedia size="xs" rounded="circle" variant="primary" icon="star-fill" />
                    </li>
                  </ul>
                </div>
              </NioCard.Body>
            </NioCard>
          </SwiperSlide>
        ))
      }

    </NioSwiper>
  )
}
