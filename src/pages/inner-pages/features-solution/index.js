import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioBrand, NioButton, NioCard, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/InnerPages/FeaturesSolution/FaqContent/FaqContent';

function index() {
  return (
    <AppLayout title="Features" layoutClass="6">

      {/*  Banner Section Start   */}
      <section className="nl-section nl-banner-wrap nl-banner-business-feature pb-lg-120">
        <div className="nl-mask shape-34"  ></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6" xl="10">
              <div className="nl-banner-business-feature-content text-center ">
                <div className="nl-section-head pb-0">
                  <span className="nl-section-subtitle mb-3">Features</span>
                  <h2 className="text-capitalize text-white mb-0">Amazing features to Build <br className="d-none d-lg-block" /> Modern
                    <span className="text-primary"> Business Solutions.</span>
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> 
      {/*  Banner Section End */}

      {/*  Brand Section Start   */}
      <NioSection className="bg-gray pb-lg-5 pt-lg-7">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <div className="nl-block-head text-center sm">
                <h6 className="h6 text-gray-700 fw-normal">More than <span className="text-dark fw-semibold">1000,000+</span> teams are using NioLand</h6>
              </div>
              <Row className="justify-content-center justify-content-lg-between text-center gap g-4">
                {
                  ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                    <Col key={idx} xs="4" sm="3" lg="2">
                      <div className="nl-brand w-100 h-60">
                        <Link to="#">
                          <img src={`images/brands/${brand}.png`} alt="brand-logo" />
                        </Link>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Brand Section End    */}

      {/*  Analytics Section Start   */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center justify-content-xl-between align-items-xl-end pb-5 pb-md-7 ">
            <Col md="8" xl="5">
              <div className="nl-section-head text-center text-xl-start pb-5 pb-xl-0">
                <span className="nl-section-subtitle mb-3">Category 1</span>
                <h2 className="nl-section-title">Custom Analytics</h2>
                <p>Unlock valuable insights and make decisions with our custom analytics solutions to your business needs.</p>
              </div>
            </Col>
            <Col xl="6">
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-xl-end">
                <li>
                  <NioButton href="#" className="btn-primary" label="Request A Demo" />
                </li>
                <li>
                  <NioButton href="/pricing-solution" className="btn-outline-primary" label="See Pricing" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col md="6" lg="4" >
              <NioCard className="bg-transparent border-0 h-100">
                <div className="card-img-top border rounded-4 bg-gray-400">
                  <img src="images/blog/card-cover-6.png" alt="cover-img" className="img-fluid" />
                </div>
                <NioCard.Body className="px-0 pt-4">
                  <h4>Automatic Invoice Payment</h4>
                  <p className="fs-7 mb-0">We provide automatic invoice payment service. Set a payment schedule and you're done, it's that easy!</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="bg-transparent border-0 h-100">
                <div className="card-img-top border rounded-4 bg-gray-400">
                  <img src="images/blog/card-cover-1.png" alt="cover-img" className="img-fluid" />
                </div>
                <NioCard.Body className="px-0 pt-4">
                  <h4>Clear payment history</h4>
                  <p className="fs-7 mb-0">Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="bg-transparent border-0 h-100">
                <div className="card-img-top border rounded-4 bg-gray-400">
                  <img src="images/blog/card-cover-2.png" alt="cover-img" className="img-fluid" />
                </div>
                <NioCard.Body className="px-0 pt-4">
                  <h4>Use of multi-card payments</h4>
                  <p className="fs-7 mb-0">Our platform is already integrated with many banks around the world, for easier payments!</p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Analytics Section End    */}

      {/*  Performance Section Start   */}
      <NioSection className="bg-primary-soft">
        <NioSection.Content>
          <Row className="pb-5 pb-md-7 justify-content-center justify-content-xl-between align-items-xl-end">
            <Col md="8" xl="5">
              <div className="nl-section-head text-center text-xl-start pb-5 pb-xl-0">
                <span className="nl-section-subtitle mb-3">Category 2</span>
                <h2 className="nl-section-title">Measure Performance</h2>
                <p>Gain visibility into the performance of your business with our comprehensive measurement solutions.</p>
              </div>
            </Col>
            <Col xl="5">
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-xl-end">
                <li>
                  <NioButton href="#" className="btn-primary" label="Request A Demo" />
                </li>
                <li>
                  <NioButton href="/pricing-solution" className="btn-outline-primary" label="See Pricing" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col md="6" lg="4" >
              <NioCard className="bg-transparent border-0 h-100">
                <div className="card-img-top border rounded-4 bg-gray-400">
                  <img src="images/blog/card-cover-3.png" alt="cover-img" className="img-fluid" />
                </div>
                <NioCard.Body className="px-0 pt-4">
                  <h4>Setup Collaboration Metrics</h4>
                  <p className="fs-7 mb-0">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa just.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="bg-transparent border-0 h-100">
                <div className="card-img-top border rounded-4 bg-gray-400">
                  <img src="images/blog/card-cover-4.png" alt="cover-img" className="img-fluid" />
                </div>
                <NioCard.Body className="px-0 pt-4">
                  <h4>Track Development Progress</h4>
                  <p className="fs-7 mb-0">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa just.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="bg-transparent border-0 h-100">
                <div className="card-img-top border rounded-4 bg-gray-400">
                  <img src="images/blog/card-cover-5.png" alt="cover-img" className="img-fluid" />
                </div>
                <NioCard.Body className="px-0 pt-4">
                  <h4>Identify Project Backlog</h4>
                  <p className="fs-7 mb-0">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa just.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Performance Section End    */}

      {/*  Tools Section Start   */}
      <NioSection className="overflow-hidden bg-primary-soft" masks={["shape-35 d-none d-xl-block"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-3">More features</span>
          <h2 className="mb-0">All the tools you need to grow your business</h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="cyan-600" icon="files-fill" />
                  <div>
                    <h5>Organize Information</h5>
                    <p className="fs-7 mb-0"> Efficiently organize and manage your information with our intuitive tools, helping you streamline workflows, improve collaboration. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="yellow" icon="clock" />
                  <div>
                    <h5>Reduce Work Hours</h5>
                    <p className="fs-7 mb-0"> Optimize your work hours and boost productivity with our streamlined processes and automation tools. </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="indigo-700" icon="sign-mxn" />
                  <div>
                    <h5>Save Expenses</h5>
                    <p className="fs-7 mb-0">Reduce your expenses and save money with our cost-effective solutions and strategies. From optimizing your budget.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="red" icon="users" />
                  <div>
                    <h5>Team Communication</h5>
                    <p className="fs-7 mb-0"> Enhance collaboration and streamline communication within your team with our advanced tools and platforms.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="cyan-500" icon="laptop" />
                  <div>
                    <h5>Remote Flexibility</h5>
                    <p className="fs-7 mb-0">
                      Remote flexibility allows employees to work from different locations, fostering work-life balance and adapting to changing work environments.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="green" icon="layer" />
                  <div>
                    <h5>Simple User Interface</h5>
                    <p className="fs-7 mb-0">A simple user interface offers an intuitive and uncomplicated design, enhancing user experience by making interactions and navigation.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-0 h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="blue" icon="shield-check" />
                  <div>
                    <h5>Data Security</h5>
                    <p className="fs-7 mb-0">We prioritize the security of your data. With robust encryption protocols, regular backups, and strict access controls</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-transparent border-0 h-100 rounded-3" >
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="purple" icon="growth" />
                  <div>
                    <h5>Progress Tracking</h5>
                    <p className="fs-7 mb-0"> Track your progress with ease. Our platform provides comprehensive tools and features to monitor your performance, set goals, and track.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" >
              <NioCard className="border-transparent border-0 h-100 rounded-3" >
                <NioCard.Body className="d-flex flex-column gap-5">
                  <NioMedia size="lg" rounded="circle" variant="indigo" icon="help" />
                  <div>
                    <h5>Customer Support</h5>
                    <p className="fs-7 mb-0">
                      We prioritize exceptional customer support. Our dedicated team is available 24/7 to assist you with any inquiries, technical issues.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Tools Section End    */}

      {/*  faq Section Start   */}
      <NioSection className="pt-7 pt-lg-120">
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
                    <NioButton href="/contact-us-solution" className="btn-outline-primary" label="Contact Us" />
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
      {/*  faq Section End    */}

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



    </AppLayout >
  )
}

export default index;