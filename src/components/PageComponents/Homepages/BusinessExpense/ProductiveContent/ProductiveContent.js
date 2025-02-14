import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap';

// components
import NioIcon from '../../../../NioIcon/NioIcon';
import NioButton from '../../../../NioButton/NioButton';
import NioSection from '../../../../NioSection/NioSection';

export default function ProductiveContent() {
  return (

    <Tab.Container className="nl-report-wrap" defaultActiveKey={"spendIn"}>
      <NioSection.Head>
        <span className="nl-section-subtitle mb-2">increase productivity</span>
        <h2 className="nl-section-title">Reduce Time in Doing Manual Work Managing Expenses</h2>
        <Nav variant="pills" className="bg-gray-400 d-inline-flex border rounded-pill p-2 mt-3 mt-md-5">
          <Nav.Item>
            <Nav.Link className="rounded-pill fw-semibold" eventKey="spendIn">
              Spend In
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="rounded-pill fw-semibold" eventKey="spendOut">
              Spend out
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </NioSection.Head>
      <NioSection.Content>
        <Tab.Content>
          <Tab.Pane eventKey={"spendIn"}>
            <Row className="flex-row-reverse align-items-lg-center justify-content-lg-between">
              <Col lg="6">
                <div className="mb-5 mb-md-7 mb-lg-0" >
                  <img src="images/blog/card-cover-8.png" alt="track-business" className="rounded-4" />
                </div>
              </Col>
              <Col lg="6" xl="5">
                <div>
                  <h3 className="mb-5">Track Business Income until its Milisecond</h3>
                  <ul className="d-flex flex-column gap-3 gap-lg-5">
                    <li className="d-flex gap-2">
                      <div className="text-primary">
                        <NioIcon name="check-circle-fill" className="fs-5" />
                      </div>
                      <p className="mb-0">Analyze your business cost easily with group transaction thorugh tagging feature.</p>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="text-primary">
                        <NioIcon name="check-circle-fill" className="fs-5" />
                      </div>
                      <p className="mb-0">Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.</p>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="text-primary">
                        <NioIcon name="check-circle-fill" className="fs-5" />
                      </div>
                      <p className="mb-0">Arrange your business expenses by date, name, etc with just one click.</p>
                    </li>
                  </ul>
                  <div className="pt-5 pt-lg-7">
                    <ul className="d-flex flex-wrap gap-3 align-items-center">
                      <li>
                        <NioButton href="/contact-us" className="btn-block btn-primary rounded-pill" label="Get Started" />
                      </li>
                      <li>
                        <NioButton href="#" className="btn-block btn-outline-primary rounded-pill" label="Learn More" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey={"spendOut"}>
            <Row className="flex-row-reverse align-items-lg-center justify-content-lg-between">
              <Col lg="6">
                <div className="mb-5 mb-md-7 mb-lg-0" >
                  <img src="images/blog/card-cover-8-a.png" alt="track-business" className="rounded-4" />
                </div>
              </Col>
              <Col lg="6" xl="5">
                <div>
                  <h3 className="mb-5">Track Business Expense until its Milisecond</h3>
                  <ul className="d-flex flex-column gap-3 gap-lg-5">
                    <li className="d-flex gap-2">
                      <div className="text-danger">
                        <NioIcon name="check-circle-fill" className="fs-5" />
                      </div>
                      <p className="mb-0">Seamlessly track business expenses with precision down to the millisecond, ensuring accurate financial records.</p>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="text-danger">
                        <NioIcon name="check-circle-fill" className="fs-5" />
                      </div>
                      <p className="mb-0">Effortlessly monitor and record business expenses in real-time, down to the millisecond, for precise financial tracking.</p>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="text-danger">
                        <NioIcon name="check-circle-fill" className="fs-5" />
                      </div>
                      <p className="mb-0">Keep a meticulous record of business expenses, down to the millisecond, with our seamless tracking solution.</p>
                    </li>
                  </ul>
                  <div className="pt-5 pt-lg-7">
                    <ul className="d-flex flex-wrap gap-3 align-items-center">
                      <li>
                        <NioButton href="/contact-us" className="btn-block btn-danger rounded-pill" label="Get Started" />
                      </li>
                      <li>
                        <NioButton href="#" className="btn-block btn-outline-danger rounded-pill" label="Learn More" />
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Tab.Pane>
        </Tab.Content>
      </NioSection.Content>

    </Tab.Container>
  )
}
