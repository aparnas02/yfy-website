import React from 'react';
import { Col, Row } from 'react-bootstrap';

// components
import classNames from 'classnames';
import NioSection from '../../../NioSection/NioSection';
import NioSubscribeField from '../../../Forms/NioSubscribeField/NioSubscribeField';

export default function Newsletter({ className, title, description, space, variant = "one" }) {

  const compClasses = classNames({
    [`${className}`]: className
  });

  return (
    <NioSection className={compClasses}>
      <NioSection.Content>
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-lighter">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">
                {title || "Subscribe to our newsletter"}
              </h4>
              <p className="fs-7">
                {description || "Join the 5000+ People That Uses Softnio Products."}
              </p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="5">
            <NioSubscribeField />
          </Col>
        </Row>
      </NioSection.Content>
    </NioSection>
  )
}
