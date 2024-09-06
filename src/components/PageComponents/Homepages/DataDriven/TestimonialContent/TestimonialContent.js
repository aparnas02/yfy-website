import React from 'react';

import { Col, Row } from 'react-bootstrap';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';


// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import { NioSwiper, NioIcon, NioCard } from '../../../../../components';

export default function TestimonialContent() {

  const data = useData();
  const contents = data.testimonials.collaboration.contents;

  return (
    <NioSwiper
      gap={30}
      loop={false}
      className="style-3 p-5 px-4"
      navigation={true}
      breakpoints={{
        "0": { "slidesPerView": 1, "slidesPerGroup": 1 }
      }}
    >
      {
        contents && contents.map((content, idx) => (
          <SwiperSlide key={idx}>
            <NioCard className="nl-tm style-1 shadow-none overflow-visible border border-gray-300">
              <NioCard.Body>
                <Row className="align-items-center">
                  <Col lg="4">
                    <div className="rounded-2 bg-blue-100 mb-3 mb-lg-0 text-center">
                      <img src={`images/peoples/${content?.cover}`} alt="people-3" className="mt-n7" />
                    </div>
                  </Col>
                  <Col lg="8">
                    <div className="d-flex flex-column justify-content-between">
                      <div>
                        <NioIcon name="quote-left" className="nl-tm-icon" />
                        <h3 className="nl-tm-comment m-0">
                          {content?.comments}
                        </h3>
                      </div>
                      <div className="d-flex gap-3 flex-wrap justify-content-between align-items-center pt-3 pt-xl-7">
                        <div>
                          <h4 className="nl-tm-user-title">{content?.name}</h4>
                          <p className="nl-tm-user-designation">{content?.designation}</p>
                        </div>
                        <Link to>
                          <img src={`images/brands/${content?.logo}`} alt="brand-logo" />
                        </Link>
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

