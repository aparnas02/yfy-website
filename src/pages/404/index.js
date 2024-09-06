import React from "react";
import { Col, Row } from "react-bootstrap";

// layout
import AppLayout from "../../layouts/AppLayout/AppLayout";

// components
import {
  NioButton,
  NioCard,
  NioSection,
  NioMedia,
  NioSubscribeField,
} from "../../components";

function index() {
  return (
    <AppLayout title="404">
      <NioSection
        className="nl-section-error pt-120 pt-xl-180 overflow-hidden pb-0"
        masks={["blur-1 left top", "blur-1 right bottom"]}
      >
        <Row className="justify-content-center text-center">
          <Col lg="6" xl="8">
            <div className="pb-5 pb-lg-7">
              <div className="error-number mb-5">404</div>
              <h2 className="m-0 mb-2 mb-md-4">Oops, Page Not Found.</h2>
              <p className="fs-5">
                Apologies, Page Not Found. Take a detour to explore other
                sections or click back to return home. For captivating content,
                visit our website's main page, where a world of exciting
                discoveries and valuable information awaits your curiosity.
                Happy exploring!
              </p>
              <ul className="d-flex flex-wrap gap-3 pt-4 justify-content-center pt-3 pt-md-5 pb-2">
                <li>
                  <NioButton
                    href="/"
                    className="btn-primary"
                    label="Go Back Home"
                  />
                </li>
                <li>
                  <NioButton
                    href="/"
                    className="btn-outline-primary"
                    label="Try Again"
                  />
                </li>
              </ul>
              <hr className="mt-md-6" />
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md="6">
              <NioCard className="bg-primary-soft border-0 h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="primary"
                    icon="help-fill"
                  />
                  <div>
                    <h5>Read the FAQs</h5>
                    <p className="fs-7 mb-0">
                      For quick solutions and valuable information, browse
                      through our FAQs{" "}
                      <span className="fw-semibold">
                        (Frequently Asked Questions){" "}
                      </span>{" "}
                      to find answers to common queries and gain insights about
                      our services or products.
                    </p>
                  </div>
                  <NioButton
                    href="/help-center"
                    className="btn-link"
                    icon="arrow-right after"
                    label="Read FAQS"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6">
              <NioCard className="bg-green-soft border-0 h-100 rounded-2">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia
                    size="lg"
                    rounded="circle"
                    variant="green"
                    icon="account-setting"
                  />
                  <div>
                    <h5>Help &amp; Support</h5>
                    <p className="fs-7 mb-0">
                      For comprehensive help and support, explore our resources
                      and reach out to our dedicated team for prompt assistance
                      with any inquiries, troubleshooting, or guidance related
                      to our services or products.
                    </p>
                  </div>
                  <NioButton
                    href="/help-center"
                    className="btn-link text-lowercase"
                    icon="arrow-right after"
                    label="help@nioland.com"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      <NioSection className="pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom border-lighter">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-7">
                Join the 5000+ People That Uses Softnio Products.
              </p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="5">
            <NioSubscribeField />
          </Col>
        </Row>
      </NioSection>
    </AppLayout>
  );
}

export default index;
