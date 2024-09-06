import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components  
import { NioSection, NioButton, NioMedia, NioCount, NioCard, NioSubscribeField, NioField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/BSManagement/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/BSManagement/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BSManagement/TestimonialContent/TestimonialContent';


function index() {
  return (
    <AppLayout title="Business Management" layoutClass="10">

      {/*  Banner Section Start   */}
      <section className="nl-section nl-banner nl-banner-bs-management bg-layout-primary-4 ">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" xxl="6">
                <div className="nl-banner-content text-center">
                  <span className="nl-section-subtitle mb-4">nioland solutions</span>
                  <h1 className="text-capitalize text-white mb-2"> We bring rapid solutions for your business needs </h1>
                  <p className="text-white opacity-75 mb-0">Rapid Business Solutions Speed up Growth, Enhance Efficiency, and Achieve Success with our Agile and Effective Tools. </p>
                  <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5 pt-lg-7">
                    <li>
                      <NioButton
                        href="#"
                        label="Request A Demo"
                        className="btn-primary text-nowrap" />
                    </li>
                    <li>
                      <NioButton href="/contact-us-solution" label="Contact Us" className="btn-white text-dark text-nowrap" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Banner Thumbnail Section Start   */}
      <NioSection className="nl-section-player">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col xs="12">
              <div className="nl-video" >
                <div className="nl-video-inner">
                  <div className="nl-video-content">
                    <div className="nl-video-img nl-frame text-center">
                      <img src="images/business-management/section-cover-2.jpg" alt="cover" className="position-relative rounded-3 overflow-hidden" />
                      <div className="nl-frame-children nl-frame-children-one animate animate-shakeY animate-duration-12">
                        <img src="images/business-management/section-cover-2-a.png" alt="frame-child" />
                      </div>
                      <div className="nl-frame-children nl-frame-children-two animate animate-shakeY animate-duration-12 animate-delay-1">
                        <img src="images/business-management/section-cover-2-b.png" alt="frame-child" />
                      </div>
                    </div>
                    <div className="nl-video-btn">
                      <NioMedia
                        size="xxl"
                        rounded="circle"
                        icon="play-fill"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="text-bg-info text-white shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="nl-video-counter bg-white shadow-xl rounded-4 p-5">
                  <Row>
                    <Col sm="6" lg="3" >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={235} />
                        <p className="m-0 fs-6">Projects completed</p>
                      </div>
                    </Col>
                    <Col sm="6" lg="3" >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={3472} />
                        <p className="m-0 fs-6">Happy Customers</p>
                      </div>
                    </Col>
                    <Col sm="6" lg="3" >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={50} prefix="+" />
                        <p className="m-0 fs-6">Hours Saved Annually</p>
                      </div>
                    </Col>
                    <Col sm="6" lg="3" >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={3500} />
                        <p className="m-0 fs-6">Unique Users</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Banner Thumbnail Section End   */}

      {/*  features Section Start   */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center justify-content-xl-between ">
            <Col lg="8" xl="4">
              <div className="nl-section-head text-center text-xl-start pb-7 pb-xxl-0">
                <span className="nl-section-subtitle mb-3">powerful features</span>
                <h2 className="nl-section-title mb-3">Discover Powerful Features</h2>
                <p className="fs-6 mb-0"> Harness the Power of Our Feature-rich Platform to Drive Growth and Success. </p>
                <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-xl-start pt-5">
                  <li>
                    <NioButton
                      href="/auth/sign-up"
                      label="Request A Demo"
                      className="btn-primary text-nowrap"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="/contact-us-solution"
                      label="Contact Us"
                      className="btn-primary-soft text-nowrap"
                    />
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl="7">
              <Row className="gy-5 gy-xl-7">
                <Col sm="6" lg="4" xl="6">
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="text-center text-xl-start p-0">
                      <NioMedia size="lg" rounded="circle" icon="trend-up" variant="info-soft" className="mx-auto mx-xl-0 mb-3" />
                      <div className="mb-4">
                        <h5>Custom analytics</h5>
                        <p className="fs-7 mb-0 line-clamp-2">Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one.</p>
                      </div>
                      <NioButton href="#" label="Learn More" icon="arrow-right after" className="btn-link"  />
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col sm="6" lg="4" xl="6">
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="text-center text-xl-start p-0">
                      <NioMedia size="lg" rounded="circle" icon="users" variant="warning-soft" className="mx-auto mx-xl-0 mb-3" />
                      <div className="mb-4">
                        <h5>Team Management</h5>
                        <p className="fs-7 mb-0 line-clamp-2"> Our calendar lets you know what is happening with customer and projects so you </p>
                      </div>
                      <NioButton href="#" label="Learn More" icon="arrow-right after" className="btn-link"  />
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col sm="6" lg="4" xl="6">
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="text-center text-xl-start p-0">
                      <NioMedia size="lg" rounded="circle" icon="edit-alt" variant="danger-soft" className="mx-auto mx-xl-0 mb-3" />
                      <div className="mb-4">
                        <h5>Build Your Website</h5>
                        <p className="fs-7 mb-0 line-clamp-2">A tool that lets you build a dream website even if you know nothing about web design.</p>
                      </div>
                      <NioButton href="#" label="Learn More" icon="arrow-right after" className="btn-link"  />
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col sm="6" lg="4" xl="6">
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="text-center text-xl-start p-0">
                      <NioMedia size="lg" rounded="circle" icon="emails" variant="primary-soft" className="mx-auto mx-xl-0 mb-3" />
                      <div className="mb-4">
                        <h5>Measure Your Performance</h5>
                        <p className="fs-7 mb-0 line-clamp-2"> Stay connected with your team and make quick decisions wherever you are. </p>
                      </div>
                      <NioButton href="#" label="Learn More" icon="arrow-right after" className="btn-link"  />
                    </NioCard.Body>
                  </NioCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  features Section End   */}

      {/*  Works Section Start   */}
      <NioSection className="bg-gray-400">
        <NioSection.Content>
          <Row className="align-items-center justify-content-lg-between">
            <Col lg="6" >
              <div className="nl-frame nl-frame-one text-center mb-7 mb-lg-0">
                <img src="images/business-management/section-cover-1.png" alt="mobile-frame" />
                <div className="nl-frame-children nl-frame-children-one  animate animate-shakeY animate-duration-12 ">
                  <img src="images/business-management/section-cover-1-b.png" alt="mobile-frame-child" />
                </div>
                <div className="nl-frame-children nl-frame-children-two animate animate-shakeY animate-duration-12 animate-delay-1">
                  <img src="images/business-management/section-cover-1-a.png" alt="mobile-frame-child" />
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="nl-section-head text-center text-lg-start">
                <span className="nl-section-subtitle mb-4">How it works?</span>
                <h2 className="nl-section-title text-capitalize">Download the app, <span className="d-lg-block">create your profile and start growing</span> </h2>
                <ul className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start pt-5">
                  <li>
                    <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                      <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                      <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
                    </Link>
                  </li>
                </ul>
              </div>
              <Row className="gy-5 gy-lg-0">
                <Col lg="4" sm="6">
                  <div className="text-center text-lg-start">
                    <NioMedia size="lg" rounded="circle" icon="download" variant="info" className="mx-auto mx-lg-0 mb-3" />
                    <h5>1. Download</h5>
                    <p className="fs-7 line-clamp-3"> Download our app and access a world of convenience and possibilities at your fingertips. </p>
                  </div>
                </Col>
                <Col lg="4" sm="6" >
                  <div className="text-center text-lg-start">
                    <NioMedia size="lg" rounded="circle" icon="user-check" variant="warning" className="mx-auto mx-lg-0 mb-3" />
                    <h5>2. Set Profile</h5>
                    <p className="fs-7 line-clamp-3"> Set up your profile and customize your preferences to enhance your experience. </p>
                  </div>
                </Col>
                <Col lg="4" sm="6" >
                  <div className="text-center text-lg-start">
                    <NioMedia size="lg" rounded="circle" icon="growth-fill" variant="indigo" className="mx-auto mx-lg-0 mb-3" />
                    <h5>3.Start Growing</h5>
                    <p className="fs-7 line-clamp-3"> Start growing your business with our innovative solutions and strategic guidance. </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Works Section End   */}

      {/*  Customer Testimonials Section Start   */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-3">Customer testimonials</span>
          <h2 className="nl-section-title">Stories From Our Customers</h2>
          <p className="mb-0">Hear inspiring stories from our satisfied customers who have achieved remarkable success with our solutions. </p>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-6">
            <li>
              <NioButton href="#" label="See All Reviews" className="btn-primary text-nowrap" />
            </li>
            <li>
              <NioButton href="#" label="Try Free Demo" className="btn-primary-soft text-nowrap" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Customer Testimonials Section End   */}

      {/*  Pricing Plans Section Start   */}
      <NioSection className="overflow-hidden">
        <PricingContent />
      </NioSection>
      {/*  Pricing Plans Section End   */}


      {/*  Faqs Section Start   */}
      <NioSection>
        <NioSection.Content>
          <Row className="justify-content-center justify-content-xl-between">
            <Col xl="4">
              <div className="nl-section-head text-center text-xl-start pb-5 pb-xl-0">
                <span className="nl-section-subtitle mb-3">FAQS</span>
                <h2 className="nl-section-title mb-3">Frequently Asked Questions</h2>
                <p className="mb-0"> Get quick answers to common queries about our service, pricing, security, and account management in our FAQ section. </p>
                <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-xl-start pt-5">
                  <li>
                    <NioButton href="/help-center" label="Go to support center" className="btn-primary text-nowrap" />
                  </li>
                  <li>
                    <NioButton href="/contact-us-solution" label="Contact Us" className="btn-primary-soft" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl="8">
              <FaqContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Faqs Section End   */}

      {/*  Cta Section Start   */}
      <NioSection className="pt-lg-120">
        <NioSection.Content>
          <NioCard className="border-0 bg-primary-soft">
            <NioCard.Body className="px-md-7 py-md-7 pt-xl-5 pb-xl-0">
            <Row className="align-items-xl-center justify-content-center justify-content-xl-between text-center text-xl-start">
              <Col lg="8" xl="6">
                  <h2 className="h1 mb-3">Get Discount Up To 50%</h2>
                  <p className="mb-0">Put your email address and get started</p>
                    <form onSubmit={e => e.preventDefault()} >
                      <Row className="form-group gx-3 justify-content-center justify-content-xl-start pt-5 pb-3 pb-lg-0">
                        <Col md="9">
                          <NioField.Input type="email" placeholder="Enter Your Email" childClass="p-3" />
                        </Col>
                        <Col md="3">
                          <NioButton type="submit" label="Get Voucher" className="btn-primary text-nowrap btn-block h-100 mt-3 mt-md-0" />
                        </Col>
                      </Row>
                    </form>
                  <ul className="d-flex gap-3 justify-content-center justify-content-xl-start pt-5 pt-lg-7">
                    <li>
                      <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                        <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                        <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
                      </Link>
                    </li>
                  </ul>
              </Col>
              <Col xl="5" className="d-none d-xl-block text-xl-end position-relative" >
                <div className="mt-xl-n9">
                  <img src="images/cta/d.png" alt="cta" />
                </div>
              </Col>
            </Row>
            </NioCard.Body>
          </NioCard>
        </NioSection.Content>
      </NioSection>
      {/*  Cta Section End   */}

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

    </AppLayout>
  )
}

export default index;