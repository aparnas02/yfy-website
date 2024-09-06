import React from 'react'
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioMedia from '../../../../NioMedia/NioMedia';
import NioSwiper from '../../../../NioSwiper/NioSwiper';

export default function StoryContent() {

  const data = useData();
  const contents = data.testimonials.greentech.contents;

  return (
    <NioSwiper
    gap={30}
    autoplay
      loop={true}
      freeMode={true}
      centeredSlides={true}
      breakpoints={{
        "0": { "slidesPerView": 2 },
        "1200": { "slidesPerView": 3 }
      }}
      className="mb-5 mb-md-7 mb-xl-0"
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <div className="nl-frame">
              <img src={content?.cover} alt="testimonial-cover" className="w-100 h-100" />
              <div className="nl-video-btn">
                <NioMedia
                  size="lg"
                  rounded="circle"
                  icon="play-fill"
                  lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                  className="text-bg-primary animate animate-infinite animate-pulse animate-duration-1"
                />
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </NioSwiper>
  )
}
