import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioIcon, NioButton, NioCard } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/Fintech/FaqContent/FaqContent';
import BrandContent from '../../../components/PageComponents/Homepages/Fintech/BrandContent/BrandContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/Fintech/TestimonialContent/TestimonialContent'


function index() {
  return (
    <AppLayout title="Fintech" footerVariant={6} layoutClass="21">

      {/*  Banner Section Start  */}
      <section className="nl-banner nl-banner-fintech bg-blue-700">
        <div className="nl-banner-wrap">
          <Container>
            <div className="nl-banner-content">
              <Row className="flex-row-reverse align-items-center justify-content-between">
                <Col lg="6" xl="5"  >
                  <div className="nl-frame text-center text-lg-start pb-5 pb-md-7 pb-lg-0">
                    <img src="images/fintech/banner-cover.jpg" alt="banner-frame" />
                  </div>
                </Col>
                <Col lg="6" xxl="5">
                  <div className="text-center text-lg-start">
                    <h1 className="display-3 text-white mb-3">Transparent and Easy <span className="text-primary">Payment Processing.</span></h1>
                    <p className="fs-5 text-white mb-0">Our tools and resources are readily available to assist you in getting started quickly, with no hidden fees or surprise transaction costs. It's a straightforward process, without any complications or catches. </p>
                    <ul className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start  gap-3 pt-5 pt-lg-40">
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

      {/* Brand Section Start */}
      <NioSection className="py-7 py-xl-120">
        <Row>
          <Col xs="12" className="text-center text-xl-start">
            <h6 className="fw-normal text-gray-700 mb-5">More than <span className="text-dark fw-semibold"> 100,000+</span> teams are using NioLand</h6>
          </Col>
        </Row>
        <NioSection.Content>
          <BrandContent />
        </NioSection.Content>
      </NioSection>
      {/* Brand Section End */}

      {/* Overview Section Start */}
      <NioSection className="bg-gray">
        <NioSection.Content>
          <Row className="justify-content-between align-items-center pb-7">
            <Col lg="5">
              <div className="nl-section-head pb-5 pb-lg-0">
                <span className="nl-section-subtitle mb-2">Features overview</span>
                <h2 className="nl-section-title">Advance features to secure your funds in our wallet</h2>
              </div>
            </Col>
            <Col lg="6">
              <ul className="d-flex flex-wrap align-items-center gap-3 justify-content-lg-end">
                <li>
                  <NioButton href="#" label="Browse All" className="btn-primary" />
                </li>
                <li>
                  <NioButton href="#" label="Learn More" className="btn-outline-primary" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-7">
            <Col lg="4" md="6">
              <NioCard className="bg-transparent border-0">
                <NioCard.Body className="d-flex flex-column gap-3 gap-lg-4 p-0">
                  <NioIcon name="paypal-alt" variant="primary" className="fs-2" />
                  <div>
                    <h4>Digital Payments</h4>
                    <p className="fs-7 line-clamp-2 mb-0"> Seamless Transactions, Securely: Experience the Convenience and Safety of Digital Payments Today. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="bg-transparent border-0">
                <NioCard.Body className="d-flex flex-column gap-3 gap-lg-4 p-0">
                  <NioIcon name="pie-fill" variant="primary" className="fs-2" />
                <div>
                  <h4>Finance Management</h4>
                  <p className="fs-7 line-clamp-2 mb-0"> Empower Your Financial Future: Take Control with Smart and Efficient Finance Management Solutions. </p>
                </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="bg-transparent border-0">
                <NioCard.Body className="d-flex flex-column gap-3 gap-lg-4 p-0">
                  <NioIcon name="building-fill" variant="primary" className="fs-2" />
                  <div>
                    <h4>Mobile Banking</h4>
                    <p className="fs-7 line-clamp-2 mb-0"> Banking at Your Fingertips: Seamlessly Manage Your Finances Anytime, Anywhere with Mobile Banking. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="bg-transparent border-0">
                <NioCard.Body className="d-flex flex-column gap-3 gap-lg-4 p-0">
                  <NioIcon name="cc-secure-fill" variant="primary" className="fs-2" />
                  <div>
                    <h4>Fraud Detection</h4>
                    <p className="fs-7 line-clamp-2 mb-0"> Stay Protected: Advanced Fraud Detection Systems Safeguard Your Assets and Preserve Your Peace of Mind." </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="bg-transparent border-0">
                <NioCard.Body className="d-flex flex-column gap-3 gap-lg-4 p-0">
                    <NioIcon name="bar-chart-fill" variant="primary" className="fs-2" />
                    <div>
                      <h4>Trading Tools</h4>
                      <p className="fs-7 line-clamp-2 mb-0"> Elevate Your Trading Game: Unleash the Power of Advanced Tools for Informed and Successful Trading. </p>
                    </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="bg-transparent border-0">
                <NioCard.Body className="d-flex flex-column gap-3 gap-lg-4 p-0">
                    <NioIcon name="cc-alt-fill" variant="primary" className="fs-2" />
                    <div>
                      <h4>Loan & Credit</h4>
                      <p className="fs-7 line-clamp-2 mb-0"> Unlock Financial Opportunities: Access Loans and Credit Solutions Tailored to Your Needs and Goals</p>
                    </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Overview Section End */}

      {/* Feature-info Section Start */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Content className="d-flex flex-column gap-7 gap-xl-120">
          <Row className="align-items-center justify-content-between flex-row-reverse">
            <Col lg="6"  >
              <div className="nl-frame mb-5 mb-lg-0">
                <img src="images/fintech/section-cover-1.jpg" alt="section-frame" className="w-100" />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="nl-section-head pb-5">
                  <NioIcon name="cc-alt-fill" variant="primary" className="fs-2 mb-3" />
                  <h2 className="nl-section-title">Take Payments In Person With Our Top Tier POS System </h2>
                </div>
                <div>
                  <ul className="d-flex flex-column gap-5">
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="mb-0"> Explore a range of flexible loan options and credit products designed to meet your financial needs, empowering you to pursue your dreams and aspirations. </p>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="mb-0"> Our user-friendly loan and credit application process ensures quick approvals, transparent terms, and competitive rates, providing you with a hassle-free borrowing experience. </p>
                      </div>
                    </li>
                  </ul>
                  <div className="pt-5 pt-lg-7">
                    <NioButton href="#" label="Learn More" className="btn-primary" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between">
            <Col lg="6"  >
              <div className="nl-frame mb-5 mb-lg-0">
                <img src="images/fintech/section-cover-2.jpg" alt="section-frame" className="w-100" />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="nl-section-head pb-5">
                    <NioIcon name="cart-fill" variant="primary" className="fs-2 mb-3" />
                  <h2 className="nl-section-title"> Offer your customers a smooth online checkout experience </h2>
                </div>
                <div>
                  <ul className="d-flex flex-column gap-5">
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="mb-0"> Streamline the purchasing process with our seamless online checkout, providing your customers with a frictionless and user-friendly experience from start to finish. </p>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="mb-0"> Ensure peace of mind for your customers with our robust security measures, while enabling quick and efficient online transactions, boosting customer satisfaction and loyalty. </p>
                      </div>
                    </li>
                  </ul>
                  <div className="pt-5 pt-lg-7">
                    <NioButton href="#" label="Learn More" className="btn-primary" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-between flex-row-reverse">
            <Col lg="6"  >
              <div className="nl-frame mb-5 mb-lg-0">
                <img src="images/fintech/section-cover-3.jpg" alt="section-frame" className="w-100" />
              </div>
            </Col>
            <Col lg="6" xl="5">
              <div>
                <div className="nl-section-head pb-5">
                    <NioIcon name="cc-secure-fill" variant="primary" className="fs-2 mb-3" />
                  <h2 className="nl-section-title">Rest easy with our industry-leading secure technology </h2>
                </div>
                <div>
                  <ul className="d-flex flex-column gap-5">
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="mb-0"> Trust in our cutting-edge technology and advanced security protocols to safeguard your valuable data, providing you with peace of mind and a secure digital environment. </p>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="mb-0"> Our commitment to top-notch security means your sensitive information is fortified by our industry-leading measures, ensuring the highest level of protection against threats and unauthorized access. </p>
                      </div>
                    </li>
                  </ul>
                  <div className="pt-5 pt-lg-7">
                    <NioButton href="#" label="Learn More" className="btn-primary" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Feature - info Section End */}

      {/* Testimonial Section Start */}
      <NioSection className="nl-section-testimonial shape-45 bg-blue-700">
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/* Testimonial Section End */}

      {/* Faq Section Start */}
      <NioSection className="bg-gray">
        <NioSection.Head alignX="center" className="pb-5 pb-lg-7"> 
          <span className="nl-section-subtitle mb-2">FAQs</span>
          <h2 className="nl-section-title">Frequently Asked Questions</h2>
        </NioSection.Head>
        <NioSection.Content>
          <FaqContent />
        </NioSection.Content>
      </NioSection>
      {/* Faq Section End */}

      {/* Blogs Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Content>
          <Row className="justify-content-lg-between align-items-center pb-7">
            <Col lg="7" xl="5">
              <div className="nl-section-head pb-3 pb-lg-0">
                <span className="nl-section-subtitle mb-2">our blogs </span>
                <h2 className="nl-section-title">Handcrafted articles based on Fintech solutions</h2>
              </div>
            </Col>
            <Col lg="4">
              <ul className="d-flex flex-wrap align-items-center gap-3 justify-content-lg-end">
                <li>
                  <NioButton href="#"  label="Browse All" className="btn-primary" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col lg="4" md="6">
              <NioCard className="border-0">
                <div className="card-img-top">
                  <Link to="#" className="d-inline-block position-relative w-100">
                    <img src="images/fintech/card-cover-1.jpg" alt="blog-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4 px-0 pt-4 pb-0">
                  <div>
                    <h5 className="text-capitalize">Free ebook for all of our customers</h5>
                    <p className="m-0 line-clamp-3"> Discover the insider info to help you get started on the right foot and avoid all of the typical business financial pitfalls. </p>
                  </div>
                  <NioButton href="#" label="Learn More" icon="arrow-right after"  className="btn-link" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="border-0">
                <div className="card-img-top">
                  <Link to="#" className="d-inline-block position-relative w-100">
                    <img src="images/fintech/card-cover-2.jpg" alt="blog-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4 px-0 pt-4 pb-0">
                  <div>
                    <h5 className="text-capitalize">Tune In For Free Weekly Webinars</h5>
                    <p className="m-0 line-clamp-3">Our webinars help you get started the right way and provide answers to any questions you may have as you get started.</p>
                  </div>
                  <NioButton href="#" label="Learn More" icon="arrow-right after"  className="btn-link" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="border-0">
                <div className="card-img-top">
                  <Link to="#" className="d-inline-block position-relative w-100">
                    <img src="images/fintech/card-cover-3.jpg" alt="blog-cover" className="w-100" />
                  </Link>
                </div>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4 px-0 pt-4 pb-0">
                  <div>
                    <h5 className="text-capitalize">We Love To Post About Payments</h5>
                    <p className="m-0 line-clamp-3">Our blog is a great place to get the latest news and stay informed on everything that may be relevant to your new business.</p>
                  </div>
                  <NioButton href="#" label="Learn More" icon="arrow-right after"  className="btn-link" />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/* Blogs Section End */}

      {/* CTA Section Start */}
      <NioSection className="nl-section-call-action pb-7 pb-lg-0 mb-lg-n8">
        <NioSection.Content className="nl-section-content py-5 p-sm-5 p-md-7 bg-primary"  >
          <Row className="text-center text-lg-start align-items-center justify-content-center justify-content-lg-between">
            <Col lg="8">
              <h2 className="text-capitalize text-white mb-5 mb-lg-0">Sign up today to start taking payments</h2>
            </Col>
            <Col lg="4">
              <div className="text-lg-end">
                <NioButton href="#" className="btn py-lg-3 px-lg-6 btn-outline-white" label="Contact Us" />
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