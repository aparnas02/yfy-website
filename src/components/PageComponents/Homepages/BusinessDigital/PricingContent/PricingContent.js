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
          <h2 className="nl-section-title">Plans for Everyone</h2>
          <p className="mb-0"> Discover flexible plans designed to cater to the needs and budget of every individual or business, ensuring accessibility for all. </p>
        <div className=" nl-pricng-action-wrap pt-5">
          <div className="nl-pricing-toggle nl-pricing-toggle-s2 bg-white">
            <input
              id="monthly"
              type="radio"
              name="duration"
              value="monthly"
              checked={!isMonthly}
              onChange={toggleSwitch}
              className="price-toggle-input"
            />
            <label htmlFor="monthly">Monthly</label>
            <input
              id="yearly"
              type="radio"
              value="yearly"
              name="duration"
              checked={isMonthly}
              onChange={toggleSwitch}
              className="price-toggle-input"
            />
            <label htmlFor="yearly">Yearly</label>
            <span className="switch-highlight"></span>
          </div>
        </div>

      </NioSection.Head>

      <NioSection.Content>
        <Row className="gy-3 gy-lg-0">
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
