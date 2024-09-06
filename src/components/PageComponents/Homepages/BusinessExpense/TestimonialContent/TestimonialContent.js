import React from 'react';
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components
import { NioCard, NioSwiper, NioMedia } from '../../../../../components';

export default function TestimonialContent() {

  const data = useData();
  const contents = data.testimonials.expense.contents;

  return (
    <NioSwiper
      gap={30}
      loop={true}
      autoplay={false}
      navigation={true}
      allowTouchMove={true}
      navClass="swiper-button-group-s1 justify-content-center pt-4 pt-md-6"
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 },
        "992": { "slidesPerView": 2, "slidesPerGroup": 1 },
        "1024": { "slidesPerView": 3, "slidesPerGroup": 1 }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide className='h-auto' key={idx}>
            <NioCard className="bg-blue-800 h-100 rounded-4">
              <NioCard.Body>
                <h5 className="mb-2 text-white">{content?.title}</h5>
                <p className="fs-7 mb-0 text-white opacity-75">{content?.description}</p>
                <div className="d-flex align-items-center gap-2 pt-5">
                  <NioMedia size="md" rounded="circle" img={content.user.cover} />
                  <div>
                    <h6 className="mb-0 text-white">{content.user.name}</h6>
                    <p className="fs-9 text-white opacity-75">{content.user.designation}</p>
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
