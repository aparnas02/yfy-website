import React from 'react'
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import { NioCard, NioSwiper } from '../../../../../components';

export default function TestimonialContent() {

  const data = useData();
  const contents = data.testimonials.codebase.contents;

  return (
    <NioSwiper
      loop
      // autoplay
      gap={30}
      pagination={{
        clickable: true,
      }}
      className="px-3"
      wrapperClass="has-pagination"
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 },
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx}>
            <NioCard className="nl-tm style-2 shadow rounded-top-0">
              <NioCard.Body className="nl-tm-body d-flex flex-column gap-5">
                <Link to="#">
                  <img src={content?.logo} alt="logo" />
                </Link>
                <div>
                  <h2 className="nl-tm-title fst-italic mb-2">"{content?.title}"</h2>
                  <p className="nl-tm-comments">{content?.description}</p>
                </div>
              </NioCard.Body>
            </NioCard>
          </SwiperSlide>
        ))
      }
    </NioSwiper>
  )
}

