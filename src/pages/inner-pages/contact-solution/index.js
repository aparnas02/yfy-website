import React from 'react';
import { Col, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// component 
import { NioButton, NioCard, NioSection, NioMedia, NioBrand, NioSubscribeField } from '../../../components';

// section content  
import ContactForm from '../../../components/PageComponents/SectionComponents/ContactForm/ContactForm';
// import { Link } from 'react-router-dom';

function index() {
  return (
    <AppLayout title="Contact" layoutClass="6">

      {/*  Banner Section Start   */}
      <NioSection className="nl-banner-wrap nl-banner-business-feature pb-lg-120" masks={["shape-36"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Our Support</span>
          <h2 className="display-5 text-white text-capitalize">How can we <span className="text-primary">help you</span>? </h2>
          <p className="text-white opacity-75">
            We are dedicated to providing exceptional customer support to ensure your needs are met effectively and efficiently. Reach out to us for prompt assistance and personalized solutions.
          </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="primary" icon="headphone-fill" />
                  <div>
                    <h5 className="text-capitalize">Tech Support</h5>
                    <p className="fs-7 mb-0">Reliable tech support for all your technical needs. Get help from our expert team.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="primary" icon="bugs-alt-fill" />
                  <div>
                    <h5 className="text-capitalize">Website Issue</h5>
                    <p className="fs-7 mb-0">Experiencing website issues? Our tech support team is here to assist you promptly.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="primary" icon="telegram" />
                  <div>
                    <h5 className="text-capitalize">Contact Sales</h5>
                    <p className="fs-7 mb-0">Ready to take your business to the next level? Contact our sales team to discuss your needs.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="primary" icon="chat-msg-fill" />
                  <div>
                    <h5 className="text-capitalize">Live Chat</h5>
                    <p className="fs-7 mb-0">Connect with us instantly through our live chat feature to get immediate assistance.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="primary" icon="users-fill" />
                  <div>
                    <h5 className="text-capitalize">Affiliate Program</h5>
                    <p className="fs-7 mb-0">Earn commissions by referring customers to our products and services through.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="primary" icon="account-setting-fill" />
                  <div>
                    <h5 className="text-capitalize">Billing &amp; Account</h5>
                    <p className="fs-7 mb-0">Manage your billing and account details conveniently in one place.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Banner Section End  */}

      {/*  Contact Section Start  */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">Contact US</span>
          <h2>Get in touch</h2>
          <p className="fs-5 "> We'd love to hear from you! Contact us to get more information, ask questions, or share feedback. Our team is ready to assist you. </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 justify-content-lg-between">
            <Col lg="8" >
              <ContactForm />
            </Col>
            <Col lg="4">
            <div className="d-flex flex-column gap-3 gap-lg-4">
                <NioCard>
                  <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                    <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="sign-dollar fs-4" />
                    <div>
                      <h5>Plans &amp; Pricing</h5>
                      <p className="fs-7 mb-0">Choose from our flexible plans and competitive pricing options to find the best fit.</p>
                    </div>
                    <NioButton label="See Pricing" icon="arrow-right after" className="btn-link" />
                  </NioCard.Body>
                </NioCard>
                <NioCard>
                  <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                    <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="help-fill fs-4" />
                    <div>
                      <h5>Frequently Asked Questions</h5>
                      <p className="fs-7 mb-0">Find answers to commonly asked questions about our product or service in our.</p>
                    </div>
                    <NioButton label="See All Questions" icon="arrow-right after" className="btn-link" />
                  </NioCard.Body>
                </NioCard>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Contact section end   */}

      {/*  CTA Section Start   */}
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
      {/*  CTA Section End   */}

      {/*  Newsletter Section Start  */}
      <NioSection className="pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center pb-5 border-1 border-bottom border-gray-500">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <div>
              <h5 className="text-capitalize">Subscribe to our newsletter</h5>
              <p className="fs-7">Join the 5000+ People That Uses Softnio Products.</p>
              </div>
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