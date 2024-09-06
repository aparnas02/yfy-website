import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioButton, NioCard, NioIcon, NioMedia, NioSection, NioClipBoard, NioSubscribeField } from '../../../components';

function index() {
  return (
    <AppLayout title="Career Details" footerVariant={8} layoutClass="16">

      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-career-job-details bg-gray">
        <div className="nl-banner-wrap pt-120 pt-lg-180 pb-lg-400">
          <Container>
            <Row>
              <Col lg="8" xxl="5">
                <div>
                  <NioButton href="/careers-two" icon="arrow-left" label="Back to Lists" className="btn-link mb-2" />
                  <h1 className="mb-3">Senior UI/UX Designer</h1>
                  <ul className="d-flex align-items-center gap-5 mb-5">
                    <li>
                      <p className="fs-8  fw-semibold text-uppercase">
                        <NioIcon name="clock-fill text-dark" />
                        <span className="ms-1 text-dark">Full Time</span>
                      </p>
                    </li>
                    <li>
                      <p className="fs-8 fw-semibold text-uppercase">
                        <NioIcon name="map-pin-fill text-dark" />
                        <span className="ms-1 text-dark">San Francisco</span>
                      </p>
                    </li>
                  </ul>
                  <NioButton href="#" label="Apply Now" className="btn-primary" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Job-Details Section Start   */}

      <NioSection className="nl-section-job-details pt-lg-0 pb-lg-120">
        <NioSection.Content>
          <Row className="px-lg-5">
            <Col lg="8" className="pe-lg-0">
              <div className="nl-entry pe-lg-5 py-lg-5">
                <div className="mb-5">
                  <h5 className="text-capitalize mb-3">About the job</h5>
                  <p className="fs-7 text-dark">
                    A lead backend developer designs, develops, and maintains server-side components, ensuring efficiency and scalability. They provide technical leadership, manage teams, optimize code, and troubleshoot issues. With strong programming skills and problem-solving abilities, they deliver high-quality solutions. Effective collaboration with cross-functional teams, including frontend developers and UX designers, is essential. Their role drives the advancement of software applications.
                  </p>
                  <ul className="ps-4">
                    <li>
                      <p className="fs-7 text-dark">Design and Develop: A lead backend developer designs and develops server-side components, creating efficient and scalable backend systems.</p>
                    </li>
                    <li>
                      <p className="fs-7 text-dark">Technical Leadership: They provide technical leadership, guiding and supporting their team members to deliver high-quality solutions.</p>
                    </li>
                    <li>
                      <p className="fs-7 text-dark">Problem-solving: Lead backend developers possess strong problem-solving skills, enabling them to address complex challenges and troubleshoot issues effectively.</p>
                    </li>
                    <li>
                      <p className="fs-7 text-dark">Collaboration: Effective collaboration with cross-functional teams, including frontend developers and UX designers, is crucial for successful project delivery and advancing software applications.</p>
                    </li>
                  </ul>
                  <h5 className="text-capitalize mb-3">What to consider when choosing the right tech stack?</h5>
                  <p className="fs-7 text-dark">At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce id velit ut tortor sagittis orci a scelerisque purus semper eget at lectus urna duis convallis. porta nibh venenatis cras sed felis eget neque laoreet suspendisse interdum consectetur libero nisl donec pretium vulputate sapien nec sagittis aliquam nunc lobortis mattis aliquam faucibus purus in.</p>
                  <ul className="ps-4">
                    <li>
                      <p className="fs-7 text-dark">Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</p>
                    </li>
                    <li>
                      <p className="fs-7 text-dark">Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent</p>
                    </li>
                    <li>
                      <p className="fs-7 text-dark">Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</p>
                    </li>
                    <li>
                      <p className="fs-7 text-dark">
                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <h5 className="text-capitalize mb-3">Job responsibilities</h5>
                  <p className="fs-7 text-dark">
                    Job responsibilities of a lead backend developer include designing and developing server-side components, providing technical leadership, managing teams, optimizing code, troubleshooting issues, and collaborating with cross-functional teams to ensure successful project delivery and advancement of software applications.
                  </p>
                </div>
                <div>

                  <h5 className="text-capitalize mb-3">Job requirements</h5>
                  <p className="fs-7 text-dark">
                    Job requirements for a lead backend developer typically include strong programming skills, expertise in backend technologies, leadership abilities, problem-solving aptitude, and effective communication and collaboration skills.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" className="ps-lg-0">
              <div className="nl-section-blog-sidebar ps-lg-5 py-lg-5">
                <div className="nl-section-blog-details">
                  <h4 className="mb-3">Job Details</h4>
                  <ul className="d-flex flex-column gap-2 pb-5">
                    <li className="d-flex align-items-center gap-5 ">
                      <p className="m-0 fs-8 fw-semibold text-dark text-uppercase w-50">JOB TITLE:</p>
                      <p className="m-0 fs-7 text-dark w-75">Senior Accountant</p>
                    </li>
                    <li className="d-flex align-items-center gap-5 ">
                      <p className="m-0 fs-8 fw-semibold text-dark text-uppercase w-50">CAREER AREA:</p>
                      <p className="m-0 fs-7 text-dark w-75">Finance</p>
                    </li>
                    <li className="d-flex align-items-center gap-5 ">
                      <p className="m-0 fs-8 fw-semibold text-dark text-uppercase w-50">LOCATION:</p>
                      <p className="m-0 fs-7 text-dark w-75">Remote position</p>
                    </li>
                    <li className="d-flex align-items-center gap-5 ">
                      <p className="m-0 fs-8 fw-semibold text-dark text-uppercase w-50">POSITION:</p>
                      <p className="m-0 fs-7 text-dark w-75">Senior UI/UX Designer</p>
                    </li>
                  </ul>
                  <NioButton href="#" label="Apply For This Position" className="btn-primary w-100" />
                  <div className="pt-6">
                    <h6 className="fs-6 mb-3">Share this job opening</h6>
                    <NioClipBoard />
                    <ul className="d-flex gap-2 flex-wrap align-items-center mt-3">
                      <li>
                        <NioMedia href="#"  size="md" icon="facebook-f" variant="primary-soft" />
                      </li>
                      <li>
                        <NioMedia href="#"  size="md" icon="twitter" variant="primary-soft" />
                      </li>
                      <li>
                        <NioMedia href="#"  size="md" icon="linkedin" variant="primary-soft" />
                      </li>
                      <li>
                        <NioMedia href="#"  size="md" icon="telegram" variant="primary-soft" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Job-Details Section End   */}

      {/*  Open-Position Section Start   */}
      <NioSection className="nl-section-positions pt-lg-0">
        <Row className="align-items-center justify-content-center justify-content-lg-between pb-7">
          <Col lg="6">
            <h2 className="nl-section-title text-center text-lg-start mb-5 mb-lg-0">More Open Positions</h2>
          </Col>
          <Col lg="6" className="text-center text-lg-end">
            <NioButton href="/careers" icon="arrow-right after" label="Browse All" className="btn-outline-primary" />
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-xl-0">
            <Col xl="6" >
              <NioCard>
                <NioCard.Body>
                  <div className="pb-5 mb-5 border-bottom">
                    <Row className="align-items-center justify-content-md-between gap-0">
                      <Col md="9" lg="8">
                        <div>
                          <h5 className="mb-2">Lead Backend Developer</h5>
                          <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                            <p className="d-flex align-items-center gap-1 mb-0">
                              <NioIcon name="map-pin-fill" />
                              <span className="fs-8 fw-semibold text-uppercase text-nowrap "> san francisco</span>
                            </p>
                            -
                            <p className="d-flex align-items-center gap-1 mb-0">
                              <NioIcon name="clock-fill" />
                              <span className="fs-8 fw-semibold text-uppercase text-nowrap ">Full Time</span>
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md="3" xl="4" className="text-md-end">
                        <NioButton href="#" label="Apply Now" className="btn-outline-dark border w-100 mt-4 mt-lg-0" />
                      </Col>
                    </Row>
                  </div>
                  <p className="fs-7  line-clamp-2">
                    A lead backend developer is responsible for designing, developing, and managing server-side components, leading a team, and ensuring efficient and scalable backend systems.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="6" >
              <NioCard>
                <NioCard.Body>
                  <div className="pb-5 mb-5 border-bottom">
                    <Row className="align-items-center justify-content-md-between gap-0">
                      <Col md="9" lg="8">
                        <div>
                          <h5 className="mb-2">Senior Product Designer</h5>
                          <div className="d-flex flex-wrap gap-2 align-items-center text-primary mb-2">
                            <p className="d-flex align-items-center gap-1 mb-0">
                              <NioIcon name="map-pin-fill" />
                              <span className="fs-8 fw-semibold text-uppercase text-nowrap ">san francisco</span>
                            </p>
                            -
                            <p className="d-flex align-items-center gap-1 mb-0">
                              <NioIcon name="clock-fill" />
                              <span className="fs-8 fw-semibold text-uppercase text-nowrap ">Full Time</span>
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md="3" xl="4" className="text-md-end">
                        <NioButton href="#" label="Apply Now" className="btn-outline-dark border w-100 mt-4 mt-lg-0" />
                      </Col>
                    </Row>
                  </div>
                  <p className="fs-7  line-clamp-2">
                    A senior product designer is an experienced professional responsible for designing and shaping user-centric product experiences, leading design initiatives, and collaborating with cross-functional teams to deliver exceptional product designs.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Open-Position Section End   */}

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