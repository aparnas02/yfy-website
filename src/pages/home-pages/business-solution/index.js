import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioBadge, NioMedia, NioCount, NioBrand, NioButton, NioCard, NioSubscribeField, NioField } from '../../../components';

// section content 
import PricingContent from '../../../components/PageComponents/Homepages/BusinessSolution/PricingContent/PricingContent';

function index() {
  return (
    <AppLayout title="Business Solution" layoutClass="6">

      {/*  Banner Section Start  */}
      <section className="nl-banner nl-banner-business-solution bg-dark has-bg overflow-hidden">
        <div className="nl-mask shape-19"></div>
        <div className="nl-banner-wrap">
          <Container>
            <Row className="align-items-center justify-content-center justify-content-xl-between">
              <Col lg="6">
                <div className="nl-banner-content text-center text-lg-start pb-7 pb-xl-0">
                  <div className="nl-ribbon mb-3" >
                    <NioBadge size="md" rounded="circle" className="text-bg-primary text-white me-2" label="We're Hiring" />
                    <NioButton href="#" className="fs-9 fw-normal p-0 text-nowrarp" label="Visit Our Career Page" icon="arrow-right after" />
                  </div>
                  <h1 className="mb-3 text-white">Crafting User Specific <span className="text-primary">Solutions With Ease.</span></h1>
                  <p className="text-white opacity-75 mb-0" >We’re different. NioLand is the only saas business platform that lets you run your business on one platform.</p>
                  <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center justify-content-lg-start pt-5">
                    <li>
                      <NioButton href="#" className="btn-indigo" label="Request A Demo" />
                    </li>
                    <li>
                      <NioButton href="/auth/sign-up" className="btn-white text-dark" label="Sign Up" />
                    </li>
                  </ul>
                  <Row className="justify-content-center justify-content-lg-start">
                    <div>
                      <div className="pt-5 pt-lg-6">
                        <h5 className="fw-normal text-gray-700 mb-3">Trusted By</h5>
                        <Row className="justify-content-center justify-content-lg-start gx-2 gap-3 gap-xl-0">
                          <Col xs="4" sm="3" md="2">
                            <div className="nl-brand">
                              <Link to="#">
                                <img src="images/brands/a-light.png" alt="brand-logo" />
                              </Link>
                            </div>
                          </Col>
                          <Col xs="4" sm="3" md="2">
                            <div className="nl-brand">
                              <Link to="#">
                                <img src="images/brands/b-light.png" alt="brand-logo" />
                              </Link>
                            </div>
                          </Col>
                          <Col xs="4" sm="3" md="2">
                            <div className="nl-brand">
                              <Link to="#">
                                <img src="images/brands/c-light.png" alt="brand-logo" />
                              </Link>
                            </div>
                          </Col>
                          <Col xs="4" sm="3" md="2">
                            <div className="nl-brand">
                              <Link to="#">
                                <img src="images/brands/d-light.png" alt="brand-logo" />
                              </Link>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col lg="6" xl="5">
                <div className="nl-mask shape-20 d-none d-xl-block"></div>
                <div className="nl-banner-form-wrap">
                  <NioCard>
                    <NioCard.Body className="p-lg-7 overflow-hidden">
                      <div className="text-center pb-5">
                        <NioBrand logo="s2" variant="dark" />
                        <h3 className="mb-0">Join our community</h3>
                        <p className="fs-8">Already a member? <Link to="/auth/login" className="btn-link">Login</Link>.</p>
                      </div>
                      <form onSubmit={e => e.preventDefault()}>
                        <Row className="gy-5">
                          <Col xs="12">
                            <NioField.Label htmlFor="name" label="Name" />
                            <NioField.Input id="name" placeholder="Enter Your Name" /> 
                          </Col>
                          <Col xs="12">
                            <NioField.Label htmlFor="email" label="Email" />
                            <NioField.Input id="email" type="email" placeholder="Enter Your Email" /> 
                          </Col>
                          <Col xs="12">
                              <NioButton className="btn-block btn-indigo" label="Join Community" />
                          </Col>
                        </Row>
                      </form>
                      <div className="pt-4 text-center overflow-hidden">
                        <div className="nl-text-sep"><span>Or Join With</span></div>
                      </div>
                      <div className="pt-4 w-100 text-center">
                        <NioButton href="#" img="images/icon/a.png" className="btn-block border border-lighter text-dark" label="Join With Google" />
                      </div>
                    </NioCard.Body>
                  </NioCard>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Feature Section Start  */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Head alignX="center" className="pb-xxl-120">
          <span className="nl-section-subtitle">Powerful Features</span>
          <h2 className="nl-section-title">Discover Powerful Features</h2>
          <p className="fs-5 mb-0">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="/features-solution" className="btn-indigo" label="More Details" />
            </li>
            <li>
              <NioButton href="/contact-us-solution" className="btn-outline-indigo" label="Contact Us" />
            </li>
          </ul>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5 gy-lg-0 align-items-center justify-content-center text-center">
            <Col xs={{ order: 2 }} lg={{ span: 4, order: 0 }}>
              <Row className="nl-feature-list gy-5 gy-lg-7">
                <Col xs="12">
                  <div className="d-flex flex-column align-items-center gap-4">
                    <NioMedia size="lg" rounded="circle" variant="blue-soft"  icon="trend-up" />
                    <div>
                      <h4>Custom analytics</h4>
                      <p className="fs-7 mb-0 line-clamp-2">Get a complete sales dashboard in the cloud. See activity, revenue and social metrics.</p>
                    </div>
                    <NioButton href="/features" className="btn-link" icon="arrow-right after" label="Learn More" />
                  </div>
                </Col>
                <Col xs="12">
                  <div className="d-flex flex-column align-items-center gap-4">
                    <NioMedia size="lg" rounded="circle" variant="blue-soft"  icon="emails" />
                    <div>
                      <h4>Measure your performance</h4>
                      <p className="fs-7 mb-0 line-clamp-2">Stay connected with your team and make quick decisions wherever you are. </p>
                    </div>
                    <NioButton href="/features" className="btn-link" icon="arrow-right after" label="Learn More" />
                  </div>
                </Col>
                <Col xs="12">
                  <div className="d-flex flex-column align-items-center gap-4">
                    <NioMedia size="lg" rounded="circle" variant="yellow-soft"  icon="users" />
                    <div>
                      <h4>Team Management</h4>
                      <p className="fs-7 mb-0 line-clamp-2">Our calendar lets you know what is happening with customer and projects so you</p>
                    </div>
                    <NioButton href="/features" className="btn-link" label="Learn More" icon="arrow-right after" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={{ order: 1 }} lg={{ span: 4, order: 0 }}>
              <div className="nl-feature-img nl-feature-mobile-img mb-5 mb-lg-0" >
                <img src="images/business-solution/section-cover-frame.png" alt="section-frame" />
              </div>
            </Col>
            <Col xs={{ order: 3 }} lg={{ span: 4, order: 0 }}>
              <div className="nl-feature-list row gap gy-5 gy-lg-7">
                <Col xs="12">
                  <div className="d-flex flex-column align-items-center gap-4">
                    <NioMedia size="lg" rounded="circle" variant="red-soft"  icon="edit-alt" />
                    <div>
                      <h4>Build your website</h4>
                      <p className="fs-7 mb-0 line-clamp-2">A tool that lets you build a dream website even if you know nothing about web design.</p>
                    </div>
                    <NioButton href="/features" className="btn-link" label="Learn More" icon="arrow-right after" />
                  </div>
                </Col>
                <Col xs="12">
                  <div className="d-flex flex-column align-items-center gap-4">
                    <NioMedia size="lg" rounded="circle" variant="purple-soft"  icon="view-col" />
                    <div>
                      <h4>Connect multiple apps</h4>
                      <p className="fs-7 mb-0 line-clamp-2">The first business platform to bring together all of your products from one place.</p>
                    </div>
                    <NioButton href="/features" className="btn-link" label="Learn More" icon="arrow-right after" />
                  </div>
                </Col>
                <Col xs="12">
                  <div className="d-flex flex-column align-items-center gap-4">
                    <NioMedia size="lg" rounded="circle" variant="cyan-soft"  icon="setting" />
                    <div>
                      <h4>Easy setup</h4>
                      <p className="fs-7 mb-0 line-clamp-2">End to End Business Platform, Sales Management, Marketing Automation, Help Desk</p>
                    </div>
                    <NioButton href="/features" className="btn-link" label="Learn More" icon="arrow-right after" />
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Banner Section End  */}

      {/*  Process Section Start  */}
      <NioSection className="bg-primary-soft">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">Our process</span>
          <h2 className="nl-section-title">How We Do It?</h2>
          <p> Uncover our winning formula as we combine innovation, expertise, and technology to deliver exceptional results. </p>
        </NioSection.Head>
        <NioSection.Content>
          <ul className="nl-timeline-group row gy-5 gy-lg-0 has-divider">
            <li className="nl-timeline-group-item col-xl-4" >
              <div className="nl-timeline-group-content text-center">
                <NioMedia rounded="circle" size="lg" variant="indigo-700-soft" className="mb-3 mb-md-6 mx-auto fw-semibold">
                  <span className="h4 text-primary">1</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 mb-4 fw-semibold text-uppercase">step 1</span>
                  <h3 className="mb-2">Concept</h3>
                  <p className="fs-6 line-clamp-3"> Ignite creativity with dynamic concept development, turning ideas into impactful reality. </p>
                </div>
              </div>
            </li>
            <li className="nl-timeline-group-item col-xl-4" >
              <div className="nl-timeline-group-content text-center">
                <NioMedia rounded="circle" size="lg" variant="indigo-700-soft" className="mb-3 mb-md-6 mx-auto fw-semibold">
                  <span className="h4 text-primary">2</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 mb-4 fw-semibold text-uppercase">step 2</span>
                  <h3 className="mb-2">Prepare</h3>
                  <p className="fs-6 line-clamp-3">Get ready and prepare for success with our comprehensive and tailored solutions.</p>
                </div>
              </div>
            </li>
            <li className="nl-timeline-group-item col-xl-4" >
              <div className="nl-timeline-group-content text-center">
                <NioMedia rounded="circle" size="lg" variant="indigo-700-soft" className="mb-3 mb-md-6 mx-auto fw-semibold">
                  <span className="h4 text-primary">3</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 mb-4 fw-semibold text-uppercase">step 3</span>
                  <h3 className="mb-2">Retouch</h3>
                  <p className="fs-6 line-clamp-3">Enhance visuals with expert retouching, elevating quality and aesthetics for captivating results.</p>
                </div>
              </div>
            </li>
            <li className="nl-timeline-group-item col-xl-4" >
              <div className="nl-timeline-group-content text-center">
                <NioMedia rounded="circle" size="lg" variant="indigo-700-soft" className="mb-3 mb-md-6 mx-auto fw-semibold">
                  <span className="h4 text-primary">4</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 mb-4 fw-semibold text-uppercase">step 4</span>
                  <h3 className="mb-2">Finalize</h3>
                  <p className="fs-6 line-clamp-3">Achieve perfection and finalize your project with our meticulous attention to detail and precise execution.</p>
                </div>
              </div>
            </li>
          </ul>
        </NioSection.Content>
      </NioSection>
      {/*  Process Section End  */}

      {/*  Community Section Start  */}
      <NioSection className="py-7 py-lg-220 overflow-hidden" masks={["shape-21"]}>
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="pb-5 pb-lg-7 text-center">
              <span className="nl-section-subtitle">JOIN OUR COMMUNITY</span>
              <h2 className="nl-section-title">We are trusted by over 5000+ clients. Join them now and grow your business.</h2>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col xs="6" lg="3" >
              <div className="text-center">
                <NioCount className="d-block h1 text-primary mb-3" end={235} decimals={3} decimal="." />
                <p className="fs-7">Projects completed</p>
              </div>
            </Col>
            <Col xs="6" lg="3" >
              <div className="text-center">
                <NioCount className="d-block h1 text-primary mb-3" end={3472} />
                <p className="fs-7">Happy Customers</p>
              </div>
            </Col>
            <Col xs="6" lg="3" >
              <div className="text-center">
                <NioCount className="d-block h1 text-primary mb-3" end={2184} />
                <p className="fs-7">Expert Employees</p>
              </div>
            </Col>
            <Col xs="6" lg="3" >
              <div className="text-center">
                <NioCount className="d-block h1 text-primary mb-3" end={4523} />
                <p className="fs-7">Awards Won</p>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Community Section End  */}

      {/*  FAQ Section Start  */}
      <NioSection className="nl-faq-section pt-0 pt-lg-7">
        <Row className="justify-content-between align-items-end pb-7">
          <Col lg="6">
            <div className="text-center text-lg-start">
              <span className="nl-section-subtitle">faqs</span>
              <h2 className="nl-section-title">Frequently Asked Questions</h2>
              <p className="mb-0"> NioLand is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
            </div>
          </Col>
          <Col lg="6" xl="5">
            <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-xl-end pt-5">
              <li>
                <NioButton href="/help-center" className="btn-indigo" label="Go To Support Center" />
              </li>
              <li>
                <NioButton href="/contact-us-solution" className="btn-outline-indigo" label="Contact Us" />
              </li>
            </ul>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-3 gy-lg-5">
            <Col md="6" xl="4" >
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="indigo-soft" icon="trend-up"/>
                  <div>                    
                    <h4>Is my credit card information kept secure from the back end?</h4>
                    <p className="fs-6 line-clamp-3"> Rest assured, your credit card information is kept secure with our advanced backend encryption and strict data protection measures. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="emails"/>
                  <div>
                    <h4>What payment methods do you accept?</h4>
                    <p className="fs-6 line-clamp-3"> We accept various payment methods, including major credit cards, debit cards, and online payment platforms like PayPal. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="yellow-soft" icon="users"/>
                  <div>
                    <h4>How long does it take to ship my order?</h4>
                    <p className="fs-6 line-clamp-3">The shipping time may vary depending on your location and the shipping method chosen. Please refer to our shipping policy for more details.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="indigo-soft" icon="grid"/>
                  <div>
                    <h4>Do you have any feature for downloading the bill receipt?</h4>
                    <p className="fs-6 line-clamp-3"> Download bill receipts easily from your account or contact our support team for assistance. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="info-soft" icon="setting"/>
                  <div>
                    <h4>How do I reset my account password ?</h4>
                    <p className="fs-6 line-clamp-3"> Reset your password and recover your wallet by clicking "Forgot Password" on the login page. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="red-soft" icon="edit-alt"/>
                  <div>
                    <h4>Are there any discounts for people in need</h4>
                    <p className="fs-6 line-clamp-3"> Download bill receipts easily from your account or contact our support team for assistance. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  FAQ Section End  */}

      {/*  Pricing Section Start  */}
      <NioSection className="nl-section-pricing">
        <PricingContent />
      </NioSection>
      {/*  Pricing Section End  */}

      {/*  CTA Section Start  */}
      <NioSection >
        <NioSection.Content className="position-relative overflow-hidden  bg-dark rounded-3 py-5 py-md-7" masks={["shape"]}>
          <Row className="justify-content-center">
            <Col lg="10" xl="7">
              <div className="d-flex flex-column align-items-center text-center gap-5 gap-lg-7">
                  <NioBrand logo="s2" variant="light" />
                  <h2 className="text-white mb-0">We are trusted by 5k+ clients. <span className="d-inline-block d-lg-block">Join Them To Grow Your Business.</span></h2>
                  <NioButton href="/auth/sign-up" className="btn-indigo" label="Join Our Community" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section Start  */}

      {/*  Newsletter Section Start  */}
      <NioSection className="pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom">
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