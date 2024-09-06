import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';


// components 
import { NioSection, NioCount, NioButton, NioMedia, NioCard, NioIcon } from '../../../components';

// section content 
import TestimonialContent from '../../../components/PageComponents/Homepages/BSConsulting/TestimonialContent/TestimonialContent';

function index() {
  return (

    <AppLayout title="Business Consulting" footerVariant={6} layoutClass="20">

      {/*  Banner Section Start  */}
      <section className="nl-banner  nl-banner-bs-consulting bg-gray-200" data-bg-image="business-consulting/banner-cover.jpg">
        <div className="nl-banner-wrap">
          <Container>
            <div className="nl-banner-content">
              <Row className="align-items-center">
                <Col lg="8" xxl="6">
                  <div>
                      <h1 className="display-3 text-white text-capitalize mb-md-4" >Elevate your business to greater heights</h1>
                      <p className="text-white opacity-75 mb-0">Together, we manage and empower markets by utilizing both established and emerging channels for potential growth</p>
                    <ul className="d-flex flex-wrap gap-3 align-items-center pt-5">
                      <li>
                        <NioButton href="#" className="btn-primary" label="Get Started" />
                      </li>
                      <li>
                        <NioButton href="#" label="Learn More" className="btn-outline-white" />
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/* Complishment Section Start */}
      <NioSection className="nl-section-complishment py-7 py-xl-0">
        <div className="nl-section-content">
          <Row className="gy-7 gy-xl-0">
            <Col sm="6" xl="3"  >
              <div className="text-center">
                <p className="h1 mb-2 mb-lg-4 d-flex align-items-center justify-content-center">
                  <NioCount end={235} />
                  <span className="text-primary">+</span>
                </p>
                <div>
                  <h5>Projects Completed</h5>
                  <p className="fs-6 mb-0"> Impressive track record of completed projects. </p>
                </div>
              </div>
            </Col>
            <Col sm="6" xl="3"  >
              <div className="text-center">
                <p className="h1 mb-2 mb-lg-4 d-flex align-items-center justify-content-center">
                  <NioCount end={470} />
                  <span className="text-primary">+</span>
                </p>
                <div>
                  <h5>Happy Customers</h5>
                  <p className="fs-6 mb-0"> Delighted customers with exceptional experiences. </p>
                </div>
              </div>
            </Col>
            <Col sm="6" xl="3"  >
              <div className="text-center">
                <p className="h1 mb-2 mb-lg-4 d-flex align-items-center justify-content-center">
                  <NioCount end={97} />
                  <span className="text-primary">+</span>
                </p>
                <div>
                  <h5>Client Retention</h5>
                  <p className="fs-6 mb-0"> Strong client retention, fostering long-term partnerships. </p>
                </div>
              </div>
            </Col>
            <Col sm="6" xl="3" >
              <div className="text-center">
                <p className="h1 mb-2 mb-lg-4 d-flex align-items-center justify-content-center">
                  <NioCount end={52} />
                  <span className="text-primary">+</span>
                </p>
                <div>
                  <h5>Awards Won</h5>
                  <p className="fs-6 "> Prestigious awards won for outstanding achievements. </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </NioSection>
      {/* Complishment Section End */}

      {/* Achive Section Start */}
      <NioSection className="py-7 py-xl-120">
        <NioSection.Content>
          <Row className="align-items-center justify-content-between gx-lg-7">
            <Col lg="6">
              <div className="nl-frame mb-5 mb-lg-0">
                <img src="images/business-consulting/section-cover-1.jpg" alt="section-frame" className="rounded-4"  />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="nl-section-head pb-5 border-bottom">
                  <span className="nl-section-subtitle mb-2">Focused on achieving</span>
                  <h3 className="nl-section-title mb-5">Achievement via our distinct methodology</h3>
                  <NioButton
                    href="#"
                    icon="arrow-right after"
                    label="Learn More"
                    className="btn-link"
                  />
                </div>
                <ul className="d-flex flex-column gap-5 pt-5">
                  <li className="d-flex gap-2">
                    <NioMedia rounded="circle" icon="bar-chart-fill" variant="primary-soft" className="mb-5" />
                    <div>
                      <h5 className="mb-1">Manage markets with empowerment</h5>
                      <p className="m-0 fs-8 ">Empower yourself to effectively manage markets with confidence, utilizing strategic insights and resources for success.</p>
                    </div>
                  </li>
                  <li className="d-flex gap-2">
                    <NioMedia rounded="circle" icon="browser-fill" variant="primary-soft" className="mb-5" />
                    <div>
                      <h5 className="mb-1">Optimize the timely completion of tasks</h5>
                      <p className="m-0 fs-8 ">Achieve task completion optimization by effectively managing time and resources, ensuring timely delivery and efficiency.</p>
                    </div>
                  </li>
                  <li className="d-flex gap-2">
                    <NioMedia rounded="circle" icon="grid-fill-c" variant="primary-soft" className="mb-5" />
                    <div>
                      <h5 className="mb-1">Presentations in real-time</h5>
                      <p className="m-0 fs-8 ">Deliver real-time presentations, engaging your audience with live and interactive content for an immersive and dynamic experience.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>

      </NioSection>
      {/* Achive Section End */}


      {/* Solutions Section Start */}

      <NioSection className="bg-gray-200">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Our Solutions</span>
          <h2 className="nl-section-title">The Solutions We Offer</h2>
          <p className="mb-0"> Our comprehensive range of solutions encompasses various domains, providing effective resolutions. </p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="#" label="Browse All" className="btn-primary" />
            </li>
          </ul>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5 gy-xxl-0">
            <Col md="6" lg="4" xxl="3"  >
              <NioCard className="h-100 shadow-xl">
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="coins" className="mb-5" />
                  <div className="mb-5">
                    <h4>Projections related to finance</h4>
                    <p className="fs-7 line-clamp-2"> Utilize financial projections to forecast and analyze future outcomes, enabling informed decision-making and strategic planning in the realm of finance. </p>
                  </div>
                  <Link to="#" className="btn-link">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" xxl="3"  >
              <NioCard className="h-100 shadow-xl">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="line-chart-down"/>
                  <div>
                    <h4>Planning with a strategic approach</h4>
                    <p className="fs-7 mb-0 line-clamp-2"> Plan with a strategic approach, aligning goals, resources, and actions to maximize outcomes and drive success. </p>
                  </div>
                  <Link to="#" className="btn-link">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" xxl="3"  >
              <NioCard className="h-100 shadow-xl">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="filter"/>
                  <div>
                    <h4>Development for executives</h4>
                    <p className="fs-7 mb-0 line-clamp-2"> Empower executives with targeted development programs, enhancing leadership skills, strategic thinking, and decision-making capabilities for professional growth and success. </p>
                  </div>
                  <Link to="#" className="btn-link">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" xxl="3" >
              <NioCard className="h-100 shadow-xl">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="share"/>
                  <div>
                    <h4>Consultation for marketing</h4>
                    <p className="fs-7 mb-0 line-clamp-2"> Business in managin expenses these are some of the reasons in managing business finances. </p>
                  </div>
                  <Link to="#" className="btn-link">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/* Solutions Section End */}

      {/* newsletter Section Start */}
      <NioSection className="nl-section-case is-theme bg-gray-500" data-bg-image="business-consulting/section-cover-2.jpg" >
        <NioSection.Content>
          <Row className="align-items-center justify-content-center justify-content-xl-start ">
            <Col lg="8" xxl="6">
              <div className="nl-section-head pb-0 text-center text-xl-start">
                <h2 className="text-white">A detailed examination of a specific case</h2>
                <p className="m-0 fs-7 text-gray">Together, we manage and empower markets by utilizing both established and emerging channels for potential growth</p>
                <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center  justify-content-xl-start pt-5">
                  <li>
                    <NioButton href="#" label="Join Now" className="btn-primary" />
                  </li>
                  <li>
                    <NioButton href="#" label="See Video" className="btn-outline-white" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* newsletter Section End */}

      {/* Process Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Our process</span>
          <h2 className="nl-section-title">Let’s See How it Works</h2>
          <p className="mb-0">Let's explore the functionality and process of how it works, gaining insights into its operation and effectiveness.</p>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="flex-row-reverse align-items-center justify-content-between">
            <Col lg="6">
              <div className="nl-frame mb-5 mb-lg-0 ">
                <img src="images/business-consulting/section-cover-3.jpg" alt="section-cover" className="rounded-4"   />
              </div>
            </Col>
            <Col lg="5">
              <ul className="nl-schedule nl-schedule-s2">
                <li className="nl-schedule-item pb-5">
                  <div className="nl-schedule-item-inner">
                    <div className="nl-schedule-symbol">
                      <NioMedia  rounded="circle" icon="check" className="z-1" variant="primary-soft" />
                    </div>
                    <div className="nl-schedule-content">
                      <div className="nl-section-head pb-0">
                        <span className="nl-section-subtitle mb-2">step 1</span>
                        <div>
                          <h3 className="text-capitalize mb-2">Create Account</h3>
                          <p className="fs-7"> Join NioLand and create your account to access a wide range of powerful tools. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nl-schedule-item pb-5">
                  <div className="nl-schedule-item-inner">
                    <div className="nl-schedule-symbol">
                      <NioMedia  rounded="circle" icon="check" className="z-1" variant="primary-soft" />
                    </div>
                    <div className="nl-schedule-content">
                      <div className="nl-section-head pb-0">
                        <span className="nl-section-subtitle mb-2">step 2</span>
                        <div>
                          <h3 className="text-capitalize mb-2">Collect Ideas</h3>
                          <p className="fs-7"> Capture, organize, and collaborate on ideas effortlessly with NioLand. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nl-schedule-item pb-5">
                  <div className="nl-schedule-item-inner">
                    <div className="nl-schedule-symbol">
                      <NioMedia  rounded="circle" icon="check" className="z-1" variant="primary-soft" />
                    </div>
                    <div className="nl-schedule-content">
                      <div className="nl-section-head pb-0">
                        <span className="nl-section-subtitle mb-2">step 3</span>
                        <div>
                          <h3 className="text-capitalize mb-2">Data Analysis</h3>
                          <p className="fs-7"> Unleash the power of data with NioLand's robust data analysis capabilities. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Process Section End */}

      {/* Clients Section Start */}
      <NioSection>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">OUR CLIENTS</span>
          <h2 className="nl-section-title">Stories From Our Customers</h2>
          <p className="mb-0">Customer success stories that demonstrate the transformative impact of our solutions and services.</p>
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/* Clients Section End */}

      {/* Brands Section Start */}
      <NioSection>
        <Row className="justify-content-center">
          <Col lg="7">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle mb-2">Our Brands</span>
              <h2 className="text-capitalize">Partner with more Than 168 Brands</h2>
              <p className="mb-0">Trusted by 10,000+ companies around the world</p>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gap g-3 justify-content-center">
            {
              ["a", "b", "c", "d", "e"].map((brand, idx) => (
                <Col key={idx} xs="6" sm="4" lg="2">
                  <Link to="#"className="bg-gray rounded-1 py-4 px-5 text-center d-inline-block w-100 h-100">
                    <img src={`images/brands/${brand}.png`} alt="brand" />
                  </Link>
                </Col>
              ))
            }
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Brands Section End */}

      {/* CTA Section Start */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content className="bg-primary p-5 p-md-7 py-lg-80 text-center overflow-hidden rounded-4 bg-3">
          <Row className="justify-content-center">
            <Col xl="8">
              <div>
                <div className="nl-section-head pb-0">
                  <h2 className="text-white">Let's get in touch and have a discussion</h2>
                  <p className="text-white opacity-75 col-lg-10 mb-0 mx-lg-auto">Deliver faster, collaborate better and innovate more effectively without the high price tag or months-long implementation required by other products.</p>
                  <div className="pt-5 pt-lg-40">
                    <NioButton href="/contact-us" label="CONTACT US" className="btn-white btn-lg py-3 text-primary fw-semibold" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* CTA Section End */}

    </AppLayout >
  )
}

export default index;