import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// component 
import { NioButton, NioIcon, NioMedia, NioCount, NioSection, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/BusinessDigital/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/BusinessDigital/PricingContent/PricingContent';
import FeaturesContent from '../../../components/PageComponents/Homepages/BusinessDigital/FeaturesContent/FeaturesContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BusinessDigital/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout title="Digital Business" layoutClass="8">

      {/*  Banner Section Start  */}
      <section className="nl-section nl-banner nl-banner-dg-business">
        <div className="nl-banner-wrap pb-0">
          <Container>
            <div className="nl-banner-content  px-5 px-md-7 px-lg-0  py-7 py-md-120 position-relative bg-gradient-16 rounded-3 overflow-hidden">
              <div className="nl-mask"></div>
              <Row className="align-items-center justify-content-center pb-xl-3">
                <Col lg="8" xxl="6">
                  <div className="text-center">
                    <div className="nl-section-head text-center">
                      <span className="nl-section-subtitle text-bg-primary mb-3">nioland solutions</span>
                      <h1 className="text-white text-capitalize mb-2">NioLand Focuses on Customer Satisfaction.</h1>
                      <p className="text-white opacity-75">
                        NioLand is the only saas business platform to run your business on one platform, seamlessly across all digital channels.
                      </p>
                    </div>
                    <div>
                      <NioSubscribeField icon="mail" btnText="Get Early Access"/>
                      <p className="fs-8 mt-4 text-white opacity-75" >
                        Start your free 14-day trial today, no credit card required.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Brands Section Start  */}
      <NioSection>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <h5 className="fw-normal text-center text-gray-700 mb-5">Over <span className="text-dark fw-semibold">32K+ software</span> business growing with NioLand</h5>
              <Row className="justify-content-center justify-content-lg-between text-center gap g-4">
                {
                  ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                    <Col key={idx} xs="4" sm="3" lg="2">
                      <div className="nl-brand" >
                        <Link to="#">
                          <img src={`images/brands/${brand}.png`} alt="feature" />
                        </Link>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Brands Section End  */}

      {/*  Feature Section Start  */}
      <NioSection className="nl-feature-section pb-7 pb-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Features</span>
          <h2 className="nl-section-title">Gain More Insight Into Features</h2>
          <p className="mb-0"> Explore our features and gain valuable insights into how they can revolutionize your business and drive success. </p>
        </NioSection.Head>
        <NioSection.Content>
          <FeaturesContent />
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section Start  */}

      {/*  Process Section Start  */}
      <NioSection className="overflow-hidden bg-gray-400">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">our process</span>
          <h2 className="nl-section-title">Let’s See How it Works</h2>
          <p className="fs-5 mb-0"> Experience the power of our platform firsthand and see how it works to transform your business operations and drive growth. </p>
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
      {/*  Process Section End  */}

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

      {/*  Testimonial Section Start  */}
      <NioSection className="nl-testimonial-section pb-7 pb-lg-120">
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End  */}

      {/*  Pricing Section Start  */}
      <NioSection className="nl-pricing-section bg-gray-400">
        <PricingContent />
      </NioSection>
      {/*  Pricing Section End  */}

      {/*  FAQ Section Start  */}
      <NioSection className="nl-faq-section py-7 py-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">faqs</span>
          <h2 className="nl-section-title">Frequently Asked Questions</h2>
          <p className="mb-0"> Find answers to commonly asked questions about our products, services, and policies in our comprehensive FAQ section. </p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="#" className="btn-primary" icon="arrow-right after" label="Read All Faqs" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <FaqContent />
        </NioSection.Content>
      </NioSection>
      {/*  FAQ Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content className="nl-section-content px-5 px-xl-0 py-7 position-relative bg-dark  rounded-2" masks={["shape-31", "shape-32"]}>
          <Row className="position-relative gy-5 gy-lg-7 flex-column align-items-center justify-content-center">
            <Col xl="5">
              <div className="text-center">
                <span className="nl-section-subtitle text-bg-primary mb-2">newsletter</span>
                <h2 className="text-white">Subscribe Newsletter</h2>
                <p className="text-white fs-7 opacity-75">
                  Subscribe to our newsletter for exclusive updates, latest trends, and special offers. Delivered to your inbox within seconds. Join now!
                </p>
              </div>
            </Col>
            <Col lg="6" >
            <NioSubscribeField icon="mail" btnText="Subscribe"/>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/*  CTA Section End  */}

    </AppLayout >
  )
}

export default index;