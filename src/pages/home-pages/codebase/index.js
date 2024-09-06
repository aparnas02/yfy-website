import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioSection, NioMedia, NioCard } from '../../../components';

// section content 
import TestimonialContent from '../../../components/PageComponents/Homepages/Codebase/TestimonialContent/TestimonialContent';

function index() {
  return (
    <AppLayout title="Codebase IDE" footerVariant={4} layoutClass="18">

      {/*  Banner Section Start   */}
      <section className="nl-section nl-banner nl-banner-codebase">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="justify-content-center align-items-center">
              <Col lg="8">
                <div className="text-center pb-5 pb-lg-7">
                  <span className="nl-section-subtitle mb-2">code anywhere</span>
                  <h1 className="text-capitalize display-3 mb-2">Write better code, collaboratively </h1>
                  <p className="text-dark mb-0"> Collaborate and write better code with ease using our powerful coding platform. Enhance productivity, share ideas, and build exceptional software together. </p>
                  <ul className="d-flex flex-wrap align-items-center gap-1 gap-sm-2 justify-content-center pt-5"  >
                    <li>
                      <NioButton href="#" label="Get started for free" className="btn-dark align-items-center" />
                    </li>
                    <li>
                      <NioButton
                        href="#"
                        label="Book A Demo"
                        icon="arrow-right-circle after"
                        className="btn-outline-dark"
                      />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="10">
                <div className="nl-frame"  >
                  <img src="images/codebase/banner-cover-1.png" alt="banner-cover" />
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/codebase/banner-cover-1-a.png" alt="banner-cover-a" className="animate animate-shakeY animate-duration-12" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-two">
                    <img src="images/codebase/banner-cover-1-b.png" alt="banner-cover-a" className="animate animate-shakeY animate-duration-12 animate-delay-1" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/* Features Section Start */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col xl="10" xxl="8">
              <h5 className="text-center text-gray-700 fw-normal mb-5">over <span className="text-dark fw-semibold">32K+ software</span> business growing with NioLand</h5>
              <Row className="gy-2 gap-sm-2 justify-content-center text-center align-items-center">
                {
                  ["a", "b", "c", "d", "e"].map((brand, idx) => (
                    <Col key={idx} xs="4" sm="3" lg="2">
                      <div className="nl-brand"  >
                        <img src={`images/brands/${brand}.png`} alt="" className="opacity-75" />
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Features Section End */}


      {/* Works Section Start */}
      <NioSection className="bg-gray">
        <NioSection.Head alignX="center">
              <span className="nl-section-subtitle mb-2">how it works?</span>
              <h2 className="nl-section-title">Works perfectly with your language</h2>
              <p> Our platform seamlessly integrates with your preferred programming language, enabling you to write code effortlessly and efficiently. </p>
        </NioSection.Head>
        <NioSection.Content>
          <Tab.Container defaultActiveKey="0">
            <Row className="nl-tab style-1  flex-row-reverse align-items-center justify-content-between">
              <Col lg="6">
                <div className="nl-frame nl-frame-15 overflow-hidden text-end mb-5 mb-md-7 mb-xl-0">
                  <img src="images/codebase/section-cover-1.png" alt="section-cover" />
                  <div className="nl-frame-children nl-frame-children-one">
                  <Tab.Content>
                    <Tab.Pane eventKey="0">
                    <img src="images/codebase/section-cover-1-a.png" alt="section-cover"  />
                    </Tab.Pane>
                    <Tab.Pane eventKey="1">
                    <img src="images/codebase/section-cover-1-b.png" alt="section-cover"  />
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                    <img src="images/codebase/section-cover-1-c.png" alt="section-cover"  />
                    </Tab.Pane>
                  </Tab.Content>  
                  </div>
                </div>
              </Col>
              <Col lg="6" xl="5">
                <Nav as="ul" className="d-flex flex-row flex-sm-column gap gy-3 gy-lg-4">
                  <Nav.Item as="li">
                    <Nav.Link eventKey="0">
                          <NioCard className="border-0 rounded-4">
                            <NioCard.Body className="d-flex flex-wrap flex-lg-nowrap gap-3">
                              <div>
                                  <NioMedia
                                    border
                                    size="xl"
                                    icon="html5 fs-3"
                                    rounded="circle"
                                  />
                              </div>
                              <div>
                                  <h4>HTML</h4>
                                  <p className="fs-7 mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at urna eu egestas diam, dolor iaculis adipiscing. </p>
                              </div>
                            </NioCard.Body>
                          </NioCard>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="1">
                          <NioCard className="border-0 rounded-4">
                            <NioCard.Body className="d-flex flex-wrap flex-lg-nowrap gap-3">
                              <div>
                                  <NioMedia
                                    border
                                    size="xl"
                                    icon="css3-fill fs-3"
                                    rounded="circle"
                                  />
                              </div>
                              <div>
                                  <h4>CSS</h4>
                                  <p className="fs-7 mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at urna eu egestas diam, dolor iaculis adipiscing. </p>
                              </div>
                            </NioCard.Body>
                          </NioCard>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link eventKey="2">
                          <NioCard className="border-0 rounded-4">
                            <NioCard.Body className="d-flex flex-wrap flex-lg-nowrap gap-3">
                              <div>
                                  <NioMedia
                                    border
                                    size="xl"
                                    icon="js fs-3"
                                    rounded="circle"
                                  />
                              </div>
                              <div>
                                  <h4>JS</h4>
                                  <p className="fs-7 mb-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae at urna eu egestas diam, dolor iaculis adipiscing. </p>
                              </div>
                            </NioCard.Body>
                          </NioCard>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
        </NioSection.Content>

      </NioSection>
      {/* Works Section End */}

      {/* Works Section Start */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Content>
          <Row className="align-items-center justify-content-between gy-7 gy-lg-0">
            <Col lg="6">
              <div className="nl-frame nl-frame-16 mb-md-7 mb-lg-0">
                <img src="images/codebase/section-cover-2.png" alt="section-cover" />
                <div className="nl-frame-children nl-frame-children-one d-none d-md-block">
                  <img src="images/codebase/section-cover-2-a.png" alt="section-cover" />
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div>
                <h2 className="pb-5 pb-lg-7 text-capitalize"> Codely works and refresh the code in real time for everyone</h2>
                <ul className="d-flex flex-column gap-5">
                  <li className="d-flex gap-3">
                    <NioMedia size="lg" rounded="circle" variant="dark" icon="users-fill" className="mb-4" />
                    <div>
                      <h5>Upto 100 collaborators</h5>
                      <p className="fs-7 "> Aliquam vestibulum morbi blandit cursus risus atomol ultrices proin gravida hendrerit lectusa. </p>
                    </div>
                  </li>
                  <li className="d-flex gap-3">
                    <NioMedia size="lg" rounded="circle" variant="dark" icon="setting-fill" className="mb-4" />
                    <div>
                      <h5>Works on any platform</h5>
                      <p className="fs-7 "> Aliquam vestibulum morbi blandit cursus risus atomol ultrices proin gravida hendrerit lectusa. </p>
                    </div>
                  </li>
                </ul>
                <ul className="d-flex flex-wrap align-items-center gap-2 pt-5 pt-lg-7">
                  <li>
                    <NioButton href="#" label="Get started for free" className="btn-primary align-items-center" />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      label="Book A Demo"
                      icon="arrow-right-circle after"
                      className="btn-outline-dark border-0"
                    />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Works Section End */}

      {/* Integrations Section Start */}
      <section className="nl-section nl-section-integrations pb-lg-4">
        <div className="nl-frame position-static nl-frame-18">
          <div className="nl-frame-children nl-frame-children-right nl-frame-children-right-top">
            <img src="images/codebase/codebase-blur-2-right.png" alt="blur" />
          </div>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="nl-section-head text-center">
                <span className="nl-section-subtitle mb-2">integrations</span>
                <h2 className="nl-section-title"> Integrated with the most popular programming languages </h2>
                <p className="mb-0">Integrated with popular languages for seamless development experience, fostering efficiency and versatility in coding tasks.</p>
                <ul className="d-flex flex-wrap align-items-center gap-2 justify-content-center pt-5 pt-lg-7">
                  <li>
                    <NioButton href="#" label="Get started for free" className="btn-dark  align-items-center" />
                  </li>
                  <li>
                    <NioButton
                      href="#"
                      icon="arrow-right-circle after"
                      label="Browse Integrations"
                      className="btn-outline-dark border-0" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs="12">
              <div className="nl-frame text-center">
                <img src="images/codebase/section-cover-3.png" alt="integrations-tools" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Integrations Section End */}

      {/* Features Section Start */}
      <NioSection>
        <NioSection.Content >
        <NioCard className="bg-dark rounded-4 border-0 overflow-hidden" >
          <div className="nl-mask blur-11"></div>
          <NioCard.Body className="p-md-7 p-lg-120">
            <Row className="justify-content-center gy-7">
              <Col lg="12">
                <Row className="justify-content-center">
                  <Col lg="8">
                    <div className="nl-section-head text-center pb-0">
                      <h2 className="display-5 text-primary mb-5">Amazing features for to make your development easier </h2>
                      <ul className="d-flex flex-wrap gap-3 gap-2 justify-content-center">
                        <li>
                          <NioButton
                            href="#"
                            label="Get started for free"
                            className="text-nowrap btn-white align-items-center"
                          />
                        </li>
                        <li>
                          <NioButton
                            href="#"
                            label="Book A Demo"
                            icon="arrow-right-circle after"
                            className="text-nowrap btn-outline-white border-0"
                          />
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xl="4" md="6">
              <div className="d-flex flex-column gap-3 text-center">
                <div className="mb-2">
                  <img src="images/icon/processor.svg" alt="icon" />
                </div>
                <h5 className="text-white m-0">Code Pilot</h5>
                <p className="text-white fs-6 opacity-75"> Lacus sed turpis tincidunt id tincidunt praesent semper feugiat nibh. </p>
              </div>
              </Col>
              <Col xl="4" md="6">
                <div className="d-flex flex-column gap-3 text-center">
                  <div className="mb-2">
                    <img src="images/icon/code-2.svg" alt="icon" />
                  </div>
                  <h5 className="text-white m-0">Over 50+ Languages</h5>
                  <p className="text-white fs-6 opacity-75"> Lacus sed turpis tincidunt id tincidunt praesent semper feugiat nibh. </p>
                </div>
              </Col>
              <Col xl="4" md="6">
                <div className="d-flex flex-column gap-3 text-center">
                  <div className="mb-2">
                    <img src="images/icon/code.svg" alt="icon" />
                  </div>
                  <h5 className="text-white m-0">Available on all platforms</h5>
                  <p className="text-white fs-6 opacity-75"> Lacus sed turpis tincidunt id tincidunt praesent semper feugiat nibh. </p>
                </div>
              </Col>
              <Col xl="4" md="6">
                <div className="d-flex flex-column gap-3 text-center">
                  <div className="mb-2">
                    <img src="images/icon/watch.svg" alt="icon" />
                  </div>
                  <h5 className="text-white m-0">Real-time code save</h5>
                  <p className="text-white fs-6 opacity-75"> Lacus sed turpis tincidunt id tincidunt praesent semper feugiat nibh. </p>
                </div>
              </Col>
              <Col xl="4" md="6">
                <div className="d-flex flex-column gap-3 text-center">
                  <div className="mb-2">
                    <img src="images/icon/bug.svg" alt="icon" />
                  </div>
                  <h5 className="text-white m-0">Built-in code debugger</h5>
                  <p className="text-white fs-6 opacity-75"> Lacus sed turpis tincidunt id tincidunt praesent semper feugiat nibh. </p>
                </div>
              </Col>
              <Col xl="4" md="6">
                <div className="d-flex flex-column gap-3 text-center">
                  <div className="mb-2">
                    <img src="images/icon/unlock.svg" alt="icon" />
                  </div>
                  <h5 className="text-white m-0">Granular permissions</h5>
                  <p className="text-white fs-6 opacity-75"> Lacus sed turpis tincidunt id tincidunt praesent semper feugiat nibh. </p>
                </div>
              </Col>
            </Row>
          </NioCard.Body>
        </NioCard>
        </NioSection.Content>
      </NioSection>
      {/* Features Section End */}

      {/* Testimonials Section Start */}
      <section className="nl-section nl-section-testimonials">
        <div className="nl-frame position-static nl-frame-18">
          <div className="nl-frame-children nl-frame-children-left nl-frame-children-left-bottom">
            <img src="images/codebase/codebase-blur-2-left.png" alt="blur" />
          </div>
          <div className="nl-frame-children nl-frame-children-right nl-frame-children-right-top">
            <img src="images/codebase/codebase-blur-2-right.png" alt="blur" />
          </div>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="nl-section-head text-center">
                <span className="nl-section-subtitle mb-2">customer reviews</span>
                <h2 className="nl-section-title">What our amazing customers <br className="d-none d-lg-block" /> say about Codely </h2>
                <p className="mb-0">Our customers rave about Codely's user-friendly interface and robust features, making coding a breeze!.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xl="8">
              <TestimonialContent />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Testimonials Section End */}

      {/* Blogs Section Start */}
      <section className="nl-section nl-section-blogs bg-gray">
        <div className="nl-frame position-static nl-frame-18">
          <div className="nl-frame-children nl-frame-children-right nl-frame-children-right-top">
            <img src="images/codebase/codebase-blur-2-right.png" alt="blur" />
          </div>
        </div>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" xxl="6">
              <div className="nl-section-head text-center">
                <span className="nl-section-subtitle mb-2">Our Blogs</span>
                <h2 className="nl-section-title"> Browse our latest news and resources </h2>
                <p className="mb-0">Explore our newest updates and valuable resources for insights, tutorials, and industry news.</p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-xl-center gy-5 gy-xl-0">
            <Col xl="4" md="6"  >
              <NioCard className="h-100 bg-white border-0 rounded-4">
                <NioCard.Body>
                  <div className="mb-5">
                    <Link to="#">
                      <img src="images/codebase/card-cover-1.png" alt="card-cover" className="w-100" />
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <h4 className="m-0">Code refactoring best practices: how to do it?</h4>
                    </Link>
                    <div className="pt-5">
                      <span className="text-uppercase fs-6 ">January 19, 2022</span>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="4" md="6"  >
              <NioCard className="h-100 bg-white border-0 rounded-4">
                <NioCard.Body>
                  <div className="mb-5">
                    <Link to="#">
                      <img src="images/codebase/card-cover-2.png" alt="card-cover" className="w-100" />
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <h4 className="m-0">7 programming language you should pay attention in 2022</h4>
                    </Link>
                    <div className="pt-5">
                      <span className="text-uppercase fs-6 ">April 23, 2022</span>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="4" md="6"  >
              <NioCard className="h-100 bg-white border-0 rounded-4">
                <NioCard.Body>
                  <div className="mb-5">
                    <Link to="#">
                      <img src="images/codebase/card-cover-3.png" alt="card-cover" className="w-100" />
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <h4 className="m-0">Discover all the new features available in v2.0</h4>
                    </Link>
                    <div className="pt-5">
                      <span className="text-uppercase fs-6 ">Feburary 12, 2022</span>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xs="12">
              <div className="text-center pt-lg-7">
                <NioButton href="#" label="Browse All Articles" className="btn-dark" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Blogs Section End */}


      {/* CTA Section Start */}
      <section className="nl-section overflow-hidden pt-7 pt-lg-120 pb-0 bg-gradient-27">
        <div className="container">
          <Row className="row justify-content-center">
            <Col lg="8" xxl="6">
              <div className="nl-section-head text-center">
                <span className="nl-section-subtitle mb-2">Get started</span>
                <h2 className="nl-section-title">Try the code editor of the future, today.</h2>
                <p className="pb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit mauris vulputate dui vitae commodo magna vitae.</p>
                <ul className="d-flex flex-wrap align-items-center gap-2 justify-content-center pt-5">
                  <li>
                    <NioButton href="#" label="Get started for free" className="btn-dark align-items-center" />
                  </li>
                  <li>
                    <NioButton className="btn-outline-dark border-0" icon="arrow-right-circle after ms-1" label="Book A Demo" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="nl-frame text-center nl-frame-17 mb-n1 mb-xl-n0">
                <img src="/images/codebase/section-cover-4.png" alt="section-cover" />
                <div className="nl-frame-children nl-frame-children-one animate animate-shakeY animate-duration-12 animate-delay-1 d-none d-xl-block" >
                  <img src="/images/codebase/section-cover-4-a.png" alt="cover-frame-children" />
                </div>
                <div className="nl-frame-children nl-frame-children-two animate animate-shakeY animate-duration-12 d-none d-xl-block">
                  <img src="/images/codebase/section-cover-4-b.png" alt="cover-frame-children" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* CTA Section End */}

    </AppLayout >
  )
}

export default index;