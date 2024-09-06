import React, { useState } from 'react';

// data
import { useData } from '../../../../../context/DataProvider/DataProvider';

// components
import { NioSection, NioPricingCard } from '../../../../../components';

export default function PricingContent() {

  const data = useData()
  const contents = data.pricing.tracker.contents;

  const [isMonthly, setIsMonthly] = useState(false);
  const toggleSwitch = () => setIsMonthly(!isMonthly);

  return (
    <div className="p-5 p-md-7 rounded bg-primary-soft">
      <NioSection.Head alignX="center" className="pb-xxl-120">
        <span className="nl-section-subtitle mb-2">Pricing Plan</span>
        <h2 className="nl-section-title">Plans for Everyone</h2>
        <p className="mb-0">
          Choose from our flexible and affordable pricing plans, designed to cater to the needs of individuals and businesses.
        </p>
        <div className="nl-priicng-action-wrap pt-5">
          <div className="nl-pricing-toggle nl-pricing-toggle-s1 text-bg-dark">
            <input
              type="radio"
              id="monthly"
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
              name="duration"
              value="yearly"
              checked={isMonthly}
              onChange={toggleSwitch}
              className="price-toggle-input"
            />
            <label htmlFor="yearly">Yearly</label>
            <span className="switch-highlight text-primary"></span>
          </div>
        </div>
      </NioSection.Head>
      <NioSection.Content>
        <div className="nl-pricing-group">

          {
            contents && contents.map((content, idx) => (
              <NioPricingCard
                key={idx}
                variant="one"
                active={content.active}
                features={content.body}
                price={!isMonthly ? content.heading.package.month.price : content.heading.package.year.price}
                priceType={!isMonthly ? content.heading.package.month.title : content.heading.package.year.title}
                title={content?.heading.title}
                subtitle={content?.heading.subtitle}
              />

            ))
          }
        </div>
      </NioSection.Content>
    </div>
  )
}
