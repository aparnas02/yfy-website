import React from 'react';
// import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioButton, NioMedia, NioCard, NioSubscribeField } from '../../../components';

// section content 
import ContactForm from '../../../components/PageComponents/SectionComponents/ContactForm/ContactForm';
import CallToAction from '../../../components/PageComponents/SectionComponents/CallToAction/CallToAction';

function index() {
  return (
    <AppLayout title="Contact">

      {/*  Contact Section Start  */}
      <NioSection className="pt-120 pt-lg-160" masks={["blur-1 left center"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2" >Need support</span>
          <h2 className="nl-section-title">Contact Us</h2>
          <p> Contact us for any inquiries or support you may need. Our dedicated team is ready to assist you and provide the best solutions. </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 gy-xl-0">
            <Col md="6" xl="4" >
              <NioCard className="h-100 bg-primary-soft border-0">
                <NioCard.Body className="d-flex gap-5 flex-column justify-content-between">
                    <NioMedia size="lg" rounded="circle" variant="primary" icon="master-card" />
                    <div>
                      <h4>Billing &amp; Payments</h4>
                      <p className="mb-0 fs-7">Manage your billing and payments effortlessly with our user-friendly platform. Stay on top of your financial transactions.</p>
                    </div>
                    <NioButton href="/help-center" className="btn-link" icon="arrow-right after" label="See Pricing Questions" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="h-100 bg-primary-soft border-0">
                <NioCard.Body className="d-flex gap-5 flex-column justify-content-between">
                    <NioMedia size="lg" rounded="circle" variant="primary" icon="users-fill" />
                    <div>
                      <h4>Users and Collaboration</h4>
                      <p className="mb-0 fs-7">Connect and collaborate with users seamlessly on our platform. Share information, assign tasks, and work together.</p>
                    </div>
                    <NioButton href="/help-center" className="btn-link" icon="arrow-right after" label="All Documentations" />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="h-100 bg-primary-soft border-0" >
                <NioCard.Body className="d-flex gap-5 flex-column justify-content-between">
                    <NioMedia size="lg" rounded="circle" variant="primary" icon="puzzle-fill" />
                    <div>
                      <h4>Features and Integrations</h4>
                      <p className="mb-0 fs-7">Unlock a wide range of features and integrations to enhance your workflow. From project management</p>
                    </div>
                    <NioButton href="/help-center" className="btn-link" icon="arrow-right after" label="See All Questions" />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Contact Section End  */}

      {/*  Support Section Start  */}
      <NioSection masks={["blur-1 right center"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Contact support</span>
          <h2 className="nl-section-title">Get in touch</h2>
          <p className="mb-0">Get in touch for personalized assistance. We're here to help and provide solutions tailored to your requirements.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
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
      {/*  Support Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <CallToAction />
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section End  */}

      {/*  CTA Section End  */}

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