import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioButton, NioCard, NioIcon, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section content 
import TestimonialContent from '../../../components/PageComponents/InnerPages/Careers/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout title="Careers" layoutClass="1">

      {/*  Team Section Start   */}
      <section className="nl-section nl-section-teams pt-120 pt-lg-160" >
        <div className="nl-mask blur-1 left top"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" xl="6">
              <div className="nl-section-head text-center">
                <span className="nl-section-subtitle mb-2" >Join Our Team</span>
                <h2 className="nl-section-title">Grow your career</h2>
                <p className="mb-0" > Accelerate your career growth with our comprehensive resources, personalized coaching, and valuable insights. </p>
                <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                  <li>
                    <NioButton href="#" label="Open Positions" className="btn btn-primary" />
                  </li>
                  <li>
                    <NioButton href="/contact-us" label="Contact Us" className="btn btn-outline-primary" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="nl-section-content" >
          <TestimonialContent />
        </div>
      </section>
      {/*  Team Section End   */}

      {/*  Offer Section Start   */}
      <NioSection masks={["blur-1 right top"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">perks & Benefits</span>
          <h2 className="nl-section-title">We Offer Comprehensive Benefits</h2>
          <p> Unlock a world of comprehensive benefits that cater to your needs, including health coverage, retirement plans. </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-3 gy-lg-5 justify-content-center">
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia rounded="circle" size="lg" variant="primary-soft" icon="home-fill"/>
                  <div>
                    <h5>Remote Work Options</h5>
                    <p className="fs-7 mb-0">Due to the COVID-19 pandemic, working remotely has become the norm for many companies.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia rounded="circle" size="lg" variant="primary-soft" icon="sun-fill"/>
                  <div>
                    <h5>Unlimited PTO</h5>
                    <p className="fs-7 mb-0">Offering this perk will resonate among employees and job seekers who want to work for a socially responsible company.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia rounded="circle" size="lg" variant="primary-soft" icon="clock-fill"/>
                  <div>
                    <h5>Flexible Hours</h5>
                    <p className="fs-7 mb-0">Employees break down their workday into non-consecutive chunks of time — 8 a.m. to noon and 4 p.m. to 8 p.m.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia rounded="circle" size="lg" variant="primary-soft" icon="plus-medi-fill"/>
                  <div>
                    <h5>Medical Insurance</h5>
                    <p className="fs-7 mb-0">In a Robert Half survey of more than 1,000 candidates in the United States, 76% of respondents ranked health insurance.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia rounded="circle" size="lg" variant="primary-soft" icon="bar-chart-fill"/>
                  <div>
                    <h5>Career Growth</h5>
                    <p className="fs-7 mb-0">Planning around your career development is essential for reaching your goals, workplace accomplishments and hard skills. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia rounded="circle" size="lg" variant="primary-soft" icon="building-fill"/>
                  <div>
                    <h5>Great Culture</h5>
                    <p className="fs-7 mb-0">Our working culture encouraged to work as a team, have each other's back, and bring the best outcomes in every project.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>

        </NioSection.Content>
      </NioSection>
      {/*  Offer Section End   */}

      {/*  About-Info Section Start   */}
      <NioSection className="nl-section nl-section-info-about" masks={["blur-1 left center"]}>
        <NioSection.Content>
          <Row className="flex-row-reverse align-items-center justify-content-between">
            <Col lg="6">
              <div className="nl-frame pb-md-7 pb-lg-0">
                <img src="images/career/section-cover-1.png" alt="section-cover" />
                <div className="nl-frame-children">
                  <img src="images/career/section-cover-1-a.png" alt="section-cover" />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <div className="nl-section-head">
                  <h2 className="nl-section-title mb-2">We make it easy for teams to build great software</h2>
                  <p> Empower your teams to create exceptional software with our user-friendly platform that streamlines development processes, enhances collaboration, and provides robust tools for efficient project management. </p>
                </div>
                <NioButton href="#" icon="arrow-right after" label="Learn More" className="btn btn-outline-primary" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  About-Info Section End   */}

      {/*  Positions Section Start   */}
      <NioSection masks={["blur-1 right top", "blur-1 left bottom"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Open Positions</span>
          <h2 className="nl-section-title">Come join us at NioLand</h2>
          <p className="mb-0"> Join us at NioLand and be part of our innovative and dynamic team. We offer exciting opportunities for growth. </p>
        </NioSection.Head>

        <NioSection.Content className="nl-section-content border rounded-3 p-5 p-md-7">
          <Row className="mb-5">
            <Col lg="3">
              <h4 className="mb-5 mb-lg-0">Development</h4>
            </Col>
            <Col lg="9">
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md="8" className="position-card-info px-lg-0 mb-5 mb-md-0 ">
                    <h5 className="mb-2">Lead Backend Developer</h5>
                    <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-8 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-8 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-8 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md="4" xl="3">
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md="8" className="position-card-info px-lg-0 mb-5 mb-md-0 ">
                    <h5 className="mb-2">Full Stack Developer</h5>
                    <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-8 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-8 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-8 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md="4" xl="3">
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col lg="3">
              <h4 className="mb-5 mb-lg-0">Design</h4>
            </Col>
            <Col lg="9">
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md="8" className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Senior Product Designer</h5>
                    <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-8 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-8 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-8 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md="4" xl="3">
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md="8" className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Senior UI/UX Designer</h5>
                    <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-8 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-8 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-8 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md="4" xl="3">
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <h4 className="mb-5 mb-lg-0">Marketing</h4>
            </Col>
            <Col lg="9">
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md="8" className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Head of Growth Hacking</h5>
                    <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-8 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-8 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-8 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md="4" xl="3">
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
              <div className="position-card ps-lg-2 pb-5">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md="8" className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Social Media & Community Manager</h5>
                    <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-8 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-8 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-8 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md="4" xl="3">
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Positions Section End */}

      {/* CTA Section Start */}
      <NioSection>
        <NioSection.Content>
          <div className="bg-primary-gradient rounded-3  p-5 p-lg-7" >
            <Row className="align-items-center gy-5">
              <Col lg="8">
                <div className="d-flex flex-column gap-3 flex-lg-row align-items-center">
                  <NioMedia size="xl" rounded="circle" variant="white" icon="chat-fill text-primary" />
                  <div className="text-center text-lg-start">
                    <h3 className="text-white text-capitalize m-0">Don’t see your role in our positions?</h3>
                    <p className="fs-7 mb-0 text-white opacity-75">Get in touch with our support team if you still can’t find your answer.</p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="text-center text-lg-end">
                <NioButton href="/contact-us" className="btn-white text-dark fw-semiBold" label="Contact Support" />
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
      {/* CTA Section End */}

      {/*  Newsletter Section Start  */}
      <NioSection className="pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-lighter">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-7">Join the 5000+ People That Uses Softnio Products.</p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="5">

            <NioSubscribeField />
          </Col>
        </Row>
      </NioSection>
      {/*  Newsletter Section End  */}
    </AppLayout >
  )
}

export default index;