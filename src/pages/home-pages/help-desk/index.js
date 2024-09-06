import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioMedia, NioIcon, NioButton, NioCard } from '../../../components';

function index() {
  return (
    <AppLayout title="Help Desk" footerVariant={5} layoutClass="19">

      {/*  Banner Section Start  */}
      <section className="nl-section nl-banner nl-banner-help-desk">
        <div className="nl-banner-wrap pb-lg-120 pb-xxl-200">
          <Container>
            <div className="nl-banner-content">
              <Row className="align-items-center justify-content-center justify-content-xl-between flex-row-reverse">
                <Col xl="5">
                  <div className="nl-frame pb-5 pb-lg-7 pb-xl-0 text-center text-xl-start">
                    <img src="images/help-desk/banner-cover.jpg" alt="banner-cover" className="nl-frame-base"  />
                    <img src="images/help-desk/banner-cover-a.png" alt="banner-cover-frame" className="nl-frame-children"   />
                  </div>
                </Col>
                <Col lg="10" xl="6">
                  <div className="nl-section-head pb-0 text-center text-xl-start">
                    <h1 className="display-3 text-capitalize mb-3 mb-xl-4">Make <span className="text-primary"> customer Service </span>
                       more intelligent.
                    </h1>
                    <p className="mb-0"> We have thoroughly reconsidered every aspect of the customer service experience in order to deliver the most optimal outcomes for both your team and your valued customers. </p>
                    <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-xl-start pt-5">
                      <li>
                        <NioButton href="#" className="btn-primary" label="Get Started" />
                      </li>
                      <li>
                        <NioButton href="#" label="Learn More" className="btn-outline-dark" />
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/* Features Section Start */}
      <NioSection className="bg-purple-200">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">Features</span>
          <h2 className="nl-section-title">Imagine a whole new CRM</h2>
          <p className="mb-0">Experience a whole new level of CRM with our innovative solution, offering advanced features and intuitive design.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="justify-content-center gy-5 gy-xl-0">
            <Col xl="4" md="6"  >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="update" className="mb-5" />
                  <h4 className="text-capitalize">Faster support</h4>
                  <p className="fs-7 text-gray-700 line-clamp-2"> Swift Support for Your Tech Needs - Quick, Reliable, and Efficient Assistance. </p>
                  <NioButton
                    href="#"
                    label="Learn More"
                    icon="arrow-right after"
                    className="btn-link"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="4" md="6"  >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="opt-dot-alt" className="mb-5" />
                  <h4 className="text-capitalize">Smarter automations</h4>
                  <p className="fs-7 text-gray-700 line-clamp-2"> Smarter Automations: Intelligent Solutions for Streamlined Efficiency and Enhanced Productivity. </p>
                  <NioButton
                    href="#"
                    label="Learn More"
                    icon="arrow-right after"
                    className="btn-link"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="4" md="6"  >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="blue-soft" icon="wallet-saving" className="mb-5" />
                  <h4 className="text-capitalize">Serious cost savings</h4>
                  <p className="fs-7 text-gray-700 line-clamp-2"> Unlock Significant Cost Savings with our Efficient Solutions. </p>
                  <NioButton
                    href="#"
                    label="Learn More"
                    icon="arrow-right after"
                    className="btn-link"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/* Features Section End */}

      {/* Platform Section Start */}

      <NioSection className="nl-section-help-desk-feature py-7 py-lg-120">
        <NioSection.Content className="d-flex flex-column gap-7 gap-xl-120">
          <div className="layout-one">
            <Row className="align-items-center justify-content-between gx-xl-7 ">
              <Col xl="7">
                <div className="nl-frame mb-5 mb-md-0">
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/help-desk/section-cover-1-a.jpg" alt="section-frame"  />
                  </div>
                  <div className="nl-frame-children nl-frame-children-two">
                    <img src="images/help-desk/section-cover-1-b.jpg" alt="section-frame" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-three">
                    <img src="images/help-desk/section-cover-1-c.jpg" alt="section-frame"  />
                  </div>
                </div>
              </Col>
              <Col xl="5">
                <div>
                  <div className="nl-section-head pb-5 pb-xl-7">
                    <span className="nl-section-subtitle mb-2">ALL PLATFORMS</span>
                    <h2 className="nl-section-title">Connect with customers anywhere</h2>
                    <p className="mb-0"> Break Barriers, Forge Bonds: Empower Your Business to Connect and Engage with Customers Anywhere </p>
                  </div>
                  <ul className="d-flex flex-column gap-5 gap-xl-6">
                    <li className="d-flex gap-2">
                      <NioMedia rounded="circle" variant="primary-soft" icon="video-fill" className="mb-5" />
                      <div>
                        <h5 className="mb-1">Video Calls</h5>
                        <p className="fs-8 text-gray-700">Seamless Collaboration, Face-to-Face: Elevate Communication and Collaboration with Crystal Clear Video Calls.</p>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <NioMedia rounded="circle" variant="primary-soft" icon="facebook-f" className="mb-5" />
                      <div>
                        <h5 className="mb-1">Social Media</h5>
                        <p className="fs-8 text-gray-700">Boost Your Brand's Presence: Harness the Power of Social Media to Connect, Engage, and Inspire Your Target Audience</p>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <NioMedia rounded="circle" variant="primary-soft" icon="chat-fill" className="mb-5" />
                      <div>
                        <h5 className="mb-1">Live chat</h5>
                        <p className="fs-8 text-gray-700">Instant Support, Real-Time Solutions: Enhance Customer Experience with Live Chat for Quick and Personalized Assistance.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
          <div className="layout-two">
            <Row className="align-items-center justify-content-between flex-row-reverse">
              <Col lg="6">
                <div className="nl-frame mb-5 mb-lg-0">
                  <img src="images/help-desk/section-cover-2.jpg" alt="section-frame" className="w-100"   />
                </div>
              </Col>
              <Col lg="5">
                <div>
                  <div className="nl-section-head pb-5 pb-xl-7">
                    <span className="nl-section-subtitle mb-2">ALWAYS ACCESSIBLE</span>
                    <h2 className="nl-section-title">Provide the best customer solution</h2>
                    <p className="mb-0"> Tailored Excellence: Delivering Personalized and Effective Solutions to Exceed Customer Expectations. </p>
                  </div>
                  <ul className="d-flex flex-column gap-5 gap-lg-6">
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="fs-6 mb-0 text-gray-700">Customized Solutions: We understand that every customer is unique. Our dedicated team goes the extra mile to analyze your specific needs and provides tailored solutions.</p>
                      </div>
                    </li>
                    <li className="d-flex gap-2">
                      <div className="d-flex align-items-center justify-content-center w-24 h-24 rounded-pill text-bg-primary-soft mb-5 flex-shrink-0">
                        <span className="bg-primary d-inline-block w-12 h-12 rounded-pill"></span>
                      </div>
                      <div>
                        <p className="fs-6 mb-0 text-gray-700"> Prompt and Efficient Service: Our commitment to excellence means delivering the best customer solutions promptly. Our skilled professionals are always ready to assist you. </p>
                      </div>
                    </li>
                  </ul>
                  <ul className="d-flex gap-3 flex-wrap align-items-center pt-5 pt-lg-6">
                    <li>
                      <NioButton href="#" className="btn-primary" label="Get Started" />
                    </li>
                    <li>
                      <NioButton href="#" label="Learn More" className="btn-outline-dark" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
      {/* Platform Section End */}

      {/* Offer Section Start */}
      <NioSection className="bg-purple-200">
        <NioSection.Head alignX="center">
          <span className="nl-section-subtitle mb-2">WHAT WE OFFER</span>
          <h2 className="nl-section-title">All the tools for success</h2>
          <p className="mb-0">A comprehensive and dynamic collection of tools, resources, and strategies designed to empower individuals in attaining unparalleled success across all domains of life.</p>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="justify-content-center gy-5 gy-xl-0">
            <Col md="6" lg="4" xl="3"  >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="chat-fill" className="mb-5" />
                  <div className="mb-5">
                    <h4>Live chat</h4>
                    <p className="fs-7 line-clamp-2 text-gray-700"> Instant live chat support for immediate assistance and real-time communication with our knowledgeable team. </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Learn More"
                    icon="arrow-right after"
                    className="btn-link"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" xl="3"  >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="inbox-in-fill" className="mb-5" />
                  <div className="mb-5">
                    <h4>Shared Inboxes</h4>
                    <p className="fs-7 line-clamp-2 text-gray-700"> Efficiently manage on incoming messages with shared inboxes, enabling seamless communication and streamlined teamwork. </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Learn More"
                    icon="arrow-right after"
                    className="btn-link"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" xl="3"  >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="book-fill" className="mb-5" />
                  <div className="mb-5">
                    <h4>Knowledge Base</h4>
                    <p className="fs-7 line-clamp-2 text-gray-700"> A comprehensive knowledge base containing valuable information and resources to provide self-service support and answers to common inquiries. </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Learn More"
                    icon="arrow-right after"
                    className="btn-link"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md="6" lg="4" xl="3" >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded="circle" variant="primary-soft" icon="puzzle-fill" className="mb-5" />
                  <div className="mb-5">
                    <h4>Integrations</h4>
                    <p className="fs-7 line-clamp-2"> Seamlessly connect and integrate various tools and platforms for enhanced functionality, productivity, and workflow efficiency. </p>
                  </div>
                  <NioButton
                    href="#"
                    label="Learn More"
                    icon="arrow-right after"
                    className="btn-link"
                  />
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>

      </NioSection>
      {/* Offer Section End */}

      {/* Goals Section Start */}
      <NioSection className="overlay-bg py-7 py-lg-120" data-bg-image="help-desk/section-cover-3.jpg">
        <NioSection.Content>
          <Row className="justify-content-xl-end">
            <Col xl="8" >
              <NioCard>
                <NioCard.Body className="p-lg-7">
                  <div className="mb-5 mb-xl-40">
                    <h2 className="h1 mb-5 mb-xl-40">Our goal is to impress and exceed the expectations of your customers</h2>
                    <p className="fs-7 text-gray-700 m-0">Our attention to detail and quality is unmatched in the industry. We’re not just a resource provider but also a key strategic technology partner ready .</p>
                  </div>
                  <div>
                    <h4 className="mb-3">Flexible Scaling</h4>
                    <p className="fs-7 text-gray-700 m-0"> We’re not just a resource provider but also a key strategic technology partner ready to meet tasks of any complexity and deliver a high-quality project. </p>
                    <div className="mt-5">
                      <p className="fs-6 fw-bold gap-1  d-flex flex-wrap align-items-center"> Have a Questions ?
                        <NioButton label="Speak To An Expert" icon="arrow-right after" className="p-0 fs-7 fw-semibold text-primary" />
                      </p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Goals Section End */}

      {/* Reviews Section Start */}
      <NioSection className="bg-purple-200">
        <Row className="justify-content-center">
          <Col xl="7" lg="8">
            <div className="nl-section-head text-center">
              <span className="nl-section-subtitle mb-2">reviews</span>
              <h2 className="nl-section-title">NioLand is rated <span className="text-primary">4.9/5 stars</span> in over 2,000 reviews</h2>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col lg="4" md="6">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <div>
                    <ul className="d-flex aling-items-center gap-1 mb-2">
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
                    <h5 className="mb-2 line-clamp-2">We’re building a better application now, thanks to NioLand.</h5>
                    <p className="fs-8 text-gray-700 line-clamp-3"> Thanks to NioLand, our application is undergoing significant improvements, resulting in a better user experience and enhanced features. </p>
                  </div>
                  <div className="d-flex gap-3 flex-wrap align-items-center">
                    <NioMedia
                      size="md"
                      rounded="circle"
                      img="images/avatar/a.jpg"
                    />
                    <div>
                      <h6 className="mb-n1">Wade Warren</h6>
                      <span className="fs-8 ">3 months ago</span>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <div>
                    <ul className="d-flex aling-items-center gap-1 mb-2">
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
                    <h5 className="mb-2 line-clamp-2"> Great Service from a expert support system of NioLand. </h5>
                    <p className="fs-8 text-gray-700 line-clamp-3"> Experience unparalleled service and support from the expert team at NioLand. Our dedicated professionals are committed to providing exceptional assistance and ensuring your satisfaction every step of the way. Trust us to deliver top-notch service that goes above and beyond your expectations. </p>
                  </div>
                  <div className="d-flex gap-3 flex-wrap align-items-center">
                  <NioMedia
                      size="md"
                      rounded="circle"
                      img="images/avatar/b.jpg"
                    />
                    <div>
                      <h6 className="mb-n1">Dianne Russell</h6>
                      <span className="fs-8 ">3 months ago</span>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg="4" md="6">
              <NioCard className="h-100">
                <NioCard.Body className="d-flex flex-column gap-5">
                  <div>
                  <ul className="d-flex aling-items-center gap-1 mb-2">
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
                    <h5 className="mb-2 line-clamp-2"> Pricing is amazing for the small businesses around the world. </h5>
                    <p className="fs-8 text-gray-700 line-clamp-3"> At NioLand, we understand the needs of small businesses and offer affordable pricing options that are tailored to fit your budget. Our flexible pricing plans ensure that you get the most value for your money, allowing you to access our powerful features and services without breaking the bank. Join our global community of small businesses and experience the affordability and quality of our pricing. </p>
                  </div>
                  <div className="d-flex gap-3 flex-wrap align-items-center">
                    <NioMedia
                      size="md"
                      rounded="circle"
                      img="images/avatar/c.jpg"
                    />
                    <div>
                      <h6 className="mb-n1">Jimmy Bartney</h6>
                      <span className="fs-8 ">3 months ago</span>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Reviews Section End */}

      {/* CTA Section Start */}
      <NioSection className="overflow-hidden bg-primary" masks={["shape-5"]}>
        <NioSection.Content>
          <div>
            <Row className="position-relative z-1 justify-content-center">
              <Col>
                <div className="d-flex flex-column gap-5 text-center">
                  <div>
                    <h2 className="h1 text-white mb-2 mb-lg-3">Let's connect and have a conversation.</h2>
                    <p className="mb-0 text-white col-lg-7 mx-lg-auto opacity-75"> Printing and typesetting industry has been the industry's standard dummy text ever when an unknown printer took. </p>
                  </div>
                  <div>
                    <NioButton href="/contact-us" label="Contact Us" className="btn-white text-uppercase fw-semibold" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
      {/* CTA Section End */}

    </AppLayout >
  )
}

export default index;