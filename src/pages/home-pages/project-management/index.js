import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioMedia, NioCount, NioSection, NioSubscribeField, NioIcon, NioCard } from '../../../components';

// section component 
import FaqContent from '../../../components/PageComponents/Homepages/ProjectManagement/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/ProjectManagement/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/ProjectManagement/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout title="Project Management" layoutClass="14">

      {/*  Banner Section Start   */}
      <section className="nl-section nl-banner nl-banner-project-management">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="justify-content-center justify-content-xl-between align-items-xl-center">
              <Col lg="10" xl="5">
                <div className="nl-section-head text-center text-xl-start">
                  <span className="nl-section-subtitle bg-primary-soft rounded-pill p-1 mb-3">Nioland Solution</span>
                  <div>
                    <h1 className="display-5 mb-2"> Staying on top of your <span className="text-primary">projects</span> easy as ever before. </h1>
                    <p> NioLand is the only saas business platform that lets you run your business on one platform. </p>
                  </div>
                  <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center justify-content-xl-start pt-5">
                    <li >
                      <NioButton href="/auth/sign-up" label="Request A Demo" className="btn-primary" />
                    </li>
                    <li >
                      <NioButton href="/auth/sign-up" label="Sign Up" className="btn-outline-dark" />
                    </li>
                  </ul>
                  <div className="pt-5 pt-lg-7">
                    <h5 className="mb-3 text-gray-700 fw-normal text-capitalize">Trusted by</h5>
                    <Row className="justify-content-center justify-content-xl-start gy-3 gy-xl-0 gap-sm-0">
                      {
                        ["a", "c", "e", "b"].map((brand, idx) => (
                          <Col key={idx} xs="4" sm="3"  >
                            <div className="nl-brand">
                              <Link to="#">
                                <img src={`images/brands/${brand}.png`} alt="brand" />
                              </Link>
                            </div>
                          </Col>
                        ))
                      }
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xl="7"  >
                <div className="nl-banner-cover nl-frame nl-frame-six">
                  <img src="images/project-management/banner-cover.png" alt="banner-cover" />
                  <div className="nl-frame-children nl-frame-children-one animate animate-shakeY animate-duration-12">
                    <img src="images/project-management/banner-cover-a.png" alt="banner-cover-children" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-two ">
                    <img src="images/project-management/banner-cover-b.png" alt="banner-cover-children" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-three">
                    <img src="images/project-management/banner-cover-c.png" alt="banner-cover-children" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/* Features Section Start */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Head alignX="center" className="pb-xl-120">
          <span className="nl-section-subtitle mb-2">powerful features</span>
          <h2 className="nl-section-title">Discover powerful features</h2>
          <p> Unlock a range of powerful features designed to enhance your experience and maximize productivity. Explore now! </p>
        </NioSection.Head>

        <NioSection.Content>
          <div className="d-flex flex-column gap-7 gap-xl-120">
            <Row className="flex-lg-row-reverse align-items-center justify-content-between">
              <Col xl="6"  >
                <div className="nl-frame nl-frame-seven-a text-center pb-7 pb-xl-0">
                  <img src="images/project-management/section-cover-1.png" alt="section-cover" />
                  <div className="nl-frame-children nl-frame-children-one  animate animate-shakeY animate-duration-12 animate-delay-1" >
                    <img src="images/project-management/section-cover-1-a.png" alt="section-cover-children" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-two animate animate-shakeY animate-duration-12"  >
                    <img src="images/project-management/section-cover-1-b.png" alt="section-cover-children" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-three" >
                    <img src="images/project-management/section-cover-1-c.png" alt="section-cover-children" />
                  </div>
                </div>
              </Col>
              <Col xl="5">
                <div>
                  <div className="nl-section-head pb-5">
                    <span className="nl-section-subtitle mb-2">Extremely flexible </span>
                    <h3 className="text-capitalize mb-5"> Analytics overview you’ve always wanted </h3>
                    <Link to="#" className="btn-link">
                      <span>Learn More</span>
                      <NioIcon name="arrow-right" />
                    </Link>
                    <hr className="m-0 mt-5" />
                  </div>
                  <div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="bar-chart-fill" variant="primary-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize">Measure your performance</h5>
                        <p className="fs-7"> Take control of your finances with stress-free spending. Manage your expenses and budget effortlessly. </p>
                      </div>
                    </div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="browser-fill" variant="primary-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize">Build your website</h5>
                        <p className="fs-7"> Enjoy peace of mind with our intuitive platform, ensuring you have the perfect control over your spending. </p>
                      </div>
                    </div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="grid-fill-c" variant="primary-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize">Connect multiple apps</h5>
                        <p className="fs-7"> Say goodbye to financial stress. Our platform provides you with the tools and features to easily manage and track your expenses. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-between">
              <Col xl="6"  >
                <div className="nl-frame nl-frame-seven-b text-center pb-5 pb-xl-0">
                  <img src="images/project-management/section-cover-2.png" alt="section-cover" />
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/project-management/section-cover-2-a.png" alt="section-cover-children"   />
                  </div>
                </div>
              </Col>
              <Col xl="5">
                <div>
                  <div className="nl-section-head pb-5">
                    <span className="d-inline-block fs-8 fw-semibold text-danger text-uppercase mb-3">Totally Optimized</span>
                    <h3 className="text-capitalize mb-5">Stress-free spending for you to have the perfect control.</h3>
                    <Link to="#" className="btn-link">
                      <span>Learn More</span>
                      <NioIcon name="arrow-right" />
                    </Link>
                    <hr className="m-0 mt-5" />
                  </div>
                  <div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="bar-chart-fill" variant="danger-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize"> Take charge of your finances with our platform </h5>
                        <p className="fs-7"> Take control of your finances with our platform and manage your money with ease. </p>
                      </div>
                    </div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="browser-fill" variant="danger-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize"> Achieve financial peace of mind with stress-free. </h5>
                        <p className="fs-7"> Empower yourself by taking charge of your finances using our user-friendly platform. </p>
                      </div>
                    </div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="grid-fill-c" variant="danger-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize"> Experience the freedom of stress-free spending and maintain perfect control. </h5>
                        <p className="fs-7"> Enjoy the convenience and simplicity of managing all your payments in one place. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="flex-lg-row-reverse align-items-center justify-content-between">
              <Col xl="6"  >
                <div className="nl-frame nl-frame-seven-c text-center">
                  <img src="images/project-management/section-cover-3.png" alt="section-cover" />
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/project-management/section-cover-3-a.png" alt="section-cover-children"   />
                  </div>
                  <div className="nl-frame-children nl-frame-children-two">
                    <img src="images/project-management/section-cover-3-b.png" alt="section-cover-children"  />
                  </div>
                </div>
              </Col>
              <Col xl="5">
                <div>
                  <div className="nl-section-head pb-5">
                    <span className="d-inline-block fs-8 fw-semibold text-success text-uppercase mb-3">All tools in one place</span>
                    <h3 className="text-capitalize mb-5">All payments can be <br className="d-none d-lg-block" /> managed from one account</h3>
                    <Link to="#" className="btn-link">
                      <span>Learn More</span>
                      <NioIcon name="arrow-right" />
                    </Link>
                    <hr className="m-0 mt-5" />
                  </div>
                  <div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="bar-chart-fill" variant="success-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize">Streamline your payments with our platform and manage all transactions</h5>
                        <p className="fs-7"> from a single account. Simplify your financial management and stay in control of your payments effortlessly. </p>
                      </div>
                    </div>
                    <div className="d-flex mb-5">
                      <NioMedia size="md" rounded="circle" icon="browser-fill" variant="success-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize"> Simplify your payment process by consolidating all transactions. </h5>
                        <p className="fs-7"> Manage your payments efficiently and conveniently by consolidating all your transactions in one place. </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <NioMedia size="md" rounded="circle" icon="grid-fill-c" variant="success-soft" className="text-center me-3" />
                      <div>
                        <h5 className="mb-2 text-capitalize"> Enjoy the convenience of managing all your payments in one place. </h5>
                        <p className="fs-7"> Enjoy the convenience and simplicity of managing all your payments in one place. With our platform, </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
      {/* Features Section End */}

      {/* Nk How - It Work Section Start */}
      <NioSection className="bg-gray-200">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Our Process</span>
          <h2 className="nl-section-title">How We Do It?</h2>
          <p className="mb-0"> Experience our unique approach and discover how we achieve remarkable results through innovative strategies and cutting-edge. </p>
        </NioSection.Head>
        <NioSection.Content>
          <ul className="nl-timeline-group gap g-5 justify-content-center has-divider">
            <li className="nl-timeline-group-item">
              <div className="nl-timeline-group-content text-center">
                <NioMedia size="lg" rounded="circle" variant="blue-soft" className="mb-3 mb-lg-6 mx-auto">
                  <span className="h4 text-primary">1</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 fw-semibold  text-uppercase mb-3">step 1</span>
                  <div>
                    <h3 className="mb-3">Concept</h3>
                    <p className="fs-6  line-clamp-3">Unleash creativity, shape ideas, and ignite innovation with the power.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nl-timeline-group-item"  >
              <div className="nl-timeline-group-content text-center">
                <NioMedia size="lg" rounded="circle" variant="blue-soft" className="mb-3 mb-lg-6 mx-auto">
                  <span className="h4 text-primary">2</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 fw-semibold  text-uppercase mb-3">step 2</span>
                  <div>
                    <h3 className="mb-3">Prepare</h3>
                    <p className="fs-6  line-clamp-3">Get ready, gather your resources, and be fully equipped.</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nl-timeline-group-item"  >
              <div className="nl-timeline-group-content text-center">
                <NioMedia size="lg" rounded="circle" variant="blue-soft" className="mb-3 mb-lg-6 mx-auto" >
                  <span className="h4 text-primary">3</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 fw-semibold  text-uppercase mb-3">step 3</span>
                  <div>
                    <h3 className="mb-3">Retouch</h3>
                    <p className="fs-6  line-clamp-3"> Enhance, refine, and perfect your work with precision and attention. </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="nl-timeline-group-item" >
              <div className="nl-timeline-group-content text-center">
                <NioMedia size="lg" rounded="circle" variant="blue-soft" className="mb-3 mb-lg-6 mx-auto" >
                  <span className="h4 text-primary">4</span>
                </NioMedia>
                <div>
                  <span className="d-inline-block fs-8 fw-semibold  text-uppercase mb-3">step 4</span>
                  <div>
                    <h3 className="mb-3">Finalize</h3>
                    <p className="fs-6  line-clamp-3"> Bring your project to completion with the finishing touches. </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </NioSection.Content>
      </NioSection>
      {/* Nk How - It Work Section End */}

      {/* testimonial Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Head alignX="center">
          <div>
            <span className="nl-section-subtitle mb-2">Customer testimonials</span>
            <h2>Stories From Our Customers</h2>
            <p className="mb-0"> Read inspiring stories and testimonials from our satisfied customers who have experienced success with our products/services. </p>
          </div>
          <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
            <li>
              <NioButton href="/customer-testimonials" label="See All Reviews" className="btn-primary" />
            </li>
            <li>
              <NioButton href="#" label="Get Started" className="btn-outline-primary" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/* testimonial Section End */}

      {/* Counter Section Start */}
      <NioSection className="nl-feature-abouts pb-7 pb-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Success Numbers</span>
          <h2>Our results in numbers</h2>
          <p className="mb-0"> Our Results in Numbers: Achievements, Success, and Growth </p>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col sm="6" lg="3"  >
              <div className="text-center">
                <div className="feature-card-countdown mb-0">
                  <h2 className="mb-3">
                    <NioCount end={99} />
                    <span className="text-primary"> %</span>
                  </h2>
                </div>
                <p className="fs-6 mb-0"> customer retention rate </p>
              </div>
            </Col>
            <Col sm="6" lg="3"  >
              <div className="text-center">
                <div className="feature-card-countdown mb-0">
                  <h2 className="mb-3">
                    <NioCount end={32} />
                    <span className="text-primary"> M</span>
                  </h2>
                </div>
                <p className="fs-6 mb-0"> satisfied customers </p>
              </div>
            </Col>
            <Col sm="6" lg="3"  >
              <div className="text-center">
                <div className="feature-card-countdown mb-0">
                  <h2 className="mb-3">
                    <NioCount end={125} />
                    <span className="text-primary"> +</span>
                  </h2>
                </div>
                <p className="fs-6 mb-0"> positive feedback from customer </p>
              </div>
            </Col>
            <Col sm="6" lg="3" >
              <div className="text-center">
                <div className="feature-card-countdown mb-0">
                  <h2 className="mb-3">
                    <NioCount end={240} />
                    <span className="text-primary"> %</span>
                  </h2>
                </div>
                <p className="fs-6 mb-0"> reduction in operational costs </p>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Counter Section End */}

      {/* Faqs Section Start */}
      <NioSection className="bg-gray-200">
        <NioSection.Content>
          <Row className="justify-content-between gx-lg-7">
            <Col lg="4">
              <div className="nl-section-head pb-lg-0 text-center text-lg-start">
                <span className="nl-section-subtitle mb-2">FAQs</span>
                <h2 className="nl-section-title">Frequently Asked Questions</h2>
                <p className="mb-0">Find answers to commonly asked questions about our product or service in our comprehensive FAQ section.</p>
                <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center justify-content-lg-start pt-5">
                  <li>
                    <NioButton href="/help-center" label="Go to support center" className="btn-primary" />
                  </li>
                  <li>
                    <NioButton href="/contact-us-solution" label="Contact Us" className="btn-outline-primary" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="8">
              <FaqContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Faqs Section End */}

      {/* Pricing Plans Section Start */}
      <NioSection className="nl-section-pricing py-7 pt-xl-7 mb-xl-7">
        <PricingContent />
      </NioSection>
      {/* Pricing Plans Section End */}

      {/* Call-to-action Section Start */}
      <NioSection className="pb-lg-7 pt-xl-120">
        <NioSection.Content>
          <NioCard  className="bg-dark rounded-3">
            <NioCard.Body className="p-5 p-md-7 pb-xl-7">
              <Row className="justify-content-between">
                <Col xl="6">
                  <div className="text-center text-xl-start">
                    <h2 className="display-5 text-white">Ready to get started?</h2>
                    <p className="mb-0 text-white opacity-75">Try our services for free and find out which plan is best for you</p>
                    <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center justify-content-xl-start pt-5 pt-xl-7">
                      <li>
                        <NioButton href="#" label="Get Started" className="btn-white" />
                      </li>
                      <li>
                        <NioButton href="#" label="More Details" className="btn-outline-white" />
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xl="5" className="d-none d-xl-block">
                  <div className="position-relative">
                    <div className="nl-frame nl-frame-eight">
                      <img src="images/project-management/section-cover-4.png" alt="section-cover"/>
                      <div className="nl-frame-children nl-frame-children-one">
                        <img src="images/project-management/section-cover-4-a.png" alt="frame-children" />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </NioCard.Body>
          </NioCard>
        </NioSection.Content>
      </NioSection>
      {/* Call-to-action Section End */}

      {/*  Newsletter Section Start  */}
      <NioSection className="pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-gray-50">
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