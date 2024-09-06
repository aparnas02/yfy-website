import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioSection, NioMedia, NioIcon, NioButton, NioCount, NioSubscribeField, NioField, NioCard } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/BusinessTracker/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/BusinessTracker/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BusinessTracker/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout title="Business Tracker" layoutClass="4">

      {/*   Banner Section Start  */}
      <section className="nl-banner nl-banner-business-expance-tracker bg-primary-gradient-soft">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="flex-row-reverse align-items-center justify-content-between">
              <Col lg="6">
                <div className="nl-banner-img mb-5  mb-lg-0" >
                  <img src="images/business-tracker/banner-cover.png" alt="banner-cover" />
                </div>
              </Col>
              <Col lg="6">
                <div className="nl-banner-content text-center text-lg-start">
                  <h1 className="display-3 mb-2">NioLand Brings Solutions to Captures Ideas.</h1>
                  <p className="fs-5 mb-0" >Easily achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.</p>
                  <ul className="d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start align-items-center pt-5 pt-lg-6">
                    <li>
                      <NioButton href="#" className="btn-primary" label="Try Free Demo" />
                    </li>
                    <li>
                      <NioButton href="#" className="btn-outline-primary" label="Explore Now" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Brands Section Start   */}
      <NioSection className="pt-0">
        <NioSection.Content className="text-center">
          <span className="h4 d-inline-block fw-normal text-gray-700 mb-3 mb-lg-5">Over <span className="text-dark fw-semibold">32K+ software</span> Business Growing With NioLand.</span>
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <Row className="gy-3 align-items-center justify-content-center justify-content-lg-between">
                {
                  ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                    <Col xs="4" sm="2" key={idx} >
                      <div className="nl-brand">
                        <Link to="#">
                          <img src={`images/brands/${brand}.png`} alt="brand-logo" />
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
      {/*  Brands Section End   */}

      {/*  Feature Section Start   */}
      <NioSection className="nl-feature-section pb-7 pb-lg-120">
      <Row className="justify-content-center">
          <Col lg="10" xl="9"  xxl="8">
            <div className="nl-section-head text-center">
            <span className="nl-section-subtitle mb-2">powerful features</span>
            <h2 className="nl-section-title">Discover Powerful Features</h2>
            <p className="mb-0"> Unleash the power of our platform's features for streamlined processes, enhanced productivity, and goal achievement. </p>
            <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
              <li>
                <NioButton href="/features" className="btn-primary" label="More Details" />
              </li>
              <li>
                <NioButton href="/contact-us" className="btn-outline-primary" label="Contact Us" />
              </li>
            </ul>
            </div>                                    
          </Col>
      </Row>
        <NioSection.Content>
          <Row className="gap g-5">
            <Col sm="6" lg="4" >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1.png" alt="cover" />
                </div>
                <div className="mb-3">
                  <h4 className="text-capitalize">Custom analytics</h4>
                  <p className="fs-7 line-clamp-2 fw-medium">Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.</p>
                </div>
                <NioButton href="/features" className="btn-link" label="learn More" icon="arrow-right after" />
              </div>
            </Col>
            <Col sm="6" lg="4" >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1-a.png" alt="cover" />
                </div>
                <div className="mb-3">
                  <h4 className="text-capitalize">Team Management</h4>
                  <p className="fs-7 line-clamp-2 fw-medium">Our calendar lets you know what is happening with customer and projects so you</p>
                </div>
                <NioButton href="/features" className="btn-link" label="Learn More" icon="arrow-right after" />
              </div>
            </Col>
            <Col sm="6" lg="4" >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1-b.png" alt="cover" />
                </div>
                <div className="mb-3">
                  <h4 className="text-capitalize">Measure performance</h4>
                  <p className="fs-7 line-clamp-2 fw-medium">Stay connected with your team and make quick decisions wherever you are.</p>
                </div>
                <NioButton href="/features" className="btn-link" label="Learn More" icon="arrow-right after" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section End   */}

      {/*  Testimonial Section Start   */}
      <NioSection className="bg-primary-soft">
        <Row className="justify-content-center">
          <Col xl="7">
            <div className="nl-section-head pb-7 text-center">
              <span className="nl-section-subtitle mb-2">Customer testimonials</span>
              <h2 className="nl-section-title">Stories From Our Customers</h2>
              <p className="mb-0">
                Discover inspiring tales from our satisfied customers, showcasing their experiences and the positive impact our products have made in their lives.
              </p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton href="/customer-testimonials" className="btn-primary" label="See All Reviews" />
                </li>
                <li>
                  <NioButton href="#" className="btn-outline-primary" label="Try Free Demo" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End   */}

      {/*  Process Section Start   */}
      <NioSection className="nl-process-section py-7 py-lg-120">
        <Row className="justify-content-center">
          <Col lg="8" xl="9" xxl="8">
            <div className="nl-section-head pb-7 pb-lg-120 text-center">
              <span className="nl-section-subtitle mb-2">our process</span>
              <h2 className="nl-section-title">How To Grow Your Business</h2>
              <p className="mb-0">Unlock the secrets to business growth with our proven strategies and expert guidance. Take your business to the next level today.</p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton href="#" className="btn-primary" label="More Details" />
                </li>
                <li>
                  <NioButton href="/contact-us" className="btn-outline-primary" label="Contact Us" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <ul className="nl-schedule d-flex flex-column gap-5 gap-md-7 gap-lg-120 nl-schedule-s1">
            <li className="nl-schedule-item p-0">
              <div className="nl-schedule-item-inner">
                <div className="nl-schedule-symbol">
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" className="fw-bold">
                    1
                  </NioMedia>
                </div>
                <div className="nl-schedule-content">
                  <Row className="flex-row-reverse justify-content-between">
                    <Col lg="7" >
                      <div className="nl-feature-overview-img text-lg-end mb-n2 mb-lg-n0 mt-lg-n9">
                        <img src="images/business-tracker/section-cover-2-a.png" alt="cover-bg" />
                        <img src="images/business-tracker/section-cover-2.png" alt="cover-fd" className="children children-center" />
                      </div>
                    </Col>
                    <Col lg="5" >
                      <div className="nl-section-head">
                        <h3 className="text-capitalize mb-3">We will gather your empty listed <span className="text-primary">Product.</span></h3>
                        <p className="mb-0"> Our team will collect and manage your inventory of empty listed products, ensuring a streamlined and efficient process for your business. </p>
                        <ul className="d-flex gap-3 flex-wrap align-items-center pt-5">
                          <li>
                            <NioButton href="#" className="btn-outline-primary" icon="arrow-right after" label="Learn More" />
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            <li className="nl-schedule-item p-0">
              <div className="nl-schedule-item-inner">
                <div className="nl-schedule-symbol">
                  <NioMedia size="lg" rounded="circle" variant="yellow-soft" className="fw-bold">
                    2
                  </NioMedia>
                </div>
                <div className="nl-schedule-content">
                  <Row className="flex-row-reverse justify-content-between">
                    <Col lg="7" >
                      <div className="nl-feature-overview-img text-lg-end mb-4 mb-sm-0 mb-sm-n3 mb-lg-n0 mt-lg-n9">
                        <img src="images/business-tracker/section-cover-3-a.png" alt="cover-bg" />
                        <img src="images/business-tracker/section-cover-3.png" alt="cover-fd" className="children children-center" />
                      </div>
                    </Col>
                    <Col lg="5" >
                      <div className="nl-section-head">
                        <h3 className="text-capitalize mb-3">We will try to make a new Business <span className="text-warning">Model.</span></h3>
                        <p className="mb-0"> Our experts will work with you to develop and implement a new business model, tailored to your specific needs and goals, to help drive growth and success. </p>
                        <ul className="d-flex gap-3 flex-wrap align-items-center pt-5">
                          <li>
                            <NioButton href="#" className="btn-outline-warning" icon="arrow-right after" label="Learn More" />
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            <li className="nl-schedule-item p-0">
              <div className="nl-schedule-item-inner p-0">
                <div className="nl-schedule-symbol">
                  <NioMedia size="lg" rounded="circle" variant="red-soft" className="fw-bold">
                    3
                  </NioMedia>
                </div>
                <div className="nl-schedule-content">
                  <Row className="flex-row-reverse justify-content-between">
                    <Col lg="7" >
                      <div className="nl-feature-overview-img text-lg-end mb-4 mb-sm-0 mb-sm-n3 mb-lg-n0 mt-lg-n9">
                        <img src="images/business-tracker/section-cover-4-a.png" alt="cover-bg" />
                        <img src="images/business-tracker/section-cover-4.png" alt="cover-fd" className="children children-center" />
                      </div>
                    </Col>
                    <Col lg="5" >
                      <div className="nl-section-head">
                        <h3 className="text-capitalize mb-3">We will help you about <span className="text-danger">Marketing</span> and SEO.</h3>
                        <p className="mb-0"> Our team of marketing and SEO experts will provide guidance and support to help you optimize your online presence, increase visibility, and attract more customers to your business. </p>
                        <ul className="d-flex gap-3 flex-wrap align-items-center pt-5">
                          <li>
                            <NioButton href="#" className="btn-outline-danger" label="Learn More" icon="arrow-right after" />
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
          </ul>
        </NioSection.Content>
      </NioSection>
      {/*  Process Section End   */}

      {/*  Funfact Section Start   */}
      <NioSection className="bg-gray-400">
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle text-indigo-600 mb-2">our facts</span>
              <h2 className="nl-section-title">We Believe In The Power Of Data</h2>
              <p className="mb-0">At our company, we harness the power of data to drive insights and make informed decisions that propel your business forward.</p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton href="#" className="btn-indigo-600" label="More Details" />
                </li>
                <li>
                  <NioButton href="/contact-us" className="btn-outline-indigo-600" label="Contact Us" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="flex-row-reverse align-items-center justify-content-center justify-content-xl-between">
            <Col xl="7" >
              <div className="nl-funfact-img text-center text-xl-end mb-6 mb-xl-0">
                <img src="images/business-tracker/section-cover-5.png" alt="cover" />
              </div>
            </Col>
            <Col xl="5">
              <Row className="gx-sm-5 gy-5">
                <Col sm="6">
                  <div className="text-center">
                    <NioCount className="d-inline-block h2 text-indigo-600" end={235} decimals={3} decimal="." />
                    <div>
                      <h5>Projects completed</h5>
                      <p className="fs-8">No need to hire specialists for each channel.</p>
                    </div>
                  </div>
                </Col>
                <Col sm="6">
                  <div className="text-center">
                    <NioCount className="d-inline-block h2 text-indigo-600" end={10} prefix="$" suffix="m" />
                    <div>
                      <h5>APR</h5>
                      <p className="fs-8"> Track how much money a company just in case</p>
                    </div>
                  </div>
                </Col>
                <Col sm="6">
                  <div className="text-center">
                    <NioCount className="d-inline-block h2 text-indigo-600" decimals={3} decimal="." end={50} prefix="+" />
                    <div>
                      <h5>Hours Saved</h5>
                      <p className="fs-8">Manage many companies, even with different languages.</p>
                    </div>
                  </div>
                </Col>
                <Col sm="6">
                  <div className="text-center">
                    <NioCount className="d-inline-block h2 text-indigo-600" end={3} suffix=".500" />
                    <div>
                      <h5>Unique Users</h5>
                      <p className="fs-8"> Everyone works the way they want to, on their own schedule.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Funfact Section End   */}

      {/*  Faq Section Start   */}
      <NioSection className="pt-7 pt-lg-120">
        <Row className="justify-content-center">
          <Col xl="7">
            <div className="nl-section-head pb-7 text-center">
              <span className="nl-section-subtitle mb-2">faqs</span>
              <div>
                <h2 className="nl-section-title">Frequently Asked Questions</h2>
                <p className="mb-0">
                  Find answers to commonly asked questions about our product or service in our comprehensive FAQ section.
                </p>
              </div>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton href="#" className="btn-primary" icon="arrow-right after" label="Read All Faqs" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col lg="8">
              <FaqContent />
            </Col>
            <Col lg="4" >
              <NioCard className="bg-gray">
                <NioCard.Body>
                  <div className="mb-5">
                    <NioMedia
                      size="xl"
                      border
                      rounded="circle"
                      icon="chat-fill"
                      variant="primary"
                      className="mb-5"
                    />
                    <h5 className="m-0 mb-2">Do you need any help? Get in touch with our support team.</h5>
                    <p className="fs-7 mb-0">Lorem ipsum dolor sit amet, consectet adipiscing elit. Consequat aliquet soll ac.</p>
                  </div>
                  <Link to="#" className="btn-link fs-7 text-primary text-lowercase">
                    <span>support@nioland.com</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Faq Section End   */}

      {/*  Pricing Plans Section Start   */}
      <NioSection className="nl-section-pricing overflow-hidden pt-7 pb-7 pb-xl-120">
        <PricingContent />
      </NioSection>
      {/*  Pricing Plans Section End   */}

      {/*  CTA Section Start   */}
      <NioSection className="pt-xl-120">
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
      {/*  CTA Section End   */}

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