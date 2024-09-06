import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

// data 
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components 
import NioSection from '../../../../NioSection/NioSection';
import NioPricingCard from '../../../../Cards/NioPricingCard/NioPricingCard';

export default function PricingContent() {

  const data = useData()
  const contents = data.pricing.expense.contents;
  const [isMonthly, setIsMonthly] = useState(false);

  const toggleSwitch = () => {
    setIsMonthly(!isMonthly);
  }

  return (
    <>
      <NioSection.Head alignX="center">
        <span className="nl-section-subtitle mb-2">pricing</span>
        <h2 className="nl-section-title">Ready to Get Started?</h2>
        <p>Take the first step towards success and get started with our comprehensive solutions today.</p>
      </NioSection.Head>

      <NioSection.Content className="position-relative">
        <div>
          <div className="pb-5 pb-lg-7 text-center">
            <div className="d-flex gap-3 align-items-center justify-content-center">
              <Form.Label htmlFor="pricing" className="text-dark mb-0 fw-bold">Monthly</Form.Label>
              <Form.Check id="pricing" type="switch" checked={isMonthly} onChange={toggleSwitch} className="d-flex align-items-center" />
              <Form.Label htmlFor="pricing" className="text-dark mb-0 fw-bold">Yearly</Form.Label>
            </div>
            <div className="discount-badge-wrap d-inline-block mt-3 ms-lg-7">
              <span className="badge text-bg-primary-soft fw-semibold text-uppercase rounded-pill me-2">save 65%</span>
              <img src="images/shapes/a.png" alt="" className="mt-n3" />
            </div>
          </div>
          <Row className="gy-5 gy-xl-0">
            {
              contents && contents.map((content, idx) => (
                <Col key={idx} md="6" xl="4" >
                  <NioPricingCard
                    variant="five"
                    active={content.active}
                    icon={content?.heading.icon}
                    title={content.heading.title}
                    subtitle={content.heading.subtitle}
                    buttonlabel={content?.footer.title}
                    price={!isMonthly ? content.heading.package.month.price : content.heading.package.year.price}
                    priceType={!isMonthly ? content.heading.package.month.title : content.heading.package.year.title}
                    features={content.body}
                    description={content?.heading.description}
                    className="h-100 p-4 p-md-5"
                  />
                </Col>
              ))
            }
          </Row>
        </div>
      </NioSection.Content>
    </>
  )
}
