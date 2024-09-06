import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioButton, NioMedia, NioCount, NioIcon, NioSection, NioCard, NioBrand } from '../../../components';

// section content 
import NioSubscribeField from '../../../components/Forms/NioSubscribeField/NioSubscribeField';
import CallToAction from '../../../components/PageComponents/SectionComponents/CallToAction/CallToAction';

function index() {

  return (
    <AppLayout title="Analytics">

      {/*   Banner Section Start  */}
      <section className="nl-section nl-banner nl-banner-analytics overflow-hidden">
        <div className="nl-mask blur-1 left top"></div>
        <div className="nl-mask blur-1 right bottom"></div>
        <div className="nl-banner-wrap pb-0 pb-md-8 overflow-hidden">
          <Container>
            <Row className="justify-content-center">
              <Col lg="10" xl="8">
                <div className="nl-banner-content text-center">
                  <span className="nl-section-subtitle">All in One analytics tool</span>
                  <h1 className="display-3 mb-2 mb-lg-4">Presenting the next-gen user <span className="title-shape title-shape-1">analytics</span></h1>
                  <p className="fs-5 m-0"> Next-gen user analytics: Gain valuable insights into user behavior and drive data-informed decision-making with our revolutionary platform. </p>
                  <ul className="d-flex flex-wrap gap-3 gap-3 justify-content-center pt-4 pt-md-5" >
                    <li>
                      <NioButton href="/index-analytics" className="btn-primary" label="Get Started" />
                    </li>
                    <li>
                      <NioButton href="/index-analytics" className="btn-outline-primary" label="Learn More" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="9" lg="10" xl="9" >
                <div className="pt-6 mt-md-2 pb-7 pb-md-0">
                  <div className="position-relative nl-banner-img nl-banner-img-s1">
                    <img className="thumb-base border rounded-3" src="images/thumb/a.jpg" alt="thumb-content" />
                    <img className="thumb thumb-1 animate animate-shakeY animate-duration-12" src="images/thumb/a-1.png" alt="thumb-content" />
                    <img className="thumb thumb-2 animate animate-shakeY animate-duration-12 animate-delay-1" src="images/thumb/a-2.png" alt="thumb-content" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End  */}

      {/*  Brand Section Start  */}
      <NioSection>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="10" xl="8">
              <div className="text-center">
                <h6 className="fw-normal text-gray-700 mb-5">Trusted by 10,000+ Companies Around The World</h6>
                <Row className="gy-2 gy-lg-0 align-items-center justify-content-center">
                  {
                    ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                      <Col xs="4" sm="2" key={idx}>
                        <div className="nl-brand">
                          <Link to="#">
                            <img src={`images/brands/${brand}.png`} alt={`brand-${brand}`} />
                          </Link>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Brand Section End  */}

      {/*  Feature Section Start  */}
      <NioSection masks={["blur-1 left top", "blur-1 right bottom"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Features</span>
          <h2 className="nl-section-title">Discover Powerful Features</h2>
          <p className="mb-0">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg="6" >
              <NioCard className="border-0 h-100 bg-primary-soft">
                <NioCard.Body>
                  <div className="nl-feature-block-content">
                    <NioMedia size="lg" variant="primary" rounded="circle" icon="pie-2-fill" className="mb-3 mb-lg-5" />
                    <h4>Advance Analytics</h4>
                    <p className="fs-7 mb-0">Experience advanced analytics capabilities that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights for informed decision-making.</p>
                    <NioButton href="/index-analytics" icon="arrow-right after" className="btn-link mt-2 mt-md-5" label="Learn More" />
                  </div>
                </NioCard.Body>
                <div className="text-start">
                  <img src="images/features/a.png" alt="feature" className="pe-3 pe-md-7" />
                </div>
              </NioCard>
            </Col>
            <Col lg="6" >
              <NioCard className="border-0 h-100 bg-primary-soft">
                <NioCard.Body>
                  <div className="nl-feature-block-content">
                    <NioMedia size="lg" variant="red" rounded="circle" icon="files-fill" />
                    <h4>Automated Reports</h4>
                    <p className="fs-7 mb-0">Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your data analysis and presentation processes.</p>
                    <NioButton href="/index-analytics" icon="arrow-right after" label="Learn More" className="btn-link mt-2 mt-md-5" />
                  </div>
                </NioCard.Body>
                <div className="text-end"  >
                  <img src="images/features/b.png" alt="feature" className="ps-3 ps-md-7" />
                </div>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="border-0 h-100 bg-primary-soft">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia size="lg" variant="warning" rounded="circle" icon="user-switch-fill" />
                  <div>
                    <h4>Retention Report</h4>
                    <p className="fs-7">
                      Enhance retention with our report, maximizing customer engagement and loyalty for business excellence.
                    </p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="border-0 h-100 bg-primary-soft">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia size="lg" variant="red" rounded="circle" icon="tree-structure-fill" />
                  <div>
                    <h4>A/B Test Variants</h4>
                    <p className="fs-7">Efficiently compare A/B test variants to determine the most effective strategies for optimizing conversion.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="border-0 h-100 bg-primary-soft">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <NioMedia size="lg" variant="primary" rounded="circle" icon="puzzle-fill"/>
                  <div>
                    <h4>Integration Directory</h4>
                    <p className="fs-7">Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potential of your workflow.</p>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
          <div className="text-center pt-7">
            <ul className="d-flex flex-wrap gap-3 gap-3 justify-content-center">
              <li>
                <NioButton href="/index-analytics" className="btn-primary" label="Get Started" />
              </li>
              <li>
                <NioButton href="/features" className="btn-outline-primary" label="Explore All Features" />
              </li>
            </ul>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section End  */}

      {/*  Works Section Start  */}
      <NioSection>
        <Row className="justify-content-center" >
          <Col lg="10" xl="8">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle">HOW IT WORKS?</span>
              <h2 className="nl-section-title">Easy Process To Get Started</h2>
              <p className="mb-0">Discover how it works by leveraging advanced algorithms and data analysis techniques.</p>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Tab.Container defaultActiveKey="0">
            <Row className="nl-tab style-1 align-items-center justify-content-between flex-row-reverse">
              <Col lg="6">
                <Tab.Content>
                  <Tab.Pane eventKey="0">
                    <div className="bg-primary-gradient rounded-4 px-4 pt-4 mb-5 mb-lg-0 ms-lg-7 overflow-hidden" >
                      <img src="images/cta/a.png" alt="thumb" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="1">
                    <div className="bg-primary-gradient rounded-4 px-4 pt-4 mb-7 mb-lg-0 ms-lg-7 overflow-hidden" >
                      <img src="images/cta/a-1.png" alt="thumb" />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="2">
                    <div className="bg-primary-gradient rounded-4 px-4 pt-4 mb-7 mb-lg-0 ms-lg-7 overflow-hidden" >
                      <img src="images/cta/a-2.png" alt="thumb" />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col lg="6">
                <Nav as="ul" className="d-flex flex-row flex-sm-column gap gy-5">
                  <Nav.Item as="li">
                    <Nav.Link className='d-flex gap-3 gap-md-5 flex-column flex-sm-row' eventKey="0">
                      <NioMedia
                        border
                        size="lg"
                        rounded="circle"
                        icon="laptop-fill" />
                      <div className="m-0">
                        <h4 className="text-capitalize">Create your account</h4>
                        <p className="fs-7 text-gray-700">Join us now and create your account to start exploring our platform and unlocking exciting features.</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link className='d-flex gap-3 gap-md-5 flex-column flex-sm-row' eventKey="1">
                      <NioMedia
                        border
                        size="lg"
                        rounded="circle"
                        icon="google-play-store" />
                      <div className="m-0">
                        <h4 className="text-capitalize">Install our tracking app</h4>
                        <p className="fs-7 text-gray-700">Install our tracking app to effortlessly monitor and manage your activities, gaining valuable insights and optimizing your performance.</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li">
                    <Nav.Link className='d-flex gap-3 gap-md-5 flex-column flex-sm-row' eventKey="2">
                      <NioMedia
                        border
                        size="lg"
                        rounded="circle"
                        icon="browser-fill" />
                      <div className="m-0">
                        <h4 className="text-capitalize">Start tracking your website</h4>
                        <p className="fs-7 text-gray-700">Start tracking your website effortlessly to gain valuable insights into visitor behavior, performance metrics, and optimization opportunities.</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
          </Tab.Container>
        </NioSection.Content>
      </NioSection>
      {/*  Works Section End  */}

      {/*  Video Section Start  */}
      <NioSection className="nl-video-section" masks={["blur-1 left top", "blur-1 right bottom"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">overview</span>
          <h2 className="nl-section-title">All-In-One Analytics Tool</h2>
          <p className="mb-0">Powerful analytics made easy. Make data-driven decisions with our all-in-one tool.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="nl-video rounded-3 bg-primary-soft">
                <div className="nl-mask shape-1 overflow-hidden rounded-4"></div>
                <div className="nl-video-inner">
                  <div className="nl-video-logo p-4 d-none d-sm-block">
                    <NioBrand logo="s1" variant="dark" />
                  </div>
                  <div className="nl-video-content">
                    <div className="nl-video-img overflow-hidden pt-md-4">
                        <img className="mb-md-n4" src="images/video/a.png" alt="object" />
                    </div>
                    <div className="nl-video-btn">
                      <NioMedia
                        size="xl"
                        rounded="circle"
                        icon="play-fill"
                        variant="primary"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="shadow-sm animate animate-infinite animate-pulse animate-duration-1" />
                    </div>
                  </div>
                </div>

              </div>
              <div className="text-center pt-5 pt-md-7">
                <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center">
                  <li>
                    <NioButton href="/index-analytics" className="btn-primary" label="Get Started" />
                  </li>
                  <li>
                    <NioButton href="/index-analytics" className="btn-outline-primary" label="Learn More" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center justify-content-xxl-between align-items-center pt-5 pt-md-7">
            <Col lg="8" xl="6">
              <div className="nl-section-head pb-xxl-0 text-center text-xl-start">
                <h2 className="mb-0">More Than 1M+ People Around The World Are Already Using</h2>
              </div>
            </Col>
            <Col lg="8" xl="6">
              <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-lg-between text-xxl-end">
                <div className="mb-2 mb-xl-0 text-center text-xl-end">
                  <h3 className="mb-1">
                    <NioCount end="1" suffix="M+" />
                  </h3>
                  <p className="mb-0">Active Downloads</p>
                </div>
                <div className="mb-2 mb-xl-0 text-center text-xl-end">
                  <h3 className="mb-1">
                    <NioCount end={4} suffix=".86" />
                  </h3>
                  <p className="mb-0">Average Rating</p>
                </div>
                <div className="mb-2 mb-xl-0 text-center text-xl-end">
                  <h3 className="mb-1">
                    <NioCount end={60} suffix="K+" />
                  </h3>
                  <p className="mb-0">Active Users</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Video Section End  */}

      {/*  Testimonial Section Start  */}
      <NioSection className="nl-testimonial-section">
        <Row className="justify-content-center">
          <Col lg="8" xxl="4">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle">reviews</span>
              <h2 className="nl-section-title">What Our Customers Are Saying</h2>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="g-3 g-lg-4">
            <Col lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <div>
                    <ul className="d-flex gap-2 align-items-center mb-2">
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                    </ul>
                    <h5 className="mb-3">We’re building a better application now, thanks to NioLand.</h5>
                    <p className="fs-8 line-clamp-3">
                      Our application is undergoing significant improvements with the help of NioLand, resulting in enhanced functionality, improved user experience, and advanced features for a better and more satisfying user journey.
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-0">Wade Warren</h6>
                    <span className="small">3 months ago</span>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <div>
                    <ul className="d-flex gap-2 align-items-center mb-2">
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                    </ul>
                    <h5 className="mb-3">Great Service from a expert support system of NioLand.</h5>
                    <p className="fs-8 line-clamp-3">
                      Experience exceptional service and support from NioLand's expert team, dedicated to providing knowledgeable assistance and ensuring a seamless and satisfying user experience.
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-0">Dianne Russell</h6>
                    <span className="small">3 months ago</span>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column justify-content-between gap-5">
                  <div>
                    <ul className="d-flex gap-2 align-items-center mb-2">
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                      <li>
                        <NioIcon name="star-fill" className="text-warning" />
                      </li>
                    </ul>
                    <h5 className="mb-3">Pricing is amazing for the small businesses around the world.</h5>
                    <p className="fs-8 line-clamp-3">
                      Our pricing is tailored to suit the needs of small businesses worldwide, offering affordable and competitive rates that provide excellent value for money without compromising on quality or service.
                    </p>
                  </div>
                  <div>
                    <h6 className="mb-0">Marvin McKinney</h6>
                    <span className="small">3 months ago</span>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
          <div className="text-center pt-5 pt-lg-7">
            <NioButton href="/customer-testimonials" className="btn-outline-primary" label="See All Reviews" />
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End  */}

      {/*  Blog Section Start  */}
      <NioSection className="nl-section-blog" masks={["blur-1 left top", "blur-1 right bottom"]}>
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle">OUR BLOG</span>
          <h2 className="nl-section-title">Resource Center</h2>
          <p className="mb-0">
            Unlock the potential of our resource center, accessing valuable information and insights for your business growth.
          </p>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5 gy-xl-0">
            <Col md="6" xl="4">
              <NioCard className="card-blog h-100">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/a.jpg" alt="" className="card-img" />
                  </div>
                  <div className="pt-4">
                    <div className="pb-1">
                      <span className="badge rounded-pill text-bg-primary-soft">Growth</span>
                    </div>
                    <Link className="d-inline-block fs-5 text-dark fw-bold" to="/blog-details">Why customer retention is the ultimate growth strategy?</Link>
                    <div className="d-flex align-items-center gap-3 pt-4">
                      <NioMedia img="images/avatar/a.jpg" rounded="circle" />
                      <div>
                        <h6 className="fs-7 mb-0 fw-normal">John Carter</h6>
                        <ul className="nl-list-meta small">
                          <li>Feb 10, 2022</li>
                          <li>8 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4">
              <NioCard className="card-blog h-100">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/b.jpg" alt="" className="card-img" />
                  </div>
                  <div className="pt-4">
                    <div className="pb-1">
                      <span className="badge rounded-pill text-bg-primary-soft">Marketing</span>
                    </div>
                    <Link className="d-inline-block fs-5 text-dark fw-bold" to="/blog-details">Optimizing your advertising campaigns for higher ROAS</Link>
                    <div className="d-flex align-items-center gap-3 pt-4">
                      <NioMedia img="images/avatar/b.jpg" rounded="circle" />
                      <div>
                        <h6 className="fs-7 mb-0 fw-normal">Annette Black</h6>
                        <ul className="nl-list-meta small">
                          <li>Feb 10, 2022</li>
                          <li>8 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" xl="4" >
              <NioCard className="card-blog h-100">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/c.jpg" alt="" className="card-img" />
                  </div>
                  <div className="pt-4">
                    <div className="pb-1">
                      <span className="badge rounded-pill text-bg-primary-soft">Growth</span>
                    </div>
                    <Link className="d-inline-block fs-5 text-dark fw-bold" to="/blog-details">How to build the ultimate tech stack for growth</Link>
                    <div className="d-flex align-items-center gap-3 pt-4">
                      <NioMedia img="images/avatar/c.jpg" rounded="circle" />
                      <div>
                        <h6 className="fs-7 mb-0 fw-normal">Ralph Edwards</h6>
                        <ul className="nl-list-meta small">
                          <li>Feb 10, 2022</li>
                          <li>8 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
          <div className="text-center pt-5 pt-lg-7">
            <NioButton href="/blogs" className="btn-outline-primary" label="Browse All Articles" />
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Blog Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <CallToAction />
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

    </AppLayout >
  )
}

export default index