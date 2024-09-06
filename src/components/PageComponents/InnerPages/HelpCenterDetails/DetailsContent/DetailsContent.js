import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


export default function DetailsContent() {

  const [openItemIndex, setOpenItemIndex] = useState(0);

  function toggleItem(index) {
    setOpenItemIndex(openItemIndex === index ? -1 : index);
  }

  const items = [
    {
      title: 'Billing & Payments',
      content: [
        'Is there a free trial version available?',
        'Can I change my plan later?',
        'What is your cancellation policy?',
        'Can other info be added to an invoice?',
        'How does billing work?',
        'How do I change my account email?',
      ],
    },
    {
      title: 'Users & Collaborations',
      content: [
        'What is your cancellation policy?',
        'Can other info be added to an invoice?',
        'How does billing work?',
        'How do I change my account email?',
      ],
    },
    {
      title: 'Features & Integrations',
      content: [
        'Is there a free trial version available?',
        'Can I change my plan later?',
        'How do I change my account email?',
      ],
    },
    {
      title: 'Frequently Asked Questions',
      content: [
        'Is there a free trial version available?',
        'Can I change my plan later?',
        'How does billing work?',
        'How do I change my account email?'
      ],
    },
  ];

  return (

    <Row>
      <Col lg="3">
        <div className="nl-entry-sidebar">
          <ul className="nl-list-link nl-list-link-collapse flush">
            {items.map((item, index) => (
              <li key={index} className="align-items-start">
                <Link
                  to="#"
                  className="nl-list-link-collapse-link w-100 text-start gap-2 p-0 border-0 bg-transparent"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItemIndex === index}
                  aria-controls={`accordion-${index}`}
                > 
                  <span className="fs-7">{item.title}</span>
                  <em className={`icon ni ${openItemIndex === index ? "ni-minus" : "ni-plus"}`}></em>
                </Link>
                <div
                  id={`accordion-${index}`}
                  className={`collapse ${openItemIndex === index ? "show" : ""}`}
                  aria-labelledby={`accordion-${index}-heading`}
                >
                  <ul className="nl-list-dot nl-list-dot-sm pt-2">
                    {item.content.map((content, i) => (
                      <li className="nl-list-dot-item align-items-start" key={i}>
                        <Link to="#">{content}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Col>
      <Col lg="9">
        <div className="nl-entry-wrap pt-3 pslg-5">
          <div className="nl-entry">
            <h5>Is there a free trial version available?</h5>
            <p className="fs-7 text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ultricies ullamcorper orci vulputate mauris in nibh nullam elementum. Nibh purus, pretium sed pellentesque amet. Eget gravida ut vel amet ut id nunc, neque. Viverra purus pretium elementum tincidunt mollis.</p>
            <p className="fs-7 text-dark">Ipsum, imperdiet nibh venenatis dictumst lectus neque, ante sit. Volutpat gravida commodo augue augue habitasse. Imperdiet ullamcorper bibendum ut sit lorem sit. Quam enim eu, velit ultricies nisl ultricies cras.</p>
            <img src="images/help-center/a.jpg" alt="cover" />
            <h5>Offer your clients a self-service help center</h5>
            <p className="fs-7 text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ultricies ullamcorper orci vulputate mauris in nibh nullam elementum. Nibh purus, pretium sed pellentesque amet. Eget gravida ut vel amet ut id nunc, neque. Viverra purus pretium elementum tincidunt mollis.</p>
            <h5>Ease your Support team with Docs Help Center</h5>
            <p className="fs-7 text-dark">At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce id velit ut tortor sagittis orci a scelerisque purus semper eget at lectus urna duis convallis. porta nibh venenatis cras sed felis eget neque laoreet suspendisse interdum consectetur libero nisl donec pretium vulputate sapien nec sagittis aliquam nunc lobortis mattis aliquam faucibus purus in.</p>
            <ul className="ms-2">
              <li className="fs-7 text-dark">Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li>
              <li className="fs-7 text-dark">Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
              <li className="fs-7 text-dark">Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
              <li className="fs-7 text-dark">Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti</li>
            </ul>
            <img src="images/help-center/b.jpg" alt="cover" />
            <h5>Docs Changelog helps you announce new features</h5>
            <p className="fs-7 text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ultricies ullamcorper orci vulputate mauris in nibh nullam elementum. Nibh purus, pretium sed pellentesque amet. Eget gravida ut vel amet ut id nunc, neque. Viverra purus pretium elementum tincidunt mollis.</p>
            <p className="fs-7 text-dark">Ipsum, imperdiet nibh venenatis dictumst lectus neque, ante sit. Volutpat gravida commodo augue augue habitasse. Imperdiet ullamcorper bibendum ut sit lorem sit. Quam enim eu, velit ultricies nisl ultricies cras.</p>
            <h5>Stay tuned to our ongoing updates</h5>
            <p className="fs-7 text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ultricies ullamcorper orci vulputate mauris in nibh nullam elementum. Nibh purus, pretium sed pellentesque amet. Eget gravida ut vel amet ut id nunc, neque. Viverra purus pretium elementum tincidunt mollis.</p>
            <p className="fs-7 text-dark">Ipsum, imperdiet nibh venenatis dictumst lectus neque, ante sit. Volutpat gravida commodo augue augue habitasse. Imperdiet ullamcorper bibendum ut sit lorem sit. Quam enim eu, velit ultricies nisl ultricies cras. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ultricies ullamcorper orci vulputate mauris in nibh nullam elementum. Nibh purus, pretium sed pellentesque amet. Eget gravida ut vel amet ut id nunc, neque. Viverra purus pretium elementum tincidunt mollis.</p>
          </div>
          {/*  .nl-entry  */}
        </div>
        {/*  .nl-entry-wrap  */}
      </Col>
    </Row>
  )
}
