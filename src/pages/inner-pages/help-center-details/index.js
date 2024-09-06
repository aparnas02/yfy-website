import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// component 
import { NioButton, NioSection, NioSubscribeField, NioMedia } from '../../../components';

// section content 
import DetailsContent from '../../../components/PageComponents/InnerPages/HelpCenterDetails/DetailsContent/DetailsContent';

function index() {
  return (
    <AppLayout title="Help Center">

      {/* Help-Center Section Start */}
      <NioSection className="pt-120 pt-lg-180" masks={["blur-1 left top", "blur-1 right bottom"]}>
        <div className="nl-section-head">
          <nav>
            <ol className="breadcrumb mb-3 mb-md-4">
              <li className="breadcrumb-item">
                <Link to="/help-center">Help Center</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Billing &amp; Payments</li>
            </ol>
          </nav>
          <h2>Billing &amp; Payments</h2>
          <hr className="mt-5 mb-0" />
        </div>
        <NioSection.Content>
          <DetailsContent />
        </NioSection.Content>
      </NioSection>
      {/* Help-Center Section End */}

      {/* CTA Section Start */}
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
      {/* CTA Section End */}

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