import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import NioBrand from '../../../../NioBrand/NioBrand';
import NioMedia from '../../../../NioMedia/NioMedia';
import NioButton from '../../../../NioButton/NioButton';

export default function Overview() {

  return (
    <Row className="justify-content-center">
      <Col lg="8">
        <div className="nl-video rounded-3 bg-primary-soft">
          <div className="nl-mask shape-1 overflow-hidden rounded-4"></div>
          <div className="nl-video-inner">
            <div className="nl-video-logo p-4 d-none d-sm-block">
              <NioBrand logo="s1" variant="dark" />
            </div>
            <div className="nl-video-content">
              <div className="nl-video-img overflow-hidden pt-4">
                  <img className="mb-n6 mb-sm-n4" src="images/video/a.png" alt="object" />
              </div>
              <div className="nl-video-btn">
                <NioMedia
                  size="xl"
                  rounded="circle"
                  icon="play-fill"
                  variant="primary"
                  lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                  className="shadow-sm animate animate-infinite animate-pulse animate-duration-1" />
              </div>
            </div>
          </div>

        </div>
        <div className="text-center pt-5 pt-md-7">
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center">
            <li>
              <NioButton href="/index-analytics" className="btn-primary" label="Get Started" />
            </li>
            <li>
              <NioButton href="/index-analytics" className="btn-outline-primary" label="Learn More" />
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  )
}
