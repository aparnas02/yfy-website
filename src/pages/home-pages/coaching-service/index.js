import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioSection, NioMedia, NioIcon, NioBrand, NioCard, NioSubscribeField } from '../../../components';

// section content 
import NioScrollCarousel from '../../../components/NioScrollCarousel/NioScrollCarousel';
import TestimonialContent from '../../../components/PageComponents/Homepages/Coaching/TestimonialContent/TestimonialContent';

function index() {
  return (
    <AppLayout title="Coaching Service" layoutClass="15">

      {/*  Banner Section Start   */}
      <section className="nl-banner nl-banner-coaching-service bg-dark">
        <div className="nl-banner-wrap">
          <Container>
            <Row className="position-relative justify-content-center justify-content-xl-between">
              <Col lg="8" xl="5">
                <div className="nl-section-head text-center text-xl-start pb-5 pb-md-7 pb-xl-0">
                  <div>
                    <h1 className="display-3 text-white mb-3 mb-lg-5">
                      <span className="text-cyan-200">Grow</span> Faster with A <span className="text-purple-200">Coach</span>
                    </h1>
                    <p className="text-white"> Get the guidance and support you need to accelerate your growth and achieve your goals with a dedicated coach. </p>
                  </div>
                  <div className="pt-5">
                    <NioSubscribeField 
                      variant={3}
                     icon="search before ms-1"
                     btnText="Find A Developer" 
                     placeholder="Try Java Developer, React Dev etc."
                     />
                  </div>
                  <div className="pt-5">
                    <h6 className="text-white fs-7 fw-normal">Trusted by 50k+ Users</h6>
                    <div className="d-flex justify-content-center justify-content-xl-start align-items-center" >
                      <ul className="d-flex align-items-center ">
                        <li>
                          <NioIcon name="star-fill" className="text-yellow me-1" />
                        </li>
                        <li>
                          <NioIcon name="star-fill" className="text-yellow me-1" />
                        </li>
                        <li>
                          <NioIcon name="star-fill" className="text-yellow me-1" />
                        </li>
                        <li>
                          <NioIcon name="star-fill" className="text-yellow me-1" />
                        </li>
                        <li>
                          <NioIcon name="star-fill" className="text-yellow me-1" />
                        </li>
                      </ul>
                      <p className="fs-7 fw-semibold">
                        <span className="me-1 text-white">4.1/5</span>
                        <span className="text-gray-700 fw-semibold">( 14k Reviews )</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xl="6">
                <div className="nl-frame nl-frame-nine">
                  <img src="images/coaching-service/banner-cover.png" alt="banner-cover" />
                  <div className="nl-frame-children nl-frame-children-one">
                    <img src="images/coaching-service/banner-cover-a.png" alt="banner-cover-frame" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-two">
                    <img src="images/coaching-service/banner-cover-b.png" alt="banner-cover-frame" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-three">
                    <img src="images/coaching-service/banner-cover-c.png" alt="banner-cover-frame" />
                  </div>
                  <div className="nl-frame-children nl-frame-children-four">
                    <img src="images/coaching-service/banner-cover-d.png" alt="banner-cover-frame" />
                  </div>
                  <div className="nl-video-btn">
                    <NioMedia
                      size="xxl"
                      rounded="circle"
                      icon="play-fill"
                      lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                      className="text-bg-primary shadow-xl animate animate-infinite animate-pulse animate-duration-1"
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
      <section className="py-7 bg-purple-300">
        <Container fluid className="px-0">
          <NioScrollCarousel selector="feature" margin={12} speed={18}>

            <div className="d-flex align-items-center">
              <span className="d-inline-block me-2">
                <img src="images/coaching-service/star-red.png" alt="icon" />
              </span>
              <h3 className="text-nowrap">Job Search Coaching</h3>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-inline-block me-2">
                <img src="images/coaching-service/star-green.png" alt="icon" />
              </span>
              <h3 className="text-nowrap">Interview Coaching</h3>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-inline-block me-2">
                <img src="images/coaching-service/star-blue.png" alt="icon" />
              </span>
              <h3 className="text-nowrap">Business Mentoring</h3>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-inline-block me-2">
                <img src="images/coaching-service/star-purple.png" alt="icon" />
              </span>
              <h3 className="text-nowrap">Life Coaching</h3>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-inline-block me-2">
                <img src="images/coaching-service/star-yellow.png" alt="icon" />
              </span>
              <h3 className="text-nowrap">Leadership Coaching</h3>
            </div>
          </NioScrollCarousel>
        </Container>
      </section>
      {/*  Features Section End   */}

      {/*  Talents Section Start  */}
      <NioSection className="nl-section-talents py-7 py-lg-120">
        <Row className="align-items-center">
          <Col lg="6">
            <div className="nl-frame nl-frame-ten mb-5 mb-lg-0">
              <img src="images/coaching-service/section-cover-1.png" alt="section-cover" />
              <div className="nl-frame-children nl-frame-children-one">
                <img src="images/coaching-service/section-cover-1-a.png" alt="frame-children" />
              </div>
              <div className="nl-frame-children nl-frame-children-two">
                <img src="images/coaching-service/section-cover-1-b.png" alt="frame-children"  />
              </div>
              <div className="nl-frame-children nl-frame-children-three">
                <img src="images/coaching-service/section-cover-1-c.png" alt="frame-children"  />
              </div>
              <div className="nl-frame-children nl-frame-children-four">
                <img src="images/coaching-service/section-cover-1-d.png" alt="frame-children"  />
              </div>
              <div className="nl-frame-children nl-frame-children-five">
                <img src="images/coaching-service/section-cover-1-e.png" alt="frame-children"  />
              </div>
              <div className="nl-frame-children nl-frame-children-six">
                <img src="images/coaching-service/section-cover-1-f.png" alt="frame-children" />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="ps-lg-5">
              <div className="pb-5">
                <h2 className="nl-section-title mb-3">Trusted by <span className="text-primary">talents</span> around the <span className="text-danger">globe.</span></h2>
                <p className="mb-0">Talents from all corners of the world place their trust in us for unparalleled growth and success. Benefit from our expertise and unlock your full potential today. </p>
              </div>
              <NioButton href="#" label="Learn More" className="btn-dark" />
            </div>
          </Col>
        </Row>
      </NioSection>
      {/*  Talents Section End  */}

      {/*  Startups Section Start  */}
      <NioSection className="bg-gray-900 ">
        <Row className="flex-row-reverse justify-content-between align-items-center">
          <Col lg="6" xl="5">
            <div className="nl-frame mb-5 mb-lg-0 text-center text-xl-end">
              <img src="images/coaching-service/section-cover-2.png" alt="section-cover" />
            </div>
          </Col>
          <Col lg="6" xl="5">
              <div className="pb-5">
                <h2 className="nl-section-title text-white mb-2">Helping the <span className="text-orange-200">startups</span> to get the <span className="text-green-200">best.</span></h2>
                <p className="text-white mb-0"> We specialize in providing comprehensive support to startups, guiding them towards success with our expertise and tailored solutions. Join us on the journey to unlock your startup's full potential. </p>
              </div>
              <NioButton href="#" label="Learn More" className="btn-white" />
          </Col>
        </Row>
      </NioSection>
      {/*  Startups Section End  */}

      {/*  testimonial Section Start  */}
      <NioSection className="nl-section-testimonials bg-purple-300 overflow-hidden" masks={["shape-43"]}>
        <NioSection.Head alignX="center">
          <h2 className="nl-section-title">
            <span className="text-primary">95%</span> Client satisfaction
          </h2>
          <p className="text-dark fw-semibold mb-0">Learning with us is fun, and research shows that it works! Learning a language on Dialect is completely free. </p>
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  testimonial Section End  */}

      {/*  Professional Section Start  */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Head alignX="center">
          <h2 className="nl-section-title">
            <span className="text-danger d-block">Professional</span> Coaching Services
          </h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0 ">
            <Col lg="4" md="6">
              <div className="team-card">
                <div className="team-card-cover">
                  <img src="images/team/e.png" alt="team-member" className="img-fluid" />
                </div>
                <div className="team-card-details text-center flex-column">
                  <h5 className="m-0 text-green-600">Leadership Coaching</h5>
                  <p className="fs-8 line-clamp-2"> Unlock your leadership potential and achieve extraordinary results </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="team-card">
                <div className="team-card-cover">
                  <img src="images/team/f.png" alt="team-member" className="img-fluid" />
                </div>
                <div className="team-card-details text-center flex-column">
                  <h5 className="m-0 text-primary">Career Coaching</h5>
                  <p className="fs-8 line-clamp-2"> Navigate your career with confidence and clarity through </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6">
              <div className="team-card">
                <div className="team-card-cover">
                  <img src="images/team/g.png" alt="team-member" className="img-fluid" />
                </div>
                <div className="team-card-details text-center flex-column">
                  <h5 className="m-0 text-danger">Job Search Coaching</h5>
                  <p className="fs-8 line-clamp-2"> Maximize your job search success with expert guidance </p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Professional Section End  */}

      {/*  Coaching Section Start  */}
      <NioSection className="pb-7 pb-lg-120">
        <Row className="align-items-center justify-content-between text-center text-lg-start pb-5 pb-lg-7">
          <Col lg="5">
            <div className="nl-section-head pb-0">
              <h2 className="nl-section-title">why we are the best <span className="text-cyan-500">coaching</span> site</h2>
              <NioButton href="#" label="Learn More" className="btn-dark mt-5" />
            </div>
          </Col>
          <Col lg="6">
            <p className="ps-lg-7 mt-5 mt-lg-0 ">We work with professionals and leaders who want to build careers that fulfil them intellectually, financially and emotionally. We are providing the best coaching.</p>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-3 gy-lg-5">
            <Col xl="3" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia size="xl" rounded="circle" variant="cyan-600" icon="property-alt fs-3" className="mb-5" />
                  <h5 className="fw-semibold">Best Coaches</h5>
                  <p className="fs-7 line-clamp-2 mb-0"> Experience transformational growth with our team of industry-leading coaches who are committed to your success. </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="3" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia size="xl" rounded="circle" variant="yellow" icon="clock fs-3" className="mb-5" />
                  <h5 className="fw-semibold">Anytime Coaching</h5>
                  <p className="fs-7 line-clamp-2 mb-0"> Get personalized coaching and support whenever you need it, at your convenience. </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="3" lg="4">
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia size="xl" rounded="circle" variant="primary" icon="laptop fs-3" className="mb-5" />
                  <h5 className="fw-semibold">Easy Meeting</h5>
                  <p className="fs-7 line-clamp-2 mb-0"> Streamline your meetings and make collaboration effortless with our easy-to-use meeting platform. </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col xl="3" lg="4" >
              <NioCard className="h-100">
                <NioCard.Body>
                  <NioMedia size="xl" rounded="circle" variant="danger" icon="chat fs-3" className="mb-5" />
                  <h5 className="fw-semibold">Easy Message</h5>
                  <p className="fs-7 line-clamp-2 mb-0"> Communicate effortlessly with our easy messaging platform, enabling seamless collaboration and quick information exchange. </p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Coaching Section End  */}


      {/*  CTA Section Start  */}
      <section className="nl-section bg-red-200 py-7 py-lg-120 overflow-hidden">
        <div className="nl-mask shape-43-a d-none d-lg-block"></div>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8" xxl="6">
                <div className="pb-3">
                  <NioBrand logo="s2" variant="dark" />
                </div>
                <h2 className="mb-5 mb-lg-7">We are trusted by 5k+ clients. Join them to grow your Startup.</h2>
                <NioButton href="#" icon="arrow-right after" label="Find My Coach" className="btn btn-dark"   />
              </Col>
            </Row>
          </Container>
          <div className="nl-frame nl-frame-eleven">
            <div className="nl-frame-children nl-frame-children-one">
              <img src="images/coaching-service/section-cover-1-g.png" alt="section-cover" />
            </div>
            <div className="nl-frame-children nl-frame-children-two">
              <img src="images/coaching-service/section-cover-1-f.png" alt="section-cover" />
            </div>
          </div>
      </section>
      {/*  CTA Section End  */}

      {/*  NewsLetter Section Start   */}
      <NioSection className="nl-section pb-lg-0 bg-gray-900 ">
        <Row className="justify-content-center justify-content-lg-between align-items-center gx-0 pb-5 border-bottom">
          <Col lg="6" xl="4">
            <div className="text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-white text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-7 text-white m-0">Join the 5000+ People That Uses Softnio Products.</p>
            </div>
          </Col>
          <Col md="10" lg="6" xl="4">
            <NioSubscribeField rounded="circle" variant={3} />
          </Col>
        </Row>
      </NioSection>
      {/*  NewsLetter Section End   */}

    </AppLayout >
  )
}

export default index;