import React from 'react';
import { Col, Row } from 'react-bootstrap';

// layouts 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioIcon, NioBrand, NioButton, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/InnerPages/PricingSolution/FaqContent/FaqContent';

function index() {
  return (
    <AppLayout title="Pricing" layoutClass="6">

      {/*  Banner Section Start   */}
      <NioSection className="nl-banner-wrap nl-banner-business-feature pb-lg-120 " masks={["shape-36"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2" >pricing</span>
          <h2 className="text-white" > Pricing built to suit <span className="text-primary d-inline-block d-xl-block">your needs</span>
          </h2>
        </NioSection.Head>
        <NioSection.Content className="position-relative z-1">
          <Row className="align-items-center">
            <Col xs={{ order: 2 }} md="6" xl={{ span: 4, order: 0 }} >
              <div className="card-pricing mb-5 mb-xl-0">
                <div className="card-pricing-heading">
                  <div className="icon">
                    <img src="images/icon/thundar.png" alt="icon" />
                  </div>
                  <div className="info">
                    <h3>Standard</h3>
                    <span >For the beginners</span>
                  </div>
                </div>
                <div className="card-pricing-content">
                  <div className="price-tag"> $24 <span >/user</span></div>
                  <ul className="card-pricing-info">
                    <li>
                      <p>20 Asset Delivery</p>
                    </li>
                    <li>
                      <p>Unlimited Bandwidth</p>
                    </li>
                    <li>
                      <p className="mute ">Support System</p>
                    </li>
                    <li>
                      <p className="mute ">120+ Message all Operator</p>
                    </li>
                  </ul>
                  <div className="card-pricing-action">
                    <NioButton href="#" className="btn-outline-primary w-100" label="Choose Plan" icon="arrow-right after" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={{ order: 1 }} xl={{ span: 4, order: 0 }} >
              <div className="card-pricing border border-primary card-pricing-lg mb-5 mb-xl-0">
                <div className="card-pricing-heading">
                  <div className="icon">
                    <img src="images/icon/crown.png" alt="icon" />
                  </div>
                  <div className="info">
                    <h3>Pro Business</h3>
                    <span >For the professionals</span>
                  </div>
                </div>
                <div className="card-pricing-content">
                  <div className="price-tag text-primary"> $28 <span >/user</span></div>
                  <ul className="card-pricing-info">
                    <li>
                      <p>20 Asset Delivery</p>
                    </li>
                    <li>
                      <p>Unlimited Bandwidth</p>
                    </li>
                    <li>
                      <p>Support System</p>
                    </li>
                    <li>
                      <p className="mute ">120+ Message all Operator</p>
                    </li>
                  </ul>
                  <div className="card-pricing-action">
                    <NioButton href="#" className="btn-primary w-100" label="Choose Plan" icon="arrow-right after" />
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={{ order: 3 }} md="6" xl={{ span: 4, order: 0 }} className="col-md-6 col-xl-4 order-3 order-xl-0" >
              <div className="card-pricing mb-5 mb-xl-0">
                <div className="card-pricing-heading">
                  <div className="icon">
                    <img src="images/icon/cup.png" alt="icon" />
                  </div>
                  <div className="info">
                    <h3>Standard</h3>
                    <span >For the beginners</span>
                  </div>
                </div>
                <div className="card-pricing-content">
                  <div className="price-tag"> $35 <span >/user</span></div>
                  <ul className="card-pricing-info">
                    <li>
                      <p>20 Asset Delivery</p>
                    </li>
                    <li>
                      <p>Unlimited Bandwidth</p>
                    </li>
                    <li>
                      <p>Support System</p>
                    </li>
                    <li>
                      <p>120+ Message all Operator</p>
                    </li>
                  </ul>
                  <div className="card-pricing-action">
                    <NioButton href="#" className="btn-outline-primary w-100" label="Choose Plan" icon="arrow-right after" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Banner Section End   */}

      {/*  Pricing Section Start   */}
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Real-time analytics</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Individual user analytics</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Behaviour analytics</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Data Predictions</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Daily reports</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Weekly reports</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Monthly reports</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Custom reports</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Two-Factor authentication</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">SAML-based single sign-on SS</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">Complience</p>
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
                        <p className="fs-6 mb-0 text-gray-700 text-nowrap">CCPA complient processing</p>
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
      {/*  Pricing Section End   */}

      {/*  faq Section Start   */}
      <NioSection>
        <NioSection.Content>
          <Row className="justify-content-between align-items-center">
            <Col lg="5" xl="4">
              <div className="nl-section-head pb-lg-0 mt-xl-n6 text-center text-lg-start">
                <span className="nl-section-subtitle mb-3">FAQs</span>
                <h2 className="nl-section-title">Frequently Asked Questions</h2>
                <p className="mb-0">Find answers to commonly asked questions about our product or service in our comprehensive FAQ section.</p>
                <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center justify-content-lg-start pt-5 pt-lg-6">
                  <li>
                    <NioButton href="/help-center" className="btn-primary" label="Go To Support Center" />
                  </li>
                  <li>
                    <NioButton href="/contact-us-solution" className="btn-outline-primary" label="Contct Us" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="7" xl="8">
              <FaqContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  faq Section End   */}

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