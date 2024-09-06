import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioCount, NioIcon, NioMedia, NioSection, NioCard, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/BSSubscription/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/BSSubscription/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BSSubscription/TestimonialContent/TestimonialContent';

function index() {
  return (
    <AppLayout title="Subscriptions" layoutClass="11">

      {/*  Banner Section Start   */}
      <section className="nl-section nl-banner nl-banner-bs-subscription">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="align-items-center justify-content-lg-between position-relative">
              <Col lg="6" >
                <div className="nl-section-head text-center text-lg-start pb-5 pb-sm-7 pb-lg-0">
                  <span className="nl-section-subtitle mb-2">Nioland solutions</span>
                  <h1 className="display-3 text-white mb-lg-2">Grow Your <br className="d-none d-lg-block" /> Business With <span className="d-lg-block"> Our Subscriptions.</span></h1>
                  <p className="text-white opacity-75 mb-0">
                    NioLand is the only saas business platform to run your business on one platform, seamlessly across all digital channels.
                  </p>
                  <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-lg-start pt-5 pt-lg-6">
                    <li>
                      <NioButton href="#" label="Request A Demo" className="btn btn-danger text-nowrap" />
                    </li>
                    <li>
                      <NioButton href="/auth/sign-up" label="Sign Up" className="btn btn-white text-dark text-nowrap" />
                    </li>
                  </ul>
                  <Row className="justify-content-center justify-content-lg-start pt-5 pt-lg-7">
                    <Col md="10" lg="10">
                      <div>
                        <h4 className="text-white mb-4">Trusted by</h4>
                        <Row className="justify-content-center justify-content-lg-start gy-2 gy-md-0">
                          <Col xs="4" sm="3" >
                            <Link to="#" className="nl-brand">
                              <img src="images/brands/a-light.png" alt="brand" className="opacity-75" />
                            </Link>
                          </Col>
                          <Col xs="4" sm="3" >
                            <Link to="#" className="nl-brand">
                              <img src="images/brands/b-light.png" alt="brand" className="opacity-75" />
                            </Link>
                          </Col>
                          <Col xs="4" sm="3" >
                            <Link to="#" className="nl-brand">
                              <img src="images/brands/c-light.png" alt="brand" className="opacity-75" />
                            </Link>
                          </Col>
                          <Col xs="4" sm="3" >
                            <Link to="#" className="nl-brand">
                              <img src="images/brands/d-light.png" alt="brand" className="opacity-75" />
                            </Link>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg="5">
                <div className="nl-banner-cover nl-frame nl-frame-three">
                  <img src="images/business-subscription/banner-cover-1.jpg" alt="banner-cover" className="rounded-5 overflow-hidden" />
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/business-subscription/mask-circle-1.png" alt="mask-circle" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-two">
                    <img src="images/business-subscription/mask-dot-1.png" className="animate animate-shakeY animate-duration-12" alt="mask-circle" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/* features Section Start */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">powerfull features</span>
          <h2 className="nl-section-title">Discover Powerful Features</h2>
          <p className="mb-0">Unlock a range of powerful features designed to enhance your experience and maximize productivity. Explore now! </p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="#" label="More Details" className="btn-primary text-nowrap" />
            </li>
            <li>
              <NioButton href="#" label="Contact Us" className="btn-outline-primary text-nowrap" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-7">
            <Col md="6" lg="4">
              <NioCard className="text-center bg-transparent border-0" >
                <NioCard.Body className="p-0">
                  <NioMedia size="lg" rounded="circle" icon="trend-up" variant="blue-soft" className="mx-auto mb-4" />
                  <div className="mb-4">
                    <h4 className="text-capitalize">Custom analytics</h4>
                    <p className="fs-7 line-clamp-2">Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one.</p>
                  </div>
                  <Link to="#" className="btn-link ">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="text-center bg-transparent border-0" >
                <NioCard.Body className="p-0">
                  <NioMedia size="lg" rounded="circle" icon="emails" variant="green-soft" className="mx-auto mb-4" />
                  <div className="mb-4">
                    <h4 className="text-capitalize">Measure your performance</h4>
                    <p className="fs-7 line-clamp-2"> Stay connected with your team and make quick decisions wherever you are. </p>
                  </div>
                  <Link to="#" className="btn-link ">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="text-center bg-transparent border-0" >
                <NioCard.Body className="p-0">
                  <NioMedia size="lg" rounded="circle" icon="users" variant="yellow-soft" className="mx-auto mb-4" />
                  <div className="mb-4">
                    <h4 className="text-capitalize">Team Management</h4>
                    <p className="fs-7 line-clamp-2"> Our calendar lets you know what is happening with customer and projects so you. </p>
                  </div>
                  <Link to="#" className="btn-link ">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="text-center bg-transparent border-0" >
                <NioCard.Body className="p-0">
                  <NioMedia size="lg" rounded="circle" icon="edit-alt" variant="red-soft" className="mx-auto mb-4" />
                  <div className="mb-4">
                    <h4 className="text-capitalize">Build your website</h4>
                    <p className="fs-7 line-clamp-2">A tool that lets you build a dream website even if you know nothing about web design.</p>
                  </div>
                  <Link to="#" className="btn-link ">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="text-center bg-transparent border-0" >
                <NioCard.Body className="p-0">
                  <NioMedia size="lg" rounded="circle" icon="grid" variant="purple-soft" className="mx-auto mb-4" />
                  <div className="mb-4">
                    <h4 className="text-capitalize">Connect multiple apps</h4>
                    <p className="fs-7 line-clamp-2"> The first business platform to bring together all of your products from one place. </p>
                  </div>
                  <Link to="#" className="btn-link ">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4">
              <NioCard className="text-center bg-transparent border-0" >
                <NioCard.Body className="p-0">
                  <NioMedia size="lg" rounded="circle" icon="setting-alt" variant="cyan-soft" className="mx-auto mb-4" />
                  <h4 className="text-capitalize">Easy Setups</h4>
                  <p className="fs-7 line-clamp-2">End to End Business Platform, Sales Management, Marketing Automation, Help Desk</p>
                  <Link to="#" className="btn-link ">
                    <span>Learn More</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* features Section End */}

      {/* Process Section Start */}
      <NioSection className="overflow-hidden bg-gray-400">
        <NioSection.Head alignX="center" className="pb-7">
          <span className="nl-section-subtitle mb-2">our process</span>
          <h2 className="nl-section-title">Let’s See How it Works</h2>
          <p className="mb-0"> Experience the power of our platform firsthand and see how it works to transform your business operations and drive growth. </p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="#" className="btn-primary" label="More Details" />
            </li>
            <li>
              <NioButton href="/contact-us" className="btn-outline-primary" label="Contact Us" />
            </li>
          </ul>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="flex-row-reverse align-items-center justify-content-lg-between">
            <Col lg="5">
              <div className="nl-video nl-video-s1 mb-5 mb-md-7 mb-lg-0">
                <div className="nl-mask shape-28 d-none d-md-block"></div>
                <div className="nl-video-inner" >
                  <div className="nl-video-content">
                    <div className="nl-video-img">
                      <img src="images/business-digital/section-cover-1.jpg" alt="" className="rounded-2 w-100" />
                    </div>
                    <div className="nl-video-btn">
                      <NioMedia
                        size="xl"
                        rounded="circle"
                        icon="play-fill"
                        variant="primary"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6" xl="5">
              <ul className="nl-schedule nl-schedule-s2">
                <li className="nl-schedule-item">
                  <div className="nl-schedule-item-inner">
                    <div className="nl-schedule-symbol z-1">
                      <NioMedia size="md" rounded="circle" variant="primary-soft" icon="check" />
                    </div>
                    <div className="nl-schedule-content">
                      <span className="d-inline-block fs-8 mb-2 text-uppercase fw-semibold">step 1</span>
                      <div>
                        <h3>Create Account</h3>
                        <p className="fs-7 ">Sign up and create your account in just a few easy steps. Start exploring and unleashing possibilities today.</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nl-schedule-item">
                  <div className="nl-schedule-item-inner">
                    <div className="nl-schedule-symbol z-1">
                      <NioMedia size="md" rounded="circle" variant="primary-soft" icon="check" />
                    </div>
                    <div className="nl-schedule-content">
                      <span className="d-inline-block fs-8 mb-2 text-uppercase fw-semibold">step 2</span>
                      <div>
                        <h3>Collect Ideas</h3>
                        <p className="fs-7 "> Harness the collective creativity of your team and collect brilliant ideas to drive innovation and growth. </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nl-schedule-item">
                  <div className="nl-schedule-item-inner">
                    <div className="nl-schedule-symbol z-1">
                      <NioMedia size="md" rounded="circle" variant="primary-soft" icon="check" />
                    </div>
                    <div className="nl-schedule-content">
                      <span className="d-inline-block fs-8 mb-2 text-uppercase fw-semibold">step 3</span>
                      <div>
                        <h3>Data Analysis</h3>
                        <p className="fs-7 ">Unlock the power of data analysis to gain valuable insights and make informed decisions for your business.</p>
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

      {/*  Fun-Fact Section Start  */}
      <NioSection className="pt-7 pt-lg-120 pb-lg-0">
        <Row className="align-items-center justify-content-between gx-0 gy-7 pb-7 border-bottom text-center text-lg-start">
          <Col lg="4">
              <span className="nl-section-subtitle mb-2">our facts</span>
              <h2 className="nl-section-title">We Are Proud Of Our works</h2>
          </Col>
          <Col lg="8">
            <Row className="gy-5 justify-content-center">
              <Col sm="6" md="4">
                <div className="nl-funfact-item text-center">
                  <NioIcon  name="users-fill" className="fs-1 mb-3 text-primary" />
                  <NioCount className="h2 mb-1 d-block" end={3472} />
                  <p className="fs-6 mb-0">Happy Customers</p>
                </div>
              </Col>
              <Col sm="6" md="4">
                <div className="nl-funfact-item text-center">
                    <NioIcon  name="grid-fill-c" className="fs-1 mb-3 text-info" />
                  <NioCount className="h2 mb-1 d-block" end={235} decimal="." decimals={3} />
                  <p className="fs-6 mb-0">Average Rating</p>
                </div>
              </Col>
              <Col sm="6" md="4">
                <div className="nl-funfact-item text-center">
                  <NioIcon  name="user-check-fill" className="fs-1 mb-3 text-danger" />
                  <NioCount className="h2 mb-1 d-block" end={2184} />
                  <p className="fs-6 mb-0">Active Users</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </NioSection>
      {/*  Fun-Fact Section End  */}

      {/* Customer Testimonials Section Start */}
      <NioSection>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/* Customer Testimonials Section End */}

      {/* Faqs Section Start */}
      <NioSection className="pb-7 pb-lg-120">
        <Row className="justify-content-between">
          <Col xl="4">
            <div className="nl-section-head pb-5 pb-xl-0">
              <span className="nl-section-subtitle mb-2">FAQS</span>
              <h2 className="nl-section-title">Frequently Asked Questions</h2>
              <p className="mb-0"> Get quick answers to common queries about our service, pricing, security, and account management in our FAQ section. </p>
              <ul className="d-flex gap-3 flex-wrap align-items-center pt-5">
                <li>
                  <NioButton href="/help-center" label="Go to support center" className="btn-primary text-nowrap" />
                </li>
                <li>
                  <NioButton href="/contact-us" label="Contact Us" className="btn-primary-soft" />
                </li>
              </ul>
            </div>
          </Col>
          <Col xl="8" >
            <FaqContent />
          </Col>
        </Row>
      </NioSection>
      {/* Faqs Section End */}

      {/* Pricing Plans Section Start */}
      <NioSection className="nl-section-pricing bg-gray-100">
        <PricingContent />
      </NioSection>
      {/* Pricing Plans Section End */}

      {/* Cta Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Content >

          <NioCard className="card-mask card-mask-one bg-blue-600 rounded-3">
            <NioCard.Body className="p-lg-7">
              <Row className="justify-content-center">
                <Col lg="8">
                  <div className="nl-section-head pb-5 text-center">
                    <h2 className="text-white">Get Voucher Discount Up To 50%</h2>
                    <p className="text-white opacity-75">Put your email address and get started</p>
                  </div>
                </Col>
                <Col lg="8" xl="6">
                  <NioSubscribeField
                    icon="mail"
                    btnText="Get Voucher"
                  />
                  <ul className="d-flex flex-wrap justify-content-center gap g-3 mt-5 mt-lg-7">
                    <li className="m-0">
                      <Link className="d-inline-flex rounded-2 overflow-hidden h-60" to="#">
                        <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
                      </Link>
                    </li>
                    <li className="m-0">
                      <Link className="d-inline-flex rounded-2 overflow-hidden h-60" to="#">
                        <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </NioCard.Body>
          </NioCard>
        </NioSection.Content>
      </NioSection>
      {/* Cta Section End */}

    </AppLayout >
  )
}

export default index;