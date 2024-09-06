import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components
import NioSection from '../../../../NioSection/NioSection';
import NioPricingCard from '../../../../Cards/NioPricingCard/NioPricingCard';

export default function PricingContent() {

  const data = useData()
  const contents = data.pricing.digital.contents;
  const [isMonthly, setIsMonthly] = useState(false);

  const toggleSwitch = () => {
    setIsMonthly(!isMonthly);
  }

  return (
    <div>
      <NioSection.Head alignX="center">
        <span className="nl-section-subtitle mb-2">pricing plan</span>
        <h2 className="nl-section-title mb-2">Plans for Everyone</h2>
        <p className="mb-0"> Choose from our flexible and affordable pricing plans, designed to cater to the needs of individuals and businesses of all sizes, ensuring accessibility and value for everyone. </p>
        <div className="text-center pt-5">
          <div className="d-flex justify-content-center">
            <div className="fs-5">Monthly</div>
            <div className="mx-3">
              <div className="form-check form-switch form-check-xl text-primary">
                <input
                  role="switch"
                  type="checkbox"
                  checked={isMonthly}
                  onChange={toggleSwitch}
                  className="form-check-input price-toggle-input"
                />
              </div>
            </div>
            <div className="fs-5">Yearly</div>
          </div>
        </div>
      </NioSection.Head>

      <NioSection.Content className="position-relative">

        <Row className="gy-5 gy-xl-0">
          {
            contents && contents.map((content, idx) => (
              <Col lg="4" key={idx}>
                <NioPricingCard
                  variant="two"
                  active={content.active}
                  title={content.heading.title}
                  subtitle={content.heading.subtitle}
                  price={!isMonthly ? content.heading.package.month.price : content.heading.package.year.price}
                  priceType={!isMonthly ? content.heading.package.month.title : content.heading.package.year.title}
                  features={content.body}
                />
              </Col>
            ))
          }
        </Row>
      </NioSection.Content>
    </div>
  )
}
