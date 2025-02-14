import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import { NioSwiper, NioIcon } from '../../../../../components'

export default function TestimonialContent() {

  const data = useData();
  const contents = data.testimonials.collaboration.contents;

  return (
    <NioSwiper
      gap={30}
      loop={false}
      className='nl-swiper-s3'
      navigation={true}
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx}>
            <div className="nl-testimonial-wrap p-3 p-sm-5">
              <div className="nl-testimonial-card nl-testimonial-card-s1">
                <Row className="align-items-center">
                  <Col lg="4">
                    <div className="nl-testimonial-cover mb-5 mb-lg-0  text-center">
                      <img src={`images/peoples/${content?.cover}`} alt="people-3" />
                    </div>
                  </Col>
                  <Col lg="8">
                    <div className="nl-testimonial-content p-4 pt-0 p-lg-0">
                      <div className="nl-testimonial-icon">
                        <NioIcon name="quote-left" />
                      </div>
                      <h3 className="fst-italic m-0">
                        {content?.comments}
                      </h3>
                      <div className="d-flex flex-wrap justify-content-between align-items-center g-3 pt-5 pt-xl-7">

                        <div className="text-start">
                          <h4 className="m-0">{content?.name}</h4>
                          <span className="fs-7 ">{content?.designation}</span>
                        </div>
                        <div className="nl-testimonial-brand">
                          <img src={`images/brands/${content?.logo}`} alt="brand-logo" />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </NioSwiper>
  )
}
