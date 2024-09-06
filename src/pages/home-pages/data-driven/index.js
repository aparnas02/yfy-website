import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioMedia, NioSection, NioCard, NioSubscribeField } from '../../../components';

// section content 
import PricingContent from '../../../components/PageComponents/Homepages/DataDriven/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/DataDriven/TestimonialContent/TestimonialContent';

function index() {
  return (
    <AppLayout title="Data Driven" layoutClass="12">

      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-bs-driven" data-bg-image="business-driven/banner-cover.jpg">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="gy-5 gy-lg-7 justify-content-center">
              <Col xxl="9">
                <div className="text-center">
                  <h1 className="display-3 text-white mb-2">Get All Of Your Data, Analytics, Sales And Profile In One Place.</h1>
                  <p className="text-white opacity-75 col-lg-9 mx-lg-auto" > We’re different. Nioland is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels. </p>
                </div>
              </Col>
              <Col lg="8" xl="6">
                <div className="d-flex flex-column align-items-center gap-5">
                    <NioSubscribeField icon="mail" btnText="Get Early Access" />
                    <p className="text-white opacity-75 mb-0">Start your free 14-day trial today, no credit card required.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section >
      {/*  Banner Section End   */}

      {/* Brand Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col className="col-xxl-8 col-xl-9 col-lg-10">
              <h5 className="fw-normal text-gray-700 text-center mb-3 mb-lg-5">Over <span className="text-dark fw-semibold">32K+ software</span> business growing with NioLand </h5>
              <Row className="gy-2 gap-sm-2 gy-md-5 gap-md-5 align-items-center justify-content-center justify-content-lg-between text-center">
                {
                  ["a", "b", "c", "d", "e"].map((brand, idx) => (
                    <Col key={idx} xs="4" sm="3" lg="2" >
                      <Link className="nl-brand" to="#">
                        <img src={`images/brands/${brand}.png`} className="opacity-75" alt="brand" />
                      </Link>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Brand Section End */}

      {/* Features Section Start */}
      <NioSection className="py-7 py-lg-120 pt-lg-7 ">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">powerful features</span>
          <h2 className="nl-section-title">Discover Powerful Features</h2>
          <p className="mb-0">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve. </p>
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
          <Row className="gy-5">
            <Col md="6" >
              <NioCard className="h-100 text-center">
                <NioCard.Body className="d-flex flex-column align-items-center justify-content-between gap-4 p-lg-7">
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="trend-up"/>
                  <div>
                    <h4 className="text-capitalize">Custom analytics</h4>
                    <p className="fs-7 line-clamp-3">Tailored data analysis solutions to meet specific business needs, providing actionable insights for informed decision-making and improved performance all over area of it.</p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" >
              <NioCard className="h-100 text-center">
                <NioCard.Body className="d-flex flex-column align-items-center justify-content-between gap-4 p-lg-7">
                  <NioMedia size="lg" rounded="circle" variant="yellow-soft" icon="users"/>
                  <div>
                    <h4 className="text-capitalize">Team Management</h4>
                    <p className="fs-7 line-clamp-3"> Team management involves overseeing a group of individuals to achieve common goals by coordinating tasks, fostering collaboration, and optimizing productivity. </p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" >
              <NioCard className="h-100 text-center">
                <NioCard.Body className="d-flex flex-column align-items-center justify-content-between gap-4 p-lg-7">
                  <NioMedia size="lg" rounded="circle" variant="red-soft" icon="edit-alt"/>
                  <div>
                    <h4 className="text-capitalize">Build your website</h4>
                    <p className="fs-7 line-clamp-3">Creating a website involves designing and developing web pages, content, and functionality to establish an online presence or platform for various purposes, so for that design will finest.</p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" >
              <NioCard className="h-100 text-center">
                <NioCard.Body className="d-flex flex-column align-items-center justify-content-between gap-4 p-lg-7">
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="emails"/>
                  <div>
                    <h4 className="text-capitalize">Measure your performance</h4>
                    <p className="fs-7 line-clamp-3"> Performance measurement assesses the effectiveness and efficiency of tasks, processes, or individuals, often using key performance to gauge progress and success.</p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>

        </NioSection.Content>
      </NioSection>
      {/* Features Section End */}

      {/* Model Section Start */}
      <NioSection className="bg-dark">
        <NioSection.Content>
          <Row className="align-items-end justify-content-between pb-7 pb-lg-120">
            <Col lg="8">
              <h2 className="text-white text-capitalize mb-0">Find out everything you need to know a business process model</h2>
            </Col>
            <Col lg="2">
              <div className="pt-5 pt-lg-0 text-end">
                <NioButton href="#" label="Get Started Now" className="btn-primary text-nowrap" />
              </div>
            </Col>
          </Row>
          <Row className="flex-row-reverse justify-content-xl-between align-items-xl-center">
            <Col xl="6">
              <div className="nl-video nl-video-s1 pb-7 pb-xl-0">
                <div className="nl-video-inner">
                  <div className="nl-video-content">
                    <div className="nl-video-img nl-frame nl-frame-five text-center">
                      <img src="images/business-driven/section-cover-1.jpg" className="w-100 overflow-hidden rounded-3" alt="cover" />
                      <div className="nl-frame-children nl-frame-children-one">
                        <img src="images/business-driven/section-cover-1-a.png" alt="" />
                      </div>
                      <div className="nl-frame-children nl-frame-children-two">
                        <img src="images/business-driven/section-cover-1-b.png" alt="" />
                      </div>
                      <div className="nl-frame-children nl-frame-children-three">
                        <img src="images/business-driven/section-cover-1-c.png" alt="" />
                      </div>
                    </div>
                    <div className="nl-video-btn">
                      <NioMedia
                        size="xl"
                        variant="white"
                        rounded="circle"
                        icon="play-fill fs-2 text-primary"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="animate animate-infinite animate-pulse animate-duration-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl="5">
              <ul className="d-flex flex-column gap-5">
                <li className="d-flex" >
                  <NioMedia size="md" rounded="circle" variant="primary text-white" className="text-center me-5">
                    1
                  </NioMedia>
                  <div className="mt-n1">
                    <h3 className="text-white">First Working Process</h3>
                    <p className="text-white opacity-75">Blessing it ladyship on sensible judgment settling outweigh.</p>
                  </div>
                </li>
                <li className="d-flex" >
                  <NioMedia size="md" rounded="circle" variant="primary text-white" className="text-center me-5">
                    2
                  </NioMedia>
                  <div className="mt-n1">
                    <h3 className="text-white">Dedicated Team</h3>
                    <p className="text-white opacity-75">Warmly little before cousin sussex entire men set.</p>
                  </div>
                </li>
                <li className="d-flex" >
                  <NioMedia size="md" rounded="circle" variant="primary text-white" className="text-center me-5">
                    3
                  </NioMedia>
                  <div className="mt-n1">
                    <h3 className="text-white">24/7 Hours Support</h3>
                    <p className="text-white opacity-75">And excellence partiality estimating terminated day everything.</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Model Section End */}

      {/* testimonials Section Start */}
      <NioSection className="pt-7 pt-lg-120">
        <Row className="justify-content-center">
          <Col lg="7">
            <div className="nl-section-head text-center pb-7">
              <span className="nl-section-subtitle mb-2">Customer testimonials</span>
              <h2 className="nl-section-title">Stories From Our Customers</h2>
              <p className="mb-0">
                Hear inspiring stories from our satisfied customers who have achieved remarkable success with our solutions.
              </p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton href="#" label="See All Reviews" className="btn-primary text-nowrap" />
                </li>
                <li>
                  <NioButton href="#" label="Get Started" className="btn-outline-primary text-nowrap" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/* testimonials Section End */}

      {/* Faqs Section Start */}
      <NioSection>
        <NioSection.Content>
          <Row className="pb-5 pb-md-7 align-items-end justify-content-between">
            <Col lg="6">
              <div className="nl-section-head pb-0 text-center text-lg-start">
                <span className="nl-section-subtitle mb-2">faqs</span>
                <div>
                  <h2>Frequently Asked Questions</h2>
                  <p className="m-0"> Find answers to commonly asked questions about our products, services, and policies in our comprehensive FAQ section. </p>
                </div>
              </div>
            </Col>
            <Col lg="4">
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-lg-end pt-5 pt-lg-0">
                <li>
                  <NioButton href="#" label="Go to support center" className="btn-primary text-nowrap" />
                </li>
                <li>
                  <NioButton href="#" label="Contact Us" className="btn-outline-primary text-nowrap" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5">
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="trend-up" />
                  <div>
                    <h4>Is my credit card information kept secure from the back end?</h4>
                    <p className="fs-7  line-clamp-3"> Yes, we prioritize the security of your credit card information with advanced encryption technology and strict data protection measures. Your sensitive data is kept secure and confidential throughout the entire transaction process, giving you peace of mind when making payments with us. </p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="green-soft" icon="emails" />
                  <div>
                    <h4>What payment methods do you accept?</h4>
                    <p className="fs-7  line-clamp-3"> We accept various payment methods, including major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and bank transfers. We strive to offer convenient and secure payment options to ensure a seamless checkout experience for our customers. </p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="yellow-soft" icon="users" />
                  <div>
                    <h4>How long does it take to ship my order?</h4>
                    <p className="fs-7  line-clamp-3"> The shipping time for your order may vary depending on several factors such as the shipping method selected, your location, and the availability of the product. Generally, we aim to process and ship orders within 1-3 business days. You will receive a shipping confirmation email with tracking details once your order is on its way. </p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="red-soft" icon="edit-alt" />
                  <div>
                    <h4>Are there any discounts for people in need?</h4>
                    <p className="fs-7  line-clamp-3"> Yes, we offer discounts and promotions from time to time, including special offers for those in need. Please check our website or contact our customer support for more information on current discounts and eligibility criteria. We strive to make our products accessible to as many people as possible. </p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="purple-soft" icon="grid" />
                  <div>
                    <h4>Do you have any feature for downloading the bill receipt?</h4>
                    <p className="fs-7  line-clamp-3"> Yes, we provide a convenient feature that allows you to download your bill receipt. Simply log in to your account, navigate to the billing section, and select the option to download your receipt. You can save it for your records or print it if needed. This feature ensures easy access to your bill receipts whenever required. </p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-4">
                  <NioMedia size="lg" rounded="circle" variant="cyan-soft" icon="setting-alt" />
                  <div>
                    <h4>How do I reset my account to recover my wallet?</h4>
                    <p className="fs-7  line-clamp-3"> To reset your account and recover your wallet, simply follow the "Forgot Password" process on our platform. You'll receive instructions via email to set a new password and regain access to your wallet. If you need additional support, our customer service team is here to help. </p>
                  </div>
                  <NioButton href="#" label="Learn More" className="btn-link" icon="arrow-right after" />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Faqs Section End */}

      {/* Pricing Plans Section Start */}
      <NioSection className="nl-section-pricing overflow-hidden">
        <PricingContent />
      </NioSection>
      {/* Pricing Plans Section End */}

      {/* Cta Section Start */}
      <NioSection>
        <NioSection.Content>
          <NioCard className="bg-primary card-mask card-mask-two rounded-3 border-0">
            <NioCard.Body className="p-md-7">
              <Row className="gap-5 justify-content-center">
                <Col lg="10">
                  <div className="text-center">
                    <h2 className="h1 text-white">Ready to get started?</h2>
                    <p className="fs-7 text-white col-lg-8 mx-auto opacity-75">Try our services for free and find out which plan is best for you</p>
                  </div>
                </Col>
                <Col lg="8" xl="6">
                  <NioSubscribeField icon="mail" btnText="Get Voucher" btnClass="dark"  />
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