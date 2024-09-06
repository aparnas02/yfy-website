import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// data
import { useData } from '../../../../../context/DataProvider/DataProvider';

export default function App() {
  const data  = useData();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const contents = data.innerpage.productdetails.view.contents;

  return (
    <>
      <Swiper

        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="product-slider-lg mb-5"
      >
        {
          contents && contents.map((content, idx) => (
            <SwiperSlide key={idx}>
              <img src={`${content.src}`} className="w-100" alt={content.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        freeMode={true}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        breakpoints={{
          "0": { "spaceBetween": 12, "slidesPerView": 3 },
          "992": { "spaceBetween": 24, "slidesPerView": 4 },
        }}
        className="product-slider-sm"
      >
        {
          contents && contents.map((content, idx) => (
            <SwiperSlide key={idx}>
              <img src={`${content.src}`} className="w-100" alt={content.alt} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
