import React from "react";
import { SwiperSlide } from "swiper/react";

// data
import { useData } from "../../../../../context/DataProvider/DataProvider";

// components
import { NioCard, NioMedia, NioSwiper } from "../../../../../components";

export default function TestimonialContent() {
  const data = useData();
  const contents = data.testimonials.expense.contents;

  return (
    <NioSwiper
      loop
      gap={30}
      autoplay
      navigation
      navClass="swiper-button-group-s1 justify-content-center pt-4 pt-md-6"
      breakpoints={{
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        992: { slidesPerView: 2, slidesPerGroup: 1 },
        1024: { slidesPerView: 3, slidesPerGroup: 1 },
      }}
    >
      {contents &&
        contents.map((content, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <NioCard className="shadow-sm h-100">
              <NioCard.Body>
                <h5 className="mb-3">{content?.title}</h5>
                <p className="fs-8 mb-0 line-clamp-3">{content?.description}</p>
                <div className="d-flex align-items-center gap-3 pt-5">
                  <NioMedia
                    rounded="circle"
                    img={content?.user.cover}
                    size="md"
                  />
                  <div>
                    <h6 className="mb-0 text-primary">{content?.user.name}</h6>
                    <p className="fs-9 mb-0">{content?.user.designation}</p>
                  </div>
                </div>
              </NioCard.Body>
            </NioCard>
          </SwiperSlide>
        ))}
    </NioSwiper>
  );
}
