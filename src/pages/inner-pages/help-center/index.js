import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';

// layouts 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioMedia, NioSection, NioCard, NioField, NioSubscribeField, NioIcon } from '../../../components';

// sections content 
import FaqContent from '../../../components/PageComponents/InnerPages/HelpCenter/FaqContent/FaqContent';

function index() {
  return (
    <AppLayout title="Help Center">

      {/*  Support Section Start */}
      <NioSection className="pt-120 pt-lg-160" masks={["blur-1 left center"]}>
        <Row className="row justify-content-center text-center">
          <Col lg="8" xl="6">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle mb-2" >Our support</span>
              <h2 className="nl-section-title">How can we help?</h2>
              <p className="fs-6 mb-0" >
                We can help you with a wide range of services and solutions to your specific needs. Let us know how we can assist you!
              </p>
            </div>
          </Col>
          <Col lg="8" >
            <div className="nl-filter-wrap pb-7">
              <Form onSubmit={e => e.preventDefault()}>
                <NioField>
                  <NioField.Input icon="search before" placeholder="Search for questions or topics" />
                </NioField>
              </Form>
              <ul className="nl-tag justify-content-center pt-4">
                <li>
                  <Link to="#" className="nl-tag-item">all</Link>
                </li>
                <li>
                  <Link to="#" className="nl-tag-item">Growth</Link>
                </li>
                <li>
                  <Link to="#" className="nl-tag-item">Marketing</Link>
                </li>
                <li>
                  <Link to="#" className="nl-tag-item">Tech</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg="6" >
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="wallet-fill" />
                  <div>
                    <h4 className="text-capitalize mb-3">Billing &amp; Payments</h4>
                    <p className="mb-0 fs-7 line-clamp-3"> Our billing and payment system is designed to make your financial transactions smooth and hassle-free. Manage your invoices, track payments, and enjoy a seamless billing experience with us. </p>
                  </div>
                    <NioButton
                      icon="arrow-right after"
                      href="/help-center-details"
                      label="See Pricing Questions"
                      className="btn-link"
                    />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="6">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia size="lg" rounded="circle" variant="info-soft" icon="users-fill" />
                  <div>
                    <h4 className="text-capitalize mb-3">Users and Collaboration</h4>
                    <p className="mb-0 fs-7 line-clamp-3"> Collaborate seamlessly with your team members, clients, and partners using our user-friendly platform. Manage user access, share files, and work together on projects in real-time, boosting productivity and fostering effective collaboration. </p>
                  </div>
                    <NioButton
                      icon="arrow-right after"
                      label="All Documentations"
                      href="/help-center-details"
                      className="btn-link"
                    />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="6" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia size="lg" rounded="circle" variant="red-soft" icon="puzzle-fill" />
                  <div>
                    <h4 className="text-capitalize mb-3">Features and Integrations</h4>
                    <p className="mb-0 fs-7 line-clamp-3"> Unlock a wide range of powerful features and integrations that enhance your workflow and streamline your business processes. From project management and communication tools to data analysis and reporting capabilities, our platform offers comprehensive solutions to meet your specific needs. Integrate with popular third-party apps and services to further extend the functionality of our platform and optimize your business operations. </p>
                  </div>
                    <NioButton
                      icon="arrow-right after"
                      href="/help-center-details"
                      label="Browse Articles"
                      className="btn-link"
                    />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="6" >
              <NioCard>
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="chat-circle-fill"  />
                  <div>
                    <h4 className="text-capitalize mb-3">Frequently Asked Questions</h4>
                    <p className="fs-7 line-clamp-3"> Unlock a wide range of powerful features and integrations that enhance your workflow and streamline your business processes. From project management and communication tools to data analysis and reporting capabilities, our platform offers comprehensive solutions to meet your specific needs. Integrate with popular third-party apps and services to further extend the functionality of our platform and optimize your business operations. </p>
                  </div>
                    <NioButton
                      icon="arrow-right after"
                      href="/help-center-details"
                      label="See All Questions"
                      className="btn-link"
                    />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Support Section End  */}

      {/*  FAQ Section Start  */}
      <NioSection masks={["blur-1 right top"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">FAQ</span>
          <h2 className="nl-section-title">Frequently Asked Questions</h2>
          <p> Find answers to commonly asked questions about our product or service in our comprehensive FAQ section. </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col lg="8">
              <FaqContent />
            </Col>
            <Col lg="4" >
              <NioCard>
                <NioCard.Body>
                  <div className="mb-5">
                    <NioMedia
                      size="lg"
                      rounded="circle"
                      icon="chat-fill"
                      className="mb-4"
                      variant="primary-soft"
                    />
                    <h5>Do You Need Any Support?</h5>
                    <p className="fs-7 mb-5">Lor em ips um dolor sit amet, conse ctet adipis cin g elit. Cons equat aliq uet soll ac.</p>
                  </div>
                  <Link to="#" className="btn-link text-lowercase">
                    <span>support@nioland.com</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  FAQ Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="bg-primary-gradient rounded-3  p-5 p-lg-7" >
            <Row className="align-items-center gy-5">
              <Col lg="8">
                <div className="d-flex flex-column gap-3 flex-lg-row align-items-center">
                  <NioMedia size="xl" rounded="circle" variant="white" icon="chat-fill text-primary" />
                  <div className="text-center text-lg-start">
                    <h3 className="text-white text-capitalize m-0">Chat with our support team!</h3>
                    <p className="fs-7 mb-0 text-white opacity-75">
                      Get in touch with our support team if you still can’t find your answer.
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="4" className="text-center text-lg-end">
                <NioButton href="/contact-us" className="btn-white text-dark fw-semiBold" label="Contact Support" />
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
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

    </AppLayout>
  )
}

export default index;