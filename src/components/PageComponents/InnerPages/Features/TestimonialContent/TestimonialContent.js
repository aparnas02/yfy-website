import React from "react";
import { SwiperSlide } from "swiper/react";

// data
import { useData } from "../../../../../context/DataProvider/DataProvider";

// components
import NioMedia from "../../../../NioMedia/NioMedia";
import NioCard from "../../../../Cards/NioCard/NioCard";
import NioSwiper from "../../../../../components/NioSwiper/NioSwiper";

export default function TestimonialContent() {
  const data = useData();
  const contents = data.testimonials.digital.contents;

  return (
    <NioSwiper
      loop={true}
      autoplay={true}
      duration={4500}
      // loop
      navigation
      masks={["shape-30"]}
      wrapperClass="pb-lg-7"
      navClass="swiper-button-group-s1 w-100  justify-content-center d-none d-lg-inline-flex mb-md-n1"
      breakpoints={{
        0: { slidesPerView: 1, slidesPerGroup: 1 },
      }}
    >
      {contents &&
        contents.map((content, idx) => (
          <SwiperSlide key={idx}>
            <NioCard className="border-0 bg-transparent">
              <NioCard.Body className="d-flex flex-column text-center gap-5 p-0">
                <div className="d-flex flex-column align-items-center gap-4">
                  <NioMedia
                    size="xxl"
                    rounded="circle"
                    img={content?.user.cover}
                  />
                  <div>
                    <h4 className="mb-0 text-yellow">
                      {content?.user.heading}
                    </h4>
                  </div>
                </div>

                <div>
                  <h3 className="fs-5 text-black opacity-80">
                    {content?.user.step}
                  </h3>
                  <p className="h3 text-white col-md-8 mx-auto mb-0">
                    {content?.action}
                  </p>
                </div>
              </NioCard.Body>
            </NioCard>
          </SwiperSlide>
        ))}
    </NioSwiper>
  );
}
