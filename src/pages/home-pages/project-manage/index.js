import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioCount, NioMedia, NioSection, NioIcon, NioCard, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/ProjectManage/FaqContent/FaqContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/CollaborationTool/TestimonialContent/TestimonialContent';

function index() {
  return (
    <AppLayout title="Project Manage" footerVariant={8} layoutClass="16">

      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-project-manage overflow-hidden bg-gray">
        <div className="nl-banner-wrap pb-lg-8">
          <Container>
            <Row className="align-items-lg-center">
              <Col lg="6" className="pb-5 pb-md-7 pb-lg-0">
                <div className="text-center text-lg-start">
                  <h1 className="display-3 mb-4 pe-lg-5"> We Boost Growth For Your Startup <span className="text-primary">Business</span>
                  </h1>
                  <p className="text-dark mb-0"> Fuel the growth of your startup business with our comprehensive solutions designed to boost your success and achieve sustainable growth. </p>
                  <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center justify-content-lg-start pt-5">
                    <li>
                      <NioButton href="#" className="btn-primary" label="Get Started" />
                    </li>
                    <li>
                      <NioButton href="#" label="Learn More" className="btn-outline-primary" />
                    </li>
                  </ul>
                  <div className="pt-5">
                    <ul className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-5 gap-xl-7 align-items-center">
                      <li>
                        <NioCount className="d-block h3 m-0" end={259} suffix="k+" />
                        <p className="fs-7 text-dark">Download App</p>
                      </li>
                      <li >
                        <NioCount className="d-block h3 m-0" end={219} suffix="k+" />
                        <p className="fs-7 text-dark">Total Users</p>
                      </li>
                      <li>
                        <NioCount className="d-block h3 m-0" end={25} suffix="k+" />
                        <p className="fs-7 text-dark">Reviews & Ratings</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="nl-frame mb-5 text-center text-lg-end"  >
                  <img src="images/project-manage/banner-cover-1.jpg" alt="project-manage" className="position-relative overflow-hidden rounded-3" />
                  <div className="nl-video-btn ps-lg-6">
                    <NioMedia
                      size="xxl"
                      rounded="circle"
                      icon="play-fill"
                      variant="primary"
                      lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                      className="shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Features Section Start  */}
      <NioSection className="py-7 py-lg-120">
        <Row className="justify-content-center">
          <Col xl="10" xxl="8">
            <h5 className="text-center text-gray-700 fw-normal mb-5">Over <span className="text-dark fw-semibold">32K+ software</span> business growing with NioLand</h5>
            <Row className="gy-2 gap-sm-2 justify-content-center text-center align-items-center">
              {
                ["a", "b", "c", "d", "e"].map((avatar, idx) => (
                  <Col key={idx} xs="4" sm="3" lg="2">
                    <div className="nl-brand"  >
                      <Link to="#">
                        <img src={`images/brands/${avatar}.png`} alt="brand" className="opacity-75" />
                      </Link>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <hr className="my-6 my-lg-7" />
          <Col lg="8">
            <div className="nl-section-head text-center pb-md-0">
              <h2 className="nl-section-title">Delightfully simple and deceptively powerful task management</h2>
              <p>Our task management solution offers a delightful and simple user experience while providing powerful features to effectively manage and organize your tasks.</p>
            </div>
          </Col>
          <Row className="gy-3 gy-lg-5">
            <Col lg="6">
              <NioCard className="flex-sm-row p-5">
                <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                  <img src="images/project-manage/icon-one.png" alt="icon" className="img-fluid flex-shrink" />
                </div>
                <div>
                  <div className="mb-3">
                    <h6 className="mb-1">With You Everywhere</h6>
                    <p className="fs-7 line-clamp-2">What if you could get all your website tasks off your plate and focus only on the fun stuff.</p>
                  </div>
                  <Link to="#" className="btn-link">
                    <NioIcon name="arrow-long-right" />
                    <span>Download Apps</span>
                  </Link>
                </div>
              </NioCard>
            </Col>
            <Col lg="6"  >
              <NioCard className="flex-sm-row p-5">
                <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                  <img src="images/project-manage/icon-two.png" alt="icon" className="img-fluid flex-shrink" />
                </div>
                <div>
                  <div className="mb-3">
                    <h6 className="mb-1">There’s a template for that</h6>
                    <p className="fs-7 line-clamp-2">I must explain to you how all this mistaken idea denou ncing plea sure and praising pain and typesetting.</p>
                  </div>
                  <Link to="#" className="btn-link">
                    <NioIcon name="arrow-long-right" />
                    <span>Start With Templates</span>
                  </Link>
                </div>
              </NioCard>
            </Col>
            <Col lg="6"  >
              <NioCard className="flex-sm-row p-5">
                <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                  <img src="images/project-manage/icon-three.png" alt="icon" className="img-fluid flex-shrink" />
                </div>
                <div>
                  <div className="mb-3">
                    <h6 className="mb-1">Connect with your other tools</h6>
                    <p className="fs-7 line-clamp-2">What if you could get all your website tasks off your plate and focus only on the fun stuff.</p>
                  </div>
                  <Link to="#" className="btn-link">
                    <NioIcon name="arrow-long-right" />
                    <span>See All Features</span>
                  </Link>
                </div>
              </NioCard>
            </Col>
            <Col lg="6" >
              <NioCard className="flex-sm-row p-5">
                <div className="flex-shrink-0 me-sm-4 mb-4 mb-sm-0">
                  <img src="images/project-manage/icon-four.png" alt="icon" className="img-fluid flex-shrink" />
                </div>
                <div>
                  <div className="mb-3">
                    <h6 className="mb-1"> Make Nioland yours</h6>
                    <p className="fs-7 line-clamp-2">Praising pain and typesetting industry has been the indust standard dummy text ever since was complete.</p>
                  </div>
                  <Link to="#" className="btn-link">
                    <NioIcon name="arrow-long-right" />
                    <span>Install integrations</span>
                  </Link>
                </div>
              </NioCard>
            </Col>
          </Row>
        </Row>
      </NioSection>
      {/*  Features Section End   */}

      {/*  About Section Start  */}
      <NioSection className="nl-section-about bg-gradient-25">
        <NioSection.Content>
          <div className="d-flex flex-column gap-7 gap-lg-120">
            <Row className="justify-content-between flex-row-reverse">
              <Col lg="5"  >
                <div className="nl-frame nl-frame-twelve rounded p-5 p-lg-6 bg-yellow-100 text-center mb-5 mb-md-6 mb-lg-0">
                  <img src="images/project-manage/section-cover-1.jpg" alt="section-cover" className="overflow-hidden rounded-3  w-100" />
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/project-manage/section-cover-1-a.png" alt="section-frame" />
                  </div>
                </div>
              </Col>
              <Col lg="6">
                  <h2 className="nl-section-title mb-5 mb-lg-6">What you get with nioland project management</h2>
                  <ul className="nl-timeline has-border">
                    <li className="nl-timeline-item pb-5">
                      <div className="nl-timeline-item-inner">
                        <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                        <div className="nl-timeline-content mt-n2">
                          <h4 className="mb-3">Superior quality of work</h4>
                          <p className="fs-7 text-dark mb-0">
                            Our attention to detail and quality is unmatched in the industry. We’re not just a resource provider but also a key strategic technology partner ready .
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="nl-timeline-item pb-5">
                      <div className="nl-timeline-item-inner">
                        <div className="nl-timeline-symbol text-bg-primary-soft"></div>
                        <div className="nl-timeline-content mt-n2">
                          <h4 className="mb-3">Flexible scaling</h4>
                          <p className="fs-7 text-dark mb-0">
                            We’re not just a resource provider but also a key strategic technology partner ready to meet tasks of any complexity and deliver a high-quality project. 
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="nl-timeline-item">
                      <div className="nl-timeline-item-inner">
                        <div className="nl-timeline-symbol text-bg-danger-soft"></div>
                        <div className="nl-timeline-content mt-n2">
                          <h6 className="mb-3 d-flex align-items-center gap-3 mt-2">Have A Question ?  <NioButton href="/help-center" className="btn-link text-primary" icon="arrow-long-right after" label="Speak to an expert" /> </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
              </Col>
            </Row>
            <Row className="align-items-center justify-content-between">
              <Col lg="5"  >
                <div className="nl-frame nl-frame-twelve-a rounded full p-5 p-lg-6 bg-cyan-200 text-center mb-5 mb-md-6 mb-lg-0">
                  <img src="images/project-manage/section-cover-2.jpg" alt="section-cover" className="overflow-hidden rounded-3 w-100" />
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/project-manage/section-cover-2-a.png" alt="section-frame" />
                  </div>
                </div>
              </Col>
              <Col lg="6">
                  <div className="nl-section-head pb-md-4">
                    <h2 className="mb-3">We Are Here to Make Your Website Look More Elegant and Stylish!</h2>
                    <p className="text-dark">When you`re building a new product and don`t have the exact plan we will help to create a strategy, our attention to detail and quality is unmatched in the industry. We’re not just a resource provider but also a key strategic.</p>
                  </div>
                  <ul className="d-flex flex-column gap-3">
                    <li className="d-flex gap-3 align-items-center">
                      <NioIcon name="check-circle-fill" variant="primary" className="fs-4"/>
                      <div className="ms-0">
                        <p className="fs-7 text-dark">Quality service and support all time.</p>
                      </div>
                    </li>
                    <li className="d-flex gap-3 align-items-center">
                      <NioIcon name="check-circle-fill" variant="primary" className="fs-4" />
                      <div className="ms-0">
                        <p className="fs-7 text-dark">Support for service 24 hours and 7 days in a week.</p>
                      </div>
                    </li>
                  </ul>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection >
      {/*  About Section End */}

      {/* Testimonials Section Start */}
      <NioSection className="nl-section-testimonial py-7 py-lg-120">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="nl-section-head text-center">
              <h2 className="nl-section-title">What our amazing customers say about Codely</h2>
              <p className="mb-0">
                Our amazing customers love Codely for its exceptional service, innovative solutions, and measurable impact on their businesses. Don't just take our word for it, hear it from them!
              </p>
              <ul className="d-flex gap-3 flex-wrap align-items-center justify-content-center pt-5">
                <li>
                  <NioButton href="#" className="btn-primary" label="Get Started" />
                </li>
                <li>
                  <NioButton href="/auth/sign-up" label="Read Case Study" className="btn-outline-primary" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content >
      </NioSection >
      {/* Testimonials Section End */}

      {/* Tools Section Start */}
      <NioSection className="nl-integrate-section bg-gray-200 overflow-hidden" masks={["shape-4-a"]}>
        <NioSection.Head alignX="center" className="position-relative z-1">
          <h2 className="h1 mb-3"> Collab integrates with all your favourite tools. </h2>
          <p>Collab streamlines workflows with seamless integration into your favorite tools. Boost productivity effortlessly.</p>
        </NioSection.Head>
        <NioSection.Content className="position-relative z-1">
          <div className="nl-integrate-tools text-center gap g-5">
            <div>
              <img src="images/collaboration-tool/tool-1.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-2.png" alt="tool-icon" className="tool"   />
              <img src="images/collaboration-tool/tool-3.png" alt="tool-icon" className="tool"   />
              <img src="images/collaboration-tool/tool-4.png" alt="tool-icon" className="tool"  />
              <img src="images/collaboration-tool/tool-5.png" alt="tool-icon" className="tool" />
            </div>
            <div>
              <img src="images/collaboration-tool/tool-6.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-7.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-8.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-9.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-10.png" alt="tool-icon" className="tool" />
              <img src="images/collaboration-tool/tool-11.png" alt="tool-icon" className="tool" />
            </div>
          </div>
          <Row className="justify-content-between align-items-center g-5 pt-5 pt-md-9">
            <Col lg="4">
              <div className="nl-integrate-video">
                <div className="d-flex align-items-center">
                  <div className="nl-video-btn nl-video-btn-s1 text-primary me-4">
                    <NioMedia
                      size="xl"
                      rounded="circle"
                      variant="primary"
                      icon="play-fill fs-3"
                      lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                      className="animate animate-infinite animate-pulse animate-duration-1"
                    />
                  </div>
                  <div>
                    <h4 className="h4">Watch Demo</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <Row className="gy-3 gy-sm-0">
                <Col xs="6" sm="4">
                  <div className="nl-funfact-item">
                    <NioCount className="d-inline-block h2 mb-2 mb-md-3" end={500} suffix="k+" />
                    <div className="h5 fw-normal text-nowrap">Active Users</div>
                  </div>
                </Col>
                <Col xs="6" sm="4">
                  <div className="nl-funfact-item">
                    <NioCount className="d-inline-block h2 mb-2 mb-md-3" end={100} suffix="k+" />
                    <div className="h5 fw-normal text-nowrap">Active Teams</div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="nl-funfact-item">
                    <NioCount className="d-inline-block h2 mb-2 mb-md-3" end={20} suffix="k+" />
                    <div className="h5 fw-normal text-nowrap">Positive Reviews</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Tools Section End   */}

      {/*  faq section start   */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Content>
          <Row className="justify-content-between gx-lg-7">
            <Col lg="4">
              <div className="nl-section-head text-center text-lg-start mt-lg-4 pb-7 pb-lg-0">
                <h2 className="nl-section-title">Frequently Asked Questions</h2>
                <p className="mb-0">
                Find answers to common queries about our products, services, and policies here.
                </p>
                <ul className="d-flex align-items-center gap-3 flex-wrap justify-content-center justify-content-lg-start pt-5">
                  <li>
                    <NioButton href="/help-center" label="Go to support center" className="btn-primary" />
                  </li>
                  <li>
                    <NioButton href="/contact-us-solution" label="Contact Us" className="btn-outline-primary" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="8" >
              <FaqContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  faq section end    */}


      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <NioCard className="bg-4 border-0 rounded-4">
            <NioCard.Body className="p-sm-7 p-xl-80">
              <Row className="justify-content-center gy-5 gy-lg-6">
                <Col lg="10" xxl="8">
                  <div className="nl-section-head text-center pb-0">
                    <h2 className="display-5 mb-2">Start your free 30-day trial</h2>
                    <p className="text-dark">Deliver faster, collaborate better and innovate more effectively without the high price tag or months-long implementation required by other products.</p>
                  </div>
                </Col>
                <Col lg="8" xxl="6"  >
                  <NioSubscribeField btnText="Start Free Trial"/>
                </Col>
              </Row>
            </NioCard.Body>
          </NioCard>
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section End   */}


    </AppLayout >
  )
}

export default index;