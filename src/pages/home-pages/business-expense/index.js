import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// component 
import { NioButton, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section component
import PricingContent from '../../../components/PageComponents/Homepages/BusinessExpense/PricingContent/PricingContent';
import ProductiveContent from '../../../components/PageComponents/Homepages/BusinessExpense/ProductiveContent/ProductiveContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BusinessExpense/TestimonialContent/TestimonialContent';

function index() {
  return (
    <AppLayout title="Business Expenses" layoutClass="7">

      {/*   Banner Section Start  */}
      <section className="nl-banner nl-banner-saas bg-dark">
        <div className="nl-banner-wrap pb-0">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xxl="7">
                <div className="nl-banner-content text-center">
                  <div>
                    <h1 className="text-capitalize text-white display-3 mb-2" >All your business expenses in one place.</h1>
                    <p className="text-white opacity-75 mb-0">
                      Simplify your business finances with our comprehensive platform. Effortlessly centralize and track all expenses, ensuring accuracy and efficiency, empowering your organization for streamlined financial management.
                    </p>
                  </div>
                  <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                    <li>
                      <NioButton href="/contact-us-solution" className="btn-primary" label="Get A Free Demo" />
                    </li>
                    <li>
                      <NioButton href="/pricing-solution" className="btn-outline-white" label="See Pricing" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <div className="nl-banner-img pt-7" >
              <img src="images/business-saas/banner-cover.png" alt="thumbnail" />
            </div>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Feature Section Start   */}
      <NioSection className="py-7 pb-lg-120">
        <div className="nl-section-head pb-7">
          <Row className="align-items-end">
            <Col xl="6">
                <span className="nl-section-subtitle mb-2">why use spend.in</span>
                <h2 className="nl-section-title mb-xl-0">Easy, Simple,Affordable</h2>
            </Col>
            <Col xl="6">
              <p className="mb-0 text-start"> Easy. Simple. Affordable. Get started today and enjoy seamless solutions for your needs. </p>
            </Col>
          </Row>
        </div>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col md="6" lg="4" >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-6.png" alt="cover-img" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Automatic Invoice Payment</h4>
                  <p className="fs-7">We provide automatic invoice payment service. Set a payment schedule and you're done, it's that easy!</p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4" >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-1.png" alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Clear payment history</h4>
                  <p className="fs-7">Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!</p>
                </div>
              </div>
            </Col>
            <Col md="6" lg="4" >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-2.png" alt="card-cover" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Use of multi-card payments</h4>
                  <p className="fs-7">Our platform is already integrated with many banks around the world, for easier payments!</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section End   */}

      {/*  Works Section End   */}
      <NioSection className="bg-primary-soft overflow-hidden" masks={["shape-10"]}>
        <NioSection.Content>
          <Row className="align-items-center justify-content-between gx-7">
            <Col lg="6" >
              <div className="position-relative bg-dark overflow-hidden rounded-4 mb-7 mb-lg-0">
                <img src="images/blog/card-cover-7.png" alt="cover-fd" className="ms-1" />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="nl-section-head">
                  <span className="nl-section-subtitle mb-2">how it works</span>
                  <h2 className="nl-section-title">Few Easy Steps and Done</h2>
                  <p className="mb-0">Achieve your goals in a few easy steps with our streamlined process. Get things done effortlessly and efficiently. </p>
                </div>
                <ul className="d-flex flex-column gap-5 nl-schedule nl-schedule-s4 nl-schedule-center">
                  <li className="nl-schedule-item p-0" >
                    <div className="nl-schedule-item-inner p-0">
                      <div className="nl-schedule-symbol">
                        <NioMedia size="sm" rounded="circle" variant="primary text-white"> 1 </NioMedia>
                      </div>
                      <div className="nl-schedule-content">
                        <div className="h5 fw-normal">Register your Spe4nd.In account.</div>
                      </div>
                    </div>
                  </li>
                  <li className="nl-schedule-item p-0" >
                    <div className="nl-schedule-item-inner p-0">
                      <div className="nl-schedule-symbol">
                        <NioMedia size="sm" rounded="circle" variant="primary text-white"> 2 </NioMedia>
                      </div>
                      <div className="nl-schedule-content">
                        <div className="h5 fw-normal">Fill in the list of your business expenses.</div>
                      </div>
                    </div>
                  </li>
                  <li className="nl-schedule-item p-0" >
                    <div className="nl-schedule-item-inner p-0">
                      <div className="nl-schedule-symbol">
                        <NioMedia size="sm" rounded="circle" variant="dark"> 3 </NioMedia>
                      </div>
                      <div className="nl-schedule-content">
                        <div className="h5 fw-normal">Done, let’s continue the work.</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Works Section End   */}

      {/*  Productivity Section Start   */}
      <NioSection className="py-7 py-lg-120">
        <ProductiveContent />
      </NioSection>
      {/*  Productivity Section End   */}

      {/*  Testimonials Section Start   */}
      <NioSection className="bg-primary-soft overflow-hidden" masks={["shape-11"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">what they say</span>
          <h2 className="nl-section-title">Our User Kind Words</h2>
          <p className="mb-0">Hear the kind words from our satisfied users who have experienced our exceptional service firsthand. Join them today!</p>
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Testimonials Section End  */}

      {/*  Integration Section Start   */}
      <NioSection className="pt-7 pt-lg-120 pb-5 pb-lg-7">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Integrations</span>
          <h2 className="nl-section-title">Over 100+ Integrations</h2>
          <p className="mb-0"> Unlock limitless possibilities with our platform's extensive library of over 100+ integrations, empowering seamless connectivity across your favorite tools and services. </p>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="nl-integrate-tools position-relative overlay-1 overlay-bottom" >
                <img src="images/business-saas/b.png" alt="" />
              </div>
              <div className="text-center pt-6">
                <NioButton href="#" className="btn-primary" label="Get A Free Demo" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Integration Section End   */}

      {/*  Pricing Section Start   */}
      <NioSection masks={["shape-12"]}>
        <PricingContent />
      </NioSection>
      {/*  Pricing Section End   */}

      {/*  CTA Section Start   */}
      <NioSection>
        <NioSection.Content className="overflow-hidden bg-dark rounded-4 " >
          <Row className="align-items-end justify-content-xl-between">
            <Col xl="6">
              <div className="nl-section-head text-center text-xl-start p-5 p-md-7 pt-7">
                <div className="pb-5 pb-xl-7">
                  <span className="nl-section-subtitle mb-2">Download now!</span>
                  <h2 className="display-5 text-white">Start Track Your Business Expenses</h2>
                  <p className="text-white opacity-75 mb-0" >Are you ready to make your business more organized ? Download Spend.In now!</p>
                </div>
                <NioButton href="/contact-us" className="btn-primary" label="Get A Free Demo" />
              </div>
            </Col>
            <Col xl="5">
              <div className="nl-frame text-end">
                  <img src="images/business-saas/section-cover-frame.png" alt="thumb" className="mb-n2" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section End   */}

      {/*  Newsletter Section Start  */}
      <NioSection className="pb-0">
        <div className="row justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom ">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-7">Join the 5000+ People That Uses Softnio Products.</p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="4">
            <NioSubscribeField variant={3} />
          </Col>
        </div>
      </NioSection>
      {/*  Newsletter Section End  */}

    </AppLayout >
  )
}

export default index;