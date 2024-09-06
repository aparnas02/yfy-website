import React from "react";
import { SwiperSlide } from "swiper/react";

// data
import { useData } from "../../../../../context/DataProvider/DataProvider";

// components
import {
  NioSwiper,
  NioIcon,
  NioMedia,
  NioCard,
} from "../../../../../components";
import { Card } from "react-bootstrap";

export default function TestimonialContent() {
  const data = useData();
  const contents = data.testimonials.bsmanagement.contents;

  return (
    <NioSwiper
      gap={30}
      loop={true}
      autoplay={true}
      duration={3500}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      navClass="d-none d-lg-block"
      wrapperClass="has-pagination"
      className="nl-swiper-s5"
      breakpoints={{
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        992: { slidesPerView: 2, slidesPerGroup: 1 },
        1024: { slidesPerView: 3, slidesPerGroup: 1 },
      }}
    >
      {contents &&
        contents.map((content, idx) => (
          <SwiperSlide key={idx} className="h-auto">
            <Card
              className="bg-gray"
              style={{ width: "350px", height: "493px" }}
            >
              <NioCard.Body className="d-flex flex-column gap-5">
                <div>
                  {/* <NioIcon
                    name="quote-left"
                    className="display-4 mb-3 text-primary"
                  /> */}

                  <img
                    src={content?.src}
                    alt="image"
                    height={200}
                    width={280}
                  />
                  <h5
                    className="mb-0 py-2 d-flex justify-content-center text-purple"
                    style={{ fontSize: "initial" }}
                  >
                    {content?.heading}
                  </h5>
                  <div className="col-lg-12 d-flex justify-content-center pb-4">
                    {" "}
                    <NioMedia
                      size="sm"
                      rounded="circle"
                      variant="purple-soft"
                      icon="grid"
                    />
                    <p className="fs-8 mx-2">{content?.feature}</p>
                  </div>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <NioMedia
                      size="sm"
                      rounded="circle"
                      variant="blue-soft"
                      icon="trend-up"
                    />
                    <div>
                      <p className="fs-8 mx-2 text-dark mb-0 line-clamp-4">
                        {content?.benefits}
                      </p>
                    </div>
                  </div>
                </div>
              </NioCard.Body>
            </Card>
          </SwiperSlide>
        ))}
    </NioSwiper>
  );
}
