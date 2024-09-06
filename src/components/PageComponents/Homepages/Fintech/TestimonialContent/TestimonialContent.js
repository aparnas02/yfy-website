import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioSwiper from '../../../../NioSwiper/NioSwiper';
import NioCard from '../../../../Cards/NioCard/NioCard';

export default function TestimonialContent() {
  const data = useData();
  const contents = data.testimonials.collaboration.contents;

  return (
    <NioSwiper
      gap={120}
      navigation
      navClass="arrow-down pt-7 pt-lg-0"
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx}>

            <NioCard className="bg-transparent border-0">
              <NioCard.Body className="p-0">
                <Row className="gy-5 gy-lg-0 align-items-center">
                  <Col lg="4">
                  <div className="nl-media border nl-media-3xl rounded-circle bg-gray-400 border-5 pt-5 mx-auto border-white">
                    <img src={`images/peoples/${content?.cover}`} alt="cover" className="w-auto h-auto pt-6" />
                  </div>
                  </Col>
                  <Col lg="8">
                    <div className="d-flex flex-column text-center text-lg-start gap-4">
                      <h3 className="text-white">"{content?.comments}"</h3>
                      <div>
                        <h4 className="text-primary mb-0">{content?.name}</h4>
                        <p className="fs-6 text-white fw-medium">{content?.designation}</p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </NioCard.Body>
            </NioCard>

          </SwiperSlide>
        ))
      }
    </NioSwiper>
  )
}
