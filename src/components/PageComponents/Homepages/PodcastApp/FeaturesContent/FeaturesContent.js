import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { Col, Row } from 'react-bootstrap';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider'

// components
import { NioSwiper } from '../../../../index'

export default function FeaturesContent() {

  const data = useData();
  const contents = data.homepage.podcast.currations.contents;

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="swiper position-relative rounded-3 overflow-hidden bg-white p-5 p-lg-7">
      <Row>
        <Col lg="7">
          <div className="pb-5 pb-lg-0">
            <h3 className="mb-md-3">Personalized <span className="text-green"> Curations</span>
            </h3>
            <p className="fs-6  line-clamp-3">
              Just ask your favorite personal assistant to put on whatever you want to hear. Podcasts not only provides general information but also from other perspectives.
            </p>
          </div>
        </Col>
      </Row>
      <div>
        <Row className="align-items-center justify-content-center justify-content-sm-between pt-lg-7 pb-5">
          <Col xs="6">
            <h4 className="text-nowrap">You Might Like</h4>
          </Col>
          <Col xs="6">
            <div className="swiper-button-group swiper-button-group-s1 d-lg-flex align-items-center gap-1 gap-sm-3 justify-content-end">
              <div ref={prevRef} className="m-0 bg-gray-300 swiper-button-prev"></div>
              <div ref={nextRef} className="m-0 bg-gray-300 swiper-button-next"></div>
            </div>
          </Col>
        </Row>
        <NioSwiper
          autoplay
          gap={32}
          freeMode={true}
          onInit={swiper => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            "0": { "slidesPerView": 1 },
            "575": { "slidesPerView": 2 },
            "992": { "slidesPerView": 3 },
            "1400": { "slidesPerView": 4 }
          }}
        >
          {
            contents.map((content, idx) => (
              <SwiperSlide key={idx}>
                <div className="position-relative">
                  <div className="nl-frame mb-3">
                    <Link to="#" className="d-inline-block w-100 h-100">
                      <img src={content?.cover} alt="banner-cover" className="border overflow-hidden w-100 rounded-2" />
                    </Link>
                  </div>
                  <div>
                    <h6 className="mb-0">
                      {content.title}
                    </h6>
                    <p className="fs-7 ">
                      {content.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </NioSwiper>
      </div>
    </div>
  )
}
