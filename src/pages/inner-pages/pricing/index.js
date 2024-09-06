import React from 'react';
import { Col, Row } from 'react-bootstrap';

// layouts 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioSection, NioBadge, NioButton, NioIcon, NioMedia, NioSubscribeField } from '../../../components';

function index() {
  return (
    <AppLayout title="Pricing">

      {/*  Pricing Section Start  */}
      <NioSection className="pt-120 pt-lg-160">
        <div>
          <NioSection.Head alignX="center">
            <span className="nl-section-subtitle mb-2" >Pricing &amp; Plans</span>
            <h2 className="nl-section-title">Choose The Perfect Plan</h2>
            <p className="mb-0" >Discover the ideal plan that suits your needs and unlocks all the features and benefits we offer.</p>
            <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center pt-5">
              <li>
                <NioButton href="/features" className="btn-primary" label="Explore All Features" />
              </li>
              <li>
                <NioButton href="/contact-us" className="btn-outline-primary" label="Contact Support" />
              </li>
            </ul>
          </NioSection.Head>
          <NioSection.Content>
            <Row className="gy-5">
              <Col md="6" lg={{ span: 4, order: 2 }} >
                <div className="nl-pricing nl-pricing-s3 mb-5 border p-5 h-100 active">
                  <div className="nl-pricing-head mb-3 mb-md-4">
                    <div className="nl-pricing-title-group mb-2">
                      <h4 className="mb-0">Growth</h4>
                      <NioBadge
                        rounded
                        size="md"
                        label="Popular"
                        icon="star-fill"
                        className="text-bg-white text-primary" />
                    </div>
                    <p className="fs-6">Growth signifies progress and expansion in various aspects.</p>
                  </div>

                  <div className="nl-pricing-body">
                    <ul className="nl-list-link">
                      <li className="active">
                        <NioIcon name="check-circle-fill me-1" />
                        <span className="fs-6">Everything on Startup plan</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle-fill me-1" />
                        <span className="fs-6">Unlimited saved reports &amp; cohorts</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle-fill me-1" />
                        <span className="fs-6">Impact report with causal inference</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle-fill me-1" />
                        <span className="fs-6">Data modeling</span>
                      </li>
                    </ul>
                    <div className="nl-month-amount amount-wrap pt-4 mt-auto">
                      <span className="amount h3 mb-0">$199.00 USD</span>
                      <span className="amount-text opacity-75">/month</span>
                    </div>

                    <div className="pt-4">
                      <NioButton href="#" className="btn-block btn-outline-primary text-dark" label="Get Started" />
                    </div>
                  </div>

                </div>
              </Col>
              <Col md="6" lg={{ span: 4, order: 1 }} >
                <div className="nl-pricing nl-pricing-s3 mb-5 border border-lighter p-5 h-100">
                  <div className="nl-pricing-head mb-3 mb-md-4">
                    <div className="nl-pricing-title-group mb-2">
                      <h4 className="mb-0">Startup</h4>
                    </div>
                    <p className="fs-6">Launching a new business venture or company.</p>
                  </div>

                  <div className="nl-pricing-body">
                    <ul className="nl-list-link">
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">Unlimited data history &amp; seats</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">Core reports including Flows</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">Data dictionary</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">Monitoring &amp; alerts</span>
                      </li>
                    </ul>
                    <div className="nl-month-amount amount-wrap pt-4 mt-auto">
                      <span className="amount h3 mb-0">$99.00 USD</span>
                      <span className="amount-text opacity-75">/month</span>
                    </div>

                    <div className="pt-4">
                      <NioButton href="#" className="btn-block btn-outline-primary" label="Start Now" />
                    </div>
                  </div>

                </div>
              </Col>
              <Col md="6" lg={{ span: 4, order: 3 }} >
                <div className="nl-pricing nl-pricing-s3 mb-5 border border-lighter p-5 h-100">
                  <div className="nl-pricing-head mb-3 mb-md-4">
                    <div className="nl-pricing-title-group mb-2">
                      <h4 className="mb-0">Enterprise</h4>
                    </div>
                    <p className="fs-6">
                      Enterprise denotes a large-scale organization or business entity.
                    </p>
                  </div>

                  <div className="nl-pricing-body">
                    <ul className="nl-list-link">
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">Everything on Growth Plan</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">Advanced access controls</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">Experiments &amp; Signal reports</span>
                      </li>
                      <li className="active">
                        <NioIcon name="check-circle text-primary" className="me-1" />
                        <span className="fs-6 text-dark">SSO &amp; automated provisioning</span>
                      </li>
                    </ul>
                    <div className="nl-month-amount amount-wrap pt-4 mt-auto">
                      <span className="amount h3 mb-0">$399.00 USD</span>
                      <span className="amount-tex opacity-75">/month</span>
                    </div>

                    <div className="pt-4">
                      <NioButton href="#" className="btn-block btn-outline-primary" label="Contact Sales" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </NioSection.Content>
        </div>
      </NioSection>
      {/*  Pricing Section Start  */}

      {/*  Compare-Plans Section Start  */}
      <NioSection className="pt-7 pt-lg-120" masks={["blur-1 right bottom"]}>
        <div>
          <NioSection.Head alignX="center">
            <span className="nl-section-subtitle mb-2">Compare plans</span>
            <h2 className="nl-section-title">Grow Your Early Stage Startup</h2>
            <p>Unlock the full potential of your early-stage startup with our tailored solutions and expert guidance to drive growth and success.</p>
          </NioSection.Head>
          <NioSection.Content>
            <div className="nl-compare table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="nl-compare-col lg empty-col"></th>
                    <th className="nl-compare-col empty-col center">
                      <div className="nl-compare-content">
                        <div className="fs-8 text-uppercase fw-semibold text-gray-700 mb-3 ">Startup</div>
                        <div className="amount h3 mb-4">$99</div>
                        <NioButton href="#" className="btn-outline-primary text-nowrap" label=" Get Started" />
                      </div>
                    </th>
                    <th className="nl-compare-col active empty-col center">
                      <div className="nl-compare-content">
                        <div className="fs-8 text-uppercase fw-semibold text-gray-700 mb-3 ">Growth</div>
                        <div className="amount h3 mb-4">$199</div>
                        <NioButton href="#" className="btn-primary text-nowrap" label=" Get Started" />
                      </div>
                    </th>
                    <th className="nl-compare-col empty-col center">
                      <div className="nl-compare-content">
                        <div className="fs-8 text-uppercase fw-semibold text-gray-700 mb-3 ">Enterprise</div>
                        <div className="amount h3 mb-4">$399</div>
                        <NioButton href="#" className="btn-outline-primary text-nowrap" label=" Get Started" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <h4 >Analytics</h4>
                      </div>
                    </td>
                    <td className="nl-compare-col"></td>
                    <td className="nl-compare-col active"></td>
                    <td className="nl-compare-col"></td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Real-time analytics</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col active center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle-fill" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Individual user analytics</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col active center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle-fill" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Behaviour analytics</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center"></td>
                    <td className="nl-compare-col active center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle-fill" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col empty-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Data Predictions</p>
                      </div>
                    </td>
                    <td className="nl-compare-col empty-col center"></td>
                    <td className="nl-compare-col empty-col active center"></td>
                    <td className="nl-compare-col empty-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <h4 >Reporting</h4>
                      </div>
                    </td>
                    <td className="nl-compare-col"></td>
                    <td className="nl-compare-col active"></td>
                    <td className="nl-compare-col"></td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Daily reports</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col active center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle-fill" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Weekly reports</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center"></td>
                    <td className="nl-compare-col active center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle-fill" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Monthly reports</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center"></td>
                    <td className="nl-compare-col active center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle-fill" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col empty-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Custom reports</p>
                      </div>
                    </td>
                    <td className="nl-compare-col empty-col center"></td>
                    <td className="nl-compare-col empty-col active center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle-fill" className="text-primary fs-4" />
                      </div>
                    </td>
                    <td className="nl-compare-col empty-col center"></td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <h4 >Security &amp; Privacy</h4>
                      </div>
                    </td>
                    <td className="nl-compare-col"></td>
                    <td className="nl-compare-col active"></td>
                    <td className="nl-compare-col"></td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Two-Factor authentication</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center"></td>
                    <td className="nl-compare-col active center"></td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">SAML-based single sign-on SS</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center"></td>
                    <td className="nl-compare-col active center"></td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">Complience</p>
                      </div>
                    </td>
                    <td className="nl-compare-col center"></td>
                    <td className="nl-compare-col active center"></td>
                    <td className="nl-compare-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="nl-compare-col empty-col lg">
                      <div className="nl-compare-content">
                        <p className="fs-6 mb-0 text-nowrap text-gray-700">CCPA complient processing</p>
                      </div>
                    </td>
                    <td className="nl-compare-col empty-col center"></td>
                    <td className="nl-compare-col empty-col active center"></td>
                    <td className="nl-compare-col empty-col center">
                      <div className="nl-compare-content">
                        <NioIcon  name="check-circle" className="text-primary fs-4" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </NioSection.Content>
        </div>
      </NioSection>
      {/*  Compare-Plans Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="bg-primary-gradient rounded-3  p-5 p-lg-7" >
            <Row className="gy-5 align-items-center">
              <Col lg="8">
                <div className="d-flex flex-column gap-3 flex-lg-row align-items-center">
                  <NioMedia size="xl" rounded="circle" variant="white" icon="chat-fill text-primary" />
                  <div className="text-center text-lg-start">
                    <h3 className="text-white text-capitalize m-0">Need a custom plan?</h3>
                    <p className="fs-7 mb-0 text-white opacity-75">We provide top notch custom solution for businesses to get started.</p>
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