import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioButton, NioCard, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section content 
import NioFilterTab from '../../../components/PageComponents/InnerPages/Careers/NioFilterTab/NioFilterTab';
import SearchField from '../../../components/PageComponents/InnerPages/Careers/SearchField/SearchField';

function index() {
  return (
    <AppLayout title="Careers" footerVariant={8} layoutClass="16">

      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-career-project-manage bg-gray">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="gy-5 justify-content-center justify-content-xl-between align-items-center flex-xl-row-reverse ">
            <Col xl="6">
                <div className="text-center text-xl-end">
                    <img src="images/career/banner-cover.png" alt="banner-frame" />
                </div>
              </Col>
              <Col lg="10" xl="6">
                <div className="d-flex flex-column text-center text-xl-start gap-5">
                  <div>
                    <h1 className="display-3 mb-4"> Get The Right Job You Deserve</h1>
                    <p className="mb-0 text-dark">
                      Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
                    </p>
                  </div>
                  <div>
                    <SearchField/>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Perks Section Start   */}
      <section className="nl-section py-7 py-lg-120">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" xxl="6">
              <div className="nl-section-head text-center">
                <span className="nl-section-subtitle mb-2">perks & Benefits</span>
                <h2 className="nl-section-title">We offer comprehensive benefits</h2>
                <p>Discover our all-encompassing benefits package, ensuring complete coverage and support for your well-being.</p>
              </div>
            </Col>
          </Row>
          <Row className="gy-3 gy-lg-5 justify-content-center">
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" icon="home-fill" variant="blue-soft" />
                  <div>
                    <h5 className="text-capitalize">Remote Work Options</h5>
                    <p className="fs-7 line-clamp-3 mb-0">
                      Due to the COVID-19 pandemic, working remotely has become the norm for many companies.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" icon="sun-fill" variant="red-soft" />
                  <div>
                    <h5 className="text-capitalize">Unlimited PTO</h5>
                    <p className="fs-7 line-clamp-3 mb-0">
                      Offering this perk will resonate among employees and job seekers who want to work for a socially responsible company.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" icon="clock-fill" variant="green-soft" />
                  <div>
                    <h5 className="text-capitalize">Flexible Hours</h5>
                    <p className="fs-7 line-clamp-3 mb-0">
                      Employees break down their workday into non-consecutive chunks of time — 8 a.m. to noon and 4 p.m. to 8 p.m.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" icon="plus-medi-fill" variant="cyan-soft" />
                  <div>
                    <h5 className="text-capitalize">Medical Insurance</h5>
                    <p className="fs-7 line-clamp-3 mb-0">
                      In a Robert Half survey of more than 1,000 candidates in the United States, 76% of respondents ranked health insurance.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" icon="bar-chart-fill" variant="warning-soft" />
                  <div>
                    <h5 className="text-capitalize">Career Growth</h5>
                    <p className="fs-7 line-clamp-3 mb-0">
                      Planning around your career development is essential for reaching your goals, workplace accomplishments and hard skills.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" icon="building-fill" variant="purple-soft" />
                  <div>
                    <h5 className="text-capitalize">Great Culture</h5>
                    <p className="fs-7 line-clamp-3 mb-0">
                      Our working culture encouraged to work as a team, have each other's back, and bring the best outcomes in every project.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </Container>
      </section>
      {/*  Perks Section End   */}

      {/*  Team Section Start   */}
      <NioSection className="nl-section-teams overflow-hidden bg-primary-gradient">
        <Row className="justify-content-center">
          <Col lg="8" xl="6" xxl="5">
            <div className="nl-section-head text-center">
              <h2 className="nl-section-title">Join Our Global Team</h2>
              <p>We put people first and want to empower everybody at Nioland to do your best work.</p>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <NioFilterTab />
        </NioSection.Content>
      </NioSection>
      {/*  Team Section End   */}

      {/*  About-Info Section Start   */}
      <section className="nl-section nl-section-info-about pt-7 pt-lg-120">
        <Container>
          <Row className="flex-row-reverse align-items-center justify-content-between">
            <Col lg="6">
              <div className="nl-frame pb-md-7 pb-lg-0">
                <img src="images/career/section-cover-1.png" alt="section-cover"  />
                <div className="nl-frame-children">
                  <img src="images/career/section-cover-1-a.png" alt="section-cover"  />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <div className="nl-section-head pb-5">
                  <span className="nl-section-subtitle mb-2">Is Your Cv Is</span>
                  <h2 className="nl-section-title">Good Enough</h2>
                  <p className="text-dark">
                    When you`re building a new product and don`t have the exact plan we will help to create a strategy, our attention to detail and quality is unmatched in the industry. We’re not just a resource provider but also a key strategic.
                  </p>
                </div>
                <ul className="d-flex flex-column gap gy-1 mb-5">
                  <li className="d-flex align-items-center gap-2">
                    <span>
                      <em className="icon text-primary ni ni-check-circle-fill"></em>
                    </span>
                    <p className="fs-7 text-dark">Get Help from Our Prefessional About CV</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span>
                      <em className="icon text-primary ni ni-check-circle-fill"></em>
                    </span>
                    <p className="fs-7 text-dark">Your Resume Exactly What you look alike.</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span>
                      <em className="icon text-primary ni ni-check-circle-fill"></em>
                    </span>
                    <p className="fs-7 text-dark">Quality service and support all time</p>
                  </li>
                  <li className="d-flex align-items-center gap-2">
                    <span>
                      <em className="icon text-primary ni ni-check-circle-fill"></em>
                    </span>
                    <p className="fs-7 text-dark">CV Builder Help You Create Resume</p>
                  </li>
                </ul>
                <NioButton
                  href="#"
                  icon="arrow-right after"
                  label="Learn More"
                  className="btn btn-outline-primary"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*  About-Info Section End   */}

      {/*  CTA Section Start  */}
      <section className="nl-section nl-section-cta nl-cta nl-cta-one">
        <Container>
          <div className="position-relative overflow-hidden z-1" >
            <div className="nl-frame nl-frame-19 d-none d-xxl-block">
              <div className="nl-frame-children nl-frame-children-one">
                <img src="images/career/cta-cover-1.png" alt="frame-cover" />
              </div>
              <div className="nl-frame-children nl-frame-children-two">
                <img src="images/career/cta-cover-2.png" alt="frame-cover" />
              </div>
              <div className="nl-frame-children nl-frame-children-three">
                <img src="images/career/cta-cover-3.png" alt="frame-cover" />
              </div>
              <div className="nl-frame-children nl-frame-children-four">
                <img src="images/career/cta-cover-4.png" alt="frame-cover" />
              </div>
              <div className="nl-frame-children nl-frame-children-five">
                <img src="images/career/cta-cover-5.png" alt="frame-cover" />
              </div>
            </div>
            <div className="nl-cta-wrap rounded-4">
              <Row className="justify-content-center">
                <Col lg="8" xxl="6">
                  <div className="nl-section-head text-center pb-5">
                    <h2>New Things Will Always Update Regularly</h2>
                  </div>
                  <NioSubscribeField variant={3}/>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      {/*  CTA Section End   */}

    </AppLayout >
  )
}

export default index;